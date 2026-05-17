# INTEGRATIONS.md — Per-integration setup recipes
## Small Business Website + SEO + Google Business Agency

**Applies to:** every client project that needs one of the canonical agency integrations. Each integration is a separate recipe — pick the ones the project needs, skip the ones it doesn't.

This is the agency-wide source of truth for **how to integrate the third-party services we standardize on**. Cross-references into `LEGAL.md` (data-processor disclosure obligations), `ANALYTICS.md` (consent gating), `INFRASTRUCTURE.md` (Sentry recipe + scaffold drop-in), `FORMS.md` (Resend in the form flow), and `KPI.md` (event-naming convention).

**The agency canonical stack:**

| Integration | Role | Default tier(s) | Free-tier suitable for typical client? |
|---|---|---|---|
| **Resend** | Transactional email (contact forms, booking confirmations) | Type 2+ on any tier | ✅ Yes (3,000 emails/mo free) |
| **Sentry** | Error tracking on server-side surfaces | Tier 2+, Tier 1 with form endpoint | ✅ Yes (5,000 events/mo free) |
| **PostHog** | Product analytics — funnels, cohorts, retention | Tier 3+ | ✅ Yes (1M events/mo + 5K recordings free) |
| **Neon** | Serverless PostgreSQL | Tier 3+ (any Type 3+) | ✅ Yes (0.5GB free, scale-to-zero) |
| **Upstash** | Redis (rate limiting, caching, session) | Tier 2+ when form endpoint exists; Tier 3+ standard | ✅ Yes (10K commands/day free) |
| **Stripe** | Payments | Type 4+ only | ✅ Yes (no monthly fee — pay per transaction) |

**Rule:** every integration adds a data-processor entry to the Privacy Policy. See each recipe's "Data-processor disclosure" subsection. The Privacy Policy is updated whenever an integration is added, removed, or replaced — never silent.

---

## Rules at a glance

- **No integration ships without a Privacy Policy entry** — per `LEGAL.md` §Privacy Policy — common cross-jurisdiction structure §4 "Who we share with"
- **Free tier first.** Every recipe defaults to the free tier and documents the upgrade threshold. Agency client volume typically stays under all six free tiers.
- **Secrets live in Vercel environment variables**, never in code. Never in `.env` committed to git. Use `vercel env add` or the dashboard.
- **EU data residency when client is DE/PT** — applies to Sentry, PostHog, Neon. Set the EU region at integration creation; cannot easily migrate later.
- **Webhooks are signed and verified.** Every Stripe + Resend webhook handler validates the signature header before processing. Unsigned webhooks are a security violation.
- **Rate-limit every public endpoint** that touches a paid integration — prevents an abusive actor from burning the agency's Resend/Sentry quota in 5 minutes.
- **Document the key-rotation cadence** in the per-client `CLAUDE.md` per `SECURITY.md` §Secret rotation cadence.

---

## Lazy initialization for env-dependent server modules

**Rule (non-negotiable for every Tier 3+ build):** server modules that read environment variables — DB clients, Redis clients, transactional-email SDKs, payment SDKs, anything calling `*.fromEnv()` — **must lazy-initialize via a `getX()` getter function**. They must not throw at top-level module evaluation.

**Why this matters.** Next.js (15+ with App Router, 16+ default) runs a *Collecting page data* phase during `next build` that imports every route module to extract metadata. Module-load side effects fire here. If your `src/lib/db.ts` calls `new NeonClient(process.env.DATABASE_URL!)` at top level and `DATABASE_URL` is unset, the build fails — even though the route would work fine at request time. The same trap fires in CI builds, Vercel preview deploys, and any pre-deploy validation pipeline that runs without production secrets.

This was discovered during the agency reference-implementation validation (2026-05-17): Neon, Upstash, and Resend all throw at construction with missing env vars, and broke `pnpm build` three times in succession before the pattern landed.

### The pattern

```typescript
// ❌ WRONG — throws at module-eval if env is missing.
//             Breaks Next page-data collection, CI builds, preview deploys.
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
```

```typescript
// ✅ RIGHT — lazy-init via getter; throw is deferred to first real use.
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

let _db: ReturnType<typeof createDb> | undefined;

function createDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
}

export function getDb() {
  if (!_db) _db = createDb();
  return _db;
}
```

Call site:

```typescript
// src/app/api/trial/route.ts
import { getDb } from '@/lib/db';

export async function POST(req: Request) {
  await getDb().insert(trialSignups).values({ /* ... */ });
}
```

### When the rule applies

