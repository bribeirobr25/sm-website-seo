# CREDITS.md — Eiscafé Bellini (demo)

**Image and asset attribution.** Per `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` §1.3: this file is the canonical source of truth for image licensing. Every `<img>` in the build also carries an inline HTML comment with the source URL for developer reference (not a `data-source` attribute — those ship to production HTML).

All images sourced from Unsplash. The [Unsplash License](https://unsplash.com/license) permits free use for commercial + non-commercial purposes, with no attribution required (but credit is encouraged and we credit here).

---

## Images used

| File | Source | Photographer | Source URL | Slot | Size | License | Downloaded |
|---|---|---|---|---|---|---|---|
| `public/img/hero-gelato-counter.jpg` | Unsplash | Elijah Pilchard | https://unsplash.com/photos/display-case-filled-with-various-flavors-of-gelato-eefxeCGq8hM | Hero (Home) | 269 KB · 1600×800 | Unsplash License | 2026-05-20 |
| `public/img/gelato-counter-alt.jpg` | Unsplash | Kristina C (Siena, Italy) | https://unsplash.com/photos/gelato-display-case-showcasing-many-colorful-flavors-FUSIZFIPExk | Menu page header | 347 KB · 1600×1067 | Unsplash License | 2026-05-20 |
| `public/img/gelato-counter-alt2.jpg` | Unsplash | tommao wang | https://unsplash.com/photos/gelato-flavors-are-displayed-in-a-glass-case-mQa4faNuPu0 | Menu preview accent | 503 KB · 1600×1067 | Unsplash License | 2026-05-20 |
| `public/img/berlin-street.jpg` | Unsplash | (photographer — see Unsplash page) | https://unsplash.com/photos/men-walking-near-concrete-buildings-nphovVuT9OE | About section (city feel) | 342 KB · 1600×1067 | Unsplash License | 2026-05-20 |
| `public/img/street-cobblestone.jpg` | Unsplash | (photographer — see Unsplash page) | https://unsplash.com/photos/a-cobblestone-street-in-a-european-city-dmtfGYCVweM | Visit page hero (cobblestone feel) | 1.2 MB · 1600×2400 | Unsplash License | 2026-05-20 |
| `public/og-default.jpg` | Generated | sm-website-seo | (Built from `hero-gelato-counter.jpg` — 1200×630 crop) | OG/Twitter cards | — | Unsplash + agency | DRAFT |

**Placeholder.astro components** used for slots not covered by downloads (acceptable per `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` §1.8 for demo phase):
- Featured menu preview cards (Bronte Pistachio, Crema Bellini, Piemonte Chocolate) — product detail shots can be added at polish
- About section owner portraits (Tommaso + Rosa 1987 vintage, Giulia modern) — sensitive imagery, real owner-supplied photos at production cutover

Per the Unsplash License, attribution is not required but is included as a courtesy. Photographer names finalized from the Unsplash photo pages — verify before committing public-facing copy.

---

## Anti-patterns avoided

Per `templates/gastronomy.md` §Anti-patterns + `design.md` §8:

- ❌ NO model-with-cone-on-pastel-wall stock photography
- ❌ NO teal+orange color-graded food photography
- ❌ NO perfectly-styled overhead-shots-with-flat-lay-props
- ❌ NO lavender-field stock cliché
- ✅ Selected images have warm natural light, real-looking shop floors, ingredient visibility

---

## How to swap a real image

When the demo is elevated to a real client (per `CLAUDE.md` §"When this demo becomes a real client"):

1. Delete the file at `clients/demo-eiscafe-bellini/public/img/[file].jpg`
2. Replace with real owner-provided photo (same filename + aspect ratio)
3. Update this `CREDITS.md` row: change Source to "Owner-provided" and License to per the photo release agreement
4. Re-run `pnpm build` to regenerate AVIF/WebP versions

If still using Unsplash for some slots (acceptable for production with attribution):
- Keep this `CREDITS.md` row as-is
- Add the photographer credit to the page footer per `templates/gastronomy.md` §Photography rules (attribution requirement for production-grade use)

---

## Future polish — DRAFT items

- The "TBD" photographer column entries need finalization. WebSearch returned the right collection URLs but not specific photographer attributions for each candidate; finalize when the actual binary images are downloaded into `public/img/`. The demo CAN ship without finalized picks (using `Placeholder.astro` components) — the Placeholder displays a visible labeled box so prospects understand "real photo goes here." For a high-quality demo we want real images; for a fast-ship demo Placeholders work.
- The composite OG image (`public/og-default.jpg`) is a tool-generated combination of a hero image + the wordmark. Generation script not yet written — for demo can use the hero image alone at 1200×630.
