# ACCESSIBILITY.md — Web Accessibility Standards
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5) — universal core. WCAG 2.2 AA is the contract, not an audit step at the end. The focus-trap pattern in §4 activates from Type 3+ (when modals/dialogs appear); everything else is universal.

This is the agency-wide source of truth for accessibility. Every client site is held against the rules below.

Other standards docs reference this doc by name, never by section.

---

## Rules at a glance

- **Contract:** Every site ships WCAG 2.2 AA — 4.5:1 contrast for body text, 3:1 for large text and UI components.
- **Never apply opacity multipliers to already-muted text colors.** Drops contrast below the floor every time. Use a dedicated `--color-text-subtle` token instead.
- **Top contrast violation we ship:** footer secondary text with `/70` or `/80` opacity multipliers. Stop doing it.
- **Keyboard reachability is mandatory** for every interactive element. Visible focus ring required — never `outline: none` without a styled replacement.
- **Skip-to-main-content link** is mandatory on every multi-section page.
- **`prefers-reduced-motion` is honored.** Every animation gated behind `@media (prefers-reduced-motion: no-preference)` or `motion-safe:` Tailwind utility.
- **Modals trap focus** while open and return focus to the trigger on close.
- **One `<h1>` per page**, heading hierarchy never skips levels.
- **Touch targets ≥ 44×44 px** on mobile (`min-h-11 min-w-11` in Tailwind).
- **`lang` attribute** set on `<html>` for every locale (`de`, `en`, `pt`).
- **Every image has descriptive `alt`.** Decorative images: `alt=""`. The alt must match the actual content of the photo.

---

## Table of contents