| Integration | Throws on missing env? | Lazy-init required? |
|---|---|---|
| **Neon** (`@neondatabase/serverless` + Drizzle) | Yes — neon() rejects empty string | ✅ Yes |
| **Upstash** (`Redis.fromEnv()`) | Yes — `Redis.fromEnv()` throws if either env var missing | ✅ Yes |
| **Resend** (`new Resend(...)`) | Yes — v4+ throws if API key undefined | ✅ Yes |
| **Stripe** (`new Stripe(...)`) | Yes — throws on undefined secret key | ✅ Yes |
| **Sentry** (`Sentry.init({ dsn })`) | No — undefined DSN silently disables the SDK | ❌ Not required |
| **PostHog** (`posthog.init(key, ...)`) | No — call site checks `if (!key) return null` (agency recipe in `ANALYTICS.md`) | ❌ Not required |

### Pre-launch operational test

`CHECKLIST.md` §1.5 includes a "build robustness" probe: `pnpm build` with no env vars set must succeed. This is the catch-net for the rule.

### Cold-start cost (acceptable)

The first request after a Lambda cold start pays the construction cost (~10–50 ms for Drizzle + Upstash; Resend is negligible). All subsequent requests reuse the cached instance. The cost is the same as eager init under normal load — only the *first request after deploy* differs.

---

## Table of contents

- Lazy initialization for env-dependent server modules ← read first
- Resend — transactional email
- Sentry — error tracking
- PostHog — product analytics
- Neon — serverless PostgreSQL
- Upstash — Redis (rate limit + cache)
- Stripe — payments
- Cross-cutting concerns: env vars, secret rotation, DPA list

---

## Resend — transactional email

**Role:** transactional email for contact-form submissions, booking confirmations, password reset (Type 5), receipts (Type 4). Replaces the legacy Nodemailer + SMTP stack.

**When to use:** any Type 2+ build with a contact form or transactional notifications. Not for marketing / newsletters — use the client's own marketing tool (Mailchimp / Brevo / etc.) for that.

### Setup steps

```bash
pnpm add resend
```

```typescript
// src/lib/resend.ts — lazy-init per §Lazy initialization for env-dependent server modules.
// `new Resend(undefined)` throws in v4+, which would break Next page-data collection.
import { Resend } from 'resend';

let _resend: Resend | undefined;

export function getResend(): Resend {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

export const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? 'hello@client-domain.com';
```

Use it in the form endpoint:

```typescript
// src/pages/api/contact.ts (Astro) or src/app/api/contact/route.ts (Next.js)
import { getResend, FROM_EMAIL } from '@/lib/resend';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  honeypot: z.string().max(0),  // bots fill this; humans don't
});

export async function POST(request: Request) {
  const data = ContactSchema.parse(await request.json());

  // Rate-limit check (see Upstash recipe)
  // ...

  await resend.emails.send({
    from: 'Contact Form <noreply@[client-domain]>',
    to: ['owner@[client-domain]'],
    replyTo: data.email,
    subject: `New contact from ${data.name}`,
    text: data.message,
  });

  return Response.json({ ok: true });
}
```

### Domain verification

Before Resend will send from a custom domain:

1. Resend dashboard → Domains → Add Domain
2. Add the DNS records (DKIM, SPF, optional DMARC) — Vercel-managed DNS records work
3. Wait for verification (typically <5 min)
4. Use the verified `from` address — e.g. `noreply@[client-domain]`

**Important:** Resend's free tier (3K emails/mo) allows sending only **to** the agency's own verified email or to addresses on a custom domain you've verified. For client builds, verify the client's domain — the `to` is the owner's email.

### Free-tier thresholds

- **Free:** 3,000 emails/month, 100/day, 1 verified domain
- **Pro:** $20/month — 50K emails/month, unlimited domains
- **Upgrade trigger:** when client expects > 100 form submissions per day, OR > 3K transactional emails per month, OR needs multi-domain support

### Data-processor disclosure (Privacy Policy entry)

Add to §"Who we share with" section of the Privacy Policy:

```
Resend (Resend, Inc., USA) — transactional email delivery for contact-form
submissions. Receives sender email, recipient email, and message body.
Retention: 30 days for delivered emails; 90 days for delivery logs.
EU residents: Resend processes data under SCCs (Standard Contractual Clauses).
```

For DE / EU clients: Resend operates under SCCs (no EU data residency option at the time of writing). Document this in the Privacy Policy. If the client is a privacy-strict regulated trade (lawyer / health), evaluate Mailgun EU region as an alternative — both are documented in the agency stack as substitutable.

### Pre-launch verification

- [ ] Custom domain verified in Resend dashboard
- [ ] DKIM + SPF DNS records propagated (`dig TXT [domain]._domainkey.resend._domainkey.[client-domain]`)
- [ ] Form endpoint validates payload with Zod before calling `resend.emails.send`
- [ ] Honeypot field in form (and validated as empty)
- [ ] Rate limit on the form endpoint (see Upstash recipe)
- [ ] Resend named in Privacy Policy under "Who we share with"
- [ ] Test email sent and received in production (via real form submission)

---

## Sentry — error tracking

