# Dialog (native modal primitive)

**Source:** [MDN `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog) — Baseline 97% in 2026. [CSS-Tricks roll-your-own dialog](https://css-tricks.com/dialog-components-roll-your-own/). Added 2026-05-23 per research-driven gap analysis.
**Implementation:** `docs/design/components/_impl/Dialog.astro`.

## 1. Purpose + when to use

A generic accessible modal primitive built on the native `<dialog>` element. Handles focus trap, ESC-to-close, focus restore, backdrop close — all natively. Use as the foundation for any "open a panel over the page" pattern.

**Parent of:**
- `Lightbox` (image gallery overlay)
- `VideoFacade` confirmation step (when consent flow needs a modal)
- BookingMock confirmation (real implementations)
- Long-form policy / disclosure overlays

**Per-vertical:** brand-neutral infrastructure. Used across all 12 verticals as needed.

**When NOT to use:**
- Persistent UI (header, banner, drawer that stays open). Use a regular `<section>` instead.
- Cookie consent banner — that has its own component with first-paint legal requirements.
- Toast / notification — see "skip these" list in the research doc; the agency does not use toasts on landing-page stacks.

## 2. HTML / accessibility structure

```html
<dialog id="my-dialog" aria-labelledby="my-dialog-title">
  <button class="close" data-dialog-close aria-label="Close">×</button>
  <div class="content">
    <h2 id="my-dialog-title">Title</h2>
    <p>Body</p>
  </div>
</dialog>

<!-- Open from anywhere -->
<button data-dialog-open="my-dialog">Open dialog</button>
```

**Accessibility:**
- Native `<dialog>` provides focus trap when opened via `.showModal()` — no JS focus-trap library needed
- `aria-labelledby` required (id of the title element inside)
- `aria-describedby` optional (id of a longer descriptive paragraph)
- ESC closes natively
- The agency's script adds backdrop-click to close (native `<dialog>` does NOT do this by default)
- Focus returns to the opener element when closed — native behavior
- Body scroll is blocked when `.showModal()` is used (native) — no manual scroll-lock needed

## 3. Props (frozen)

- `id: string` (required) — used by openers + `aria-labelledby` association
- `labelledById: string` (required) — id of the heading inside the dialog
- `describedById?: string` — id of a description element
- `size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'` (default `'md'`) — max-width preset
- `closeButton?: 'icon' | 'none'` (default `'icon'`) — render the agency's X-button or rely on caller

## 4. Opener / closer convention

Any element with `data-dialog-open="<dialog-id>"` opens that dialog. Any element with `data-dialog-close` (inside a dialog) closes the containing dialog. One script handles all dialogs on the page — no per-instance wiring.

## 5. Performance constraints

- ~1KB of JS (the global opener/closer handler is shared across all dialogs)
- Backdrop blur uses `backdrop-filter` (caniuse 96% in 2026)
- Open animation: 320ms fade+translate. Disabled in `prefers-reduced-motion`.

## 6. Reference

- [MDN `<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/dialog)
- [Schalk Neethling — HTML `<dialog>` native solution](https://schalkneethling.com/posts/html-dialog-native-solution-for-accessible-modal-interactions/)
- [CSS-Tricks — Roll your own dialog](https://css-tricks.com/dialog-components-roll-your-own/)
