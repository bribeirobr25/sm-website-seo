/**
 * POST /api/trial — trial-class signup endpoint.
 *
 * Pipeline:
 *  1. Rate limit (Upstash, 5/min/IP, hashed key) — INTEGRATIONS.md §Upstash
 *  2. Honeypot check (silent 200 to fool bots)
 *  3. Zod validation
 *  4. Neon insert via Drizzle (DSGVO Art. 6(1)(b) — Vertragserfüllung)
 *  5. Resend confirmation email — INTEGRATIONS.md §Resend
 *  6. Sentry capture on failure (send_default_pii: false — sentry.*.config.ts)
 *
 * Errors return a generic message; details go to Sentry, never to the client.
 */

import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';
import * as Sentry from '@sentry/nextjs';
import { getDb } from '@/lib/db';
import { trialSignups } from '@/lib/schema';
import { getResend, FROM_EMAIL } from '@/lib/resend';
import { getTrialSignupLimit, hashIp } from '@/lib/ratelimit';
import { SITE } from '@/lib/site';

export const runtime = 'nodejs';

const CLASS_SLUGS = SITE.classes.map((c) => c.slug) as [string, ...string[]];

const TrialSchema = z.object({
  firstName: z.string().trim().min(2).max(80),
  email: z.string().trim().toLowerCase().email().max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .nullable()
    .optional()
    .transform((v) => (v && v.length > 0 ? v : null)),
  classSlug: z.enum(CLASS_SLUGS),
  preferredDate: z
    .string()
    .nullable()
    .optional()
    .transform((v) => (v && v.length > 0 ? v : null)),
  experienceBand: z.enum(['never', 'occasional', 'regular']),
  consentToContact: z.literal(true, {
    errorMap: () => ({ message: 'Einwilligung erforderlich.' }),
  }),
  website: z.string().max(0).optional(), // honeypot
});

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  const ip = clientIp(req);
  const ipKey = hashIp(ip);

  // 1. Rate limit
  const limit = await getTrialSignupLimit().limit(ipKey);
  if (!limit.success) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuche es in einer Minute erneut.' },
      { status: 429 },
    );
  }

  // 2 + 3. Parse & validate
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 });
  }

  const parsed = TrialSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Bitte überprüfe die eingegebenen Daten.' },
      { status: 400 },
    );
  }

  // Honeypot — silent success to avoid signalling the trap
  if (parsed.data.website && parsed.data.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { firstName, email, phone, classSlug, preferredDate, experienceBand } = parsed.data;

  // 4. Insert
  try {
    await getDb().insert(trialSignups).values({
      firstName,
      email,
      phone,
      classSlug,
      preferredDate,
      experienceBand,
      consentToContact: true,
      ipHash: ipKey,
    });
  } catch (err) {
    Sentry.captureException(err, {
      tags: { route: 'api/trial', stage: 'db_insert' },
    });
    return NextResponse.json(
      { error: 'Speichern fehlgeschlagen. Bitte später erneut versuchen.' },
      { status: 500 },
    );
  }

  // 5. Confirmation email (non-blocking failure)
  const className = SITE.classes.find((c) => c.slug === classSlug)?.name ?? classSlug;
  try {
    await getResend().emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `${SITE.name} — Wir haben deine Probestunden-Anfrage erhalten`,
      text: [
        `Hi ${firstName},`,
        '',
        `vielen Dank für deine Anfrage für eine Probestunde (${className}) bei ${SITE.name}.`,
        '',
        'Wir melden uns innerhalb von 24 Stunden per E-Mail oder Telefon mit der Terminbestätigung.',
        '',
        `Studio-Adresse: ${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`,
        '',
        'Bis bald auf der Matte,',
        SITE.founder,
      ].join('\n'),
    });
  } catch (err) {
    // Email failure is non-fatal — booking is already stored.
    Sentry.captureException(err, {
      tags: { route: 'api/trial', stage: 'email_send', severity: 'soft' },
    });
  }

  return NextResponse.json({ ok: true });
}
