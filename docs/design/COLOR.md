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

## 6. Anti-patterns (audit gate — `UI_REVIEW.md` flags any of these)

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

## 8. Bellini worked example (post-2026-05-22 repalette)

Eiscafé Bellini final palette + audit:

| Token | Hex | Role | 60-30-10 bucket |
|---|---|---|---|
| `--color-bg` | `#FAF6EE` | Cream — page bg | Dominant 60% |
| `--color-text` | `#2B1A12` | Warm-brown body text | Secondary 30% |
| `--color-text-muted` | `#7A6753` | Caption text | Secondary 30% |
| `--color-surface-elev` | `#F0E8D4` | Header/footer/alt-row bg | Secondary 30% |
| `--color-accent` | `#4F704A` | Bronte-pistachio — CTAs, stat numbers, hover | **Accent 10%** |
| `--color-accent-deep` | `#3A5435` | Pistachio hover (darken-on-hover) | (derived) |
| `--color-accent-secondary` | `#C1643B` | Terracotta — DEMO ribbon + footer rule + badges | **Accent <2%** (secondary) |
| `--color-accent-secondary-deep` | `#A24D27` | Terracotta hover | (derived) |
| `--color-border` | `#E5DCC8` | Card + table borders | Surface helper |

**Audit:**

1. ✅ WCAG: text-on-bg 11.5:1, text-muted-on-bg 4.9:1, cream-on-pistachio 4.93:1, cream-on-terracotta 4.7:1 — all AA-normal.
2. ✅ 5 brand tokens (bg + text + text-muted + accent + accent-secondary).
3. ✅ 60-30-10 confirmed via fold-2 screenshot (`docs/clients/demo-eiscafe-bellini/VISUAL-VALIDATION.md`).
4. ✅ `accent-deep` is darker than `accent` (`#3A5435` vs `#4F704A`).
5. ✅ Framework documented: **split-complementary** (pistachio primary + terracotta secondary — adjacent to red-orange complement of green).
6. 🟡 Owner-confirmed: N/A (portfolio demo).

**Why this works for a gelateria specifically:** pistachio is the iconic Italian gelato flavor (Bronte-pistachio from Mount Etna). Cream signals milk-base gelato. Terracotta as the DEMO ribbon + small accents preserves the Italian-warmth heritage register without dominating. The result reads "modern Italian gelateria" rather than "Italian trattoria with gelato on the side."

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
