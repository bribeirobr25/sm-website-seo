> **STATUS: PORTFOLIO DEMO — Fictional business. Never index. Reference for future gastronomy builds.**

# CLAUDE.md — Eiscafé Bellini (demo)

## Product type and stack

- **Product type:** 1 — Static info site
- **Stack tier:** Tier 2 — Astro 6 + Tailwind v4 + Sentry (server-only)
- **Phase:** Demo (portfolio artifact, never indexed, no real owner approval gate)

See root `CLAUDE.md` product-type matrix and `docs/design/TECH.md` §1 for the activation map.

## What this project is

**Eiscafé Bellini** — fictional three-generation Italian family gelateria in Prenzlauer Berg, Berlin. Founded 1987 by Tommaso & Rosa Bellini from Treviso (Veneto); operated today by granddaughter Giulia Bellini. Built as the agency's gastronomy-vertical portfolio demo.

- Stack: Astro 6 + Tailwind v4 + Sentry server-only
- Hosting: Vercel free tier (`demo-gastronomy.vercel.app`, `noindex`)
- Locale: DE primary + EN secondary
- Live: `demo-gastronomy.vercel.app`

## Standards inheritance

This demo inherits all agency standards from `docs/design/*.md`. Specific applicability:

| Doc | Applies? | Notes for this demo |
|---|---|---|
| `DESIGN-BEST-PRACTICES.md` | ✅ | All §3 typography + §5 palette + §7 components + §8 motion rules apply |
| `TECH.md` | ✅ | Tier 2 / Type 1 path; §7 tokens canon; §20 per-client template (this file) |
| `PERFORMANCE.md` | ✅ | Budgets apply; font self-hosting deferred for demo (system fallbacks OK) |
| `ACCESSIBILITY.md` | ✅ | WCAG 2.2 AA contrast verified in `design.md` §2 |
| `SECURITY.md` | ✅ | TLS + 6 security headers via `vercel.json` (scaffold provides) |
| `LEGAL.md` | ✅ | DE jurisdiction; Impressum + Datenschutzerklärung pages required even for demo |
| `RELIABILITY.md` | ✅ | 404/500 pages branded; Sentry server-only |
| `QUALITY.md` | ✅ | `pnpm validate` clean before deploy |
| `INFRASTRUCTURE.md` | ✅ | Scaffold provides `vercel.json` + CI workflow |
| `FORMS.md` | ❌ | N/A — no forms on this demo |
| `ANALYTICS.md` | 🟡 | Scaffold consent-gated stubs remain; placeholder GA4 ID — no real tracking |
| `SEO.md` | ✅ | §5 schema (Restaurant `@graph`) applied; §15 anti-patterns observed |
| `KPI.md` | ❌ | N/A — demo, no KPIs to wire (per runbook §4.5) |
| `CITATIONS.md` | ❌ | N/A — demo, no real NAP claims (per runbook §4.6) |
| `I18N.md` | ✅ | Astro built-in i18n routing; DE at `/`, EN at `/en/` |
| `INTEGRATIONS.md` | 🟡 | Sentry server-only (no auth token in demo); other integrations N/A |
| `SOCIAL-SHARING.md` | ✅ | OG image required (static, 1200×630, picked from Phase 3 Unsplash batch) |
| `CHECKLIST.md` | ✅ | All Phase 6 validation gates applied |

Per-client overrides + additions documented in `design.md`.

## Tech stack

- Framework: Astro 6
- Styling: Tailwind CSS v4 (`@theme {}` block in `src/styles/tokens.css`)
- Language: TypeScript strict
- Fonts: System fallbacks for demo (Cormorant Garamond + Inter self-host deferred to production)
- Hosting: Vercel
- Package manager: pnpm
- Linting: Biome

## Quick commands

```bash
pnpm dev          # http://localhost:4321
pnpm build        # production build
pnpm lint         # Biome
pnpm preview      # preview production build
pnpm validate     # lint + build (full pipeline)
```

## Project structure

