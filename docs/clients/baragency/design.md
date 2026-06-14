# BAR Agency — design.md

**Project:** agency-self marketing site
**Vertical:** professional-services (agency / studio)
**Closest template fit:** `docs/design/templates/professional-services.md` Archetype A (single-operator studio).

> **Current register: "Berlin night" (dark) — redesign 2026-06-13.** The site was re-skinned from the original Apple-light register to a dark, cinematic "Berlin night" look (ported from `redesign/index.html` v1). **The current live marketing register is documented in the "Redesign — 'Berlin night'" section directly below this banner** (dark palette, WebGL aurora hero, GSAP motion: word-split / count-up / magnetic / cursor-glow). **Every section *after* that — Palette decision, Typography, Spacing, Motion, Composition, the hero/photography decisions — documents the *original* Apple-light register**, which is now only (a) the **light baseline used on legal/print pages** and (b) a historical record; "Berlin night" supersedes those wherever they conflict. *(Redesign committed `6b79b92`+`5e253df` and deployed 2026-06-14 to `bar-agency.vercel.app`, noindex.)*

## Redesign — "Berlin night" register (2026-06-13)

Re-skin of the live multi-page site to a dark register; UI/UX only, no content/route/schema changes. Delivered token-first; legal pages stay light.

**Theme delivery — scoped, not a hard flip.** The light tokens remain the default `@theme`; a `.theme-night` override block in `tokens.css` redefines the colour custom properties for the dark register. `BaseLayout` applies the class to `<body>` via a `theme?: 'light'|'night'` prop **auto-derived from the route** (`/privacy`, `/imprint`, `/contract` → light; everything else → night; explicit prop wins). So legal-page lightness is structural — a forgotten prop on a future legal page still resolves light. Marketing pages flip automatically because every component consumes the tokens.

**Night palette (`.theme-night`)** — AA-verified per `COLOR.md §6`:

| Token | Hex | Role | Contrast |
|---|---|---|---|
| `--color-bg` | `#060b14` | deep-night base | — |
| `--color-surface` | `#0c1a2b` | favicon-blue raised surface | — |
| `--color-surface-elev` | `#0e1c2f` | cards | — |
| `--color-text` | `#f4f6fa` | primary | ~17:1 on bg |
| `--color-text-muted` | `#93a3ba` | secondary | ~6.9:1 (AA) |
| `--color-text-subtle` | `#7c8ba1` | small print | ~5.2:1 (AA) |
| `--color-accent` | `#0071e3` | CTA fill (unchanged) | white-on-it 4.6:1 (AA) |
| `--color-accent-deep` | `#0058b8` | CTA hover (darken) | white-on-it 7.3:1 |
| `--color-accent-light` | `#7cc0ff` | lightest accent text on dark | ~9:1 |
| `--color-accent-on-surface` | `#7cc0ff` | **NEW** semantic token — accent **text** on the page bg (eyebrows/links/icons) | ~9:1 |
| `--color-border` | `#1b2940` | hairline | — |
| `--color-inverted-bg/surface` | `#03070e` / `#0c1a2b` | deepest bands | — |

**Key colour decision — accent split.** The codebase overloaded `accent-deep` for *both* CTA-hover-fill *and* accent text on bg. On dark these diverge (a hover fill must stay dark so white text holds AA; accent *text* on near-black must be light). Resolution: `accent-deep` stays dark (CTA hover); a new **`--color-accent-on-surface`** carries accent text (light `#0058b8`, night `#7cc0ff`). All `text-accent-deep` text/icon usages were migrated to it; CTA `hover:bg-accent-deep` untouched.

**CTAs.** Every CTA normalised to `bg-accent text-white hover:bg-accent-deep` (all 4 states AA). Pricing hierarchy (v1): popular tier filled; secondary tiers **ghost** (`border-text-muted/60`, 3.24:1 border ≥ WCAG 1.4.11).

**Typography.** Inter Variable retained (self-hosted). Marketing-hero headlines use a CSS word-split entrance; the editorial type scale is unchanged. DE/PT-BR home section headings drop to `text-3xl` on mobile so long German compounds ("branchenübergreifend") don't overflow (`hyphens:auto` + `overflow-wrap:break-word` on all headings as a safety net).

**Hero + motion.** Every marketing hero keeps its photo + veil and layers a **WebGL aurora** (`HeroAurora.astro` + a raw-shader/GSAP island `src/scripts/motion.ts`) at ~0.55 painted opacity (photo + aurora both visible). Motion: word-split entrance, count-up numbers (PromiseStrip), magnetic hero CTAs, service-card cursor-glow. **All gated** — no-JS / failed-GSAP / `prefers-reduced-motion` / no-WebGL all degrade to the static photo + visible content. LCP stays the hero photo (canvas never steals it). GSAP via `pnpm` (lazy, marketing-hero-CTA pages only).

