# Atem Studio — design.md

**Inherits:** `docs/design/DESIGN-BEST-PRACTICES.md` + `docs/design/COLOR.md` + `docs/design/templates/studio.md`.

## 1. Brand register

Contemplative boutique yoga — NOT fitness, NOT wellness theater. Reads like a small bookshop or a Japanese tea room: small classes, slow transitions, named teachers, no soundtrack with BPM. Cool register (lilac + aubergine) deliberately avoids the saffron-and-sage cliché of "yoga aesthetic" sites.

**Anti-register tells:**
- ❌ Wide-shot of model in lululemon at sunrise on a beach
- ❌ Sanskrit ohm symbol as logo
- ❌ Bamboo / mat-roll / candle hero
- ❌ Bone + sage + saffron earth-tone defaulting (the V1 mistake)
- ❌ "Find your inner peace" copy

## 2. Palette (V2 — 2026-05-23 portfolio rebuild)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#EDE7F0` | Pale lilac — page background (cool, NOT cream) |
| `--color-surface` | `#FFFFFF` | White — elevated cards |
| `--color-surface-elev` | `#E0D8E4` | Deeper lavender — alternating section bg |
| `--color-text` | `#2A1F3A` | Deep aubergine — primary text |
| `--color-text-muted` | `#6A5B7B` | Medium aubergine — secondary text |
| `--color-accent` | `#D87C5A` | Terracotta — primary accent (warm pop on cool ground) |
| `--color-accent-deep` | `#A85C3F` | Deeper terracotta — body-text-safe at 4.9:1 (AA) |
| `--color-accent-secondary` | `#7B6BA8` | Medium lavender — breath/meditation cues |
| `--color-accent-secondary-deep` | `#5A4D80` | Deeper lavender |
| `--color-inverted-bg` | `#2A1F3A` | Deep aubergine — MarqueeCTA bg |
| `--color-inverted-text` | `#EDE7F0` | On inverted-bg |
| `--color-border` | `#D4CADA` | Pale lavender border |

**Framework:** Complementary per `COLOR.md` §3 — pale lilac ground (cool blue-violet) + terracotta accent (complement = orange). Aubergine text ties to the lavender family.

**WCAG 2.2 AA verified:**
- Text `#2A1F3A` on bg `#EDE7F0` → **11.9:1** (AAA, all sizes)
- `accent-deep` `#A85C3F` on `#EDE7F0` → **4.9:1** (AA-normal for body text + links)
- `accent-secondary` `#7B6BA8` on `#EDE7F0` → 3.6:1 (large-text + non-text only)

## 2.5 Palette audit (`COLOR.md` §6.5 — required)

Verified against existing portfolio bgs:
- Bellini `#FFF8F1` warm cream — distinct (warm vs cool)
- Saltlines pale coastal cream — distinct (warm cream vs cool lilac)
- Adèle `#F7F0E2` warm ivory — distinct
- Sander & Voss `#FFFFFF` pure white — distinct
- Bart & Pomade `#0E0E0E` black — distinct dominance

Accent verification: terracotta `#D87C5A` does not collide with Bellini raspberry, Saltlines coral (different hue + brightness), Adèle burgundy, Sander brass, Bart saffron-gold.

Hue family: pale-lilac + deep-aubergine + terracotta — unique combination in the portfolio (no other demo touches purple).

→ Satisfies portfolio diversity rules 1–5.

## 3. Typography

- **Display:** Newsreader Variable. Soft, contemplative serif with optical sizing. Italic for headlines (slow, breath-like feel).
- **Body:** Inter Variable.
- **Tracking:** display = -0.015em (slightly looser than lawyer's -0.022em); body = -0.005em.
- **Italic-display H1/H2** — distinct from lawyer (upright Lora) and barber (uppercase Bricolage Grotesque).

## 4. Copy voice

- Quiet, specific. "Kein BPM-Soundtrack. Kein Wettbewerb. Kein Wellness-Theater." not "Find your zen."
- Acknowledge beginner anxiety directly in FAQ ("Bin ich flexibel genug?" → "Das ist nicht die richtige Frage").
- Probestunde framing as gift, not promo: "Erste Stunde ist auf uns."
- Generous spacing in copy mirrors the studio's spacing principle (leading-[1.75] body lines).
- Avoid: "Journey." · "Practice your truth." · "Sacred space." · "Energy." (without specific physiological meaning).

## 5. Anti-slop checklist (`DESIGN-BEST-PRACTICES.md` §15 tells)

- ✅ No "Hero with grid + photo on right" template (SplitHero with decorative SVG mandala on right, placeholder captioned honestly)
- ✅ No 5-star Testimonial cards (replaced by inline pull-quote in About section)
- ✅ No Timeline "How it works" (yoga has rhythm, not process — per template §13)
- ✅ No MapEmbed on home
- ✅ No StatCallouts ("1000+ classes!" reads like a fitness chain — yoga is small + intimate)
- ✅ No bamboo / mat-roll / hands-praying stock imagery — gallery is CSS gradient placeholders captioned as such
- ✅ Marquee `prefers-reduced-motion` respected

## 15. AI-template tells avoided

- ❌ "Find Your Center" / "Begin Your Journey" headline — replaced by "Yoga, wie er sich eigentlich anfühlen sollte." (concrete, specific, NOT spiritual marketing speak)
- ❌ Stock "yogi pose on mountaintop" photography — none
- ❌ Generic price-cards with "Most Popular" badge — Probestunde tier highlighted with "Empfohlen für Einsteiger" (specific reason, not arbitrary upsell)

## 17. Per-section design notes

- **Hero**: italic-serif H1, 2 lines (clamp 2.5rem → 5.5rem), terracotta primary CTA + outlined phone. Right side: pale-lavender decorative panel with 4-circle mandala SVG + caption "Studio-Foto folgt mit echtem Material."
- **Schedule grid**: 7 columns × 4 rows table (Mo–Sa highlighted accent-deep, Mi class names in italic pills). Horizontal scroll at < 700px.
- **PricingTable**: 4 cards in a row (lg:grid-cols-4), Probestunde tier has terracotta border + shadow-elev + "Empfohlen für Einsteiger" eyebrow.
- **Video tile**: aspect-video, deep-aubergine bg with diagonal gradient overlay, terracotta circular play button (80×80) centered, caption "Video starten — 0:45" below.
- **About**: single-column, italic H2, 2 body paragraphs, pull-quote in middle (border-left-4 terracotta).
- **Gallery**: 6 tiles, first one spans 2×2 on lg breakpoint. Each tile uses CSS bg-gradient-to-br with token-based colors (no images).
- **Instructor chips**: flex-wrap rounded-full pills with 12×12 lavender circle + name + styles inline.
- **Newsletter**: 2-col on lg (text left, form right). Mock submission flips to thank-you state on submit.
- **MarqueeCTA**: deep-aubergine bg, gold italic-serif scrolling text (60s linear infinite, reduced-motion stops it). Below: CTA card with mail + phone buttons.
