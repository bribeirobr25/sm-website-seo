# SECURITY.md — Web Security Standards
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5), with per-section activation:

- **Universal at every type (Sections 1–4, 6, 7, 9):** TLS / HTTPS, the 6 security headers, `vercel.json` recipe, German legal (Impressum + DSGVO), malware/blacklist monitoring, pre-launch security gates
- **Activates at Type 2+ (Sections 5, 8):** Contact-form hardening (covered in detail in `FORMS.md`); 90-day secret rotation cadence kicks in the moment any API key exists
- **Activates at Type 3+ (Section 3 CSP nonce upgrade):** Per-request nonce pattern — requires Next.js middleware. Tier 1/2 use the static CSP above instead
- **Type 4+ (not yet in this doc):** Payment / PCI handling — will be added when first Type 4 client appears
- **Type 5 only (not yet in this doc):** Auth, session security, GDPR data subject rights — will be added when first Type 5 client appears

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for web security. Local-business sites are low-value targets in isolation, but a defaced or blacklisted site is a client trust catastrophe — and for German-market sites, header configuration borders on DSGVO/GDPR hygiene. The rules below are the floor.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **HTTPS everywhere.** Vercel provides this automatically — verify SSL Labs grade A+ before handoff.
- **Six security headers** in `vercel.json` on every production site: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy.
- **No secrets in frontend code.** API keys live in environment variables and are accessed only from server routes.
- **Contact forms always have:** server-side Zod validation, honeypot, rate limiting, sanitized output.
- **German-market sites must ship Impressum + Datenschutzerklärung before going live.** Non-negotiable legal requirement.
- **Run the pre-launch security pass** (SSL Labs, SecurityHeaders, MDN Observatory, Internet.nl, Sucuri SiteCheck, Safe Browsing) on every production cutover.

---

## Table of contents