**Role:** server-side error capture on every server-side execution surface. Full setup recipe lives in `INFRASTRUCTURE.md` §Error tracking — this section adds advanced configuration and integration with the broader stack.

**When to use:** any Tier 2+ build, plus Tier 1 with a form endpoint. Tier 1 pure-static has no surface to instrument — skip.

### Advanced configuration (beyond `INFRASTRUCTURE.md` recipe)

#### Source-map upload (production builds)

Sentry deobfuscates stack traces in production using source maps. Wire it via the integration:

**Astro — split between build-time options (in `astro.config.ts`) and runtime init (in dedicated config files).** The `@sentry/astro` v8+ integration only accepts build-time options (`sourceMapsUploadOptions`, `release`); runtime init (`dsn`, `sendDefaultPii`, `tracesSampleRate`, `beforeSend`) lives in auto-discovered `sentry.client.config.mjs` + `sentry.server.config.mjs` at the project root. Passing `sendDefaultPii: false` to the integration call fails the TypeScript build with `Object literal may only specify known properties` — common trap.

```typescript
// astro.config.ts — build-time only
sentry({
  sourceMapsUploadOptions: {
    project: process.env.SENTRY_PROJECT,
    authToken: process.env.SENTRY_AUTH_TOKEN,
    org: process.env.SENTRY_ORG,
  },
}),
```

```typescript
// sentry.client.config.mjs (project root — auto-discovered)
import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  sendDefaultPii: false,  // non-negotiable per LEGAL.md §Rules at a glance
  tracesSampleRate: 0.1,
  beforeSend(event) {
    if (event.request) {
      event.request.cookies = undefined;
      event.request.headers = undefined;
      if (event.request.data) event.request.data = '[Filtered]';
    }
    return event;
  },
});
```

`sentry.server.config.mjs` follows the same shape using `process.env.SENTRY_DSN`.

Set `SENTRY_AUTH_TOKEN` as **build-time only** in Vercel (not exposed at runtime). It is used during `pnpm build` to upload source maps to Sentry, then the bundle ships without the token.

**Next.js — `@sentry/nextjs ^10` required for Next 16 + Turbopack. `instrumentation.ts` is mandatory in v9+.**

| Next version | Required `@sentry/nextjs` floor | Server init via |
|---|---|---|
| Next 13–14 | `^7` or `^8` | `sentry.server.config.ts` auto-load |
| Next 15 | `^8` or `^9` | `instrumentation.ts` (v9 deprecates auto-load) |
| Next 16+ | **`^10` mandatory** (v8/v9 lacks Turbopack + Next 16 peer support) | `instrumentation.ts` required |

```typescript
// instrumentation.ts (project root — required by @sentry/nextjs v9+)
import * as Sentry from '@sentry/nextjs';

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import('./sentry.server.config');
  }
  if (process.env.NEXT_RUNTIME === 'edge') {
    await import('./sentry.edge.config');
  }
}

export const onRequestError = Sentry.captureRequestError;
```

`sentry.client.config.ts` is still auto-loaded by the SDK — keep it at the root with the standard `Sentry.init({ sendDefaultPii: false, ... })` shape.

**v10 `withSentryConfig` options that changed:**

- `hideSourceMaps: true` → `sourcemaps: { deleteSourcemapsAfterUpload: true }` (same intent — maps reach Sentry but not the web)
- `disableLogger: true` → removed; replacement `webpack: { treeshake: { removeDebugLogging: true } }` is webpack-only and not supported under Turbopack (the Next 16 default). Drop the option.

#### Release tracking

Tag each deploy with the commit SHA for "first seen in release X" / "regression in release Y" analysis:

```typescript
sentry({
  release: process.env.VERCEL_GIT_COMMIT_SHA,
  ...
})
```

`VERCEL_GIT_COMMIT_SHA` is set automatically by Vercel — no manual config required.

#### Alert thresholds — Sentry dashboard config

Per `INFRASTRUCTURE.md` §Error tracking. Recap:

| Alert | Threshold | Channel |
|---|---|---|
| First seen | Immediate | Email |
| Spike (>10× normal) | 5-min window | Email + WhatsApp webhook |
| New issue in production | Immediate | Email |
| Performance regression (p95 > 2× baseline) | 1-hour window | Email (Tier 3 only) |

### EU data residency (DE / PT clients)

When creating the Sentry project: Settings → General → Data Region → **EU**. Cannot easily change after project creation — set it correctly upfront. Document the chosen region in the per-client `CLAUDE.md`.

### Free-tier thresholds

- **Free:** 5,000 errors/month + 10,000 performance events + 50 replay sessions
- **Team:** $26/month — 50K errors + 100K performance + 500 replays
- **Upgrade trigger:** when error volume exceeds 5K/mo (usually means something is wrong with the site — fix the underlying issues first)

