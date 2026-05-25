# Adèle — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Mitte modern-European fine-dining restaurant.
Live URL: https://demo-restaurant-adele.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md` + `docs/design/templates/gastronomy.md` (Editorial fine-dining sub-archetype A).

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 3-adjacent (reservation BookingMock — not real integration; would be Resy/OpenTable for production).
- **Display font:** Playfair Display (didone serif, vintage-grand-hotel register). Body: Inter Variable.
- **Schema.org:** `Restaurant` graph (most-specific type per `SEO.md` §5 + `gastronomy.md` §11.8).
- **Languages:** DE primary + EN.
- **Jurisdiction:** DE (DSGVO + § 5 TMG).

## Common commands

```bash
cd clients/demo-restaurant-adele
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
| `SplitHero.astro` | image-contained-right + text-left half-and-half hero |
| `HoursInNav.astro` | service hours inline in header |
| `HalfPillCTA.astro` | "Reservieren" sticky CTA in nav |
| `MarqueeCTA.astro` | bottom scrolling reservation reminder |
| `CourseList.astro` | tasting-menu Roman-numeral course list (Adèle is the canonical source — see `docs/design/components/course-list.md` Hardcoded content warning) |
| `Press.astro` | Tagesspiegel + Michelin Bib Gourmand + Berliner Morgenpost mock recognitions (Adèle is the canonical source — see `docs/design/components/press.md` Hardcoded content warning) |
| `PricingTable.astro` | tasting menu + wine pairing tiers |
| `TeamGrid.astro` | Chef Adèle + Sommelière Theresa portraits |
| `BookingMock.astro` | reservation form (Adèle is the canonical source — see `docs/design/components/booking-mock.md` Hardcoded content warning) |
| `FAQ.astro` | dietary + reservation FAQ |
| `MapEmbed.astro` | `/besuchen` (visit) page |

## Page composition

V5 composition: SplitHero · About+stats · Press (recognitions) · MarqueeCTA (reservation reminder) · CourseList tasting menu · PricingTable (menu + pairing tiers) · TeamGrid (chef + sommelière) · BookingMock · FAQ · MapEmbed.

## Gotchas

- **3 canonical components ARE Adèle-hardcoded content** — Press, CourseList, BookingMock were promoted from this demo and carry restaurant-specific content. See `docs/design/components/{press,course-list,booking-mock}.md` §Hardcoded content warning for the parameterization backlog.
- **Tuned 2026-05-22**: brighter burgundy `#7A2740` (was `#5A1A2E` oxblood), cooler warm-gray text-muted (dropped warm-brown family per V4 feedback "brown filler").
- **OG image:** uses `og-default.jpg` (Michelin-plated shot) — vertical-appropriate, no fix needed.
- **Reservation flow is MOCK** — submits to event.preventDefault() + flips to confirmation. Real production would POST to Resy / OpenTable / SevenRooms API per `INTEGRATIONS.md`.
