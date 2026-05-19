# Eyebrow-h1 + display-paragraph hero

**Source:** `docs/audit/ui-ux-reference-study.md` §6 (Auwa), §16 (Lesse), §18 (Juan Mora) — measured across 3 sites.
**Implementation:** `clients/reference-solo-barber/src/components/sections/EyebrowDisplayHero.astro` (Phase 3b — pending).

> ⚠️ **HARD RESTRICTION — read before adopting.** This component is **forbidden for local-business clients** per `DESIGN-BEST-PRACTICES.md` §4 (inverted-h1 restriction) and `SEO.md` §15 (Tech SEO anti-patterns). Permitted ONLY when SEO is explicitly deprioritized in `BRIEF.md` — portfolio sites, agency-self pages, referral-only luxury. For any gastronomy / beauty / trades / health / studio / pro-services / pets / automotive / education / events-hospitality / home-garden / artisan client whose acquisition includes organic search — **do not use this component.** Use the standard hero (`DESIGN-BEST-PRACTICES.md` §7) instead.

## 1. Purpose + when to use

A hero pattern that inverts conventional hierarchy: the `h1` is a tiny 12-15px tracked-uppercase **eyebrow label**, and the *visual* hero is a 32-60px paragraph or h2. Reads as "considered editorial" — the page lets a *sentence* land first, not a banner.

The SEO trade-off is real: the `h1` is the most-indexed element on the page; reducing it to an eyebrow hands away the primary keyword target. **The pattern works for sites whose acquisition is *referral* (portfolio, agency-self, by-invitation luxury), not *search*.**

**Permitted surfaces:**

| Surface | Why it works here |
|---|---|
| Agency-self landing | The agency's brand voice IS the value prop — a 32px paragraph carries it better than a banner headline |
| Solo-practitioner portfolio (designer, illustrator, casting director, photographer) | The portfolio's audience arrives via referral — no SEO loss |
| Luxury / invite-only brand (private members, by-appointment) | These brands explicitly deprioritize search |

**When NOT to use** — every other case in the agency's 12 verticals. The local-business h1 must be the visually primary headline AND carry the keyword (`Friseur Mitte`, `Café Kreuzberg`).

## 2. HTML / accessibility structure

```html
<section class="edh-hero">
  <h1 class="edh-eyebrow">JAPANESE PHILOSOPHY OF KOKORO</h1>
  <p class="edh-display">
    Auwa: a character, a philosophy, a world. Built on the ancient idea
    that a life force, or Kokoro (心), lives in every quiet, ordinary thing.
  </p>
</section>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **The `h1` is small but must still pass contrast** — at 12px the AA floor is 4.5:1 (small text). Auwa runs `oklab(0.1 ... / 0.45)` which is ~5:1 against its cream bg; verify per-client.
- **`+1.92px letter-spacing` is at the WCAG 2.2 SC 1.4.12 threshold** (≥ 0.12× of font size). At 12px font, 1.92px = 0.16× — passes. Don't tighten below `+0.12em` or the rule breaks.
- **The display paragraph is `<p>`, not `<h2>`** — semantically a paragraph, even though visually larger. Avoid creating a fake heading the page doesn't need.
- **Reduced motion:** if any entrance animation is applied to the eyebrow or paragraph, wrap in `@media (prefers-reduced-motion: no-preference)`.

## 3. CSS spec (measured across 3 sites)

```css
.edh-hero {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-block: clamp(4rem, 8vw, 8rem);
}

.edh-eyebrow {
  font-family: var(--font-body);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 1.92px;        /* +0.16em — the measured Auwa value */
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin: 0;
}

.edh-display {
  font-family: var(--font-display);
  font-size: clamp(22px, 4vw, 32px);
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: var(--tracking-body);
  color: var(--color-text);
  margin: 0;
  max-width: 22ch;               /* short — the paragraph IS the hero, not long-form */
}
```

**Why these values:**
- `12px / +1.92px tracking / uppercase` is the *measured* eyebrow value across all 3 sites. Smaller becomes illegible; larger competes with the display paragraph.
- The display paragraph is **clamped between 22px and 32px** with fluid scaling — works on mobile (22px) and desktop (32px) without an explicit media query.
- `max-width: 22ch` keeps the paragraph short. The pattern collapses if the paragraph is more than 3 lines — the visual "lead" needs to be brief.

## 4. Required CSS custom properties

```css
:root {
  --font-display: 'EB Garamond', Georgia, serif;
  --font-body: 'Instrument Sans', system-ui, sans-serif;
  --color-text: #2B1A12;
  --color-text-muted: #6b6560;
  --tracking-body: -0.005em;
}
```

## 5. Performance constraints

- **No JS required.** Pure HTML + CSS.
- **Display font load:** the pattern depends on a characterful serif (EB Garamond, Cormorant, Fraunces) — if not already in the project's font set, that's ~80-120 KB woff2 for one weight. Acceptable; mandatory `font-display: swap`.

## 6. Reference sites

| Site | Study § | Eyebrow spec | Display spec |
|---|---|---|---|
| Auwa | §6 | 12px / +1.92px / uppercase | 32px serif paragraph |
| Lesse Studio | §16 | 14.4px / uppercase eyebrow + h1 missing | 43.2px DMSans paragraph |
| Juan Mora | §18 | 32px peach h1 (variant — not strictly inverted, but small relative to h2's 57.6px) | 57.6px Goga h2 |

**Pattern confirmed across 3 independent sites.** Each one breaks the conventional hierarchy in the same direction.

## 7. UI_REVIEW.md cross-link

When auditing an agency-self or portfolio site that lacks visual restraint:

> *"Issue #N — hero competes with itself (banner h1 + tagline + CTA stacked): consider the eyebrow-h1 + display-paragraph hero per `docs/design/components/eyebrow-display-hero.md`. Note the hard SEO restriction — only applicable for portfolio / agency-self / referral-only contexts."*

When auditing a local-business client that has adopted this pattern:

> *"Issue #N — eyebrow-h1 pattern in use; this is FORBIDDEN for local-business clients per `SEO.md` §15 Tech SEO anti-patterns. The h1 must carry the primary SEO keyword visually. Rewrite the hero with a proper banner h1 (`Friseur Mitte`, `Café Kreuzberg`, etc.) before launch."*

## 8. Implementation pointer

**Phase 3b deliverable:** `clients/reference-solo-barber/src/components/sections/EyebrowDisplayHero.astro`

Props (planned):
- `eyebrow: string` (required) — will be uppercased; cap at 30 characters
- `display: string` (required) — short paragraph, recommended 1-3 lines
- `seoNote?: string` (optional but recommended) — a freeform string the dev confirms why the SEO restriction doesn't apply for this client (e.g., `"portfolio site, no organic-search acquisition per BRIEF.md"`)

The component will emit a build-time warning if `seoNote` is empty. The `_demo/eyebrow-display-hero.astro` page will demonstrate the pattern in the solo-barber identity AND in the cream-and-coffee identity, with a banner clearly marking it as portfolio-only.
