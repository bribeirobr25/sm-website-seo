# Restructuring Plan — Delete `clients/`, Push Improvements Up Into Rules + Templates

**Authored:** 2026-05-19 (Plan agent)
**Audit incorporated:** 2026-05-19 (`CLIENTS-RESTRUCTURE-PLAN-AUDIT-2026-05-19.md` — 10 amendments applied: §2A Footer + Header added · §3 tokens.canonical.css ↔ TECH.md §7 binding · §4 line-number-as-anchor hygiene note · §4C `(Phase 3b — pending)` suffix strip · new Phase 0 inventory verification · Phase 3 `clients/` vs `scaffolds/` distinction · Phase 4 derived-pattern labeling · Phase 6 commit-message diff summary · Phase 7 Decision 1 resolution + scaffolds/README purity · R15/R16/R17 risk additions)
**Execution status:** ✅ **COMPLETE 2026-05-19** — all 8 phases shipped. Phase 0 inventory verified (5 dotfiles added as NEW-C through NEW-I after live discovery). Phase 1 extracted 27 component files + 51 non-component files; both scaffolds build clean. Phase 2 updated 8 spec sheets + components/README + zombie cleanup in TECH/DESIGN-BEST-PRACTICES/beauty.md + state-of-agency in root CLAUDE.md + PENDING.md. Phase 3 rewrote root CLAUDE.md Step 3 with the `cp -r scaffolds/{tier}/ clients/[slug]/` recipe + added clients/README.md teaching artifact + added "Imported canonical components" working-principles bullet. Phase 4 added derived-pattern §9 subsections to health/education/automotive templates (6+6+7 derivation labels). Phase 5 archived `docs/clients/reference-{solo,studio}-booking/` with status banners + updated `docs/clients/archived/README.md`. Phase 6 deleted `clients/reference-{solo-barber,studio-booking}/` (~1.1 GB freed including node_modules) after 4 audit-caught scaffold-purity fixes (barber domain in astro.config + BR/DE-specific CookieBanner links + studio-specific Drizzle schema). Phase 7 archived `PHASE-3B-PREP.md` + resolved Decision 1 in UI-UX-INTEGRATION-PLAN-AUDIT + added "Recently resolved" entry to PENDING.md.

## 1. Executive summary

This plan distills every agency-canonical artifact out of `clients/reference-solo-barber/` (Tier 2 / Astro) and `clients/reference-studio-booking/` (Tier 3 / Next.js) — the 8 newly-shipped components, the extended token canon, the working Sentry/Drizzle/Neon/Upstash/Resend/PostHog wiring, the LGPD + DSGVO legal pages, the cookie-banner + consent layer, the BarberShop / SportsActivityLocation `@graph` schemas, the vercel.json + CI scaffolds — and lands each in a permanent home in `docs/design/` (and, where genuinely value-additive, a new `scaffolds/` directory). After extraction is complete and verified, the entire `clients/` tree is deleted, the root `CLAUDE.md` Step 3 workflow is rewritten ("scaffold from rules, not from reference impls"), the 3 gap-vertical templates (health · education · automotive) get cross-pollinated §9 patterns, and per-client docs under `docs/clients/reference-*/` are archived. The work is staged in **8 independently-revertable phases** (Phase 0 inventory verification + Phases 1–7).

---

## 2. Inventory — what's getting moved, archived, or deleted

The table below uses these symbols: 🟢 already in docs (just delete the code) · 🟡 partially in docs (need to extract the working code as the canonical reference) · 🔴 only in code (loss-risk if just deleted).

### 2A. `clients/reference-solo-barber/` — Tier 2 Astro

| # | Artifact | Scope | Doc'd? | Disposition |
|---|---|---|---|---|
| 1 | `src/components/ui/HalfPillCTA.astro` | Universal (any tier) | 🟡 spec | Move → `docs/design/components/_impl/HalfPillCTA.astro` |
| 2 | `src/components/sections/LabelCountHeader.astro` | Universal | 🟡 spec | Move → `docs/design/components/_impl/LabelCountHeader.astro` |
| 3 | `src/components/layout/HoursInNav.astro` | Universal | 🟡 spec | Move → `docs/design/components/_impl/HoursInNav.astro` |
| 4 | `src/components/sections/StatCallouts.astro` | Universal | 🟡 spec | Move → `docs/design/components/_impl/StatCallouts.astro` |
| 5 | `src/components/layout/Section.astro` (alternating-bg) | Universal | 🟡 spec | Move → `docs/design/components/_impl/Section.astro` |
| 6 | `src/components/ui/MarqueeCTA.astro` | Universal | 🟡 spec | Move → `docs/design/components/_impl/MarqueeCTA.astro` |
| 7 | `src/components/sections/EyebrowDisplayHero.astro` | Universal (with SEO guard) | 🟡 spec | Move → `docs/design/components/_impl/EyebrowDisplayHero.astro` |
| 8 | `src/components/ui/SplitText.astro` | Universal | 🟡 spec | Move → `docs/design/components/_impl/SplitText.astro` |
| 9 | `src/components/ui/CookieBanner.astro` | Universal (Astro variant) | 🟡 LEGAL.md describes spec, no code | Move → `docs/design/components/_impl/CookieBanner.astro` |
| 10 | `src/components/ui/Button.astro` | Universal (Astro variant) | 🔴 | Move → `docs/design/components/_impl/Button.astro` |
| 11 | `src/components/ui/ShareButton.astro` | Universal (Astro variant) | 🟡 SOCIAL-SHARING.md describes spec | Move → `docs/design/components/_impl/ShareButton.astro` |
| 12 | `src/components/ui/Placeholder.astro` | Universal (Astro variant) | 🟡 TECH.md §770 references deleted path | Move → `docs/design/components/_impl/Placeholder.astro`; fix TECH.md §770 path |
| 13 | `src/lib/consent.ts` | Universal (Astro/vanilla TS) | 🟡 LEGAL.md describes spec | Move → `docs/design/_impl/lib/consent.ts` |
| 14 | `src/lib/analytics.ts` (consent-gated track()) | Universal (Astro/vanilla) | 🟡 ANALYTICS.md describes spec | Move → `docs/design/_impl/lib/analytics.ts` |
| 15 | `src/lib/seo/schema.ts` (BarberShop `@graph` generator) | Tier 2 (Astro pattern) — also a paste-ready example for `templates/beauty.md` §11.8 | 🟡 SEO.md §5 documents the pattern; templates §11.8 has the JSON | Embed the TS-generator pattern into `SEO.md` §5 as a fenced code block (the JSON is already in templates) |
| 16 | `src/styles/tokens.css` extensions (motion×5, easing×4, tracking×3, stagger×1, `--radius-pill-half`, palette ×4) | Universal | 🟢 TECH.md §7 already captures the token canon | Verify TECH.md §7 captures all extensions; delete the live file |
| 17 | `src/styles/global.css` | Tier 2 baseline (Astro) | 🔴 | Move → `docs/design/_impl/styles/global.css` |
| 18 | `src/layouts/BaseLayout.astro` | Tier 2 (Astro) | 🔴 | Move → `docs/design/_impl/layouts/BaseLayout.astro` |
| 19 | `src/pages/politica-de-privacidade.astro` (LGPD 7-section) | Tier 2 BR | 🟡 LEGAL.md §BR describes spec | Move → `docs/design/_impl/pages/politica-de-privacidade.astro` |
| 20 | `src/pages/404.astro` + `src/pages/500.astro` | Tier 2 (Astro) | 🟡 INFRASTRUCTURE.md describes pattern, not code | Move → `docs/design/_impl/pages/404.astro` + `500.astro` |
| 21 | `src/pages/index.astro` + `index.astro` sections (Hero/Services/Gallery/Reviews/Visit/About) | Per-client content — barber-specific | — | Delete (not canonical) |
| 22 | `src/pages/demo/*` (9 demo pages) | Per-component visual demos | 🟡 useful as worked examples | Move → `docs/design/components/_impl/_demo/*` |
| 23 | `src/lib/site.ts` (SITE constant — barber data) | Per-client | — | Delete |
| 24 | `astro.config.ts` (with Sentry integration block) | Tier 2 (Astro) | 🟡 INTEGRATIONS.md describes pattern | Move (sanitized) → `docs/design/_impl/config/astro.config.ts` |
| 25 | `sentry.client.config.mjs` + `sentry.server.config.mjs` | Tier 2 (Astro) | 🟡 INTEGRATIONS.md §Sentry pattern | Move → `docs/design/_impl/config/sentry.client.config.mjs` + `sentry.server.config.mjs` |
| 26 | `vercel.json` (6 security headers + cache) | Universal (Astro flavor: `framework: "astro"`) | 🟡 INFRASTRUCTURE.md describes spec, not code | Move → `docs/design/_impl/config/vercel.astro.json` |
| 27 | `.github/workflows/ci.yml` | Universal | 🟡 INFRASTRUCTURE.md describes spec | Move → `docs/design/_impl/config/ci.yml` |
| 28 | `biome.json` + `tsconfig.json` + `package.json` | Tier 2 (Astro) version pins | 🔴 | Move → `docs/design/_impl/config/{biome,tsconfig,package}.astro.json` (rename for tier disambiguation) |
| 29 | `public/favicon.svg` + `public/robots.txt` | Per-client (placeholder) | 🟡 TECH.md §20 requires both, no template provided | Delete — capture a `robots.txt.example` ("Disallow: / # demo" → "Allow: / # production") inside `docs/design/INFRASTRUCTURE.md` |
| 30 | `README.md` | Per-impl readme | — | Delete |
| 31 | `dist/` + `node_modules/` + `.astro/` | Build artifacts | — | Delete (gitignored anyway) |
| NEW-A | `src/components/layout/Footer.astro` | Tier 2 (Astro) | 🔴 only in code — contains DE legal disclosure link layout + WhatsApp CTA + social links pattern | Move → `docs/design/_impl/components/Footer.astro` |
| NEW-B | `src/components/layout/Header.astro` | Tier 2 (Astro) | 🔴 only in code — sticky header pattern with `backdrop-blur-sm` + `bg-bg/95`, integrates with HoursInNav | Move → `docs/design/_impl/components/Header.astro` |
| NEW-C | `.env.example` | Tier 2 (Astro) — required for new client onboarding | 🔴 only in code | Move → `docs/design/_impl/config/env.astro.example`; also copy into `scaffolds/astro-tier2/.env.example` |
| NEW-D | `.gitignore` | Universal | 🔴 only in code | Move → `docs/design/_impl/config/.gitignore` (canonical, single copy; both scaffolds copy from here) |
| NEW-E | `.nvmrc` | Tier 2 (Astro requires Node 22) | 🔴 only in code | Move → `docs/design/_impl/config/.nvmrc.astro`; copy into `scaffolds/astro-tier2/.nvmrc` |

