# Before/after slider

**Source:** Research-driven (2026-05-23). [Zach Patrick build guide](https://zachpatrick.com/blog/building-a-before-and-after-image-slider) · [Orangeable CSS-only](https://orangeable.com/css/before-and-after-image-slider). Per research: **72% of salon clients want before/after photos before booking.**
**Implementation:** `docs/design/components/_impl/BeforeAfterSlider.astro`.

## 1. Purpose + when to use

Two images overlaid with a draggable vertical divider. Uses native `<input type="range">` for the handle — keyboard accessible by default. CSS `clip-path` drives the image reveal.

**Per-vertical surfaces:**

| Vertical | Use |
|---|---|
| Beauty — hair color, makeup, lashes, nails | ✅ Critical (72% of clients want it) |
| Health — dental whitening, dermatology, orthodontics | ✅ Critical |
| Trades — renovations, painting, landscaping, restoration | ✅ Critical |
| Home-garden — landscape design, garden makeover | ✅ Recommended |
| Automotive — detail, paint correction | ✅ Recommended |
| Pets — grooming | 🟡 Conditional (depends on visual impact of transformation) |
| Other | Skip |

## 2. Props

- `beforeSrc: string` (required)
- `beforeAlt: string` (required)
- `beforeLabel?: string` (default `'Before'`)
- `afterSrc: string` (required)
- `afterAlt: string` (required)
- `afterLabel?: string` (default `'After'`)
- `aspect?: 'square' | 'landscape' | 'portrait' | custom CSS` (default `'landscape'` 4:3)
- `initial?: number` (default `50`) — initial slider position 0-100

## 3. Accessibility

- Native `<input type="range">` — full keyboard support (arrows, page-up/down, home/end)
- `aria-label="Drag to compare {Before} and {After}"`
- Labels are `aria-hidden="true"` (decorative duplicates of the alt text)
- Focus ring on the visible handle when range has keyboard focus
- Range input is visually hidden but functional

## 4. Photography rules (mandatory)

- **Identical framing** before and after — same crop, same camera angle, same lens, same distance
- **Identical lighting** — same source, same time of day, same intensity
- **Same model / subject** for beauty/health
- Source 1200×900 minimum (sharp enough that the divider drag is satisfying)
- Both images the same dimensions
- **Honesty rule:** no Photoshop'd "after" beyond what the service actually achieved

## 5. Performance

- ~0.5 KB JS for the range → CSS variable wiring
- 2 images loaded eagerly (the slider is the section)
- ~50-100 KB per image (AVIF/WebP at 1200×900)

## 6. Anti-patterns

- Different framing/lighting between before and after — instantly reads fake
- Stock photography (kills trust)
- More than one slider above the fold (each one is heavy attention; one is the hero)
- Tiny "after" improvement (use plain photos instead — the slider mechanic creates expectation)
