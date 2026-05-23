# PERFORMANCE.md — Web Performance Standards
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5).

- **Universal at every type:** Core Web Vitals budgets (LCP/CLS/INP), image rules, font self-hosting, animation performance, LCP breakdown diagnostic
- **Activates at Type 3+ (Tier 3 stack):** Per-route JS bundle budget (300 KB after gzip) — see Section 1. Tier 1/2 ship < 50 KB of JS by default; this gate exists for Next.js bloat.

See `TECH.md` §1 for the product-type matrix.

This is the agency-wide source of truth for web performance. Every client site is held against the rules below.

Other standards docs reference this doc by name, never by section. Section structure here is free to evolve.

---

## Rules at a glance

- **Budgets:** LCP < 2.5 s, CLS < 0.1, INP < 200 ms, total page weight < 500 KB on mobile. On Tier 3 (Next.js): per-route JS bundle < 300 KB after gzip.
- **PageSpeed mobile target:** ≥ 90 in production. ≥ 90 in demo for everything except SEO (which is ~69 due to `noindex` — expected).
- **Image format:** AVIF as default (best compression for 2026 browsers), WebP as automatic fallback via the pipeline. Don't ship raw JPEG/PNG.
- **Hero / LCP image:** `fetchpriority="high"`, `widths` array within ~25 % of `displayed × DPR`, `quality={75}`, never `loading="lazy"`.
- **Fonts:** Self-host via `@fontsource-variable/*` from day one. No `fonts.googleapis.com` references in production.
- **Diagnose slow LCP by reading the breakdown** (TTFB / load delay / load duration / **render delay**) — not the headline score. Render delay > 1 s almost always means render-blocking fonts or CSS.
- **Use the framework's image pipeline.** Astro: `<Image>` from `astro:assets` against files in `src/assets/`. Raw `<img>` against `public/` ships originals unchanged.
- **Animate only `transform` and `opacity`.** Never animate `width`, `height`, `top`, `left`, `margin` — those force layout.
- **Ambient autoplay video:** five mandatory constraints (§8) — never ship without all five. Live evidence: of 3 video-heavy sites in the UI/UX study, 2 pause all videos on mobile (Auwa, Kindred); 1 doesn't (Watch House — measurable LCP hit). Our agency standard requires the pause.

---

## Table of contents

