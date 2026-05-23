> **STATUS: PORTFOLIO DEMO** — Fictional business (Berlin Mitte fine-dining restaurant). Never index. Reference for future gastronomy luxury / fine-dining / professional-services builds.

# design.md — Adèle (demo)

Per-client design decisions for `clients/demo-restaurant-adele/`. Anchors back to `docs/design/templates/gastronomy.md` (Editorial fine-dining sub-archetype) + `docs/design/COLOR.md` for the cross-cutting palette rules.

---

## 1. Archetype + sub-archetype

**Category:** Gastronomy (modern European fine-dining with weekly-changing tasting menu)
**Sub-archetype:** **A — Editorial specialty Eiscafé / luxury** per `templates/gastronomy.md` §1 — the luxury/fine-dining variant. Single 22-seat room, one seating per evening (18:30), tasting menu rotates every Wednesday. Reservation-only.
**Color framework:** Analogous-warm per `docs/design/COLOR.md §3` — all hues in the warm magenta-to-gold band (ivory → burgundy → brass). The "Frenchie Paris / Maison Premiere / Cookies Cream" vintage-grand-hotel register.

**What the brand signals:** Chef Adèle Voss (trained Tim Raue / Sylvestre / Geranium) opened Adèle in 2017. The menu list is written Sunday night, first cooked Wednesday, in service for seven days. Suppliers are named (Hof Marquardt / Beelitzer / Spreewald / one French cheese importer). Sommelière Theresa Köhler pairs five wines per card.

**Differentiation from other gastronomy clients:** unlike Bellini (vivid raspberry gelateria) or Saltlines (coastal coffee shop), Adèle commits to vintage grand-hotel register with Playfair Display didone serif typography, half-and-half split hero (image contained right, text editorial left), and a tasting-menu Roman-numeral course list. Component palette skews toward luxury patterns: HoursInNav + HalfPillCTA + MarqueeCTA + SplitHero + CourseList + Press + PricingTable + TeamGrid + BookingMock.

---

## 2. Color tokens

