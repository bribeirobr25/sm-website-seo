/**
 * Resend client — per INTEGRATIONS.md §Resend.
 * Used for trial-signup confirmation emails. No marketing — agency uses
 * client's own marketing tool (Mailchimp / Brevo / etc.) for newsletters.
 *
 * Lazy-initialized — the Resend SDK throws on construction when the API key
 * is missing, which would fire during Next.js page-data collection + CI
 * builds. Same pattern as `db.ts` and `ratelimit.ts`.
 */

import { Resend } from 'resend';

let _resend: Resend | undefined;

export function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'hallo@studio-sereno-yoga.de';
