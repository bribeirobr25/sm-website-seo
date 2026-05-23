# MenuCard — single-item menu card with photography

**Source:** `docs/audit/gastronomy-coffee-RESEARCH-2026-05-22.md` — The Barn product cards, Watch House category cards, Espressohouse drink cards (3 of 5 coffee benchmarks confirm). Added 2026-05-22.
**Implementation:** `docs/design/components/_impl/MenuCard.astro`.

## 1. Purpose + when to use

A single-item menu card with image + name + 1-line description + optional badge + optional price. Used in grid lists where each item benefits from product photography. **Required when a gastronomy menu category has ≥6 items** per `docs/design/templates/gastronomy.md` §4 menu-photography rule — text-only lists this long read as a spreadsheet, not a menu.

**Per-vertical surfaces:**

| Vertical | Typical use |
|---|---|
| gastronomy | Le Creme · Sorbetti · Spezialitäten · Featured dishes · Cocktails |
| beauty | Services menu (cut · color · keratin · facials) |
| pets | Product catalog (food brands · accessories) |
| home-garden | Plant catalog · garden services |

**When NOT to use:**
- Categories with 1-5 items — use plain text list instead, photography feels padded
- When per-item photography is inconsistent in lighting / crop — better to defer the cards until photo direction is consistent
- For services priced "from €X" / "Quote on request" — text-only with the qualifier reads more honest than a glossy card

## 2. HTML / accessibility structure

```html
<article class="mnc-card">
  <div class="relative">
    <img src="/img/gelato-pistachio.jpg" alt="Pistachio gelato scoop with whole nuts" width="800" height="800" loading="lazy" />
    <span class="badge">VEGAN</span>
  </div>
  <div>
    <div>
      <h3>Bronte-Pistazie</h3>
      <span>€2.20</span>
    </div>
    <p>Pistazien aus Bronte am Ätna, geröstet in Catania.</p>
  </div>
</article>
```

If clickable (e.g., navigates to a single-item detail page), wrap as `<a class="mnc-card" href="...">…</a>` — the component supports both via the `href?` prop.

**Accessibility:**

- **`alt` text is required** and must describe the food / product, not just the name (otherwise screen readers double up: "Bronte-Pistazie image. Bronte-Pistazie. Pistazien…"). Better: `alt="Pistachio gelato scoop with whole Bronte pistachios"`.
- **`<h3>` semantic level** — assumes the category header above is an `<h2>` (e.g., LE CREME (12) via the LabelCountHeader component).
- **Badge text** uses sufficient contrast against the badge bg — agency canonical bg is `bg-bg/90` which inherits the page bg + slight transparency for legibility over photography.
- **`tabular-nums` on the price** (`class="tabular"`) for alignment when multiple cards stack with varying digit counts.
- **Loading: lazy by default** — only above-fold cards (typically the first 3) should override to `loading="eager"`. The component default `'lazy'` is correct for menu grids.

## 3. CSS spec

```css
.mnc-card {
  display: block;
  background: var(--color-surface);
  border-radius: var(--radius-lg);    /* 16px */
  border: 1px solid var(--color-border);
  overflow: hidden;
}

/* Hover (only on linked variant) */
a.mnc-card:hover {
  border-color: var(--color-accent);
}

.mnc-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 1 / 1;                /* default square; can be 4/3 or 3/4 via prop */
  transition: transform var(--motion-warm) var(--ease-quart);
}

a.mnc-card:hover img {
  transform: scale(1.03);
}

.mnc-card-name {
  font-family: var(--font-display);
  font-size: 20px;        /* sm:24px */
  font-weight: 500;
  color: var(--color-text);
  line-height: 1.2;
}

.mnc-card-description {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.5;
}

.mnc-card-price {
  font-size: 16px;
  color: var(--color-text-muted);
  font-variant-numeric: tabular-nums;
}

.mnc-card-badge {
  font-size: 10px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: var(--color-bg);        /* with /90 transparency via class */
  color: var(--color-text);
  padding: 4px 8px;
  border-radius: var(--radius-sm);    /* 4px */
}

@media (prefers-reduced-motion: reduce) {
  .mnc-card img,
  a.mnc-card:hover img {
    transition: none;
    transform: none;
  }
}
```