1. [Required, not optional](#1-required-not-optional)
2. [Color and contrast](#2-color-and-contrast)
3. [Common contrast violations — where they hide](#3-common-contrast-violations--where-they-hide)
4. [Keyboard navigation](#4-keyboard-navigation)
5. [Semantic HTML and landmarks](#5-semantic-html-and-landmarks)
6. [Touch targets](#6-touch-targets)
7. [Language attribute](#7-language-attribute)
8. [Tools](#8-tools)

---

## 1. Required, not optional

Accessibility is part of the deliverable, not an audit item at the end. A build is not done until every rule below passes.

---

## 2. Color and contrast

Run every text/background color combination through a contrast checker before shipping.

- **Body text:** minimum 4.5:1 ratio
- **Large text** (≥ 24 px bold, ≥ 18 px regular): minimum 3:1 ratio
- **CTA buttons:** text-to-background minimum 4.5:1
- **UI components** (input borders, focus rings, icons that convey state): minimum 3:1 against adjacent colors

### The opacity-on-muted rule

**Never apply opacity multipliers to text colors that are already muted.** `text-[var(--color-text-muted)]/80` reads as "subtly subtler" in design intent but mathematically drops contrast below the WCAG AA 4.5:1 floor every time, because `--color-text-muted` is itself already calibrated to sit just above that floor.

If you genuinely need lower-emphasis text than the muted token provides, define a new dedicated `--color-text-subtle` token with a contrast-checked value — don't compose it from opacity. Lighthouse's accessibility audit catches this on every site that does it.

### Color-only status is forbidden

A button being red means nothing to a colorblind user without also having a label or icon. Color is reinforcement, never the sole signal.

---

## 3. Common contrast violations — where they hide

Ranked by how often Lighthouse catches them on our builds:

1. **Footer secondary text with opacity multipliers** — `text-[var(--color-text-muted)]/70` or `/80`. This is the single most common offender we ship.
2. **Tinted ribbon / pill backgrounds where the text uses the same hue as the background tint.** E.g. `bg-[var(--color-X)]/12` with `text-[var(--color-X)]`. The text must contrast against the *blended* result (background + tint over base bg), not against the raw token. Always check with a contrast tool, never eyeball.

   **Worked example — Porto dos Ribeiros "Aberto sem pausa" ribbon:**

   - Token values: `--color-open: #3f6b3a` (text + tint hue), `--color-bg: #f7f0e5` (page background)
   - Markup: `bg-[var(--color-open)]/12 text-[var(--color-open)]`
   - The browser composites the 12 % tint of `#3f6b3a` (RGB `63, 107, 58`) over `#f7f0e5` (RGB `247, 240, 229`):
     ```
     blended = bg * (1 - 0.12) + tint * 0.12
     blended.r = 247 * 0.88 + 63 * 0.12 = 217 + 8  = 225
     blended.g = 240 * 0.88 + 107 * 0.12 = 211 + 13 = 224
     blended.b = 229 * 0.88 + 58 * 0.12 = 202 + 7  = 209
     blended   = #e1e0d1  (pale warm sage)
     ```
   - Contrast ratio: `#3f6b3a` text on `#e1e0d1` blended bg = **3.93:1** — *fails* WCAG AA 4.5:1 for normal text
   - Fix options: (a) darken the text token to `#2e5028` → 5.6:1, (b) deepen the tint to 25 % so the bg becomes `#c3cdb8` and the original text passes, (c) drop the tint entirely and use a solid `--color-open-tint` token sized to pass

   The math is mechanical once you know it. Use [contrast-ratio.com](https://contrast-ratio.com/) or browser DevTools' contrast picker — both compute blended colors when you click on the rendered element.
3. **Eyebrow / kicker text in `--color-text-muted`** on cream backgrounds when the muted token is calibrated just above the 4.5:1 floor. Border-line passes are fragile — they fail on slightly different background contexts. Either keep the muted token at 5.5:1+ or use a darker shade for kickers.
4. **CTA hover/active states that fade the accent color.** The base color passes; the faded hover doesn't. Test all four states (base, hover, active, focus).
5. **Tab-bar or filter-pill inactive items** in muted colors over a tinted background — the inactive state often falls below 3:1 even for "large text" purposes.
6. **Disabled buttons** that drop opacity below the contrast floor.

The fast diagnostic: in PageSpeed Insights / Lighthouse, the "Kontrastverhältnis nicht ausreichend" finding lists the exact selectors. Fix the source, redeploy, verify the finding disappears.

---

## 4. Keyboard navigation

Every interactive element must be reachable by keyboard. Test by tabbing through the page from top to bottom — every focusable element should receive a visible focus state, in DOM order, with no skips or traps.

- **Focus ring must be visible** — never `outline: none` without a styled replacement.
- **Skip links** on multi-section pages so keyboard users can jump past the nav. The contract is three-part and all three must match:
  1. **The link sits before the `<header>`** in the DOM — first tab stop on every page
  2. **The `href` references the `<main>` element's `id`** — typically `#main`. The IDs must match exactly; a `href="#main"` pointing at a `<main>` without an `id` is a silent defect that ships
  3. **The link is visually hidden until focused** (`sr-only focus:not-sr-only` in Tailwind) — visible to keyboard users, transparent to mouse users

  Canonical pattern:

  ```astro
  <body>
    <a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 ...">
      {t('nav.skip')}
    </a>
    <Header />
    <main id="main">
      <slot />
    </main>
    <Footer />
  </body>
  ```

  If the page has multiple main regions (rare for landing pages), add multiple skip links pointing to each region's id.
- **Logical tab order** matches visual order. If `tabindex` is needed for reordering, the design is probably wrong — fix the DOM.

### Focus trap inside modals

When a modal/dialog opens:

1. **Focus moves into the modal** — to the first focusable element, or the close button.
2. **Focus is trapped inside** — `Tab` from the last focusable element loops back to the first; `Shift+Tab` from the first loops to the last.
3. **`Esc` closes the modal.**
4. **Focus returns to the trigger** on close — the element that opened the modal regains focus.

The canonical hook (`useFocusTrap` in source projects) wraps these four behaviors. For Tier 2 (Astro), implement as a small vanilla JS module loaded with the modal component. For Tier 3 (Next.js), use `useFocusTrap` against the modal's ref. The library `focus-trap-react` is acceptable when modals are complex — for a single contact-form dialog, vanilla is enough.

### Reduced motion

`prefers-reduced-motion: reduce` must be honored by every animation on the site. See `DESIGN-BEST-PRACTICES.md` for the motion rules; the accessibility-side requirement is the audit gate:

**Audit:** macOS System Settings → Accessibility → Display → "Reduce motion" ON, then load every page. Verify nothing animates on scroll, hover, or load. The page should be visually coherent and fully functional in a frozen state.

If something animates anyway, that's an accessibility defect, not a polish item — vestibular triggers can cause real harm.

---

## 5. Semantic HTML and landmarks

```html
<header>
  <!-- Business name + primary nav -->
</header>
<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
    <!-- … -->
  </section>
</main>
<footer>
  <!-- Contact + legal -->
</footer>
```

- One `<h1>` per page (the business name or hero headline).
- Heading hierarchy: `h1` → `h2` → `h3`, never skip levels.
- Use `<address>` for contact info.
- Use `<time>` for hours and opening times.
- Use `<button>` for actions, `<a>` for navigation — never the wrong one for styling reasons.
- Every `<section>` that's visually distinct gets a label via `aria-labelledby` or `aria-label`.
- Images always carry `alt`. Decorative images: `alt=""` (empty, not missing).

---

## 6. Touch targets

Every tap target on mobile minimum **44×44 px**. Use `min-h-11 min-w-11` (44 px in Tailwind) on all interactive elements — links, buttons, form controls, icon-only triggers.

If a control is visually smaller than 44 px (e.g. a 24 px icon), expand its hit area with padding or invisible bounding box. The rendered icon stays small; the touch target stays accessible.

---

## 7. Language attribute

Set `lang` on the `<html>` element matching the page's primary language:

```html
<html lang="de"> <!-- German -->
<html lang="en"> <!-- English -->
<html lang="pt"> <!-- Portuguese -->
```

This matters for:
- Screen readers (picks the correct voice and pronunciation rules)
- Browser spell-check
- Search engines (signals page language)
- Translation tooling (Chrome's auto-translate prompt)

On multilingual sites, the value changes per locale route. The Astro/Next.js i18n routing handles this automatically when configured — but verify it's present in the rendered HTML.

---

## 8. Tools

Use these to verify the rules above. All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| WAVE | Free | [wave.webaim.org](https://wave.webaim.org/) | Visual overlay of accessibility issues + human-readable WCAG feedback. First stop. |
| axe DevTools (Chrome extension) | Freemium | [deque.com/axe/devtools](https://www.deque.com/axe/devtools/extension/chrome/) | Browser-based deep checks. Catches things WAVE misses. |
| Stark | Freemium | [getstark.co](https://www.getstark.co/) | Accessibility checks inside design tooling (Figma/Sketch) — for design-phase catches |
| Responsively App | Free | [responsively.app](https://responsively.app/) | Multi-viewport visual sweep — verifies touch targets and focus states across 375/768/1280 in one window |
| Lighthouse | Free | [developer.chrome.com/docs/lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | Accessibility score + actionable findings; same tool as in `PERFORMANCE.md` |

**Pre-launch flow:**
1. WAVE first — fast visual scan
2. Lighthouse accessibility audit — catches contrast and ARIA issues
3. axe DevTools — confirms the first two
4. Keyboard-only walkthrough — tab from top to bottom of every page
5. Responsively App — verify touch targets and focus rings at 375/768/1280