### Data-processor disclosure

```
Sentry (Functional Software, Inc., USA / EU instance) — error tracking and
performance monitoring on server-side execution surfaces. Receives stack
traces, browser metadata (no IP, no cookies, no PII when sendDefaultPii is
false — agency default). EU instance for European clients ensures data
residency in EU. Retention: 90 days.
```

### Pre-launch verification

Already covered in `INFRASTRUCTURE.md` §Error tracking pre-launch verification. Recap:

- [ ] `sendDefaultPii: false` set in every Sentry init
- [ ] Test error captured in production; verified no PII in event
- [ ] Data region matches client jurisdiction
- [ ] Sentry named in Privacy Policy

---

## PostHog — product analytics

**Role:** funnels, cohorts, retention, custom dashboards on Tier 3+. Consent-gated initialization recipe lives in `ANALYTICS.md` §Per-tool consent recipes — this section adds project setup, dashboard creation, and feature-flag patterns.

**When to use:** Tier 3 only. Tier 2 sites stop at Clarity + GA4. PostHog pays off when there is a real funnel (booking, sign-up, checkout, repeat-engagement) to analyze.

### Setup steps

```bash
pnpm add posthog-js
```

#### Region selection — non-negotiable for DE/PT clients

| Client jurisdiction | PostHog instance | API host |
|---|---|---|
| DE / PT / EU clients | EU Cloud | `https://eu.i.posthog.com` |
| US-only clients | US Cloud | `https://us.i.posthog.com` |
| BR clients | EU Cloud (BR has no dedicated PostHog instance; EU offers better LGPD-adjacent posture than US) | `https://eu.i.posthog.com` |
| Multi-jurisdiction | EU Cloud (strictest baseline) | `https://eu.i.posthog.com` |

Set this at project creation. Cannot migrate between regions later without exporting + reimporting all events.

#### Initialization — consent-gated by default

```typescript
// src/lib/posthog.ts
import posthog from 'posthog-js';

let initialized = false;

export function initPostHog() {
  if (initialized || typeof window === 'undefined') return;

  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST!,  // eu.i.posthog.com or us.i.posthog.com
    opt_out_capturing_by_default: true,        // ← non-negotiable, opt-in only after consent
    capture_pageview: false,                    // ← page views fired explicitly with KPI params
    disable_session_recording: true,            // ← default off; enable only with explicit justification
    persistence: 'memory',                      // ← no localStorage / no cookie pre-consent
    property_blacklist: ['$ip', '$initial_referrer', '$referrer'],
    sanitize_properties: (props) => {
      // Defense-in-depth — strip any field that smells like PII
      const sanitized = { ...props };
      ['email', 'phone', 'name', 'address'].forEach(k => delete sanitized[k]);
      return sanitized;
    },
  });
  initialized = true;
}

export function grantConsent() {
  posthog.opt_in_capturing();
  posthog.set_config({ persistence: 'localStorage+cookie' });
}

export function revokeConsent() {
  posthog.opt_out_capturing();
  posthog.reset();  // clears stored distinct_id
}

export { posthog };
```

The consent banner's `__applyConsent` handler (per `LEGAL.md` §Cookie consent banner — universal spec, reference snippet) calls `grantConsent()` when analytics is accepted, `revokeConsent()` when rejected.

### Event firing pattern

```typescript
// src/lib/analytics.ts
import { posthog } from './posthog';

export function track(eventName: string, params: Record<string, any> = {}) {
  // Add canonical required params per KPI.md §Required event parameters
  const fullParams = {
    source_page: window.location.pathname,
    locale: document.documentElement.lang,
    ...params,
  };
  posthog.capture(eventName, fullParams);
}
```

All KPI.md canonical events (`phone_click`, `booking_started`, `booking_completed`, etc.) route through this `track()` helper. Same wrapper sends to GA4 + Clarity if those are configured.

### Dashboard recipes — Tier 3 starter

Create these in the PostHog dashboard at project setup. Each is reusable across vertical templates per their §11 Measurement subsection.

1. **Funnel: booking flow** — `booking_started` → `booking_slot_selected` → `booking_completed` — show drop-off %
2. **Funnel: contact form** — `contact_form_started` → `contact_form_completed`
3. **Cohort: returning users** — users with 2+ converting events in 90 days
4. **Retention table** — weekly return rate from first conversion event
5. **Conversion by source** — landing page × conversion rate matrix

Save dashboards to a **client-named project**; share view-only access with the client's Google email at handoff.

### Feature flags — optional Tier 3 capability

PostHog ships with a feature-flag layer that costs nothing extra. Useful for:

- A/B testing CTAs ("Book now" vs "Reserve a table")
- Gradual rollouts (10% of users see new pricing page, 90% see old)
- Operator-side toggles (`show_holiday_banner` flag — client can flip without redeploy)

Pattern:

