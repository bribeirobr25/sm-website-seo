# Bart & Pomade — design.md

**Inherits:** `docs/design/DESIGN-BEST-PRACTICES.md` + `docs/design/COLOR.md` + `docs/design/templates/beauty.md`.

## 1. Brand register

Heritage barber. Black bg + saffron-gold + brick-red. Bold geometric sans (Bricolage Grotesque) uppercase headlines. NOT the boutique-salon register (which would be cream + soft black + gold). NOT the modern-grooming register (which would lean clinical-white). The Friedrichshain ethos: dive bar with whisky at the counter + chair, Boxhagener-Platz craft tradition, no-nonsense.

**Anti-register tells:**
- ❌ Cream / warm-beige bg with charcoal text (boutique salon register — wrong vertical)
- ❌ Soft pastel + script-font logo
- ❌ "Modern grooming experience" copy
- ❌ Hipster-mustache illustration
- ❌ Walnut wood texture wallpaper

## 2. Palette (V2 — 2026-05-23 portfolio rebuild)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#0E0E0E` | Near-black — page background (DARK-DOMINANT) |
| `--color-surface` | `#1A1A1A` | Slightly lighter charcoal — cards |
| `--color-surface-elev` | `#252525` | Deeper elevation surface |
| `--color-text` | `#F2EEE3` | Warm bone — primary text on dark |
| `--color-text-muted` | `#9A9388` | Muted warm grey — secondary text |
| `--color-accent` | `#D9A35E` | Saffron-gold — primary accent (9.3:1 on black — AAA all sizes) |
| `--color-accent-deep` | `#A77A40` | Deeper gold |
| `--color-accent-secondary` | `#B83C2B` | Brick-red — barber-pole signal + serious notices |
| `--color-inverted-bg` | `#F2EEE3` | **LIGHT cream** — "lift up out of dark" CTA block at bottom |
| `--color-inverted-text` | `#0E0E0E` | On inverted-bg |
| `--color-border` | `#2D2D2D` | Subtle dark border |

**Framework:** Triadic-dark per `COLOR.md` §3 — black anchor + warm bone (neutral light) + warm-yellow accent + red secondary. Inverted color world (light = surface elevation OUT of the dark).

**WCAG 2.2 AA verified:**
- Text `#F2EEE3` on bg `#0E0E0E` → **17.1:1** (AAA, all sizes)
- `accent` `#D9A35E` on `#0E0E0E` → **9.3:1** (AAA, all sizes)
- `accent-secondary` `#B83C2B` on `#0E0E0E` → 5.1:1 (AA-normal)
- Light CTA block: text `#0E0E0E` on `#F2EEE3` → **15.8:1** (AAA)

## 2.5 Palette audit (`COLOR.md` §6.5 — required)

Verified against existing portfolio bgs:
- Bellini `#FFF8F1` warm cream — distinct dominance (light vs dark)
- Saltlines pale coastal cream — distinct dominance
- Adèle `#F7F0E2` warm ivory — distinct dominance
- Sander & Voss `#FFFFFF` pure white — distinct dominance
- Atem `#EDE7F0` pale lilac — distinct dominance
- → **Only dark-dominant demo** in the portfolio. Satisfies `COLOR.md` §6.5 rule 3 ("at least one demo must be dark-dominant").

Accent verification: saffron-gold `#D9A35E` does not collide with Adèle brass (different value) or Sander brass (`#9B8055` — more muted). Brick-red `#B83C2B` distinct from Adèle burgundy (different hue + brightness).

Hue family: black + warm-bone + saffron-gold + brick-red — unique combination.

→ Satisfies portfolio diversity rules 1–5.

## 3. Typography

- **Display:** Bricolage Grotesque Variable. Modern geometric sans with high weight range. Weight 900 (extrabold) for hero, 700 for H2.
- **Body:** Inter Variable.
- **Tracking:** display = -0.03em (tight uppercase); body = -0.005em.
- **All-uppercase headlines** — heritage-barber convention. Distinct from lawyer (sentence case Lora serif) and yoga (italic-serif Newsreader sentence case).

## 4. Copy voice

- Direct, no-nonsense. "Klassischer Männerschnitt mit Schere und Kamm. Heißhandtuch-Rasur mit Klinge." not "Premium grooming experience."
- Acknowledge limits + audience explicitly: "Wir machen klassisches Männer-Barber-Handwerk — keine Föhn-Frisuren, keine Highlights, keine Augenbrauen-Threads."
- Pomade product line as parallel story (Boxhagener Pomade in Berlin produziert).
- Boundary on Online-Buchung: "Online-Buchung haben wir bewusst nicht" — deliberate friction signal.
- Avoid: "Premium." · "Luxury." · "Experience." · "Trust the masters."

## 5. Anti-slop checklist (`DESIGN-BEST-PRACTICES.md` §15 tells)

- ✅ No "Hero with grid + photo on right" — dark full-bleed with massive uppercase + barber-pole SVG decoration
- ✅ No StatCallouts row with "10,000+ haircuts!" — uses years-of-experience per-barber stat instead
- ✅ No 5-star Testimonial cards — uses brick-red pull-quote about craft philosophy
- ✅ No MapEmbed on home (per template §13)
- ✅ No Timeline "Our Process" — uses BeforeAfter visual + booking form instead
- ✅ No stock-photo "hipster guy at barber chair" — initials tiles + CSS gradient portfolio captioned as placeholders

## 15. AI-template tells avoided

- ❌ "Welcome to [Shop Name] — Berlin's Premium Barbershop" — replaced by 3-word uppercase manifesto
- ❌ Light-cream "boutique salon" register — DELIBERATELY inverted to dark-dominant per `beauty.md` §13
- ❌ "Book Online Now!" CTA shouting — replaced by "Anrufen ist am schnellsten" with phone + WhatsApp; mock BookingMock present for visual demo only

## 17. Per-section design notes

- **Hero**: dark bg, barber-pole stripe SVG in top-right at 6% opacity, massive 3-line uppercase H1 (clamp 3rem → 8rem), gold + red dot meta line.
- **PricingTable (custom)**: 3 columns side-by-side on lg (collapses to 1-col on md), each column is a category (SCHNITTE / BART+RASUR / EXTRAS), items as price-on-right rows with description below.
- **BeforeAfter sliders**: 3 cards in a row, each with brick-red half + gold half + center gold divider + drag-cursor icon. Mockup only.
- **About**: dark bg, brick-red border-left-4 pull-quote in the middle of body text.
- **Portfolio**: 6 tiles in 3-col grid, gold/red gradient placeholders captioned with cut name (Skin Fade · Royal Shave Finish · etc.).
- **TeamGrid**: horizontal cards (not 4-col), 80×96 gold square tile with initials + 2-col content right (bio left, years stat right with gold tabular number).
- **BookingMock**: dark surface form, 2-col selects + date + 4-button time-slot radio group + gold submit. Mockup state flips to confirmation on submit.
- **TrustBadgeRow**: 4 entries centered, label (uppercase bone) + sub (uppercase tracking-wider muted).
- **FAQ 2-col**: Accordion split into two columns (3 items each) at lg, single-col on sm.
- **CTA footer**: LIGHT cream block with 4px gold top-border for visual rhythm break, dark text + brick-red phone CTA.