Ivory bone + brighter burgundy + cooler text + soft brass. Tuned 2026-05-22 per user feedback (lightened oxblood `#5A1A2E` → brighter `#7A2740`; dropped warm-brown text-muted for cool warm-gray that doesn't slide into "brown filler").

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#FBF7EE` | Ivory bone — page bg (the "60%" dominant). Subtle warm cream that reads "vintage hotel linen" not "modern stark white" |
| `--color-surface` | `#FFFFFF` | Cards, form bg, hero overlay |
| `--color-surface-elev` | `#F3ECDA` | Section alt-bg, header bg, scroll-spy nav |
| `--color-text` | `#1A1219` | Near-black with subtle warmth — body text |
| `--color-text-muted` | `#5E5360` | Cool warm-gray — captions, secondary (NOT brown family — deliberate per V4 feedback) |
| `--color-accent` | `#7A2740` | Brighter burgundy — primary CTA, link/hover, stat numbers, scroll-spy active. 8.4 : 1 vs ivory |
| `--color-accent-deep` | `#5A1A2E` | Old oxblood, now hover state (darken on light register) |
| `--color-accent-secondary` | `#967B52` | Soft brass — section rules, small decorative, "Konzept" eyebrow, badge bg |
| `--color-accent-secondary-deep` | `#7A6240` | Darker brass — hover/press state for any secondary use |
| `--color-border` | `#EAE3D3` | Card + table borders, hairline dividers |
| `--color-success` | `#7A2740` | Aliases burgundy |
| `--color-warning` | `#B5552B` | Warm orange — distinct from burgundy + brass for warning role |

**Contrast verification (WCAG 2.2 AA):**
- `--color-text` (`#1A1219`) on `--color-bg` (`#FBF7EE`) ≈ 14.5 : 1 → passes AAA
- `--color-text-muted` (`#5E5360`) on `--color-bg` ≈ 6.8 : 1 → passes AA-normal
- `--color-bg` on `--color-accent` (`#7A2740`) ≈ 8.4 : 1 → passes AAA
- `--color-bg` on `--color-accent-secondary` (`#967B52`) ≈ 3.2 : 1 → AA-large only (acceptable: brass is used for headers/decorative, not body text)
- `--color-accent` on `--color-bg` ≈ 8.4 : 1 → passes AAA for accent text on ivory

## 2.5 Palette audit (per `docs/design/COLOR.md §5`)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | WCAG 2.2 AA contrast | ✅ | §2 contrast block above — text 14.5:1 (AAA), text-muted 6.8:1, primary 8.4:1 (AAA), brass 3.2:1 (AA-large only, used appropriately) |
| 2 | Brand-token count ≤ 5 | ✅ | bg + text + text-muted + accent + accent-secondary = 5 |
| 3 | 60-30-10 verified on fold-2 sections | ✅ | `v6-adele-desktop-1280.png` — ivory bg dominant, near-black text + surface-elev 30%, ~10% burgundy on CTAs + stat numbers + scroll-spy. Brass <2% (eyebrow + section rules). |
| 4 | `accent-deep` darker than `accent` | ✅ | `#5A1A2E` darker than `#7A2740` |
| 5 | Harmony framework documented + reasoned | ✅ | **Analogous-warm** — all hues in the warm magenta-to-gold band (ivory → oxblood/burgundy → brass). Chosen because (a) fine-dining luxury register avoids the cool-modern-restaurant cliché, (b) warm burgundy primary signals "wine list / Bordeaux / grand-hotel" without going neon, (c) brass secondary used sparingly preserves the "vintage Pariser Platz hotel" register vs. trendy gold. |
| 6 | Owner-confirmed | 🟡 N/A | Portfolio demo |

**60-30-10 breakdown:**

| Bucket | Allocation | Tokens used |
|---|---|---|
| Dominant 60% | Page bg + section bg + alt-row bg | `--color-bg` ivory + `--color-surface-elev` |
| Secondary 30% | Body text + card surface + booking form bg + footer + borders | `--color-text` + `--color-text-muted` + `--color-surface` + `--color-border` |
| Accent 10% | CTAs + stat numbers + scroll-spy active + HalfPillCTA + MarqueeCTA + booking submit | `--color-accent` burgundy + `--color-accent-deep` |
| Secondary accent < 2% | Eyebrows + section rule lines + Press award marks + brass badges | `--color-accent-secondary` brass |

**Anti-patterns avoided (per `COLOR.md §6`):**
- ✅ No 4+ primary accents
- ✅ Accent < 15% of viewport (burgundy concentrated on CTAs + the brass eyebrows are subtle)
- ✅ No 50/50 split
- ✅ Accent (`#7A2740` burgundy) and warning (`#B5552B` warm orange) visually distinct
- ✅ Darker-on-hover for burgundy
- ✅ No pure `#000` + `#FFF` — warm ink + ivory bone

---

## 3. Typography

Per `templates/gastronomy.md` §5 Editorial fine-dining sub-archetype — didone serif display for "grand-hotel" luxury register.

| Token | Value | Use |
|---|---|---|
| `--font-display` | `"Playfair Display Variable"` (self-hosted) | Display — H1, H2, course names, stat numbers, brand wordmark. High-contrast didone for "Frenchie Paris" register |
| `--font-body` | `"Inter"` (self-hosted) | Body, nav, forms |
| `--font-mono` | `"JetBrains Mono"` | Hours, prices, booking date input |

**Self-hosting:** Playfair Display + Inter via `@fontsource-variable/*` per `PERFORMANCE.md` §6 — no Google Fonts CDN.

**Sizing:**
- H1: SplitHero `clamp(2.5rem, 5vw, 4.5rem)` line-height 1.05 letter-spacing -0.018em weight 500 (per `split-hero.md` spec — lighter than FullBleedHero for the editorial register)
- H2: `clamp(2rem, 3.5vw, 3rem)`
- Course names (CourseList): `clamp(1.25rem, 1.6vw, 1.5rem)`
- Body: 1rem (16px) line-height 1.6 (longer for editorial reading)
- Roman numerals (CourseList markers): 1.5rem display burgundy

---

## 4. Copy voice

- **Sie-form** primary — formal, matches fine-dining register
- Sentences brief; period-terminated; lots of single-line statements ("Eine Karte, die nicht wartet.")
- Ingredient + supplier transparency: "Hof Marquardt · Brandenburg" (not "locally sourced")
- Press: italic serif quotes — magazine register
- Booking form: minimal, no marketing copy

---

## 5. Layout signature elements

Adèle uses these canonical components (full inventory in `docs/design/components/README.md`):

| Component | Where |
|---|---|
| `SplitHero` | Home hero — half-and-half (text left, contained plated-dish image right) — unique to Adèle among demos |
| `HoursInNav` | Header — RESTAURANT 18-23 · WOCHENENDE 18-24 · BAR 17-02 (dual-service stack) — unique to Adèle |
| `HalfPillCTA` | Header right — RESERVIEREN tab pattern — unique to Adèle |
| `MarqueeCTA` | Hero primary — slide-up label on hover — unique to Adèle |
| `CourseList` | Centered Roman-numeral (I-V) tasting card — unique to Adèle |
| `PricingTable` | Tasting menu + wine + non-alcohol pairing prices |
| `TeamGrid` | 4 portraits (Chef Adèle Voss · Sommelière Theresa Köhler · Sous-chef Lukas · Manager Marlena) |
| `Press` | 3-column award row (Tagesspiegel ★★★★ · Bib Gourmand · Restaurant des Monats) — unique to Adèle |
| `FAQ` | 6 questions about dress code / booking / allergies / cancellation / parking / private events |
| `BookingMock` | Date/time/party/name/email/notes form with confirmation state |
| `MapEmbed` | OpenStreetMap, Berlin Mitte · Behrenstraße 47 |
| `MenuCard` | Featured-course preview row on home (Rote Bete · Zander · Rhabarber) |

---

## 6. Image strategy

- Hero: `hero-plated.jpg` (1920w JPEG ~397KB) + `hero-plated.webp` (q70 1920w ≈ 122 KB) via `<picture>` (added 2026-05-23 per audit). Within `PERFORMANCE.md` 200 KB AVIF/WebP hero budget.
- Dish images: 4:3 at 1600w + WebP companions.
- Team portraits: 600×800 portrait JPEG + WebP companions (~20-40 KB WebP each).
- All non-hero images `loading="lazy"`. SplitHero gets `fetchpriority="high"`.

---

## 7. Open questions / follow-ups

- Real client: replace Adèle Voss portrait + Sommelière + Sous-chef + Manager with real staff portraits.
- Real client: replace the 3 mock Press entries (Tagesspiegel / Bib Gourmand / Restaurant des Monats) with verified real coverage; never invent press.
- Real client: implement real booking via Resy or SevenRooms widget inside `ConsentGate` (per `booking-mock.md` §1 — agency does NOT ship in-house booking backends for restaurants).
- Real client: replace MenuCard dish photos with real plated-dish photography matching weekly menu rotation.
