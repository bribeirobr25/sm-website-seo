# Sander & Voss Rechtsanwälte — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Mitte commercial-law boutique.
Live URL: https://demo-lawyer-sander-voss.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md` + `docs/design/templates/professional-services.md`.

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 1 product (static info + soft consultation CTA — no booking system, no contact form backend).
- **Display font:** Lora Variable (self-hosted via `@fontsource-variable/lora`). Body: Inter Variable.
- **Schema.org:** `LegalService` graph (most-specific type per `SEO.md` §5 + `professional-services.md` §11.8). Operator = `Attorney` Person node.
- **Languages:** DE primary + EN.
- **Jurisdiction:** DE (DSGVO + § 5 TMG + § 51 BRAO Berufshaftpflicht clause in `/impressum`).

## Common commands

```bash
cd clients/demo-lawyer-sander-voss
pnpm install                       # first time
pnpm dev                           # http://localhost:4321
pnpm dev -- --host 0.0.0.0         # expose to Docker MCP at host.docker.internal:4321
pnpm validate                      # biome lint + astro check + build
pnpm build                         # production build → dist/
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes   # deploy
```

## Imported canonical components

| Component | Source | Used in |
|---|---|---|
| `Accordion.astro` | `docs/design/components/_impl/Accordion.astro` | home (engagement process) + 2-col FAQ |
| `FAQ.astro` | `docs/design/components/_impl/FAQ.astro` (wraps Accordion + emits FAQPage JSON-LD) | home FAQ |
| `Press.astro` | local copy customized with legal-industry recognitions (Chambers / JUVE / WirtschaftsWoche) — canonical version is gastronomy-coded; see audit gap #3 | home press strip |
| `HalfPillCTA.astro` | `docs/design/components/_impl/HalfPillCTA.astro` (copied in for future use) | not currently mounted |
| `Lightbox.astro` | scaffold default | not currently mounted |
| `MapEmbed.astro` | scaffold default (OpenStreetMap) | `/kanzlei` only — `professional-services.md` §13 rule: NO map on home |
| `StatCallouts.astro` | scaffold default | currently UNUSED (V2 dropped per template §13 anti-pattern) |
| `Timeline.astro` | scaffold default | currently UNUSED (V2 dropped per template §13 — replaced by Accordion) |

## Page composition (V2 — Ordering A "Recognition-led")

`src/pages/index.astro`:
1. Hero (typography-led, white bg, forest-green serif H1)
2. Press strip — Chambers Highly Regarded · JUVE Empfohlen · WirtschaftsWoche Top-Kanzlei
3. Admissions + Memberships strip (Rechtsanwaltskammer Berlin · BRAK · DAV · ECIJA · IBA)
4. 2×2 PracticeAreas (numbered, with 3–4 sub-services each)
5. About (founder portrait placeholder + firm philosophy)
6. 2×2 TeamGrid with full bios (4 partners with initials tiles)
7. Accordion engagement process (Erstgespräch → Mandatsvereinbarung → Bearbeitung → Nachsorge)
8. Pull-quote block (Chambers Europe quote — mock, fictional)
9. 2-col FAQ (8 questions split 4+4)
10. Soft "Speak with us" CTA section (half-pill register)

Sub-pages: `/leistungen` (practice detail), `/kanzlei` (firm + map + hours), `/impressum`, `/datenschutz`.

## Gotchas

- **OG image:** generated as `public/img/og-default.png` (1200×630) via rsvg-convert. Forest-green + brass + "Klare Beratung. Verbindliche Ergebnisse." See repo `og-lawyer.svg` source in `/tmp/`. Real client would replace with branded shot.
- **Impressum carries 7 required legal blocks** for German law firms per `LEGAL.md` §DE — Berufsbezeichnung + Kammer + BRAO/BORA/FAO/RVG + Berufshaftpflicht (HDI, 2.5 M€ per § 51 BRAO). Verify before any cutover.
- **No `aggregateRating` in schema** — pro-services confidentiality + `SEO.md` §5.3 ban.
- **MapEmbed deliberately omitted from home** per `professional-services.md` §13 rule. Map lives only on `/kanzlei`.
- **Cream is NOT this client's base color.** V1 used cream — REJECTED per `COLOR.md` §6.5 portfolio diversity gate. V2 uses pure white. Do not regress.
