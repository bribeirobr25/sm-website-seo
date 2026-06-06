import * as Sentry from '@sentry/astro';
/**
 * GBP-check lead endpoint (F3a) — POST /api/gbp-check
 *
 * A specialised, hardened lead-capture form (same protections as the contact
 * endpoint): honeypot, min-fill-time, IP rate-limit, validation, HTML-escape,
 * Resend delivery, no PII to Sentry. The visitor gets the self-check list on the
 * page regardless; this captures the request for a tailored manual review.
 *
 * No Google Places API key is used (avoids per-call cost). If/when a key is
 * added, this can be enriched server-side — the page contract stays the same.
 * Fail-closed: 503 if Resend isn't configured (demo deploys without the key).
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RATE_LIMIT_MS = 30_000;
const MIN_FILL_TIME_MS = 4_000;
const recent = new Map<string, number>();

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) && s.length <= 320;
}
function clientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}
function json(body: unknown, status: number): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = clientIp(request);
    const now = Date.now();
    if (now - (recent.get(ip) ?? 0) < RATE_LIMIT_MS) {
      return json({ error: 'Too many requests. Please wait a moment.' }, 429);
    }

    let fd: FormData;
    try {
      fd = await request.formData();
    } catch {
      return json({ error: 'Invalid request body.' }, 400);
    }

    if (fd.get('_gotcha')) return json({ ok: true }, 200); // honeypot
    const tsRaw = fd.get('_ts');
    const ts = typeof tsRaw === 'string' ? Number.parseInt(tsRaw, 10) : 0;
    if (ts > 0 && now - ts < MIN_FILL_TIME_MS) return json({ ok: true }, 200);

    const business = String(fd.get('business') ?? '').trim();
    const city = String(fd.get('city') ?? '').trim();
    const website = String(fd.get('website') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const locale = String(fd.get('_locale') ?? 'en').slice(0, 8);

    if (business.length < 2 || business.length > 160) {
      return json({ error: 'Business name must be 2–160 characters.' }, 400);
    }
    if (!isValidEmail(email)) {
      return json({ error: 'A valid email is required.' }, 400);
    }
    if (city.length > 120 || website.length > 2048) {
      return json({ error: 'Input too long.' }, 400);
    }

    const apiKey = import.meta.env.RESEND_API_KEY;
    const fromAddress = import.meta.env.RESEND_FROM;
    const notifyTo = import.meta.env.NOTIFICATION_EMAIL;
    if (!apiKey || !fromAddress || !notifyTo) {
      return json({ error: 'Service temporarily unavailable.' }, 503);
    }

    const resend = new Resend(apiKey);
    const sendResult = await resend.emails.send({
      from: `breno-bar GBP check <${fromAddress}>`,
      to: notifyTo,
      replyTo: email,
      subject: `[breno-bar] GBP check request — ${business} (${locale})`,
      text: `Business: ${business}\nCity:     ${city}\nWebsite:  ${website}\nEmail:    ${email}\nLocale:   ${locale}`,
      html: `
        <h2 style="font-family: -apple-system, sans-serif; margin: 0 0 16px;">Google Business check request</h2>
        <table style="font-family: -apple-system, sans-serif; font-size: 14px; line-height: 1.6;" cellpadding="0" cellspacing="0">
          <tr><td style="color:#6e6e73;padding-right:16px;">Business</td><td><strong>${escapeHtml(business)}</strong></td></tr>
          <tr><td style="color:#6e6e73;padding-right:16px;">City</td><td>${escapeHtml(city)}</td></tr>
          <tr><td style="color:#6e6e73;padding-right:16px;">Website</td><td>${escapeHtml(website)}</td></tr>
          <tr><td style="color:#6e6e73;padding-right:16px;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="color:#6e6e73;padding-right:16px;">Locale</td><td>${escapeHtml(locale)}</td></tr>
        </table>
      `,
    });

    if (sendResult.error) {
      Sentry.captureException(new Error(`Resend send failed: ${sendResult.error.message}`), {
        tags: { source: 'gbp-check' },
      });
      return json({ error: 'Could not send. Please try again or email directly.' }, 502);
    }

    recent.set(ip, now);
    return json({ ok: true }, 200);
  } catch (err) {
    Sentry.captureException(err, { tags: { source: 'gbp-check' } });
    return json({ error: 'Server error. Please try again.' }, 500);
  }
};
