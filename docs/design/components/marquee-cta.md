# Marquee-on-hover CTA

**Source:** `docs/audit/ui-ux-reference-study.md` §6 (Auwa, live-measured + Phase 1b motion read fully decoding the implementation).
**Implementation:** `clients/reference-solo-barber/src/components/ui/MarqueeCTA.astro` (Phase 3b — pending).

## 1. Purpose + when to use

A button whose label *appears to repeat itself* on hover. Three coordinated transitions, all sharing the same duration (500 ms) and easing curve (`cubic-bezier(0.7, 0, 0.3, 1)`):

1. **Outer button:** text color shifts from rest to hover
2. **Background fill layer:** `transform: scaleY(0)` at rest, `transform-origin: bottom` → on hover, `scaleY(1)` (background slides up from the bottom of the button)
3. **Inner label column:** contains two stacked copies of the label → on hover, the column `translateY(-100%)` (the visible label slides out the top; the duplicate slides in from below)

The visitor sees the same word — but reads it as a tiny *motion event*. **Costs ~10 lines of CSS, registers as luxury polish.**

**Per-vertical surfaces:**

| Vertical | When to reach for it |
|---|---|
| boutique gastronomy | a single "wow" CTA on the hero (e.g., `EXPLORE MENU`) — at most one per page |
| beauty (premium) | salon "BOOK" or "VIEW SERVICES" CTAs |
| wellness | "OUR STORY" or "JOIN" anchor in the hero |
| artisan / craft | "VIEW COLLECTION" or "SHOP" |
| agency-self | "GET IN TOUCH" or "VIEW WORK" — the closing CTA |

**When NOT to use:**
- For functional CTAs that need to be the most efficient possible action (`Call now`, `Get directions`) — the marquee animation adds 500ms of intent-to-action time. Reserve it for *exploratory* CTAs, not *transactional* ones.
- More than once per page — the move loses its punch by the second use.
- On touch-only contexts — there is no hover state. Provide a tap-state fallback (a brief 200ms flash of the same color shift) so mobile users get *something* on press.

## 2. HTML / accessibility structure

```html
<a href="/menu" class="mqc-cta" aria-label="View the menu">
  <span class="mqc-fill" aria-hidden="true"></span>
  <span class="mqc-labels">
    <span class="mqc-label">VIEW MENU</span>
    <span class="mqc-label" aria-hidden="true">VIEW MENU</span>
  </span>
</a>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA + §Reduced motion):**

- **The duplicate label must be `aria-hidden="true"`** — screen readers should announce "VIEW MENU" once, not twice.
- **The fill layer must be `aria-hidden="true"`** — purely decorative.
- **`prefers-reduced-motion: reduce` MUST disable both transitions.** When reduced-motion is on, the hover state should be a flat color swap with no transforms. See `DESIGN-BEST-PRACTICES.md` §8 — "`prefers-reduced-motion` is mandatory, not optional."
- **Contrast** must pass AA against *both* the rest background and the hover-fill background. Verify both states with a contrast checker. Common failure mode: the rest state passes 4.5:1 but the hover state (after fill slides in) drops below AA.
- **Focus state must be a separate visible indicator** — the hover transforms are *not* a focus state for keyboard users. Use a focus ring per `DESIGN-BEST-PRACTICES.md` §7.

## 3. CSS spec (measured from Auwa §6 Phase 1b motion read)

```css
.mqc-cta {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;             /* clips the marquee */
  padding: 12px 24px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text-warm);
  border: 1px solid var(--color-text-warm);
  background: transparent;
  transition:
    color var(--motion-warm) var(--ease-quart),
    border-color var(--motion-warm) var(--ease-quart);
}

.mqc-fill {
  position: absolute;
  inset: 0;
  background: var(--color-text-warm);   /* the dark "sumi" fill */
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform var(--motion-warm) var(--ease-quart);
  z-index: 0;
}

