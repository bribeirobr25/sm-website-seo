# Per-character DOM split (letter animation primitive)

**Source:** `docs/audit/ui-ux-reference-study.md` §7 (Really Up There — Brandon Herbel's portfolio with each nav letter split into individual `<div>`s, GSAP 3.15 loaded), §21 (Victor Furuya — h1 split per-letter with variable-font weight 650).
**Implementation:** `clients/reference-solo-barber/src/components/ui/SplitText.astro` (Phase 3b — pending).

## 1. Purpose + when to use

A typographic primitive that breaks a word or short phrase into one DOM element per character, enabling letter-level animations (stagger fade-in, hover scramble, scroll-driven weight shift, individual letter scale). Without the per-character split, you can only animate the *whole word*; with it, you unlock per-letter motion.

**Per-vertical surfaces:**

| Surface | Why it fits |
|---|---|
| Solo / artisan portfolio | The letterforms ARE the brand mark — letter animations are appropriate |
| Agency-self landing | The brand wordmark animating on hover signals "we sweat the details" |
| Boutique fashion / casting / creative-industries | The portfolio aesthetic uses type as art |

**When NOT to use:**
- For any local-business client (gastronomy, beauty, health, etc.). The split is a portfolio aesthetic; on a Friseur or Café it reads as misplaced design vanity.
- For long phrases (> 12 characters). The DOM bloat starts costing more than the visual payoff.
- For body or paragraph text — only for short display headlines or wordmarks.

## 2. HTML / accessibility structure

The single most important rule: **the split is purely presentational; the original string must remain readable, selectable, and announceable as one word.**

```html
<h1 class="spc-text" aria-label="WORK">
  <span aria-hidden="true">W</span>
  <span aria-hidden="true">O</span>
  <span aria-hidden="true">R</span>
  <span aria-hidden="true">K</span>
</h1>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`aria-label` on the parent must contain the un-split string.** Without it, screen readers read each `<span>` as a separate utterance: "W. O. R. K." instead of "Work."
- **`aria-hidden="true"` on each character `<span>`** — confirms to assistive tech that the visual letters are decorative.
- **Copy-paste behavior:** browsers preserve text selection across the spans (selecting "WORK" copies "WORK"). Verify in Chrome + Safari + Firefox; some older builds need a `user-select: text` declaration on the container.
- **Reduced motion:** any animation attached to the split MUST respect `prefers-reduced-motion: reduce`. The split itself is static markup — reduced-motion users see the same word, just without the animation. The component degrades gracefully.

## 3. CSS spec

The split itself ships ZERO motion CSS by default — it's a *primitive* on top of which specific animations are layered. The CSS below is the structural baseline:

```css
.spc-text {
  display: inline-flex;
  flex-wrap: nowrap;
  /* Preserve normal selection behavior */
  user-select: text;
  -webkit-user-select: text;
  /* Letters track using the parent's letter-spacing; no per-span override */
  letter-spacing: inherit;
}

.spc-text > span {
  display: inline-block;
  /* GPU-prep — set once at the split, NOT in the animation */
  will-change: transform;
  /* Each letter inherits its own baseline */
  vertical-align: baseline;
}
```

**Layered animation example — stagger fade-in on scroll** (CSS-only, no GSAP):

```css
@media (prefers-reduced-motion: no-preference) {
  .spc-text > span {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity var(--motion-base) var(--ease-apple-smooth),
                transform var(--motion-base) var(--ease-apple-smooth);
  }
  .spc-text.is-visible > span {
    opacity: 1;
    transform: translateY(0);
  }
  /* The 20ms inter-letter stagger — Apple's measured house rule */
  .spc-text.is-visible > span:nth-child(1) { transition-delay: 0ms; }
  .spc-text.is-visible > span:nth-child(2) { transition-delay: 20ms; }
  .spc-text.is-visible > span:nth-child(3) { transition-delay: 40ms; }
  .spc-text.is-visible > span:nth-child(4) { transition-delay: 60ms; }
  /* … and so on; in practice generate this via CSS custom property or JS */
}
```

**Layered animation example — hover scale per letter:**

```css
@media (prefers-reduced-motion: no-preference) {
  .spc-text > span {
    transition: transform var(--motion-fast) var(--ease-expo-out);
  }
  .spc-text > span:hover {
    transform: scale(1.1);
  }
}
```

**Why `will-change: transform` is set at the split, not in the animation:**
GSAP's pattern (measured in Really Up There §7) is to set `will-change` *once at element registration*, so the GPU promotes the letter to its own layer before any animation begins. This is correct — `will-change` set during a transition is too late; the first frame of the animation is then synchronous.

## 4. Required CSS custom properties

```css
:root {
  --motion-fast: 180ms;
  --motion-base: 320ms;
  --ease-apple-smooth: cubic-bezier(0.4, 0, 0.6, 1);
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);
  --stagger-step: 20ms;
}
```

## 5. Performance constraints

- **DOM bloat:** a 4-letter split adds 4 `<span>` elements. A 12-letter split adds 12. For one or two display elements per page, this is irrelevant; for ten splits on one page, it's measurable. **Cap at ≤ 3 per page.**
- **`will-change: transform` is opt-in per element** — the GPU promotes each promoted element to its own layer (≈ 2-4 MB of GPU memory each). At scale this is wasteful; using it on the same 3 split elements consistently keeps the budget bounded.
- **Avoid splitting body text or long paragraphs.** The pattern is for display headlines (h1 / wordmark) only.

## 6. Reference sites

| Site | Study § | Use case |
|---|---|---|
| Really Up There (Brandon Herbel) | §7 | 144px nav letters: W / O / R / K split + GSAP 3.15 driving the animation |
| Victor Furuya | §21 | h1 "Make It Last" split per character + variable-font weight transitions |

Both portfolios. Confirms the pattern is reserved for the creative-industries / agency-self register.

## 7. UI_REVIEW.md cross-link

When auditing a portfolio / agency-self site that wants letter-level interactivity:

> *"Issue #N — wordmark / hero headline could benefit from letter-level motion: adopt the per-character DOM split primitive per `docs/design/components/per-character-split.md`. The split is the structural prerequisite; layer specific animations on top per the §3 CSS examples. Apply to ≤ 3 elements on the page."*

When auditing a local-business client that has adopted this pattern:

> *"Issue #N — per-character DOM split applied to a local-business hero: remove. The pattern is reserved for portfolio / agency-self / creative-industries per `docs/design/components/per-character-split.md` §1. On a Friseur / Café / Werkstatt page it reads as misplaced design vanity. Replace with a flat display headline."*

## 8. Implementation pointer

**Phase 3b deliverable:** `clients/reference-solo-barber/src/components/ui/SplitText.astro`

Props (planned):
- `text: string` (required) — the source string, kept intact in `aria-label`
- `as?: 'h1' | 'h2' | 'span' | 'div'` (default `'span'`) — the wrapping element
- `stagger?: boolean` (default `false`) — when `true`, applies the CSS-only stagger fade-in via `data-stagger` attribute + an IntersectionObserver script that toggles `.is-visible`

The component will not include GSAP by default. The CSS-only stagger covers the most common case; clients needing GSAP-specific effects (scramble, scroll-pinned letter rotation) can layer their own GSAP on top of the split primitive.

The `_demo/split-text.astro` page will demonstrate: (a) a static split with no animation, (b) the stagger-fade-in on scroll, (c) a hover scale-per-letter effect, (d) a `prefers-reduced-motion: reduce` toggle showing the graceful degradation.