```
clients/demo-eiscafe-bellini/
├── astro.config.ts             # i18n routing config (de + en)
├── package.json                # name: demo-eiscafe-bellini
├── public/
│   ├── favicon.svg             # placeholder until production
│   ├── og-default.jpg          # 1200×630 OG image
│   └── robots.txt              # Disallow: / (demo phase, never flip)
└── src/
    ├── components/
    │   ├── layout/
    │   │   ├── DemoBanner.astro    # NEW — persistent demo strip
    │   │   ├── Footer.astro
    │   │   ├── Header.astro
    │   │   └── HoursInNav.astro    # canonical
    │   ├── sections/
    │   │   ├── Hero.astro
    │   │   ├── MenuPreview.astro
    │   │   ├── About.astro
    │   │   ├── Visit.astro
    │   │   ├── LabelCountHeader.astro  # canonical
    │   │   └── StatCallouts.astro      # canonical
    │   └── ui/
    │       ├── Button.astro
    │       ├── HalfPillCTA.astro       # canonical
    │       └── Placeholder.astro
    ├── i18n/
    │   ├── config.ts
    │   └── locales/{de,en}/{common,pages}.json
    ├── layouts/BaseLayout.astro
    ├── lib/
    │   ├── analytics.ts
    │   ├── consent.ts
    │   ├── seo/schema.ts           # Restaurant @graph
    │   └── site.ts                 # SITE constants
    ├── pages/                      # DE primary at root
    │   ├── index.astro
    │   ├── gelato.astro
    │   ├── besuchen.astro
    │   ├── impressum.astro
    │   ├── datenschutz.astro
    │   ├── 404.astro
    │   ├── 500.astro
    │   └── en/                     # EN secondary
    │       ├── index.astro
    │       ├── gelato.astro
    │       ├── visit.astro
    │       ├── 404.astro
    │       └── 500.astro
    └── styles/{tokens,global}.css
```

## Imported components

| Component | Spec | File | Surface |
|---|---|---|---|
| HalfPillCTA | `docs/design/components/half-pill-cta.md` | `src/components/ui/HalfPillCTA.astro` | Header right cell · `RESERVIEREN`/`BOOK A TABLE` (links to `tel:`) |
| LabelCountHeader | `docs/design/components/label-count-header.md` | `src/components/sections/LabelCountHeader.astro` | Menu category heads: `LE CREME (12)`, `SORBETTI (8)`, `SPEZIALITÄTEN (4)` |
| HoursInNav | `docs/design/components/hours-in-nav.md` | `src/components/layout/HoursInNav.astro` | Sub-nav: `SOMMER / Mo-So 11-22` + `WINTER / Di-So 12-19` |
| StatCallouts | `docs/design/components/stat-callouts.md` | `src/components/sections/StatCallouts.astro` | About section: `seit 1987 · drei Generationen · 36 Sorten` |
| Section (alt-bg) | `docs/design/components/alternating-section-bg.md` | `src/components/layout/Section.astro` | Long-scroll bg alternation on Home + Menu |

## Business context

- Business name: Eiscafé Bellini
- Type: Italian family gelateria + café
- City / neighborhood: Berlin / Prenzlauer Berg (Kollwitzkiez)
- Primary language: DE
- Additional languages: EN
- Primary CTA: Phone (walk-in shop, no booking flow)
- Target audience: Prenzlauer Berg families, expat brunch crowd, ice-cream-tourism foot traffic
- Google Business Profile URL: N/A (demo, not registered)

## Design decisions

See `docs/clients/demo-eiscafe-bellini/design.md`. Anchors back to `docs/design/templates/gastronomy.md` §6 "Heritage Italian family" sub-archetype.

## Environment variables

For demo build, no real keys. The scaffold's `.env.example` placeholders are not populated. Sentry server-only stub remains inert (no `SENTRY_DSN` set in Vercel → SDK no-ops cleanly).

## Demo discipline

1. **NEVER flip robots.txt to `Allow: /`** — this demo stays `Disallow: /` permanently
2. **NEVER add real client data** — this is a portfolio artifact; if it becomes a real client, COPY to `clients/[real-slug]/` first
3. **NEVER add real KPI tracking** — placeholder GA4 ID stays; if added, it would pollute the agency's analytics
4. **DEMO banner is permanent** — never remove; never make dismissible
5. **No GBP listing** — never claim a Google Business Profile for this name

## When this demo becomes a real client

If a real Berlin gelateria owner says yes after seeing this demo:
1. `cp -r clients/demo-eiscafe-bellini clients/[real-slug]/`
2. Run Phase 1 with real research targets specific to the real business
3. Swap `src/lib/site.ts` SITE constants with real data
4. Run Phase 1-6 of `PORTFOLIO-BUILD-RUNBOOK.md` (yes, even for real client — same workflow)
5. Remove the demo banner from `BaseLayout.astro`
6. Generate real Impressum + Datenschutzerklärung from owner-confirmed legal data
7. Register the real domain
8. Flip `robots.txt` + remove `noindex` meta tags
9. Submit sitemap to Google Search Console
10. Run `CHECKLIST.md` top to bottom
