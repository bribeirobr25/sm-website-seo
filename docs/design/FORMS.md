# FORMS.md — Form Handling Patterns
## Small Business Website + SEO + Google Business Agency

**Applies to:** Type 2+ — any project with a user-submitted form. **Skip entirely for Type 1** (info-only sites where the CTA is phone / WhatsApp / maps).

- **Type 2 (Info + contact):** Sections 1–4, 8–10 — full form UX + server validation + honeypot + rate limit + accessibility + error states. Idempotency (§5) applies the moment the form has a real side effect (ESP send).
- **Type 3+ (DB-backed forms):** All of the above + Sections 6 (email enumeration prevention) and 7 (DOMPurify for any rich-text input)
- **Type 4+:** All of the above + payment-form-specific hardening (not yet in this doc; will be added when first Type 4 client appears)

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for form handling — contact forms, booking forms, newsletter signups, waitlists, any form a client site might ship. Forms are the single highest-risk component on a local-business site: a defect here leaks PII, enables abuse, or silently drops a lead.

Other standards docs reference this doc by name, never by section. Security overlaps with `SECURITY.md` (form security headers, CSRF) and reliability with `RELIABILITY.md` (recovery when ESP is down) — those docs hold the cross-cutting concerns; this doc holds the form-specific patterns.

---

## Rules at a glance

- **Server-side validation is non-negotiable.** Zod (or equivalent) validates every field on the API route, regardless of what the client did.
- **Honeypot field on every form** — a hidden `_gotcha` input. Reject any submission where it's non-empty.
- **Rate limit by IP** at the API route — strict tier (5 req / 60 s) for sensitive forms, standard tier for less-sensitive.
- **Idempotency key** on any form that triggers an external side effect (email, DB write). Duplicate submissions get the cached response.
- **No PII in client code, logs, or analytics events.** Server-side processing only; encrypt at rest if stored.
- **Email enumeration prevention** on any form that checks if an email already exists.
- **Sanitize all input before placing it in email body, DB, or HTML.** DOMPurify for HTML; `sanitizeText()` helper for plain fields.
- **Every form has a visible label** — `<label for>`, not just `placeholder`. Errors are announced via `aria-live`.
- **Honor the `Cancel` and `Esc` keys.** Modal forms close; non-modal forms reset.

---

## Table of contents