**Chrome.** Glass nav + accent logo dot + nav-link hover underline. Header desktop-nav threshold moved `md`→`lg` (hamburger up to 1024) so the nav + CTA + locale don't overflow at 768. Footer **unchanged** (inherits dark tokens). `noindex` held.

## Palette decision

**Family:** monochromatic-cool with a single saturated accent (per `COLOR.md §3` harmony framework).
**Portfolio-diversity gate:** ΔE76 ≥ 15 against all 7 existing demos. PASSES — none of the other clients use Apple's near-white-cool base.

| Token | Hex | Role | Contrast vs `--color-bg` |
|---|---|---|---|
| `--color-bg` | `#fbfbfd` | 60 % — near-white cool (Apple #fbfbfd verbatim) | — |
| `--color-surface` | `#f5f5f7` | card-back gray (Apple #f5f5f7) | — |
| `--color-surface-elev` | `#ffffff` | hero-contrast cards | — |
| `--color-text` | `#1d1d1f` | 30 % — Apple near-black | 17.4 : 1 (AAA) |
| `--color-text-muted` | `#6e6e73` | secondary copy | 5.34 : 1 (AA pass) |
| `--color-text-subtle` | `#86868b` | small print only | 3.86 : 1 (AA-large only — usage gated to text-xs) |
| `--color-accent` | `#0071e3` | 10 % — Apple blue, CTAs only | 4.51 : 1 vs white (AA) |
| `--color-accent-deep` | `#0058b8` | hover state | 7.31 : 1 (AAA) |
| `--color-border` | `#d2d2d7` | Apple 1-px divider | — |
| `--color-inverted-bg` | `#000000` | dark "product tile" sections at home CTA + /services overview | 21 : 1 vs inverted-text |
| `--color-inverted-text` | `#f5f5f7` | text inside inverted sections | — |

**60-30-10 verification:**
- 60 % near-white bg on every viewport
- 30 % near-black text (h1/h2/h3) + surface gray cards
- 10 % Apple blue confined to: eyebrow text, primary-CTA-pill background, focus-visible outline, link hover

**Anti-pattern check vs `COLOR.md §6`:**
- ❌ Cream/bone default: N/A — near-white #fbfbfd has a cool blue undertone, not cream
- ❌ Too many brand tokens: 5 brand tokens (bg, text, accent + 2 mutes) — within the §2 cap
- ❌ Hover lighter than base: `accent-deep` is darker than `accent`, never lighter
- ❌ CTA contrast hover state: verified Bg-text (#1d1d1f) → Bg-accent-deep (#0058b8) keeps the bone text at ≥ 4.5 : 1 in both states
- ❌ `text-muted/N%` opacity multipliers: NONE used (lessons learned from bonsai audit W2)

## Typography decision

**Family:** Inter Variable (one family handles both display + body via the opsz axis — like Apple's SF Pro Display + SF Pro Text).
**Self-hosted:** `@fontsource-variable/inter` per `PERFORMANCE.md §6`.

| Role | Stack | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Display (h1 / hero) | `Inter Variable, ui-sans-serif, system-ui, -apple-system, 'SF Pro Display', sans-serif` | 600 (Apple SemiBold) | -0.022em | 1.07 |
| Body | `Inter Variable, ui-sans-serif, system-ui, -apple-system, 'SF Pro Text', 'Segoe UI', Roboto, sans-serif` | 400 / 500 | -0.005em | 1.5 - 1.65 |
| Mono | `ui-monospace, 'SF Mono', Menlo, monospace` | — | — | — |

**Distinct from prior demos:** zero other demo uses sans-serif-display + sans-serif-body. Bonsai uses Cormorant Garamond serif display; lawyer uses different serif; the agency stands apart.

## Spacing decision

**Vertical rhythm:**
- `--spacing-section: 8rem` desktop / `4rem` mobile — Apple-generous
- Container max-width 1280 px
- Hero top-padding deliberately tightened from `py-32/44/56` to `pt-12 pb-24 / sm:pt-16 pb-32 / lg:pt-20 pb-40` (revised 2026-05-27 per user feedback — "breath space was too much")

**Radii (Apple-soft):**
- `--radius-sm: 6px`
- `--radius-md: 12px`
- `--radius-lg: 22px` ← Apple iOS card radius for all featured cards + portfolio tiles
- `--radius-full: 9999px` for CTA pills

## Motion decision

**Apple-restrained:** slow + considered transitions, never bouncy or playful.

- `--motion-warm: 500ms` (image hover scale)
- `--motion-deliberate: 600ms` (color transitions)
- `--motion-reveal: 800ms` (scroll-rise on hero title lines + service tiles + portfolio cards)

**Reveal-on-scroll** uses `animation-timeline: view()` (CSS-only, modern browsers). Fallback: content visible immediately on Firefox / older browsers. Reduced-motion: animation duration clamped to 0.01ms via the global `@media (prefers-reduced-motion: reduce)` rule.

## Composition decision (per `DESIGN-BEST-PRACTICES.md §6.5` section-variation gate)

**Home composition** (top-to-bottom) — expanded 2026-06-04 by the inbound-funnel sprint (items in **bold** are new):
1. Apple-centered hero (eyebrow + 2-line big h1 + 1-line subtitle + 2 CTA pills, on subtle radial gradient)
2. Stat strip (3 numbers: 10 projects shipped · 6 verticals · 4 languages — tabular)
3. **PromiseStrip (F5)** — 4 measurable-commitment cards on `bg-surface` (DRAFT numbers)
4. Services section (4-up alternating-dark tile grid with "Service · NN" eyebrow)
5. Portfolio sampler (3 featured cards with hero image + vertical + name + 2-line description)
6. **ReviewsWall (F7)** — 3 quote cards (DRAFT example reviews, visibly labelled)
7. **TrustBadgeRow (F7)** — dark capability-claim strip (DSGVO / Berlin / WCAG / ownership)
8. About teaser (2-column: heading + 2-paragraph ethos)
9. **FAQ (F6)** — `<details>` accordion on `bg-surface` + FAQPage schema
10. Inverted CTA (pure-black bg with "Let's build yours." + single pill CTA)

The original 6-section composition was **distinct from the universal-9 default and every existing demo** (verified 2026-05-27). The 2026-06-04 expansion keeps the light/dark rhythm and stays off the universal-9 ordering. New funnel pages (`/pricing`, `/website-check`, `/tools/*`, German `/webdesign-berlin/*`) reuse these section components — see per-client `CLAUDE.md`.

## Per-vertical alignment notes

Closest template: `docs/design/templates/professional-services.md` Archetype A.

| Convention | Our approach | Justified deviation |
|---|---|---|
| Hero photograph of founder/team | None — single-color background + typography hero | Apple-style; agency voice is product, not personal |
| Service-pricing table | ~~Omitted~~ → **added 2026-06-04** (`/pricing`, hybrid packages, DRAFT figures) | Stance reversed by the inbound-funnel sprint; see BRIEF.md |
| Testimonials / client logos | Stat strip in v1; **ReviewsWall added 2026-06-04** with DRAFT example quotes | Still honours "no invented testimonials" — the examples are visibly labelled DRAFT and must be swapped for real Google reviews before indexing (BRIEF.md #9) |
| Case-study deep-dive | Yes — 9 case-study pages | Aligns with the template's recommendation |
| Calendly / appointment booking | Omitted | Contact form preferred — founder retains qualifying control |

## Photography decision

**Sourced from:** thum.io free screenshot API (`image.thum.io/get/width/1600/wait/3/<url>`). Each portfolio entry shows a 16:10 crop of the live site's hero region.

**Optimization:** sharp-cli at `scripts/optimize-portfolio.mjs` — 1600×1000 WebP at q=78. 9 entries × ~50 KB each = ~441 KB total (well under `PERFORMANCE.md §1` page-weight budget).

**No founder/studio photography** ships in v1. Hero on /about is pure typography. If a real founder portrait is added later, it would replace the about-page typography hero in a future revision.

## OG image

✅ **Done 2026-06-09:** `og-default.png` is now a 1200 × 630 BAR Agency card — "Websites that bring you customers." + "BAR Agency" wordmark + "WEB DESIGN · SEO · BERLIN" eyebrow on the blackish-blue (`#0c1a2b`) brand background with an Apple-blue accent bar (matches the new favicon). Replaced the scaffold placeholder.
- Optionally (still open): per-locale OG variants (`og-de.png`, `og-pt-br.png`) with translated headline, or dynamic `@vercel/og` per-page cards.

## Accessibility verification (WCAG 2.2 AA)

| Element | Computed contrast | Result |
|---|---|---|
| Body text on bg | 17.4 : 1 | AAA |
| `text-muted` on bg | 5.34 : 1 | AA pass |
| `text-subtle` on bg (text-xs only) | 3.86 : 1 | AA-large (intentional small-print downgrade) |
| Accent CTA fill (white on `accent`) | 4.51 : 1 | AA pass |
| Accent CTA hover (white on `accent-deep`) | 7.31 : 1 | AAA |
| Inverted-bg sections (light text on black) | 21 : 1 | AAA |
| Focus-visible outline | 2-px solid accent w/ 3-px offset | Visible across all backgrounds |

All interactive elements ≥ 44 × 44 px touch target (CTA pills `min-h-[52px]`; form inputs `min-h-[48px]`).
Mobile menu has `aria-expanded` + `aria-controls` + animated icon-swap. Locale switcher has `role=menu` + `aria-haspopup` + `aria-current` on the active locale.
