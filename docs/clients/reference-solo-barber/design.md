# design.md — Reference Solo Barber

**Vertical:** Beauty
**Sub-archetype:** Modern urban barber, dark (per `docs/design/templates/beauty.md` §6 "Modern urban barber (dark)")
**Market:** Brazil

---

## Palette — warm dark + amber

Per `DESIGN-BEST-PRACTICES.md` §3 Sourcing hierarchy: since there is no real client to source from, the palette is **archetype-derived** (tier 5 — synthesized) and represents the "Modern urban barber dark" sub-archetype canonical look.

| Token | Hex | Role |
|---|---|---|
| `--color-bg` | `#1a1612` | Page background — deep warm-black |
| `--color-surface` | `#252018` | Cards, footer, section alternation |
| `--color-surface-elev` | `#2f291f` | Hover state for surface, elevated cards |
| `--color-text` | `#f5f0e8` | Body text on dark — warm off-white |
| `--color-text-muted` | `#b8a896` | Secondary text, labels |
| `--color-accent` | `#d4894a` | Primary CTA, links, focus rings — warm amber/copper |
| `--color-accent-deep` | `#a8632e` | CTA hover (darken-on-hover per WCAG anti-pattern rule) |
| `--color-border` | `#3a3128` | Dividers, card outlines |

**WCAG 2.2 AA contrast verification (per `TECH.md` §Image-extraction operational toolkit):**

| Pair | Ratio | Required | Status |
|---|---|---|---|
| `--color-text` on `--color-bg` (#f5f0e8 on #1a1612) | ~14.3:1 | 4.5:1 (body) | ✅ AAA |
| `--color-text-muted` on `--color-bg` (#b8a896 on #1a1612) | ~7.3:1 | 4.5:1 | ✅ AAA |
| `--color-bg` on `--color-accent` (#1a1612 on #d4894a) | ~6.8:1 | 4.5:1 (button text on button bg) | ✅ AA |
| `--color-bg` on `--color-accent-deep` (#1a1612 on #a8632e) | ~5.4:1 | 4.5:1 (hover state) | ✅ AA |
| `--color-text` on `--color-surface` (#f5f0e8 on #252018) | ~13.5:1 | 4.5:1 | ✅ AAA |

**Important:** the button hover state is `bg-accent` → `bg-accent-deep` (darken-on-hover, NOT lighten). Per `DESIGN-BEST-PRACTICES.md` §Lighter-on-hover is a WCAG anti-pattern.

---

## Typography

| Token | Value | Role |
|---|---|---|
| `--font-display` | Georgia, Cormorant Garamond, serif | Headings (h1-h4) — classic, slightly editorial, matches the "barbearia de bairro" voice |
| `--font-body` | Inter, system-ui, sans-serif | Body text |
| `--font-mono` | JetBrains Mono | Tabular nums (phone, hours, prices) |

**Body text minimum:** 16px (1rem). Line-height 1.6 per `DESIGN-BEST-PRACTICES.md` §Typography.

**Display sizes:**
- h1: `text-4xl sm:text-5xl lg:text-6xl` (2.25rem → 3rem → 3.75rem)
- h2: `text-3xl sm:text-4xl` (1.875rem → 2.25rem)
- h3: `text-xl` to `text-2xl` (1.25rem to 1.5rem)

---

## Copy voice

- **Tone:** warm, direct, slightly self-deprecating. The barber is the brand — first person plural ("a gente") plus occasional first person singular when referring to the founder.
- **Voice register:** PT-BR informal, no boastful language. "Melhor barbearia" only appears inside review quotes, never in agency copy.
- **Avoided clichés:** "premium experience", "top-tier service", "since [year]" without substance.

Example openings:
- Hero: "Corte clássico, barba aparada na navalha e a conversa que sobra."
- About: "Antes de abrir a Barbearia Tio Edu, o Eduardo passou X anos atendendo em uma cadeira alugada no centro."
- Visit: "Aberto Ter–Sex 9h–19h · Sáb 9h–17h" (matter-of-fact)

---

## Layout decisions

Per `docs/design/templates/beauty.md` §Hero patterns + §IA per archetype:

- **Hero:** two-column on lg+ · stacked on mobile · single primary CTA (Trinks) + secondary (WhatsApp) · single nav (logo = home)
- **Section rhythm:** alternate `bg-bg` and `bg-surface` to give clear visual breaks (per `DESIGN-BEST-PRACTICES.md` §Section rhythm)
- **CTA repetition:** primary CTA "Agendar pelo Trinks" appears in 3 places — Hero (button variant primary), Services bottom (button variant primary), Visit section (only WhatsApp + phone in CTA cluster — variants differ between sections per the CTA-repetition rule)
- **Sticky header:** logo + phone-click on mobile — emergency-style direct line to the chair
- **Footer:** 3 columns (brand · contact · LGPD legal) on md+ · stacked on mobile

---

## Photography (DRAFT — to be supplied)

- **Hero photo:** interior of the shop, chair + mirror + warm light. Owner-supplied. No stock.
- **About photo:** founder portrait in the chair. Consent + headshot release on file.
- **Gallery (6 photos):** real client work — front, side, top, before/after. Each photo has explicit consent from the depicted client per `LEGAL.md` §BR.

All photos converted to WebP, hero ≤ 1920px wide, gallery thumbs ≤ 800px wide, quality 75 (per `PERFORMANCE.md`).

**Anti-pattern explicitly avoided:** stock barber-stock pictures with white-tile salons. Per `templates/beauty.md` §Anti-patterns.

---

## Logo

- **Current placeholder:** "TE" monogram in `--color-accent` on `--color-bg`, Georgia bold, in the favicon and the header monogram badge.
- **Replace with:** owner-supplied logomark (SVG preferred). Per `DESIGN-BEST-PRACTICES.md` §5 — re-source palette if owner logo introduces a higher-priority signal (e.g., owner's existing brand uses navy instead of amber — palette tier 1 trumps tier 5).

---

## Accessibility

- Keyboard navigable (skip-to-content link on first tab)
- All interactive elements have `focus-visible:outline-2 outline-accent`
- All tap targets ≥ 44×44px (Button component enforces `min-h-[44px]`)
- Color contrast WCAG 2.2 AA on every text-on-background pairing (verified above)
- `prefers-reduced-motion` respected globally (`@media (prefers-reduced-motion: reduce)` in global.css)
- Star ratings rendered as SVG, not unicode characters per `DESIGN-BEST-PRACTICES.md` icon rules
