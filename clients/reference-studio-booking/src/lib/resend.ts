/**
 * Resend client — per INTEGRATIONS.md §Resend.
 * Used for trial-signup confirmation emails. No marketing — agency uses
 * client's own marketing tool (Mailchimp / Brevo / etc.) for newsletters.
 */

import { Resend } from 'resend';

export const resend = new Resend(process.env.RESEND_API_KEY);

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'hallo@studio-sereno-yoga.de';
