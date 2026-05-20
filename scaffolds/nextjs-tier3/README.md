# Next.js Tier 3 scaffold

**Agency canonical starter — Tier 3 (Next.js 16 + Tailwind v4 + Drizzle + Neon + Upstash + Resend + Sentry + PostHog).**

Use this scaffold when starting a Type 3 (info + booking with DB), Type 4 (info + transactional with payments), or Type 5 (application) client per the decision matrix at `docs/design/TECH.md` §1. Most Berlin SMB clients DON'T need this tier — default to `scaffolds/astro-tier2/` first.

## How to use this scaffold

```bash
cp -r scaffolds/nextjs-tier3 clients/[client-slug]
cd clients/[client-slug]
pnpm install
cp .env.example .env.local                  # populate with real keys
pnpm dev                                    # http://localhost:3000
```

Then per root `CLAUDE.md` Step 3 follow-ups:
1. Rename `package.json` `"name"` field → `[client-slug]`
2. Populate `src/lib/site.ts` from `src/lib/site.example.ts` (rename + fill TODO markers)
3. Override `src/app/globals.css` palette per the matching `docs/design/templates/[vertical].md` archetype
4. Declare any canonical components imported from `docs/design/components/_impl/` in `docs/clients/[slug]/CLAUDE.md` per `TECH.md` §20
5. Run database setup: `pnpm db:generate && pnpm db:push` after declaring `DATABASE_URL` in `.env.local`

## What's pre-wired

- **Next.js 16** App Router + RSC + `typedRoutes: true` + AVIF/WebP image optimization
- **Tailwind v4** with `@theme {}` token block in `src/app/globals.css`
- **Sentry** (`@sentry/nextjs` v10) — 3 configs (client/server/edge) + `instrumentation.ts` (`onRequestError`) + `withSentryConfig` wrapper. `send_default_pii: false` non-negotiable per `LEGAL.md`
- **Drizzle + Neon HTTP driver** — lazy-init `db.ts` pattern per `INTEGRATIONS.md` §Lazy initialization
- **Upstash** rate-limiting — `ratelimit.ts` with IP hashing
- **Resend** transactional email — lazy-init `resend.ts`
- **PostHog** (EU + opt-out-by-default) — `posthog.ts` + `ConsentBootstrap.tsx`
- **Consent layer** (`consent.ts` + `CookieBanner.tsx`) — DSGVO/LGPD universal
- **Analytics** 4-stream wiring (GA4 + Clarity + PostHog + Sentry breadcrumbs)
- **Canonical agency tokens** (motion, easing, tracking, radii) in `globals.css`
- **Required public files** — `favicon.svg`, `robots.txt` set to `Disallow: /` for demo phase
- **CI** `.github/workflows/ci.yml` with `pnpm validate` (lint + typecheck + build) gate

## Canonical worked-example: trial-booking form endpoint

The reference Tier-3 impl (now archived) shipped a full end-to-end form endpoint at `src/app/api/trial/route.ts` with Zod + honeypot + Upstash rate-limit + Drizzle insert + Resend confirmation + Sentry. **The working code is at `docs/design/_impl/app/api/trial/route.ts`** — copy + adapt for your form. Also embedded as a fenced code block in `docs/design/FORMS.md` for redundancy.

## What must NOT be in this scaffold

> Per the 2026-05-19 restructure R17 (scaffold purity):

- **No client-specific copy** — every page is a placeholder until you swap in real content
- **No client-specific palette values** — `globals.css` ships canonical tokens + a neutral starting palette; override per the vertical template
- **No client photos** — `Placeholder.tsx` slots only
- **No client domain** — `next.config.ts` and metadata use `https://example.com`
- **No client-specific Drizzle schemas** — `lib/schema.ts` ships a minimal example; replace with the client's actual data model

If you find yourself adding any of the above directly to the scaffold (rather than to a `clients/[slug]/` derivative), you're degrading the scaffold for every future client. The scaffold-purity audit (PENDING.md, quarterly 2026-08-19) catches this drift.

## After copying — pre-flight setup

See `docs/design/CHECKLIST.md` §0 Pre-flight for the per-client setup steps before going live. Tier 3 adds DB migration + secret rotation gates beyond the Tier 2 list.

## Canonical components — opt-in imports

The 8 agency-canonical components live at `docs/design/components/_impl/`. Each ships both Astro and React (`.tsx`) variants where applicable. Import only the ones the client's vertical calls for per `docs/design/components/[component].md` §1.

## Tier 3 isn't right?

If the client only needs a marketing site (no DB, no auth, no payments), use `scaffolds/astro-tier2/` — it's ~80% cheaper to run and noticeably faster. Decision tree: `docs/design/TECH.md` §1.
