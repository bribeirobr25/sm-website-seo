# Scroll-spy in-page nav (sticky)

**Source:** Research-driven (2026-05-23). Common pattern on long single-page sites — most Type 1 builds and many Type 2.
**Implementation:** `docs/design/components/_impl/ScrollSpyNav.astro`.

## 1. Purpose + when to use

A sticky horizontal nav bar with anchor links to in-page sections. Uses `IntersectionObserver` to highlight the active section + native CSS smooth scrolling.

**Per-vertical:**

| Vertical | Use | Sections |
|---|---|---|
| Gastronomy — long single-pager | ✅ Recommended | Hero · Menu · About · Visit |
| Beauty — services-heavy single-pager | ✅ Recommended | Services · Team · Gallery · Visit |
| Trades — services + about single-pager | ✅ Recommended | Services · About · Reviews · Quote |
| Health — clinic info single-pager | ✅ Recommended | Services · Team · Hours · Contact |
| Studio | ✅ Recommended | Classes · Schedule · Trainers · Pricing |
| Anything multi-page | ❌ Use top nav instead |

**When NOT to use:** sites with full multi-page navigation. The scroll-spy nav is for SPA-style long single-pagers.

## 2. Props

- `items: { targetId: string; label: string }[]` (required)
- `topOffset?: string` (default `'0'`) — CSS value; if your main header is also sticky, set this to the header's height
- `variant?: 'underline' | 'pill'` (default `'underline'`)
- `scrollMarginTop?: string` (default `'96px'`) — applied to each target section so anchor-jump lands below the sticky nav

## 3. Accessibility

- `<nav aria-label="Page sections">`
- Active link gets `aria-current="true"` (set by IntersectionObserver on scroll)
- Native `<a href="#section-id">` — keyboard accessible, full back/forward history support
- `scroll-behavior: smooth` applied only outside `prefers-reduced-motion`

## 4. Performance

- ~1 KB JS (IntersectionObserver wiring + scroll-margin setup)
- Zero animation frames during scroll — observer fires only when sections cross thresholds
- No `requestAnimationFrame` polling

## 5. Pairs with

- `Section.astro` — each target section uses the alternating-bg Section component with an `id` attribute
- Each section's `id` should be SEO-friendly slug (`#menu`, `#services`, `#team`)

## 6. Anti-patterns

- Smooth scroll forced even in reduced-motion (this component respects the preference)
- Anchor links that don't account for sticky-header offset (always set `scrollMarginTop`)
- Too many items (5-7 max — past that, the nav itself becomes long-form)
- Items that don't have a corresponding `id` section (broken anchors)
