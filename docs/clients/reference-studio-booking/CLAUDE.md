# CLAUDE.md — Reference: Studio (Booking) (Tier 3 / Type 3 / DE-DSGVO)

**Codebase:** `clients/reference-studio-booking/`
**Vertical:** Studio (sub-archetype: Boutique sensory — per `docs/design/templates/studio.md` §3)
**Stack:** Next.js 16 (App Router) + Tailwind v4 (CSS `@theme {}` tokens) + Drizzle ORM + Neon (Postgres) + Upstash Redis + Resend + Sentry + Biome
**Market:** Germany (DSGVO enforced)
**Status:** reference implementation — agency canonical worked example, not a real client.

---

## What this is

One of two reference implementations shipped in Batch 3 of the agency-standards expansion. The other is `clients/reference-solo-barber/` (Tier 2 / Type 1 / BR-LGPD). Together they cover the spread of the agency stack — Tier 2 + Tier 3, BR + DE jurisdictions, Type 1 (static info) + Type 3 (booking with own DB).

Use this scaffold as the **starting point** when a real yoga / pilates / barre / boutique fitness studio signs:

```bash
cp -r clients/reference-studio-booking clients/[real-client-slug]
# Then:
# 1. Update SITE constants in src/lib/site.ts with real business data
# 2. Replace <Placeholder> components with real photos
# 3. Replace placeholder Mindbody URL with real studio URL
# 4. Provision Neon database — run `pnpm db:push` to apply schema
# 5. Provision Upstash Redis (EU-West) — UPSTASH_REDIS_REST_URL / _TOKEN
# 6. Provision Resend — RESEND_API_KEY + verified sending domain
# 7. Provision Sentry — DSN + auth token + project slug
# 8. Set all real env vars in Vercel project
# 9. Flip robots.txt to allow + remove `robots: { index: false }` from layout.tsx
# 10. Run docs/design/CHECKLIST.md top to bottom
```

---

## File map

```
clients/reference-studio-booking/
├── package.json                  ← Next.js 16 + Tailwind v4 + Drizzle + Neon + Upstash + Sentry
├── next.config.ts                ← withSentryConfig wrapper
├── tsconfig.json                 ← strict · @/* path alias
├── biome.json                    ← agency linting + formatting rules
├── drizzle.config.ts             ← Drizzle migrations (Postgres dialect)
├── postcss.config.mjs            ← Tailwind v4 plugin
├── vercel.json                   ← 6 security headers (per SECURITY.md) · clean URLs
├── sentry.client.config.ts       ← sendDefaultPii: false · client-side Sentry
├── sentry.server.config.ts       ← sendDefaultPii: false · server-side Sentry
├── sentry.edge.config.ts         ← sendDefaultPii: false · edge runtime Sentry
├── .github/workflows/ci.yml      ← pnpm lint + build on push/PR (per INFRASTRUCTURE.md)
├── .env.example                  ← All env-var stubs (Sentry, Neon, Upstash, Resend, GA, Clarity, PostHog)
├── .nvmrc                        ← Node 20 LTS
├── README.md
├── public/
│   ├── favicon.svg               ← Primary favicon
│   └── robots.txt                ← Disallow: / (demo phase — flip at production cutover)
└── src/
    ├── app/
    │   ├── layout.tsx            ← Root layout: <head> + JSON-LD + OG + Twitter + consent-gated GA4
    │   ├── globals.css           ← Tailwind v4 @theme {} block — cream + sage palette + base styles
    │   ├── page.tsx              ← Home (Hero → Classes → About → Pricing → Instructors → Visit)
    │   ├── kurse/page.tsx        ← Classes + Pricing combined
    │   ├── stundenplan/page.tsx  ← Weekly schedule grid (DRAFT data)
    │   ├── trial/page.tsx        ← Trial-signup form (client component, posts to /api/trial)
    │   ├── impressum/page.tsx    ← DSGVO TMG §5 Impressum (indexable)
    │   ├── datenschutz/page.tsx  ← DSGVO Datenschutzerklärung 10-section structure (indexable)
    │   ├── not-found.tsx         ← 404 branded
    │   ├── error.tsx             ← 500 branded · Sentry.captureException
    │   └── api/trial/route.ts    ← POST: Upstash rate-limit + Zod + Neon insert + Resend confirmation + Sentry capture
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx        ← Logo + nav + trial CTA · mobile menu · canonical nav events
    │   │   └── Footer.tsx        ← Impressum/Datenschutz links · cookie-manage trigger · Inhaberin/USt-IdNr
    │   ├── ui/
    │   │   ├── Button.tsx           ← Next/Link-aware Button (primary/secondary/ghost)
    │   │   ├── Placeholder.tsx      ← Visible missing-asset slot
    │   │   ├── ShareButton.tsx      ← WhatsApp + IG (copy-fallback) + Copy-link, DE labels
    │   │   ├── CookieBanner.tsx     ← DSGVO-aligned ("Alle ablehnen" parity) — re-openable via 'consent:reopen'
    │   │   └── ConsentBootstrap.tsx ← Mounts PostHog (opt-out-by-default) + re-applies stored consent
    │   └── sections/
    │       ├── Hero.tsx          ← Headline + trial CTA + Mindbody secondary CTA · TRIAL_SIGNUP_STARTED on click
    │       ├── Classes.tsx       ← 4 class cards (Hatha/Vinyasa/Yin/Pranayama) · class_viewed on hover
    │       ├── Pricing.tsx       ← 3 tiers (Drop-in/10er Karte/Monatsmitgliedschaft) · PRICING_VIEWED via IntersectionObserver
    │       ├── Instructors.tsx   ← Anna + Jonas profiles · instructor_profile_viewed events
    │       ├── About.tsx         ← Studio story (server component — no client JS)
    │       └── Visit.tsx         ← Address + hours table + tel/WhatsApp/Maps CTAs + ShareButton
    └── lib/
        ├── site.ts               ← Configuration-as-Code: SITE constant (business data + KPI contract)
        ├── consent.ts            ← DSGVO consent record (180d expiry) + applyConsent() script-upgrade pattern
        ├── posthog.ts            ← PostHog SDK — EU region · opt_out_capturing_by_default
        ├── analytics.ts          ← Consent-gated track() helper · EVENTS canonical constants · trackEssential() for consent breadcrumbs
        ├── ratelimit.ts          ← Upstash Ratelimit (5/min/IP) · hashIp() SHA-256 with rotating salt
        ├── resend.ts             ← Resend SDK client + FROM_EMAIL
        ├── db.ts                 ← Neon HTTP driver + Drizzle ORM client
        ├── schema.ts             ← Drizzle schema: trial_signups (UUID PK · firstName/email/phone/classSlug/...)
        └── seo/schema.ts         ← YogaStudio JSON-LD generator (per templates/studio.md §11.8)
```

