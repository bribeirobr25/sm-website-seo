# Accordion (styled `<details>` group)

**Source:** `DESIGN-BEST-PRACTICES.md §448` already recommends native `<details>` over JS accordions. Added 2026-05-23 as the styled wrapper every client was rebuilding inline.
**Implementation:** `docs/design/components/_impl/Accordion.astro`.

## 1. Purpose + when to use

A styled group of native `<details>`/`<summary>` elements. Zero JS required for the core expand/collapse — that's the browser's built-in behavior. Optional `singleOpen` prop adds a tiny JS enhancement that closes siblings when one opens (still graceful: degrades to multi-open without JS).

**Use for:**
- FAQ sections (paired with `FAQ.astro` for JSON-LD generation)
- "How it works" / process steps
- Service details where each row is collapsible
- Policy / Impressum collapsibles (data processor list, etc.)
- Mobile menu disclosure of sub-sections

**Per-vertical:** brand-neutral. Used on every vertical at some point — most heavily on health/professional-services (FAQ) and gastronomy (allergens, sourcing details).

**When NOT to use:**
- Content that visitors NEED to read (don't hide it behind interaction)
- Marketing copy (hides conversion drivers behind clicks)
- Use sparingly above-the-fold

## 2. HTML / accessibility structure

```html
<div class="accordion" data-accordion-group="faq" data-single-open="true">
  <details class="accordion-item" id="faq-item-1">
    <summary>
      <span>How do I reserve a table?</span>
      <span class="chevron" aria-hidden="true">⌄</span>
    </summary>
    <div class="body">
      <p>Call us, email reservierung@…, or use the booking form below.</p>
    </div>
  </details>
  <!-- more items -->
</div>
```

**Accessibility:**
- Native `<details>`/`<summary>` — screen readers announce expand/collapse state
- Chevron is `aria-hidden="true"` (decorative)
- Summary is keyboard-focusable natively (ENTER + SPACE toggle)
- 48px minimum tap target on summary
- `:focus-visible` ring uses `--color-accent`
- Default styled `::-webkit-details-marker` hidden (we render our own chevron)
- Animation respects `prefers-reduced-motion`

## 3. Props (frozen)

- `items: Item[]` (required) — `{ summary, body, id?, defaultOpen? }`
- `singleOpen?: boolean` (default `false`) — open one closes others (progressive enhancement; no JS = multi-open)
- `variant?: 'bordered' | 'flush'` (default `'flush'`) — full borders per item OR only divider lines
- `groupId?: string` — auto-generated if omitted; used by single-open JS to scope

## 4. Performance constraints

- Pure HTML + CSS by default — zero JS for multi-open variant
- `singleOpen` mode adds one global `toggle` listener per group — ~0.5KB
- Chevron rotation: CSS transform on `[open]` — GPU-accelerated, no JS

## 5. Pairs with

- `FAQ.astro` — wraps Accordion + generates `FAQPage` JSON-LD from the same item list
- Can be embedded inside Dialog for FAQ-in-modal patterns (rare)

## 6. Anti-patterns

- Putting accordion summaries in `<button>` instead of `<summary>` — defeats the native pattern, breaks the no-JS path
- Animating `max-height` from a fixed value to 0 with JS — `<details>` doesn't support content animation natively; CSS transitions of height on `[open]` are unreliable. The agency accepts the instant expand/collapse as a feature.
- Using accordions on critical landing-page conversion copy
