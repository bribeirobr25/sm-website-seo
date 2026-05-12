# Porto dos Ribeiros — Design File

## Inherits: DESIGN-BEST-PRACTICES.md

## Client context

- Business type: Brazilian restaurant + café + bar with delivery
- City / neighborhood: Porto, Portugal — Rua da Constituição (residential, off-tourist)
- Primary language: PT (Brazilian-Portuguese voice) — secondary EN
- Primary audience: Brazilian diaspora in Porto (loyal base), Portuguese locals (daily café), English-speaking tourists (discovery)
- Main CTA: WhatsApp order / call (+351 963 349 411)
- What it should feel like: warm, lived-in, generous, Brazilian-home-in-Porto, food-first, owner's-place-not-a-chain
- What it must NOT feel like: tourist trap, generic restaurant template, flag-literal "BRASIL!" cliché, corporate, cold

## Visual direction

- **Aesthetic sentence:** "This site feels like the smell of feijoada coming out of a tiled Porto townhouse — Brazilian warmth wearing Portuguese clothes."
- **Reference 1 — Magnolia Bakery / Lilia (NYC, Brooklyn restaurant sites):** borrow generous editorial photography, calm typography, no card soup. Avoid: too-clean New York minimalism that loses warmth.
- **Reference 2 — Brazilian botecos with strong identity (e.g. Veloso Bar):** borrow earthy palette, hand-drawn or characterful display type, casual confidence. Avoid: cluttered, neon, novelty fonts, "samba dancer" visuals.

## Color tokens

Warm clay + cream + a Brazilian green that reads as fresh-herb / coffee-leaf, not flag.

```css
--color-bg:          #F7F0E5;   /* cream off-white, not pure white */
--color-surface:     #FFFFFF;   /* card / panel — used sparingly */
--color-text:        #1F1A14;   /* warm near-black, not #000 */
--color-text-muted:  #6B5E4E;   /* warm brown-grey for meta */
--color-accent:      #C2410C;   /* terracotta — primary CTAs, focus rings, ::selection */
--color-accent-deep: #7A2B0A;   /* hover/active state for terracotta */
--color-secondary:   #3F6B3A;   /* deep herb-green — used for accents only, never CTA */
--color-border:      #E5D9C5;   /* soft warm border */
```

**Contrast check (must hit before delivery):**
- Text on bg: `#1F1A14` on `#F7F0E5` ≈ 14.6:1 ✓
- Accent button text white on `#C2410C` ≈ 4.6:1 ✓ (verify with tool before launch)

## Typography choices

- **Display font:** **Fraunces** (Google Fonts) — warm, optical-sized serif with character. Used for hero headline, section headlines, prices on menu. Weight 500–700.
- **Body font:** **Manrope** (Google Fonts) — humanist sans, excellent Portuguese diacritic coverage, comfortable at 16–18px. Weight 400 body / 600 emphasis.
- **Data font:** not needed — apply `font-variant-numeric: tabular-nums` to Manrope for hours and prices.

Both fonts must include the `latin-ext` subset for proper PT characters (`ã ç õ á é í ó ú`).
Preload Fraunces 600 only (display = LCP-adjacent). Manrope loads via `display=swap`.

## Copy decisions

- **Hero headline (PT):** "Comida brasileira no Porto, do café da manhã ao jantar"
  *Rationale:* names what + where, signals continuous hours, no exclamation, no "Bem-vindo".
- **Hero sub-headline (PT):** "Feijoada, strogonoff e coxinha na Rua da Constituição. Cozinha aberta sem parar."
- **Hero headline (EN):** "Brazilian home cooking in Porto, from morning coffee to dinner"
- **Hero sub-headline (EN):** "Feijoada, stroganoff, and coxinhas on Rua da Constituição. Kitchen open all day, no afternoon break."
- **Primary CTA label (PT):** "Pedir no WhatsApp"
- **Primary CTA label (EN):** "Order on WhatsApp"
- **Secondary CTA:** "Como chegar" / "Directions" (links to Google Maps)
- **Tertiary CTA:** phone tap `tel:+351963349411`
- **Tone in one word:** acolhedor (welcoming/cozy) — never "premium," never "experiência gastronómica."

### Anti-patterns banned for this client

- ❌ "Bem-vindo ao Porto dos Ribeiros!" hero
- ❌ Brazilian flag colors used as UI accents
- ❌ Samba/carnival imagery, parrots, "tropical" sparkles
- ❌ Stock food photography passed as theirs
- ❌ "Sabores autênticos do Brasil" filler

## Real assets available

- **Photos:** Yes — from own site, IG, GBP. Quality unverified. **All replaced with owner-provided originals before production.**
- **Logo:** unknown — DRAFT. If none exists, we wordmark in Fraunces 700 italic; offer to design one in retainer scope.
- **Reviews:** 287 Google reviews, 4.7★. Three quotes pre-selected in BRIEF.md; client must approve display.
- **Specific hours confirmed:** No — using IG bio as canonical until owner verifies on the call.

## Component priorities for this build

Per `DESIGN-BEST-PRACTICES.md` standard sections, the ones that matter most here:

1. **Hero** — full-width photo (dish or terrace), headline + sub, two CTAs (WhatsApp primary, Directions secondary).
2. **Hours block** — emphasize "no afternoon break"; tabular-nums; both Sun–Thu and Fri–Sat clearly laid out.
3. **Menu preview** — 6–8 dishes with photo + name + short description; *no prices in demo* until confirmed.
4. **Map + visit** — embedded Google Maps, address as `<address>`, phone as `tel:` link, WhatsApp button.
5. **Reviews strip** — three quotes from GBP, with attribution and Google logo (no fabricated aggregateRating).
6. **Footer** — full legal block (DRAFT placeholders for NIF/CAE), social links, livroreclamacoes.pt link.

## Motion & micro-interactions

Per DESIGN-BEST-PRACTICES standards. Specific to this brand:

- `::selection` color = `--color-accent` (terracotta on cream).
- Focus rings = `--color-accent` 2px offset.
- Buttons: `active:scale-95`, `transition-transform duration-150`.
- No parallax. No scroll-jacking. No auto-playing video. Reduced motion respected.

## Delivery notes

- **Hosting:** Vercel (handled manually by user — no auto-deploy)
- **Domain:** TBD — current `portodosribeiros.com` is owned by client; demo lives at `*.vercel.app`
- **Languages needed:** PT (default at `/`) + EN (at `/en/`)
- **Impressum required:** No (Portugal market). Required instead: PT legal footer + livro de reclamações link — see BRIEF.md.
- **noindex:** On every page until owner commits.
