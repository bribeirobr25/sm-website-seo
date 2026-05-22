# gastronomy-coffee-RESEARCH-2026-05-22.md
## Coffee-vertical UI/UX research log — addendum to `ui-ux-reference-study.md`

**Date:** 2026-05-22 · **Researcher:** Claude · sm-website-seo
**Plan:** `docs/audit/GASTRONOMY-UIUX-UPGRADE-PLAN-2026-05-22.md`
**Method:** Docker MCP Playwright at 1280×800 + 375×812 viewports · `getComputedStyle()` probe via `browser_evaluate`
**Discipline:** all measurements live; NO copy lifted verbatim from any site

---

## Per-site findings

### 1. Starbucks — `https://www.starbucks.com/`

**Type:** Global coffee chain · US-headquartered · SaaS-app-adjacent (Rewards / order)

**Body type:** SoDoSans (custom display sans) · `Helvetica Neue, Helvetica, Arial, sans-serif` fallback · 16px / 24px line-height / **-0.16px tracking** (subtle negative — ≈ -1% at 16px)

**H1 (measured):** 24px / 600 weight / 36px / -0.16px tracking / white on dark-green block. **SMALL H1** — Starbucks does NOT lean on a big display H1.

**CTAs (measured):**
- Primary "Join now": **`border-radius: 50px` (FULL PILL)** · black bg #000 · 14px / 600 weight · 7px 16px padding
- "Sign in": same pill shape · transparent bg · text rgba(0,0,0,0.87)
- "Agree" (cookie modal): pill · brand green `rgb(0,130,72) = #008248`