1. [Form lifecycle](#1-form-lifecycle)
2. [Client-side: markup and UX](#2-client-side-markup-and-ux)
3. [Server-side: validation and sanitization](#3-server-side-validation-and-sanitization)
4. [Honeypot and rate limiting](#4-honeypot-and-rate-limiting)
5. [Idempotency](#5-idempotency)
6. [Email enumeration prevention](#6-email-enumeration-prevention)
7. [DOMPurify for rich text](#7-dompurify-for-rich-text)
8. [Error states and recovery](#8-error-states-and-recovery)
9. [Accessibility](#9-accessibility)
10. [Success state](#10-success-state)
11. [Tools](#11-tools)

---

## 1. Form lifecycle

```
[User fills form]
       │
       ▼
[Client-side validation] ── invalid? ──► inline error message, focus first invalid field
       │ valid
       ▼
[POST to /api/<endpoint>] (with idempotency-key header)
       │
       ▼
[Rate limit check] ── exceeded? ──► 429 with Retry-After header
       │ ok
       ▼
[CSRF check (Origin/Referer)] ── fail? ──► 403
       │ ok
       ▼
[Honeypot check] ── filled? ──► 200 with generic success (silent reject)
       │ empty
       ▼
[Zod parse + sanitize] ── invalid? ──► 400 with field errors
       │ valid
       ▼
[Idempotency check] ── duplicate? ──► return cached response
       │ new
       ▼
[Side effect: email send / DB write] ── fail? ──► retry with backoff, then 500
       │ success
       ▼
[Cache idempotent response] → return 200 with public-safe payload
       │
       ▼
[Client: render success state] (clear form, show confirmation)
```

Every gate above the side-effect layer is mandatory. The side-effect layer's retry/fallback is covered in `RELIABILITY.md`.

---

## 2. Client-side: markup and UX

### Required structure

```html
<form id="contact-form" novalidate>
  <!-- Honeypot (hidden, off-tab, off-screen-reader) -->
  <input
    type="text"
    name="_gotcha"
    tabindex="-1"
    autocomplete="off"
    style="position:absolute;left:-9999px;"
    aria-hidden="true"
  />

  <div class="field">
    <label for="contact-name">Name</label>
    <input
      id="contact-name"
      name="name"
      type="text"
      required
      minlength="2"
      maxlength="100"
      autocomplete="name"
    />
    <p class="error" id="contact-name-error" aria-live="polite"></p>
  </div>

  <div class="field">
    <label for="contact-email">E-Mail</label>
    <input
      id="contact-email"
      name="email"
      type="email"
      required
      maxlength="254"
      autocomplete="email"
      inputmode="email"
    />
    <p class="error" id="contact-email-error" aria-live="polite"></p>
  </div>

  <div class="field">
    <label for="contact-message">Nachricht</label>
    <textarea
      id="contact-message"
      name="message"
      required
      minlength="10"
      maxlength="2000"
      rows="6"
    ></textarea>
    <p class="error" id="contact-message-error" aria-live="polite"></p>
  </div>

  <button type="submit">Nachricht senden</button>
  <p class="status" aria-live="polite" aria-atomic="true"></p>
</form>
```

### Rules

- **`novalidate` on the form** disables the browser's default validation popup. The custom UI is friendlier and accessible.
- **Every input has a `<label for>`.** Placeholders disappear when typing; labels persist. Both is fine; placeholder-only is forbidden.
- **`autocomplete` on every field.** `name`, `email`, `tel`, `street-address`, `postal-code`, `organization`. Saves the user 4 seconds and reduces typos.
- **`maxlength` matches the server-side Zod schema.** A user typing past the limit silently gets cut off — that's the right UX vs. a server-side rejection on submit.
- **`inputmode`** on numeric/email inputs surfaces the correct mobile keyboard. `inputmode="email"`, `inputmode="numeric"`, `inputmode="tel"`.
- **Error messages live in dedicated `<p aria-live="polite">` elements** next to each field, not as floating tooltips. Screen readers announce them as the user types.
- **Submit button is disabled during in-flight request** and shows a loading state ("Wird gesendet…"). Prevents double-submission at the UX layer.
- **The honeypot field name is `_gotcha`** (Netlify convention) — bots are trained to fill anything that looks like an email or name input, including hidden ones. The name matters less than the absolute positioning and `tabindex="-1"`.

---

## 3. Server-side: validation and sanitization

### Zod schema is the contract

```typescript
// src/lib/forms/contactSchema.ts
import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2).max(100).trim(),
  email: z.string().email().max(254).toLowerCase().trim(),
  message: z.string().min(10).max(2000).trim(),
  // Honeypot — must be empty
  _gotcha: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

### API route — Astro / Next.js shape

```typescript
// src/pages/api/contact.ts (Astro)
import type { APIRoute } from 'astro';
import { contactSchema } from '@/lib/forms/contactSchema';
import { applyRateLimit, applyCsrf } from '@/lib/api/routeHelpers';
import { sanitizeText } from '@/lib/utils/sanitize';
import { sendContactEmail } from '@/lib/email';

export const POST: APIRoute = async ({ request }) => {
  // 1. Rate limit
  const limited = await applyRateLimit(request, 'strict');
  if (limited) return limited;

  // 2. CSRF
  const csrfFailed = applyCsrf(request);
  if (csrfFailed) return csrfFailed;

  // 3. Parse + validate
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  // 4. Honeypot: respond success even on bot trigger (silent reject)
  if (body?._gotcha) {
    return Response.json({ ok: true });
  }

  if (!parsed.success) {
    return Response.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  // 5. Sanitize what touches HTML / external systems
  const safe = {
    name: sanitizeText(parsed.data.name),
    email: parsed.data.email,
    message: sanitizeText(parsed.data.message),
  };

  // 6. Side effect (with retry — see RELIABILITY.md)
  const result = await sendContactEmail(safe);
  if (!result.ok) {
    return Response.json(
      { ok: false, error: 'delivery_failed' },
      { status: 500 }
    );
  }

  return Response.json({ ok: true });
};
```

### `sanitizeText` — the canonical helper

```typescript
// src/lib/utils/sanitize.ts
export function sanitizeText(input: string): string {
  return input
    .replace(/[<>]/g, '')         // strip angle brackets
    .replace(/javascript:/gi, '') // strip javascript: URLs
    .replace(/\s+/g, ' ')         // collapse whitespace
    .trim()
    .slice(0, 5000);              // hard cap
}
```

Apply it to **anything that ends up in an email body, log line, or HTML render path**. The Zod `trim()` doesn't replace this — Zod validates shape, `sanitizeText` defends against content.

### What never goes in logs

- Email addresses (`user@example.com`)
- Phone numbers
- Full names
- IP addresses (without anonymization)
- Request bodies

Log instead: an event name, a sanitized error category, a request ID. Correlation through request IDs (`x-request-id` header) gives debugging power without leaking PII.

---

## 4. Honeypot and rate limiting

### Honeypot

- Field name: `_gotcha` (or `_website`, `url`, `phone2` — any plausible-looking name)
- Hidden via `position: absolute; left: -9999px;`, NOT `display: none` (some bots respect display:none)
- `tabindex="-1"` to skip in keyboard nav
- `aria-hidden="true"` to hide from screen readers
- `autocomplete="off"` so password managers don't fill it
- **On the server, a non-empty honeypot returns `200 { ok: true }`** — the bot thinks it succeeded and moves on. **Do not return 400 or log the IP** — that just trains bot operators to fix their script.

### Rate limiting tiers

| Tier | Limit | Use for |
|------|-------|---------|
| Strict | 5 req / 60 s | Contact form, waitlist signup, password reset |
| Standard | 30 req / 60 s | Position lookup, referral link generation, non-mutating queries |
| Lenient | 100 req / 60 s | Read-only endpoints, public stats |

Upstash Redis is the production store; in-memory fallback for development and demo deploys. On rate-limit hit, return:

```
HTTP/1.1 429 Too Many Requests
Content-Type: application/json
Retry-After: 60
X-RateLimit-Limit: 5
X-RateLimit-Remaining: 0
X-RateLimit-Reset: <unix-timestamp>

{ "ok": false, "error": "rate_limited", "retryAfter": 60 }
```

The client renders a friendly message: "Zu viele Anfragen — bitte in einer Minute erneut versuchen." Never expose the raw 429 payload.

---

## 5. Idempotency

Any form whose submission triggers a side effect (email, DB row, payment, GBP post) must accept an `idempotency-key` header. The pattern:

1. Client generates a UUID per "intent" (one per form open, regenerated after successful submit).
2. Client sends the UUID as `idempotency-key` header on POST.
3. Server caches the response by `(idempotency-key, endpoint)` for 5 minutes.
4. A second request with the same key returns the cached response.

```typescript
// In the API route, before the side effect:
const key = request.headers.get('idempotency-key');
if (key) {
  const cached = await idempotencyStore.get(`contact:${key}`);
  if (cached) return Response.json(cached);
}

// ... side effect runs ...

if (key) {
  await idempotencyStore.set(`contact:${key}`, response, { ttl: 300 });
}
return Response.json(response);
```

**Why this matters:** users double-click submit. Network retries on flaky mobile connections. Without idempotency, you get two emails sent, two database rows, two emails in the client's inbox. Costly and unprofessional.

Storage: PostgreSQL when `DATABASE_URL` is set, in-memory Map (5-minute TTL, 10K-entry cap) as fallback. Both implementations in `src/lib/security/idempotency.ts`.

---

## 6. Email enumeration prevention

If a form checks whether an email is already in the system (waitlist, login, password reset), the response **must not reveal** whether the email exists. Two patterns are required:

1. **Identical response shape** for "new" and "existing" email.
2. **Artificial delay** to mask the timing difference between a DB hit and miss.

```typescript
// Waitlist signup
export const POST: APIRoute = async ({ request }) => {
  const { email } = await parseAndValidate(request);

  // Add 100–300 ms random delay BEFORE any DB query
  await sleep(100 + Math.random() * 200);

  const existing = await db.query('SELECT 1 FROM waitlist WHERE email_hash = $1', [hashEmail(email)]);

  if (existing.rowCount > 0) {
    return Response.json({ ok: true, message: 'Wir melden uns bald.' });
  }

  await db.query('INSERT INTO waitlist ...');
  return Response.json({ ok: true, message: 'Wir melden uns bald.' });
};
```

Same message, same status, same shape. The user gets a confirmation either way; an attacker can't enumerate the email list.

For "did you already signup?" UX, use a separate GET endpoint that returns generic info regardless of email existence:

```typescript
// GET /api/waitlist/check?email=...
// Always returns: { ok: true, message: 'If your email is registered, you will receive an update.' }
```

This is GDPR-aligned and source-project-tested. Don't get clever; copy the pattern exactly.

---

## 7. DOMPurify for rich text

Any form field that renders back to a user as HTML (testimonial submission, blog comments, FAQ contributions) is a potential XSS vector. **DOMPurify is mandatory** wherever `dangerouslySetInnerHTML` (or its Astro / vanilla DOM equivalent) is used:

```typescript
// src/lib/security/htmlSanitizer.ts
import DOMPurify from 'isomorphic-dompurify';

const ALLOWED_TAGS = ['p', 'strong', 'em', 'br', 'a', 'ul', 'ol', 'li'];
const ALLOWED_ATTRIBUTES = ['href', 'target', 'rel'];

export function sanitizeHtml(input: string): string {
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS,
    ALLOWED_ATTR: ALLOWED_ATTRIBUTES,
    ALLOW_DATA_ATTR: false,
  });
}
```

**Rules:**
- **Allowlist, not denylist.** List the tags you allow; everything else is stripped.
- **Run on the server before storing**, NOT on the client before rendering. Client-side sanitization is defense-in-depth; server-side is the actual gate.
- **Run on the client too** if displaying user-generated content (because data could have been written before sanitization was added).
- **Strip `target` unless you also force `rel="noopener noreferrer"`** to prevent `window.opener` attacks.

For local-business sites, most contact forms don't accept HTML. **Plain-text-only forms don't need DOMPurify — they need `sanitizeText`** from Section 3. DOMPurify is for the FAQ-submission / review-collection retainer features when they ship.

---

## 8. Error states and recovery

Every form must handle these states:

| State | UX | Server response |
|-------|----|----|
| Field validation failure | Inline error under the field, focus on first invalid field | 400 with `{ errors: { fieldName: ['…'] } }` |
| Rate limit hit | Banner: "Zu viele Anfragen — versuchen Sie es in einer Minute erneut" | 429 with `Retry-After` |
| Network failure (offline) | Banner: "Keine Internetverbindung — Nachricht gespeichert. Bitte später erneut senden." | n/a — never reaches server |
| Server error (500) | Banner: "Es ist ein Fehler aufgetreten. Bitte rufen Sie uns direkt an: [phone]." | 500 with `{ error: 'internal' }` |
| ESP delivery failure | Same as 500 — server retries before returning 500 (see `RELIABILITY.md`) | 500 |
| Honeypot triggered | Success UI (silent reject) | 200 |
| Already-submitted (idempotency hit) | Same success state — no special UI | 200 with cached response |

**The "we can't email but here's the phone" pattern is non-negotiable for local business sites.** The contact form is one path; the call is the redundancy. Always fall back to a clickable `tel:` link in the error banner.

---

## 9. Accessibility

Forms are the most accessibility-sensitive interactive element on a local-business site. The full a11y rules live in `ACCESSIBILITY.md`; the form-specific requirements:

- **Every input has a visible `<label for>`.** Placeholder-only is forbidden.
- **Required fields marked with both `required` attribute and a visual indicator** (asterisk, "required" text). Color alone is forbidden.
- **Errors announced via `aria-live="polite"`** on a dedicated element next to each field.
- **`aria-invalid="true"`** set on inputs with validation errors.
- **`aria-describedby`** connects help text and error messages to their input.
- **Submit button text changes during in-flight** ("Senden" → "Wird gesendet…") and the change is announced.
- **Success message is keyboard-focused after submit** so screen readers announce the confirmation.
- **`Esc` closes modal forms** and `Cancel` button resets non-modal forms.
- **Focus does not leave the form mid-fill** unless the user explicitly navigates away.

---

## 10. Success state

After successful submission:

1. **Clear the form** — or replace the form with a confirmation message
2. **Focus moves to the confirmation message** (programmatic `.focus()` on the heading)
3. **Confirmation text is specific**: "Vielen Dank — wir melden uns innerhalb von 24 Stunden bei [user@email.com]"
4. **A secondary action is offered** — "Brauchen Sie uns sofort? Rufen Sie an: +49 30 …"
5. **Analytics event fires** (see `ANALYTICS.md`): `contact_form_submission_success` with `{ locale, timestamp }` — no PII
6. **No redirect-to-thank-you-page** unless required for conversion tracking — the inline confirmation is more responsive and accessible

---

## 11. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| Zod | Free | [zod.dev](https://zod.dev/) | Server-side validation with TypeScript-first DX. The canonical agency choice. |
| Resend | Freemium | [resend.com](https://resend.com/) | Transactional email — 100/day free tier, simple API, good deliverability. |
| Upstash Redis | Freemium | [upstash.com](https://upstash.com/) | Rate-limit + idempotency storage. 10k requests/day free tier covers most agency-tier sites. |
| isomorphic-dompurify | Free | [github.com/kkomelin/isomorphic-dompurify](https://github.com/kkomelin/isomorphic-dompurify) | DOMPurify packaged for both browser and Node. |
| Cloudflare Turnstile | Free | [developers.cloudflare.com/turnstile](https://developers.cloudflare.com/turnstile/) | Optional bot-protection upgrade beyond honeypot. Privacy-friendly alternative to reCAPTCHA. |

**Recommended stack for the typical contact form:**
- Zod for validation
- Resend for email delivery
- Upstash Redis for rate limiting (or in-memory if demo / dev only)
- Honeypot only — no Turnstile unless honeypot proves insufficient

Add Turnstile / hCaptcha only when honeypot + rate-limit fail to stop a real abuse problem. Premature CAPTCHA hurts conversion more than it stops bots.
