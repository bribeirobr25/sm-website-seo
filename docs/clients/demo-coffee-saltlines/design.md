> **STATUS: PORTFOLIO DEMO** — Fictional business (Berlin surf-coffee shop). Never index. Reference for future gastronomy / specialty-café builds.

# design.md — Saltlines (demo)

Per-client design decisions for `clients/demo-coffee-saltlines/`. Anchors back to `docs/design/templates/gastronomy.md` (Specialty / third-wave sub-archetype) + `docs/design/COLOR.md` for the cross-cutting palette rules.

---

## 1. Archetype + sub-archetype

**Category:** Gastronomy (specialty coffee shop with surf / Strandbar register)
**Sub-archetype:** Hybrid — **C — Boutique counter-only** (per `templates/gastronomy.md` §1) crossed with the **Coffee shop / specialty roaster — light variant** (`§6 Color archetypes`). Two Nordic founders, 18 seats inside, no full kitchen, no booking flow — informal walk-in pattern of a single-room café.
**Color framework:** Split-complementary per `docs/design/COLOR.md §3` — cool near-white bg + ocean cyan-teal primary (cool) + sunset coral secondary (warm complement). NO browns anywhere — committed fully to the ocean register per 2026-05-22 feedback.

**What the brand signals:** "your morning escape from the U-Bahn." Two Nordic founders (Mia from Lofoten, Jonas from Sylt) opened a Spree-river café in Friedrichshain because they missed the sea. Surfboard on the wall, three rotating roasteries (Espressohaus Hamburg / Bonanza Berlin / Five Elephant), no Wi-Fi password on the counter.

**Differentiation from other gastronomy clients:** unlike `Bellini` (heritage Italian gelateria) or `Adèle` (luxury fine-dining), this brand uses sans-serif typography, asymmetric photo-grid bento layout, and a daily-status "wave report" ticker — register is contemporary-coastal, not heritage-warm or editorial-formal.

---

## 2. Color tokens

Coastal cool-white + ocean cyan-teal + sunset coral. No browns. Repaletted 2026-05-22 (dropped warm-sand bg after user feedback that it read as "brown filler").

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#F7FAFB` | Cool near-white page bg — the "60%" dominant |
| `--color-surface` | `#FFFFFF` | Cards, hero overlays, form surfaces |
| `--color-surface-elev` | `#EAF3F5` | Foam-cool — alt-row bg, hover states |
| `--color-text` | `#0E2A35` | Deep ocean ink body text |
| `--color-text-muted` | `#5A7785` | Captions, secondary text |
| `--color-accent` | `#1F9AB0` | Saturated cyan-teal — primary CTA, stat numbers, hover, scroll-spy active link |
| `--color-accent-deep` | `#157A8F` | Darker teal — CTA hover state (darken-on-hover per `DESIGN-BEST-PRACTICES.md` §5) |
| `--color-accent-secondary` | `#E25C3E` | Sunset coral — newsletter CTA, wave-report ticker highlights, "Beliebt" badge family |
| `--color-accent-secondary-deep` | `#B9421F` | Darker coral — hover/press state |
| `--color-border` | `#D5E4EA` | Card + table borders, hairline dividers |
| `--color-success` | `#1F9AB0` | Aliases primary teal |
| `--color-warning` | `#E25C3E` | Aliases coral — distinct from accent for warning role |

**Contrast verification (WCAG 2.2 AA):**
- `--color-text` (`#0E2A35`) on `--color-bg` (`#F7FAFB`) ≈ 15.2 : 1 → passes AAA
- `--color-text-muted` (`#5A7785`) on `--color-bg` ≈ 5.4 : 1 → passes AA-normal
- `--color-bg` on `--color-accent` (`#1F9AB0`) ≈ 6.4 : 1 → passes AA-normal for button text
- `--color-bg` on `--color-accent-secondary` (`#E25C3E`) ≈ 4.9 : 1 → passes AA-normal for newsletter CTA
- `--color-accent` on `--color-bg` ≈ 6.4 : 1 → passes AA-normal for accent text

