# Full-bleed hero with overlay typography

**Source:** `docs/audit/gastronomy-coffee-RESEARCH-2026-05-22.md` — Espressohouse, Coffee Fellows, The Barn (and Watch House half-bleed variant). Added 2026-05-22.
**Implementation:** `docs/design/components/_impl/FullBleedHero.astro`.

## 1. Purpose + when to use

A hero pattern where a single photograph fills the viewport bottom-anchored, with typography overlaid on the lower-third gradient. Replaces the template-y "grid with photo on right" hero common in agency-templates / Astro-starter projects. Used when a client has:

- A real venue photograph with deliberate art direction (not stock)
- A confident brand voice that doesn't need a textual side-by-side explanation
- Heritage / boutique / neighborhood-pillar register

**Per-vertical surfaces:**

| Vertical | Typical use | Recommendation |
|---|---|---|
| gastronomy | Heritage / Family / Specialty Third-wave / Editorial | ✅ Highly recommended — measured in 3/5 coffee benchmarks |
| beauty | Boutique salon / premium spa | 🟡 Conditional — only with venue photography, not portrait crops |
| trades | Werkstatt with industrial-craft register | 🟡 Conditional — only with industrial venue photography |
| professional-services | Lawyer / architect / consultant | ❌ Wrong register — these benefit from typography-led heroes |
| pets | Vet clinic / pet store | 🟡 Conditional — only with clean clinical or warm welcoming venue shots |

**When NOT to use:**

