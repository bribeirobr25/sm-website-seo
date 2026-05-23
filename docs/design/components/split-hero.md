# Split hero (half-and-half image + text)

**Source:** `docs/audit/gastronomy-coffee-RESEARCH-2026-05-22.md` (Watch House §15 + Starbucks half-bleed) — formalised as `gastronomy.md §3 Variant 2`. Promoted from `clients/demo-restaurant-adele/` 2026-05-23.
**Implementation:** `docs/design/components/_impl/SplitHero.astro`.

## 1. Purpose + when to use

A hero pattern where the viewport is split 50/50 between a typography column and a contained image column. Distinct from `FullBleedHero` (image is *background*, text overlaid): here the image is *contained*, the text gets a clean canvas backdrop, neither competes with the other.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — luxury / fine-dining | ✅ Highly recommended | Plated dish photography rewards full visibility; typography needs editorial discipline |
| Beauty — premium spa / boutique salon | ✅ Recommended | Treatment/portrait imagery benefits from clean framing |
| Professional services | 🟡 Conditional | If the brand has a portrait or signature object to anchor; otherwise prefer text-only hero |
| Pets — premium grooming / vet | 🟡 Conditional | Works for editorial register; not for friendly/family register |

**When NOT to use:** local-business clients whose primary CTA is `tel:` or maps (FullBleedHero converts better); clients without high-quality contained photography (the half-page image will read as empty).

## 2. HTML / accessibility structure

```html
<section class="splithero" aria-labelledby="splithero-title">
  <div class="splithero-grid">
    <div class="splithero-text">
      <p class="eyebrow">RESTAURANT · BERLIN MITTE</p>
      <h1 id="splithero-title">Fünf Gänge. Jeden Mittwoch neu.</h1>
      <p class="body">…</p>
      <blockquote>…</blockquote>
      <div class="ctas">…</div>
    </div>
    <figure class="splithero-figure">
      <img src="…" alt="…" fetchpriority="high" />
    </figure>
  </div>
</section>
```

**Accessibility:**
- `aria-labelledby="splithero-title"` ties section's accessible name to the H1.
- Image alt required; describe the contents (per `ACCESSIBILITY.md §image alt`).
- `fetchpriority="high"` on the image — it's the LCP candidate when image-side is `'left'`; remains important LCP candidate even when `'right'`.
- Mobile: image collapses to a constrained block above text. Order is preserved for screen readers via `lg:order-*` only at the `lg:` breakpoint.

## 3. CSS spec

- H1: `clamp(2.5rem, 5vw, 4.5rem)` · `line-height: 1.05` · `letter-spacing: -0.018em` · `font-weight: 500`
- Image figure: `min-height: 50vh` mobile · `100%` of `min-h-[70vh]–[80vh]` grid container on desktop
- No overlay — the image gets full color exposure (the half-and-half *is* the design trick)

## 4. Props (frozen)

- `imageSrc: string` (required)
- `imageAlt: string` (required)
- `eyebrow?: string` — small-caps positioning line (e.g., "RESTAURANT · BERLIN MITTE")
- `titleLines: string[]` (required) — H1 lines (1-3)
- `body?: string`
- `quote?: { text: string; attribution: string }`
- `ctaPrimary?: { href; label; ariaLabel? }`
- `ctaSecondary?: { href; label; ariaLabel? }`
- `imageSide?: 'left' | 'right'` (default `'right'`)
- Slots `cta-primary` + `cta-secondary` — override default rendered CTAs (e.g., to use `MarqueeCTA` per Adèle)

## 5. Performance constraints

- Image ≥ 1200×1500px source; serve responsive `srcset` (Astro Image preferred for `public/img/`)
- **`<picture>` + WebP companion pattern (auto-applied, added 2026-05-23).** Same pattern as `FullBleedHero` — auto-derives `.webp` from the `imageSrc` JPEG/PNG and renders `<picture><source srcset="…webp" type="image/webp"><img src="…jpg" fetchpriority="high"></picture>`. Generate via `npx sharp-cli -i hero.jpg -o hero.webp -f webp -q 70 resize 1920`. Adèle SplitHero: 397 KB JPEG → 122 KB WebP (-69%).
- Max image weight: 250KB at 1200×1500 (AVIF/WebP). JPEG fallback ≤400KB.
- No background-image-attached-fixed.

## 6. Reference sites

- Watch House (UK) — full half-bleed image-pair pattern
- Starbucks half-bleed variants
- Frenchie Paris, Maison Premiere — editorial fine-dining adoption

## 7. UI_REVIEW.md cross-link

> *"Issue #N — hero is template-y full-bleed with text overlay; the brand register would benefit from a half-and-half split where text and image each get full visibility: adopt SplitHero per `docs/design/components/split-hero.md`. Best fit for luxury / boutique register where the image deserves to be seen, not used as backdrop."*

## 8. Implementation pointer

**Spec live since 2026-05-23.** Used by Adèle home (Tier 2). Promotion candidate for canonical agency-default in gastronomy templates §3 (Variant 2 — already documented but had no impl until this promotion).