1. [Targets and budgets](#1-targets-and-budgets)
2. [Demo-phase scores vs production](#2-demo-phase-scores-vs-production)
3. [Diagnosing slow LCP — read the breakdown](#3-diagnosing-slow-lcp--read-the-breakdown)
4. [The "identical links" false positive](#4-the-identical-links-false-positive)
5. [Image rules](#5-image-rules)
6. [Font rules](#6-font-rules)
7. [Animation performance](#7-animation-performance)
8. [Ambient autoplay video](#8-ambient-autoplay-video)
9. [Tools](#9-tools)

---

## 1. Targets and budgets

Non-negotiable before delivery.

| Metric | Target | How to verify |
|--------|--------|---------------|
| PageSpeed Insights mobile | ≥ 90 | pagespeed.web.dev |
| LCP (Largest Contentful Paint) | < 2.5 s | Lighthouse |
| CLS (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| INP (Interaction to Next Paint) | < 200 ms | Lighthouse / CrUX |
| Total page weight (mobile) | < 500 KB | Browser DevTools |
| First meaningful content | < 1.5 s | Lighthouse |
| **Tier 3 only:** per-route JS after gzip | < 300 KB | `next build` output or bundle analyzer |

If any of these fail, the site is not ready for handoff. Open the LCP breakdown (Section 3) before reaching for "optimization" — most regressions are explained by one of the four sub-components.

### Tier 3 bundle budget

Static landing pages (Tier 1/2) typically ship < 50 KB of JS total — no extra budget needed. Tier 3 (Next.js with interactive features) is where bundle bloat regresses LCP without anyone noticing. The 300 KB per-route ceiling is enforced via:

1. `next build` output — fail PR review if any First Load JS > 300 KB
2. Bundle analyzer (`@next/bundle-analyzer`) — run when a route approaches the ceiling
3. CI gate (optional) — a `scripts/check-bundle-budget.mjs` that walks `.next/static/chunks/*.{js,css}` after build and exits non-zero on regression

The most common cause of overshoot: a heavy library (e.g., `framer-motion`, `react-pdf`) imported into a page where only one component needs it. Fix with `next/dynamic({ ssr: false })` to split it out of the initial route bundle.

---

## 2. Demo-phase scores vs production

When the site is still in demo phase (`noindex` on every page), Lighthouse scores look like this:

| Score | Expected during demo | Why |
|---|---|---|
| Performance | ≥ 90 — same as production | Demo and production share the same code path; no excuse for low perf |
| Accessibility | 100 — same as production | Same |
| Best Practices | 100 — same as production | Same |
| **SEO** | **~69** | Lighthouse flags the `noindex` meta tag as a critical SEO failure. **Expected.** Will jump to 95+ when `noindex` is removed for production. Do not chase this score during the demo. |

Two unscored Best-Practices findings also appear during demo and are real items for production but not blockers now: **CSP / COOP / X-Frame-Options / Trusted Types headers**. These belong in `vercel.json` before the production cutover; see `SECURITY.md`.

---

## 3. Diagnosing slow LCP — read the breakdown

When PageSpeed reports LCP > 2.5 s, open the **LCP-Aufschlüsselung** (LCP breakdown) panel and look at the four sub-sections. The fix you reach for depends on which one is elevated:

| Sub-section | Healthy | Almost always means… |
|---|---|---|
| TTFB | < 200 ms | Hosting/CDN; on Vercel edge usually 0 ms |
| Resource load delay | < 100 ms | Missing `fetchpriority="high"` on LCP image; consider `<link rel="preload" as="image">` |
| Resource load duration | < 500 ms | Image variant is too large for the displayed size; tighten `widths` array, drop quality to 75 |
| **Element render delay** | < 500 ms | **The render-blocker tax.** Almost always third-party fonts or large CSS blocking paint above the LCP element. Self-host fonts (Section 6), inline critical CSS, defer non-critical JS. |

On a 3.5 s LCP composed of 0 / 190 / 360 / 1780 ms, the image is innocent. Don't optimize the picture — fix what's between the image arriving and the browser being allowed to paint it.

---

## 4. The "identical links" false positive

Lighthouse flags it when multiple `<a>` tags share the same `href` but have visibly different surrounding context (e.g. the same `tel:` link appearing in the header, hero, and footer with different hover styles). For local-business sites this is a deliberate design choice — same phone number, multiple touchpoints. Add an `aria-label` only if a screen reader would genuinely confuse them (e.g. two links to different sections of the same external page). Otherwise ignore.

---

## 5. Image rules

Images are almost always the biggest performance culprit on local business sites.

- **Use the framework's image pipeline.** Astro: `import { Image } from 'astro:assets'` + put files in `src/assets/`. Raw `<img>` against `public/` files ships originals unchanged and is the #1 cause of PageSpeed < 90 on our builds.
- **Format:** **AVIF as the primary output**, WebP as the automatic fallback for older browsers. Both via the framework pipeline — `<Image format="avif">` for Astro, `images.formats: ['image/avif', 'image/webp']` in `next.config.js`. AVIF is ~30 % smaller than WebP at equivalent visual quality; the bytes savings show up directly in LCP. SVG for logos and icons (vector, not bitmap).
- **Sizing:** Hero images max 1920 px wide. Section images max 800 px. Thumbnails max 400 px. The pipeline's `widths={[…]}` prop generates the responsive set automatically.
- **Lazy loading:** `loading="lazy"` on all images below the fold. Never on the hero/LCP image.
- **Dimensions:** Always set `width` and `height` to prevent CLS. The pipeline does this for you.
- **No 2+ MB originals committed to the repo.** Run images through Squoosh, ImageOptim, or `sharp` CLI before commit even if the pipeline will re-encode them — bloated source files slow `pnpm build` and balloon the git history.
- **Alt text:** Every image has a descriptive `alt`. Decorative images: `alt=""`. **The alt must match the photo's actual content** — never label an image as "Feijoada" if the photo shows a different dish.

### `<Image>` defaults are NOT LCP-optimal — fix these explicitly

The Astro `<Image>` component does not preset every optimization. Two opt-ins that pay back immediately on every client site we've measured:

- **`fetchpriority="high"` on the LCP image** — usually the hero. Without it, the browser deprioritizes the image behind CSS/JS even when `loading="eager"`. Mandatory on the LCP element, costs 0 bytes, saves 100–300 ms LCP.
- **A `widths` array with a step within ~25 % of the actual displayed width × DPR.** If the hero box is 480 px wide at 2× DPR, the browser needs a 960w variant. Default `widths={[480, 768, 1024]}` leaves the browser picking 1024w (oversized). Better: `widths={[400, 640, 800, 1024]}` so the browser has an 800w option near the real need.
- **`quality={75}` on photographs, never the default 80.** Indistinguishable to the eye, ~10 % smaller files. Drop to 70 for non-hero decorative images.

Sanity check after deploy: open PageSpeed Insights, expand **Image delivery improvable** — if any image flags "größer als nötig / larger than necessary," the `widths` array is too coarse for that image's display size.

```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/images/hero.png';
---

<!-- Hero / LCP image -->
<Image
  src={heroImage}
  alt="Interior of Bella Vita Berlin — warm lighting and exposed brick"
  widths={[400, 640, 800, 1024]}
  sizes="(max-width: 1024px) 100vw, 480px"
  format="webp"
  quality={75}
  loading="eager"
  fetchpriority="high"
  class="h-full w-full object-cover"
/>
```

### Interim pattern — `<picture>` + WebP companion (when Astro Image migration is deferred)

Added 2026-05-23. For demos / client builds where images live in `public/img/` rather than `src/assets/` (deferring the full Astro Image migration), the canonical components in this agency library render a `<picture>` with a WebP source + JPEG fallback, auto-deriving the `.webp` companion filename:

```astro
---
const webpSrc = imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
const hasWebp = webpSrc !== imageSrc;
---
<picture>
  {hasWebp && <source srcset={webpSrc} type="image/webp" />}
  <img src={imageSrc} alt={imageAlt} fetchpriority="high" decoding="async" />
</picture>
```

**Auto-applied in:** `FullBleedHero` · `SplitHero` · `MenuCard` · `TeamGrid` · `PhotoGrid`. Caller just passes `imageSrc="/img/hero.jpg"` — the component auto-derives `/img/hero.webp`. If the `.webp` file exists at the derived path, modern browsers fetch the smaller WebP; if it's missing, browsers transparently fall back to the JPEG.

**WebP generation workflow (one-time per image):**

```bash
# Sharp via npx — Node 22+ (Astro requirement)
npx --yes sharp-cli@latest -i hero.jpg -o hero.webp -f webp -q 70 resize 1920    # hero
npx --yes sharp-cli@latest -i card.jpg -o card.webp -f webp -q 75 resize 1600    # card
npx --yes sharp-cli@latest -i portrait.jpg -o portrait.webp -f webp -q 80 resize 800   # team portrait
```

**Quality settings — agency canonical:**

| Image type | Source dimension | WebP quality | Target weight |
|---|---|---|---|
| Hero (LCP) | 1920w | q55-q70 | ≤ 250 KB (200 KB ideal) |
| Hero — busy / textured | 1920w | q55-q60 | ≤ 250 KB |
| Card / gallery | 1600w | q70-q75 | ≤ 120 KB |
| Team portrait | 800w | q80 | ≤ 40 KB |
| Decorative | 1200w | q70 | ≤ 100 KB |

**When to migrate to full Astro Image:** when the client has 10+ photographs OR needs responsive `srcset` at multiple breakpoints (real client cutover, not demo). Migration moves images from `public/img/` → `src/assets/` + replaces raw `<img>` with `<Image src={importedImage} />`. The `<picture>` pattern stays as a fallback for clients pre-migration.

**Verification gate:** Each WebP target weight is a `CHECKLIST.md` pre-launch gate. Use `ls -la public/img/*.webp | awk '{print $5, $NF}' | sort -nr | head -5` to spot the heaviest WebP files; flag anything over budget.

---

## 6. Font rules

**Self-host from day one. Never `fonts.googleapis.com` in production.** The Google Fonts CSS is render-blocking, adds a DNS lookup, and was the single biggest perf regression we measured on the first Porto dos Ribeiros build: 1.5 s of LCP came from the hero image waiting for the third-party stylesheet to resolve. Self-hosting is not "for production" — it's the default.

The canonical pattern (Astro):

```bash
pnpm add @fontsource-variable/<display-font> @fontsource-variable/<body-font>
```

```astro
---
// BaseLayout.astro frontmatter
import '@fontsource-variable/fraunces/wght.css';
import '@fontsource-variable/fraunces/wght-italic.css';  // only if you use italic
import '@fontsource-variable/manrope';                    // default = wght.css
import '../styles/global.css';
---
```

### Operating rules

- **Maximum 2 font families per project** — display + body. Same number as the old Google-Fonts era, different mechanism.
- **Variable fonts only** when available. One woff2 file covers every weight you'll use via the `wght` axis. Massive bytes savings vs static cuts.
- **The family name has " Variable" suffix.** `@fontsource-variable/fraunces` registers `font-family: 'Fraunces Variable'`, not `'Fraunces'`. Your `tokens.css` must reference the registered name:
  ```css
  --font-display: 'Fraunces Variable', Georgia, serif;
  --font-body: 'Manrope Variable', system-ui, sans-serif;
  ```
  Easy gotcha — the build will not warn you; the browser silently falls back to the next stack entry.
- **Pick the smallest CSS variant you actually need.** `/wght.css` (weight axis only) is ~4 KB. `/opsz.css` (weight + optical-size) adds optical-size data — only import if you're driving `font-variation-settings: "opsz" …` from CSS. For a typical headline + body site, `wght` is enough.
- **`font-display: swap`** is set by fontsource by default. Don't override.
- **Subsetting is automatic.** Fontsource ships per-script woff2 files (latin, latin-ext, vietnamese, cyrillic, etc.) with `unicode-range`. The browser fetches only what it needs — for a DE/PT/EN site, that's `latin` and `latin-ext`, ~30–80 KB each. The other scripts sit on disk in `dist/_astro/` unfetched.
- **Optional preload for the LCP font subset:** add a `<link rel="preload" as="font" type="font/woff2" href="/_astro/<display-font>-latin-wght-normal.<hash>.woff2" crossorigin>` if your display font appears in the LCP element. The hash changes per build, so this needs maintenance — only worth it on production builds where you've committed to a layout.
- **No Google Fonts CDN.** If you find yourself adding a `<link href="https://fonts.googleapis.com/...">`, stop and migrate to fontsource. The CDN is for prototypes, not for sites we hand to a client.

---

## 7. Animation performance

Only animate `transform` and `opacity` (GPU-composited properties). Never animate `width`, `height`, `top`, `left`, or `margin` — these trigger layout recalculation on every frame.

```css
/* CORRECT — GPU-composited */
.fade-in { animation: fadeIn 300ms ease-out; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } }

/* WRONG — triggers layout */
.slide-in { animation: slideIn 300ms ease-out; }
@keyframes slideIn { from { margin-top: -20px; } }
```

---

## 8. Ambient autoplay video

Ambient autoplay-muted MP4 loops are now standard for premium hospitality / artisan brands (`docs/audit/ui-ux-reference-study.md` §5 Watch House, §6 Auwa, §20 Kindred). Used right, they evoke the brick-and-mortar atmosphere at low JS cost. Used wrong, they blow this doc's < 500 KB page-weight budget by **4-16×** (a 10 s 1080p MP4 at q=50 weighs ~3-5 MB).

The pattern is **only acceptable when all five constraints ship simultaneously.** If any one is missing, the video does not ship.

### The five mandatory constraints

| # | Constraint | Why | How to verify |
|---|---|---|---|
| 1 | **Conditional load by connection quality** | A 4G/wifi visitor can afford 2 MB ambient. A 3G visitor cannot. | `navigator.connection.effectiveType === '4g'` gate before `<video>` mount. On slower connections, render the `poster` image only and skip the video entirely. |
| 2 | **`preload="none"`** | Default `preload="metadata"` still fetches ~200 KB *before* the video plays — wasted bytes when LCP is what matters | Inspect the `<video>` tag; `preload="metadata"` and `preload="auto"` are both forbidden |
| 3 | **Autoplay deferred until hero image LCP has fired** | Otherwise the video competes with the hero image for early bandwidth and pushes LCP > 2.5 s | Wire `play()` to an IntersectionObserver + a `requestIdleCallback` after the hero image's `load` event |
| 4 | **The `poster` image is the LCP element with `fetchpriority="high"`** | The video itself never becomes the LCP element — too slow to be measured as a "contentful paint" | Lighthouse → Performance → "Largest Contentful Paint element" must point to the poster `<img>` or `<picture>`, not the `<video>` |
| 5 | **Loop ≤ 5 s, resolution ≤ 720p, payload ≤ 2 MB** | The mobile budget. Encoding to H.264 + VP9 dual-codec, q=50, 24fps usually lands at ~1.5 MB for a 5 s 720p loop. | `ffprobe` the file: `Duration ≤ 5.0s`, `width ≤ 1280`, `file size ≤ 2 MB` |

**Mobile pause is non-negotiable.** The Phase 1a re-audit (`ui-ux-reference-study.md` §12) measured 3 video-heavy sites at 375 viewport: Auwa pauses 6/6 videos on mobile, Kindred pauses 7/7, Watch House plays 7/7. The agency standard follows Auwa/Kindred — **all autoplay videos must pause when `window.innerWidth < 768`**, gated either by JS or by `@media (max-width: 767px) { video[autoplay] { display: none } }`.

### Minimal reference implementation (Astro / vanilla, drop-in)

```html
<picture>
  <source srcset="/hero-poster.avif" type="image/avif">
  <img src="/hero-poster.jpg" alt="…" fetchpriority="high" decoding="async" width="1280" height="720">
</picture>
<video
  poster="/hero-poster.jpg"
  muted
  playsinline
  loop
  preload="none"
  aria-hidden="true"
  data-ambient
></video>

<script>
  // Constraint 1 + 3 + mobile-pause guard
  if (window.innerWidth >= 768 && navigator.connection?.effectiveType === '4g') {
    const v = document.querySelector('video[data-ambient]');
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestIdleCallback(() => { v.src = '/hero-ambient.mp4'; v.play(); io.disconnect(); });
      }
    }, { rootMargin: '100px' });
    io.observe(v);
  }
</script>
```

### Verification gate (pre-launch)

Before flipping `noindex` to production, the LCP element must NOT be the `<video>`. Lighthouse → Performance → LCP element must show the poster image. If it shows the video, one of the five constraints failed; do not ship.

---

## 9. Tools

Use these to verify the rules above. All entries are free or have a usable free tier (as of 2026-05-13).

| Tool | Free label | Link | Best for |
|------|------------|------|----------|
| PageSpeed Insights | Free | [pagespeed.web.dev](https://pagespeed.web.dev/) | Core Web Vitals + quick diagnostics. The first stop on every pre-launch pass. |
| Lighthouse (Chrome DevTools) | Free | [developer.chrome.com/docs/lighthouse](https://developer.chrome.com/docs/lighthouse/overview) | Same audits as PageSpeed but runnable locally and on authenticated pages |
| WebPageTest | Freemium | [webpagetest.org](https://www.webpagetest.org/) | Waterfall + filmstrip + real device emulation. Reach for this when PageSpeed says "slow" but doesn't explain why |
| GTmetrix | Freemium | [gtmetrix.com](https://gtmetrix.com/) | Trend monitoring across deploys. Useful for retainer reporting |

Order of use on a fresh deploy: PageSpeed Insights first → Lighthouse for detail → WebPageTest only if the first two leave a gap.