- When client has no high-quality venue photography (stock = template-y; just don't do this hero)
- For Type-3 booking flows where conversion-above-the-fold matters more than atmosphere
- For local-business clients whose H1 must carry an SEO keyword that's hard to read against busy imagery (verify readability via WCAG contrast against the busiest pixel region of the image)
- For clients whose brand register is utilitarian/transactional (most trades and quick-service)

## 2. HTML / accessibility structure

```html
<section class="fbh-hero" aria-labelledby="fbh-title">
  <img src="/img/hero.jpg" alt="..." width="1920" height="1280" fetchpriority="high" decoding="async" />
  <div>
    <p class="fbh-kicker">EISCAFÉ BELLINI · BERLIN</p>
    <h1 id="fbh-title">Drei Generationen Familieneis.<br />In Prenzlauer Berg seit 1987.</h1>
    <p class="fbh-body">…</p>
    <a class="fbh-cta-primary" href="/gelato">See the menu.</a>
  </div>
</section>
```

**Accessibility (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`alt` is required** on the hero `<img>`. Describe the contents, not the brand ("Display case of handmade Italian gelato" — NOT "Eiscafé Bellini hero image").
- **`aria-labelledby="fbh-title"` on the section** ties the section's accessible name to the H1.
- **WCAG contrast against the BUSIEST pixel of the image is mandatory.** Test by sampling the image at the H1's overlay position; the minimum darkest-region contrast must be ≥4.5:1 against the H1 color. If insufficient, increase the `overlay='bottom'` gradient strength OR move the typography to a darker corner of the image OR add a `text-shadow` (last resort — soft `text-shadow: 0 2px 8px rgba(0,0,0,0.3)`).
- **`fetchpriority="high"`** is required on the hero image — it IS the LCP element. Skipping this breaks the agency's perf budget per `PERFORMANCE.md` §5.
- **Tap targets** on the CTAs maintain the `min-h-[52px]` agency minimum.
- **Reduced motion:** the component has no entry animations by default (per `gastronomy-coffee-RESEARCH-2026-05-22.md` — scroll-reveal observed in <3/5 sites, below the adoption threshold). If a consumer adds one, `@media (prefers-reduced-motion: reduce)` mandatory.

## 3. CSS spec (measured 2026-05-22)

```css
.fbh-hero {
  position: relative;
  overflow: hidden;
  min-height: 70vh;       /* sm:80vh */
}

.fbh-hero > img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Gradient overlay — bottom-third only per gastronomy.md §3 Variant 1 rule */
.fbh-hero::before {
  content: '';
  position: absolute;
  inset-inline: 0;
  bottom: 0;
  height: 66%;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  pointer-events: none;
}

.fbh-title {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 6vw, 5rem);   /* 40px → 80px */
  line-height: 1.05;
  letter-spacing: -0.022em;               /* -2.2% — measured from Espressohouse + Watch House */
  font-weight: 500;
  color: #fff;
}

.fbh-kicker {
  font-size: 12px;        /* sm:14px */
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.8);
}
```

**Why these values:**
- `clamp(2.5rem, 6vw, 5rem)` = 40-80px H1 — matches the measured range across Espressohouse (60px) and The Barn (64-80px)
- `letter-spacing: -0.022em` matches the agency canonical `--tracking-display-sans` token (TECH.md §7)
- `66%` gradient height (bottom-two-thirds) keeps the photography readable while making typography pass contrast — empirical
- `text-white` requires verifying contrast against the darkest-spot of the image; if the image is bright cream-on-cream, swap to `text-text` and use a light gradient

## 4. Required CSS custom properties

```css
:root {
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --motion-warm: 500ms;       /* unused by component but present in env */
  --color-accent: #C1643B;    /* terracotta - per-vertical */
  --color-accent-deep: #A24D27;
  --color-bg: #FAF6EE;         /* used by CTA primary text-bg */
  /* ...other tokens per the canonical TECH.md §7 set */
}
```

## 5. Performance constraints

- **Hero `<img>` is the LCP element.** `fetchpriority="high"` + `decoding="async"` required. Image must be served at appropriate resolution per viewport — agency baseline uses Astro Image which handles this automatically for `public/img/` sources; for `<img>` sources without Astro Image, manually provide responsive `srcset`.
- **`<picture>` + WebP companion pattern (auto-applied, added 2026-05-23).** The component auto-derives the WebP companion filename from the JPEG/PNG `imageSrc` prop (e.g. `/img/hero.jpg` → `/img/hero.webp`) and renders `<picture><source srcset="…webp" type="image/webp"><img src="…jpg"></picture>`. If the `.webp` file exists at the derived path, modern browsers fetch the smaller WebP; if missing, browsers transparently fall back to the JPEG. Generate the WebP via `npx sharp-cli -i hero.jpg -o hero.webp -f webp -q 55 resize 1920` (q55-q70 per `PERFORMANCE.md §5` Interim pattern table). Saltlines hero: 1.13 MB JPEG → 248 KB WebP (-78%).
- **Max image weight:** 200KB at 1600px wide for desktop (AVIF/WebP per `PERFORMANCE.md` §5). Original JPEG at 1600px is acceptable up to 350KB.
- **No scroll-reveal entry animations.** Measured ≤2/5 of coffee benchmarks. Skip for now; re-evaluate in 6-month UI/UX refresh.
- **No background-attached fixed parallax.** Bad for mobile + bad for `prefers-reduced-motion`.

## 6. Reference sites

| Site | Where | Notes |
|---|---|---|
| Espressohouse | https://de.espressohouse.com/ | Canonical reference for full-bleed serif H1 on photography |
| The Barn | https://thebarn.de/ | Full-bleed for ecommerce product cards (third-wave register) |
| Coffee Fellows | https://www.coffee-fellows.com/ | Full-bleed but with brand name baked IN the photo — anti-pattern source (do NOT copy the wordmark-in-image trick) |
| Watch House | https://watchhouse.com/ | Half-and-half image pair variant (use FullBleedHero for the single-image version; use a custom split for the pair) |

## 7. UI_REVIEW.md cross-link

When auditing a gastronomy client whose hero is the template-y "grid with photo on right":

> *"Issue #N — hero uses template-grid-with-side-photo: adopt FullBleedHero per `docs/design/components/full-bleed-hero.md`. Required for any client with venue photography of sufficient quality. Bellini demo uses this pattern at `clients/demo-eiscafe-bellini/src/components/sections/Hero.astro` (post-2026-05-22 rebuild)."*

## 8. Implementation pointer

**Phase 3 deliverable (shipped 2026-05-22):** `docs/design/components/_impl/FullBleedHero.astro`

**Props (frozen):**
- `imageSrc: string` (required) — hero image URL
- `imageAlt: string` (required)
- `kicker?: string` — small caps above H1
- `titleLines: string[]` (required) — array allows manual line breaks
- `body?: string`
- `ctaPrimary?: { href; label; target? }`
- `ctaSecondary?: { href; label; target? }`
- `overlay?: 'none' | 'bottom' | 'full'` (default `'bottom'`)
- `height?: 'short' | 'tall' | 'full'` (default `'tall'`)

Used by Bellini home at `clients/demo-eiscafe-bellini/src/components/sections/Hero.astro` post-2026-05-22.
