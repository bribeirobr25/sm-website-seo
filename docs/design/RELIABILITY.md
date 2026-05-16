# RELIABILITY.md — Error Handling, Recovery, Resilience
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5), with per-section activation:

- **Universal at every type (Sections 1, 2, 3, 7, 10, 12):** Error handling philosophy; custom 404 / 500 pages; JS-disabled fallback; defensive data access; backup / disaster recovery; the 12-question audit rubric
- **Activates at Type 2+ (Sections 4, 5, 8, 11):** `fetchWithRetry` with exponential backoff; third-party degraded mode; application logging baseline; form recovery (phone-number fallback)
- **Activates at Type 3+ (Section 6):** Error boundaries — Next.js-specific 3-layer pattern (`global-error.tsx`, route-group `error.tsx`, component-level boundaries)
- **All types at production cutover (Section 9):** Uptime monitoring (deferrable during demo phase)

**Reading the 12-question rubric:** Type 1 sites legitimately answer "n/a" to ~7 of the 12 questions (no forms, no secrets, no monitoring required during demo). Type 3+ sites must Pass all 12.

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for keeping sites running when something unexpected happens. Every section below is also an **audit question** — if you can't answer "yes" to each, the site is fragile.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **Never let the page crash on the user.** Always render *something* — graceful fallback content, never a white screen of death.
- **Custom 404 and 500 pages** on every production site. Branded, with contact info and a back-home CTA.
- **Critical info must work without JavaScript.** Address, phone, hours, Impressum link — all visible in raw HTML, no JS dependency.
- **Retry external calls with exponential backoff.** Max 2 retries. Show "try again" UI on final failure, never silently drop the action.
- **Third-party failure must not break the page.** If Clarity, GA4, the embedded map, or the font CDN dies, the page still renders correctly.
- **Defensive data access.** Client data can have missing fields. Components default-or-omit, never render `undefined` and never throw.
- **Uptime monitoring** is set up before handoff. UptimeRobot or Better Stack, 5-minute interval, email/WhatsApp alert.
- **Backup = git + Vercel rollback.** Document the 5-minute restore procedure per client.
- **Form submissions are never silently dropped.** Server retries the ESP; if it still fails, log it and show the user the phone number.

---

## Table of contents

