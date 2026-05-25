# Bart & Pomade Barbershop — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Friedrichshain heritage barbershop.
Live URL: https://demo-barber-bart-pomade.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md` + `docs/design/templates/beauty.md`.

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 1 product (info + mock booking form; no real Treatwell API integration).
- **Display font:** Bricolage Grotesque Variable (self-hosted via `@fontsource-variable/bricolage-grotesque`). Modern geometric sans, bold uppercase for hero. Body: Inter Variable.
- **Schema.org:** `BarberShop` graph (most-specific type per `SEO.md` §5 + `beauty.md` §11.8).
- **Languages:** DE primary + EN.
- **Jurisdiction:** DE (DSGVO + § 5 TMG). Legal form: UG (haftungsbeschränkt).

## Common commands

```bash
cd clients/demo-barber-bart-pomade
pnpm install
pnpm dev                           # http://localhost:4321
pnpm dev -- --host 0.0.0.0
pnpm validate
pnpm build
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes
```

## Imported canonical components

| Component | Source | Used in |
|---|---|---|
| `Accordion.astro` | `_impl/Accordion.astro` | 2-col FAQ on home |
| `FAQ.astro` | scaffold default | UNUSED on home (Accordion used directly for 2-col layout) |
| `PricingTable.astro` | local copy from `_impl/PricingTable.astro` | UNUSED — V2 home uses custom 3-col side-by-side via `MenuPreview.astro` |
| `Lightbox.astro` | scaffold default | UNUSED on home — V2 uses CSS-gradient portfolio tiles |
| `MapEmbed.astro` | scaffold default | `/werkstatt` only — NOT on home per `beauty.md` §13 |
| `StatCallouts.astro` | scaffold default | UNUSED (V2 dropped per template §13 anti-pattern) |
| `Timeline.astro` | scaffold default | UNUSED (V2 dropped — BeforeAfter visual replaces) |

## Page composition (V2 — Ordering A "Heritage barber")

`src/pages/index.astro`:
1. Hero (dark register, full bleed, "SCHERE. KLINGE. POMADE." uppercase Bricolage)
2. 3-column PricingTable side-by-side (SCHNITTE · BART+RASUR · EXTRAS)
3. 3 mock Before/After sliders (CSS gradient halves + center dividers)
4. About + brick-red pull-quote ("Maschine ist erlaubt — aber sie kommt nach der Schere")
5. 6-tile portfolio gallery (gold/red gradients — placeholders)
6. Horizontal team cards (4 barbers, large initial tile + years-of-experience stat on right)
7. Mock BookingMock (Treatwell-style: service select + barber select + date + time-slot radio buttons + gold submit)
8. TrustBadgeRow (Google 4.8★ · Reuzel Partner · Friseur-Innung · BARTalist Featured)
9. 2-col Accordion FAQ (6 questions split 3+3)
10. Light cream "Anrufen ist am schnellsten" CTA — intentional rhythm break from dark-dominant body

Sub-pages: `/preise` (full price list), `/werkstatt` (shop story + map + hours), `/impressum`, `/datenschutz`.

## Gotchas

- **Dark-dominant palette is the heritage-barber expectation** per `beauty.md` §13 rule. NOT cream + charcoal text — that's boutique-salon register. Per `COLOR.md` §6.5 rule 3, this is the portfolio's required dark-dominant demo. Do not regress to a light page.
- **`--color-inverted-bg` is LIGHT here** (cream `#F2EEE3`), unlike all other demos where inverted-bg is dark. This is because the dominant register is dark — so the "lift up out of the dark" inverted block is light. Mind this when wiring sections.
- **OG image:** generated as `public/img/og-default.png` (1200×630) via rsvg-convert. Black bg + barber-pole stripe pattern + "SCHERE. KLINGE. POMADE." gold/bone uppercase. Source: `/tmp/og-barber.svg`.
- **No `aggregateRating` in schema** — `SEO.md` §5.3 ban.
- **MapEmbed NOT on home** per `beauty.md` §13 rule — barber bookings happen by phone first.
- **BookingMock is a mockup** — submits to `event.preventDefault()` + flips to confirmation state. Real production would POST to Treatwell API per `INTEGRATIONS.md`.
- **PriceTable is hand-built per V2** — does not use the canonical `PricingTable.astro` because the V2 layout (3 categories side-by-side as a single wide pricing block, not 3 separate tier-cards) needed a custom structure. The canonical PricingTable.astro is left in `src/components/sections/` as an unused option.