**Why these values:**
- Square (1:1) default — most flexible for menu grids that stack 2-col (mobile) or 3-col (desktop). 4:3 for plate-shape photography. 3:4 (portrait) for cocktails / tall glassware.
- Hover scale `1.03` (3% zoom) — measured from The Barn product cards. Subtle enough to feel intentional, not gimmicky. Skip on touch-only viewports (no `:hover` triggers).
- Badge position absolute top-left with `bg-bg/90` — readable on dark or light photography.

## 4. Required CSS custom properties

```css
:root {
  --color-surface: #fff;
  --color-border: #e5dcc8;
  --color-text: #2b1a12;
  --color-text-muted: #7a6753;
  --color-accent: #c1643b;
  --color-bg: #faf6ee;
  --radius-sm: 4px;
  --radius-lg: 16px;
  --motion-warm: 500ms;
  --ease-quart: cubic-bezier(0.7, 0, 0.3, 1);
  --font-display: 'Cormorant Garamond', Georgia, serif;
}
```

## 5. Performance constraints

- **Below-the-fold cards default to `loading="lazy"`** — Above-the-fold (first 3 cards in viewport) should override to `loading="eager"` to keep the LCP candidate clean.
- **`<picture>` + WebP companion pattern (auto-applied, added 2026-05-23).** Same pattern as `FullBleedHero` — the component auto-derives the `.webp` filename from `imageSrc` and renders `<picture><source srcset="…webp" type="image/webp"><img src="…jpg"></picture>`. Generate WebP via `npx sharp-cli -i card.jpg -o card.webp -f webp -q 75 resize 1600`.
- **Max image weight per card:** 80KB at 800×800 px (AVIF/WebP). Original JPEG at 800px ≤120KB acceptable.
- **Crop discipline:** all cards in a category share the same crop ratio AND the same lighting register. Mixing landscape food shots with portrait-cocktail shots is the anti-pattern. The card grid is a product moment, not a photo gallery.
- **Total card weight per category page:** 12 cards × 80KB = ~1MB. With Astro Image generating responsive `srcset`, mobile delivery drops to ~30KB/card. Acceptable.

## 6. Reference sites

| Site | Pattern | Notes |
|---|---|---|
| The Barn | Product cards with hover-overlay subscription CTA | The card is also the cart trigger. Skip the ecom integration for Type 1/2 — keep the visual treatment. |
| Watch House | Category cards in the "House favourites" section | Square cards + serif name + 1-line description, no price visible (Watch House sells in-store) |
| Espressohouse | Drink-of-the-month featured row | 3-card row centered, larger imagery |

## 7. UI_REVIEW.md cross-link

When auditing a gastronomy client whose menu page is a 2-col text-only list with ≥6 items per category:

> *"Issue #N — menu page reads as a spreadsheet, not a menu: adopt MenuCard per `docs/design/components/menu-card.md` for categories with ≥6 items. Reuse the canonical Astro impl at `docs/design/components/_impl/MenuCard.astro`. Bellini demo Gelato page uses this pattern at `clients/demo-eiscafe-bellini/src/pages/gelato.astro` (post-2026-05-22 rebuild)."*

## 8. Implementation pointer

**Phase 3 deliverable (shipped 2026-05-22):** `docs/design/components/_impl/MenuCard.astro`

**Props:**
- `name: string` (required)
- `description: string` (required)
- `imageSrc: string` (required)
- `imageAlt: string` (required)
- `badge?: string` — "VEGAN" / "NEU" / "SAISONAL" / etc.
- `price?: string` — e.g., "€2.20 / Kugel"
- `href?: string` — makes the whole card clickable
- `aspectRatio?: '1/1' | '4/3' | '3/4'` (default `'1/1'`)
- `loading?: 'lazy' | 'eager'` (default `'lazy'`)

Used by Bellini gelato page at `clients/demo-eiscafe-bellini/src/pages/gelato.astro` post-2026-05-22 (Le Creme + Sorbetti + Spezialitäten categories).
