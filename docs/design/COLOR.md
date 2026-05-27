# COLOR.md — Color palette rules

**Applies to:** All product types (Type 1-5). Every client project.
**Owns:** Cross-cutting palette rules — proportion (60-30-10), harmony (analogous / complementary / monochromatic / triadic), token-count cap, color psychology by vertical, pre-launch audit, anti-patterns.
**Does NOT own:** How to *source* a palette (that's `DESIGN-BEST-PRACTICES.md §5`) or per-vertical recipes (those are `docs/design/templates/[vertical].md §6 Color archetypes`).

This doc was added 2026-05-22 after auditing the agency rule library against external references (Hostinger color-schemes tutorial — surfaced the 60-30-10 gap) and the Eiscafé Bellini repalette.

---

## 1. The 60-30-10 rule (mandatory)

Every page must allocate its visible color real-estate roughly in this ratio:

| Bucket | Share | What goes here |
|---|---|---|
| **Dominant** | ~60% | Page bg, hero bg/overlay, large surface areas. Almost always the lightest or darkest color in the palette. |
| **Secondary** | ~30% | Body text, card surfaces, footer bg, header bg, alt-row bg, borders. Supports the dominant without competing. |
| **Accent** | ~10% | CTAs, links, focus rings, hover states, headings emphasis, stat numbers, badges. The "voice" of the brand. |

**Why 60-30-10:** prevents the two failure modes the agency repeatedly audits against — (a) too-loud sites where the accent overwhelms (accent >30% of viewport) and (b) flat/template-y sites where there's no hierarchy (everything muted-gray-on-white).

**How to verify on a page:** look at the above-the-fold viewport. If the accent color (CTA + hover + link) covers more than ~10-15% of the visible pixels, the page is over-accented. If the page is monotone with only one visible color, it's under-accented.

**Hero exception:** when the hero has a full-bleed photograph, the photo dominates ~50-60% and the dominant brand color appears below the fold. Audit 60-30-10 at the *section* level on the fold-2 sections (MenuPreview / About / Visit), not just the hero.

---

## 2. Token-count cap

**Maximum 5 brand tokens per client.** Sources: Hostinger color-schemes tutorial (max 4 colors) + the agency's text-muted convention (+1 for muted body copy).

The 5 canonical brand tokens, fixed across all clients:

| Token | Role |
|---|---|
| `--color-bg` | Page bg (the "60%" dominant) |
| `--color-text` | Body text (the "30%" secondary) |
| `--color-text-muted` | Captions / secondary text |
| `--color-accent` | Primary accent (the "10%" — CTAs, hovers, stat numbers) |
| `--color-accent-secondary` | Small decorative or warning accent (badges, ribbons, footer rule, DEMO banner) — used sparingly |

**Plus 2 optional sibling tokens** (`--color-accent-deep` and `--color-accent-secondary-deep`) for darken-on-hover states. These do NOT count toward the 5-token cap — they are derived from their parent accent.

**Plus surface helpers** (`--color-surface`, `--color-surface-elev`, `--color-border`) — these are *neutral derivatives* of bg, not new colors. Acceptable.

**Semantic tokens** (`--color-success`, `--color-warning`, `--color-warning`) — re-use or alias existing accent tokens whenever the brand allows. Do NOT introduce 3 new green/orange/red hues if pistachio + terracotta + a warm-warning already exist in the palette.

**Anti-pattern:** 7+ token palettes where every section has its own colored accent (one for hero, one for about, one for menu, one for footer). The site loses coherence — it reads "Bootstrap demo site" rather than a brand.

---

## 3. Color harmony frameworks (which to pick)

The agency supports five color-relationships. Pick one per client; document the choice in `design.md §2` with the "Why this framework" reasoning.

| Framework | Definition | When to use | Typical verticals |
|---|---|---|---|
| **Monochromatic** | Single hue, varied lightness/saturation/tint. | When the brand needs to feel premium / minimal / editorial. Lower risk — hardest to make look wrong. | Specialty third-wave coffee, premium spa, B2B SaaS, law firms, architects |
| **Analogous** | 2-3 hues adjacent on the color wheel (cream + brown + ochre; sage + olive + mustard). | When the brand needs warmth / continuity / heritage. The default for traditional food + hospitality. | Heritage gastronomy, beauty boutique, bakery, pets warm-family |
| **Complementary** | 2 hues opposite on the wheel (red ↔ green, blue ↔ orange). High energy contrast. | When the brand needs energy / sports / call-to-attention. Risky for service businesses — easy to make jarring. | Sports/fitness, kids/learning, retail discount |
| **Split-complementary** | Base + 2 hues adjacent to its complement. Softer than full complementary. | When you want a primary brand voice + a secondary attention-accent without color-clash. | Trades (charcoal base + tan + safety-orange), restaurants (cream base + sage primary + terracotta secondary) |
| **Triadic** | 3 hues equidistant on the wheel. Playful / energetic. | Rare in service businesses. Risk of "circus" look. | Childcare, kids' events, playful retail |

**If unsure, default to monochromatic or analogous.** They forgive amateur execution; the other three demand discipline and a reason.

---

## 4. Color psychology by vertical (agency-mapped)

Cross-reference with each `docs/design/templates/[vertical].md §6 Color archetypes`. This table is the **why** behind each template's palette — when a client pushes back on a recommended palette, this is the talking point.

| Vertical | Recommended framework | Default palette | Psychology |
|---|---|---|---|
| Gastronomy — Heritage Italian / French / Spanish family | Analogous or split-complementary | Cream + warm-brown + 1 accent (pistachio OR terracotta) | Warm-brown signals "rooted / family / tradition." Pistachio signals "fresh / Italian gelato / Sicilian" — strongest for gelaterias specifically. Terracotta signals "trattoria / pasta house" — best for sit-down restaurants. |
| Gastronomy — Specialty third-wave coffee / minimal café | Monochromatic | Dark `#0F1115` + warm-tan `#A67C52` | Single-hue dark register signals "editorial / serious about the product / not a chain." |
| Gastronomy — Modern gelateria / boutique | Analogous (cream + pistachio + dusty-pink) | Cream + Bronte-pistachio + (optional coral sorbetti accent) | Pistachio = iconic gelato flavor + visual "fresh / cool / Italian." Coral pink as a sorbetti category badge feels "summer / fruit-led." |
| Beauty — Boutique salon | Analogous | Cream + dusty-rose + plum | Soft + feminine + spa. Avoid neon pink (reads cheap). |
| Beauty — Premium spa | Analogous or monochromatic | Cream + sage + brass | "Quiet luxury." Brass for small decorative use only. |
| Health — Clinical / medical | Complementary (cool) | White + medium navy + soft green | Navy = trust / professionalism. Green = healing / organic. Avoid bright primary blue (reads "hospital fluorescent"). |
| Trades — Werkstatt / Handwerker | Split-complementary | Charcoal + safety-orange + tan | Charcoal = serious work + permanence. Safety-orange = honest hi-vis identity. Tan softens for a residential audience. |
| Professional services — Lawyer / architect / consultant | Monochromatic | White + navy + 1 jewel accent | "Restraint = competence." Jewel accent (deep gold, burgundy) on links only. |
| Pets — Warm family vet / pet store | Analogous | Cream + warm-tan + soft accent (terracotta or sage) | Soft warm tones = "we love your animal." Avoid bright primary colors (reads "kids' party / cheap"). |
| Automotive — Detail / workshop | Monochromatic (cool) | Charcoal + chrome-silver + 1 colored accent | Cool tones + metallic = "engineering / precision." |
| Education — Tutoring / language school | Analogous (warm) | Cream + warm-blue + ochre | Warm tones = "approachable, not institutional." |
| Events-hospitality — Venue / wedding | Analogous | Champagne + plum + brass | Champagne = celebration. Plum = sophisticated. |
| Home-garden — Landscape / florist | Analogous | Cream + deep green + earth-brown | Green dominance = nature. |
| Artisan — Craft / studio | Monochromatic or analogous | Match the artisan's medium (clay → terracotta; metal → charcoal+brass; wood → tan+olive) | Palette emerges from the craft itself. |

---

## 5. Pre-launch palette audit (6-point checklist — gated)

Every production cutover must pass this audit before `noindex` flips:

1. **WCAG 2.2 AA contrast** — text-on-bg ≥ 4.5:1 (normal) or 3:1 (large). bg-on-accent (button text) ≥ 4.5:1. Verify per `ACCESSIBILITY.md §contrast` recipe. Document the measured ratios in `design.md §2`.
2. **Token count ≤ 5** — count distinct hues in the brand palette (exclude darken-on-hover siblings + surface helpers + semantic tokens).
3. **60-30-10 verified on fold-2 sections** — pick the MenuPreview / About / Visit section, screenshot, mentally allocate the pixels. If accent > 15% of section bg → over-accented. If no accent visible → under-accented.
4. **Darken-on-hover for primary accent** — `--color-accent-deep` is darker than `--color-accent` (never lighter). Lighter-on-hover is a WCAG anti-pattern (`DESIGN-BEST-PRACTICES.md §5`).
5. **Framework documented** — `design.md §2` names the harmony framework (monochromatic / analogous / complementary / split-complementary / triadic) and the *reason* it was picked for this client.
6. **Owner-confirmed** (production only) — owner has seen the live demo and approved the palette. For demos: DRAFT marker on `design.md §2` + cross-ref in `BRIEF.md §Open questions`.

A `pnpm validate` block does NOT check items 3-6 — those are visual/judgment. Document the audit result in `design.md §2.5 Palette audit` per client.

---

## 6. Anti-patterns (audit gate — archived UI review (`audit/archived/2026-05-12-porto-dos-ribeiros-uiux-review.md`) flags any of these)

| # | Anti-pattern | Why it fails |
|---|---|---|
| 1 | 4+ "primary" accents competing | No clear hierarchy. Reads "Bootstrap demo." |
| 2 | Accent color covers > 15% of viewport above the fold | Overpowers content. The accent should be a *voice*, not a *megaphone*. |
| 3 | 50/50 split between 2 colors | No 60-30-10 hierarchy. Reads as flag/sports-team, not brand. |
| 4 | Same hex for accent AND warning/error states | User can't distinguish "interactive" from "danger" — accessibility fail. |
| 5 | Lighter-on-hover for the primary accent | WCAG anti-pattern; per `DESIGN-BEST-PRACTICES.md §5`. |
| 6 | Pure `#000` + pure `#FFF` only | Reads generic / template-y. Even minimal sites use a soft off-white + soft off-black. |
| 7 | Bright safety/warning colors used as brand accent | "Buy now" red, "alert" yellow — reads "spam landing page." |
| 8 | Trend-driven palette (Gen-Z gradient, Y2K chrome) with no business reason | Six-month half-life. Will look dated. Only use if the *brand* is the trend. |
| 9 | Stock-photo color (Memphis pastels, Fiverr-gradient purple-pink) without owner sign-off | Reads "we used a free template." |
| 10 | Inverted hierarchy: muted accent + bright "neutral" | Confuses scanning. Accent should attract, neutral should recede. |
| 11 | **Cream / bone / off-white background defaulted without per-vertical justification** | Reads "agency template." Cream is valid for SOME verticals (gastronomy heritage / fine-dining / boutique salon editorial) but is NOT a universal-safe default. Lawyer, gym, dental, real estate, automotive, tech, dark-register barber etc. should NOT default to cream. If the per-vertical template does not call out cream/bone, pick a different base. |
| 12 | **Brown/tan token chain used as primary brand color** without an artisan/heritage/wood-craft justification | Brown is a vertical-specific signal (artisan, leather, wood-trades, coffee). Outside those, it reads "sepia-filter generic." Don't pick `#7B5468`, `#B89968`, `#8E5526` etc. as a default — pick them when the *vertical* asks for them. |
| 13 | **`bg-accent text-bg hover:bg-accent-deep` (darken-on-hover) for any filled CTA where `--color-accent` is a medium-tone** | Hover state often drops contrast below 4.5:1 ("dark-on-dark muddy" — even when default state passes). Use Pattern A/B/C/D in `DESIGN-BEST-PRACTICES.md §7 CTA contrast — all 4 states`. Affected the lawyer / yoga / barber demos pre-2026-05-25 audit. |
| 14 | **Light-text on accent-tinted button below 4.5:1 in DEFAULT state** | E.g. lilac text (`#ede7f0`) on terracotta (`#d87c5a`) = 3.0:1. WCAG AA fails for normal body text. Always pair filled-accent buttons with the highest-contrast counterpart token (text + bg pair tested manually before commit). |
| 15 | **Tailwind v4 + unlayered `body { color }` cascade trap** | If `body { color: var(--color-text) }` is unlayered in `global.css`, EVERY `.text-X` utility is silently overridden by the body's inherited color. CTAs that read like "white text on dark bg" via class names actually render "dark on dark" because the utility lost the cascade. Fix: wrap body + base typography in `@layer base { ... }` (see `DESIGN-BEST-PRACTICES.md §7 CTA contrast — Tailwind v4 @layer base requirement`). Both scaffolds ship the fix as of 2026-05-25. |

---

## 6.5. Portfolio diversity gate (agency-mandatory before any scaffold)

**Rule:** Before committing the `tokens.css` palette for a new client or demo, the responsible Claude session MUST audit the agency's current portfolio (`clients/*/src/styles/tokens.css` + the agency landing page if present) and confirm:

1. **No two adjacent or homepage-grid-adjacent demos share the same dominant background hue.** Specifically: if any *existing* `--color-bg` falls within ΔE76 ≤ 10 of the proposed new `--color-bg`, the proposed palette MUST be reworked. Pure-white (`#FFFFFF` / `#FBFBF9` / similar paper-whites) counts as ONE hue family — only one site in the portfolio may use it.
2. **No two demos share the same dominant *accent* hue.** The accent is what the eye picks up first in the viewport. If two demos both lean "warm gold + cream" or "cool blue + grey," they read as the same studio.
3. **At least one demo in any 6-demo portfolio MUST have a dark-dominant background (`--color-bg` lightness ≤ 25%).** If all 6 are light-bg, the homepage grid reads monotone regardless of accent variation.
4. **At least one demo MUST have a saturated-pop hue (vivid pink / cyan / saffron / etc.) as its accent.** If all accents are muted-earth tokens, the grid loses energy.
5. **A demo's palette is documented in `design.md §2` with the explicit "differentiates from {list of existing demo bg/accent hex codes}" justification line.**

How to run the audit (one-shot Bash):

```bash
# From repo root — list current portfolio palettes for comparison.
for d in clients/demo-*/src/styles/tokens.css; do
  client=$(basename $(dirname $(dirname $(dirname $d))))
  bg=$(grep -E '^\s*--color-bg:' $d | head -1 | awk '{print $2}' | tr -d ';')
  accent=$(grep -E '^\s*--color-accent:' $d | head -1 | awk '{print $2}' | tr -d ';')
  echo "$client → bg=$bg · accent=$accent"
done
```

Pin the result of this audit into the per-client `design.md §2.5 Palette audit` block alongside the existing 6-point pre-launch palette audit.

**Why this rule exists:** the 2026-05-23 portfolio review surfaced that 5 of 6 demos had defaulted to warm-cream / bone / ivory backgrounds. The cream-defaulting was treated as a "safe choice" but was actually a *single* choice repeated 5 times — the agency portfolio looked monochromatic on a homepage grid. Cream is valid for *some* verticals but is not a universal default.

---

## 7. Per-vertical recommended frameworks (quick-pick table)

When a per-vertical template is missing a framework recommendation, fall back to this table:

| Vertical | First-choice framework | Fallback |
|---|---|---|
| Gastronomy heritage | Analogous | Split-complementary (if a vivid sorbetti / vegan badge color is required) |
| Gastronomy specialty 3rd-wave | Monochromatic | Analogous (dark + 2 tans) |
| Gastronomy modern gelateria | Analogous | Split-complementary |
| Beauty boutique | Analogous | Monochromatic |
| Beauty premium spa | Monochromatic | Analogous |
| Health clinical | Complementary (cool) | Monochromatic |
| Trades industrial | Split-complementary | Monochromatic (charcoal-only) |
| Professional services | Monochromatic | Analogous |
| Pets warm-family | Analogous | Monochromatic |
| Automotive | Monochromatic | Complementary |
| Education | Analogous (warm) | Monochromatic |
| Events-hospitality | Analogous | Monochromatic |
| Home-garden | Analogous (green-dominant) | Monochromatic |
| Artisan | Monochromatic (matches medium) | Analogous |

---

## 8. Worked examples — 3 gastronomy demos, 3 distinct frameworks

The agency's 3 gastronomy demos each commit to a different harmony framework. Compare and contrast — useful when picking a framework for a new client whose vertical isn't already represented.

### 8.1 Eiscafé Bellini — vivid raspberry pink (final palette, post-multi-iteration)

After three iterations (terracotta-trattoria-warm → pistachio-led modern-gelateria → dark editorial → vivid raspberry pink), Bellini landed on the current vivid-pink palette.

| Token | Hex | Role | 60-30-10 bucket |
|---|---|---|---|
| `--color-bg` | `#FFF8F1` | Warm gelato-milk cream — page bg | Dominant 60% |
| `--color-text` | `#2A1525` | Deep wine-eggplant body text (NOT brown — commits to the pink direction) | Secondary 30% |
| `--color-text-muted` | `#7B5468` | Warm purple-gray | Secondary 30% |
| `--color-surface-elev` | `#FCEEEC` | Blushy alt-row bg | Secondary 30% |
| `--color-accent` | `#E0457D` | Vivid raspberry — CTAs, stat numbers, hover, brand wordmark | **Accent 10%** |
| `--color-accent-deep` | `#B5305E` | Darker raspberry — hover state (darken-on-hover) | (derived) |
| `--color-accent-secondary` | `#5C7A4A` | Sicilian pistachio — ingredient-signal moments only (vegan badge, "Bronte D.O.P." marker) | **Accent <2%** (secondary) |
| `--color-accent-secondary-deep` | `#46603A` | Pistachio hover | (derived) |
| `--color-border` | `#F0D8DD` | Pale pink card + table borders | Surface helper |

**Audit:**

1. ✅ WCAG: text-on-bg ≈ 13:1, text-muted-on-bg ≈ 5:1, cream-on-raspberry 5.2:1, cream-on-pistachio 5.0:1 — all AA-normal.
2. ✅ 5 brand tokens.
3. ✅ 60-30-10 confirmed (`docs/clients/demo-eiscafe-bellini/design.md` §2.5).
4. ✅ `accent-deep` darker than `accent`.
5. ✅ Framework: **split-complementary** — cream bg (warm) + raspberry primary (pink-red family) + pistachio tiny accent (green, complement of pink-red).
6. 🟡 Owner-confirmed: N/A (portfolio demo).

**Why this works for an Italian gelateria specifically:** raspberry pink + pistachio is the canonical sorbet+gelato duo (Vanille & Marille, Eiscafé Caruso). Cream signals milk-base gelato. Wine-eggplant text avoids the trattoria-trap that warm-brown text would create. Reads "modern boutique gelateria" — not "heritage trattoria with gelato on the side."

### 8.2 Saltlines — coastal split-complementary

Surf-coffee shop in Friedrichshain. Two Nordic founders, ocean-escape register.

| Token | Hex | Role | 60-30-10 bucket |
|---|---|---|---|
| `--color-bg` | `#F7FAFB` | Cool near-white — page bg (NOT sand, deliberately committed to coastal-ocean register after V4 audit dropped warm-sand "brown filler") | Dominant 60% |
| `--color-text` | `#0E2A35` | Deep ocean ink | Secondary 30% |
| `--color-text-muted` | `#5A7785` | Weathered slate (no brown family) | Secondary 30% |
| `--color-surface-elev` | `#EAF3F5` | Foam-cool alt-row bg | Secondary 30% |
| `--color-accent` | `#1F9AB0` | Saturated Mediterranean cyan-teal — CTAs, scroll-spy active, wave-report ticker bg | **Accent 10%** |
| `--color-accent-deep` | `#157A8F` | Darker teal — hover | (derived) |
| `--color-accent-secondary` | `#E25C3E` | Sunset coral — newsletter CTA + small ribbons | **Accent <2%** (secondary) |
| `--color-accent-secondary-deep` | `#B9421F` | Darker coral — hover | (derived) |
| `--color-border` | `#D5E4EA` | Foggy blue card borders | Surface helper |

**Audit:**

1. ✅ WCAG: text-on-bg ≈ 15:1, text-muted-on-bg ≈ 5.4:1, cream-on-teal 6.4:1, cream-on-coral 4.9:1.
2. ✅ 5 brand tokens.
3. ✅ 60-30-10 confirmed (`docs/clients/demo-coffee-saltlines/design.md` §2.5).
4. ✅ `accent-deep` darker than `accent`.
5. ✅ Framework: **split-complementary** — cool near-white bg + teal primary (cool, complement of orange) + coral secondary (warm, adjacent to teal's red complement).
6. 🟡 Owner-confirmed: N/A (portfolio demo).

**Why this works for surf-coffee specifically:** the brand's whole point is "ocean escape from Berlin gray" — cool ocean register is mandatory; warm-sand bg would have contradicted the positioning. Coral secondary telegraphs "sunset wave report" without warming the rest of the palette (and stays under 2% of viewport — appears only on the newsletter CTA). NO browns anywhere — fully committed.

### 8.3 Adèle — analogous-warm luxury

Berlin Mitte fine-dining restaurant. Vintage grand-hotel register.

| Token | Hex | Role | 60-30-10 bucket |
|---|---|---|---|
| `--color-bg` | `#FBF7EE` | Ivory bone — page bg (vintage-hotel linen, not modern stark white) | Dominant 60% |
| `--color-text` | `#1A1219` | Near-black with subtle warmth | Secondary 30% |
| `--color-text-muted` | `#5E5360` | Cool warm-gray (deliberately NOT brown — V4 feedback flagged warm-brown text-muted as "brown filler") | Secondary 30% |
| `--color-surface-elev` | `#F3ECDA` | Section alt-bg | Secondary 30% |
| `--color-accent` | `#7A2740` | Brighter burgundy — primary CTA, stat numbers, scroll-spy active. Was previously `#5A1A2E` oxblood; lightened after V5 audit (too dark for body button text). | **Accent 10%** |
| `--color-accent-deep` | `#5A1A2E` | Old oxblood, now hover state (darken on light register) | (derived) |
| `--color-accent-secondary` | `#967B52` | Soft brass — eyebrows, section rule lines, decorative | **Accent <2%** (secondary) |
| `--color-accent-secondary-deep` | `#7A6240` | Darker brass — hover | (derived) |
| `--color-border` | `#EAE3D3` | Ivory-darker card + table borders | Surface helper |

**Audit:**

1. ✅ WCAG: text-on-bg ≈ 14.5:1, text-muted-on-bg ≈ 6.8:1, ivory-on-burgundy 8.4:1 (AAA), brass-on-ivory 3.2:1 (AA-large only — used for headers/decorative, never body text).
2. ✅ 5 brand tokens.
3. ✅ 60-30-10 confirmed (`docs/clients/demo-restaurant-adele/design.md` §2.5).
4. ✅ `accent-deep` darker than `accent`.
5. ✅ Framework: **analogous-warm** — all hues in the warm magenta-to-gold band (ivory → oxblood/burgundy → brass).
6. 🟡 Owner-confirmed: N/A (portfolio demo).

**Why this works for fine-dining specifically:** warm burgundy primary signals "wine list / Bordeaux / grand-hotel" without going neon. Brass secondary used sparingly preserves the "vintage Pariser Platz hotel" register vs. trendy gold. Cool warm-gray text-muted is deliberate — the brown-cream slide creates a "trattoria" feel that contradicts fine-dining luxury.

### 8.4 Cross-comparison — which framework matches your client

| Demo | Framework | Hue family | When to copy this approach for a new client |
|---|---|---|---|
| Bellini | Split-complementary | Pink + green | Modern boutique register where the secondary needs to signal a specific "ingredient quality" cue (Bronte-pistachio for Bellini; could be a single dusty-rose for a florist, a single sage for a tea house) |
| Saltlines | Split-complementary | Cool + warm | Brand positions itself as "escape from the dominant city register" — coast / mountain / desert / spa retreat — and the warm secondary is a *moment* (sunset, golden hour, ember) |
| Adèle | Analogous-warm | All warm magenta-to-gold | Fine-dining luxury, vintage grand-hotel, French bistro, magazine register; or any brand where the warmth IS the trust signal |

---

## 9. When to revisit your palette

- **Every client every 12 months** during retainer review — fashion drifts, but a palette this disciplined drifts more slowly than logos and copy.
- **After a real photo set arrives** — if the client's professional photography contradicts the palette (e.g., we built around cream + sage, the photos came back warm-amber-dominant), re-source the palette per `DESIGN-BEST-PRACTICES.md §5` "Re-sourcing the palette mid-build."
- **After owner brand-guide upload** — a real PDF brand guide overrides any agency-default palette.
- **Never re-palette on a whim** — palette changes are jarring for repeat customers and SEO image-search signals. Document the *reason* in `design.md` change-log section.

---

*Cross-references:*
- `DESIGN-BEST-PRACTICES.md §5 Color palette sourcing` — *where* colors come from
- `ACCESSIBILITY.md §contrast` — WCAG 2.2 AA contrast rules
- `docs/design/templates/[vertical].md §6 Color archetypes` — per-vertical recipes
- Per-client `design.md §2 Color tokens` + `§2.5 Palette audit`