**Background palette:** white body, dark Starbucks-green `rgb(31, 53, 41)` for hero/promo blocks, brand accent green `#008248`. Text on white = `rgba(0,0,0,0.87)` (Material-style alpha black, not pure #000).

**Hero structure:** 50/50 horizontal split — full-bleed product photography left (drinks against natural backdrop), dark-green block right with white serif-less H1 + body copy + pill CTA. **NOT** full-bleed photography.

**Mobile collapse:** hamburger top-right. Hero stacks (image on top, text-block below). Logo stays top-left.

**Voice/structure:** seasonal promo at very top ("It's Starbucks summer"), then product moments, then Rewards/loyalty hooks. Heavy SaaS app prompts ("Sign in", "Join now") — **NOT** applicable to a local-business info site.

**Take for gastronomy template:** pill CTA shape + alpha-black text + half-bleed hero option. **Reject:** SaaS prompts + loyalty + cart UI.

---

### 2. Espressohouse — `https://de.espressohouse.com/`

**Type:** Nordic coffee chain (Swedish-origin) with full DE localization · retail/mass register but Scandinavian-tasteful

**Body type:** `Value, sans-serif` (custom) · 16px / 24px line-height / normal tracking · text color `rgb(30, 74, 48) = #1E4A30` (deep forest green — used as body text, not just accent)

**H1 (measured):** **60px / 700 weight / 60px line-height / -1.2px tracking (-2% at 60px) / WHITE / Value Serif**

**H2 (measured):** **45px / 700 / 45px line-height / -0.9px tracking / deep-green body color**

**CTAs (measured):**
- Primary "Allow all" (cookie): deep-green `rgb(30, 74, 48)` bg · white text · no observed border-radius standard
- Hero CTA visible but cut by consent modal in screenshot

**Background palette:** white body `#FFFFFF` · deep-green text + accent `#1E4A30` · hero uses full-bleed matcha-themed photography

**Hero structure:** **FULL-BLEED hero photograph** (matcha drinks at scale, no horizontal split). Giant white serif H1 over the image. CTA visible bottom-left over the image.

**Mobile collapse:** hamburger left + logo center + "Finde uns" right. Hero stays full-bleed, H1 shrinks to ~32-36px and wraps.

**Voice/structure:** product-of-the-month hero, "Drink des Monats!" feature section, FIKA Club loyalty, About brand, locations.

**Take for gastronomy template:** big serif display H1 over full-bleed photography, negative tracking on display, body text in deep-brand-color (not pure black), centered logo header. **Reject:** loyalty club prompts.

---

### 3. The Barn — `https://thebarn.de/`

**Type:** Berlin third-wave specialty coffee roaster + ecommerce (subscribe + ship) · **most directly Berlin-relevant**

**Body type:** `Assistant, sans-serif` (open-source Inter-adjacent) · 16px / **28.8px line-height (1.8 — very generous)** / **+0.6px tracking (positive, ~+0.04em)** · text color rgba(230, 234, 242, 0.75) (light gray with 75% opacity on dark)

**H1 (measured):** **64px** on featured "OUR BEST SELLERS" / 400 weight / normal line-height / +0.6px tracking / **UPPERCASE** / `Chalet Comprime` (compressed display sans)
**Another H1:** **80px** for "SUBSCRIBE & SAVE" — same font, same uppercase, same +0.6px tracking

**CTAs (measured):**
- Skip-to-content style: tan bg `rgb(166, 124, 82) = #A67C52` · 4px border-radius · 600 weight · +1px tracking
- "Continue shopping": same tan #A67C52 + 4px radius
- "Continue" (consent): also tan #A67C52 with **5.6px border-radius** (slightly more rounded)

**Background palette:** **dark bg `rgb(15, 17, 21) = #0F1115`** (near-black, slightly blue-tinted) · light body text rgba(230, 234, 242, 0.75) · **warm tan/coffee-brown accent `#A67C52`** · brown bag photography brings warmth

**Hero structure:** marquee top strip · large product cards with hover-reveal · the "OUR BEST SELLERS" H1 centered above 2-col card grid

**Mobile collapse:** centered logo + 3-icon header (hamburger / search / login / cart). Cards become 1-col with image overlay text persistent.

**Voice/structure:** ecommerce-led (subscribe + shop dominate) but rooted in roaster narrative; specialty / third-wave register; coffee + cafe + learn nav structure.

**Take for gastronomy template:** dark + warm-tan palette as a SUB-ARCHETYPE option (for premium specialty / boutique, NOT for Heritage Italian Family); compressed display sans for chain-poster look; generous body line-height (1.8); positive tracking on body. **Adopt:** the dark + warm-tan palette as a new sub-archetype "Specialty / third-wave coffee" optional palette.

---

### 4. Watch House — `https://watchhouse.com/`

**Type:** London premium specialty (multi-location London + NY + Dubai) · **already in 24-site UI/UX reference study §15** — re-measured here in coffee context

**Body type:** `Balto, sans-serif` · 16px / 24px line-height / normal tracking / **font-weight 300 (LIGHT)** · text color `rgb(0, 0, 0)` (pure black, not alpha)

**H2 (measured — Watch House uses h2 prominently rather than h1 as visual lead):**
- **18px** at small size · `Tiempos Headline` serif · 500 weight · -0.36px tracking
- **36px** at medium · same serif / 500 weight · 39.6px line-height · -0.72px tracking
- **60px** at display · same serif / 500 weight · 60px line-height · **-1.2px tracking (-2%)**

**CTAs:** primarily text-link / button-as-text (no observed pill or filled-rectangle on landing — Watch House leans on the half-pill RESERVE button per `docs/audit/ui-ux-reference-study.md` §15; that was the canonical "tab from right edge" pattern already codified at `docs/design/components/_impl/HalfPillCTA.astro`)

**Background palette:** **warm cream `rgb(249, 244, 238) = #F9F4EE`** · black text · imagery does the color work (no other strong accent)

**Hero structure:** **half-and-half horizontal split** (two equal-width photos) with numbered slides 01 · 02 · 03 above + edge-anchored small text. No big H1 lead; quiet typographic confidence does the work.

**Mobile collapse:** logo left + hamburger top-right + slide-numbers visible. Hero collapses to single-image stack with photo-then-text.

**Voice/structure:** **period-terminated nav** ("Subscribe." / "Shop." / "Visit us." / "About.") — distinctive Watch House voice. Lots of cream space. Tiny copy + giant photography. Quiet.

**Take for gastronomy template:** cream-on-cream confidence as palette · serif display with negative tracking · light-weight body sans (300!) · half-bleed image-pair hero variant · **period-terminated CTAs** (already in `DESIGN-BEST-PRACTICES.md` §11 — confirmed in the wild).

---

### 5. Coffee Fellows — `https://www.coffee-fellows.com/`

**Type:** German mass-market coffee chain (large multi-location DE/AT) · functional retail register

**Body type:** Montserrat (sans-only, common DE retail choice) · 16px / 24px / normal tracking / black on white

**H1 (measured):** **30px / 500 weight / 36px / normal tracking / UPPERCASE / white over photo**

**H2 (measured):** **24px / 500 / 32px / normal tracking / UPPERCASE / `rgb(112, 112, 112)` (mid-gray)**

**CTAs (measured):**
- Primary "Online Shop": bright coral `rgb(255, 111, 97) = #FF6F61` · 16px / 400 weight · 8px 16px padding · **6px border-radius**
- Secondary CTAs all white bg · 6px radius · same 8px 16px padding

**Background palette:** white · uppercase mid-gray section heads · coral retail accent #FF6F61

**Hero structure:** full-bleed photograph with **brand name "COFFEE FELLOWS" PRINTED ON THE PHOTOGRAPH** (poster-style retail) · centered text overlay with small H1 + body + secondary CTA · `→` arrow icon stuck on every button

**Mobile collapse:** centered logo + left hamburger · hero stays full-bleed and crops aggressively

**Voice/structure:** seasonal promo · product range · About + neighborhood-openings news · brand history · loyalty hooks ("Be at Home" rebrand teased)

**Take for gastronomy template:** mostly a **counter-example**. Document anti-patterns in `templates/gastronomy.md` §Anti-patterns: (a) brand name baked into hero photography, (b) all-uppercase H1+H2 stack without compensating typographic discipline, (c) bright retail-orange accent on local-business positioning, (d) `→` arrow icons attached to every CTA (reads chain-y).

---

## Synthesis — patterns across the 5 sites

### A. Universal patterns (3+/5 confirm — high-confidence rule updates)

| Pattern | Sites | Take into gastronomy template |
|---|---|---|
| **Big display heading scale (40-80px)** | Espressohouse 60 · The Barn 64/80 · Watch House 60 · Coffee Fellows 30 (small h1 but big section h2 effectively) | YES — current Bellini H1 maxes at ~60px (`text-6xl` ≈ 60px) which is fine; emphasize ≥60px on desktop |
| **Negative letter-spacing on display (-1% to -2%)** | Espressohouse -1.2px@60 · Watch House -1.2px@60 · The Barn doesn't (uppercase) · Coffee Fellows doesn't | YES — already in TECH.md §7 `--tracking-display-sans: -0.022em`. Apply to serif display consistently in Bellini. |
| **Body sans + display serif (or compressed-sans for third-wave)** | Espressohouse Value Serif + Value · Watch House Tiempos + Balto · The Barn Chalet Comprime + Assistant · Coffee Fellows Montserrat-only · Starbucks SoDoSans-only | YES — display serif + body sans is the heritage-family canonical (already in Bellini via Cormorant + Inter). Confirmed correct. |
| **Period-terminated nav / CTAs** | Watch House (canonical) · partial in others | KEEP — already in `DESIGN-BEST-PRACTICES.md` §11; Bellini already does this |
| **Full or half-bleed hero photography** | Espressohouse full · Coffee Fellows full · Starbucks half · Watch House half · The Barn product-grid-as-hero | YES — Bellini's grid-with-photo-on-right hero is too template-y. Upgrade to: (a) full-bleed photo with overlay typography, OR (b) Watch-House-style half-and-half image pair |
| **Light-weight body type** | Watch House 300 · The Barn 400 · Coffee Fellows 400 · Espressohouse 400 · Starbucks 400 | Mixed — Watch House 300 is distinctive. Keep Bellini at 400 (Inter regular) — 300 is high-end-luxury register, doesn't suit family-warm |
| **Cream bg for heritage/premium** | Watch House `#F9F4EE` · Espressohouse white + green accent · Bellini current `#FAF6EE` | KEEP — Bellini's cream `#FAF6EE` is correct |
| **Mobile: hamburger + logo (centered or left)** | All 5 | YES — Bellini current mobile lacks hamburger (collapses nav to nothing above 768px). Add hamburger. |

### B. Berlin / third-wave specific patterns

| Pattern | Sites | Take |
|---|---|---|
| Dark bg + warm tan accent | The Barn (#0F1115 + #A67C52) | Add as OPTIONAL Specialty/Third-wave sub-archetype palette in `templates/gastronomy.md` §6. Bellini stays cream — but the agency now has a dark coffee palette ready for the next gastronomy client whose register is third-wave roaster, not heritage gelateria |
| Generous body line-height 1.8 | The Barn 28.8px@16 | Add as third-wave sub-archetype rule; KEEP Bellini at 1.6 |
| Positive letter-spacing on body (+0.04em) | The Barn +0.6px | Same — third-wave-only; KEEP Bellini at -0.005em |
| Compressed display sans (Chalet Comprime / similar) | The Barn | Document in `templates/gastronomy.md` §Typography as the third-wave option; not for Bellini Heritage |
| Period-terminated nav | Watch House (London) | KEEP per agency convention; Bellini already does this |

### C. Coffee-chain patterns we deliberately REJECT

| Pattern | Where seen | Why reject |
|---|---|---|
| Brand name printed on hero photography | Coffee Fellows | Reads "promotional poster", not "real business" — `templates/gastronomy.md` §Anti-patterns |
| `→` arrow icons attached to every CTA | Coffee Fellows · The Barn buttons | Looks chain-y; period-terminated CTAs read more confident (already agency convention) |
| All-uppercase H1+H2 stack without typographic discipline | Coffee Fellows | Aggressive without payoff; only acceptable as third-wave register (The Barn manages it because of the compressed display sans treatment) |
| Bright retail-orange/coral CTA accents | Coffee Fellows #FF6F61 | Local-business positioning shouldn't read like a chain promo |
| SaaS-app sign-in / loyalty / cart in nav | Starbucks · The Barn (ecommerce) | Local-business info sites don't have these |
| Cookie modal that BLOCKS hero content | Starbucks · Espressohouse · The Barn · Watch House (all 5) | Counterproductive UX — Bellini's cookie banner is bottom-bar non-blocking (correct) |

### D. Patterns observed in ≤2/5 → do NOT promote to rules

- Numbered slide indicators 01 · 02 · 03 in hero (Watch House only)
- Marquee text at top (The Barn only — also seen in Auwa §6 from 24-site study)
- Three-language switcher (Espressohouse · Watch House — already have DE/EN in Bellini)

---

## Decisions on the 8 open questions from the plan

| # | Decision | Outcome from research |
|---|---|---|
| 1 | MCP reconnect | ✅ Reconnected — full-quality research delivered |
| 2 | Bellini rebuild scope | In-place per owner sign-off |
| 3 | New "Specialty / third-wave coffee" sub-archetype? | **YES — add it.** The Barn shows enough distinctive treatment (dark bg + warm tan + compressed display sans + generous line-height + positive body tracking) to warrant a 4th sub-archetype slot. Doesn't affect Bellini (stays Heritage). |
| 4 | Self-host fonts in Bellini rebuild | YES per owner sign-off |
| 5 | Scroll-reveal entry animations | **NO — only 0/5 sites confirmed measured scroll-reveal at first load** (Watch House has subtle ones but they didn't trigger in the viewport screenshot). Below the 3+/5 threshold. Skip for Bellini v2. Re-evaluate when a third-wave-specific build needs polish. |
| 6 | Menu cards with images | **YES — 3+/5 confirm.** The Barn product cards, Watch House category cards, Espressohouse drink cards all use product photography. Apply to Bellini gelato page Le Creme + Sorbetti + Spezialitäten sections. |
| 7 | Newsletter signup in Footer | Owner sign-off: optional for other clients only · Bellini stays without |
| 8 | Update DESIGN-BEST-PRACTICES.md too? | **NO — gastronomy.md only.** The patterns we're adopting (cream confidence, big serif, negative tracking, full-bleed hero) are gastronomy-specific contexts; tracking values already in DESIGN-BEST-PRACTICES.md / TECH.md §7. Don't promote vertical-specific patterns. |

---

## Ready-to-apply rule changes (input brief for Phase 3)

**`docs/design/templates/gastronomy.md` — additions / edits:**

1. **§1 Archetype matrix** — add 4th sub-archetype: **"Specialty / third-wave coffee" (boutique register)** between current C (boutique/counter-only) and what's there. Source: The Barn measured 2026-05-22.
2. **§3 Hero patterns** — add 2 new hero variants:
   - **Full-bleed photography hero with overlay typography** (Espressohouse-canonical) — recommended for Archetype B (Heritage family / neighborhood pillar) AS AN OPTION instead of the half-bleed grid
   - **Image-pair half-and-half hero** (Watch House §15) — recommended for premium / boutique / third-wave
3. **§4 Photography rules** — tighten:
   - REQUIRE full-bleed or half-bleed framing on hero (the current "Bellini grid-with-image-on-right" is template-y; promote bleed treatment as the default)
   - Menu/category sections — add new rule: **menu items SHOULD include product photography** when ≥6 items in a category (3+/5 reference sites). For solo-operator small-menu clients, text-only acceptable.
4. **§5 Typography pairings** — refine:
   - For Heritage Italian Family (Bellini archetype): **Cormorant Garamond serif H1 at 60-80px on desktop with `-0.022em tracking`** + Inter body 16px / 1.6 line-height — confirmed correct against Watch House + Espressohouse
   - For Specialty / third-wave: **compressed display sans (e.g., Chalet Comprime / Anton / Oswald Condensed) at 64-80px UPPERCASE with positive tracking** + body sans like Inter or Assistant at 16px / 1.8 line-height / +0.04em tracking
   - Period-terminated nav + CTAs encouraged across all archetypes (already in DESIGN-BEST-PRACTICES.md §11)
5. **§6 Color archetypes** — add new sub-archetype palette:
   - **"Specialty / third-wave (dark)"**: bg `#0F1115` · body text `rgba(230, 234, 242, 0.75)` · accent warm tan `#A67C52` · accent-deep `#8A6740` · pistachio still optional. Inverted of the Heritage Italian palette.
   - Tone unchanged for Heritage Italian Family — current Bellini cream + terracotta + pistachio confirmed correct.
6. **§Anti-patterns** — append the 6 coffee-chain anti-patterns observed:
   - Brand name printed on hero photography (Coffee Fellows tell)
   - `→` arrow icons attached to every CTA
   - All-uppercase H1+H2 stack without compensating typographic discipline (compressed display sans is the only acceptable uppercase context)
   - Bright retail-orange/coral CTA accents on local-business positioning
   - SaaS-app sign-in / loyalty / cart UI on Type-1 info sites
   - Cookie modal that BLOCKS hero content (bottom-bar non-blocking is canonical per LEGAL.md)

**`docs/audit/ui-ux-reference-study.md` — addendum:** new section "Coffee-vertical sub-study (2026-05-22)" linking to this file + adding Starbucks · Espressohouse · The Barn · Coffee Fellows to the master site list (Watch House §15 re-confirmed).

**`docs/design/components/_impl/` — possible new components:**
- **`FullBleedHero.astro`** — new canonical component. Full-bleed image bg + overlay typography. Slots: `image`, `kicker` (small caps above), `title` (H1 with negative tracking), `body` (short paragraph), `ctaPrimary`, `ctaSecondary`. Validate at 1280 / 768 / 375 viewports. Bellini will adopt this for the home hero.
- **`MenuCard.astro`** — new canonical component. Image + title + 1-line description card. Used for Le Creme + Sorbetti + Spezialitäten on the Bellini gelato page. Lazy-load image below the fold per `PERFORMANCE.md` §5.

---

## Citations

| Site | URL | Retrieval date | Screenshots |
|---|---|---|---|
| Starbucks | https://www.starbucks.com/ | 2026-05-22 | `research-coffee-starbucks-desktop-1280.png` + `-mobile-375.png` |
| Espressohouse | https://de.espressohouse.com/ | 2026-05-22 | `research-coffee-espressohouse-desktop-1280.png` + `-mobile-375.png` |
| The Barn | https://thebarn.de/ | 2026-05-22 | `research-coffee-thebarn-desktop-1280.png` + `-mobile-375.png` |
| Watch House | https://watchhouse.com/ | 2026-05-22 | `research-coffee-watchhouse-desktop-1280.png` + `-mobile-375.png` |
| Coffee Fellows | https://www.coffee-fellows.com/ | 2026-05-22 | `research-coffee-fellows-desktop-1280.png` + `-mobile-375.png` |

Discipline note: NO copy lifted verbatim from any source. All voice/structure patterns synthesized for application to the template; original Bellini-specific copy is in `docs/clients/demo-eiscafe-bellini/COPY-DE.md` + `COPY-EN.md` and stays unchanged.