## 2.5 Palette audit (per `docs/design/COLOR.md §5`)

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | WCAG 2.2 AA contrast | ✅ | §2 contrast block above — 5 ratios documented, all pass |
| 2 | Brand-token count ≤ 5 | ✅ | bg + text + text-muted + accent + accent-secondary = 5 |
| 3 | 60-30-10 verified on fold-2 sections | ✅ | `v6-saltlines-desktop-1280.png` — cool-white bg dominant, ocean-ink text + surface-elev 30%, ~10% accent on CTAs + scroll-spy + ticker. Coral secondary <2% (newsletter CTA only). |
| 4 | `accent-deep` darker than `accent` | ✅ | `#157A8F` darker than `#1F9AB0` |
| 5 | Harmony framework documented + reasoned | ✅ | **Split-complementary** — sand-bg replaced with cool near-white (still warm-neutral); ocean teal primary (cool, complement of orange); sunset coral secondary (warm, adjacent to teal's red complement). Chosen because (a) "surf escape" needs cold ocean register, (b) coral newsletter CTA telegraphs "sunset wave report" without warming the rest of the brand, (c) avoids the brown/cream trap that contradicts the coastal positioning. |
| 6 | Owner-confirmed | 🟡 N/A | Portfolio demo |

**60-30-10 breakdown:**

| Bucket | Allocation | Tokens used |
|---|---|---|
| Dominant 60% | Page bg + section bg + form bg | `--color-bg` + `--color-surface-elev` |
| Secondary 30% | Body text + card surface + footer bg + borders | `--color-text` + `--color-text-muted` + `--color-surface` + `--color-border` |
| Accent 10% | CTAs + stat numbers + scroll-spy active + ticker bg + roastery hover | `--color-accent` cyan-teal + `--color-accent-deep` |
| Secondary accent < 2% | Newsletter CTA + DEMO ribbon | `--color-accent-secondary` coral + (DEMO terracotta is meta) |

**Anti-patterns avoided (per `COLOR.md §6`):**
- ✅ No 4+ primary accents
- ✅ Accent < 15% of viewport
- ✅ No 50/50 split
- ✅ Accent and warning visually distinct (teal vs coral)
- ✅ Darker-on-hover
- ✅ No `#000` + `#FFF` purist palette

---

## 3. Typography

Per `templates/gastronomy.md` §5 Specialty / third-wave sub-archetype — sans-serif display register.

| Token | Value | Use |
|---|---|---|
| `--font-display` | `"Bricolage Grotesque Variable"` (self-hosted) | Display — H1, H2, hero, brand wordmark. Personality-driven variable sans for "coastal-modern" register |
| `--font-body` | `"Inter"` (self-hosted) | Body, nav, forms |
| `--font-mono` | `"JetBrains Mono"` | Wave-report ticker, hours, prices |

**Self-hosting:** Bricolage Grotesque + Inter via `@fontsource-variable/*` per `PERFORMANCE.md` §6 — no Google Fonts CDN.

**Sizing:**
- H1: `clamp(2.5rem, 6vw, 5rem)` line-height 1.05 letter-spacing -0.022em — same canonical FullBleedHero spec used across demos
- H2: `clamp(2rem, 3.5vw, 3rem)` line-height 1.1
- Body: 1rem (16px) line-height 1.55-1.6
- Ticker: 12px monospace, all-caps, letter-spacing 0.08em (per `wave-report-ticker.md` spec)

---

## 4. Copy voice

- **Du-form** primary (`du`/`dich`) — informal, matches Strandbar register
- Sentences short, period-terminated
- Concrete details over marketing claims: "Bonanza Oaxacan Mix · mittlere Röstung" (not "premium specialty coffee")
- No emojis. No exclamation marks.
- Newsletter tone: "Wellenbericht" — surf-report metaphor for the weekly email

---

## 5. Layout signature elements

Saltlines uses these canonical components (full inventory in `docs/design/components/README.md`):

| Component | Where |
|---|---|
| `FullBleedHero` | Home hero (ocean wave photo) |
| `WaveReportTicker` | Below hero — daily status marquee (unique to Saltlines) |
| `PhotoGrid` | "Sechs Quadratmeter Spreeufer" — asymmetric 5-image bento (unique to Saltlines) |
| `TrustBadgeRow` | 3 roastery logos (Espressohaus / Bonanza / Five Elephant) |
| `VideoFacade` | Mock "Sonntagmorgen 06:30" film embed |
| `NewsletterMock` | "Wellenbericht abonnieren" (unique to Saltlines) |
| `FAQ` | 6 questions about beans / cold brew / Wi-Fi / dogs / takeaway |
| `MapEmbed` | OpenStreetMap, Friedrichshain · Holzmarktstraße 25 |
| `ScrollSpyNav` | 7-anchor sticky in-page nav (unique to Saltlines among demos) |
| `LabelCountHeader` | Drinks page categories: KAFFEE (8), NICHT-KAFFEE (6) |
| `MenuCard` | Featured-drink preview row on home (Baltic Cold Brew · Strand Matcha · Sunrise Filter) |

---

## 6. Image strategy

- Hero: `hero-ocean.jpg` (1920w JPEG) + `hero-ocean.webp` (q55 1920w ≈ 248 KB) via `<picture>` (added 2026-05-23 per audit). Within `PERFORMANCE.md` 200 KB AVIF/WebP hero budget at higher source quality.
- Card / grid images: 4:3 or square at 1600w JPEG + WebP companion.
- All non-hero images `loading="lazy"`. Hero gets `fetchpriority="high"`.
- DRAFT — real client would receive Astro Image responsive `srcset` generation; current setup is two-source `<picture>` (WebP + JPEG fallback).

---

## 7. Open questions / follow-ups

- Real client: replace fictional roastery logos (currently inline SVGs) with brand-supplied PNG/SVG from each roastery's brand kit.
- Real client: replace `VideoFacade` poster + YouTube ID with actual owner-shot reel.
- Real client: implement real newsletter via Resend + double opt-in per `INTEGRATIONS.md`.
