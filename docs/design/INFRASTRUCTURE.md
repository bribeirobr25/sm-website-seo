# INFRASTRUCTURE.md — agency-template scaffold drop-in

**Applies to:** every client project (all product types 1–5, all stack tiers 1–3).

This document captures the **infrastructure scaffold every agency-built site needs but most don't have** — security headers at the edge, branded error pages, automated quality gates, and uptime monitoring. Both the Porto and Jean re-audits (2026-05-14) independently flagged the same four gaps and recommended packaging them as a scaffold drop-in. This is that doc.

**The problem:** every new agency project loses ~2 hours rediscovering the same missing pieces. Same gaps in Porto (rebuilt site), Jean (greenfield Type 1), and presumably every future client. The fix is not project-by-project; it's a scaffold that drops in.

**The promise:** one pass through this doc moves any new build's reliability rubric (`RELIABILITY.md` §12) from ~5/12 to ~9/12 in 30–45 minutes — applies retroactively to existing builds, applies automatically to future ones.

---

## Table of contents

1. [What this scaffold provides](#1-what-this-scaffold-provides)
2. [`vercel.json` — security headers + caching](#2-verceljson--security-headers--caching)
3. [Custom `404.astro` and `500.astro`](#3-custom-404astro-and-500astro)
4. [`.github/workflows/ci.yml` — pnpm validate on every push](#4-githubworkflowsciyml--pnpm-validate-on-every-push)
5. [Uptime monitoring — Better Stack or UptimeRobot](#5-uptime-monitoring--better-stack-or-uptimerobot)
6. [Error tracking — Sentry on every server-side surface](#6-error-tracking--sentry-on-every-server-side-surface)
7. [Per-client rollback drill in `CLAUDE.md`](#7-per-client-rollback-drill-in-claudemd)
8. [When to drop this scaffold in](#8-when-to-drop-this-scaffold-in)

---

## 1. What this scaffold provides

| Component | What it does | Standards reference | Without it, audit flags |
|---|---|---|---|
| `vercel.json` | Six edge security headers + caching + clean URLs | `SECURITY.md` §3, §4 | 🔴 Production blocker — zero HSTS/CSP/XFO/etc. |
| `src/pages/404.astro` | Branded 404 with phone CTA + back path | `RELIABILITY.md` §2 | 🔴 Astro framework default ships — unbranded, no business info |
| `src/pages/500.astro` | Branded 500 with apology copy + phone | `RELIABILITY.md` §2 | 🔴 Astro framework default ships |
| `.github/workflows/ci.yml` | Runs `pnpm validate` on every push + PR | `QUALITY.md` §4 | 🔴 Zero automated quality gate |
| Uptime monitor (Better Stack / UptimeRobot) | 5-min ping on `/`, alerts to agency email + WhatsApp | `RELIABILITY.md` §9 | 🔴 Required before `noindex` flip |
| Sentry — server-side error tracking | DSN-wired error capture on every server-side surface (form endpoints, Astro middleware, Next.js routes). `send_default_pii: false` enforced. | `LEGAL.md` §Rules at a glance + `RELIABILITY.md` §9 | 🔴 Production blocker for Tier 2+ — silent server errors otherwise |
| Per-client rollback drill | Documented in client `CLAUDE.md` | `RELIABILITY.md` §10 | 🟠 5-min restore unverified |

**Net:** all six components together = one infrastructure scaffold. Build once per agency tooling decision; reuse across every project.

---

## 2. `vercel.json` — security headers + caching

The canonical six-header `vercel.json` recipe lives in **`SECURITY.md` §4**. Copy it verbatim; tune the `Content-Security-Policy` `connect-src` and `img-src` lists per the third-party origins each project links to:

| Project type | CSP additions needed |
|---|---|
| Phone + WhatsApp CTAs only (Type 1) | `connect-src 'self' https://wa.me;` |
| + Google Maps embed or static image | add `https://maps.googleapis.com https://maps.gstatic.com` to `img-src` |
| + Instagram embed (rare) | add `https://www.instagram.com` to `frame-src` |
| + Resend contact form (Type 2) | add `https://api.resend.com` to `connect-src` |
| + GA4 / Microsoft Clarity (production with consent banner) | add `https://www.googletagmanager.com https://www.clarity.ms` to `script-src` and `connect-src` |
| + Trinks / Treatwell / Booksy booking deep-link (Beauty/Health) | usually external `<a target="_blank">` — no CSP impact |

Cache headers (add to the same `vercel.json` after security headers):

```json
{
  "headers": [
    {
      "source": "/(.*)\\.(js|css|woff2|avif|webp|png|jpg|svg)",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }]
    },
    {
      "source": "/(.*)\\.html",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=0, must-revalidate" }]
    }
  ]
}
```

Static assets get a year (Astro emits hashed filenames — safe to cache forever). HTML must revalidate so content changes go live on the next deploy.

**Verify after deploy:** SecurityHeaders.com (target grade A) + MDN Observatory.

---

## 3. Custom `404.astro` and `500.astro`

Place these at `src/pages/404.astro` and `src/pages/500.astro` (Astro Tier 2). Both reuse the project's `BaseLayout` — they pick up the brand automatically.

### `src/pages/404.astro`

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { CONTACT, SITE } from '../lib/site';
---

<BaseLayout pathname="/404" title="Página não encontrada">
  <main class="mx-auto max-w-2xl px-5 md:px-8 py-24 text-center">
    <p class="text-xs uppercase tracking-[0.22em] text-[color:var(--color-text-muted)]">
      Erro 404
    </p>
    <h1 class="mt-4 text-4xl md:text-5xl">Página não encontrada</h1>
    <p class="mt-6 text-[color:var(--color-text-muted)]">
      O endereço que você procura não existe ou foi movido.
    </p>
    <div class="mt-10 flex flex-wrap justify-center gap-3">
      <a
        href="/"
        class="inline-flex items-center px-5 py-2.5 rounded-[var(--radius-sm)] bg-[color:var(--color-accent)] text-white font-medium"
      >
        Voltar à página inicial
      </a>
      <a
        href={`tel:${CONTACT.phoneTel}`}
        class="inline-flex items-center px-5 py-2.5 rounded-[var(--radius-sm)] border border-[color:var(--color-text)] text-[color:var(--color-text)] font-medium"
      >
        Ligar — {CONTACT.phone}
      </a>
    </div>
  </main>
</BaseLayout>
```

Adapt copy per locale (e.g., German `Seite nicht gefunden`, English `Page not found`). Keep the structure: eyebrow + headline + apology + two CTAs (home + phone).

### `src/pages/500.astro`

Same structure with: headline "Algo deu errado", apology "Estamos resolvendo. Por enquanto, ligue ou mande mensagem.", two CTAs (home + phone). The phone CTA is what makes a 500 page actually useful — the visitor came for a business; give them a way to reach the business when the server fails.

**Why both:** Astro static sites have very low 500 surface area (no runtime API), but Vercel can still emit 500 for Edge issues or misconfigured redirects. Custom 500 is required by `RELIABILITY.md` §2 — not optional.

---

## 4. `.github/workflows/ci.yml` — pnpm validate on every push

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v4
        with:
          version: 10

      - uses: actions/setup-node@v4
        with:
          node-version-file: '.nvmrc'
          cache: 'pnpm'

      - run: pnpm install --frozen-lockfile

      - run: pnpm validate
```

That's the entire file. Three things to know:

1. **`.nvmrc` must exist** in the project root (already required per `TECH.md` §2). The `setup-node` step reads it.
2. **`pnpm validate` must run lint + build + visual reminder** per `QUALITY.md` §2 — this is the script that's already in every per-client `package.json`.
3. **No deploy step.** Vercel handles deploys via its GitHub integration; CI only validates. Deploys are still manual-promote per agency convention (no auto-push, no auto-deploy).

For Type 3 builds (Next.js with database/auth), add a `security.yml` workflow per `QUALITY.md` §4 with secret scanning + dependency audit.

---

## 5. Uptime monitoring — Better Stack or UptimeRobot

Pick one — both are free at the agency's scale.

### Better Stack (recommended for new accounts)

1. Better Stack dashboard → Monitors → New monitor
2. URL: `https://[client-domain]/` · Check every 3 minutes
3. Alert channels: agency email + WhatsApp via webhook (Better Stack supports both natively)
4. Add a status page (optional, free tier) — useful for retainer clients

### UptimeRobot (simpler, no status page)

1. UptimeRobot dashboard → Add new monitor
2. Monitor type: HTTP(s) · URL: `https://[client-domain]/` · Interval: 5 min
3. Alert contact: agency email

**Configure BEFORE flipping `noindex` off** per `RELIABILITY.md` §9. The point is to learn of downtime before the client does.

---

## 6. Error tracking — Sentry on every server-side surface

### The rule

**Sentry instruments every server-side execution surface. No client SDK on Tier 1 static pages.**

This honors two existing rules simultaneously:

- `TECH.md` §Stack decision matrix: Tier 1 = vanilla JS, no framework — so no Sentry client SDK
- Agency monitoring posture: every server-side execution path must surface errors

What that means per tier:

| Tier | Stack | Sentry footprint |
|---|---|---|
| **Tier 1 — pure static HTML** | No JS framework · no forms · no server endpoints | **No Sentry** — there is no surface to instrument. Vercel's build logs + the uptime monitor (§5) cover the failure modes that exist. |
| **Tier 1 + form endpoint** | HTML + serverless contact-form function | **Sentry on the serverless function only.** No client SDK on the static pages. The function captures form-submission failures, Resend API errors, rate-limit violations. |
| **Tier 2 — Astro** | Astro SSG/SSR · form endpoints · middleware | **Full Sentry SDK** via `@sentry/astro` — captures both browser-side runtime errors (hydration, lazy-loaded scripts) and server-side errors (API routes, middleware, build hooks). |
| **Tier 3 — Next.js** | Next.js App Router · API routes · middleware · server actions | **Full Sentry SDK** via `@sentry/nextjs` — covers the same surfaces plus server actions and edge runtime. |

### The non-negotiable: `send_default_pii: false`

Sentry's default is to attach request headers, cookies, IP addresses, and (in some integrations) form payloads to every captured event. **All of these can contain PII** — emails, names, phone numbers, session tokens, free-text form input.

The agency rule: `send_default_pii: false` is set in every Sentry init call, on every project, in every environment. No exceptions. Documented in `LEGAL.md` §Rules at a glance as part of the consent-first / PII-minimization posture.

Why this matters legally:

- **DSGVO Art. 28 + Art. 32:** processing personal data without a data-processor agreement + appropriate technical measures is a violation. Sentry-with-default-PII fits the violation profile.
- **LGPD Art. 6 II (necessidade) + Art. 46 (segurança):** collecting more PII than necessary is itself a violation, separately from the breach risk.
- **CCPA §1798.100(b):** "Notice at Collection" must enumerate every category of PI collected — IP addresses, browser fingerprints, and form payloads in error logs all count.

### Setup recipe — Tier 2 (Astro)

```bash
pnpm add @sentry/astro
```

Wire it in `astro.config.ts`:

```typescript
import { defineConfig } from 'astro/config';
import sentry from '@sentry/astro';

export default defineConfig({
  integrations: [
    sentry({
      dsn: process.env.SENTRY_DSN,
      sendDefaultPii: false,
      tracesSampleRate: 0.1,
      sourceMapsUploadOptions: {
        project: process.env.SENTRY_PROJECT,
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    }),
  ],
});
```

Then a sentry-init module (called from `BaseLayout.astro` for browser, automatically by the integration for server):

```typescript
// src/lib/sentry.ts
import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: import.meta.env.PUBLIC_SENTRY_DSN,
  sendDefaultPii: false,         // ← non-negotiable
  tracesSampleRate: 0.1,
  environment: import.meta.env.MODE,
  beforeSend(event) {
    // Defense-in-depth: scrub any request data Sentry-Astro didn't already
    if (event.request) {
      delete event.request.cookies;
      delete event.request.headers;
      if (event.request.data) event.request.data = '[Filtered]';
    }
    return event;
  },
});
```

### Setup recipe — Tier 1 with form endpoint only

```bash
pnpm add @sentry/node
```

In the serverless function (`api/contact.ts` or equivalent):

```typescript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  sendDefaultPii: false,         // ← non-negotiable
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV,
});

export default async function handler(req, res) {
  try {
    // ... contact form logic
  } catch (err) {
    Sentry.captureException(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
```

Pure-static Tier 1 with **no** form endpoint and **no** serverless function: skip this entire section. There is nothing to instrument.

### Setup recipe — Tier 3 (Next.js)

```bash
pnpm add @sentry/nextjs
npx @sentry/wizard@latest -i nextjs
```

The wizard generates `sentry.client.config.ts`, `sentry.server.config.ts`, and `sentry.edge.config.ts`. Manually verify `sendDefaultPii: false` is set in **all three** before committing — the wizard sometimes omits it.

### Environment variables (all tiers)

| Variable | Where set | Required? |
|---|---|---|
| `SENTRY_DSN` | Vercel project settings | ✅ |
| `PUBLIC_SENTRY_DSN` (Astro) / `NEXT_PUBLIC_SENTRY_DSN` (Next.js) | Vercel project settings | Required only for client-side capture (Tier 2+) |
| `SENTRY_AUTH_TOKEN` | Vercel project settings (build-time only) | Required for source-map upload |
| `SENTRY_PROJECT` | Vercel project settings | Required for source-map upload |
| `SENTRY_ORG` | Vercel project settings | Required for source-map upload |

`SENTRY_AUTH_TOKEN` and `SENTRY_PROJECT` should be marked as **build-time only** in Vercel — not exposed to client bundles.

### Alert thresholds (defaults — tune per client)

In the Sentry dashboard, configure:

| Alert | Threshold | Notification channel |
|---|---|---|
| Issue first seen | Immediate | Agency email |
| Issue spike (>10× normal rate) | 5-min window | Agency email + WhatsApp via webhook |
| New issue in production | Immediate | Agency email |
| Performance regression (p95 > 2× baseline) | 1-hour window | Agency email (Tier 3 only — Tier 1/2 use uptime monitor) |

### Data-processor disclosure obligations

Sentry processes personal data on behalf of the client and qualifies as a data processor under DSGVO Art. 28 / LGPD Art. 39 / CCPA service-provider exemption. Every site that uses Sentry must:

1. **Name Sentry** as a third-party processor in the Privacy Policy (per `LEGAL.md` §Privacy Policy — common cross-jurisdiction structure §4 "Who we share with")
2. **Have a DPA signed** with Sentry — sign-up flow includes the DPA acknowledgment; agency confirms once per client account
3. **Configure the EU data residency region** for any DE/PT/EU-resident clients (Sentry → Settings → General → Data Region → EU)
4. **Confirm 90-day default retention** (Sentry's free-tier default) or extend per client retention policy

### Pre-launch verification (operational tests)

Captured in `CHECKLIST.md` §Operational tests; mirrored here for completeness.

- [ ] Trigger a known error in production (e.g., `?test_error=1` query handled by `/api/sentry-test` route) — confirm Sentry receives the event within 60 seconds
- [ ] Inspect the captured event in Sentry dashboard — verify NO request body, NO cookies, NO headers, NO IP address (or hashed only)
- [ ] Verify `sendDefaultPii: false` appears in `astro.config.ts` / `sentry.*.config.ts` via grep
- [ ] Verify the Privacy Policy lists Sentry as a data processor
- [ ] Verify Sentry data region matches client jurisdiction (EU for DE/PT, US for US-only clients)

---

## 7. Per-client rollback drill in `CLAUDE.md`

Every per-client `CLAUDE.md` should already have a slim rollback section per `TECH.md` §20. Add a **drill record** the first time a deploy goes to production:

```markdown
## Rollback drill — verified [YYYY-MM-DD]

5-minute restore from Vercel rollback:
1. Vercel dashboard → [project name] → Deployments
2. Find the last known-good deployment (look for the green checkmark + production tag)
3. Click `⋯` → Promote to Production
4. Verify the production URL serves the rolled-back version (DNS propagation is instant for Vercel-managed domains)

**Drill log:**
- [YYYY-MM-DD] — verified by [name], rolled back from [bad commit hash] to [good commit hash], elapsed time: [actual minutes]
```

Drill once per client at the production cutover gate; re-drill quarterly per retainer cadence.

---

## 8. When to drop this scaffold in

| Project state | Action |
|---|---|
| **Net-new client (greenfield)** | Drop all 5 components in *during scaffold*, before the first commit. Adds ~30 min to the initial scaffold. Pays back on every audit. |
| **Existing build going to production for the first time** | Drop in as Phase A of the production cutover (see `CHECKLIST.md` §1, §2). Required to pass the reliability rubric. |
| **Retainer client failing the quarterly audit** | Drop in as part of the audit fix list. Treat as 🔴 production blocker. |
| **Demo phase (`noindex` set)** | All five components are still strongly recommended even in demo. The CI workflow + custom error pages cost nothing to add early; security headers + uptime monitor can wait until the `noindex` flip if needed. |

**Anti-pattern:** waiting until production cutover to discover the infrastructure debt. By that point, the cold call is done, the client is excited, and "we need 30 more minutes" reads as agency unpreparedness. Drop the scaffold in at scaffold time.

---

## Cross-references

- `SECURITY.md` §Security headers + §`vercel.json` recipe — canonical six-header config
- `LEGAL.md` §Rules at a glance — `send_default_pii: false` rule + Sentry data-processor disclosure obligation
- `RELIABILITY.md` §Custom error pages — branded 404/500 spec
- `RELIABILITY.md` §Uptime monitoring — uptime monitor requirements
- `RELIABILITY.md` §Rollback procedure — rollback procedure detail
- `RELIABILITY.md` §12-question reliability rubric — what this scaffold is sized against
- `QUALITY.md` §`pnpm validate` — what validate must do per stack tier
- `QUALITY.md` §CI/CD — CI/CD requirements
- `TECH.md` §Deployment — Vercel-specific notes
- `TECH.md` §Per-client `CLAUDE.md` template — includes the rollback section
- `CHECKLIST.md` §Technical + §Operational tests — pre-launch gates that depend on this scaffold

---

*Both the Porto and Jean 2026-05-14 audits independently identified this scaffold as the single highest-leverage infrastructure improvement. Build once. Reuse on every client. Never lose 2 hours on this again.*
