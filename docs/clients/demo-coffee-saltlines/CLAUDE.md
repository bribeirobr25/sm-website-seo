# Saltlines — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Friedrichshain Nordic-surf coffee shop on the Spree.
Live URL: https://demo-coffee-saltlines.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md` + `docs/design/templates/gastronomy.md` (Specialty / third-wave sub-archetype).

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 2 product (info + Wellenbericht newsletter mock).
- **Display font:** sans-serif (per design.md §3 — contemporary-coastal register, NOT serif heritage). Body: Inter Variable.
- **Schema.org:** `CafeOrCoffeeShop` graph (most-specific type per `SEO.md` §5).
- **Languages:** DE primary + EN.
- **Jurisdiction:** DE (DSGVO + § 5 TMG).

## Common commands

```bash
cd clients/demo-coffee-saltlines
pnpm install
pnpm dev                           # http://localhost:4321
pnpm dev -- --host 0.0.0.0
pnpm validate
pnpm build
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes
```

## Imported canonical components

| Component | Usage |
|---|---|
| `FAQ.astro` | home FAQ |
| `Lightbox.astro` | gallery |
| `MapEmbed.astro` | `/besuchen` (visit) page |
| `NewsletterMock.astro` | "Wellenbericht" weekly newsletter mock (Saltlines is the canonical source for this component — see `docs/design/components/newsletter-mock.md` Hardcoded content warning) |
| `PhotoGrid.astro` | asymmetric 5-image bento (Saltlines is the canonical source for this component) |
| `Press.astro` | UNUSED — coffee shop register doesn't need press recognitions |
| `Timeline.astro` | wave-report ticker variant |

## Page composition

`src/pages/index.astro`: Hero (full-bleed surf photo) · PhotoGrid asymmetric bento · About · Timeline (wave report) · Lightbox gallery · FAQ · NewsletterMock (Wellenbericht) · MapEmbed (Spree river location).

## Gotchas

- **NO browns anywhere** — committed fully to ocean register per 2026-05-22 V2 feedback ("warm sand bg read as brown filler"). Palette is cool near-white + ocean cyan-teal + sunset coral.
- **NO booking system** — single-room walk-in pattern, no Type-3 product needs.
- **`NewsletterMock.astro` + `PhotoGrid.astro` ARE this demo's hardcoded content** — these two components are the canonical Saltlines-promotion that later got reused. See `docs/design/components/{newsletter-mock,photo-grid}.md` §Hardcoded content warning for the parameterization backlog.
- **OG image:** uses `og-default.jpg` (Saltlines surf shot) — vertical-appropriate, no fix needed.