```typescript
if (posthog.isFeatureEnabled('show_holiday_banner')) {
  // render banner
}
```

Document each active feature flag in the per-client `CLAUDE.md` — flags are an operational dependency, not invisible config.

### Free-tier thresholds

- **Free:** 1M events/month + 5K session recordings + unlimited team members
- **Paid:** $0.000248/event over the limit
- **Upgrade trigger:** unlikely for agency clients at typical traffic. A 10K-session/month site fires ~100K-200K events, well under 1M.

### Data-processor disclosure

```
PostHog (PostHog Inc., USA / EU instance) — product analytics: funnel
analysis, cohort retention, conversion tracking. Receives event names and
non-PII event parameters (page path, source section, service slug). No
IP / cookies / PII captured — opt_out_capturing_by_default is enabled
until user grants consent. EU instance for European clients.
Retention: 7 years by default (configurable down to 3 months).
```

### Pre-launch verification

- [ ] PostHog region matches client jurisdiction (EU for DE/PT/BR; US for US-only)
- [ ] `opt_out_capturing_by_default: true` confirmed in code
- [ ] `persistence: 'memory'` confirmed in code (pre-consent state)
- [ ] No PII parameters in any captured event (inspect via PostHog Activity tab)
- [ ] Funnel + cohort + retention dashboards created per §Dashboard recipes
- [ ] Client granted view-only access to PostHog project
- [ ] PostHog named in Privacy Policy

---

## Neon — serverless PostgreSQL

**Role:** primary database for Type 3+ builds. Booking systems, content storage, multi-tenant data. Serverless + scale-to-zero — no idle cost.

**When to use:** any Type 3+ (booking, transactional, application). Skip for Type 1 / Type 2 (info / forms) — no DB needed.

### Setup steps

1. **Neon dashboard** → Create project. Region: **EU-Central** for DE/PT/EU clients · **US-East-1** for US clients · **EU-Central** for BR clients (no SA region available — EU is closest LGPD-adjacent).
2. Create a database for the client (`[client-slug]`).
3. Copy the connection string from Neon dashboard.
4. Set `DATABASE_URL` in Vercel environment variables.

```bash
pnpm add @neondatabase/serverless
# OR with Drizzle ORM (agency standard for Type 3+):
pnpm add drizzle-orm @neondatabase/serverless
pnpm add -D drizzle-kit
```

```typescript
// src/lib/db.ts — lazy-init per §Lazy initialization for env-dependent server modules.
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

let _db: ReturnType<typeof createDb> | undefined;

function createDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
}

export function getDb() {
  if (!_db) _db = createDb();
  return _db;
}
```

Call site: `await getDb().insert(table).values({ ... })`.

### Schema-first migrations (Drizzle Kit)

```typescript
// src/lib/schema.ts
import { pgTable, uuid, text, timestamp, integer } from 'drizzle-orm/pg-core';

export const bookings = pgTable('bookings', {
  id: uuid('id').primaryKey().defaultRandom(),
  serviceSlug: text('service_slug').notNull(),
  startsAt: timestamp('starts_at').notNull(),
  customerEmail: text('customer_email').notNull(),    // server-side only, never in analytics
  customerNameEnc: text('customer_name_enc').notNull(),  // encrypted at rest
  createdAt: timestamp('created_at').notNull().defaultNow(),
});
```

