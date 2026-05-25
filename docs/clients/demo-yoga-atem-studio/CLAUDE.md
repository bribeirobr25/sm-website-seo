# Atem Studio — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Kreuzberg boutique yoga studio.
Live URL: https://demo-yoga-atem-studio.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md` + `docs/design/templates/studio.md`.

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 2 product (info + mock newsletter signup; no real booking integration — Probestunde via email).
- **Display font:** Newsreader Variable (self-hosted via `@fontsource-variable/newsreader`). Soft, contemplative serif. Body: Inter Variable.
- **Schema.org:** `SportsActivityLocation` graph — yoga has NO `YogaStudio` type per 2026-05-18 hotfix. Uses `keywords: ['Yoga', 'Hatha', 'Vinyasa', 'Yin', 'Prenatal', 'Meditation']` for AI/Google extraction.
- **Languages:** DE primary + EN.
- **Jurisdiction:** DE (DSGVO + § 5 TMG). Legal form: GbR.

## Common commands

```bash
cd clients/demo-yoga-atem-studio
pnpm install                       # first time
pnpm dev                           # http://localhost:4321
pnpm dev -- --host 0.0.0.0         # for Docker MCP at host.docker.internal:4321
pnpm validate                      # biome lint + astro check + build
pnpm build                         # production build → dist/
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes   # deploy
```

## Imported canonical components

| Component | Source | Used in |
|---|---|---|
| `FAQ.astro` | scaffold default (wraps Accordion + emits FAQPage JSON-LD) | home FAQ |
| `Accordion.astro` | scaffold default | currently UNUSED on home (FAQ wraps it) — available for sub-pages |
| `MarqueeCTA.astro` | local copy from `_impl/MarqueeCTA.astro` (parameter-driven, kept as-is) | currently UNUSED — `VisitPreview.astro` (now MarqueeCTA-style) inlines the marquee per V2 |
| `VideoFacade.astro` | local copy from `_impl/VideoFacade.astro` (parameter-driven) | currently UNUSED — V2 inlines a mock video tile instead |
| `MapEmbed.astro` | scaffold default (OpenStreetMap) | `/studio` only — NOT on home per `studio.md` §13 |
| `StatCallouts.astro` | scaffold default | UNUSED (V2 dropped per template §13 anti-pattern) |
| `Timeline.astro` | scaffold default | UNUSED (V2 dropped — CourseList replaces) |
| `Lightbox.astro` | scaffold default | UNUSED on home — V2 uses CSS-gradient bento tiles since no real photos |

## Page composition (V2 — Ordering A "Schedule-led")

`src/pages/index.astro`:
1. SplitHero (text left + decorative breath-circle mandala right)
2. Weekly schedule grid (7 days × 4 time slots — horizontally scrollable on mobile)
3. Slim 4-tier PricingTable (Probestunde €0 highlighted with terracotta border)
4. Mock VideoFacade card (deep aubergine bg, terracotta play button)
5. About + inline pull-quote (single-column, generous spacing)
6. 6-tile gradient gallery (lavender/lilac/terracotta CSS gradients — placeholders)
7. 4 instructor pill chips (compact, NOT 4-card grid — distinct from lawyer's 2×2)
8. Newsletter signup mock (inline form, terracotta submit)
9. FAQ accordion (5 beginner-anxiety questions)
10. MarqueeCTA "Probestunde gratis" — aubergine bg, scrolling gold marquee

Sub-pages: `/kurse` (full class catalog), `/studio` (about + map + hours), `/impressum`, `/datenschutz`.

## Gotchas

- **OG image:** generated as `public/img/og-default.png` (1200×630) via rsvg-convert. Pale lilac + concentric breath-circle + "Yoga, wie er sich eigentlich anfühlen sollte." Source: `/tmp/og-yoga.svg`.
- **No schema YogaStudio type exists** — verified 2026-05-18 hotfix. Use `SportsActivityLocation` + `keywords` array.
- **No `aggregateRating` in schema** — `SEO.md` §5.3 ban.
- **No MapEmbed on home** per `studio.md` §13 rule. Map only on `/studio`.
- **Bone / sage / saffron earth-tones REJECTED** as V1. V2 uses pale lilac + aubergine + terracotta per `studio.md` §13 palette guidance ("studio palettes can lean editorial but must NOT default to bone/sage/cream every time"). Do not regress.
- **MarqueeCTA reduced-motion**: the scrolling marquee uses `@media (prefers-reduced-motion: reduce) { animation: none }` — verified inline in `VisitPreview.astro`.
- **Class schedule data is currently inline in `MenuPreview.astro`** as a static array. If client adds real scheduling, move to CMS or `site.ts` and feed via prop.
