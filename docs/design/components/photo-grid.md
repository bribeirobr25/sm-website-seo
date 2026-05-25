# Photo grid (asymmetric bento collage)

**Source:** Saltlines V4 build (2026-05-22). Pattern derived from editorial bento layouts (Apple, Wax & Wane). Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/PhotoGrid.astro`.

## 1. Purpose + when to use

Asymmetric 5-image grid (2 wide cells + 3 square cells in a 4-column desktop grid; 2-column on mobile). Doubles as "what we make + the place" — replaces a traditional MenuCard preview on the home page when the brand favors atmosphere over individual product cards.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — café / specialty coffee | ✅ Recommended | Atmospheric shots (interior + drink + neighborhood) carry more than a 3-card menu preview |
| Gastronomy — bakery / brewery | ✅ Recommended | Process + product + space |
| Beauty — boutique salon | ✅ Recommended | Interior + treatment-in-progress + client portraits (with release) |
| Home-garden — landscape / florist | ✅ Recommended | Project showcase needs asymmetry; pure grid feels e-commerce |
| Artisan — workshop / craft | ✅ Recommended | Tools + process + finished pieces |
| Events-hospitality — venue | ✅ Recommended | Multi-room / lighting variations |
| Trades | 🟡 Conditional | If there's portfolio depth; otherwise skip |
| Health | ❌ Avoid | Clinical register — use TeamGrid + facility shots instead |

**When NOT to use:** clients with fewer than 5 quality photos; clients whose brand is product-led (a menu list converts better).

## 2. HTML / accessibility structure

```html
<section>
  <header>
    <p class="eyebrow">…</p>
    <h2>…</h2>
    <p>…</p>
  </header>
  <div class="grid grid-cols-2 lg:grid-cols-4">
    <figure class="col-span-2 lg:col-span-2 aspect-[16/10]">
      <img src="…" alt="…" loading="lazy" />
    </figure>
    <figure class="aspect-square">…</figure>
    <figure class="aspect-square">…</figure>
    <figure class="col-span-2 lg:col-span-2 aspect-[16/10]">…</figure>
    <figure class="col-span-2 lg:col-span-2 aspect-[16/10]">…</figure>
  </div>
</section>
```

**Accessibility:**
- Every `<img>` has descriptive `alt` (describe the content, not "image of X")
- Semantic `<figure>` per cell; optional `<figcaption>` for credits / captions
- `loading="lazy"` on all cells — they're below the fold in most layouts
- Subtle hover scale `1.03` for the linked variant; disabled in `prefers-reduced-motion`

## 3. CSS spec

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); gap: 1rem; }
}
.figure {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
}
.figure img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--motion-warm) var(--ease-quart);
}
.figure:hover img { transform: scale(1.03); }
@media (prefers-reduced-motion: reduce) {
  .figure img, .figure:hover img { transition: none; transform: none; }
}
```

## 4. Props (frozen)

- `locale: Locale` — for i18n lookup of alt text
- Inline `images: { src, alt, span?, aspect? }[]` — 5 entries with span/aspect modifiers
- For canonical adoption: accept `images` directly as prop

## 5. Content guidelines

- Exactly 5 images (the bento layout is sized for 5 — 4 or 6 break the rhythm)
- Mix of subjects: interior + product + neighborhood + people + atmosphere
- Consistent color grading across cells (otherwise reads as random)
- All photos should be horizontal-friendly OR aspect-square-friendly — don't mix portrait + landscape randomly

## 6. Performance constraints

- All cells `loading="lazy"` since they're below the fold
- Each image ≤150KB at 1200×900 (AVIF/WebP). JPEG fallback ≤250KB
- Total weight cap: ~750KB for the section
- Astro Image preferred for `public/img/` sources (auto-generates responsive `srcset`)
- **`<picture>` + WebP companion pattern (auto-applied, added 2026-05-23).** Each cell renders `<picture><source srcset="…webp" type="image/webp"><img src="…jpg"></picture>`, auto-deriving the `.webp` filename from each `img.src` in the `images` array. Generate WebP via `npx sharp-cli -i cell.jpg -o cell.webp -f webp -q 70 resize 1600`. Saltlines PhotoGrid: total section weight halved by serving WebP variants.

## 7. Anti-patterns

- Same-aspect-ratio grid (defeats the bento purpose; just use a uniform card grid)
- More than 5 images (becomes a gallery — use the Lightbox component instead)
- Stock photography with no brand grading

## 8. Implementation pointer

Used by Saltlines home. Bellini and Adèle use other patterns (MenuCard grid, CourseList) — choose per-vertical register.

---

## Hardcoded content warning (2026-05-23 portfolio audit)

The canonical implementation at `_impl/photo-grid.astro` (matching CamelCase filename) carries hard-coded content from the demo where this component was first promoted — specifically: Saltlines coffee — counter / surfboards / Spree-river image paths in /img/.

**When using this component in a new demo or client build, do one of two paths:**

1. **Copy + customize** — `cp _impl/[Component].astro clients/[slug]/src/components/sections/` then edit the items/quotes/images array inline per the client's vertical. This is what the 2026-05-23 3-new-demos rebuild did for the Press component (lawyer Chambers/JUVE/WirtschaftsWoche items replaced Adèle's restaurant items). See `docs/audit/2026-05-23-portfolio-rebuild-audit.md` §2 architecture gap.
2. **Parameterize the canonical (recommended next time anyone touches this file)** — accept `items` / `quotes` / `images` as a required prop with no hard-coded fallback. Update `§3 Props` above to match. Closes audit backlog item #2 in `docs/audit/PENDING.md` §2026-05-23 portfolio-rebuild backlog.

**Why this matters:** the audit found that 6 of the 32 canonical `_impl/` components carry single-demo content (Press · BookingMock · NewsletterMock · CourseList · PhotoGrid · MenuCard). The 2026-05-23 yoga + barber demos had to *delete* most of these copies + inline equivalent markup because the hard-coded content was vertical-wrong. Parameterizing avoids that inline-rewrite cost for the next client.