```bash
# Generate + apply migration
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### Connection pooling — required pattern

Neon serverless tier uses **HTTP connections, not persistent TCP**. The `@neondatabase/serverless` driver handles this correctly out of the box. Do **not** use `pg` directly — it's TCP-based and will exhaust Neon's serverless connection limits.

For complex transactions, use the websocket-based driver:

```typescript
import { Pool } from '@neondatabase/serverless';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
```

### Backups + restore

Neon's branching feature is the agency-standard backup mechanism:

1. **Daily branch from main** — automated at Neon free tier (point-in-time restore within 7 days)
2. **Pre-deploy branch** — `neon branches create --name pre-deploy-$(date +%Y%m%d-%H%M)` before any schema migration
3. **Restore drill** — once per client per retainer quarter, drill restoring a branch to a non-prod URL and verifying the data

Document the restore procedure in the per-client `CLAUDE.md` per the `INFRASTRUCTURE.md` rollback-drill convention.

### Free-tier thresholds

- **Free:** 0.5 GB storage + 191.9 compute hours/month (scale-to-zero between requests) + 7-day point-in-time recovery
- **Launch ($19/mo):** 10 GB + 300 compute hrs + 14-day PITR
- **Upgrade trigger:** when client DB exceeds 0.5 GB (rare for local-business sites unless storing photos/PDFs in DB — don't; use Vercel Blob)

### Data-processor disclosure

```
Neon (Neon Inc., USA / EU region) — database hosting for booking records,
customer accounts, transactional data. Receives any data the user submits
through booking / account / transactional forms. EU region for European
clients. Encrypted at rest. Retention: indefinite (controlled by the
business — agency does not delete on client's behalf).
```

### Pre-launch verification

- [ ] Region matches client jurisdiction (EU for DE/PT/BR)
- [ ] Connection string set in Vercel env (NOT in code, NOT in committed `.env`)
- [ ] Migrations applied to production branch
- [ ] Sensitive columns encrypted at rest (customer name, address, etc.) — verify via SELECT on the column
- [ ] Backup branch created before first production deploy
- [ ] Restore drill documented in per-client `CLAUDE.md`
- [ ] Neon named in Privacy Policy

---

## Upstash — Redis (rate limit + cache)

**Role:** rate limiting on public endpoints + ephemeral cache for booking-platform handoff state. HTTP-based Redis = serverless-friendly.

**When to use:** any Tier 2+ build with a form endpoint or public API. Skip for pure-static Tier 1 (no surface to rate-limit).

### Setup steps

1. Upstash dashboard → Create database. Region: **EU-West (Ireland)** for DE/PT/EU clients · **US-East-1** for US clients · **EU-West** for BR (no SA region — EU is closest).
2. Copy REST URL + REST token.
3. Set `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` in Vercel env.

```bash
pnpm add @upstash/redis @upstash/ratelimit
```

### Rate limiting recipe — form endpoints

```typescript
// src/lib/ratelimit.ts — lazy-init per §Lazy initialization for env-dependent server modules.
// `Redis.fromEnv()` throws if UPSTASH_REDIS_REST_URL / _TOKEN are missing.
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

let _contactFormLimit: Ratelimit | undefined;
let _bookingLimit: Ratelimit | undefined;

export function getContactFormLimit(): Ratelimit {
  if (!_contactFormLimit) {
    _contactFormLimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '60 s'),   // 5 submissions per 60s per IP
      analytics: true,
      prefix: 'rl:contact',
    });
  }
  return _contactFormLimit;
}

export function getBookingLimit(): Ratelimit {
  if (!_bookingLimit) {
    _bookingLimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(10, '60 s'),  // 10 booking attempts per 60s per IP
      analytics: true,
      prefix: 'rl:booking',
    });
  }
  return _bookingLimit;
}
```

Use it in the form endpoint:

```typescript
// src/pages/api/contact.ts
import { getContactFormLimit } from '@/lib/ratelimit';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
  const { success, limit, remaining, reset } = await getContactFormLimit().limit(ip);

  if (!success) {
    return Response.json(
      { error: 'Too many requests' },
      { status: 429, headers: { 'X-RateLimit-Limit': String(limit), 'X-RateLimit-Remaining': String(remaining), 'X-RateLimit-Reset': String(reset) } }
    );
  }

  // ... validate + send via Resend
}
```

### IP hashing — privacy-preserving

Raw IPs in rate-limit keys are technically PII under DSGVO/LGPD. Hash with a rotating salt:

```typescript
import crypto from 'node:crypto';

function hashIp(ip: string) {
  const salt = process.env.IP_HASH_SALT!;  // rotate quarterly
  return crypto.createHash('sha256').update(ip + salt).digest('hex').slice(0, 16);
}

// In the rate-limit call:
const { success } = await getContactFormLimit().limit(hashIp(ip));
```

`IP_HASH_SALT` rotates per `SECURITY.md` §Secret rotation cadence — 90 days for PII-related secrets.

### Cache recipe — short-lived booking state

```typescript
// src/lib/cache.ts — lazy-init per §Lazy initialization for env-dependent server modules.
import { Redis } from '@upstash/redis';

let _redis: Redis | undefined;

function getRedis(): Redis {
  if (!_redis) _redis = Redis.fromEnv();
  return _redis;
}

export async function cacheBookingState(token: string, state: object) {
  await getRedis().set(`booking:${token}`, state, { ex: 600 });  // 10-min expiry
}

