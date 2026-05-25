# Sander & Voss — design.md

**Inherits:** `docs/design/DESIGN-BEST-PRACTICES.md` + `docs/design/COLOR.md` + `docs/design/templates/professional-services.md`.

## 1. Brand register

Enterprise law gravitas, modern + clinical. Reads like a high-end legal publication (FT Weekend, JUVE) — not a Magic Circle nostalgia piece. Distinct from the dark-stone-and-gold register of historic German Kanzleien. Audience: Berlin Mittelstand + start-ups + family-owned businesses with a corporate / tax / employment / data-protection matter; NOT individual consumers with a parking ticket.

**Anti-register tells:**
- ❌ Dark wood paneling photography (Kanzlei-cliché)
- ❌ "Established 1898" gold lettering serif
- ❌ Globe + handshake stock-photo hero
- ❌ Cream / sepia / brown defaulting (the V1 mistake)

## 2. Palette (V2 — 2026-05-23 portfolio rebuild)

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#FFFFFF` | Pure white — page background |
| `--color-surface` | `#F4F5F8` | Pale cool grey — alternating section bg |
| `--color-surface-elev` | `#ECEDEA` | Cooler elevation surface |
| `--color-text` | `#0B2A1F` | Deep forest green — primary text |
| `--color-text-muted` | `#52584F` | Warm slate-green — secondary text |
| `--color-accent` | `#9B8055` | Matte brass — primary accent (large text + non-text only at 3.0:1) |
| `--color-accent-deep` | `#6F5A35` | Deep brass — body-text-safe at 5.6:1 (AA) |
| `--color-accent-secondary` | `#651E1E` | Oxblood — reserved for serious notices |
| `--color-inverted-bg` | `#0B2A1F` | Deep forest — pull-quote section bg |
| `--color-inverted-text` | `#FFFFFF` | On inverted-bg |
| `--color-border` | `#E2E4E1` | Pale cool border |

**Framework:** Analogous-with-accent (`COLOR.md` §3) — neutral white + green-family text + warm-metallic accent.

**WCAG 2.2 AA verified:**
- Text `#0B2A1F` on bg `#FFFFFF` → **15.0:1** (AAA, all sizes)
- `accent-deep` `#6F5A35` on `#FFFFFF` → **5.6:1** (AA-normal for body text + links)
- `accent` `#9B8055` on `#FFFFFF` → 3.0:1 (large-text + non-text only — DO NOT use for body)

## 2.5 Palette audit (`COLOR.md` §6.5 — required)

Verified against existing portfolio bgs:
- Bellini `#FFF8F1` warm cream (pink-tinted) — distinct from `#FFFFFF` (cool white)
- Saltlines pale coastal cream — distinct
- Adèle `#F7F0E2` warm ivory — distinct
- Atem `#EDE7F0` pale lilac — distinct
- Bart & Pomade `#0E0E0E` near-black — distinct (different dominance entirely)

Accent verification: brass `#9B8055` does not collide with Bellini raspberry, Saltlines coral, Adèle burgundy, Atem terracotta, Bart saffron-gold.

Hue family: white-bg + cool-green-text + warm-metallic accent — only demo in the portfolio with this combination.

→ Satisfies portfolio diversity rules 1–5.

## 3. Typography

- **Display:** Lora Variable. Wide formal serif, traditional law-firm aesthetic. Weight 500 for H1/H2.
- **Body:** Inter Variable. Weight 400/500.
- **Tracking:** display = -0.022em (tight, modern); body = -0.005em.
- **Distinct from Adèle** (Cormorant Garamond — more delicate) and Bellini (Fraunces — chunky modern).

## 4. Copy voice

- Direct, not bombastic. "Klare Beratung. Verbindliche Ergebnisse." not "Excellence in Legal Counsel."
- Specific numbers (320–450 €/h hourly · 1.800 € pauschale GmbH-Gründung) over vague "competitive rates."
- Acknowledge limits: "Wenn wir nicht der richtige Ansprechpartner sind, empfehlen wir eine Kollegin oder einen Kollegen — auch das kostet nichts."
- Avoid: "Trust us." · "Premium." · "Leader in." · "Innovative." · "Solutions-oriented."

## 5. Anti-slop checklist (`DESIGN-BEST-PRACTICES.md` §15 tells)

- ✅ No "Hero with grid + photo on right" template layout (typography-led hero per `professional-services.md` §12 rule 1)
- ✅ No purple-pink gradient
- ✅ No StatCallouts row with "1234 clients" (replaced by Recognitions + Admissions strips per template §13)
- ✅ No 5-star Testimonial cards (replaced by Chambers pull-quote — pro-services confidentiality)
- ✅ No MapEmbed on home (per template §13)
- ✅ No "Schedule a free consultation!" CTA shouting — soft "Speak with us" pill CTA only
- ✅ Partner initials tiles (KS / LV / AE / MS) — placeholders captioned as such; real client would replace

## 15. AI-template tells avoided

- ❌ Stock corporate photography (gavels, handshakes, globe) — none used
- ❌ Generic "Our Practice Areas" 3-up cards — replaced by 2×2 with sub-services + numbered (01–04)
- ❌ "Founded in [year]" hero — moved to admissions strip subtle
- ❌ "Submit Inquiry" form on home — none, only soft phone + email CTAs

## 17. Per-section design notes

- **Hero**: serif H1 + 3 status-pill bullets ("Zugelassen in Deutschland · 4 Rechtsgebiete · 120+ laufende Mandate"). Two CTAs only.
- **Press**: 3 columns centered, brass rating-line + small-caps outlet + italic pull-quote.
- **Admissions strip**: 5 entries, flex-wrap centered, single-line name + sub-line org.
- **PracticeAreas**: numbered tiles 01–04, h3 + 1-paragraph desc + 4 sub-services (· bullets) + "Mehr lesen" link.
- **About**: 1.5fr 2-col, founder portrait left (4:5 aspect placeholder), 2 paragraphs right.
- **TeamGrid**: 2×2 cards, 80px circle initials tile, name + role + specialty (one line) + 4-line bio.
- **Accordion**: 4 items, bordered variant, single-open enforced via Accordion's groupId.
- **Pull-quote**: deep-forest inverted bg, centered serif italic, brass small-caps source.
- **FAQ**: 2-col CSS grid wrapping two FAQ components, single-open disabled (parallel reading).
- **CTA footer**: centered, half-pill phone + outlined email, sprechzeiten tabular line below.
