import * as Sentry from '@sentry/astro';
/**
 * Contact-form endpoint — POST /api/contact
 *
 * Hardened per docs/design/FORMS.md:
 *   - Honeypot field `_gotcha` (bots fill, humans don't)
 *   - Min-fill-time check (5 s) via `_ts` hidden field
 *   - IP-keyed rate limit (1 req per 30 s) — in-memory; upgrade to Upstash for
 *     production volume
 *   - Length + format validation on every field
 *   - HTML-escape user content before email send
 *   - Sends via Resend (EU servers) — see INTEGRATIONS.md §Resend
 *   - On send failure, captures to Sentry without PII
 *   - Returns 503 if RESEND_API_KEY is unset — caller renders the
 *     "Service temporarily unavailable" message; demo deploys without the key.
 *
 * Notification email sent to NOTIFICATION_EMAIL (REQUIRED env var — no fallback).
 * Reply-To header set to the visitor's address so direct-reply works in Gmail.
 */
import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RATE_LIMIT_MS = 30_000;
const MIN_FILL_TIME_MS = 5_000;
const recentSubmissions = new Map<string, number>();

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

function getClientIp(request: Request): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  );
}

export const POST: APIRoute = async ({ request }) => {
  try {
    const ip = getClientIp(request);
    const last = recentSubmissions.get(ip) ?? 0;
    const now = Date.now();
    if (now - last < RATE_LIMIT_MS) {
      return new Response(JSON.stringify({ error: 'Too many requests. Please wait a moment.' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    let fd: FormData;
    try {
      fd = await request.formData();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid request body.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Honeypot
    if (fd.get('_gotcha')) {
      // Silent success — don't tell the bot why it failed
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Min-fill-time
    const tsRaw = fd.get('_ts');
    const ts = typeof tsRaw === 'string' ? Number.parseInt(tsRaw, 10) : 0;
    if (ts > 0 && now - ts < MIN_FILL_TIME_MS) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Field validation
    const name = String(fd.get('name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    const locale = String(fd.get('_locale') ?? 'en').slice(0, 8);

    if (name.length < 2 || name.length > 120) {
      return new Response(JSON.stringify({ error: 'Name must be 2–120 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (!isValidEmail(email)) {
      return new Response(JSON.stringify({ error: 'A valid email is required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    if (message.length < 10 || message.length > 2000) {
      return new Response(JSON.stringify({ error: 'Message must be 10–2000 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Resend integration — gated on API key. Without it, return 503 so the
    // form can render a friendly "Service temporarily unavailable" message.
    const apiKey = import.meta.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn('[contact] RESEND_API_KEY is unset; returning 503');
      return new Response(JSON.stringify({ error: 'Service temporarily unavailable.' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Fail-closed: require both `RESEND_FROM` + `NOTIFICATION_EMAIL` in env.
    // If either is missing we treat the form as not-yet-wired and return 503
    // instead of silently sending to a hardcoded fallback (which would leak
    // the address into the bundled source per the 2026-05-27 security audit L2).
    const fromAddress = import.meta.env.RESEND_FROM;
    const notifyTo = import.meta.env.NOTIFICATION_EMAIL;
    if (!fromAddress || !notifyTo) {
      console.warn('[contact] RESEND_FROM or NOTIFICATION_EMAIL is unset; returning 503');
      return new Response(JSON.stringify({ error: 'Service temporarily unavailable.' }), {
        status: 503,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    // Send notification to the studio inbox
    const sendResult = await resend.emails.send({
      from: `breno-bar contact <${fromAddress}>`,
      to: notifyTo,
      replyTo: email,
      subject: `[breno-bar] New inquiry from ${name} (${locale})`,
      text: `Name:    ${name}\nEmail:   ${email}\nLocale:  ${locale}\nIP:      ${ip}\n\nMessage:\n${message}`,
      html: `
        <h2 style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; margin: 0 0 16px;">New inquiry via breno-bar</h2>
        <table style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 14px; line-height: 1.6;" cellpadding="0" cellspacing="0">
          <tr><td style="color: #6e6e73; padding-right: 16px;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
          <tr><td style="color: #6e6e73; padding-right: 16px;">Email</td><td><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="color: #6e6e73; padding-right: 16px;">Locale</td><td>${escapeHtml(locale)}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 24px 0;" />
        <p style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="border: none; border-top: 1px solid #d2d2d7; margin: 24px 0;" />
        <p style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; color: #86868b;">IP: ${escapeHtml(ip)} · Sent ${new Date().toISOString()}</p>
      `,
    });

    if (sendResult.error) {
      Sentry.captureException(new Error(`Resend send failed: ${sendResult.error.message}`), {
        tags: { source: 'contact-form' },
      });
      return new Response(
        JSON.stringify({ error: 'Could not send message. Please try again or email directly.' }),
        {
          status: 502,
          headers: { 'Content-Type': 'application/json' },
        },
      );
    }

    // Optional auto-confirmation to the visitor
    try {
      await resend.emails.send({
        from: `breno-bar <${fromAddress}>`,
        to: email,
        subject: 'We received your message — breno-bar',
        text: `Hi ${name},\n\nThanks for reaching out. We received your message and will reply within one business day.\n\nIf you don't hear back, check your spam folder or write to ${notifyTo} directly.\n\n— breno-bar\nBerlin`,
      });
    } catch (autoErr) {
      // Auto-confirmation failure is non-fatal — log it but still report success to the user
      Sentry.captureException(autoErr, { tags: { source: 'contact-form-autoconfirm' } });
    }

    recentSubmissions.set(ip, now);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    Sentry.captureException(err, { tags: { source: 'contact-form' } });
    return new Response(JSON.stringify({ error: 'Server error. Please try again.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