> **Audit correction 2026-05-19:** NEW-A + NEW-B added per `CLIENTS-RESTRUCTURE-PLAN-AUDIT-2026-05-19.md` Issue 1 — two canonical Tier-2 layout components missing from original inventory.
>
> **Phase 0 finding 2026-05-19 (live execution):** NEW-C + NEW-D + NEW-E added when `find clients/reference-solo-barber -type f` discovered three dotfiles (.env.example, .gitignore, .nvmrc) absent from the original §2A. All three are required for new-client scaffolding (env vars, ignore patterns, Node version pin) and qualify as 🔴 "only in code" by the plan's own classification.

### 2B. `clients/reference-studio-booking/` — Tier 3 Next.js

| # | Artifact | Scope | Doc'd? | Disposition |
|---|---|---|---|---|
| 32 | `instrumentation.ts` (Sentry v10 hook) | Tier 3 (Next.js 15+) | 🟡 INTEGRATIONS.md §Sentry Next.js | Move → `docs/design/_impl/config/instrumentation.ts` |
| 33 | `sentry.client.config.ts` + `sentry.server.config.ts` + `sentry.edge.config.ts` | Tier 3 (Next.js) | 🟡 INTEGRATIONS.md §Sentry pattern | Move all three → `docs/design/_impl/config/sentry.{client,server,edge}.config.ts` |
| 34 | `next.config.ts` (with `withSentryConfig` wrapper, `typedRoutes: true`, AVIF/WebP) | Tier 3 | 🟡 INTEGRATIONS.md describes config keys | Move → `docs/design/_impl/config/next.config.ts` |
| 35 | `vercel.json` | Tier 3 (different framework key, no buildCommand) | 🔴 | Move → `docs/design/_impl/config/vercel.nextjs.json` |
| 36 | `drizzle.config.ts` + `src/lib/db.ts` + `src/lib/schema.ts` | Tier 3 ONLY | 🟡 INTEGRATIONS.md §Neon + lazy-init pattern documented at §41 | Move → `docs/design/_impl/lib/db.ts` + `schema.ts` + `drizzle.config.ts` |
| 37 | `src/lib/ratelimit.ts` (Upstash + IP hashing + lazy init) | Tier 3 ONLY | 🟡 INTEGRATIONS.md §Upstash | Move → `docs/design/_impl/lib/ratelimit.ts` |
| 38 | `src/lib/resend.ts` (lazy init) | Tier 3 ONLY (transactional email) | 🟡 INTEGRATIONS.md §Resend | Move → `docs/design/_impl/lib/resend.ts` |
| 39 | `src/lib/posthog.ts` (EU + opt-out-by-default) | Tier 3 ONLY | 🟡 INTEGRATIONS.md §PostHog | Move → `docs/design/_impl/lib/posthog.ts` |
| 40 | `src/lib/consent.ts` (DSGVO variant, identical to BR) | Universal | 🟢 duplicate of #13 | Single copy at `docs/design/_impl/lib/consent.ts` is sufficient |
| 41 | `src/lib/analytics.ts` (4-stream wiring) | Tier 3 | 🟡 ANALYTICS.md | Move → `docs/design/_impl/lib/analytics.nextjs.ts` |
| 42 | `src/lib/seo/schema.ts` (SportsActivityLocation `@graph`) | Tier 3 (Next.js) | 🟡 SEO.md §5 + templates/studio.md §11.8 | Embed in SEO.md §5 + templates §11.8 (already there); delete |
| 43 | `src/components/ui/CookieBanner.tsx` | Tier 3 React | 🔴 | Move → `docs/design/components/_impl/CookieBanner.tsx` |
| 44 | `src/components/ui/ConsentBootstrap.tsx` (PostHog mount + consent re-apply) | Tier 3 ONLY | 🔴 | Move → `docs/design/components/_impl/ConsentBootstrap.tsx` |
| 45 | `src/components/ui/Button.tsx` + `Placeholder.tsx` + `ShareButton.tsx` | Tier 3 React variants | 🔴 | Move → `docs/design/components/_impl/{Button,Placeholder,ShareButton}.tsx` |
| 46 | `src/components/layout/Header.tsx` + `Footer.tsx` | Tier 3 React | 🔴 (footer has DE-DSGVO disclosure pattern) | Move → `docs/design/_impl/components/Header.tsx` + `Footer.tsx` |
| 47 | `src/components/sections/{Hero,Classes,Pricing,Instructors,About,Visit}.tsx` | Per-client content | — | Delete (not canonical) |
| 48 | `src/app/layout.tsx` (RootLayout + JSON-LD + GA4 consent gating + Clarity) | Tier 3 (Next.js App Router) | 🔴 | Move → `docs/design/_impl/app/layout.tsx` |
| 49 | `src/app/globals.css` (Tailwind v4 `@theme {}` block — Next variant) | Tier 3 | 🔴 | Move → `docs/design/_impl/styles/globals.css` |
| 50 | `src/app/error.tsx` + `not-found.tsx` | Tier 3 (Next.js) | 🟡 INFRASTRUCTURE.md describes 404/500 | Move → `docs/design/_impl/app/{error,not-found}.tsx` |
| 51 | `src/app/impressum/page.tsx` (DSGVO TMG §5 — 8 sections) | DE | 🟡 LEGAL.md §DE describes spec | Move → `docs/design/_impl/app/legal/impressum.tsx` |
| 52 | `src/app/datenschutz/page.tsx` (DSGVO Datenschutzerklärung — 10 sections) | DE | 🟡 LEGAL.md §DE describes spec | Move → `docs/design/_impl/app/legal/datenschutz.tsx` |
| 53 | `src/app/api/trial/route.ts` (Zod + honeypot + rate-limit + Drizzle + Resend + Sentry) | **Tier 3 ONLY — unique to this impl** | 🟡 FORMS.md describes patterns; INTEGRATIONS.md describes each integration; no end-to-end worked example anywhere | **CRITICAL** — move → `docs/design/_impl/app/api/trial/route.ts`. Also embed as the canonical worked example in `FORMS.md` §form-endpoint pattern |
| 54 | `src/app/{page,kurse,stundenplan,trial}/page.tsx` | Per-client content | — | Delete |
| 55 | `src/lib/site.ts` (SITE constant — studio data) | Per-client | — | Delete |
| 56 | `package.json` (Next 16 + Drizzle + Neon + Upstash + Resend + Sentry + PostHog version pins) | Tier 3 | 🔴 | Move → `docs/design/_impl/config/package.nextjs.json` |
| 57 | `postcss.config.mjs` + `tsconfig.json` + `biome.json` + `.nvmrc` | Tier 3 | 🔴 | Move → `docs/design/_impl/config/{postcss,tsconfig,biome}.nextjs.{mjs,json}` + `.nvmrc.nextjs` |
| 58 | `.github/workflows/ci.yml` | Universal (same as #27) | 🟢 duplicate | Single copy at `docs/design/_impl/config/ci.yml` |
| 59 | `public/favicon.svg` + `robots.txt` | Per-client | — | Delete |
| 60 | `README.md` | Per-impl readme | — | Delete |
| NEW-F | `.env.example` | Tier 3 (Next.js) — required for new client onboarding | 🔴 only in code | Move → `docs/design/_impl/config/env.nextjs.example`; copy into `scaffolds/nextjs-tier3/.env.example` |
| NEW-G | `.gitignore` | Universal — duplicate of NEW-D | 🟢 | Covered by NEW-D single canonical copy |
| NEW-H | `next-env.d.ts` | Tier 3 auto-generated by `next dev` | — | Delete (regenerates on first dev run) |
| NEW-I | `tsconfig.tsbuildinfo` | Auto-generated build cache | — | Delete (gitignored anyway) |

> **Phase 0 finding 2026-05-19 (live execution):** NEW-F → NEW-I added when `find clients/reference-studio-booking -type f` discovered four files absent from the original §2B. NEW-F is the Tier-3 `.env.example` (required for scaffolding). NEW-H + NEW-I are auto-generated and don't need extraction. NEW-G is universal and de-duplicated against NEW-D.

### 2C. `docs/clients/reference-*/` per-client docs

| # | Artifact | Scope | Disposition |
|---|---|---|---|
| 61 | `docs/clients/reference-solo-barber/CLAUDE.md` (151 lines) | Canonical example of per-client CLAUDE.md | **Archive** → `docs/clients/archived/reference-solo-barber/CLAUDE.md` |
| 62 | `docs/clients/reference-solo-barber/BRIEF.md` (139 lines) | Canonical example of per-client BRIEF.md | **Archive** → `docs/clients/archived/reference-solo-barber/BRIEF.md` |
| 63 | `docs/clients/reference-solo-barber/design.md` (106 lines) | Canonical example of per-client design.md | **Archive** → `docs/clients/archived/reference-solo-barber/design.md` |
| 64 | `docs/clients/reference-studio-booking/CLAUDE.md` (188 lines) | Canonical example for Tier 3 / DE-DSGVO | **Archive** → `docs/clients/archived/reference-studio-booking/CLAUDE.md` |
| 65 | `docs/clients/reference-studio-booking/BRIEF.md` (136 lines) | Canonical example for Tier 3 | **Archive** → `docs/clients/archived/reference-studio-booking/BRIEF.md` |
| 66 | `docs/clients/reference-studio-booking/design.md` (129 lines) | Canonical example for Tier 3 | **Archive** → `docs/clients/archived/reference-studio-booking/design.md` |

---

## 3. Destination architecture

### Recommended: **Option 3 (Hybrid) — `docs/design/_impl/` + `docs/design/components/_impl/`**

```
docs/design/
├── components/
│   ├── *.md                         (8 spec sheets — unchanged content, paths updated)
│   ├── README.md                    (updated impl pointer)
│   ├── PHASE-3B-PREP.md             (archived in place with status banner)
│   └── _impl/                       ← NEW: working code that backs each spec
│       ├── HalfPillCTA.astro
│       ├── LabelCountHeader.astro
│       ├── HoursInNav.astro
│       ├── StatCallouts.astro
│       ├── Section.astro
│       ├── MarqueeCTA.astro
│       ├── EyebrowDisplayHero.astro
│       ├── SplitText.astro
│       ├── CookieBanner.astro
│       ├── CookieBanner.tsx         ← React variant for Tier 3
│       ├── ConsentBootstrap.tsx
│       ├── Button.astro             ← Astro variant
│       ├── Button.tsx               ← React variant
│       ├── Placeholder.astro
│       ├── Placeholder.tsx
│       ├── ShareButton.astro
│       ├── ShareButton.tsx
│       ├── README.md                ← NEW: explains the _impl/ convention
│       └── _demo/                   ← 9 demo pages (Astro)
│           ├── index.astro
│           ├── half-pill-cta.astro
│           ├── label-count-header.astro
│           ├── hours-in-nav.astro
│           ├── stat-callouts.astro
│           ├── alternating-section-bg.astro
│           ├── marquee-cta.astro
│           ├── eyebrow-display-hero.astro
│           └── split-text.astro
└── _impl/                           ← NEW: non-component working code
    ├── README.md                    ← explains the _impl/ convention + tier mapping
    ├── lib/
    │   ├── consent.ts               ← Universal (both impls have it identical)
    │   ├── analytics.ts             ← Astro/vanilla flavor (Tier 2)
    │   ├── analytics.nextjs.ts      ← Tier 3 flavor (4-stream + PostHog hook)
    │   ├── db.ts                    ← Tier 3 ONLY (Drizzle + Neon HTTP, lazy init)
    │   ├── schema.ts                ← Tier 3 ONLY (Drizzle pgTable)
    │   ├── ratelimit.ts             ← Tier 3 ONLY (Upstash + hashIp)
    │   ├── resend.ts                ← Tier 3 ONLY (lazy init)
    │   └── posthog.ts               ← Tier 3 ONLY (EU + opt-out)
    ├── layouts/
    │   └── BaseLayout.astro         ← Tier 2 (Astro)
    ├── components/
    │   ├── Header.tsx               ← Tier 3 (React, mobile menu pattern)
    │   └── Footer.tsx               ← Tier 3 (DE-DSGVO disclosure pattern)
    ├── app/
    │   ├── layout.tsx               ← Tier 3 RootLayout
    │   ├── error.tsx                ← Tier 3 500 (Sentry capture)
    │   ├── not-found.tsx            ← Tier 3 404
    │   ├── legal/
    │   │   ├── impressum.tsx        ← Tier 3 DE-DSGVO TMG §5
    │   │   └── datenschutz.tsx      ← Tier 3 DE-DSGVO 10-section
    │   └── api/
    │       └── trial/
    │           └── route.ts         ← Tier 3 form-endpoint canonical pattern
    ├── pages/
    │   ├── 404.astro                ← Tier 2
    │   ├── 500.astro                ← Tier 2
    │   └── politica-de-privacidade.astro  ← Tier 2 BR-LGPD 7-section
    ├── styles/
    │   ├── global.css               ← Tier 2 Astro base
    │   ├── globals.css              ← Tier 3 Next.js base (Tailwind v4 @theme)
    │   └── tokens.canonical.css     ← NEW: the EXECUTABLE FORM of TECH.md §7 token canon. Must include a leading JSDoc `/* TECH.md §7 is the canonical source. If these diverge, TECH.md §7 wins. Sync quarterly per R1. */`. Holds motion + easing + tracking + radii + base palette only (non-vertical-specific); per-vertical palette swaps live in templates §6.
    └── config/
        ├── astro.config.ts          ← Tier 2 (Sentry integration block)
        ├── next.config.ts           ← Tier 3 (withSentryConfig wrapper)
        ├── instrumentation.ts       ← Tier 3 (Sentry v10 hook)
        ├── sentry.client.config.mjs ← Tier 2
        ├── sentry.server.config.mjs ← Tier 2
        ├── sentry.client.config.ts  ← Tier 3
        ├── sentry.server.config.ts  ← Tier 3
        ├── sentry.edge.config.ts    ← Tier 3
        ├── vercel.astro.json        ← Tier 2 (with framework: "astro")
        ├── vercel.nextjs.json       ← Tier 3
        ├── package.astro.json       ← Tier 2 version pins
        ├── package.nextjs.json      ← Tier 3 version pins
        ├── biome.json               ← Universal (identical in both impls)
        ├── tsconfig.astro.json      ← Tier 2
        ├── tsconfig.nextjs.json     ← Tier 3
        ├── postcss.config.mjs       ← Tier 3 only
        ├── drizzle.config.ts        ← Tier 3 only
        ├── ci.yml                   ← Universal GitHub Actions workflow
        └── .nvmrc.nextjs            ← Tier 3 (Node 20 hint)

scaffolds/                           ← NEW (Hybrid Option 3): minimal install-ready trees
├── README.md                        ← "Use these when scaffolding new clients per CLAUDE.md Step 3"
├── astro-tier2/
│   ├── package.json                 ← symlink-style cited from _impl/config (or copy + sync test)
│   ├── astro.config.ts
│   ├── tsconfig.json
│   ├── biome.json
│   ├── vercel.json
│   ├── .github/workflows/ci.yml
│   ├── sentry.client.config.mjs
│   ├── sentry.server.config.mjs
│   ├── .env.example
│   ├── public/
│   │   ├── favicon.svg              ← placeholder TE-monogram (clearly marked DRAFT)
│   │   └── robots.txt               ← "Disallow: / # demo phase"
│   └── src/
│       ├── styles/
│       │   ├── tokens.css           ← canonical @theme {} (palette + motion + easing + tracking)
│       │   └── global.css
│       ├── layouts/BaseLayout.astro
│       ├── lib/
│       │   ├── consent.ts
│       │   ├── analytics.ts
│       │   └── site.ts.example      ← SITE shape with TODO comments
│       └── pages/
│           ├── 404.astro
│           └── 500.astro
└── nextjs-tier3/
    ├── package.json
    ├── next.config.ts
    ├── instrumentation.ts
    ├── tsconfig.json
    ├── biome.json
    ├── postcss.config.mjs
    ├── drizzle.config.ts
    ├── vercel.json
    ├── .github/workflows/ci.yml
    ├── sentry.{client,server,edge}.config.ts
    ├── .nvmrc
    ├── .env.example
    ├── public/{favicon.svg,robots.txt}
    └── src/
        ├── lib/{consent,analytics,db,schema,ratelimit,resend,posthog,site.example}.ts
        ├── app/
        │   ├── layout.tsx
        │   ├── error.tsx
        │   ├── not-found.tsx
        │   ├── globals.css
        │   └── api/health/route.ts.example
        └── components/{layout,ui}/...
```

### Why hybrid (recommended over pure docs/ or pure scaffolds/)

**Pros**
- `docs/design/components/_impl/` keeps the **8 canonical components** glued to their spec sheets (next-to relationship — "open the spec, the working code is one directory away"). This survives the deletion cleanly and matches the existing audit-amendment language ("the components are the value; the scaffold is just a container").
- `docs/design/_impl/` gives a single canonical home for the **Tier-3-only** working code (`db.ts`, `ratelimit.ts`, `resend.ts`, `posthog.ts`, `app/api/trial/route.ts`, `instrumentation.ts`, Sentry edge config) — code that is asymmetrically painful to lose because INTEGRATIONS.md only describes the pattern, never shows the full lazy-init plumbing or the end-to-end form endpoint.
- `scaffolds/` provides a build-validated drop-in for new client work. The user's deletion goal is to eliminate "reference impl lives in a dark+amber barber identity" friction — `scaffolds/` solves exactly that by shipping content-free, token-neutral, version-pinned starters. This preserves the original "build a demo in < 4 hours" property.
- Per-tier separation (`astro-tier2/` and `nextjs-tier3/`) maps 1:1 to the `TECH.md` §1 stack-decision matrix.
- All three locations are **outside `clients/`**, so the user's "no reference impl in clients/" goal is satisfied.

**Cons**
- Mild duplication: `scaffolds/astro-tier2/src/lib/consent.ts` is the same file as `docs/design/_impl/lib/consent.ts`. Mitigation: have `scaffolds/.../consent.ts` start with a one-line comment `// Sourced from docs/design/_impl/lib/consent.ts. Keep in sync.` and add a Phase-7 verification step (`diff -q` check). Acceptable for ~6 files.
- `_impl/` directories aren't part of any build — they're version-controlled docs/snippets. A future reader could mistake `docs/design/_impl/lib/db.ts` for a live import. Mitigation: `_impl/README.md` clearly labels each subtree "not built, not imported anywhere — canonical source-of-truth code paste targets."

### Alternatives considered + why rejected

**Option 1 (Everything under `docs/design/`, no `scaffolds/`)** — loses the build-validated drop-in property. Without a `scaffolds/astro-tier2/` whose `package.json` is install-clean and lockfile-aligned, the only path for a new client is "copy 30 files from 7 different `_impl/*/` directories" — that's exactly the kind of friction the reference impls existed to remove. Also, working configs (vercel.json, package.json) are awkward when they don't sit at a project root.

**Option 2 (Pure `scaffolds/`, no `_impl/`)** — fights the existing "spec sheet is source of truth, code is executable reference" convention encoded in `docs/design/components/*.md` §8 ("Implementation pointer"). After deletion the spec sheets would need to point at `scaffolds/astro-tier2/src/components/...`, which has the wrong semantic ("this is one example; the spec is canonical"). Mixing canonical components into a scaffolds tree also makes the scaffolds harder to keep minimal.

### What this means for root `CLAUDE.md` Step 3

Rewrite Step 3 (lines 163-186 of root `CLAUDE.md`) from a `pnpm create astro@latest ...` recipe to a `cp -r scaffolds/{astro-tier2|nextjs-tier3} clients/[slug] && cd clients/[slug] && pnpm install` recipe with three follow-ups: (1) rename `package.json` `"name"` field, (2) populate `src/lib/site.ts` from `site.example.ts`, (3) declare which canonical components from `docs/design/components/` are imported into this build (per the existing TECH.md §20 "Imported components" table convention).

---

## 4. Cross-reference impact — every doc that must update

> **Phase 2 execution hygiene (added 2026-05-19 per audit Issue 2):** every line number in §4 is an **approximate anchor, not a precise edit target**. Several standards docs (TECH.md, DESIGN-BEST-PRACTICES.md, PENDING.md) have been edited multiple times since this plan was authored. **For each item: grep the file for the quoted old content before applying the replacement.** If the content isn't found at the stated line, search the file. If not found anywhere, the item was pre-resolved (e.g., by Batch 0 housekeeping) — skip it and note in the commit message ("§4X pre-resolved, no edit needed"). The audit confirmed the `jean-souza-barber` + `StickyMobileCta` zombie references at §4M / §4T are still present in `docs/design/` and DO need fixing; this hygiene rule is general guidance, not a claim that any specific item is moot.

### 4A. Root `CLAUDE.md`

| Line | Current content | Replace with |
|---|---|---|
| 121 | `Client source code lives in clients/[client-slug]/.` | Same path, but add: "scaffolded from `scaffolds/astro-tier2/` or `scaffolds/nextjs-tier3/` per Step 3 below." |
| 165-176 | `pnpm create astro@latest . -- --template minimal ...` recipe | `cp -r scaffolds/{astro-tier2|nextjs-tier3} clients/[slug] && cd clients/[slug] && pnpm install` recipe, with sub-steps for rename + env + site.ts |
| 242-250 | "Current client roster — No active paying client builds … Two reference implementations live …" | Rewrite to: "No active paying client builds. The rule library is feature-complete; scaffolds in `scaffolds/` are the canonical starting points. Worked-example archives at `docs/clients/archived/reference-{solo-barber,studio-booking}/` retain the canonical per-client doc structures for reference." |

### 4B. `docs/audit/PENDING.md`

| Line | Current | Replace with |
|---|---|---|
| 14-15 | "Active client builds: two reference implementations live …" | "Active client builds: none. Scaffolds available at `scaffolds/astro-tier2/` + `scaffolds/nextjs-tier3/`. Archived worked-example per-client docs at `docs/clients/archived/reference-{solo-barber,studio-booking}/`." |
| 28 | "Upgrade local Node to ≥22.12.0 (currently v21.7.3) — required for solo-barber `astro check` + `pnpm build` to run locally" | Update wording: "required for `scaffolds/astro-tier2/` build validation" |
| 29 | "Apply reference-impl scaffold to a real prospect — `cp -r clients/reference-{matching-impl} clients/[real-slug]`" | Replace with: "Apply scaffold to a real prospect — `cp -r scaffolds/{astro-tier2\|nextjs-tier3} clients/[real-slug]`, then follow the imported-components convention per TECH.md §20" |
| 37 | "solo-barber reference impl is the closest stack-tier match for a Tier 2 / Type 1 info site" | "`scaffolds/astro-tier2/` is the matching stack" |
| 38 | "solo-barber reference impl is the closest Tier 2 / Type 2 stack match" | "`scaffolds/astro-tier2/` is the matching stack" |
| 55 | "Reference implementations: Both shipped: solo-barber …" | Status update: "✅ Restructuring complete 2026-05-19 (or whatever date) — both impls distilled into `scaffolds/` + `docs/design/_impl/`; per-client docs archived." |
| 65, 72-73 | UI/UX Integration Plan and Batch 3 entries reference `clients/reference-{solo-barber,studio-booking}/` | Add closing note: "Code now at `docs/design/components/_impl/` + `docs/design/_impl/`; per-client docs at `docs/clients/archived/`." |

### 4C. `docs/design/components/` — spec sheets

Each of the 8 spec sheets has its `**Implementation:**` line near top (line 4) and its `## 8. Implementation pointer` section (around line 108-160). Replace both. **Also (added 2026-05-19 per audit §1.3):** strip the trailing `(Phase 3b — pending)` suffix from each top-of-file Implementation line — Phase 3b is complete, the suffix is stale. Replace with `(Phase 3b — complete 2026-05-19; relocated to `_impl/` per CLIENTS-RESTRUCTURE-PLAN)` or simply remove the parenthetical entirely.

| File | Lines | Old path | New path |
|---|---|---|---|
| `half-pill-cta.md` | 4, 126 | `clients/reference-solo-barber/src/components/ui/HalfPillCTA.astro` | `docs/design/components/_impl/HalfPillCTA.astro` |
| `label-count-header.md` | 4, 113 | `clients/reference-solo-barber/src/components/sections/LabelCountHeader.astro` | `docs/design/components/_impl/LabelCountHeader.astro` |
| `hours-in-nav.md` | 4, 133 | `clients/reference-solo-barber/src/components/layout/HoursInNav.astro` | `docs/design/components/_impl/HoursInNav.astro` |
| `stat-callouts.md` | 4, 140 | `clients/reference-solo-barber/src/components/sections/StatCallouts.astro` | `docs/design/components/_impl/StatCallouts.astro` |
| `alternating-section-bg.md` | 4, 110 | `clients/reference-solo-barber/src/components/layout/Section.astro` | `docs/design/components/_impl/Section.astro` |
| `marquee-cta.md` | 4, 162 | `clients/reference-solo-barber/src/components/ui/MarqueeCTA.astro` | `docs/design/components/_impl/MarqueeCTA.astro` |
| `eyebrow-display-hero.md` | 4, 120 | `clients/reference-solo-barber/src/components/sections/EyebrowDisplayHero.astro` | `docs/design/components/_impl/EyebrowDisplayHero.astro` |
| `per-character-split.md` | 4, 145 | `clients/reference-solo-barber/src/components/ui/SplitText.astro` | `docs/design/components/_impl/SplitText.astro` |

### 4D. `docs/design/components/README.md`

| Line | Old | New |
|---|---|---|
| 18 | "Implementation pointer to the working Astro file in `clients/reference-solo-barber/src/components/`" | "Implementation pointer to the working Astro file in `docs/design/components/_impl/`" |
| 46 | "All 8 spec sheets drafted; all 8 components shipped to `clients/reference-solo-barber/src/components/`. Companion demo pages live at `clients/reference-solo-barber/src/pages/demo/` …" | "All 8 spec sheets drafted; all 8 components live at `docs/design/components/_impl/`. Companion demo pages at `docs/design/components/_impl/_demo/`. To preview locally, copy them into a `scaffolds/astro-tier2/`-based working tree and run `pnpm dev`." |
| 52 | "Check the implementation pointer — the working `.astro` file in `clients/reference-solo-barber/src/components/` is ready to copy." | Same, new path. |
| 54 | "components ship in `reference-solo-barber`'s dark+amber identity. Per-vertical token swaps …" | "Components ship in a neutral dark identity matching the canonical token block. Per-vertical token swaps …" |

### 4E. `docs/design/components/PHASE-3B-PREP.md`

This is a phase-handoff doc that's now historical (Phase 3b is ✅). Two options:
- **Keep but reframe.** Add a `**Status (post-2026-05-19 restructuring):**` banner at the top noting the artifacts moved. Keep the historical content as the worked-example of how the components got built.
- **Archive.** Move → `docs/design/components/archived/PHASE-3B-PREP.md`.

Recommendation: **archive** — it's a planning doc that has discharged its function. Active sessions don't need it. Lines 13, 18, 24, 92 inside it all point at deleted paths.

### 4F. `docs/audit/UI-UX-INTEGRATION-PLAN-2026-05-18.md`

Lines 22 · 24 · 28 · 36 · 37 · 65 · 79 · 92-93 · 133 · 139 · 178 · 191 all reference `clients/reference-solo-barber/...` paths. Since this is a closed/historical plan doc with an amendment-log convention, append a final amendment-log row dated post-restructuring noting: "Post-restructuring 2026-05-19: all `clients/reference-solo-barber/...` references are historical. Live paths: `docs/design/components/_impl/` (components) + `docs/design/_impl/styles/tokens.canonical.css` (tokens)." Do NOT rewrite the historical body — the amendment-log convention is exactly what survives this kind of cleanup.

### 4G. `docs/audit/UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md`

Same handling — historical audit doc. Append a single closing note: "Paths cited herein are historical. Current locations per `UI-UX-INTEGRATION-PLAN-2026-05-18.md` final amendment row." Lines 8 · 26 · 28 · 53-54 · 66 · 71 · 99 · 244 mention impls.

### 4H. `docs/audit/SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md` + `-AUDIT-2026-05-18.md`

Historical plan/audit pair. Same treatment — append a closing amendment-log row. Lines 44, 163-164, 194-196, 208-217, 286-288, 332, 338-343, 391-397 reference impls.

### 4I. `docs/audit/AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` + `-AUDIT-2026-05-16.md`

Historical. Same treatment.

### 4J. `docs/clients/archived/jean-souza-barber/CLAUDE.md`

Line 158 mentions "Jean as reference implementation." Update or leave (it's already archived; archived content is read-only by convention per `docs/clients/archived/README.md`). **Leave as-is** — the archived README explicitly says files in `archived/` are read-only.

### 4K. `docs/design/SEO.md` line 468

| Old | New |
|---|---|
| "The reference impls were patched in the 2026-05-18 hotfix; new client work inherits the corrected pattern." | "The 2026-05-18 hotfix patched the canonical pattern; the worked-example JSON-LD generator at `docs/design/_impl/lib/seo/schema.ts` (or equivalent paste-ready blocks in each `templates/*.md` §11.8) reflects the corrected pattern." |

### 4L. `docs/design/CITATIONS.md` lines 115 + 163

| Old | New |
|---|---|
| Line 115 ("The agency's reference impl (`reference-solo-barber/`) uses the booking-deep-link pattern.") | "The agency canonical pattern uses booking-deep-link via the Treatwell partner page. Pattern documented in `templates/beauty.md` §3 hero patterns." |
| Line 163 ("the BR equivalent of Treatwell — the agency's reference impl uses this") | "the BR equivalent of Treatwell — pattern documented in `templates/beauty.md` §3." |

### 4M. `docs/design/TECH.md`

| Line | Old | New |
|---|---|---|
| 485 | "A reference implementation lives in `clients/jean-souza-barber/src/lib/site.ts` …" | This already references a deleted path (Jean was deleted in Batch 0). Rewrite to: "A worked example lives in `docs/design/_impl/lib/site.example.ts` — DRAFT-marked fields, every one cross-referenced to `BRIEF.md` §Open questions for the owner conversation." (NEW FILE — add to scaffold extraction work.) |
| 770 | "Reference implementation: `clients/jean-souza-barber/src/components/ui/Placeholder.astro` (~40 lines, zero dependencies)." | "Reference implementation: `docs/design/components/_impl/Placeholder.astro`." |
| 783 | "Reference implementation: `clients/jean-souza-barber/src/components/ui/StickyMobileCta.astro` …" | StickyMobileCta is NOT in either reference impl. This is a Jean-era zombie reference. Either: (a) leave a TODO that needs net-new implementation; or (b) remove the reference. Recommend (b) and note it in the risk register. |

### 4N. `docs/design/INTEGRATIONS.md` line 41

| Old | New |
|---|---|
| "This was discovered during the agency reference-implementation validation (2026-05-17)" | Keep as historical context. The 2026-05-17 validation event happened — it's the *reason* the rule exists. Just add: "The canonical lazy-init pattern is now at `docs/design/_impl/lib/{db,ratelimit,resend}.ts`." |

### 4O. `docs/design/CHECKLIST.md` line 455

"# 12 vertical templates §11.6, both reference-impl BRIEF.md files) cross-references" — appears to be inside a comment. Change to "12 vertical templates §11.6 cross-references; archived reference-impl BRIEF.md files at `docs/clients/archived/reference-*/`."

### 4P. `docs/design/LEGAL.md` line 472

| Old | New |
|---|---|
| "The actual reference component ships in Batch 3 of the expansion plan as part of `INTEGRATIONS.md` / reference implementations." | "The canonical reference component lives at `docs/design/components/_impl/CookieBanner.astro` (Astro variant) + `CookieBanner.tsx` (React variant) — both consent-first with the 'Reject all' parity rule." |

### 4Q. `docs/design/templates/beauty.md` line 458

| Old | New |
|---|---|
| "the agency's `reference-solo-barber/` impl uses the booking-deep-link pattern" | Remove the parenthetical or rephrase: "the booking-deep-link pattern is canonical for the Modern Urban Barber sub-archetype." |

### 4R. `docs/design/templates/gastronomy.md` lines 206 + 343

| Line | Old | New |
|---|---|---|
| 206 | "Anchored to the Porto dos Ribeiros reference implementation." | "Anchored to the Heritage / family restaurant archetype documented in §6 (Porto dos Ribeiros worked-example archived at `docs/clients/archived/porto-dos-ribeiros/`)." |
| 343 | "A live reference implementation for the gastronomy vertical lands in Batch 3 of the agency-standards expansion … until then, the patterns alone are the source of truth." | "The patterns alone are the source of truth — no live reference impl exists for this vertical. Scaffold a real client per root `CLAUDE.md` Step 3 using `scaffolds/astro-tier2/` (Tier 2) or `scaffolds/nextjs-tier3/` (Tier 3)." |

### 4S. `docs/clients/archived/README.md`

Add two new rows to the archive table for `reference-solo-barber/` and `reference-studio-booking/` — date 2026-05-19, reason "Restructured 2026-05-19. Source code distilled into `docs/design/components/_impl/` (canonical components) + `docs/design/_impl/` (Tier-2/3 working code) + `scaffolds/` (install-ready starters). Per-client docs retained as canonical examples of how real per-client docs are structured."

### 4T. `docs/design/DESIGN-BEST-PRACTICES.md` line 320

"Example: Jean Souza Barber's tier-3 brand source is `#ffffff` text on `#131418` bg — pure white text is the actual brand identity, documented in `clients/jean-souza-barber/design.md`." — Replace `clients/jean-souza-barber/design.md` with `docs/clients/archived/jean-souza-barber/design.md`.

### 4U. README files inside reference impls

`clients/reference-solo-barber/README.md` and `clients/reference-studio-booking/README.md` — deleted along with the rest of `clients/`. No external doc references them as authoritative.

### 4V. Inline `JSDoc` references inside extracted files

`clients/reference-solo-barber/src/lib/site.ts` line 8 and `clients/reference-studio-booking/src/lib/site.ts` line 5 both reference `docs/clients/reference-{slug}/BRIEF.md §Open questions`. When site.ts is extracted into the scaffold as `site.example.ts`, rewrite the JSDoc reference to "your-client-slug" placeholder + a note pointing at the archived BRIEF.md template at `docs/clients/archived/reference-*/BRIEF.md`.

---

## 5. Cross-vertical applicability matrix

### 5A. 8 components × 12 verticals

Legend: ✅ direct (token swap only) · 🟡 conditional (some archetypes only) · ❌ not applicable

| Component | gastronomy | beauty | trades | health | studio | pro-services | pets | automotive | education | events-hosp | home-garden | artisan |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| HalfPillCTA | ✅ | ✅ | 🟡 (B) | ✅ | ✅ | 🟡 (B) | 🟡 (A) | 🟡 (D) | 🟡 (D) | ✅ | 🟡 (B) | ✅ |
| LabelCountHeader (LABEL(N)) | ✅ menu | ✅ services | 🟡 service grid | ✅ specialties | ✅ class list | 🟡 practice areas | ✅ services | ✅ services | ✅ courses | ✅ rooms/menus | ✅ catalog | ✅ portfolio |
| HoursInNav | ✅ | ✅ | 🟡 (B emergency) | ✅ | ✅ | ❌ | ✅ | 🟡 (D) | 🟡 (A/D) | ✅ | 🟡 (B/C) | 🟡 (C) |
| StatCallouts | 🟡 heritage | 🟡 not editorial | ✅ | ✅ | 🟡 mass-market | ✅ | 🟡 vet practice | ✅ | ✅ | 🟡 hotel | 🟡 landscaping | 🟡 craft-years |
| Section (alt-bg) | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| MarqueeCTA | 🟡 boutique | 🟡 premium | ❌ | ❌ | 🟡 boutique-luxury | 🟡 global big-law | ❌ | ❌ | ❌ | 🟡 luxury hotel | 🟡 plant-eccomerce | ✅ |
| EyebrowDisplayHero | ❌ SEO-restricted | ❌ SEO-restricted | ❌ | ❌ | ❌ | 🟡 agency-self | ❌ | ❌ | ❌ | 🟡 portfolio events | ❌ | ✅ portfolio |
| SplitText | ❌ | 🟡 editorial (rare) | ❌ | ❌ | ❌ | 🟡 agency-self | ❌ | ❌ | ❌ | 🟡 photographer self | ❌ | ✅ |

**Notes on the matrix**
- HalfPillCTA's 🟡s mark "needs a real reservation/booking action target." Solo trades / solo automotive / solo education default to `tel:` or WhatsApp, where a half-pill is overkill (per the component spec §1 "When NOT to use").
- HoursInNav's ❌ for pro-services reflects "lawyers/accountants don't post drop-in hours" — they take meetings by appointment.
- StatCallouts's 🟡s mark "evidence-gated" — the component spec already forbids inventing numbers; sub-archetypes without measurable history (boutique gastronomy "we just opened") shouldn't carry the component.
- MarqueeCTA's ✅ in artisan reflects Auwa's canonical reference site (artisan / luxury / referral-driven).
- EyebrowDisplayHero's ❌ for 9/12 verticals reflects the HARD SEO restriction. Only portfolio/agency-self / referral-driven sub-archetypes get a 🟡.
- SplitText is GPU-expensive and reads as design vanity on local-business clients — the component's own §1 restricts it to "portfolio / agency-self / creative-industries."

### 5B. Per-gap-vertical recommendations

For each of the 3 gap verticals, the cross-pollination work adds to §9 a new subsection **"Cross-applicable patterns from the 24-site UI/UX study"** that points at agency components + analogues, without inventing measurements.

#### 5B-i. `docs/design/templates/health.md` §9 — gap-vertical addendum

The 24-site study has no health-vertical entries (Phase 1d trigger-gated). Patterns from the study that transfer by analogy:

| Pattern | Source site (study §) | Why it transfers to health | Applies to which Health archetype |
|---|---|---|---|
| Big-number stat callouts (`12.000+ Behandlungen`, `15+ Jahre Erfahrung`) | Marvell §11 (trades) | Service-business social proof — works identically for solo Physiotherapeut or Zahnarzt with multi-year practice | C (Solo Practitioner Trust-Led) |
| Half-pill sticky-edge "TERMIN" CTA | Haven §15 (hospitality) | Health bookings have the same "checked-most-often" property as restaurant hours — the half-pill surfaces the appointment ask above the fold | B (Conversion Chain Clinic) + C |
| Hours-in-nav | Haven §15 | Patient most-checked datum after "do you take my insurance" | B + C |
| `LABEL (N)` for specialties / treatments | Mily §9 (artisan) | Specialties list reads as a curated directory — the Mily catalog cue lifts directly | A (Content Authority) + C |
| Cream-not-white background | Watch House §5 (hospitality) | The clinical-white default is a Health anti-pattern (template §6 already calls "stark institutional white" hostile); cream is the warmer default for trust-led solo practices | C primarily |
| Warm-brown body color | Haven §15 | Pairs with cream; same softening logic | C |

Components to recommend: HalfPillCTA, HoursInNav, LabelCountHeader, StatCallouts. (Section alt-bg is universal.)

#### 5B-ii. `docs/design/templates/education.md` §9 — gap-vertical addendum

| Pattern | Source site (study §) | Why it transfers | Applies to which Education archetype |
|---|---|---|---|
| Half-pill sticky-edge "PROBESTUNDE BUCHEN" CTA | Haven §15 | Same as health — booking-flow CTA prominence | A (Premium Daycare) + D (Solo Tutor) |
| Big-number stat callouts (`200+ Schüler`, `10+ Jahre`) | Marvell §11 + Horeca §10 | Solo tutor credibility via measurable history | D + B (Tutoring Franchise) |
| `LABEL (N)` for programs / courses / age groups | Mily §9 + T11 §19 | Course catalog reads as curated directory | A + B + C (Language School) + D |
| HoursInNav for Kita / Sprachschule | Haven §15 | Drop-off / class times are top-checked data | A + C |
| Period-terminated CTAs (`Anmelden.` `Termin buchen.`) | DESIGN-BEST-PRACTICES.md §11 (study cross-site finding) | Calmer voice fits parent-facing register | A + D |
| Cream-not-white + warm-brown body | Watch House §5 + Auwa §6 | Soft, trustworthy register for Kita / preschool | A primarily |
| Mono catalog labels for course codes / level designations (`A1`, `B2`) | DESIGN-BEST-PRACTICES.md §4 + T11 §19 | Curriculum codes read as a directory cue | B + C |

Components to recommend: HalfPillCTA, HoursInNav, LabelCountHeader, StatCallouts.

#### 5B-iii. `docs/design/templates/automotive.md` §9 — gap-vertical addendum

| Pattern | Source site (study §) | Why it transfers | Applies to which Automotive archetype |
|---|---|---|---|
| Big-number stat callouts (`5.000+ Reparaturen`, `12+ Jahre Meisterbetrieb`) | Marvell §11 + Horeca §10 | Solo mechanic credibility — same "service-business social proof" logic as trades | D (Solo Mechanic) primarily; also B (Tire chain `100+ Reifen-Größen vorrätig`) |
| HoursInNav for Werkstatt | Haven §15 | Service-bay hours are top-checked alongside phone | D |
| Half-pill sticky "KOSTENVORANSCHLAG" / "ANGEBOT" CTA | Haven §15 | Quote-form-first sub-archetypes (A, C) and quote-on-phone sub-archetypes (D) both benefit | A (Conversion Chain) + C (Detailing Gallery-Led) |
| `LABEL (N)` for serviced brands / services | Mily §9 | Brand-specialty disclosure (per the template's own §9.8 "Solo Mechanic" guidance) reads naturally as a catalog | D primarily; B for tire/service catalog |
| Trade-navy palette token (`--color-text-trade-navy: #042940`) | Marvell §11 + TECH.md §7 | The trades vertical's measured navy works identically for industrial-register automotive | A + B + D |
| Period-terminated CTAs (`Anrufen.` `Termin vereinbaren.`) | study cross-site | Calmer industrial register | D |

Components to recommend: HalfPillCTA (for A/C), HoursInNav, LabelCountHeader, StatCallouts.

The cross-pollination is purely additive — none of it overrides the existing §9 site-specific annotations or the trigger-gated Phase 1d work. When Phase 1d eventually runs and adds real category-native sites, those measurements will sit alongside the cross-applicable patterns.

---

## 6. Phase-by-phase plan

Every phase is independently revertable (single commit per phase, no inter-phase code dependencies that span commits). The build never breaks between phases — `scaffolds/` becomes installable in Phase 1, and the reference impls remain installable until Phase 6.

### Phase 0 — Inventory verification — ~15 min  *(added 2026-05-19 per audit Improvement 1)*

**Goal:** confirm every file in `clients/reference-solo-barber/` and `clients/reference-studio-booking/` has a documented disposition in §2A / §2B before any extraction starts. Catches files added since plan authoring (the audit caught Footer.astro + Header.astro this way).

**Steps:**
1. `find clients/reference-solo-barber/src -type f \( -name '*.astro' -o -name '*.ts' -o -name '*.tsx' -o -name '*.css' -o -name '*.mjs' \) | sort` — compare to §2A
2. `find clients/reference-studio-booking/src -type f \( -name '*.astro' -o -name '*.ts' -o -name '*.tsx' -o -name '*.css' \) | sort` — compare to §2B
3. `find clients/reference-solo-barber/src/components -type d` + same for studio-booking — confirm directory layout matches inventory
4. For any file not represented in §2 → STOP execution and amend the plan first (audit-style row insertion, like NEW-A / NEW-B for Footer + Header)

**Verification gate:** zero unaccounted files. The next phase doesn't start until this passes.

**Rollback:** n/a (read-only).

### Phase 1 — Pre-flight extraction (no deletion yet) — ~4-5 hrs

**Goal:** every artifact in the inventory above lives in its new destination. The originals in `clients/` are still present.

**Files created:**
- `docs/design/components/_impl/` (8 components + 4 React variants + 5 universal primitives + 9 `_demo/` pages + README.md)
- `docs/design/_impl/` (full subtree per §3 architecture: lib/ layouts/ components/ app/ pages/ styles/ config/ + README.md)
- `scaffolds/astro-tier2/` (full install-ready Tier 2 starter)
- `scaffolds/nextjs-tier3/` (full install-ready Tier 3 starter)
- `scaffolds/README.md`

**Files modified:** none (extraction only)

**Files deleted:** none

**Verification gates:**
1. `cd scaffolds/astro-tier2 && pnpm install && pnpm build` clean (requires Node 22 — PENDING.md item already documents this gate).
2. `cd scaffolds/nextjs-tier3 && pnpm install && pnpm build` clean.
3. `diff -r docs/design/components/_impl/HalfPillCTA.astro clients/reference-solo-barber/src/components/ui/HalfPillCTA.astro` exits 0 (and same for all 8 components — byte-identical extraction).
4. `diff -r docs/design/_impl/lib/db.ts clients/reference-studio-booking/src/lib/db.ts` exits 0 (and same for all Tier-3 lib files).
5. Existing reference impls still build (regression check that we didn't accidentally move shared files).

**Rollback:** delete `docs/design/_impl/`, `docs/design/components/_impl/`, `scaffolds/` — single commit revert.

### Phase 2 — Doc cross-reference update — ~3-4 hrs

**Goal:** every doc that mentions `clients/reference-*` now points at the new location. Reference impls still exist, so doc updates are forward-looking but still accurate.

**Files modified:**
- Root `CLAUDE.md` (lines 121, 165-176, 242-250 — see §4A)
- `docs/audit/PENDING.md` (lines 14-15, 28, 29, 37, 38, 55, 65, 72-73 — see §4B)
- 8 component spec sheets (each line 4 + §8 — see §4C)
- `docs/design/components/README.md` (lines 18, 46, 52, 54 — see §4D)
- `docs/design/SEO.md` line 468 (see §4K)
- `docs/design/CITATIONS.md` lines 115, 163 (see §4L)
- `docs/design/TECH.md` lines 485, 770, 783 (see §4M — includes the `StickyMobileCta` zombie fix)
- `docs/design/INTEGRATIONS.md` line 41 (see §4N)
- `docs/design/CHECKLIST.md` line 455 (see §4O)
- `docs/design/LEGAL.md` line 472 (see §4P)
- `docs/design/templates/beauty.md` line 458 (see §4Q)
- `docs/design/templates/gastronomy.md` lines 206, 343 (see §4R)
- `docs/design/DESIGN-BEST-PRACTICES.md` line 320 (see §4T)
- `docs/audit/UI-UX-INTEGRATION-PLAN-2026-05-18.md` — append final amendment-log row (see §4F)
- `docs/audit/UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md` — append closing note (see §4G)
- `docs/audit/SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md` + `-AUDIT-*` — append closing notes (see §4H)
- `docs/audit/AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` + `-AUDIT-*` — append closing notes (see §4I)

**Verification gates:**
1. `grep -rn 'clients/reference-solo-barber\|clients/reference-studio-booking' docs/ CLAUDE.md` — only hits should be inside historical amendment-log rows (i.e., text inside doc bodies that explicitly says "historically located at …") or inside `docs/clients/archived/jean-souza-barber/` (read-only).
2. `grep -rn 'jean-souza-barber/src/' docs/design/` returns zero matches (TECH.md §485, §770, §783, DESIGN-BEST-PRACTICES.md §320 all updated).
3. Markdown links still resolve (spot-check each modified spec sheet's Implementation line points at a real file in `docs/design/components/_impl/`).

**Rollback:** single commit revert. Reference impls still exist, so reverting puts the docs back in sync with the old reality.

### Phase 3 — Workflow update in root `CLAUDE.md` Step 3 — ~1 hr

**Goal:** the root agency entry point teaches "scaffold from `scaffolds/`, not from reference impls."

**Files modified:**
- Root `CLAUDE.md` Step 3 (lines 163-186) — full rewrite per §4A
- Root `CLAUDE.md` "Current client roster" section (lines 242-250) — per §4A
- Add a new bullet to "Working principles" (around line 218) referencing the canonical components convention: "**Imported canonical components declared in CLAUDE.md** — when a client build imports a component from `docs/design/components/_impl/`, record it in the client's `docs/clients/[slug]/CLAUDE.md` 'Imported components' table per TECH.md §20."
- New `clients/README.md` (Q10 teaching-artifact file) — explicit text per audit Issue 3: "This directory is intentionally empty. Scaffold client projects from `scaffolds/astro-tier2/` or `scaffolds/nextjs-tier3/` per root `CLAUDE.md` Step 3; your new `clients/[client-slug]/` directory appears here after `cp -r scaffolds/...`. **`clients/` is where your client builds live. `scaffolds/` is where you copy FROM. They are not interchangeable.**"
- Root `CLAUDE.md` Step 3 — add the same paragraph (verbatim or paraphrased) explicitly distinguishing `clients/` vs `scaffolds/` (audit Issue 3 mitigation: prevents future-session confusion when both appear at repo root).

**Verification gates:**
1. New Step 3 references real paths (`scaffolds/astro-tier2/`, `scaffolds/nextjs-tier3/`).
2. The `cp -r scaffolds/...` recipe matches the actual scaffold structure created in Phase 1.
3. `clients/` vs `scaffolds/` distinction appears in both `clients/README.md` and root `CLAUDE.md` Step 3.

**Rollback:** single commit revert.

### Phase 4 — Cross-vertical backfill — ~3-4 hrs

**Goal:** the 3 gap-vertical templates get §9 cross-applicable-pattern addenda. Component spec sheets §1 get their full per-vertical surface tables.

**Files modified:**
- `docs/design/templates/health.md` — add §9.5 "Cross-applicable patterns from the 24-site UI/UX study" (per §5B-i)
- `docs/design/templates/education.md` — add §9.11 (preserving numbering — currently has §9.1-§9.10) "Cross-applicable patterns …" (per §5B-ii)
- `docs/design/templates/automotive.md` — add §9.9 "Cross-applicable patterns …" (per §5B-iii)
- 8 component spec sheets §1 "Per-vertical surfaces" tables: each currently lists ~5 verticals; expand to the full 12 with ✅ / 🟡 / ❌ symbols per §5A matrix. (Optional — could be deferred to a separate cross-pollination pass. Recommend keeping in this phase since it's the same conceptual change.)

**Labeling convention for §9 additions (added 2026-05-19 per audit Gap B):** each cross-applicable pattern added to health / education / automotive §9 MUST be prefixed with the literal label `**Cross-applicable pattern (derived from [source vertical] reference — not a native [target vertical] measured site):**`. Example: `**Cross-applicable pattern (derived from trades reference Marvell §10 — not a native health measured site):** Stat callouts (15+ Jahre · 12.000+ Behandlungen · 4 Standorte) translate the trades trust-signal pattern to clinical credentials.` Reason: when Phase 1d eventually adds category-native health / education / automotive sites and ships measured §9 data, future readers must be able to distinguish primary measurements from derivations at a glance.

**Files NOT modified:**
- studio.md + home-garden.md §9 — they are NOT gap verticals per the user's explicit constraint. They already have complete §9 reference-site annotations.

**Verification gates:**
1. Each gap-vertical template §9 builds (renders) cleanly in a markdown previewer.
2. New §9 subsections cross-reference real component spec files at `docs/design/components/*.md` (no broken intra-repo links).
3. Existing §9 subsections in the 3 templates are unchanged (only additive content).

**Rollback:** single commit revert. The new §9 subsections are purely additive — reverting doesn't break anything.

### Phase 5 — Archive per-client docs — ~30 min

**Goal:** `docs/clients/reference-*/` move to `docs/clients/archived/reference-*/`.

**Files moved:**
- `docs/clients/reference-solo-barber/{CLAUDE.md, BRIEF.md, design.md}` → `docs/clients/archived/reference-solo-barber/`
- `docs/clients/reference-studio-booking/{CLAUDE.md, BRIEF.md, design.md}` → `docs/clients/archived/reference-studio-booking/`

**Files modified:**
- `docs/clients/archived/README.md` — add 2 new rows per §4S
- The 6 archived files themselves — add a banner at the top of each: `**Status:** Archived 2026-05-19. Original code at `clients/reference-{slug}/` was distilled into `docs/design/components/_impl/` + `docs/design/_impl/` + `scaffolds/`. Retained as canonical examples of how real per-client docs are structured.`

**Verification gates:**
1. `ls docs/clients/` shows `archived/` only (no `reference-solo-barber/` or `reference-studio-booking/`).
2. `docs/clients/archived/README.md` table has rows for both.
3. Any remaining doc references to `docs/clients/reference-*/` are updated to `docs/clients/archived/reference-*/`.

**Rollback:** `git mv` reverts cleanly.

### Phase 6 — Verify, then delete `clients/` — ~30 min

**Goal:** with extraction + doc updates + archive complete, the `clients/` tree is now redundant. Delete it.

**Pre-deletion verification:**
1. Re-run all Phase-1 diff checks to confirm extracted copies are still byte-identical to the originals (no drift introduced during Phases 2-5).
2. `cd scaffolds/astro-tier2 && pnpm install && pnpm build` — clean (proves we can scaffold without the reference impls).
3. `cd scaffolds/nextjs-tier3 && pnpm install && pnpm build` — clean.
4. `grep -rn 'clients/reference-solo-barber\|clients/reference-studio-booking' docs/ CLAUDE.md` — only matches are in historical amendment-log rows.
5. Confirm root `CLAUDE.md` Step 3 doesn't reference `clients/reference-*/`.

**Files deleted:**
- `clients/reference-solo-barber/` (entire tree — code, node_modules, dist, .astro, configs)
- `clients/reference-studio-booking/` (entire tree)
- `clients/` itself (the now-empty directory)

**Files modified:** none

**Verification gates (post-deletion):**
1. `ls clients/` shows only `README.md` (per Q10) or errors if `rmdir` chosen.
2. `grep -rn 'clients/reference-' .` (excluding node_modules) finds only historical amendment-log entries and archived `docs/clients/archived/` content.
3. Markdown previewer on root `CLAUDE.md` + every standards doc — no broken internal links.

**Commit message (added 2026-05-19 per audit Improvement 6):** the Phase 6 commit body must include the byte-identity diff summary, e.g.: `"All 14 extracted Tier-2 files and 12 Tier-3 files confirmed byte-identical to originals before deletion. diff -q output: ['no differences' × 26]."` Makes the deletion auditable from git history without needing to re-run the checks.

**Rollback:** `git revert` brings the entire tree back. Because the deletion is a single commit, rollback is one-command.

### Phase 7 — Wrap-up + amendment-log entries — ~1 hr

**Goal:** new state is documented; PENDING.md reflects it; future sessions land on the new reality.

**Files modified:**
- `docs/audit/PENDING.md` — refresh "Last updated" date; add new "Recently resolved" entry summarizing the restructuring; update "Agency state at a glance" to reflect deletion of `clients/`; mark the "PHASE-3B-PREP.md" historical doc as archived in `docs/design/components/archived/`.
- `docs/design/components/PHASE-3B-PREP.md` → moved to `docs/design/components/archived/PHASE-3B-PREP.md` (per §4E recommendation).
- New file `docs/design/components/_impl/README.md` (explains the directory: "Working code that backs each spec sheet. Not built directly — paste-ready paste targets when scaffolding a client").
- New file `docs/design/_impl/README.md` (explains the directory: per-tier mapping; not built; what to copy when starting a client).
- New file `scaffolds/README.md` (explains: install-ready starters; `pnpm install && pnpm dev` works; recipe for renaming + populating site.example.ts). **Must include (added 2026-05-19 per audit Improvement 3 + R17):** (a) a link to `CHECKLIST.md §0 Pre-flight` for the post-copy setup steps; (b) a "What must NOT be in this scaffold" section listing the purity constraints — no client-specific copy, no client-specific palette values, no client-specific photos, no client domain. The `site.example.ts` with TODO placeholders is the only acceptable model for content shape.
- `docs/audit/UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md` (added 2026-05-19 per audit Improvement 4) — append amendment-log row: "**Decision 1 resolved 2026-05-19** by `CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md` — Option A adopted implicitly. The 8 canonical components were moved to `docs/design/components/_impl/` rather than into a third reference impl (`reference-gastronomy-cafe`); the implicit decision to extend `reference-solo-barber` then distill its components into the docs tree settles the original audit's open question."

**Verification gates:**
1. PENDING.md "Last updated" reflects today.
2. PENDING.md "Recently resolved" includes the restructuring summary.
3. No `clients/` references in PENDING.md outside the "Recently resolved" archive narrative.

**Rollback:** single commit revert.

### Total effort

~12-15 hrs across 7 phases. Each phase is one commit. The full sequence can be done in 2-3 working days; each phase boundary is a safe pause point.

---

## 7. Risk register — specific failure modes + mitigations

### R1 — Lost build validation

**Failure mode:** the reference impls' `pnpm build` clean state was the primary signal that rules + deps + integration version pins actually work together. After deletion, that signal is gone.

**Mitigation:** `scaffolds/astro-tier2/` and `scaffolds/nextjs-tier3/` REPLACE the reference impls as the build-validation surface. Phase 1 + Phase 6 both gate on `pnpm install && pnpm build` passing in both scaffolds. Add a new line to `docs/audit/PENDING.md` "Agency-template work" table: "Scaffold validation — re-run `pnpm install && pnpm build` on `scaffolds/{astro-tier2,nextjs-tier3}/` quarterly (calendar trigger 2026-08-19) to catch dep-bump regressions." Quarterly cadence matches the existing `INTEGRATIONS.md` key-rotation rhythm.

### R2 — Loss of the Tier-3-only patterns (asymmetric pain)

**Failure mode:** `db.ts` + `ratelimit.ts` + `resend.ts` + `posthog.ts` + `app/api/trial/route.ts` + `instrumentation.ts` + `sentry.edge.config.ts` are unique to studio-booking. INTEGRATIONS.md describes the pattern but never the full end-to-end wiring. Losing them is asymmetrically more painful than the Tier-2 loss.

**Mitigation:** these are the highest-priority items in the Phase-1 extraction. They land in `docs/design/_impl/lib/` + `docs/design/_impl/app/api/trial/` + `docs/design/_impl/config/`. The `scaffolds/nextjs-tier3/` tree imports them verbatim. Additionally, **embed the trial form-endpoint as the canonical end-to-end worked example inside `FORMS.md` §form-endpoint pattern** (currently FORMS.md describes the pieces but doesn't show the full pipeline). This redundancy (working file + embedded fenced block in a standards doc) hedges against future loss.

### R3 — Lost worked-example density in standards docs

**Failure mode:** INTEGRATIONS.md describes Sentry init pattern; the actual working `sentry.client.config.mjs` file is what a future dev copy-pastes. If only INTEGRATIONS.md remains and the working file is in `_impl/`, will a future Claude session find it?

**Mitigation:** every relevant standards doc gets a "**Working file:** `docs/design/_impl/config/sentry.client.config.mjs`" line at the appropriate section. Sentry init pattern (INTEGRATIONS.md §Sentry) → cite working files for both tiers. Cookie banner spec (LEGAL.md §Cookie consent banner) → cite `docs/design/components/_impl/CookieBanner.{astro,tsx}`. Lazy-init pattern (INTEGRATIONS.md §41) → cite `docs/design/_impl/lib/{db,ratelimit,resend}.ts`. This is part of Phase 2 doc cross-reference work.

### R4 — `_impl/` files drifting from spec sheets

**Failure mode:** after restructuring, the working code at `docs/design/components/_impl/HalfPillCTA.astro` could drift from its spec sheet because no build forces it to compile.

**Mitigation:** add a "Component drift check" item to `docs/audit/PENDING.md` quarterly: "Copy each `_impl/` component into `scaffolds/astro-tier2/src/components/` temporary tree; `pnpm build`; revert. Quarterly trigger 2026-08-19." (Same cadence as R1.) Also: the per-component spec sheet §3 CSS spec carries measured values — if the working file diverges, the next UI audit (UI_REVIEW.md-style) catches it via the bidirectional cross-link in spec §7.

### R5 — `docs/clients/archived/reference-*/` accidentally re-edited

**Failure mode:** `docs/clients/archived/README.md` says archived files are read-only, but the convention isn't enforced.

**Mitigation:** per Phase 5, add the `**Status:** Archived 2026-05-19` banner to each of the 6 archived files at the top. The banner makes the read-only status visible at file-open time. (No mechanical lock; the convention is doc-level.)

### R6 — `TECH.md §783` zombie reference (`StickyMobileCta`)

**Failure mode:** TECH.md §783 references `clients/jean-souza-barber/src/components/ui/StickyMobileCta.astro` — but Jean was deleted in Batch 0, and StickyMobileCta is NOT in either reference impl. This is a pre-existing zombie reference that the restructuring would surface but not introduce. Leaving it makes a future dev hunt for a file that doesn't exist.

**Mitigation:** Phase 2 explicitly handles this (per §4M row 783). Two options: (a) remove the StickyMobileCta reference; (b) add it to `docs/design/components/_impl/` as a net-new component derived from the TECH.md §783 description. Recommend (a) — the §783 paragraph that mentions it can simply describe the pattern without claiming a working file. Surface this in the user's "decisions needed" section below.

### R7 — Required public files (favicon, robots.txt, apple-touch-icon)

**Failure mode:** TECH.md §20 lists `public/favicon.svg` + `public/favicon.ico` (32×32) + `public/apple-touch-icon.png` (180×180) + `public/robots.txt` as required public files. The reference impls had real ones; future scaffolds need a path to get them.

**Mitigation:** `scaffolds/astro-tier2/public/` and `scaffolds/nextjs-tier3/public/` ship with:
- `favicon.svg` — a clearly-marked DRAFT placeholder (e.g., a 32×32 grey square with "TODO" text) the developer must replace
- `robots.txt` — `Disallow: / # DEMO PHASE — flip to "Allow: /" + add Sitemap: line at production cutover`
- A `README.md` inside `public/` listing the 4 required files + a one-line recipe for generating them from a brand SVG via `rsvg-convert` (already referenced in TECH.md §8 Image-extraction toolkit; cross-reference it)

Note: the reference impls ONLY ship favicon.svg + robots.txt (no .ico, no apple-touch-icon). The scaffold improves on that.

### R8 — `_demo/` Astro pages reference moved tokens

**Failure mode:** the 9 `_demo/` pages currently import from `@/components/...` (Astro path alias). After moving to `docs/design/components/_impl/_demo/`, the path alias resolution would break if anyone tried to run them.

**Mitigation:** `_demo/` pages are documentation, not built artifacts. Phase 1 extraction includes a one-line note in `docs/design/components/_impl/_demo/README.md`: "These demo pages preview each component in isolation. To run, copy the component + the demo page + tokens.css into `scaffolds/astro-tier2/src/`, then `pnpm dev` and visit `/_demo/half-pill-cta`." This is the "executable reference" path.

### R9 — `pnpm-lock.yaml` drift between extraction and scaffold

**Failure mode:** the reference impls' `pnpm-lock.yaml` files captured the exact dep tree at 2026-05-19. When the scaffolds are built, their fresh lockfiles may resolve to different sub-dep versions.

**Mitigation:** copy `pnpm-lock.yaml` verbatim from each reference impl into the corresponding scaffold during Phase 1 (lock-pinning the exact validated combination). Phase-1 verification gate 1/2 re-installs from this lockfile and re-builds, confirming the lock still resolves. After Phase 6 deletion, the scaffold's lockfile IS the canonical record.

### R10 — Per-client BRIEF.md template "Imported components" field

**Failure mode:** TECH.md §20 (BRIEF.md template) added the "Imported components" field in UI/UX Plan Phase 4. The example row uses `src/components/ui/HalfPillCTA.astro` as the per-client path. After restructuring, the canonical path is `docs/design/components/_impl/HalfPillCTA.astro` but the per-client adoption path is `clients/[slug]/src/components/ui/HalfPillCTA.astro` (copied from `_impl/`). Make sure the template field's instruction is unambiguous.

**Mitigation:** Phase 3 workflow update revises the template field instruction: "Components listed are CANONICAL components (spec sheet at `docs/design/components/*.md`, working file at `docs/design/components/_impl/*`) that this client has copied into its `src/components/`. Maintain spec-sheet path + per-client path columns to enable bidirectional audit."

### R11 — Historical amendment-log rows reading "future tense" after restructuring

**Failure mode:** docs like `UI-UX-INTEGRATION-PLAN-2026-05-18.md` are written in a closed-amendment-log style. If we rewrite their bodies, we destroy the historical record. If we leave them as-is, they reference deleted paths.

**Mitigation:** Phase 2 takes the surgical approach — APPEND a final amendment-log row noting the restructuring, do NOT rewrite earlier rows. The amendment-log convention (used throughout the repo) handles exactly this: historical content stays historical; only the most recent amendment carries the new state. Same treatment for the audit-pair docs.

### R12 — The `vercel.json` security-header CSP differs between impls

**Failure mode:** `clients/reference-solo-barber/vercel.json` CSP allows `https://www.googletagmanager.com https://www.clarity.ms https://wa.me https://*.ingest.sentry.io …`. The Tier 3 impl might have a different list (PostHog endpoints, Mindbody iframe). If `vercel.json` is extracted into `_impl/config/` without per-tier disambiguation, the wrong CSP could ship.

**Mitigation:** `vercel.astro.json` (Tier 2) and `vercel.nextjs.json` (Tier 3) ship as SEPARATE files in `_impl/config/`. The Tier 3 one carries the PostHog `https://eu.i.posthog.com` connect-src entry; the Tier 2 one doesn't. The scaffolds use the tier-matching one. (Audit during Phase 1: diff the two `vercel.json` files and confirm both are captured faithfully.)

### R13 — `instrumentation.ts` is Next.js v15+ only

**Failure mode:** `instrumentation.ts` extracted into `docs/design/_impl/config/` could be misapplied to a Next.js v14 project where the hook is opt-in.

**Mitigation:** the file's existing JSDoc header already documents the v10+ Sentry SDK + Next.js v15+ requirement. The `_impl/` README explicitly tier-tags each file ("Tier 3 ONLY — Next.js 15+"). The scaffold's `package.json` pins `next ^16.0.0`, so the file always lands in a compatible context when used as intended.

### R14 — Per-client doc templates lose their concrete-example anchor

**Failure mode:** the per-client docs at `docs/clients/reference-{solo-barber,studio-booking}/` are the only places in the repo with a real-looking CLAUDE.md (151 lines) / BRIEF.md (139 lines) / design.md (106 lines). New users learn the format from these. After archive, the worked-example density is in `archived/` — still readable, but less discoverable.

**Mitigation:** add cross-references from `TECH.md §20` (per-client CLAUDE.md template) + `DESIGN-BEST-PRACTICES.md §17` (per-client design.md template) + relevant BRIEF.md template sections to point at `docs/clients/archived/reference-{solo-barber,studio-booking}/` as "look at these as the most realistic worked examples." This is part of Phase 5 (archive) since the doc updates are co-located with the file moves.

### R15 — Phase 1 extraction misses Footer.astro + Header.astro (Tier 2 Astro)  *(added 2026-05-19 per audit)*

**Failure mode:** Phase 6 deletes `clients/reference-solo-barber/` including `layout/Footer.astro` and `layout/Header.astro`. The original §2A inventory had only 12 component-level rows and missed these two layout primitives. Their disposition was undefined; without the audit catch, deletion would have been silent loss.

**Mitigation:** §2A NEW-A + NEW-B rows now cover both files → `docs/design/_impl/components/{Footer,Header}.astro`. Phase 0 inventory verification (added 2026-05-19) catches any future omission of the same shape — `find clients/reference-solo-barber/src -type f` against §2A is the gate.

### R16 — Phase 2 line-number drift causes phantom edits  *(added 2026-05-19 per audit)*

**Failure mode:** §4 lists precise line numbers ("TECH.md line 485," "DESIGN-BEST-PRACTICES.md line 320"). Standards docs are edited frequently — between plan authoring and Phase 2 execution, line numbers shift. A Claude Code session running str_replace targeting the old line either (a) misses (content not at that line anymore) or (b) hits wrong content silently.

**Mitigation:** the top-of-§4 note (added 2026-05-19) makes this explicit: "every line number is an approximate anchor, not a precise edit target — grep for the quoted old content first." If content is missing, the item was pre-resolved; skip + note in commit. The audit specifically confirmed the `jean-souza-barber` + `StickyMobileCta` items at §4M / §4T DO still exist in `docs/design/`, so they still need fixing — but the general grep-first principle applies to all of §4.

### R17 — `scaffolds/` purity drift  *(added 2026-05-19 per audit)*

**Failure mode:** the plan positions `scaffolds/astro-tier2/` and `scaffolds/nextjs-tier3/` as content-neutral starters. But reference impls had per-client content (barber palette, studio palette, real services data) that served as proof. If a future session accidentally adds barber-specific or studio-specific content to a scaffold — color tokens, copy, photos, domain references — it degrades the scaffold's usefulness as a starting point.

**Mitigation:** `scaffolds/README.md` includes a "What must NOT be in this scaffold" section (Phase 7 deliverable per Improvement 3): no client-specific copy, no per-client palette values, no client-specific photos, no client domain. The `site.example.ts` with TODO placeholders is the only acceptable content-shape model. Add a quarterly scaffold-audit entry to PENDING.md (calendar trigger 2026-08-19): "Audit `scaffolds/{astro-tier2,nextjs-tier3}/` for per-client drift; revert any client-specific content that slipped in." This matches the R1 build-validation cadence.

---

## 8. Open questions / decisions needed before execution

Before any code or files move, the user should confirm or override:

### Q1 — Confirm `scaffolds/` directory exists at repo root (Option 3 Hybrid)
The plan above defaults to Hybrid. If the user prefers everything under `docs/design/` (Option 1) — i.e., no `scaffolds/` at repo root — the "how to start a new client" workflow in CLAUDE.md Step 3 becomes "cp -r `docs/design/_impl/scaffold-tier2/...` clients/[slug]" which feels semantically wrong (executable code under `docs/`). **Recommendation: Hybrid.**

### Q2 — `_impl/` naming
"_impl" was chosen because (a) the leading underscore signals "support directory, not the primary content" (same convention as `_demo/` was), (b) it's short enough to type, (c) it doesn't collide with anything in the repo. Alternatives: `_code/`, `_examples/`, `_canonical/`, `examples/`. **Recommendation: `_impl/`.**

### Q3 — `StickyMobileCta` zombie reference in TECH.md §783
Option (a) remove the reference; option (b) build a net-new `StickyMobileCta.astro` component for `docs/design/components/_impl/` and elevate it to the canonical-components index. Building it would be ~30 min — a sticky-mobile CTA is a high-leverage pattern for all 12 verticals. **Recommendation: option (b) as a follow-up after the main restructuring (file PENDING.md trigger entry), option (a) for the restructuring itself.**

### Q4 — Cross-vertical applicability matrix scope in Phase 4
The §5A matrix expands each component spec sheet's §1 "Per-vertical surfaces" table from ~5 verticals to all 12. This is roughly +20 minutes per spec × 8 specs = ~2.5 hrs. Option (a) include in Phase 4; option (b) defer to a follow-up because the existing spec sheets already capture the high-leverage verticals. **Recommendation: include in Phase 4 — it's the same conceptual work as the gap-vertical addenda and shares verification.**

### Q5 — Scaffold lockfiles strategy
Should `scaffolds/{astro-tier2,nextjs-tier3}/pnpm-lock.yaml` be checked in (pin exact versions, predictable builds) or `.gitignored` (always fresh resolution)? **Recommendation: check in.** Matches reference impls' practice and gives reproducible builds. Re-generate quarterly (R1 mitigation).

### Q6 — `_demo/` page survival
Option (a) preserve all 9 `_demo/*.astro` pages → `docs/design/components/_impl/_demo/`; option (b) drop them since they're per-component visual playgrounds and the scaffold can host them ad-hoc. **Recommendation: option (a)** — they're the documented executable reference for each component, and dropping them removes a visual-test surface.

### Q7 — Whether to embed Tier-3 form-endpoint route.ts inside FORMS.md
Per Risk R2 mitigation. Embedding as a fenced code block makes FORMS.md large (~150 extra lines) but gives a future Claude session a one-stop view. Option (a) embed; option (b) cite only. **Recommendation: option (a)** — the redundancy is cheap and hedges against the "what if `_impl/` disappears too" failure mode the user is actively addressing.

### Q8 — Archive banner wording
Phase 5 adds a banner to each archived per-client doc. Three flavors possible: a one-liner status header, a multi-line "what this file used to be" preamble, or a moved-to-archived rule list. **Recommendation: one-liner status header** — matches the `docs/audit/archived/` and `docs/clients/archived/jean-souza-barber/` precedent.

### Q9 — Phase ordering with Node 22 upgrade
PENDING.md line 28 notes the user's Node is 21.7.3 and Astro 6 needs ≥22.12.0. The Phase 1 + Phase 6 verification gates require `pnpm install && pnpm build` in `scaffolds/astro-tier2/`. **Confirm Node 22 is available locally (`nvm use 22`) before Phase 1 starts**, or accept that Phase 1 verification 1 runs in CI / Vercel preview instead.

### Q10 — Should `clients/` directory be removed entirely or preserved-empty?
After Phase 6 deletion, `clients/` is empty. Two options: (a) `rmdir clients/` so the directory is gone; (b) leave an empty `clients/` with a `.gitkeep` + `README.md` saying "client builds land here per root CLAUDE.md Step 3." **Recommendation: option (b)** — preserves the convention from root `CLAUDE.md` ("Client source code lives in clients/[client-slug]/") without requiring CLAUDE.md edits beyond the Step 3 rewrite. The empty directory + README is a teaching artifact.

---

### Critical Files for Implementation

The plan touches ~80 files but execution success hinges on getting these right first:

- `/Users/simonekugler/Desktop/sm-website-seo/CLAUDE.md` — the master Step-3 workflow rewrite is the most user-visible change; if wrong, every future session scaffolds incorrectly
- `/Users/simonekugler/Desktop/sm-website-seo/docs/design/components/_impl/` (new directory) — the destination for the 8 newly-shipped components that MUST survive
- `/Users/simonekugler/Desktop/sm-website-seo/docs/design/_impl/lib/` (new directory) — destination for the 5 Tier-3-only lib files (`db.ts`, `ratelimit.ts`, `resend.ts`, `posthog.ts`, `analytics.nextjs.ts`) whose loss is asymmetrically painful
- `/Users/simonekugler/Desktop/sm-website-seo/scaffolds/` (new directory) — the new build-validated drop-in starters that replace the reference impls
- `/Users/simonekugler/Desktop/sm-website-seo/docs/audit/PENDING.md` — single-source-of-truth aggregator; if it drifts from reality, the agency loses its portfolio-wide view