# Kodama Bonsai — per-client CLAUDE.md

**Status:** PORTFOLIO DEMO. Fictional Berlin Prenzlauer Berg bonsai-information service.
Live URL: https://demo-bonsai-kodama.vercel.app (noindex, never flip).

**Inherits:** repo-root `CLAUDE.md`. No matching per-vertical template — bonsai is information/education service, closest existing fit is `docs/design/templates/education.md` (knowledge-led) + `docs/design/templates/home-garden.md` (plant care).

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 1 product (static info site) with one Type-2 feature (newsletter mock).
- **Display font:** Cormorant Garamond Variable (elegant editorial serif, distinct from all 6 other demos). Body: Inter Variable.
- **Schema.org:** `LocalBusiness` graph (default scaffold — should be amended to `EducationalOrganization` if converted to retainer).
- **Languages:** DE primary only. EN strings in tree data + i18n table but EN routes NOT built (locale toggle removed from Header).
- **Jurisdiction:** DE (DSGVO + § 5 TMG).

## Common commands

```bash
cd clients/demo-bonsai-kodama
pnpm install
pnpm dev                                                  # http://localhost:4321
pnpm dev -- --host 0.0.0.0
pnpm validate
pnpm build                                                # 35 pages including 24 dynamic tree pages
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes
```

## Page tree (35 generated routes)

- `/` — home (hero, 3-entry paths, 4 beginner trees, philosophy block, 6 featured trees, newsletter)
- `/trees` — alphabetical grid of all 24 species
- `/trees/[slug]` — dynamic detail page × 24 (identity hero, 2-photo gallery, 6-field care grid, 3 styles, timeline of 2-4 techniques with period+age, propagation card, 3 related trees)
- `/einsteiger` — 8 beginner-friendly species
- `/indoor` — 10 indoor species (Chinese Elm counts as both)
- `/outdoor` — 14 outdoor species
- `/suche` — client-side search (popular/scientific name, family, origin) with Indoor/Outdoor/Beginner filters
- `/werkstatt` — about page (workshop location + hours)
- `/impressum` — § 5 TMG legal page
- `/datenschutz` — DSGVO privacy policy
- `/404` + `/500` — error pages

## Content data

- **24 trees** at `src/lib/trees.ts` — full DE + EN content for each: introduction, 6-field care (sun/soil/water/fertilizer/temp/pruning), 3 common styles, 2-4 techniques with period+age+description, propagation method+period+postCare, 3 photos.
- Botanical accuracy: research drawn from agency-internal bonsai-horticulture knowledge 2026-05-26. Cross-reference against bonsaiempire.com / bonsaimirai.com / herons.co.uk before publishing as authoritative. 2 species marked `DRAFT — verify`: Chloroleucon tortum (cold tolerance + cuttings rate), Serissa japonica (cuttings success rate).
- Climate-calibrated for Berlin Hardiness Zone 7b. Olea europaea explicitly flagged as needing frost-free winter shelter.

## Imported canonical components

None. Built bespoke for this demo:
- `Header.astro` + `Footer.astro` (custom — DSGVO links, search/nav/hamburger)
- `TreeCard.astro` (universal tree card — used 4x on home + 24x on /trees + 8x on /einsteiger etc.)
- `NewsletterMock.astro` (inverted-bg block — used on home + werkstatt)

## Photo strategy

- **12-photo Unsplash CC0 pool** at `public/img/trees/pool-01.jpg` … `pool-12.jpg`
- **72 species-named copies** generated via deterministic rotation (each species gets 3 distinct photos from the pool). Files: `<slug>-1.jpg`, `<slug>-2.jpg`, `<slug>-3.jpg`.
- All pages reference per-species filenames, but the underlying bytes are from the 12-photo pool.
- Footer + tree-page captions disclose "Stockfotografie (Unsplash CC0). Echtes art-spezifisches Fotomaterial folgt mit der Werkstatt-Dokumentation."
- **Production cutover path:** replace each pool-XX.jpg with species-specific photos sourced from Wikimedia Commons (with proper attribution) before flipping noindex.

## Gotchas

- **EN locale toggle removed from Header** — EN routes were not built for v1. Tree data is bilingual (DE + EN) and ready for future EN page generation.
- **Search is client-side only** — `SEARCH_INDEX` is serialised JSON injected into `/suche` page. Works without JS = empty results display (initial render is empty, JS populates immediately).
- **Newsletter is mock** — `data-newsletter-form` submits `event.preventDefault()` + shows thanks message. Production path: Brevo / Mailjet (EU) with double-opt-in per LEGAL.md.
- **Workshop hours** are fictional (Di-Sa 14:00-19:00, Sa 10:00-17:00 per BRIEF). Real client must confirm before production.
- **GbR legal entity** + fictional USt-IdNr (`DE 312 998 442`) in `src/lib/site.ts` — replace with real values at production cutover.
- **Cormorant Garamond + Inter variable fonts** loaded via `@fontsource-variable/*`. Both ship out-of-the-box from npm.
- **@layer base wrap verified** — `src/styles/global.css` body rule is wrapped in `@layer base { ... }` so `.text-bg` / `.text-X` utilities work per the 2026-05-25 incident fix.

## Page composition (anti-monoculture check)

- Home: Hero (split) → 3-entry paths (3-col cards) → 4-beginner-trees grid → Philosophy (asymmetric editorial) → 6-tree featured grid → Newsletter (inverted-bg)
- Distinct from other 6 demos: no FAQ on home, no Press section, no Map preview, no Stat callouts row. The dominant pattern is the **content-led editorial flow** (paths → beginners → philosophy → featured → newsletter).
- Trees detail page (`/trees/[slug]`): Identity hero → 2-photo gallery → 6-field care grid → 3-style cards → numbered technique timeline → inverted-bg propagation card → related trees. **Unique** in the agency portfolio — no other demo has a dynamic detail page of this depth.

## What was NOT built

- EN routes (data is ready)
- Photo lightbox on tree pages
- Yamadori / wild-collection guide
- Tool guide (scissors, wire, akadama sources)
- Workshop booking system
- KPI dashboards (would be tracking page-views per species + newsletter conversion + search query log)