---

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # full type-check + Next build
pnpm lint         # Biome lint
pnpm validate     # lint + build
pnpm db:generate  # Drizzle: generate migration from schema diff
pnpm db:push      # Drizzle: apply schema to current DATABASE_URL
pnpm db:studio    # Drizzle: open studio UI for the connected DB
```

---

## Rollback drill

(To be executed once before first production deploy — log the result here.)

5-minute restore from Vercel rollback:
1. Vercel dashboard → reference-studio-booking → Deployments
2. Find last known-good deployment (green checkmark + production tag)
3. Click `⋯` → Promote to Production
4. Verify production URL serves the rolled-back version
5. **For schema migrations:** check Drizzle migration journal — production-safe rollback may require a `down` migration first

**Drill log:**
- [ ] First drill not yet executed — run before initial production cutover.

---

## DRAFT items — owner-confirm before production launch

These items have placeholder values. Replace them with owner-confirmed real data before flipping `noindex` off.

- [ ] Legal name + USt-IdNr (currently `Anna Hartmann` + `DE123456789` — placeholders)
- [ ] Berufshaftpflicht insurance details (Impressum §4)
- [ ] Real Studio email (`hallo@studio-sereno-yoga.de` — placeholder)
- [ ] Real phone + WhatsApp number (`+49 30 1234 5678` — placeholder)
- [ ] Address — full street number + postal code (`Auguststraße 42, 10117` — placeholder)
- [ ] Geo coordinates — verify against Google Maps pin
- [ ] Real Mindbody studio ID URL (`studioid=999999` — placeholder)
- [ ] All class prices confirmed
- [ ] Real instructor names + bios + portraits
- [ ] Real schedule data — currently hardcoded in `stundenplan/page.tsx`, swap for live Mindbody feed
- [ ] Real photos in 1 Hero + 4 Class + 2 About + 2 Instructor slots
- [ ] Real Instagram handle
- [ ] Real Sentry DSN + project + auth token
- [ ] Real GA4 measurement ID (`G-XXXXXX` placeholder in layout.tsx)
- [ ] Real Microsoft Clarity ID + PostHog project key
- [ ] Real Neon DATABASE_URL (EU region)
- [ ] Real Upstash credentials (EU-West)
- [ ] Real Resend API key + verified sending domain
- [ ] IP_HASH_SALT generated and stored (rotate quarterly)
- [ ] Real domain (`studio-sereno-yoga.de` — placeholder)
- [ ] DPA (Auftragsverarbeitungs­vertrag) signed with: Vercel, Sentry, GA4, Clarity, PostHog, Resend, Neon, Upstash, Mindbody

---

## What's wired vs deferred

| Layer | Status |
|---|---|
| Tailwind v4 via PostCSS plugin + tokens in `@theme {}` | ✅ |
| DSGVO-aligned consent banner ("Alle ablehnen" parity, 180d) | ✅ |
| PostHog opt-out-by-default + EU region | ✅ |
| Consent-gated GA4 + Clarity + PostHog via `track()` | ✅ |
| Sentry client + server + edge (all `sendDefaultPii: false`) | ✅ (env stubs) |
| Drizzle + Neon HTTP driver | ✅ (env stubs) |
| Upstash rate-limit on /api/trial (5/min, hashed IP) | ✅ |
| Zod validation on /api/trial | ✅ |
| Resend trial confirmation email | ✅ (env stubs) |
| Honeypot on trial form | ✅ |
| DSGVO Impressum (TMG §5 — 8 sections) | ✅ |
| DSGVO Datenschutzerklärung (10 sections) | ✅ |
| OG + Twitter Cards | ✅ |
| ShareButton (WhatsApp + IG + Copy, DE labels) | ✅ |
| YogaStudio JSON-LD | ✅ |
| Mindbody deep-link | ✅ (placeholder URL) |
| 404 + 500 branded pages (500 captures to Sentry) | ✅ |
| `vercel.json` 6 security headers | ✅ |
| GitHub Actions CI | ✅ |
| `robots.txt` Disallow: / (demo) | ✅ |
| Real photos | ❌ — placeholder slots |
| Real schedule from Mindbody API | ❌ — hardcoded DRAFT data |
| Real legal IDs / phone / email | ❌ — placeholders |
| Visual / browser verification | ❌ — deferred to human reviewer |
| `pnpm install` + `pnpm build` execution | ❌ — not run yet; agency reviewer to verify first |
| `pnpm db:push` schema apply | ❌ — requires real DATABASE_URL |