export async function getBookingState(token: string) {
  return getRedis().get(`booking:${token}`);
}
```

Useful for handoff to external booking platforms (Trinks/Booksy/etc.) where the user comes back to a callback URL and we need to know what they were trying to book.

### Free-tier thresholds

- **Free:** 10,000 commands/day, 256 MB storage, 1 database
- **Pay-as-you-go:** $0.2 per 100K commands beyond free tier
- **Upgrade trigger:** if a client's form gets > 10K rate-limit checks per day, something is wrong (volume + likely abuse). Diagnose before upgrading.

### Data-processor disclosure

```
Upstash (Upstash, Inc., USA / EU-West region) — rate limiting and ephemeral
cache. Receives hashed IP addresses (SHA-256 with rotating salt — not
re-identifiable) and short-lived booking-state tokens. EU region for
European clients. Retention: rate-limit data expires per sliding window
(typically <60s); cache data expires per TTL (typically <10min).
```

### Pre-launch verification

- [ ] Region matches client jurisdiction (EU for DE/PT/BR)
- [ ] REST URL + token set in Vercel env
- [ ] Rate limit configured on every form endpoint + booking endpoint
- [ ] IP hashing in place (no raw IPs in Redis keys)
- [ ] `IP_HASH_SALT` env var set and documented for rotation
- [ ] Rate-limit response returns proper `429` + `X-RateLimit-*` headers
- [ ] Upstash named in Privacy Policy (only if any PII / IP data passes through — hashed IPs technically qualify)

---

## Stripe — payments

**Role:** payment processing for Type 4+ (transactional ecommerce). PCI-compliant flow via Stripe Checkout / Payment Element — agency never touches raw card data.

**When to use:** Type 4 only. Type 1-3 do not handle payments. Type 5 may use Stripe for subscriptions but the integration recipe is the same.

### Setup steps

1. Stripe dashboard → Create account for the client. The **client owns the Stripe account** — agency does not aggregate payments.
2. Verify business identity (Stripe KYC) — owner-driven, agency assists.
3. Enable the payment methods relevant for the jurisdiction: card / SEPA (DE) / Pix (BR) / Multibanco (PT) / ACH (US).
4. Set `STRIPE_SECRET_KEY` + `STRIPE_PUBLISHABLE_KEY` + `STRIPE_WEBHOOK_SECRET` in Vercel env.

```bash
pnpm add stripe @stripe/stripe-js
```

### Stripe Checkout — agency default (no custom UI)

The agency uses **Stripe Checkout** (Stripe-hosted page) for Type 4 by default. Reasons:

- Stripe handles all PCI compliance — agency stays out of PCI DSS scope entirely
- Built-in support for SEPA, Pix, Multibanco, etc. with zero custom code
- Stripe-managed fraud protection (Radar)
- Smaller code surface = fewer bugs

Custom UI via Stripe Elements is reserved for Type 5 application builds with specific UX requirements.

#### Create checkout session

```typescript
// src/pages/api/checkout.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const { items } = await request.json();
  // Validate items from server-side product list — NEVER trust client-supplied prices

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card', 'sepa_debit'],  // adjust per jurisdiction
    line_items: items.map(item => ({
      price: item.priceId,  // server-side Stripe price ID, NOT amount
      quantity: item.quantity,
    })),
    success_url: `${process.env.SITE_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.SITE_URL}/cart`,
    customer_creation: 'always',  // for repeat-order analytics
  });

  return Response.json({ url: session.url });
}
```

**Critical rule:** prices live in Stripe (created via dashboard or API), referenced by ID. Never accept a client-supplied amount — that's a price-tampering vulnerability.

#### Webhook handler — verified signature

```typescript
// src/pages/api/webhooks/stripe.ts
import Stripe from 'stripe';
import { db } from '@/lib/db';
import { orders } from '@/lib/schema';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(request: Request) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    return new Response('Invalid signature', { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      await db.insert(orders).values({
        stripeSessionId: session.id,
        amountTotal: session.amount_total,
        currency: session.currency,
        // Customer name/email retrieved from session.customer_details — store encrypted
      });
      // Fire `purchase` event to PostHog with NO PII — only stripe session ID
      break;
    }
    case 'checkout.session.expired':
    case 'payment_intent.payment_failed':
      // Capture `payment_failed` event to Sentry + PostHog
      break;
  }

  return Response.json({ received: true });
}
```

The webhook endpoint must be **unauthenticated** (Stripe calls it from outside the app) but **signature-verified** on every request.

### Per-jurisdiction payment methods

| Jurisdiction | Recommended payment_method_types |
|---|---|
| DE | `['card', 'sepa_debit', 'giropay', 'sofort']` |
| PT | `['card', 'sepa_debit', 'multibanco']` |
| BR | `['card', 'pix']` — Pix is the trust signal per `LEGAL.md` §Pix payment trust signal |
| US | `['card', 'us_bank_account']` |

### Free-tier thresholds

- **Free monthly subscription** — Stripe charges per-transaction only
- **Standard pricing:** 2.9% + €0.30 (DE/EU), 2.9% + R$0.39 (BR), 2.9% + $0.30 (US) — the client pays this; agency doesn't add markup
- **No upgrade trigger from Stripe-side cost** — but if client revenue passes certain thresholds, evaluate negotiated rate (Stripe Pro)

### Data-processor disclosure

```
Stripe (Stripe Payments, varies by jurisdiction) — payment processing.
Receives payment card data, billing address, customer name, customer email
for the purpose of processing the transaction. PCI-DSS Level 1 compliant.
EU residents: Stripe Payments Europe (Ireland) is the data controller.
BR residents: Stripe Brasil. US residents: Stripe USA.
Retention: transaction records retained per Stripe policy (typically 7
years for tax/regulatory purposes — required by law).
```

### Pre-launch verification

- [ ] Stripe account owned by the client (NOT the agency)
- [ ] KYC verification complete on Stripe side
- [ ] Payment methods enabled match jurisdiction (Pix for BR, SEPA for DE/PT, etc.)
- [ ] Products + prices created in Stripe dashboard (NOT in code)
- [ ] Checkout endpoint validates items against server-side price IDs (NEVER client-supplied amounts)
- [ ] Webhook endpoint signature-verifies every request
- [ ] Test checkout completed in production mode + recorded in DB via webhook
- [ ] `payment_failed` events fire to Sentry + PostHog with no card data
- [ ] Stripe named in Privacy Policy with jurisdiction-specific entity

---

## Cross-cutting concerns

### Environment variables — summary

Set every secret in Vercel env (per project). Never commit. Never log.

| Var | Where used | Build-time only? |
|---|---|---|
| `RESEND_API_KEY` | Form endpoint | No (runtime) |
| `SENTRY_DSN` | Sentry init | No (runtime) |
| `SENTRY_AUTH_TOKEN` | Source-map upload | ✅ Build-time |
| `SENTRY_PROJECT` / `SENTRY_ORG` | Source-map upload | ✅ Build-time |
| `NEXT_PUBLIC_POSTHOG_KEY` / `PUBLIC_POSTHOG_KEY` | PostHog client-side init | No (public) |
| `NEXT_PUBLIC_POSTHOG_HOST` / `PUBLIC_POSTHOG_HOST` | EU vs US region URL | No (public) |
| `DATABASE_URL` | Neon connection | No (runtime) |
| `UPSTASH_REDIS_REST_URL` | Upstash init | No (runtime) |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash auth | No (runtime) |
| `IP_HASH_SALT` | IP hashing for rate limit | No (runtime) — rotate quarterly |
| `STRIPE_SECRET_KEY` | Stripe server-side | No (runtime) |
| `STRIPE_PUBLISHABLE_KEY` | Stripe client-side init | No (public) |
| `STRIPE_WEBHOOK_SECRET` | Webhook signature verify | No (runtime) |
| `SITE_URL` | Stripe success/cancel URL build | No (public) |

### Secret rotation cadence

Per `SECURITY.md` §Secret rotation cadence:

- **Encryption / PII-adjacent:** 90 days (`IP_HASH_SALT`, payment encryption keys)
- **API keys:** 90 days (`RESEND_API_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `SENTRY_AUTH_TOKEN`, `UPSTASH_REDIS_REST_TOKEN`)
- **Public keys (DSN, publishable, Posthog public):** rotate only on incident or staff change

