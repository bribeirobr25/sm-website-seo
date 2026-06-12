# Landing redesign prototype — "Berlin night"

**Created:** 2026-06-12 · **Status:** PROTOTYPE — not wired into the Astro build. Self-contained `index.html`; open it directly in a browser (double-click) — no server, no build step.

## What this is

An awwwards-register redesign of the agency landing page, built as a standalone verification-tested prototype. Dark "Berlin night" art direction anchored on the brand favicon blue (`#0c1a2b`), single accent (`#0071e3` fills / `#7cc0ff` AA text), Inter Variable at display weights, custom WebGL aurora shader, GSAP scroll choreography.

**Sections:** glass nav (CTA always visible on mobile) · 100svh shader hero with split-word reveal · verticals marquee · 3 animated promise counters (5 days / <24h / 20+) · 4 service cards with cursor glow · horizontal-scroll work section (desktop only; vertical stack on mobile) · pricing €219/€390/€570 with "Most chosen" Growth · trust badges · example quotes (honesty-captioned) · final CTA. All copy is the approved EN content from `funnel.ts` / `site.ts` / the schema offer catalog. Portfolio images hotlink the live Vercel deployment.

## Deliberate tech decisions

- **Custom raw WebGL fragment shader instead of three.js** — same visual class, ~3 KB inline vs ~600 KB library. Honors `PERFORMANCE.md` 500 KB budget: total page is ~36 KB HTML + ~90 KB GSAP (CDN) + font + 3 lazy webp.
- **GSAP core + ScrollTrigger only** (no paid SplitText — word-split is hand-rolled).
- **Triple-fallback motion safety:** no JS → everything visible; GSAP CDN fails → `.motion` class never added, content never hidden; `prefers-reduced-motion` → static page, counters show final values, shader off.
- **No full-page scroll-hijack** (banned pattern per the UI/UX audit). The horizontal work strip is desktop-only, inside normal page flow, native-scroll-driven.
- **A11y:** skip link, semantic h1→h2, focus-visible rings, aria-hidden decoration, AA contrast pairs (`#7cc0ff` on `#060b14` ≈ 9:1; white on `#0071e3` ≈ 4.6:1), `scroll-margin-top` under the fixed nav.

## Verification (2026-06-12)

Playwright + headless Chromium, viewports 375×812 / 768×1024 / 1280×900:
- **Zero JS errors, zero horizontal overflow on all three.**
- Mobile + desktop folds visually confirmed (accent rendering, one-line eyebrow, animation completion). Only benign SwiftShader GPU-stall warnings in headless software GL (won't occur on real GPUs).

## Production integration path (when approved)

1. Port as one Astro page using the existing `BaseLayout.astro` (do NOT bypass it — schema/hreflang/OG live there).
2. GSAP via `pnpm add gsap` (not CDN) per TECH.md dependency rules; init inside a client script.
3. Shader becomes a small inline script or island; keep the CSS-gradient fallback.
4. Trilingual: move copy into `funnel.ts` / `page-strings.ts` keys (EN here is already the approved source text); DE/PT-BR via the standard `Record<Locale,…>` pattern.
5. Swap hotlinked images to local `/img/portfolio/...` paths.
6. Keep `noindex` until the production-cutover gates in `docs/clients/agency-breno-bar/PRODUCTION-CUTOVER.md` pass.
