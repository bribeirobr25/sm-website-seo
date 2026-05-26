# Kodama Bonsai — design.md

**Status:** Portfolio demo · per `DESIGN-BEST-PRACTICES.md §17` template.

**Inherits:** `docs/design/DESIGN-BEST-PRACTICES.md` · `docs/design/COLOR.md` · no per-vertical template (bonsai is a knowledge/education service — closest fit `templates/education.md` + `templates/home-garden.md`).

## 1. Client context

- **Brand:** Kodama Bonsai (fictional) — "Eine Berliner Werkstatt für Bonsai-Wissen."
- **Vertical:** Educational/knowledge service, plant-care adjacent. Not retail, not workshop-only.
- **Register:** Contemplative, craft-led, slightly Japanese without being kitsch.
- **Audience:** German-speaking bonsai hobbyists from beginner ("first Ficus") through intermediate. Berlin-anchored but content useful across DACH.

## 2. Visual direction

Contemplative editorial — closer to a museum catalogue than a plant shop. Sage-grey paper-stoneware backdrop. Quiet serif typography. Real botanical content over visual fireworks. No tropical exuberance, no "bonsai zen" cliché stones-in-circles.

**Sourcing logic:**
- Palette sampled from cultivated bonsai aesthetics (Ryan Neil's Mirai studio + Pacific Bonsai Museum signage + traditional Japanese tokonoma colour discipline). Not extracted from a single source image — synthesized from the bonsai-display visual tradition.
- Typography chosen from agency variable-font catalogue avoiding all 6 existing demos' display fonts.

## 3. Color tokens

Defined at `src/styles/tokens.css`. Framework per `COLOR.md §3`: **Split-complementary**.

| Token | Hex | Role | Contrast vs bg |
|---|---|---|---|
| `--color-bg` | `#dde2d8` | sage-grey, paper-stoneware backdrop | — |
| `--color-surface` | `#e8ece4` | cards, lighter sage | — |
| `--color-surface-elev` | `#ced5c7` | chips, footer, darker sage | — |
| `--color-text` | `#1d2a23` | deep moss, primary text | **11.33:1** AAA |
| `--color-text-muted` | `#5d6b5c` | secondary text | **4.28:1** ⚠ AA-large only — see note |
| `--color-accent` | `#b85534` | persimmon, CTA pop | **3.63:1** ⚠ AA-large only |
| `--color-accent-deep` | `#8c3e25` | persimmon-dark, body links + CTA bg | **5.63:1** AA |
| `--color-accent-secondary` | `#7b8f5e` | matcha green, decorative only — NEVER text on bg | **2.69:1** FAIL — DO NOT use as text/bg |
| `--color-accent-secondary-deep` | `#4d6038` | matcha-dark, badges + secondary actions | **5.23:1** AA |
| `--color-inverted-bg` | `#1d2a23` | dark moss, pull-quote + newsletter overlay | — |

**Token comment-block in `tokens.css` overstates ratios** (corrected 2026-05-26 audit). Actual values above are sRGB-formula computed.

**Per-COLOR.md §6 #15:** `body` is wrapped in `@layer base { ... }` in `src/styles/global.css:37` so `.text-*` utilities aren't shadowed by the body's inherited color. **Do not unwrap.**

**Per-DBP §7:** primary CTA pattern is `bg-accent-deep text-bg hover:bg-text hover:text-bg` (5.63 default → 11.33 hover, both AAA). Newsletter submit + cookie Accept pinned to `accent-deep` after 2026-05-26 audit caught the `accent` (3.63:1) default as AA-large-only.

**Anti-patterns avoided** (per COLOR.md §6):
- #11 cream-default — bonsai uses sage-grey (clearly a different family from the cream demos Adèle/Bellini)
- #13 darken-on-hover with dark text — using `hover:bg-text` (which is darker than `bg-accent-deep`) maintains contrast inversion
- #15 unlayered body rule — explicitly wrapped

## 4. Typography choices

- **Display:** Cormorant Garamond Variable (elegant didone-adjacent serif). Distinct from all 6 other demos' display fonts (Lora, Newsreader, Bricolage Grotesque, Playfair, Fraunces).
- **Body:** Inter Variable (agency baseline).
- **Mono:** JetBrains Mono (rare use — code samples, possibly future).

Self-hosted via `@fontsource-variable/*`. No Google Fonts CDN.

## 5. Copy decisions

**Voice:** Quiet, precise, slightly austere. The brand says "Werkstatt, kein Geschäft" (workshop, not a store) and acts on it — no sales-y CTAs, no urgency banners, no "limited spots." Educational tone.

**Critical content rule:** every per-tree care/technique/propagation entry must be **botanically accurate** (Akadama ratios, mekiri timing, Berlin Hardiness Zone 7b calibration). 2 species currently flagged DRAFT — see BRIEF §Open questions.

## 6. Real assets available

**Photographic:** 12 Unsplash CC0 pool images at `public/img/trees/pool-XX.jpg` (DELETED 2026-05-26 — orphan after rotation flattening). Each species has 3 named copies (`<slug>-1/2/3.jpg`) generated via deterministic rotation. Stock-source disclosure in tree-page captions + Footer + photo metadata (`credit: 'Unsplash', license: 'CC0'`).

**Logo / SVG:** Sage-grey + persimmon "tree spirit" mark inline in Header (no logo file needed). Favicon SVG → ICO + apple-touch-icon all derived.

**No real workshop photo.** Hero right column shows a tree (Ficus retusa pool image). At paying-client cutover, source actual workshop interior + exterior + founder portraits.

## 7. Layout signature

- **Home:** Split Hero (text left / photo right) → 3-card path picker (Einsteiger / Indoor / Outdoor) → 4-card beginner grid → asymmetric philosophy block → 6-card featured grid → NewsletterMock (inverted bg)
- **Tree detail (24 dynamic pages):** Identity hero (photo left + name/scientific/family right) → 2-photo gallery → 6-field care grid → 3-style cards → numbered technique timeline (with period + minimum age) → inverted-bg propagation card → related trees
- **Suche:** Heading + search input + 3 filter chips + dynamic result grid

Per `DESIGN-BEST-PRACTICES.md §6.5` portfolio-diversity gate: composition is **unique** vs all 6 existing demos. No other demo has a 3-card path picker as section 2, no other has dual TreeCard-grids on home, no other has dynamic detail pages of this depth.

## 8. Delivery notes

- Tier 2 (Astro 6 + Tailwind v4 + Sentry). Type 1 + 1 Type-2 feature (newsletter mock).
- Schema: `EducationalOrganization` (primary) + `LocalBusiness` (local-pack) + per-tree `Article` + `BreadcrumbList` (all routes).
- DE primary. EN data ready in `trees.ts` + `i18n.en` but EN routes NOT built — `Header.astro` points all nav to DE routes regardless of locale.
- Newsletter mock — production cutover: wire to Brevo/Mailjet (EU) with double-opt-in per LEGAL.md.
- DSGVO: Impressum + Datenschutz (with Speicherdauer + Datensicherheit sections) + CookieBanner with consent-first + Reject parity + Footer Manage preferences link.
