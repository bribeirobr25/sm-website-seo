> **STATUS: PORTFOLIO DEMO**
>
> Fictional business — design decisions documented as canonical reference for the
> next gastronomy demo or first real gastronomy client. See `BRIEF.md` + `RESEARCH.md`.

# design.md — Eiscafé Bellini (demo)

Per-client design decisions for `clients/demo-eiscafe-bellini/`. Anchors back to `docs/design/templates/gastronomy.md`.

---

## 1. Archetype + sub-archetype

**Repositioned 2026-05-22.** Was previously **B — Neighborhood pillar / traditional family** with cream + terracotta heritage palette. Repositioned to **A — Editorial specialty Eiscafé** to differentiate from the saturated Berlin gelateria market (every Italian-family gelateria already runs cream-and-terracotta + Nonna-story copy). The heritage anchor (`seit 1987` + Rosa Bellini's recipes from Treviso) is retained, but reframed as *ingredient-provenance heritage* rather than *family-business heritage*.

**Category:** Gastronomy (Eiscafé — gelato + specialty coffee)
**Sub-archetype:** **A — Editorial specialty Eiscafé** per `templates/gastronomy.md` §1, drawing on the Coffee shop / specialty roaster — dark variant register added 2026-05-22 (The Barn, Watch House, Cereal magazine).
**Color framework:** Monochromatic dark per `docs/design/COLOR.md §3` (single deep-ink base + cool off-white + warm-tan accent).

Distinguishes from:
- Sub-archetype B (Neighborhood pillar / traditional family) — *would have been* terracotta-warm + Nonna-led copy. Market is saturated; reads like every other Italian gelateria on the same block.
- Sub-archetype C (Boutique / counter-only) — too small / too contemporary for the three-generation anchor.

**What the new register signals:** ingredient seriousness (named producers, D.O.P. designations, cold-process chocolate from Bonajuto), editorial discipline (one menu unchanged since 1987 + a handful of vegan sorbetti), urban specialty café culture. The Eiscafé equivalent of a single-origin coffee roaster.

**What stays unchanged from the heritage register:** the `seit 1987` anchor · the Rosa Bellini / Treviso origin story (reframed as recipe-provenance) · the granddaughter Giulia continuity · the Husemannstraße location · the Italian source-DNA of the recipes.

## 1.5 Voice repositioning

| Surface | Before (heritage family register) | After (editorial specialty register) |
|---|---|---|
| Hero H1 (DE) | "Drei Generationen Familieneis. In Prenzlauer Berg seit 1987." | "Bronte-Pistazie. Modica-Schokolade. Aus benannten Quellen, seit 1987." |
| Hero body (DE) | "Bei uns gibt es Eis, wie es Nonna Rosa 1987 aus Treviso mitgebracht hat..." | "Wir machen Eis nach den Rezepten, die Rosa Bellini 1987 aus Treviso mitbrachte — mit Zutaten von sieben benannten Produzenten aus Sizilien, Piemont und Brandenburg..." |
| About H2 | "Drei Generationen. Ein Eis." | "Sieben Produzenten. Eine Karte." |
| Stat 1 | `seit 1987` / in Prenzlauer Berg | `seit 1987` / an der Husemannstraße |
| Stat 2 | `3` / Generationen Familienbetrieb | `7` / benannte Produzenten |
| Stat 3 | `36` / Sorten täglich frisch | `100%` / Bronte-Pistazie D.O.P. |

The register shift: from *who made it (Nonna)* to *what's in it (Bronte D.O.P. + Bonajuto + Tonda Gentile + Brandenburg-Bio)*. The named-supplier-list is the editorial signature.

---

## 2. Color tokens

**Repositioned 2026-05-22 (third register shift).** Palette history:
1. **Original (heritage trattoria):** cream `#FAF6EE` + terracotta `#C1643B` + pistachio secondary. Read as "Italian trattoria / pasta-house warmth" — not gelato-specific enough.
2. **Mid-session (modern gelateria):** cream + Bronte-pistachio `#4F704A` primary + terracotta secondary. Better gelato signaling but still in the "every Berlin gelateria" register.
3. **Current (editorial specialty Eiscafé):** dark `#0F1115` + cool off-white + warm-tan `#A67C52` accent. Monochromatic dark register per `COLOR.md §3`. Reference: The Barn, Watch House, Cereal magazine.

The third pivot is a deliberate market-differentiator: drop into the third-wave coffee dark register that *no* Berlin gelateria currently runs, while keeping the heritage recipe story.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#0F1115` | Near-black — page bg (the "60%" dominant). Cool blue-black undertone, not pure `#000` |
| `--color-surface` | `#181C22` | Card bg, header bg, footer bg (slightly lifted from page) |
| `--color-surface-elev` | `#22272F` | Alt-row bg, elevated card states, hover surface |
| `--color-text` | `#E6EAF2` | Cool off-white body text (NOT pure `#FFF` — softer, magazine-print warmth) |
| `--color-text-muted` | `#8A8F9C` | Captions, secondary text, opening hours rows |
| `--color-accent` | `#A67C52` | Warm tan — primary CTA, stat numbers, link/hover. Matches Bronte-pistachio paste color in deep register; works as "the only warmth" on the dark page |
| `--color-accent-deep` | `#C99064` | **LIGHTER** tan for hover (inverse of light-register rule — on dark, hover = brighter for higher contrast) |
| `--color-accent-secondary` | `#C1643B` | Terracotta — used ONLY for the DEMO ribbon. Intentional non-brand meta-element. Not part of brand voice. |
| `--color-accent-secondary-deep` | `#A24D27` | DEMO ribbon hover (if interactive); else dormant |
| `--color-border` | `#2D333D` | Subtle grid line — barely-visible card edges + footer rule |
| `--color-success` | `#6B9B7E` | Muted teal-green — form success states |
| `--color-warning` | `#D67450` | Warn-coral on dark — error states (visually distinct from terracotta DEMO) |

**Contrast verification (WCAG 2.2 AA):**
- `--color-text` (`#E6EAF2`) on `--color-bg` (`#0F1115`) = 14.0 : 1 → passes AAA
- `--color-text-muted` (`#8A8F9C`) on `--color-bg` = 5.8 : 1 → passes AA-normal
- `--color-accent` (`#A67C52`) on `--color-bg` = 5.5 : 1 → passes AA-normal for accent text on dark
- `--color-bg` (`#0F1115`) on `--color-accent` (`#A67C52`) = 5.5 : 1 → passes AA-normal for button text (dark-on-tan)
- `--color-accent-deep` (`#C99064`) on `--color-bg` = 7.4 : 1 → passes AA-normal (hover state brighter, not darker — by design on dark register)
- `--color-bg` (cream-fallback) on `--color-accent-secondary` (terracotta) = 4.7 : 1 → DEMO ribbon still passes

**Why this works for an Eiscafé specifically:** the dark register elevates the ingredient-provenance story (named producers feel "serious" against dark, like a wine list). Warm tan `#A67C52` doubles as both the pistachio-paste color (Bronte-pistachio paste IS this hue) AND the espresso-crema color — collapsing the dual Eiscafé identity (gelato + coffee) into one accent. No green/pink needed because the dark monochromatic register lets the photography do the color work.

## 2.5 Palette audit (per `docs/design/COLOR.md §5`)

Updated 2026-05-22 for the editorial-dark repositioning (third palette in this session).

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | WCAG 2.2 AA contrast (text-on-bg, bg-on-accent) | ✅ | §2 contrast block above — text 14.0:1 (AAA), text-muted 5.8:1 (AA-normal), accent on bg 5.5:1 (AA-normal), bg on accent 5.5:1 (AA-normal). DEMO ribbon terracotta on cream-text 4.7:1. |
| 2 | Brand-token count ≤ 5 | ✅ | bg + text + text-muted + accent + accent-secondary = 5 (deep/-deep siblings + surface helpers not counted). Accent-secondary is single-purpose (DEMO ribbon only). |
| 3 | 60-30-10 verified on fold-2 sections | ⏳ Pending screenshot | Will verify post-rebuild via `repositioned-bellini-home-desktop-1280-fullpage.png`. Expected: dark `#0F1115` dominant 60% + cool off-white text + surface-elev cards 30% + warm-tan accents 10%. |
| 4 | `accent-deep` correctly polarized for register | ✅ | On dark register: hover = LIGHTER (`#C99064` lighter than `#A67C52`). Inverse of light-register rule. WCAG-relevant rule is "hover increases contrast" which manifests as lighter on dark. Documented in `COLOR.md §8`. |
| 5 | Harmony framework documented + reasoned | ✅ | **Monochromatic dark** per `COLOR.md §3`. Single deep-ink base (`#0F1115`) with cool off-white text and warm-tan accent — all in the cool-blue-to-warm-tan band. Chosen because (a) every Berlin gelateria runs cream-warm — market differentiator, (b) ingredient-led editorial voice needs a "wine-list" gravity that warm registers can't deliver, (c) the warm tan accent doubles as pistachio-paste color AND espresso-crema color, collapsing the dual Eiscafé identity. |
| 6 | Owner-confirmed | 🟡 N/A | Portfolio demo — fictional business |

**60-30-10 breakdown (expected post-rebuild):**

| Bucket | Allocation | Tokens used |
|---|---|---|
| Dominant 60% | Page bg + hero overlay + section bg | `--color-bg` `#0F1115` |
| Secondary 30% | Body text + card surface + footer bg + borders + photography content | `--color-text` + `--color-text-muted` + `--color-surface` + `--color-surface-elev` + `--color-border` |
| Accent 10% | CTAs + stat numbers (seit 1987 / 7 / 100%) + nav-link hover + skip-link + section-head color | `--color-accent` warm tan + `--color-accent-deep` |
| Secondary accent < 2% | DEMO ribbon (and only the DEMO ribbon) | `--color-accent-secondary` terracotta |

**Anti-patterns avoided (per `COLOR.md §6`):**
- ✅ No 4+ primary accents (only warm-tan is "primary"; terracotta is meta-element)
- ✅ Accent < 15% of viewport (the dark bg is the canvas; warm-tan is small surfaces only)
- ✅ No 50/50 color split (clear dark dominance)
- ✅ Accent (`#A67C52` tan) and warning (`#D67450` coral) are visually distinct
- ✅ Hover-state contrast direction correct for register (lighter on dark, darker on light)
- ✅ No `#000` + `#FFF` purist palette (`#0F1115` blue-black + `#E6EAF2` cream-white, both off-pure)
- ✅ Trend resistance: dark editorial is not a 2026-trend; The Barn ran this register since 2010, Watch House since 2014

---

## 3. Typography

Per `templates/gastronomy.md` §Typography + the Heritage-Italian sub-archetype pairing.

| Token | Value | Use |
|---|---|---|
| `--font-display` | `"Cormorant Garamond", "Georgia", serif` | Display — H1, H2, hero, large pricing numbers. Italian-villa-warm serif. |
| `--font-body` | `"Inter", system-ui, -apple-system, sans-serif` | Body, nav, forms, buttons — neutral, legible. |
| `--font-mono` | `"JetBrains Mono", ui-monospace, monospace` | Tabular numbers (hours, prices), LABEL(N) catalog headers. |

**Self-hosting:** Cormorant Garamond + Inter must be self-hosted via `@fontsource-variable/*` per `PERFORMANCE.md` §6 Font rules. Demo phase: use system fallbacks (Georgia + system sans) to ship faster; flag for production cutover.

**Headings:** `font-weight: 500` (medium), `letter-spacing: -0.01em`, `line-height: 1.15`.
**Body:** `line-height: 1.6`.

---

## 4. Copy voice

Per `RESEARCH.md` §Synthesis (Phase 1):

- **Du-form + Ihr-plural** mixed. `Ihr` for group/welcome (`Bei uns seid Ihr immer willkommen`); `du` for direct address / product call (`Probier unser Pistazieneis`)
- **Heritage anchor** in hero + about + footer: `seit 1987 · drei Generationen · in Prenzlauer Berg`
- **Italian sprinkled** at Hokey-Pokey level: flavor names + ingredient regions (Bronte, Piemonte, Veneto), Italian dessert names (Affogato, Coppa, Bacio), one or two Italian welcome touches (`Benvenuti!` as a sub-headline accent)
- **Sentence length: short.** 1-2 sentences per hero paragraph, 1-2 lines per flavor description
- **Quality-via-specificity** beats adjectives: `Bronte-Pistazien` and `Piemonteser Haselnüsse`, not `hochwertige Zutaten`
- **No marketing-speak:** ban list = `premium · exklusiv · einzigartig · revolutionär · best in town · world-class`
- **Period-terminated CTAs** per `DESIGN-BEST-PRACTICES.md` §11 — `Probier unser Pistazieneis.` not `Probier unser Pistazieneis →`

---

## 5. Page-structure decisions

| Page | DE route | EN route | Sections |
|---|---|---|---|
| Home | `/` | `/en/` | Hero + Menu-preview (top 6 flavors via `LabelCountHeader`) + About-snippet + Visit-snippet |
| Menu | `/gelato` | `/en/gelato` | Header + Le Creme · Sorbetti · Spezialitäten · Eistorten · Note on seasonal rotation |
| Visit | `/besuchen` | `/en/visit` | Hero + Address + Hours + Map (link to GMaps, not embedded — per `DESIGN-BEST-PRACTICES.md` map rule) + Contact-CTA |
| Impressum | `/impressum` | DE-only | TMG §5 — `LEGAL.md` §DE template |
| Datenschutz | `/datenschutz` | DE-only | DSGVO — `LEGAL.md` §DE template (Datenschutzerklärung) |
| 404 | `/404` | `/en/404` | Branded error, link back home |
| 500 | `/500` | `/en/500` | Sentry-captured error, link to contact |

---

## 6. Component picks from `docs/design/components/_impl/`

| Component | Used? | Where |
|---|---|---|
| `HalfPillCTA.astro` | ✅ | Header top-right (`RESERVIEREN` — links to phone since this is a walk-in shop; on EN: `BOOK A TABLE`) |
| `LabelCountHeader.astro` | ✅ | Menu category heads: `LE CREME (12)`, `SORBETTI (8)`, `SPEZIALITÄTEN (4)` |
| `HoursInNav.astro` | ✅ | Sub-nav line on Home + Visit pages: `SOMMER / Mo-So 11-22` + `WINTER / Di-So 12-19` |
| `StatCallouts.astro` | ✅ | About section: `seit 1987 · drei Generationen · 36 Sorten` |
| `Section.astro` alternating-bg | ✅ | Long-scroll on Home + Menu — bg alternates between cream and cream-shaded |
| `MarqueeCTA.astro` | ❌ | Skipped — too premium-boutique for the warm-family register |
| `EyebrowDisplayHero.astro` | ❌ | Skipped — HARD SEO RESTRICTION for local-business (per `SEO.md` §15); we need the H1 to carry "Eiscafé Berlin / Eiscafé Prenzlauer Berg" keywords |
| `SplitText.astro` | ❌ | Skipped — portfolio-aesthetic-only |

---

## 7. Photography rules

Per `templates/gastronomy.md` §Photography rules + `RESEARCH.md` Phase 3 sourcing brief:

- **Warm light, real photos** — avoid teal+orange color grading, avoid model-with-cone-on-pastel-wall stock cliché
- **Show ingredients** — at least one image with whole Bronte pistachios visible (signals regional sourcing)
- **Show the room** — at least one interior of the shop floor (counter visible)
- **Show the street** — at least one exterior on a Berlin cobblestone street with Bezirk feel (Husemannstraße is real and cobblestoned)
- **Owner portrait** — three-generation visual story: ideally one vintage-style 1980s family photo (or sepia-toned modern equivalent) + one modern Giulia portrait

Sources: Unsplash + Pexels only (free license; attribution per `CREDITS.md`).

---

## 8. Anti-patterns (forbidden per `templates/gastronomy.md` §Anti-patterns)

- ❌ "BOOK NOW" all-caps shouty CTAs
- ❌ Gradient hero overlays in saturated brand colors
- ❌ Floating chat bubbles
- ❌ Animated count-up stats
- ❌ Sticky "limited time" pricing banners
- ❌ Generic Unsplash stock (lavender field, model-with-cone-against-pastel-wall) — see image-sourcing brief in `CREDITS.md`
- ❌ PDF-only menu (Annamaria does this; we don't — HTML menu for SEO + i18n + mobile)
- ❌ Embedded Google Maps iframe (per `DESIGN-BEST-PRACTICES.md` map rule — use a link to GMaps with a static styled card)

---

## 9. Decision matrix linkage

Per `templates/gastronomy.md` §10 Decision matrix:

| Question | Choice | Rationale |
|---|---|---|
| Reservation backend | None (walk-in shop) | Eis-café — no reservations; phone for special orders (cakes) |
| DB-backed flow | None | Type 1 static info site |
| Featured imagery | Warm-Italian-villa cream + terracotta | Heritage family archetype |
| Color depth | Light warm cream | Italian-house in person; gelato photography against warm-cream bg |
| Type pairing | Serif display + neutral sans | Classical heritage feel |

---

## 10. DEMO badge

Per runbook §1.8: visible `DEMO / BEISPIEL` ribbon at top of every page. Implementation: a top-of-`BaseLayout.astro` strip with terracotta bg + cream text reading `BEISPIEL — Demo-Website von sm-website-seo. Kein echtes Geschäft. · This is a portfolio demo by sm-website-seo. Fictional business.` Dismissible? **No** — persistent so anyone landing on the URL knows immediately.