### Master data-processor list per Privacy Policy

When generating the Privacy Policy "Who we share with" section, include only the integrations actually deployed for this client. Reference text from each recipe above. Aggregate into a single section.

| Integration | Aggregate Policy entry | Rotation owner |
|---|---|---|
| Resend | Transactional email | Agency |
| Sentry | Error tracking | Agency |
| PostHog | Product analytics | Agency |
| Neon | Database hosting | Agency |
| Upstash | Rate limiting | Agency |
| Stripe | Payments | **Client** (Stripe account is client-owned) |

### When to swap an integration out

- **Resend → Mailgun EU** when client needs EU data residency for transactional email
- **Sentry → GlitchTip (self-hosted)** when client has cost/data-residency concerns and operational appetite for self-hosting
- **PostHog → Plausible** when client wants cookieless / no-consent-banner — but loses funnels/cohorts/retention
- **Neon → Supabase** when client wants auth bundled with DB (rare for agency clients)
- **Upstash → Vercel KV** when staying within Vercel — equivalent posture, fewer accounts to manage
- **Stripe → Mollie (EU)** when client prefers EU-headquartered payment processor

Document the swap rationale in the per-client `BRIEF.md`. Do not silently substitute.

---

## Cross-references

- `INFRASTRUCTURE.md` §Error tracking — Sentry recipe (this doc adds source maps, releases, alert thresholds)
- `ANALYTICS.md` §Per-tool consent recipes — PostHog consent gating (this doc adds region selection, dashboard creation, feature flags)
- `LEGAL.md` §Privacy Policy — common cross-jurisdiction structure — every integration adds to §4 "Who we share with"
- `LEGAL.md` §Cookie consent banner — universal spec — consent gate that PostHog, Sentry client SDK, GA4 all respect
- `KPI.md` §Event naming convention — canonical event names every integration's track helper uses
- `KPI.md` §Stack selection — which integrations apply to which tier
- `FORMS.md` — Resend integration into the form-submission flow
- `SECURITY.md` §Secret rotation cadence — applies to every API key in this doc
- `CHECKLIST.md` §Operational tests — pre-launch verification items for each integration