.mqc-labels {
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transition: transform var(--motion-warm) var(--ease-quart);
}

.mqc-cta:hover {
  color: var(--color-bg-cream);          /* light text on the dark fill */
  border-color: var(--color-text-warm);
}
.mqc-cta:hover .mqc-fill { transform: scaleY(1); }
.mqc-cta:hover .mqc-labels { transform: translateY(-100%); }

@media (prefers-reduced-motion: reduce) {
  .mqc-cta, .mqc-fill, .mqc-labels { transition: none; }
  .mqc-cta:hover .mqc-fill { transform: none; }
  .mqc-cta:hover .mqc-labels { transform: none; }
  .mqc-cta:hover { background: var(--color-text-warm); color: var(--color-bg-cream); }
}

.mqc-cta:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Why exactly 500ms with `cubic-bezier(0.7, 0, 0.3, 1)`:**
- All three transitions complete *at the same moment*, producing one unified "the link acknowledged me" event rather than three separable animations. This synchronization is what makes the move feel polished rather than busy.
- `cubic-bezier(0.7, 0, 0.3, 1)` is the symmetric "quart in/out" curve — accelerates and decelerates equally. Auwa picked it deliberately; substituting `ease`, `ease-in-out`, or Apple's `cubic-bezier(0.4, 0, 0.6, 1)` makes the move feel cheaper. **Use `--ease-quart` from TECH.md §7.**

## 4. Required CSS custom properties

```css
:root {
  --color-text-warm: #2B1A12;       /* or per-brand dark accent */
  --color-bg-cream: #FBF8F3;        /* the contrasting light color */
  --motion-warm: 500ms;
  --ease-quart: cubic-bezier(0.7, 0, 0.3, 1);
}
```

**Drop-in minimal CSS** (defines tokens inline; use when copying into a scaffold without `tokens.css`):

```css
.mqc-cta {
  --color-text-warm: #2B1A12;
  --color-bg-cream: #FBF8F3;
  --motion-warm: 500ms;
  --ease-quart: cubic-bezier(0.7, 0, 0.3, 1);
  /* …then the rules from §3 above */
}
```

## 5. Performance constraints

- **No JS required.** Pure CSS — adds 0 bytes to the JS bundle.
- **GPU-composited only:** the component animates `transform` and `color` / `background` — never `width`, `height`, `top`, `left`. Per `PERFORMANCE.md` §7.
- **Multiple instances on one page are fine** — each button's transitions are independent and only run on hover (not on load), so there's no idle-time CPU cost.

## 6. Reference sites

| Site | Study § | Notes |
|---|---|---|
| Auwa | §6 | Canonical reference. All three layers decoded via Phase 1b runtime probe. |

**Related but different patterns:**
- "Letter-flip" CTAs (per-character translateY) — these are noticeably different in look (each letter animates independently rather than the label as a block). The per-character split pattern lives in `per-character-split.md`.

## 7. UI_REVIEW.md cross-link

When auditing a boutique / artisan / agency client with flat, no-state-feedback CTAs:

> *"Issue #N — primary CTAs lack hover polish: adopt the marquee-on-hover CTA per `docs/design/components/marquee-cta.md` for the hero CTA. Reserve for ONE exploratory CTA per page; not for `tel:` or `Call now`-style transactional CTAs."*

## 8. Implementation pointer

**Phase 3b deliverable:** `clients/reference-solo-barber/src/components/ui/MarqueeCTA.astro`

Props (planned):
- `href: string` (required)
- `label: string` (required) — single label string; component duplicates it internally
- `ariaLabel: string` (required) — full screen-reader description
- `variant?: 'dark-fill' | 'light-fill'` (default `'dark-fill'`) — direction of the color invert on hover

The `_demo/marquee-cta.astro` page will render the CTA in solo-barber dark+amber AND in the inverted color (cream+coffee for hospitality contexts), plus a `prefers-reduced-motion` test toggle.