1. [Baseline — what every client site must have](#1-baseline--what-every-client-site-must-have)
2. [TLS / HTTPS](#2-tls--https)
3. [Security headers](#3-security-headers)
4. [`vercel.json` recipe](#4-verceljson-recipe)
5. [Contact forms](#5-contact-forms)
6. [German legal requirements](#6-german-legal-requirements)
7. [Malware and blacklist monitoring](#7-malware-and-blacklist-monitoring)
8. [Secret rotation cadence](#8-secret-rotation-cadence)
9. [Pre-launch security gates](#9-pre-launch-security-gates)
10. [Tools](#10-tools)

---

## 1. Baseline — what every client site must have

| Requirement | Why |
|-------------|-----|
| HTTPS enforced | Vercel provides this automatically |
| No secrets in client code | Never put API keys in frontend code |
| Six HTTP security headers | Protect against common attacks (XSS, clickjacking, MIME sniffing) |
| Content Security Policy | Mitigate XSS |
| Impressum (German sites) | **Legal requirement** in Germany |
| Privacy Policy + Cookie Policy | **Legal requirement** under DSGVO/GDPR |
| SSL Labs grade A+ | Verifiable proof of TLS configuration |
| Not on Google Safe Browsing blocklist | Verifiable proof of clean reputation |

---

## 2. TLS / HTTPS

Vercel terminates TLS at the edge using Let's Encrypt certificates renewed automatically. You get HTTPS by default the moment a domain is attached — no opt-in.

**What you still need to verify:**

- Run SSL Labs against the production domain (`https://www.ssllabs.com/ssltest/`). Target grade: **A+**. A or below = investigate.
- Ensure no mixed content. Any `http://` URL in the page (image src, link href, script src, CSS `url(...)`) breaks the green padlock and downgrades the grade.
- HSTS is set (covered by the headers in Section 4) so browsers refuse to downgrade.

---

## 3. Security headers

Every production site ships these six headers. The first four are universal; CSP requires per-site tuning because it depends on which third parties the site loads.

| Header | Value (default) | Why |
|--------|----------------|-----|
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS for 2 years; browsers refuse downgrade |
| `X-Frame-Options` | `DENY` | Prevents the page being embedded in an `<iframe>` — anti-clickjacking |
| `X-Content-Type-Options` | `nosniff` | Stops browsers from MIME-sniffing files into executable content |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits the URL info leaked to third parties |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Denies powerful APIs we don't use |
| `Content-Security-Policy` | per-site | Tightens which origins can load scripts, styles, fonts, images, frames |

**CSP construction:** start strict, then enumerate exceptions for each third party (analytics, embedded maps, fonts if not self-hosted, contact-form endpoints). For a typical Astro local-business site with self-hosted fonts and no analytics:

```
default-src 'self';
img-src 'self' data:;
style-src 'self' 'unsafe-inline';
script-src 'self';
font-src 'self';
connect-src 'self';
frame-ancestors 'none';
```

`'unsafe-inline'` on `style-src` is a Tailwind/Astro pragma; tightening it requires a nonce strategy that is rarely worth the complexity for this tier of site.

### CSP nonce upgrade — Tier 3 only

When a site grows interactive enough to need a Next.js API surface (contact form, booking, GBP integration), the static CSP above can be tightened with a **per-request nonce on `script-src`**. The pattern, lifted from the source projects:

```typescript
// middleware.ts — generate nonce per request
import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const nonce = crypto.randomUUID();
  const response = NextResponse.next();
  response.headers.set('x-nonce', nonce);
  response.headers.set(
    'Content-Security-Policy',
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic';
     style-src 'self' 'unsafe-inline';
     img-src 'self' data:;
     font-src 'self';
     frame-ancestors 'none';
     base-uri 'self';
     form-action 'self';
     object-src 'none';`.replace(/\s+/g, ' ')
  );
  return response;
}

// In RootLayout — propagate nonce to <Script>
import { headers } from 'next/headers';
const nonce = (await headers()).get('x-nonce') ?? undefined;
return <Script src="..." nonce={nonce} strategy="afterInteractive" />;
```

**Operating rules:**
- **Fail open on middleware error.** If nonce generation throws, the request must still proceed (without CSP) rather than returning 500 for the whole site.
- **`'strict-dynamic'` requires every script to be nonced.** Inline `<script>` tags without `nonce={nonce}` will be blocked. Don't add this until every inline script is migrated.
- **Tier 1/2 don't need this.** Static sites have no per-request render; the static CSP above is already strong.

The nonce pattern is the single biggest XSS hardening upgrade available, but it's coupled with framework features (middleware + per-request render) that Astro static builds don't have. Use it when the site already lives on Tier 3 for other reasons.

---

## 4. `vercel.json` recipe

Drop this in the client's `vercel.json` and tune the CSP per site.

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=63072000; includeSubDomains; preload"
        },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; img-src 'self' data:; style-src 'self' 'unsafe-inline'; script-src 'self'; font-src 'self'; connect-src 'self'; frame-ancestors 'none';"
        }
      ]
    }
  ]
}
```

After deploy, verify with SecurityHeaders.com and MDN Observatory (Section 9).

---

## 5. Contact forms

When a client needs a contact form:

- **Server-side validation with Zod** on every field, regardless of client-side validation. Client-side validation is UX, not security.
- **Honeypot field** to deter bots: `<input name="_gotcha" style="display:none" tabindex="-1" autocomplete="off">`. Reject any submission where this field is non-empty.
- **Rate limit submissions.** Vercel's `waitUntil` or Upstash Redis. Cap at ~5 submissions per IP per 10 minutes; harder limits for repeated abuse.
- **Sanitize user input before placing it in email bodies.** Use DOMPurify or strip HTML tags. Never interpolate untrusted strings into HTML email templates without escaping.
- **Use Resend** (or another transactional ESP) for delivery. Never expose the API key in client code — form submission goes through an API route.
- **No `target="_blank"` without `rel="noopener noreferrer"`** on any outbound link. Vercel's CSP plus modern browser defaults reduce the risk, but the rule stays.

---

## 6. German legal requirements

Mandatory for every DE-market site. These pages must exist and be reachable from every page (footer link).

| Page | Required content |
|------|-----------------|
| Impressum | Business owner full name, address, email, phone, Handelsregister (HRB) if applicable, USt-IdNr if applicable |
| Datenschutzerklärung | DSGVO-compliant privacy policy listing all data processors (analytics, embedded maps, contact forms, etc.) |
| Cookie Banner | Only if using tracking cookies or non-essential cookies. Not required for purely functional first-party cookies. |

**Rule:** Deliver Impressum and Datenschutzerklärung before going live. This is not optional. Use a generator (e.g., eRecht24) and have the client confirm the content is accurate — agencies have been fined for incorrect Impressum on client sites.

Portugal and Brazil have lighter requirements but still require a Política de Privacidade if any cookies or analytics are used.

---

## 7. Malware and blacklist monitoring

A small-business site is rarely the *target* of an attack but is regularly the *vector* — compromised credentials, leaked database backups, vulnerable plugins (on WordPress migrations). The cost of a defaced or blacklisted site is disproportionate to its traffic.

Run these on every production cutover and again monthly on retainer clients:

- **Sucuri SiteCheck** — surface-level malware and visible compromise scan
- **Google Safe Browsing site status** — confirms Google does not flag the domain as unsafe, phishing, or malware

If either reports a positive, treat as a P0 — pull the site offline, investigate, restore from a known-clean deploy before bringing it back.

---

## 8. Secret rotation cadence

Secrets and API keys must rotate on a schedule, not "when we remember." Every retainer client gets a calendar reminder, every one-off build documents the rotation owner in the handoff.

| Secret type | Rotation cadence | Examples | Why |
|------------|------------------|----------|-----|
| Encryption keys (PII at rest) | **90 days** | `ENCRYPTION_KEY`, `HMAC_KEY` | Limits blast radius if leaked; aligns with DSGVO guidance |
| Internal API keys | **90 days** | `INTERNAL_API_KEY` for admin/internal endpoints | Same |
| ESP API keys | **90 days** | `RESEND_API_KEY`, `SENDGRID_API_KEY` | Resend / SendGrid leak detection has improved, but treat as compromised on any expose |
| Redis / rate-limit keys | **90 days** | `UPSTASH_REDIS_REST_TOKEN` | Same |
| OAuth / third-party API keys | **180 days** (or vendor's policy) | Google Maps API key, GBP API token | Vendor's rotation window usually longer |
| Domain registrar / DNS credentials | **annual** (after 2FA enabled) | GoDaddy, Namecheap login | 2FA is the primary defense; rotation is hygiene |

**Rotation procedure:**
1. Generate the new value in the provider's dashboard.
2. Add it as a *new* env var in Vercel (e.g., `RESEND_API_KEY_NEW`).
3. Deploy with code that reads either old or new (`process.env.RESEND_API_KEY_NEW ?? process.env.RESEND_API_KEY`).
4. Verify in production logs that the new key is working.
5. Remove the old env var.
6. Rename `_NEW` to the canonical name.
7. Revoke the old key at the provider.

Tier 1/2 demo sites with no secrets don't need a rotation schedule. The minute a contact form or analytics goes in, the 90-day clock starts.

---

## 9. Pre-launch security gates

Run the full pass before flipping `noindex` off and before the first cold call where the client will see the production URL.

| Gate | Tool | Pass criterion |
|------|------|----------------|
| TLS configuration | SSL Labs | Grade A+ |
| Security headers | SecurityHeaders.com | Grade A |
| Security headers (cross-check) | MDN HTTP Observatory | Grade A or better |
| Modern internet standards | Internet.nl | All checks pass |
| Malware / visible compromise | Sucuri SiteCheck | Clean |
| Reputation | Google Safe Browsing | Not listed |
| Rich Results / structured data | Google Rich Results Test (see `SEO.md`) | All schema valid |
| Manual: Impressum + Datenschutzerklärung reachable from every page footer | Visual | Present |
| Manual: no API keys or secrets in `view-source` | Browser DevTools | Clean |
| Manual: secret rotation schedule logged in client handoff | Doc | Calendar reminder set for 90-day rotation |

A site that fails any gate is not ready for handoff.

---

## 10. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| SSL Labs SSL Server Test | Free | [ssllabs.com/ssltest](https://www.ssllabs.com/ssltest/) | TLS / HTTPS configuration deep audit. Target A+ |
| SecurityHeaders.com | Free | [securityheaders.com](https://securityheaders.com/) | HTTP security header grade. Target A |
| MDN HTTP Observatory | Free | [developer.mozilla.org/observatory](https://developer.mozilla.org/en-US/observatory) | Cross-check of headers, also flags subtle CSP issues |
| Internet.nl | Free | [internet.nl](https://internet.nl/) | IPv6, DNSSEC, HTTPS, email security against modern standards |
| Sucuri SiteCheck | Free | [sitecheck.sucuri.net](https://sitecheck.sucuri.net/) | Malware, blacklist status, visible compromise |
| Google Safe Browsing Site Status | Free | [transparencyreport.google.com/safe-browsing](https://transparencyreport.google.com/safe-browsing) | Reputation check against Google's blocklist |
| OWASP ZAP | Free | [zaproxy.org](https://www.zaproxy.org/) | Deeper web-app vulnerability scanning. Only against sites we own / are authorized to test |

**Pre-launch pass** = run the first six in order. ZAP is reserved for sites with custom form/auth logic, not static landing pages.
