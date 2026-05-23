# Lightbox (image gallery)

**Source:** [Parvus.js](https://www.cssscript.com/accessible-mobile-lightbox-parvus/) · [Pencere](https://www.cssscript.com/gallery-lightbox-pencere/) · [Dan Q pure-HTML lightbox](https://danq.me/2025/08/15/details-summary-lightboxes-in-pure-html-css/). Added 2026-05-23.
**Implementation:** `docs/design/components/_impl/Lightbox.astro`.

## 1. Purpose + when to use

A grid of clickable thumbnails that open into a fullscreen image viewer (native `<dialog>` with prev/next/ESC/keyboard nav).

**Per-vertical:**

| Vertical | Use |
|---|---|
| Beauty — portfolio (cuts, color, treatments) | ✅ Critical |
| Gastronomy — event/dish gallery | ✅ Recommended |
| Artisan — work gallery | ✅ Critical |
| Home-garden — project gallery | ✅ Critical |
| Events-hospitality — past-event photos | ✅ Recommended |
| Health (dental, derm) — clinical before/after | 🟡 Use BeforeAfterSlider instead |
| Other | Skip unless visual portfolio is core |

## 2. Props

- `id: string` (required) — unique dialog id
- `images: { thumbSrc, fullSrc, alt, caption?, width?, height? }[]` (required)
- `columns?: 2 | 3 | 4` (default `3`)
- `aspect?: 'square' | 'portrait' | 'landscape' | 'auto'` (default `'square'`)

## 3. Accessibility

- Thumbnails are real `<button>`s with `aria-label="Open image N: alt"`
- Lightbox is a native `<dialog>` — focus trap + ESC built-in
- Prev/Next buttons + Arrow keys + ESC all work
- Counter announces position via `aria-live="polite"`
- Backdrop click closes (via Dialog component's handler)

## 4. Performance

- Thumbnails `loading="lazy"` — typical gallery has 8-24 thumbs
- Thumb: 400×400 (~15-25 KB each AVIF/WebP)
- Full image only loads on click — server bandwidth saved
- Total gallery weight: 24 thumbs × 20 KB = ~480 KB

## 5. Built on

- `Dialog.astro` — fullscreen variant
- ~2 KB JS for keyboard nav + image swap

## 6. Anti-patterns

- Loading full-resolution images as thumbnails (defeats the point)
- More than 24 images in one lightbox (paginate or split into categories)
- Carousel-style autoplay (this is a viewer, not a slideshow)