1. [Error handling philosophy](#1-error-handling-philosophy)
2. [Required error pages (404, 500)](#2-required-error-pages-404-500)
3. [Graceful degradation without JavaScript](#3-graceful-degradation-without-javascript)
4. [Retry with exponential backoff](#4-retry-with-exponential-backoff)
5. [Third-party degraded mode](#5-third-party-degraded-mode)
6. [Error boundaries (Tier 3)](#6-error-boundaries-tier-3)
7. [Defensive data access](#7-defensive-data-access)
8. [Logging baseline](#8-logging-baseline)
9. [Health monitoring](#9-health-monitoring)
10. [Backup and disaster recovery](#10-backup-and-disaster-recovery)
11. [Form recovery](#11-form-recovery)
12. [The audit rubric](#12-the-audit-rubric)
13. [Tools](#13-tools)

---

## 1. Error handling philosophy

> Never let the user see the framework's default error message.

Three principles:

1. **The page renders something useful even when sub-systems fail.** A broken embed in the contact section does not stop the hero from rendering. A broken hero image shows alt text and continues. A broken third-party script does not abort the entire JS bundle.
2. **Failures are logged with enough context to fix them later** without leaking PII into the log line.
3. **The user is told what to do next.** "Something went wrong" without a follow-up action is worse than no message — it implies the user is stuck. Always pair with: "Call us at [phone]" or "Reload the page" or "Try again in a minute."

The opposite philosophy — let the framework throw, show a stack trace, hope the user reloads — is malpractice for a paying client site.

---

## 2. Required error pages (404, 500, offline)

Every production site ships a custom 404 and 500 page. Generic framework defaults are forbidden — they leak framework identity, look unprofessional, and offer no path back.

> **See also:** `INFRASTRUCTURE.md` §3 has copy-paste-ready `404.astro` and `500.astro` Astro Tier 2 templates as part of the agency-template scaffold drop-in.

### When each page actually fires

| Page | Static (Tier 1/2) | SSR / API routes (Tier 3) |
|------|-------------------|---------------------------|
| **404** | Fires on any unknown route | Same |
| **500** | Near-zero surface — Astro static output has no runtime to throw. Vercel returns its own 500 only on edge or function failure | Real surface — any uncaught error in a route handler or server component fires the 500 page |
| **Offline** | N/A unless a service worker is registered (most agency sites don't) | Same — only relevant if shipping a PWA |

**The static-site 500 caveat:** for pure-static Astro builds with no API routes, the custom `500.astro` will rarely fire — most catastrophic failures (Vercel cold-start error, DNS failure) bypass it entirely and show Vercel's generic page. Ship it anyway, for three reasons:

1. **Consistency:** future-you adds one API route and now the page exists where it's needed
2. **Manual error pages:** you can `throw` from a page's frontmatter to trigger it during testing (`if (someCondition) throw new Error('test')`)
3. **Vercel custom error page configuration:** Vercel can be configured to serve your `500.html` for some edge-case errors

### Offline page

A `/offline` page is only required for sites that register a service worker (PWA, offline-first apps). For the typical agency local-business landing page, this is N/A — there's no service worker, there's no offline mode. If a client explicitly needs offline reading of static info (clinic with patient leaflets, restaurant with cached menu), then:

1. Register a minimal service worker via `@astrojs/service-worker` or equivalent
2. Cache the homepage + key static assets at install
3. Author an `offline.astro` page that renders when network is unavailable
4. Follow the same branded-fallback pattern as 404/500

### 404 (page not found)

Must contain:

- **Business name in the header** (so the user knows they're still in the right place)
- **Headline:** "Diese Seite wurde nicht gefunden" / "Page not found"
- **Subhead:** 1 sentence explaining the page might have moved
- **Two actions:**
  1. A primary CTA back to the home page
  2. A secondary CTA to the most likely intended destination — usually `/menu` or `/contact` for restaurants, `/services` for trade businesses
- **Contact info** — phone number + email visible
- **Localized** in every site language

```astro
---
// src/pages/404.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import { SITE } from '../lib/site';
---
<BaseLayout title="Seite nicht gefunden — Porto dos Ribeiros" robots="noindex">
  <main class="mx-auto max-w-2xl px-6 py-20 text-center">
    <h1>Diese Seite wurde nicht gefunden</h1>
    <p>Die Seite existiert nicht mehr oder die URL ist falsch.</p>
    <div class="mt-8 flex gap-4 justify-center">
      <a href="/" class="btn-primary">Zur Startseite</a>
      <a href="/menu" class="btn-secondary">Speisekarte ansehen</a>
    </div>
    <p class="mt-12">Lieber direkt erreichen?<br/>
       <a href={`tel:${SITE.phone}`}>{SITE.phoneDisplay}</a></p>
  </main>
</BaseLayout>
```

### 500 (internal server error)

Same shape as 404, different content:

- **Headline:** "Es ist ein Fehler aufgetreten" / "Something went wrong"
- **Subhead:** "Wir arbeiten an einer Lösung. In der Zwischenzeit können Sie uns direkt kontaktieren."
- **Phone number as the primary CTA** — when the page itself is broken, the phone is the lifeline.
- **Reload button as secondary**
- **Set `noindex` on this page** so a transient 500 doesn't get indexed.

For Astro, the 500 page is `src/pages/500.astro`. For Next.js, it's `app/error.tsx` plus `app/global-error.tsx`.

---

## 3. Graceful degradation without JavaScript

A local-business site must be **functionally complete without JavaScript** for these elements:

| Element | Must work without JS | Why |
|---------|----------------------|-----|
| Business name + tagline | Yes | First impression |
| Address | Yes | Some users browse with JS off; some bots/scrapers don't run JS |
| Phone number (clickable `tel:`) | Yes | The lifeline |
| Email address (`mailto:`) | Yes | Same |
| Opening hours | Yes | Key decision data for the user |
| Impressum + Datenschutzerklärung links | Yes | Legal requirement |
| Map (link to Google Maps) | Yes | Even when embedded map needs JS, a fallback link must exist |
| Hero image and headline | Yes | Static markup, no JS framework needed |
| Service list / menu | Yes | The "what do you offer" question must be answerable |

**What can require JS:**

- Animated section reveals
- Image carousels (must show first image in static markup, carousel is enhancement)
- Modals (contact form modal can require JS, but a static `/contact` page also exists)
- Sticky mobile CTA bubble
- WhatsApp click-to-chat (the `tel:` link is the no-JS fallback)
- Cookie consent banner (when no JS, no analytics fires anyway — no consent needed)

**The audit gate:** In Chrome DevTools → Settings → Preferences → Debugger → "Disable JavaScript", then reload the page. Every item in the "Must work without JS" column above is visible and functional. If anything's broken, fix it before handoff.

---

## 4. Retry with exponential backoff

Any user-initiated API call that hits an external service (Resend, Upstash, GBP API, Google Maps API) must retry on transient failure. Implement once, reuse everywhere.

```typescript
// src/lib/utils/fetchWithRetry.ts
export async function fetchWithRetry(
  input: RequestInfo,
  init?: RequestInit,
  options: { retries?: number; baseDelay?: number } = {}
): Promise<Response> {
  const { retries = 2, baseDelay = 250 } = options;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(input, init);

      // Retry on 5xx and 429 (rate limit)
      if (response.status >= 500 || response.status === 429) {
        if (attempt < retries) {
          const delay = baseDelay * 2 ** attempt + Math.random() * 100;
          await new Promise(r => setTimeout(r, delay));
          continue;
        }
      }

      return response;
    } catch (error) {
      // Network error (DNS, offline, abort)
      if (attempt === retries) throw error;
      const delay = baseDelay * 2 ** attempt + Math.random() * 100;
      await new Promise(r => setTimeout(r, delay));
    }
  }

  throw new Error('fetchWithRetry exhausted');
}
```

**Rules:**

- **Max 2 retries** — 3 attempts total. More than that compounds latency without meaningful success-rate gain.
- **Exponential backoff with jitter** — `baseDelay * 2^attempt + random(0..100ms)`. The jitter prevents thundering-herd retries when an upstream service comes back up.
- **Only retry idempotent operations or operations protected by an idempotency key.** Never retry a `POST` without an idempotency key — you could double-send.
- **Retry on 5xx, 429, and network errors.** Never on 4xx (those are client errors that won't fix themselves).
- **After exhaustion, surface the error to the user with a recovery action** — see Section 11.

---

## 5. Third-party degraded mode

A page must render correctly when every third-party dependency fails. Build the failure mode in from day one — don't bolt it on after the first incident.

### Analytics scripts (Clarity, GA4, etc.)

- **Loaded with `async` or `defer`.** Never blocking.
- **Loaded only after consent** (DSGVO). Until consent fires, the script tag doesn't exist in the DOM.
- **Failure mode:** Script fails to load → page is unaffected. No try/catch needed because the script is non-blocking and the page doesn't depend on its `window.posthog` global.

### Embedded map

- **Wrap in a `<noscript>` + visible fallback.** Static address + link to Google Maps always renders. The embedded map is enhancement.
- **Don't use `?output=embed`** — it routinely renders blank. See `DESIGN-BEST-PRACTICES.md` map embed rule.
- **Failure mode:** Map fails to load → user sees the address card + a "Open in Google Maps" link.

### Font CDN (if used despite the self-host rule)

- **The font stack must include a system fallback** — `font-family: 'Display Font', Georgia, serif` not just `'Display Font'`.
- **`font-display: swap`** so layout doesn't wait on the font.
- **Failure mode:** Font fails to load → page renders in the system fallback. Acceptable. The self-host rule (`PERFORMANCE.md`) makes this near-impossible anyway.

### Contact form ESP (Resend, SendGrid)

- **Retry with backoff** (Section 4) before returning 500 to the user.
- **On exhausted retries, log to error tracker** (Sentry / Vercel logs / file) with: request ID, timestamp, error type — never the form contents.
- **Show the user the phone number as the fallback action.**

### Rate-limit store (Upstash Redis)

- **In-memory `Map` fallback** when Upstash credentials are not configured or unreachable.
- **Single-instance limitation:** in-memory only protects the one serverless instance. Acceptable for low-traffic local-business sites; not for high-traffic.
- **Failure mode:** Redis down → in-memory takes over silently. Logs note the fallback.

### Image CDN (Vercel's built-in)

- **Vercel handles this transparently;** no app-level fallback needed.
- **Failure mode:** Vercel image CDN down → Vercel's own fallback serves the raw asset.

---

## 6. Error boundaries (Tier 3)

For Next.js sites, three layers of error boundaries are standard:

### Layer 1: `app/global-error.tsx` (root)

Catches errors that escape the root layout. This is the last-line-of-defense page; it must:

- **Re-implement `<html>` and `<body>`** (it sits above the root layout)
- **Have NO external imports** — minimize what can fail
- **Show a simple "Something went wrong" + reload button + phone number**

### Layer 2: route-group `error.tsx` (per route group)

Catches errors inside a route group without crashing siblings. Example: an error in `/contact` doesn't crash `/menu`.

```typescript
// app/(landing)/error.tsx
'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <main className="…">
      <h1>Es ist ein Fehler aufgetreten</h1>
      <button onClick={reset}>Erneut versuchen</button>
    </main>
  );
}
```

### Layer 3: section-level `<PageErrorBoundary>` or `<NavigationErrorBoundary>`

Wraps individual sections that have independent failure modes (a broken hero animation shouldn't break the menu section).

For Astro Tier 2 sites, error boundaries are less applicable because most rendering is build-time. The 404 / 500 pages from Section 2 cover the runtime gap.

---

## 7. Defensive data access

Client data files (`SITE` in `src/lib/site.ts`, translation files, business config) WILL have missing fields. A new client without a Facebook URL, an old client whose NIF was never confirmed, a translation key that exists in DE but not yet in EN — these are normal.

**Components must default-or-omit, never break.**

```typescript
// CORRECT — defensive
{SITE.socials?.facebook && (
  <a href={SITE.socials.facebook}>Facebook</a>
)}

// CORRECT — fallback
const phoneDisplay = SITE.phoneDisplay ?? formatPhone(SITE.phone) ?? '—';

// CORRECT — default config
const hours = SITE.hours ?? { mon: 'Closed', tue: 'Closed', /* ... */ };

// WRONG — assumes field exists
<a href={SITE.socials.facebook}>Facebook</a>  // crashes when facebook is undefined

// WRONG — assumes nested structure
<p>{SITE.address.coordinates.lat}</p>  // crashes when coordinates is undefined
```

The TypeScript strict + `noUncheckedIndexedAccess` rule (see `TECH.md`) catches some of this at compile time. The runtime habit catches the rest.

**Pattern: validated config at boot.** For Tier 3 sites, validate the `SITE` config against a Zod schema at startup; fail loudly in development if a required field is missing. Production gets the safe defaults.

---

## 8. Logging baseline

Once a site is past demo phase, errors must be logged. Demo sites can skip; production cannot.

### What to log

| Event | Level | Content |
|-------|-------|---------|
| 500 errors | Error | Request ID, route, error type, stack (sanitized) |
| Form submission failure (post-retry) | Error | Request ID, route, error type, **no PII** |
| Rate-limit hit | Warning | Request ID, route, IP (anonymized — last octet zeroed) |
| Honeypot trigger | Info | Request ID, IP (anonymized) |
| 404 hits over time | Aggregate | Top-N missing URLs for redirect candidate analysis |
| Auth failures | Warning | Request ID, IP, user-agent, route |

### What never to log

- Email addresses
- Phone numbers
- Full names
- Form bodies
- Cookies / session tokens
- Full IP addresses (anonymize: zero out the last octet for IPv4, last 80 bits for IPv6)

### Where to log

- **Vercel logs** for the first month — built-in, free, sufficient for low-traffic sites
- **Sentry free tier** once retainer phase starts — 5k events/month is plenty
- **Logflare** (Cloudflare) for sites that grow past Sentry's free tier

Every log line has a request ID (`x-request-id` header generated in middleware). Correlation across log lines through that ID gives debugging power without storing PII.

---

## 9. Health monitoring

Every production client gets an external uptime check. **Set this up before flipping `noindex` off.**

> **See also:** `INFRASTRUCTURE.md` §5 covers UptimeRobot + Better Stack setup steps as part of the agency-template scaffold drop-in. Drop-in includes the rollback drill per `RELIABILITY.md` §10 too.

| Tool | Free tier | What it does |
|------|-----------|--------------|
| UptimeRobot | 50 monitors, 5-min interval | Pings the homepage every 5 min; emails on downtime > 5 min |
| Better Stack (Better Uptime) | 10 monitors, 3-min interval | Same; nicer UI, on-call schedules if needed |
| Vercel Monitoring | Included with Vercel free tier | Built-in; works without extra signup |

**The agency's standard:** UptimeRobot for the homepage (5-min interval) + an extra monitor on `/contact` if the site has a contact form. Alert via email to the agency address; forward to WhatsApp for clients on retainer.

**What "downtime" means here:** HTTP 5xx, timeout > 30 s, or DNS failure. Three failed checks in a row triggers the alert (avoids false alarms from transient network blips).

---

## 10. Backup and disaster recovery

For a static landing page, the recovery story is simple — but it must be **documented per client**, not implicit.

### The agency's backup model

| Asset | Backed up where | Recovery |
|-------|----------------|----------|
| Source code | GitHub | Re-deploy from main branch |
| Build output | Vercel keeps all previous deployments | One-click rollback |
| Database (if any) | Neon point-in-time recovery / Supabase backups | Restore from snapshot |
| Domain | Client owns it at their registrar | Client account always |
| Vercel project | Agency account | If account compromised: re-create project, re-link domain |
| Translation files | Git (part of source code) | Same as source |
| Client photos (`src/assets/`) | Git (we don't commit binaries > 2 MB but the photos themselves live in git) | Same as source |
| API keys / secrets | Vercel env vars (not in git) | **Single point of failure** — losing access means re-issuing every key per the rotation procedure in `SECURITY.md` |

### The 5-minute restore procedure (Vercel)

1. Open Vercel dashboard → project → Deployments
2. Find the last known-good deployment (before the regression)
3. Click `⋯` → **Promote to Production**
4. Verify the production URL serves the rolled-back version
5. Investigate the broken deploy on a feature branch

### The 24-hour restore procedure (full account compromise)

1. Lock down the compromised Vercel account; rotate password + revoke sessions
2. Create a new Vercel project from the GitHub repo
3. Re-add the domain (client controls DNS, so this just requires a record swap)
4. Re-set all env vars from the rotation log
5. Trigger a fresh deploy
6. Notify client + run the pre-launch security gates (`SECURITY.md`)

Document the per-client variant of this in `docs/clients/[slug]/CLAUDE.md` if there are unusual dependencies (Neon DB, Resend, anything else with state outside Vercel).

---

## 11. Form recovery

The single most critical recovery story for a local-business site is the contact form. If a form silently drops a lead, the client loses revenue and trust.

The flow from `FORMS.md` Section 1, with reliability annotations:

1. **Client-side retry** is *not* automatic — let the user trigger it, otherwise double-sends.
2. **Server retries the ESP** with exponential backoff (max 2 retries; see Section 4).
3. **On final ESP failure**:
   - Log the event (sanitized — no form content) with request ID
   - Return 500 with `{ ok: false, error: 'delivery_failed' }`
4. **Client renders the error banner with three explicit actions**:
   - "Erneut versuchen" (retry button, same idempotency key)
   - "Direkt anrufen: +49 30 …" (phone number, clickable)
   - "WhatsApp senden: …" (if WhatsApp is configured)
5. **The form data is preserved** — never clear the form on error. The user can fix anything and retry without re-typing.
6. **Optional: queue the submission server-side** in a DB table for manual recovery. Requires a database; only worth it on retainer clients with high contact-form volume.

The phone-number fallback is the load-bearing piece. The contact form is one path; the call is the redundancy.

---

## 12. The audit rubric

When auditing any site (ours or one we've inherited), score it against these 12 questions. A "no" is a defect.

1. **Does the page render with JavaScript disabled?** Address, hours, phone, Impressum visible?
2. **Does navigating to a non-existent URL show a branded 404 with a clear back path?**
3. **Does a server error (force via dev tools) show a branded 500 with a phone number?**
4. **Does the contact form survive Resend / ESP being down?** (Test: temporarily set the API key to a known-bad value; verify retry + 500 + phone-number-fallback.)
5. **Does the page render when third-party scripts (Clarity, GA4) fail to load?** (Test: block the domains in DevTools network tab.)
6. **Is there uptime monitoring configured?** What's the alert email?
7. **Is there a documented rollback procedure?** Where does it live?
8. **Are API keys and secrets in Vercel env vars, not in source code?** (Audit: `git grep -i 'sk_\\|api[_-]?key' .` returns nothing.)
9. **Are forms rate-limited?** (Test: 6 submissions in 60 seconds — 6th should return 429.)
10. **Is honeypot in place?** (Inspect: hidden `_gotcha` field with `tabindex="-1"`.)
11. **Are logs free of PII?** (Sample 50 log lines — no emails, no phones, no full IPs.)
12. **Is secret rotation scheduled?** (Calendar reminder set for 90 days out per `SECURITY.md`.)

12/12 = robust. 10–11 = adequate, file the gaps as P2 work. ≤ 9 = the site needs a reliability pass before any new feature work.

---

## 13. Tools

All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| UptimeRobot | Free (50 monitors / 5-min) | [uptimerobot.com](https://uptimerobot.com/) | The default agency uptime monitor. Set up before going live |
| Better Stack (Better Uptime) | Freemium | [betterstack.com/better-uptime](https://betterstack.com/better-uptime) | Same niche, nicer UI, on-call schedules for multi-person retainer teams |
| Vercel Monitoring | Included free | [vercel.com/docs/observability](https://vercel.com/docs/observability) | Built-in. Use first; add UptimeRobot for external verification |
| Sentry | Freemium (5k events/mo) | [sentry.io](https://sentry.io/) | Error tracking once retainer phase begins |
| Logflare (Cloudflare) | Freemium | [logflare.app](https://logflare.app/) | Log aggregation when Sentry's free tier isn't enough |
| Vercel Logs | Included free | [vercel.com/docs/observability/logs](https://vercel.com/docs/observability/logs) | First-month logs without any setup |
| StatusGator | Free (10 services) | [statusgator.com](https://statusgator.com/) | Aggregates status pages of dependencies (Vercel, Resend, Cloudflare) — see them go down without your monitoring lighting up first |

**Order of adoption per client:**

1. Vercel Logs (free, zero setup) — day one
2. UptimeRobot homepage monitor — before going live
3. Sentry — when retainer starts, or when the first 500-error incident catches you off guard
4. Logflare — only if Sentry's quota becomes the limit
5. StatusGator — optional, useful for the agency operations side
