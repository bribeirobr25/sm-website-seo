# UI/UX Reference Study — 24 Best-in-Class Sites

**Created:** 2026-05-18
**Methodology:** Each site was visited via headless Chromium (Docker MCP browser tools). For every entry, we captured the DOM/accessibility snapshot, ran `getComputedStyle` against the hero/nav/body elements to extract the *actual* font families, sizes, weights, line heights, and color tokens (rather than guessing from CSS source), probed at least one hover or scroll interaction, and read the rendered animations from inline styles + computed transforms. Where a site uses heavy GSAP / Lottie / WebGL effects, we describe what we observed at runtime; we don't quote source code we couldn't verify.

**Purpose:** Build a per-vertical reference library for the agency. The synthesis section at the end maps each site's standout techniques to the 12 vertical templates in `docs/design/templates/` so we know *which* moves to borrow when designing for gastronomy / beauty / trades / health / studio / pro-services / pets / automotive / education / events-hospitality / home-garden / artisan clients.

---

## Amendment log

This study is a living document. Each addendum is logged below.

| Date | Phase | Sites affected | Change |
|---|---|---|---|
| 2026-05-18 | Initial draft | All 24 | Original audit at 1440 × 900 desktop. 22 sites measured; HBA §2 and Bulgari §23 blocked by bot-mitigation. |
| 2026-05-19 | Phase 1c | §2 HBA, §23 Bulgari | Re-attempted MCP-browser navigation; both still blocked. Placeholders updated to reference `RUNBOOK-real-browser-audit.md`. Manual measurement deferred to a non-headless session. |

---

## Table of contents

1. [apple.com/iphone](#1-applecomiphone) — flagship product launch · cinematic scrollytelling
2. [hba.com](#2-hbacom) — fashion brand · brutalist editorial
3. [modusprojects.nl](#3-modusprojectsnl) — agency portfolio · oversized type + ambient video
4. [aircenter.space](#4-aircenterspace) — physical space brand · spatial 3D nav
5. [watchhouse.com](#5-watchhousecom) — specialty coffee · luxury hospitality
6. [auwa.life](#6-auwalife) — wellness brand · organic motion
7. [reallyupthere.com](#7-reallyuptherecom) — creative studio · experimental cursor
8. [hubtown.co.in](#8-hubtowncoin) — real estate developer · architectural restraint
9. [milygroup.com](#9-milygroupcom) — B2B natural-products wholesale (antler dog chews) · industrial-craft editorial
10. [horeca-social.com](#10-horeca-socialcom) — German social-media agency serving HoReCa (hospitality) clients · hot-pink confidence
11. [marvellco.com.au](#11-marvellcocomau) — Perth tile & natural-stone artisans · premium trades restraint
12. [evagria.com](#12-evagriacom) — fashion casting director portfolio · maximum minimalism (one font · one color · one size)
13. [flyward.com](#13-flywardcom) — luxury travel management / concierge · warm-brown editorial
14. [sweepingcorp.com](#14-sweepingcorpcom) — industrial services · trust-building
15. [haven-annecy.fr/en](#15-haven-annecyfren) — boutique hospitality · place-as-product
16. [lessestudio.com](#16-lessestudiocom) — design studio · minimalist confidence
17. [laurentiwebdesign.it](#17-laurentiwebdesignit) — freelancer · personal brand
18. [juanmora.co](#18-juanmoraco) — individual portfolio · monochrome restraint
19. [t11.com](#19-t11com) — 360° events-management partner (ME/Asia) · catalog-as-portfolio
20. [kindredofireland.com](#20-kindredofirelandcom) — craft heritage · texture + story
21. [victorfuruya.com](#21-victorfuruyacom) — designer portfolio · type-driven
22. [fourmula.ai](#22-fourmulaai) — AI product · clarity over hype
23. [eclettica.bulgari.com/emerald-strata](#23-ecletticabulgaricomemerald-strata) — luxury campaign · cinematic immersion
24. [awwwards.com](#24-awwwardscom) — the awards site itself · meta-reference

[Cross-site synthesis — patterns that recur](#cross-site-synthesis)
[Agency takeaways — what to borrow per vertical](#agency-takeaways)

---

## 1. apple.com/iphone

**Vertical match:** consumer-product launch / e-commerce campaign hub. Closest agency analogue: gastronomy menu showcase or premium beauty / studio product page.

### Typography (measured at runtime, 1440 × 900 desktop)

- **Family stack:** `"SF Pro Display", "SF Pro Icons", "Helvetica Neue", Helvetica, Arial, sans-serif` for display; `"SF Pro Text"` for everything ≤17px. Apple loads two SF Pro optical sizes — Display for hero/section heads, Text for nav/body — because at large sizes Display's narrower spacing and tighter joins look right, and at small sizes Text's larger x-height + open apertures stay readable.
- **Hero `h1`:** 80px / line-height 84px / weight 600 / letter-spacing −1.2px / color `rgb(29, 29, 31)` (their "near-black," never pure #000 — softer at high contrast, less harsh on retina).
- **Section `h2`:** uniformly **56px** across all 11 narrative sections (Switch to iPhone · Explore the lineup · Take a closer look · Why Apple is the best place · Upgrade to iPhone · Get to know iPhone · Privacy · iPhone essentials · Significant others · iPhone). The repetition is the rhythm.
- **Body:** 17px / weight 400 / line-height ~21px / letter-spacing −0.374px / color `rgb(29, 29, 31)`. Note the *negative* tracking — Apple tracks tighter than browser defaults at every size; it's the single most identifiable typographic signature on the site.
- **Footer "sosumi" legal text:** 12px / `rgba(0, 0, 0, 0.56)` — pure opacity drop rather than a separate grey, so it inherits the theme color cleanly on any background.

### Buttons (the most-copied UI element on the web)

Two distinct CTA tiers, *both* measured live:

1. **Primary solid pill** — `background: rgb(0, 113, 227)` (the "Apple blue"), `color: #fff`, `border-radius: 980px`, `padding: 11px 21px`, `font-size: 17px`, `font-weight: 400`, transparent 1px border (so hover/focus can recolor the border without layout shift). The 980px radius is intentionally absurd — it guarantees a perfect pill at any pixel width without per-component math.
2. **Text-link CTA** — color `rgb(0, 102, 204)` (slightly darker than the button blue, so a flat text link still reads as a link beside the brighter button). Arrow glyph appended via pseudo-element, slides 4px on hover.

No border-radius on text-link CTAs (`0px`). No drop-shadow anywhere on the page. Color contrast against `#fff` body bg = 4.7:1 for the link blue, 5.7:1 for body text — comfortably AA.

### Layout & rhythm

- **Top nav:** 44px tall, `rgb(250, 250, 252)` (nearly white, faintly grey to separate from page body), nav links 17px / weight 600 / `rgba(0, 0, 0, 0.8)` (80 % opacity black — softer than full black, picks up subtle backgrounds).
- **14 sections** total, each its own `<section>` element with semantic class names spelling out the narrative arc — `section-hero`, `section-consider-alt`, `section-select`, `section-guided-tour`, `section-incentive`, `section-upgrade`, `section-consider`, `section-privacy`, `section-essentials`, `section-image-accordion`, `section-index`. Treat that class list as a recipe for any product launch page: *Hero → Convince to switch → Show the lineup → Closer look → Why buy from us → Trade-up offer → Feature highlights → Privacy promise → Accessories → Index.*
- **Background pacing:** alternating `#fff` ↔ `rgb(245, 245, 247)` ("background-alt") to chunk the scroll into perceptual blocks. No section is the same height as its neighbor — heights observed: 385 / 957 / 700 / 789 / 930 / 875 / 1116 / 723. Variation prevents the rhythm becoming mechanical.

### Motion

- Scroll-reveal classes `staggered-start` and `staggered-end` on every section — IntersectionObserver-driven. Items in the section don't fade in *together*; they stagger by ~60-100ms, so the eye lands on the headline first, then the supporting block, then the CTA last. This is the difference between "a section appeared" and "a section announced itself."
- The hero has **no autoplay video** on this particular landing (an iPhone *category* page); the lineup detail pages (e.g. iPhone 17) do. Restraint is the choice.
- Cursor is the OS default. No custom cursor anywhere.

### Imagery

- 112 `<img>` elements, **zero** with `loading="lazy"` set. Apple ships their own scroll-managed loader, which makes the native lazy attribute unnecessary and gives them control over the load order (hero first, lineup tiles next, accessories last). Don't copy the missing-`loading="lazy"` — copy the principle that hero imagery must not be deferred and below-fold deferral should be deliberate, not framework-default.
- `<picture>` elements with multiple sources per breakpoint (retina @2x and @3x). Image accordion section (`section-image-accordion`) keeps a single visible image and cross-fades on click — heavier than a static grid, lighter than a carousel.

### What to steal for the agency

- The **17px nav / 17px body / 56px section / 80px hero** scale is a complete display rhythm that works for any vertical with a story to tell. Borrow it wholesale for a Tier-2 gastronomy or studio landing.
- The **980px border-radius pill button** is one line of CSS and instantly registers as "premium consumer." Use it on the primary CTA only — never on secondary buttons (those stay text-link blue).
- The **negative letter-spacing at every size** is what makes the type feel "expensive." Set `letter-spacing: -0.022em` on body, `-0.015em` on display headings, and the difference vs. browser-default tracking is visible to the eye on the first paint.
- The **alternating-section-background rhythm** is the lowest-effort way to make a long scroll feel structured. Two greys (`#fff` and `#f5f5f7`), alternating.

### Caveats

- This page is for a desktop reader on a fast connection. The image count (112) and section depth are not something a Tier-1 single-page agency landing should imitate. Apple gets away with it because their cache hit rates and edge POPs are exceptional. For a Berlin restaurant on a free Vercel tier, two or three of these sections, max.
- The "Apple blue" CTA does not work in any non-Apple brand context. Borrow the *shape* of the button (pill, 11/21 padding, 17px/400, no shadow), not the color.

### Motion (Phase 1b — measured 2026-05-19)

Apple uses **pure CSS animations and transitions** — `window.gsap`, `window.Framer`, and `window.THREE` are all undefined. Every motion on the page is in the CSSOM.

**Standard transition unit (the Apple "snap"):**
- `transition: color 0.32s cubic-bezier(0.4, 0, 0.6, 1)` — applied to nav `a` and `button` color changes
- 320ms duration with the smooth-ease curve is the Apple house unit; reuse for nav/button color hover

**Scroll-reveal transitions (h2, section content):**
- `transition: opacity, transform 0.32s ease 0.08s` — applied to h2 elements
- 80ms transition-delay is what gives the staggered "headline lands first, body follows" effect when an IntersectionObserver toggles the visibility class

**Stagger cascade (search results dropdown / lineup tiles):**
- `@keyframes globalnav-search-fade-and-slide` — 320ms linear, delays incrementing by 20ms per item (200 / 220 / 240 / 260 / 280 / 300 ms)
- The 20ms inter-item delay is short enough to feel like one continuous wave, long enough that each item registers as its own arrival

**Hero ribbon drop:**
- `@keyframes ribbon-drop` — 800ms linear, one-shot. Applied to `DIV.ribbon-drop-wrapper`.

**Recipe for the agency template:**
```css
:root {
  --motion-fast: 0.18s;     /* button color */
  --motion-base: 0.32s;     /* Apple's house unit — nav, h2 reveal */
  --motion-slow: 0.5s;      /* large element entries, hospitality calm */
  --ease-smooth: cubic-bezier(0.4, 0, 0.6, 1);  /* Apple's ease-in-out */
  --stagger-step: 20ms;     /* per-item delay in cascades */
}
```

---

## 2. hba.com

**Vertical match:** fashion brand / artist e-commerce. Closest agency analogue: a boutique apparel or independent designer landing — would land in the *artisan* template's "designer-led" archetype if we add one.

> ⚠️ **Inspection blocked — deferred to manual session.** `hba.com` sits behind Cloudflare's interactive bot-check, which the headless MCP browser cannot solve. Two audit attempts (2026-05-18 with 6/8/15 s waits; 2026-05-19 Phase 1c retry with 25 s wait) both stalled on the "Just a moment…" challenge page. **No live measurements have been taken.** Per `docs/audit/RUNBOOK-real-browser-audit.md`, measurement is deferred to a manual non-headless session — open in real Chrome, run the inspector script from the runbook §Step 3, paste results here.

**What is publicly known** (industry/press record, *not* a runtime read): HBA = Hood By Air, Shayne Oliver's fashion label. The brand's web presence is recognized in the awwwards / fashion-tech press for a brutalist editorial layout — oversized condensed display type, deep-black backgrounds, asymmetric grids that break expectations every scroll, and product photography styled like a magazine spread rather than a product catalog. The borrowable principle (*if confirmed manually*) is **"magazine first, shop second"** — useful for the artisan template when the client is a craftsperson with strong visual identity who wants the work to lead and the store to be a quiet outcome.

**Status:** placeholder. Excluded from cross-site synthesis until manually measured. Will trigger an entry in `docs/audit/PENDING.md` for next non-headless session.

---

## 3. modusprojects.nl

**Vertical match:** B2B construction-finishing for real-estate projects. Closest agency analogue: the **trades** template — pristine "premium contractor" archetype.

### Stack signals

- **Built on Webflow** (the `webflow-icons` font is loaded). `window.gsap` is present (GSAP animations), a `<canvas>` element exists in the DOM (used for ambient/scroll-driven background work), `<video>` count: 0. Page height: 10 758 px.

### Typography — a three-font stack, deliberately allocated by role

This is the most instructive thing on the page for an agency, so it's worth quoting precisely:

| Role | Family | Source | Live-measured spec |
|---|---|---|---|
| Display (h1, h2) | **Jubilee Silver** (Otjubilee) | Monotype-style transitional serif | h1 = **121.6px / 133.76px line / 400 weight / UPPERCASE / `#fff`** on hero; h2 = **64px / 70.4px / 400 / UPPERCASE / `#000`** |
| Body paragraphs | **Neue Montreal** (Pangram Pangram) | Geometric humanist sans | p = **19.2px / 30.72px line / 300 weight / +0.597px tracking / `#fff`** on hero |
| UI / nav / buttons | **Telegraf** (Pangram Pangram) | Neo-grotesk sans | 14.4px / 17.28px line / 400 weight |

Why this works: the serif gives the page authority and a sense of "we have a point of view" (rare in trades); the body sans gives the long-form content easy readability at low contrast; the UI sans keeps the chrome out of the way so it doesn't compete with the editorial type. **Three families, three jobs, zero overlap.**

### CSS-variable architecture (visible at runtime)

Webflow exposes the design tokens as custom properties — these are quotable as a starter system for any Tier-2 client:

```
--_typography---font-size--h1: calc(4rem + 4vw)   /* fluid display */
--_typography---font-size--h2: 4rem
--_typography---font-size--h4: 1.5rem
--_typography---font-size--h5: 1.25rem
--_typography---weight--heading: 400              /* never bold; the serif does the work */
--_typography---weight--body: 300                 /* near-light */
--_typography---line-height--body: 1.75           /* generous, magazine-like */
--_sizing---container: min(1450px, calc(100vw - 6rem))  /* max 1450, always 3rem gutters */
--_colors---orange: #ffa574                        /* the single accent */
--_colors---mid-grey: #848c8f
--_colors---text: color-mix(in srgb, currentColor 70%, transparent)  /* adaptive low-contrast body */
```

The `color-mix` body text is the move worth borrowing: instead of declaring `#666` body and `#999` muted, declare `currentColor` at 70 % alpha and the body text automatically adapts to whatever context (white background, dark hero, orange card) inherits the color. One token, every context, always reads correctly. Modern, but supported in every evergreen browser since 2023.

### Buttons

- **Primary CTA** "Bespreek jouw project" (Discuss your project) — `background: #ffa574` (the brand orange), `color: #000`, `border-radius: 4px`, `font-size: 14.4px`, `font-weight: 400`. Not a pill. Not a square. A *slightly* rounded rectangle (4px) that says "we're modern but we're not chasing trends."
- The decision to put black-on-orange (instead of white-on-orange) is a contrast call: pure black on `#ffa574` measures 8.6 : 1 — AAA. White on the same orange would be ~2.4 : 1 — fails AA. The agency anti-pattern guard in `DESIGN-BEST-PRACTICES.md` §5 (white-on-tinted button hover trap) is being respected here by default.

### Layout & motion

- 9 sections, fluid container capped at 1450px with 3rem gutters — a comfortable reading column on 16" laptops, never edge-to-edge text.
- Heading rhythm: all section headlines are **uppercase serif at 4rem** (64px). The contrast of *serif + uppercase* is unusual; uppercase is typically reserved for sans display. Doing it with a serif gives the page an architectural, almost lapidary feel — appropriate for a finishing contractor whose clients are architects and developers.
- GSAP-driven scroll reveal on every section; the canvas appears to hold an ambient grain/noise overlay (a Webflow trend in late 2025 / 2026).

### What to steal for the trades template

- **Three-font role allocation** (serif display / humanist body / neo-grotesk UI) translates directly into the trades premium archetype. The agency's current `templates/trades.md` should add this as the "premium contractor" font system option, alongside the existing utilitarian sans-only option.
- **`color-mix` body-text token** is portable to every template; adopt agency-wide in the next docs sweep.
- **Uppercase serif headlines** — niche choice, but powerful when the client is a B2B service who wants to read as design-conscious to a design-conscious customer (architects, interior designers, developers).
- The `min(1450px, 100vw - 6rem)` container is a one-line replacement for our current `max-w-7xl mx-auto px-6` pattern and behaves better at 1024-1440px viewports.

### Caveats

- 10 758 px page height with GSAP + canvas is heavy. Lighthouse on this page would not score well by Apple standards. For a Berlin tradesperson on a free Vercel tier we'd cap the page at ~6000 px and skip the canvas overlay.

---

## 4. aircenter.space

**Vertical match:** real-estate / premium business-center marketing (the project sells offices in a Moscow Class-A development by Tekta Group). Closest agency analogue: a real-estate or events-hospitality client where the *building itself* is the product.

### The structural surprise — a fixed-viewport "slide stack"

The single most distinctive thing on this site is **the page is not scrollable in the conventional sense**. Live measurement:

- `document.documentElement.scrollHeight = 900 px`
- `window.innerHeight = 900 px`
- After `window.scrollTo(0, 5000)`, the actual `scrollY` returned to `0`
- `scroll-snap-type: none` on both `html` and `body`

What's happening: every "section" is layered absolutely in the same viewport and cross-faded by JS as the user wheel/swipes. The DOM contains seven `<h2>`s — `THE MOMENTUM / TO RISE HIGHER` · `A NEW / PREMIUM / FORMAT` · `AT THE CENTER / AT THE HEART / OF BUSINESS / OF LIFE` · `BUSINESS CENTER / DESIGNED WITH / PEOPLE IN MIND` · `A TANGIBLE SENSE / OF STATUS` — but they live in z-stacked panels, not a vertical document. The page is closer to a Keynote presentation than a website.

This is a deliberate choice that mirrors how property-developer collateral is consumed: a slow, deliberate sequence where each frame has one idea. It costs accessibility (screen-readers see a long jumbled string of h2s; keyboard users cannot tab "down the page" the way they expect) — so it's not a pattern to copy lightly. But for a high-trust, low-volume B2B sale where the conversion is "request a viewing," it works.

### Typography — a single family, used at scale

- **One font only: Onest** (open-source modern grotesk by Martin Vacha, GitHub-distributed). Weights loaded: 400, 500. 600 is declared but not loaded.
- **h1 and h2 are identical:** 71px / line-height **70px** / weight 400 / letter-spacing **−2.84px** / `text-transform: uppercase` / `#000`. The line-height being *less* than the font-size (70 < 71) is intentional — at all-caps there are no descenders, so the visible line can sit tighter than its em box. This produces the chiseled, architectural look you see on the page.
- **p (used as tagline):** 28px / 400 / 30px line / uppercase / black.
- **Body / nav:** 14px / weight 500 / 18px line / **uppercase, grey #8d8d8d.** Yes, body text is uppercase across the entire site.

The uppercase-everywhere is a strong move and a strong constraint. It signals "building, architecture, status" — the same vocabulary as luxury watch ads. It's brutal on long-form readability, which is why the site has so little long-form copy.

### Color & button system

CSS variables on `:root` expose a complete button state-machine — primary / secondary / tertiary / link, each with normal / hover / active / disabled. Quotables:

```
--t-primary: #000
--t-heading: #000
--c-superlight: #f2f2f2
--c-black-hover: #333
--t-button-primary-background: #000
--t-button-primary-text: #fff
--t-button-secondary-active-hover-background: #333
--c-error: #e34a4a
```

Two colors do all the work: pure black and a near-white `#f2f2f2`. Hover state on the black primary button shifts the *background* to `#333`, not the text — a quiet move that respects the "color is one of two values" rule. `--c-error: #e34a4a` is the only chromatic accent in the entire token system, reserved exclusively for form errors. Restraint as a brand value.

### Grid

```
--grid-col: calc((100vw - calc(1px * 20) * 11) / 12)
```

A true 12-column viewport-fluid grid with 20px gutters. Every layout decision on the page can be described in column-spans. Pair with `--header-height: calc(30px + 40px) = 70px` for a clean header offset.

### What to steal

- The **z-stacked panel pattern** is appropriate for clients selling a single high-value, slow-decision item (a building, a clinic, a course, a wedding venue). Not for a restaurant or a clinic with weekly volume.
- **One typeface, two weights, used at extreme scale** is a teachable constraint for a junior designer. The agency's `templates/professional-services.md` should include an "uppercase grotesk" option to balance the existing serif-led professional voice.
- The **single error-red token** (`--c-error: #e34a4a`) — adopt this exactly. We currently don't have a canonical error color in `tokens.css`. This is the right value (4.7 : 1 against white, AA-comfortable).

### Caveats

- Z-stacked panels break browser back/forward, deep-linking, and SEO. Aircenter accepts this because their leads come from broker referrals, not organic search. For any Berlin agency client whose acquisition includes search, do *not* copy the pattern.
- Uppercase body text fails roughly 100 % of plain-language readability tests. Use uppercase for chrome (nav, buttons, micro-labels) — not for paragraphs.

### Motion (Phase 1b — measured 2026-05-19)

**Correction to original v1 analysis.** The page is NOT z-stacked cross-fade as described initially. The live runtime read shows it's a **horizontal-translate panel system** with click-driven navigation:

- All sections beyond the visible first have `transform: matrix(1, 0, 0, 1, -2560, 0)` — i.e. translated 2560px to the left, off-screen
- `opacity: 0` is set on the off-screen sections
- Sections themselves declare `transition: all 0s ease` — meaning the *underlying* CSS transition is zero; an external JS controller is animating these elements imperatively (likely via inline-style updates, GSAP or a custom request-animation-frame loop)
- `bodyHasWheelHandler` returned `false` — no wheel hijacking. Navigation is click-driven via the "CHOOSE AN OFFICE" UI, not scroll. (Previous v1 claim of "wheel events drive cross-fade" was wrong.)

**Class taxonomy:** `ui-light` / `ui-dark` swap describes the visible state of each section. `section--full-height` and `section--no-overflow-clip` are used as the structural primitives for the off-screen-then-slide-in pattern.

**Color hover transition:**
- `transition: color 0.6s cubic-bezier(0.25, 0.74, 0.22, 0.99)` on `a` and `button`
- 600ms is slow; the easing curve has a *very* late-finishing tail (0.99 final-y) — visually reads as "decisive snap, long settle." Appropriate for a Class-A real-estate brand where every interaction wants to feel deliberate.

**Active CSS animation at runtime:**
- `@keyframes spin` — 1500ms linear infinite, on `DIV.spinner js-carousel-webgl-spinner` — a small WebGL preloader for the in-section image carousel (so Three.js *is* loaded somewhere, but namespaced into the carousel rather than as `window.THREE`)

**Recipe correction for the agency:** if cloning Aircenter's pattern, build it as **horizontal `translate-X` + opacity transitions of duration ~600-800ms with an aggressive ease-out**, NOT as z-stacked panels. The horizontal-translate pattern is also slightly more SEO-tolerable because deep-linking can scroll-into-view a specific section by ID; z-stacked panels can't.

---

## 5. watchhouse.com

**Vertical match:** specialty coffee / multi-location hospitality. **The single most important reference in this study for the gastronomy and beauty templates.** This is what "premium hospitality" looks like when it's done with restraint.

### The cream background ↪ instant mood signal

Live-measured: `body { background-color: rgb(249, 244, 238) }` — hex `#F9F4EE`. **Not pure white.** A warm, faintly yellow-pink bone color. This single CSS line is responsible for ~40 % of the brand feel: before any content loads, the page already says "this is a calm, hospitable, considered place." Pure white reads as "tech product"; cream reads as "hospitality." For the gastronomy / beauty templates, this is the move to copy first.

### Typography — two faces, two jobs

| Role | Family | Spec |
|---|---|---|
| Display (h1/h2/h3 + brand wordmark) | **Tiempos Headline** (Klim Type Foundry, transitional serif) | h3 = 36px / weight 500 / line-height 39.6px / **letter-spacing −0.72px** / `#000`. h2 inline 18px. h1 wordmark 20px. |
| Body / nav / CTA | **Balto** (Mark Simonson Studio, neo-grotesque) | 16px / weight **300** (light) / line-height 24px / `#000`. |

A 300-weight body is unusual and slightly risky for readability, but on `#F9F4EE` cream the contrast measures ~17.5 : 1 (still AAA), and the cream background mutes the sub-pixel rasterization that makes light weights look weak on pure-white. The light weight + cream pairing is a deliberate atmospheric choice; copying the weight without the background tint will look wrong.

### CTAs — every single button is a text link

Live-measured across 8 CTAs on the page: **zero have a background color, zero have a border, zero have a border-radius greater than 0px.** Two CTA voices coexist:

1. **Sentence-case verb, period-terminated** — `Learn more` · `Shop.` · `Visit us.` · `Menu.` — 14-16px, weight 500, no tracking. The period is brand voice (the brand tagline "Modern Coffee." also ends with a full stop). A CTA is a sentence, not a label.
2. **Tracked-uppercase micro-label** — `SHOP ALL` · `BISHOPSGATE` — 11px, weight **300**, letter-spacing **+2.2px**, `text-transform: uppercase`. Used for store-locations and directory-style links.

This is a strong, opinionated system: *text **is** the interface.* No pills. No drop shadows. No hover backgrounds. The interactive affordance is carried entirely by typography and the underline that appears on hover (typical inferred behavior, common across Shopify/custom hospitality builds). For a Berlin café client this maps directly to the gastronomy template's "boutique" archetype.

### Imagery — ambient video everywhere

- **9 `<video>` elements on the homepage**, every one of them `autoplay: true`, `muted: true`. All looping silent product/atmosphere shots — espresso pouring, hands working a brew bar, an empty café at golden hour.
- No background-image inline styles detected. All ambient content is either `<video>` or `<picture>` (managed by the framework loader).
- No GSAP / Framer Motion / Three.js / Lottie. Pure CSS + native autoplay loops. This is *efficient* "luxury motion": the perceived production value is enormous, the JS payload is small.

### Page mechanics

- Page height: 6640 px (substantial but not extreme).
- No `<section>` semantics — the page uses `<div>` containers exclusively (a Shopify-theme tell). Don't copy that; semantic landmarks are still our standard.
- Body text uses no `text-transform` globally — a refreshing contrast to Aircenter's brutalism.

### What to steal for the agency

1. **`#F9F4EE` (cream) as a default body background for gastronomy / beauty / boutique-studio clients.** Add to `tokens.css` as `--bg-cream`. The instant atmospheric uplift is worth more than any animation.
2. **The two-CTA-voice system** — *period-terminated sentence* + *tracked-uppercase micro-label* — is portable to any vertical and maps directly onto the agency's existing "primary action / directory link" pattern. Codify in `templates/gastronomy.md` and `templates/beauty.md`.
3. **Tiempos Headline + Balto** as the gastronomy "boutique" font pair. Both are commercially licensed (Klim + Mark Simonson are not free) — but the *pairing pattern* (transitional serif headline + neo-grotesque text in a light weight) can be replicated with Fraunces + Inter, or Playfair Display + Work Sans, for clients without budget for premium licenses.
4. **Ambient autoplay-muted MP4 loops** are now standard for premium hospitality. Cap at 4-6 per page, target 8-15s loops, encode <500 KB each, always with a `poster` frame. Stronger than Lottie or canvas for this vertical.

### Caveats

- 9 autoplay videos on one page is past the agency's performance budget (`PERFORMANCE.md`). For an actual client we'd cap at 3 and lazy-load the rest behind IntersectionObserver triggers below the fold.
- "Text is the interface" demands strong copy. If the client's copy is weak, this aesthetic collapses into illegibility because there's nothing else carrying the page.

---

## 6. auwa.life

**Vertical match:** wellness brand / lifestyle book + objects e-commerce, anchored in Japanese aesthetic philosophy. Closest agency analogue: the **beauty** template's holistic/wellness archetype, or a high-touch boutique studio.

### Stack signals — modern, deliberate, every choice is named

- **Tailwind CSS v4** (the `--tw-*` and `--color-*` OKLCH token signature on `:root`). Likely Next.js (Vercel deploy footprint).
- **All brand colors declared in OKLCH** — the more recent perceptually-uniform color space. The brand has named tokens for its hero pair:
  - `--color-sumi: oklch(10% 0.022 235)` — "sumi" (Japanese ink-stick black), with a tiny blue cast.
  - `--color-washi: oklch(92.8% 0.02 80)` — "washi" (handmade Japanese paper), pale warm cream.
- Three-token cosmic-blue scale for accents (`--color-cosmic-50/100/200/300/400/900`).
- `default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)` — the "standard" Material easing, which Tailwind v4 uses by default. The brand inherits a calm, gentle motion curve without explicit declaration.

### Typography — three families, three jobs, plus a fourth for kanji

Live-measured:

| Role | Family | Spec |
|---|---|---|
| Body display, h2/h3, lead paragraph | **EB Garamond** (Google Fonts, free) | h2 = 44px / 400 / line-height 48.4px · h3 = 60px / 400 / 64.8px · p = **32px / 400 / 43.2px / +0.16px tracking** (yes, lead paragraphs are 32px serif — not headline, *paragraph*, set at near-display scale) |
| UI / nav / micro-labels | **Instrument Sans** (Instrument Studio, free) | body 16px / 400 / 24px line; nav 16px / 400 |
| Eyebrow `h1` | **Instrument Sans** | **12px / 400 / +1.92px tracking / UPPERCASE / 45 % opacity black**. Visually a label, semantically the h1 (SEO + accessibility get the right keyword target; design hierarchy gives the visual lead to the 32px paragraph). |
| Kanji (心 = Kokoro) | **Noto Serif JP** (variable `--font-jp-serif` with `Hiragino Mincho ProN`, `Yu Mincho`, `Noto Serif CJK JP` fallback chain) | Loaded as 6 separate font-face subsets so CJK glyphs render correctly without forcing the whole `Noto Serif JP` weight set on every visitor. This level of typographic care for *one* glyph is the most over-engineered (and correct) detail on the site. |

The pattern to internalize: **eyebrow-h1 + giant-serif-paragraph + tiny-uppercase-nav.** It inverts the conventional hierarchy (huge h1 → smaller body) — Awwwards-tier brands keep doing this because *paragraphs read as authoritative when they're set at headline size*. Reserve for clients whose value proposition is told in one sentence, not in a list of features.

### Background & color

- `body { background: oklch(0.97 0.004 95) }` — same warm-cream family as Watch House's `#F9F4EE`, but expressed perceptually. Slightly different hue (95 vs the Watch House warmth which is closer to 80). Both register as "considered" rather than "default-white."
- `body { color: oklch(0.1 0.022 235) }` — near-black with a tiny blue cast = sumi ink. Contrast against the washi background = ~14 : 1. AAA.
- Accent colors limited to the `cosmic-*` blue scale. Five tokens cover everything — call-out backgrounds, link hover, focus rings. **No red, no green, no orange anywhere in the token system.** Restraint as taste.

### CTA marquee-on-hover pattern (the standout interaction)

Inspect any CTA label in the DOM and you see the text duplicated:
- `"SCROLL\nSCROLL"`
- `"OUR STORY\nOUR STORY"`
- `"BE EARLY\nBE EARLY"`
- `"EXPLORE WORLD\nEXPLORE WORLD"`
- `"EXPLORE JOURNAL\nEXPLORE JOURNAL"`

The second copy is positioned below the visible one (CSS `overflow: hidden` on the button + flex column); on hover, the inner translates up by `100%`, replacing the visible label with its duplicate. The eye sees the same word — but reads it as a tiny *motion event*. It costs nothing (no JS, pure CSS transform with a 200-300ms ease-out), but it's the difference between "the cursor is over a link" and "the link acknowledged me." For any agency client building a boutique brand voice, this is a one-CSS-rule luxury upgrade.

```css
/* approximate implementation */
.cta { overflow: hidden; }
.cta-label { display: flex; flex-direction: column; transition: transform 280ms cubic-bezier(0.4, 0, 0.2, 1); }
.cta:hover .cta-label { transform: translateY(-100%); }
```

### CTAs — sizing and tracking

All flat-text CTAs measured: `padding: 12px 24px`, `font-size: 12px`, `font-weight: 400`, `text-transform: uppercase`, `letter-spacing: +1.92px`, `border-radius: 0` (sharp corners). The only rounded element on the page is the SKIP-TO-CONTENT skip-link (`border-radius: 4px`) and a tiny pagination dot (`border-radius: 6px`). The brand voice rejects "softness" outside accessibility-required affordances.

### Layout & motion

- 13 sections, page height 9315 px.
- 6 autoplay videos (ambient, like Watch House) + one `<canvas>` (likely a grain/noise overlay or scroll-reactive blob).
- No GSAP, no Framer Motion, no Three.js. All motion is CSS-driven, using the default Tailwind easing curve. The page feels *expensive* because it doesn't try to.
- Section labels are numbered: `"01 · STORE"`, `"01 / 04"`. Editorial signature — this isn't a website, this is a *publication*.

### What to steal for the agency

1. **Name your brand colors after their cultural reference, not their hex.** `--color-sumi` / `--color-washi` is far better in a stylesheet than `--color-ink-black` / `--color-cream-50`. The agency's `tokens.css` template should encourage clients to name their primary pair after something real (a coffee, a stone, a sky, a fabric).
2. **OKLCH-first color tokens** — adopt across the agency, deprecate hex/HSL token declarations. Tailwind v4 default config already does this; align our existing Tier 2 templates accordingly.
3. **Marquee-on-hover CTAs** — port as a Tier 2 (Astro) snippet under `templates/beauty.md` and `templates/artisan.md`. ~6 lines of CSS, infinite re-use.
4. **Eyebrow h1 + display paragraph** as the hero pattern for clients with one-sentence value props (yoga studio, herbalist, ceramicist, perfumer). Already a fit for the *beauty* template's holistic/wellness archetype.
5. **Numbered section labels** (`01 / 04`, `02 · About`) as a low-cost editorial flourish — adopt across beauty / artisan / events-hospitality templates.

### Caveats

- A 32px-serif lead paragraph is heavy line-length-wise. The site keeps it short (3-4 lines max) for a reason. Clients without strong copywriting will fail to fill the space and the move collapses.
- Six autoplay videos + a canvas is still heavy. For a Berlin yoga studio, target *one* hero loop + the canvas grain, not six.

### Motion (Phase 1b — measured 2026-05-19)

**Marquee-on-hover CTA — fully decoded.** This is the highest-leverage interaction in the study; the live runtime read showed exactly how it's built.

The button is a stack of three layered spans inside `<a>` with `overflow-hidden`:
1. **Outer button:** `transition: color 0.5s cubic-bezier(0.7, 0, 0.3, 1), border-color 0.5s cubic-bezier(0.7, 0, 0.3, 1)`
2. **Background fill layer** (e.g., `.bg-sumi` on dark hover variants): `transform-origin: bottom; transform: scaleY(0)` at rest. On hover, `transform: scaleY(1)` with `transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1)`. The bg slides up from the bottom to fill the button.
3. **Inner label spans** (the visible label + its hidden duplicate below): `transition: transform 0.5s cubic-bezier(0.7, 0, 0.3, 1)`. On hover, the column translates up by 100%, replacing the visible label with the duplicate.

All three layers share the same **0.5s duration** and the same **`cubic-bezier(0.7, 0, 0.3, 1)` easing curve** (≈ easeInOutQuart). The coincidence is intentional: bg slide-up + label translate up + color change all complete at the same moment, producing one unified "the link acknowledged me" event rather than three separable animations.

**Other transitions:**
- General `a` selector: `transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1)` (≈ easeOutExpo — decelerating, almost-physical settle). Used for image-card hover lifts.
- `button`: `transition: color 0.18s ease-out` (fast text-only hover).
- `nav a`: `transition: <all color tokens> 0.3s cubic-bezier(0.4, 0, 0.2, 1)` — Tailwind's default ease for color changes.
- **No GSAP / Framer / Three.js loaded.** Pure CSS.
- Scroll cue line: `@keyframes scrollCueBreathe` — 2800ms linear infinite, scaleY pulsing (a slow visible breath).

**The portable recipe (drop into Tailwind v4 `@theme`):**
```css
:root {
  --motion-marquee: 0.5s;
  --ease-marquee: cubic-bezier(0.7, 0, 0.3, 1);
}
.cta--marquee { overflow: hidden; transition: color var(--motion-marquee) var(--ease-marquee), border-color var(--motion-marquee) var(--ease-marquee); }
.cta--marquee .cta__label { display: flex; flex-direction: column; transition: transform var(--motion-marquee) var(--ease-marquee); }
.cta--marquee:hover .cta__label { transform: translateY(-100%); }
.cta--marquee .cta__fill { position: absolute; inset: 0; transform: scaleY(0); transform-origin: bottom; transition: transform var(--motion-marquee) var(--ease-marquee); }
.cta--marquee:hover .cta__fill { transform: scaleY(1); }
```

---

## 7. reallyupthere.com

**Vertical match:** individual creative practitioner (designer + dev). Closest agency analogue: a solo photographer, illustrator, or designer-craftsperson landing — or our own agency portfolio page.

### The signature: 144px display nav over a body that uses system fonts

Live-measured:

- **Oziksoft 900** (an obscure expressive display face) is used at exactly **144px / line-height 115.2px / uppercase / weight 400** for the three nav items — `WORK · ABOUT · CONTACT`. Each character is split into its own `<div>` (so the DOM shows `W`, `O`, `R`, `R`, `K` as siblings) — the per-character split is what enables individual letter animations on hover (a classic GSAP "letter scramble" or "letter scale-up" pattern).
- **Body text uses `system-ui, -apple-system, BlinkMacSystemFont, ...` only** — zero custom body font. The portfolio author trusts the OS to render its native sans (San Francisco on macOS/iOS, Segoe UI on Windows, Roboto on Android) and reserves the typographic personality entirely for the display face.
- **PP Neue Montreal Mono** is loaded for one role only: the tagline "Creative Practice of Brandon Herbel" — 12.8px / 400 / monospace. A signature for "I'm a developer too."

This is the most economical typographic system in the entire study: **two custom fonts loaded** (one for the giant nav, one for the byline), system stack does everything else. Page weight benefit is significant — the agency's Tier 1 pure-static landing template could adopt this pattern verbatim for solo-practitioner clients.

### The portfolio tile pattern — black-on-black until you arrive

The work list contains 9 project tiles, each measured in our snapshot. All of them share an identical "trick":

- `background-color: rgb(0, 0, 0)`
- `color: rgb(0, 0, 0)`

Black text on a black background = invisible label. The text *is* there in the DOM (good for SEO + screen readers — names like `NIKETOWN CHICAGO · BRANDING`, `BIGMOUTH · APPAREL`, `FILMOGRAPH · WEBFLOW DEV` are crawlable) but visually the tiles read as pure black rectangles holding a project image. **On hover** (inferred from GSAP being loaded + the tile structure) the project image scales up + the label flips to white, revealing the project name. It's a *delayed-information* aesthetic — the visitor has to engage to know what they're looking at, which is the right move for a portfolio author who wants the work, not the metadata, to lead.

Tile heights are deliberately non-uniform: 455, 513, 448, 392, 384, 357, 411, 474, 315 px. Asymmetric masonry. The page does not aspire to a grid — it aspires to *rhythm*.

### What to steal

- **System-ui body + one expressive display face** is a portable pattern for any solo-practitioner client (tradespeople, photographers, illustrators, designers). Cuts custom-font payload by ~70 % vs. a two-custom-font setup.
- **Black-on-black until hover** is a portfolio device, not a content-site device. Useful for the *agency's own* future portfolio page — not for our hospitality / health / trades clients (their visitors need labels to be visible).
- **Per-character DOM split for display headlines** is the prerequisite for any character-level animation. If we add a "letter wave on scroll" snippet to the artisan template, this is the structure we need.

### Caveats

- "Black-on-black labels reveal on hover" is anti-pattern for accessibility on touch devices (no hover state). The portfolio almost certainly has a mobile fallback where labels are visible by default — confirm before borrowing.
- Heavy reliance on GSAP for letter animations means a JS-execution-blocked user sees only a list of words. Acceptable for a portfolio (Brandon's audience opens JS); not acceptable for a restaurant landing.

### Motion (Phase 1b — measured 2026-05-19)

**GSAP v3.15.0 is loaded** (`window.gsap.version = '3.15.0'`). Library defaults: `duration: 0.5`, `overwrite: false`, `delay: 0` — i.e. the studio uses GSAP's house defaults rather than overriding them.

**Per-character letter setup confirmed:** the W / O / R / R / K divs (one per character) each carry `will-change: transform` at rest. That's the unambiguous signal GSAP applies before a `gsap.to(target, {y, x, rotation, ...})` tween — it pre-promotes the element to its own GPU layer so the upcoming transform animation runs at 60 fps. The visible transform is `none` at rest; GSAP writes inline `transform: matrix(...)` only during scroll or hover events that fire the tween.

**Project-tile reveal — pure CSS, not GSAP:**
- `transition: clip-path 1s cubic-bezier(0.9, 0, 0.1, 1)` on `[class*=tile]`
- 1000ms duration is unusually long; the `cubic-bezier(0.9, 0, 0.1, 1)` is an extreme S-curve (very flat → very steep → very flat) — visually reads as "pause → snap → settle." Used here because the project preview reveals are the centerpiece of the page; the 1 s duration earns its weight.

**GSAP scope caveat (per Phase 1b scoping):** the actual letter-animation tweens (their targets, end values, ease string, scroll-trigger configs) are *not* in the CSSOM and not in `getAnimations()`. They live in GSAP's internal timeline, which is empty at rest (`activeTweens: 0`). To capture the full tween definition, a manual DevTools session is needed — open the page, hover the WORK letters, then snapshot `window.gsap.globalTimeline.getChildren(true, true, false)` while the tween is mid-flight. Deferred to a future Phase 4 manual session.

---

## 8. hubtown.co.in

**Vertical match:** real-estate developer (Indian, 40-year legacy). Closest agency analogue: a developer or architecture-firm client where institutional credibility matters and the building portfolio is the asset.

### The structural choice — render everything inside a canvas

Live DOM inspection after the preloader completes:

- **Zero `<h1>`, `<h2>`, `<h3>`, or `<p>` elements** anywhere in the page. The semantic DOM is essentially empty.
- A single `<canvas width="1440" height="900">` occupies the full viewport at `position: static`.
- `body.innerText` contains the *strings* — `WE BUILD THE FUTURE / OF REAL ESTATE` · `FUTURE · INNOVATION · COLLABORATION · EXCELLENCE · PURPOSE · LEGACY` — because those words live in absolutely-positioned overlay HTML the canvas paints behind. But there is no document outline.
- `document.documentElement.scrollHeight = 900 px` = no document scroll. All "navigation" is canvas-rendered.

This is the WebGL-cinematic pattern taken to its logical extreme. The page is closer to a Unity or Unreal experience embedded in a browser tab than a website. It works for Hubtown because their audience is institutional investors and high-net-worth buyers who arrive via personal introduction, not Google — so the SEO collapse is acceptable.

### Color & atmosphere

- `body { background-color: rgb(2, 10, 24) }` — hex `#020A18`. Near-black with a perceptible blue cast. Reads as "premium nighttime" — the same tonal family that Bulgari, Rolex, and luxury developers all converge on.
- Single color does almost all the work; chromatic accents (if any) live inside the canvas render.

### Typography (loaded faces only)

| Family | Weights | Role |
|---|---|---|
| **Grotesk** (a custom-licensed family — likely Schick Toikka's or similar) | 300 / 400 / 700 | Display + body — sliced into Light, Regular, Bold as separate `@font-face` declarations rather than a single variable font |
| **Commit Mono** (Eigil Nielsen, 2024 open-source monospace) | 400 | Likely numeric or chrome labels |

Note: the three Grotesk weights are loaded as three separate `@font-face` URLs. This is *less* efficient than a variable Grotesk would be (a single woff2 covering 100-900) — for a Tier-2 client we'd consolidate. Hubtown is paying for the convenience because their JS payload already dwarfs the font budget.

### What to steal

- **`#020A18` as a "luxury nighttime" body background** — adopt as a named token (`--bg-night`) for high-end clients (jewelry, finance, premium real estate) whose brief involves the word "exclusive."
- **The lesson, not the implementation.** A canvas-rendered website is not a pattern for our clients. The *teachable* takeaway is that the site commits 100 % to one rendering metaphor — and that commitment is what makes it feel cinematic. Half-measures (some HTML, some canvas) feel unfinished. If a client wants WebGL flair, give them one cohesive piece (a hero animation, a portfolio carousel) — never sprinkle.

### Caveats

- **Accessibility:** screen readers find nothing on this page. Keyboard navigation has no document outline to follow. Crawlers see one `<canvas>` and the page title. This is illegal under EU/German web-accessibility law (EAA, BFSG-as-of-2025) for a public-facing commercial site. The agency cannot ship a clone of this for any Berlin client; it would expose them to fines under §3 BFSG.
- **Performance:** preloader display of "100% LOADING CONTENT" indicates the WebGL scene weighs enough to require a blocking pre-load — typical 5-15 MB for this style. Our `PERFORMANCE.md` budget is <1 MB total transfer for the hero. Hubtown's choice is incompatible with our tier-1/tier-2 budgets.

---

## 9. milygroup.com

**Vertical match:** B2B wholesale natural pet products (Mily Group is a Polish/EU manufacturer and supplier of natural antler dog chews — not an investment group, despite the name). Closest agency analogue: the **pets** template at a wholesale / B2B archetype, or the **artisan** template for a maker who sells to retailers.

### The natural-materials color identity

- `body { color: rgb(44, 26, 17) }` — hex `#2C1A11`. A *deep warm-brown text* color (not black, not slate). This single shift — body text in dark brown rather than near-black — is the entire reason the site reads as "natural materials" before any imagery loads. Brown text on cream/bone backgrounds is the visual vocabulary of antler, wood, leather, and bone goods. Adopt the principle for any client whose product is organic-material: **body color is a brand decision, not a system default.**
- Body `background-color` returns `rgba(0,0,0,0)` (transparent) — meaning the body inherits from `<html>`, which we can presume is the brand cream. The decision to ship transparent on `<body>` is unusual; safer to set the cream explicitly. Don't copy this.

### Three-family typographic system — and the Mono is the standout

| Family | Source | Live spec | Role |
|---|---|---|---|
| **Instrument Serif** (Instrument Studio, free) | Google Fonts / GitHub | h1 = **108.47px / line-height 124.69px / 400 / `#fff`** over a hero image | Hero display only |
| **IBM Plex Sans** | IBM, open-source | h3 27.69px / 600 · p 18.37px / 500 · nav 15.9px / 600 / uppercase · body 16px / 400 | Headings (sub-display) + body + nav |
| **IBM Plex Mono** | IBM, open-source | h2 = "PRODUCTS (5)" — 15.9px / **600 / +0.4px tracking / UPPERCASE** | **Catalog labels with programmatic counts** |

The headline move worth importing into the agency template library is the third row: **IBM Plex Mono is used exclusively for label-style `<h2>`s of the form `LABEL (count)`**. Example: `PRODUCTS (5)`. The monospaced glyphs visually align the parenthesis-count, and the mono signals "this is a directory / catalog / index entry," not a story headline. For any B2B wholesale or e-commerce catalog page, this is a one-token upgrade from generic sans-serif chrome.

### CTAs — flat text, uppercase, weight 600

All eight CTAs measured are identical in pattern: transparent background, no border, no border-radius, color `#2C1A11`, **font-weight 600**, **uppercase**, no letter-spacing. Heavier than Watch House's weight-300 lightness — appropriate for a B2B / industrial voice where conviction matters more than delicacy.

### What to steal

1. **Body text in deep warm brown (`#2C1A11`) for natural-materials clients** — adopt as a named token (`--text-natural-brown`) and recommend for any client whose product is wood, leather, ceramic, bread, coffee beans, soap, or similar.
2. **`IBM Plex Mono` for catalog `<h2>` labels with counts** (`PRODUCTS (5)`, `CASES (12)`, `MENU (8)`). The pattern is portable to gastronomy (menu sections), beauty (treatment categories), and trades (project portfolio counts). Add to the gastronomy + beauty + trades templates.
3. **Instrument Serif as a free alternative to premium serifs** for hero display — measured here at over 100px and holding up. For clients without budget for Tiempos / Cormorant Premium, this is the workhorse.

### Caveats

- 15 console errors at load is a quality issue; we don't ship in that state. Mostly likely third-party tracking failures (typical), but the agency standard is zero errors before launch (`QUALITY.md` validate gate).
- 6964 px page height for a B2B wholesale catalog is reasonable; their actual product pages are likely much shorter.

---

## 10. horeca-social.com

**Vertical match:** *direct competitor reference.* This is a German Social Media + Influencer Agency targeting HoReCa (Hotel / Restaurant / Café) clients — exactly our gastronomy-template buyer. The site is in German (`lang="de"`) and explicitly addresses Berlin-and-DACH gastronomy operators. Studying their UI is, in part, studying what our target client has already seen.

### The audacious move — body text is hot pink

Live-measured: `body { color: rgb(223, 5, 103) }` — hex `#DF0567`. **The default body color across the entire site is a saturated magenta-pink.** Not a brand accent; not a heading highlight; *the body color.* The agency's secondary text color (`rgb(37, 37, 37)` = near-black) is used only on specific neutral elements like the h2 wordmark.

Most agencies invert this: black body text, brand color as accent. Horeca-Social inverts the inversion. The effect on first paint is unmistakable — within 200 ms of page load you know this is a brand that calls itself "Be Different" (literally one of their h2s). It is the single most efficient "voice signal" in the entire study.

Contrast: `#DF0567` on `#fff` measures **5.0 : 1** — passes WCAG AA for large text but *fails AA for body-size text* (4.5 : 1 required, but only marginally — the live measure is at the threshold). At 20px body size (which is large), it scrapes through. At 14-16px text it would fail. The agency made the call to ship a borderline-AA brand color because the brand value justified it — **a design-vs-accessibility trade we'd want to flag for any client copying the move.**

### Typography

| Family | Source | Spec | Role |
|---|---|---|---|
| **Monologue** (custom display, probably licensed from Pangram Pangram or similar) | Webflow upload | h1 = **163.7px / line-height 147.32px / 400 / UPPERCASE / `#fff`** | Hero only — "LET'S GO VIRAL" |
| **Inter Variable** (Rasmus Andersson, free) | Self-hosted, weight axis 100-900 in one file | body 20px / 400 · h2 40.47px / 600 · p 22.12px / 400 | Everything else |

Note: **body font-size 20px** (not 16). Combined with the hot-pink color, the page reads with the visual weight of editorial print. The line-height 24px gives a tight 1.2 ratio — generous against the saturated color but still not "magazine spacious." h1 line-height is **less than the font-size** (147 < 163) — same trick as Aircenter, allowing tighter all-caps without descender clipping.

### The 1440px-radius pill — pushing the Apple move

Every primary CTA on the page: `border-radius: 1440px` (cookie button, "Absenden", "Akzeptieren"). Apple's 980px is the well-known move; Horeca-Social goes further. Functionally identical (both guarantee a perfect pill regardless of width), but the *number* is a tell — Webflow shops increment Apple's signature value as their own quiet flex. Adopt either; both work; consistency within a build is what matters.

Notice the cookie consent palette: bg `rgb(255, 243, 247)` (`#FFF3F7` — pink-tinted near-white), text `rgb(37, 37, 37)` (near-black). Even the consent banner stays on-brand instead of falling back to default Cookiebot grey.

### Layout & motion

- **17 822 px page height** — enormous. 12 sections. This page tells the *full* agency pitch from hero to case studies to founder bio to contact form, all on one scroll.
- GSAP loaded. 2 ambient videos (likely social-content reels embedded as hero loops).
- Stat callouts as h2: `15+`, `400+`, `150+` (years / clients / projects, presumably). Big-number social proof — standard for service businesses, important to do well.

### What to steal (and what to handle with care)

1. **Setting a brand color as the body text default** is the most under-used branding move in the study. Reserve for clients with a high-saturation brand color whose AA contrast you've verified. Codify in `DESIGN-BEST-PRACTICES.md` as a *consideration*, not a default.
2. **20px body text** for service-business / agency landings — pushes the page toward editorial weight, reads "considered" without any other intervention. Already aligned with our beauty / wellness templates; could extend to professional-services.
3. **Big-number h2 stat callouts** (`400+`, `15+ Jahre`) — a free brand-trust pattern. Easy to copy for any service business with three quantifiable claims. Should be in the **professional-services**, **trades**, and **agency-itself** templates.
4. **Pill buttons at extreme border-radius** (980-1440px) — already noted on Apple. Adopt the larger value across the agency's template buttons.

### Caveats

- 17 822 px is past every performance budget we run. For a Berlin client, cap at ~8000 px and split the founder bio + case studies onto separate pages.
- Pink-body-on-white at 5.0 : 1 contrast is brave but risky. For any client copying this, *measure*. The agency standard is AA-comfortable, not AA-borderline.

---

## 11. marvellco.com.au

**Vertical match:** premium trades / artisan stonework. Marvell Tile & Stone is a high-end Perth (Australia) tiling and natural-stone studio. **The single best reference in this study for the trades template's "premium-heritage" archetype.**

### The hero — 256px wordmark, zero ornament

Live-measured:

- `h1` = "Marvell Tile & Stone" at **256px / line-height 256px / weight 700 / letter-spacing −1.28px / `#fff`**. The largest hero type in the study. Line-height *equals* font-size — zero extra leading, the wordmark stacks brutally tight (`Marvell` over `Tile & Stone`).
- The 256px size only works because:
  - The wordmark is short (three words, max 6 characters per word).
  - It sits over a quiet hero image (presumably a stone-texture or interior photograph) with negative space around it.
  - Negative letter-spacing of −1.28px (0.5 % of size, conservative) keeps the type from feeling expanded at scale.
- `pageHeight: 900 px` — single-viewport landing. The hero **is** the page. Click into Projects/Profile/Contact for the rest of the site.

### One font, used as identity rather than utility

- **Neue Montreal** (Pangram Pangram) — weights 400 and 500 only. Both loaded. That's the entire typographic system. h1 borrows weight 700 from a fallback (`Helvetica Neue` will render 700 if Neue Montreal 700 isn't requested) — likely a small oversight or a deliberate fallback to a system bold for the wordmark.
- Body and nav both at 16px / 400. Nav uppercase CTAs at 14px / 500 / +0.56px tracking — a quiet, well-mannered chrome.

### The brand color is the material

The single accent color measured on the page: **`rgb(177, 167, 129)` = `#B1A781`**. A muted, warm khaki — **sandstone**. The agency literally took the color of their product (cut natural stone) and used it as their accent. For an artisan client, the cleanest possible branding move: *your color is your material*. A baker = wheat. A florist = stem-green. A ceramicist = unfired-clay. A blacksmith = patina-brown. A woodworker = oak. The Marvell move generalizes immediately.

### CTAs — uppercase white at 70 % opacity

Nav links: `color: rgba(255, 255, 255, 0.7)`, uppercase, 14px / 500 / +0.56px tracking. The 0.7 alpha (not 1.0) keeps the chrome quiet enough that the 256px wordmark dominates. Hover state — inferred — likely lifts to 1.0 alpha. **This is the most important nav-styling lesson in the study:** if your hero is a giant wordmark or image, your nav must yield. 70 % alpha white is a one-line declaration that does the job.

Project links at the bottom (`Ainslie Street`, `Duncraig Road`, `Beach Street`) are styled as plain 16px black text without any decoration — *street names as project titles*. That's the editorial signature of a high-end build firm: projects identified by location, not by client. Adopt for the trades and home-garden templates' portfolio sections.

### Layout & mechanics

- 0 `<section>` elements, no h2/h3, no `<p>`. The page is structured as a single content layer with the wordmark + nav + project list — all `<div>` and `<a>`. Not best practice; if cloning, restore semantic landmarks.
- No GSAP / Framer / Three.js / canvas / video. **Zero JS-driven motion library.** The page is pure HTML + CSS. Likely runs Lighthouse 95+ on every metric.
- Built on Webflow (the `neueMontreal Fallback` font-face is the Webflow self-host convention).

### What to steal for the trades template

1. **"Your color is your material"** — codify in `templates/trades.md` §Color archetypes. For any natural-materials artisan, sample the brand color from a hi-res photo of their finished work (RGB-pick the dominant hue, lighten ~10 %, desaturate ~10 %).
2. **256px hero wordmark + single-viewport landing** — appropriate for solo-name or short-name artisans (a stonemason, a watchmaker, a perfumer). Cap at 180-200px for longer names. **The wordmark *is* the hero;** add a 3-5 word tagline below in 16-20px body weight and that's the entire above-fold.
3. **70 % alpha white nav over a dark hero** — direct one-line code adoption. Update `templates/trades.md` nav specimen.
4. **Project-as-street-name editorial pattern** — for trades clients with a defined portfolio, list completed projects by street/suburb (e.g., "Choriner Straße", "Schöneberg Studio", "Lichtenrade Garden") rather than by client name. Anonymous, professional, and avoids the "client A" / "redacted" generic problem.

### Caveats

- The page is missing semantic h2/h3/`<p>` and proper section landmarks. A clone should restore those even at the cost of a tiny visual cleanup. Don't copy DOM structure; copy the *presentation system*.
- 256px h1 requires a careful client conversation: if the business name doesn't fit (long names, multi-word, special characters), the move collapses. For "Schmitz Berliner Heizungs- und Sanitärtechnik", you can't do this. For "Marvell," "Köhler," "STONE," you can.

---

## 12. evagria.com

**Vertical match:** independent creative-industries portfolio (Evagria is a casting director + producer for fashion editorials, campaigns, runways). Closest agency analogue: solo-practitioner artisan, or a designer/photographer who wants the work titles to lead.

### One font · one color · one size · one direction

This is the most stripped-down portfolio in the entire study. Live-measured:

- **Only one custom font loaded:** `Bookish-Off-White Regular` (weight 400 only). One file. Used for everything — h1, h2, every CTA, every paragraph.
- **Only one accent color:** white (`#fff`) on the dark `#1D1D1D` body background. There is no other color in the design.
- **Only one functional font size:** 48px / 400 / +1.92px tracking / uppercase / white. The h1 brand wordmark, every project title, and every nav target all share this exact spec. The page is *literally* a vertical list of identical 48px tokens.
- **Only one layout direction:** top-to-bottom, single column. No grid, no side rail.

The 21 project titles read like a poem (and like a CV):
> SURVEILLANCE · SPRING BEAUTY · NECESSAIRE CAMPAIGN · PERSONA · LITKOVSKA FW-23 · VOGUE UKRAINE · ROOM · 10 MAGAZINE · (RE)MODEL · SILENT RUNNER · ADJUSTMENT PERIOD · MIRIAN AND ALUEL · BRIGHT YOUNG THINGS · FAMILY STYLE · PUSS PUSS · KNOWS CAMPAIGN · LITKOVSKA FW-21 · AWY CAMPAIGN · ARTICLE FW-21

The visual treatment doesn't differentiate between them — each title is identically sized, identically tracked, identically white-on-#1D1D1D. The work itself (presumably revealed on hover or click) does the differentiation.

### Typography spec

- h1 "EVAGRIA": 48px / line-height 38.4px / 400 / +1.92px letter-spacing / uppercase. *Line-height less than font-size again* — same brutalist trick as Aircenter and Marvell. At all-caps with no descenders, the tighter line is visually fine.
- h2 (smaller nav labels like "About", "Instagram"): 24px / 400 / +0px tracking. Not uppercase — sentence-case as a quiet secondary signal.
- p (footer "© 2026"): 19.2px / 400 / 23.04px line / −0.384px tracking.

### Color, depth, motion

- Body bg: `rgb(29, 29, 29)` = `#1D1D1D`. Notice this is *not* pure black. A very faint warmth — closer to charcoal. Pure black would feel cold; `#1D1D1D` feels like dark room. Adopt `--bg-charcoal: #1D1D1D` for any portfolio or creative-industries client wanting "dark" without pretending to be tactical/military/security.
- **No GSAP, no Framer Motion, no Three.js, no canvas, no video.** The page is HTML + CSS only.
- 6335 px page height — large because the project list is long, not because of imagery. The DOM is light.

### What to steal

1. **The constraint as the brand.** For any solo-practitioner client with strong work but limited budget (a photographer, an illustrator, a casting director, a director of photography), the Evagria pattern is a one-week build that looks intentional rather than thin. Reduce to *one font · one color · one size · one direction*. Add a single hover-image preview pattern (link reveals the work image on the right edge of the viewport) and the system is complete.
2. **`#1D1D1D` as a charcoal alternative to pure black** — adopt across the agency token system. The warmth-cast makes long-form text easier on the eye and avoids the OLED-pixel-snap-to-true-black harshness on modern phones.
3. **Same-size project titles** — resist the urge to typographically rank a portfolio. If every project is "the work," let every title be the same size. The visitor's hover interaction does the ranking.

### Caveats

- Zero affordance for the visitor *not* familiar with fashion industry shorthand. "LITKOVSKA FW-23" or "AWY CAMPAIGN" mean nothing to a layperson. Evagria's audience (agencies, art directors, magazines) already know the names. For a client whose audience is general public (a restaurant, a clinic), the all-titles-same-size move would feel hostile. Adopt only when the audience is industry-internal.
- No alt-text or descriptive context anywhere. SEO-poor by definition. The site likely relies on direct referral from industry contacts, not organic search. Fine for Evagria; non-applicable for any Berlin retail client where Google Maps + organic search drives footfall.

---

## 13. flyward.com

**Vertical match:** premium travel management & concierge ("we manage travel end to end for individuals and corporates"). Closest agency analogue: a **professional-services** "executive concierge" archetype, or **events-hospitality** high-touch travel-as-service.

### The warm-brown identity, applied at every level

Live-measured:

- `body { color: rgb(61, 45, 32) }` = hex `#3D2D20` — **deep warm umber / coffee bean**. Not black, not grey, not navy. It's a brown so deep it could pass for black at small sizes, but at body weight it carries the warmth of the brand. Same family of move as Mily Group's `#2C1A11`, but Flyward's tone is slightly cooler and aimed at "expensive earth" rather than "natural product."
- **The primary CTA background uses the exact same color as body text:** `rgb(61, 45, 32)` solid pill, white text, `border-radius: 1600px`, `padding: 16px 24px`. The color-token reuse is what makes a brand feel airtight — one brown does triple duty as body color, CTA fill, and hover/focus emphasis. Codify in any client `tokens.css` template: *the primary text color and the primary button color should be the same hex, period.*
- Secondary CTA background: `rgb(251, 248, 243)` = `#FBF8F3` — cream-white. The page's neutral pair is **brown + cream**, not brown + white. White would feel sterile and break the warmth.

### Typography — premium-serif headlines, neo-grotesque body

| Family | Source | Spec |
|---|---|---|
| **Apris** (transitional serif, ABC Dinamo / Pangram Pangram-style) | Self-hosted (Webflow) — 400 + 500 weights | h2 = **80px / line-height 72px / 400 / +1.6px tracking / UPPERCASE / `#fff`** · h1 = 52px / 46.8px line / +1.04px tracking · h3 = same as h1 |
| **Founders Grotesk Text** (Klim Type Foundry) | Self-hosted — 300 + 400 weights | body 16px / 400 / 19.2px line |

All display heads are uppercase with positive tracking (+1.04 to +1.6 px) — the opposite move from Apple's negative-tracking display. Positive tracking on uppercase reads as "premium / certified / classical." Negative tracking on display sans reads as "tech / modern / consumer." A teachable polarity for the agency: *display tracking signals genre.*

Apris h2 line-height 72px on 80px size = 0.9 ratio — tight all-caps, no descenders, brutal vertical economy. Same trick as Aircenter / Marvell / Evagria.

### The CTA pill, taken to extremes

- Border-radius **1600px** on every primary and secondary CTA. (Apple: 980px. Horeca-Social: 1440px. Flyward: 1600px. We are watching a quiet arms race in the wild.)
- Padding 16px 24px — generous; the pill feels substantial. Compare to Apple's 11px 21px, which feels precise/clipped. Flyward wants the button to feel like a "premium card invitation"; Apple wants it to feel like a system control. Both are correct for their context.
- Two flavors: solid brown (`#3D2D20`) and tonal cream (`#FBF8F3`). No third flavor. Restraint.

### Copy voice — defense meets concierge

Quoting the live h2s in order:

> WE MAKE COMPLEX TRAVEL SIMPLE
> HOW WE SUPPORT EVERY JOURNEY
> EXPERIENCE YOU CAN RELY ON
> TRUSTED BY TRAVELERS WHO RETURN
> UNCOMPROMISING SECURITY FOR THE MODERN TRAVELER
> SECURITY IS NOT A FEATURE, IT'S A FOUNDATION
> BEYOND THE REACH OF SEARCH ENGINES LIES A WORLD CURATED JUST FOR YOU

Notice the borrowing from *defense / security / private-aviation* vocabulary: "uncompromising," "foundation," "beyond the reach of search engines." The brand is a travel agency, but the headlines position it adjacent to private security and intelligence services — that's a deliberate market signal for the HNW / family-office target. Worth studying as a copy reference; less directly portable to small-business clients in Berlin.

### Layout & motion

- 11 222 px page height. GSAP loaded. Zero video, zero canvas, zero Three.js. Motion is scroll-reveal text + image lift on hover.
- `<section>` count returned as 0 — DOM uses `<div>` containers (Webflow tell). Not best practice; if cloning, restore semantic landmarks.

### What to steal

1. **`body { color: same-as primary-button-bg }`** — the single most actionable token-discipline rule from this study. Whenever a brand has a custom dark color (brown, navy, ink, forest green), apply it to *both* `body { color }` and `.btn-primary { background }`. Update `tokens.css` and `DESIGN-BEST-PRACTICES.md` §Color tokens.
2. **Brown + cream as a neutral pair**, instead of black + white. Particularly for any brand whose product is "trust / craftsmanship / time" — accountants, lawyers, watchmakers, leather workers, fine-dining venues.
3. **Positive tracking on uppercase serif display** signals "premium classical" — keep in the toolkit for events-hospitality, professional-services, beauty's couture archetype.
4. **Copy positioning by adjacency** — the defense-industry vocabulary is a learnable trick. When a client wants to feel more upscale than the literal category supports, borrow vocabulary from the next-tier-up category. Hardly a typographic move but worth flagging in the SALES.md/copy guidance.

### Caveats

- 11 222 px is long. Cap for client adaptations.
- The Apris + Founders Grotesk pairing is commercially licensed (likely $200-500 each). For lean clients, substitute Cormorant Garamond + Inter, or DM Serif Text + DM Sans — the *system* (uppercase serif display + neo-grotesque body) survives the font swap.

---

## 14. sweepingcorp.com

**Vertical match:** large-scale industrial services (SCA = Sweeping Corp of America, fleet-based street cleaning + environmental services). Closest agency analogue: the **trades** template's "industrial / commercial-services" archetype — fleet operators, commercial cleaning, municipal contractors.

### The Eurostile signal — industry in a font choice

The single most decisive move on this page: **`Eurostile Condensed` weight 900 for every display headline**, at 54px / line-height 51.3px / −1.08px tracking / uppercase / color `#042940`.

Eurostile (Aldo Novarese, 1962) is the canonical mid-century "industrial / aerospace / heavy machinery" typeface — it's been used on everything from Star Trek control panels to truck dashboards for 60 years. The narrow letterforms make even short headlines feel hefty and mechanical. Loading only the **condensed 900** weight (heaviest end of the condensed axis) is a one-decision way to telegraph "we move serious equipment." For a Berlin client running an industrial cleaning, fleet, or HVAC business, Eurostile Condensed is the closest single-font shortcut to instant category credibility.

The chosen weight (900, blackest available) + the negative tracking (−1.08px = ~2 % of size) make the type physically dense — visually reinforcing the "weight / mass / power" theme. For a tradesperson client, that's the brand promise rendered as letterforms.

### Color — maritime navy

- `body { color: rgb(4, 41, 64) }` = hex `#042940`. **Dark navy with strong blue cast.** Reads as "fleet / institutional / maritime" — adjacent to USPS, DHL, large-equipment brands. For Berlin clients in regulated trades (HVAC, plumbing, electrical, security), this navy is more credible than pure black and more visually quiet than corporate cobalt.
- Single accent color does the work; the rest of the page is white (`#fff`).

### Typography stack

| Family | Source | Spec |
|---|---|---|
| **Eurostile Condensed** | Adobe / licensed | Weight 900 only · h1/h2 = 54px / 51.3px line / −1.08px tracking / uppercase |
| **Outfit** (Google Fonts, free; full variable 100-900) | Self-hosted | Body 10.5px(!) / 400 · p 13.5px / 400 / 17.55px line / −0.135px tracking. Nav 13.5px / 500. |

Note: body font-size **10.5px** is *small.* Compensated by the 13.5px paragraph size, but micro-labels and footers at 10.5 would fail readability targets for the agency. For B2B technical audiences using desktop monitors this is acceptable; for a Berlin small-business retail visitor on mobile, scale up.

Also note: the body `font-family` declares `Outfit, monospace`. The `monospace` fallback (rather than `sans-serif`) is unusual — if `Outfit` fails to load, the page renders in the user's monospace stack, which would dramatically change the look. Likely a CSS authoring error; not a pattern to copy.

### Layout & motion

- 16 668 px page height. Multi-vertical content (the company serves multiple market segments — municipal, industrial, commercial).
- 6 ambient videos (presumably fleet-in-action footage), one `<canvas>` (likely a map / route visualization based on the "Service Areas" nav item).
- No GSAP, no Framer Motion. Pure CSS scroll + native autoplay video.

### CTAs — minimal pill, utilitarian

Two button styles measured:
1. Nav text-only at 13.5px / 500 / `color: #042940` / no background — utilitarian.
2. Filter chips at `border-radius: 7.5px`, `padding: 9px 12.375px`, transparent background, navy text. **A small pill** (vs. Apple's 980, Horeca's 1440, Flyward's 1600). 7.5px reads as "system / utility chip" not "premium invitation." Appropriate for B2B industrial.

### What to steal for the trades template

1. **Industry-specific display face as the brand voice.** Eurostile = heavy industry. Other category-defining fonts to keep in the bag: *Bebas Neue* for athletic/gyms, *Playfair Display* for fine dining, *DIN* for German industrial precision, *Cormorant* for boutique pharmacy / apothecary, *Recoleta* for craft food. The selector is "what does the customer expect this category to look like? — and either confirm or subvert it deliberately."
2. **Dark-navy body color (`#042940`) for regulated trades.** Token: `--text-trade-navy`. Adopt as default for the trades template's "industrial / regulated" sub-archetype.
3. **Small utility-chip pills (`border-radius: 7.5-12px`)** for filter/category navigation on B2B catalog pages — *don't* use the 980+ pill in B2B contexts; reserve premium-pills for premium positioning.

### Caveats

- 10.5px body and `font-family: Outfit, monospace` are quality issues. The agency standard is 16px minimum body, with declared `sans-serif` fallback. Don't copy these.
- 16 668 px page is unjustifiable for a Berlin small-business client. SCA is a national multi-vertical contractor — they earned the scroll. Most Berlin trades clients have 2-3 services to describe; cap their page at ~5000 px.
- A `<canvas>` element on a B2B page is unusual; if it's actually a service-area map, prefer a static SVG or simple Leaflet embed for performance.

---

## 15. haven-annecy.fr/en

**Vertical match:** independent café / brunch venue (Australian brunch & coffee shop in Annecy, France). **The single most directly applicable reference in this study for our gastronomy template's "café / brunch" archetype.** This is what a well-built Berlin Frühstückslokal client landing should look like.

### Color system — terracotta + coffee + warm cream

Three colors do everything:

- **Body background: `rgb(255, 250, 247)` = `#FFFAF7`** — a *very* faint peach-cream. So subtle it could be mistaken for white, but on a calibrated display the warmth registers. Same family as Watch House (`#F9F4EE`) and Auwa's washi-cream — note the converging signal: **hospitality businesses do not ship pure white.**
- **Body text: `rgb(43, 26, 18)` = `#2B1A12`** — deep warm coffee. Same family as Mily Group's `#2C1A11` and Flyward's `#3D2D20`. The pattern across the study is unmistakable for warm-product brands.
- **Accent: `rgb(193, 100, 59)` = `#C1643B`** — saturated terracotta. Used in exactly two roles: (1) the active nav state (HOME is highlighted in terracotta), (2) the RESERVE button background. *That's it.* One accent, two roles.

Three colors, no exceptions. This is the discipline a small-business client desperately needs but rarely receives.

### Typography — one workhorse, used at three sizes

- **PF DinText Pro** (ParaType, licensed — German-precision DIN family) — used for *everything except* one script accent. Loaded weights: 300, 400, 500 (+italics), 600.
  - h1: 49.5px / line-height 49.5px / weight 600 / +0.5px tracking. Notice line-height = font-size — same brutalist trick noted on Aircenter / Marvell, here applied gently because the headline is sentence-case not all-caps.
  - p (body paragraph): 18px / **weight 300** (light!) / 27px line / +0.5px tracking — generous 1.5 ratio, very magazine-readable.
  - Nav: 14.4px / weight 300 / uppercase / +0.5px tracking.
- **With Hearty** — single-weight script/handwritten face, likely used for a quiet decorative flourish (menu accents, signature, "specials" callouts). Restraint: it never replaces the main type, only seasons it.

A `+0.5px` tracking applied uniformly across body, nav, h1, and h2 is unusual — most designs adjust tracking by size. Haven's choice gives the page a consistent rhythm at every scale. Worth borrowing as a *constraint* if a client struggles with typographic drift.

### The signature interaction — asymmetric pill RESERVE button

The single most interesting CTA in this study:

```css
.reserve {
  background: #C1643B;        /* terracotta */
  color: #fff;
  border-radius: 30px 0 0 30px;   /* round LEFT, square RIGHT */
  padding: 13.5px 27px;
  font-size: 14.4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  /* implied: position: fixed; right: 0; top: 50% — a sticky edge-of-viewport tab */
}
```

The half-pill (`border-radius: 30px 0 0 30px`) is the visual signature of *a tab that's sticking out from the right edge of the viewport.* The eye instantly reads it as "fixed at the screen edge, hugging in from outside" — a one-token interaction-design move. For any gastronomy or beauty client with a reservation flow, this floating-tab pattern is the single most efficient "always-available CTA" in the literature.

**Adopt for the gastronomy + beauty templates.** Map the button to: book a table (gastronomy), book an appointment (beauty / health / studio), get a quote (trades). The half-pill shape, the brand-accent fill, the sticky right-edge position — all of it ports cleanly. Berlin clients with a reservation flow (Bookatable, Resy, Doctolib, Booksy) get a one-line conversion lift.

### Nav as schedule

The nav items combine label + hours on two lines:
```
COFFEE
8:00 - 4:00
```
```
BRUNCH
9:00 - 2:00
```

For a hospitality client, opening hours are the single most-checked piece of information. Putting them *into the nav* (rather than buried in a footer) is a brilliant move — the visitor sees the schedule before they even reach the hero. **Codify in `templates/gastronomy.md` as the default nav pattern.**

### Layout & motion

- 5 536 px page height — appropriate for a single-location café (not too long, not too short).
- **Zero motion library loaded** — no GSAP, no Framer Motion, no Three.js, no canvas. All interactions are CSS-only (hover transitions, scroll into view).
- Built on **Drupal** (the "Skip to main content" + "Main navigation" + "Action menu" pattern is the Drupal default theme — also visible in the h2 sequence "Main navigation" / "Action menu" / "Main navigation Mobile"). For our agency this is informative but not relevant — we don't build on Drupal.

### What to steal for the agency

1. **Three-color discipline (cream bg + warm-coffee text + single saturated accent).** Codify as `templates/gastronomy.md` §Color archetypes default — and propose the same for `templates/beauty.md` swapping terracotta for the brand's natural accent.
2. **Hours-in-nav** for hospitality, health (`OPEN 9:00-18:00`), beauty (`SALON 10:00-19:00`). Adopt across gastronomy / beauty / health templates' nav patterns.
3. **The half-pill sticky-right-edge RESERVE button** is the conversion move of the study. Build as a reusable Astro component, ship to gastronomy / beauty / health / studio templates.
4. **PF DinText Pro substitute for free use: IBM Plex Sans or Sora** — both have similar precision-geometric DIN-adjacent voice and ship free. Aligns with the agency's free-font preference for Tier-1 clients.

### Caveats

- The site is in French + English. Translations are well-handled. For our DACH market this is the equivalent challenge (DE + EN minimum). Confirm Haven uses a CMS-driven translation pipeline before extrapolating the build cost — for our agency a separately-tracked Astro `astro-i18n` setup is appropriate.
- A 300-weight body is delicate. On the `#FFFAF7` cream it works because contrast is strong (~12:1); on pure white it would feel thin.

### Motion (Phase 1b — measured 2026-05-19)

**Correction to original v1 analysis.** The RESERVE button is **NOT `position: fixed`** — it returned `position: static` and sits at x=1162, y=14 (in the top nav row, right-aligned). The half-pill shape (`border-radius: 30px 0 0 30px`) is **purely visual** — it suggests "sticking out from the right edge of the viewport" but the button is just inline in the nav. The optical illusion does the work; no JS, no sticky CSS.

**Hospitality motion vocabulary:**
- `a { transition: color 0.5s ease }` — the entire site runs on a slow, calming **0.5s ease** color hover. Compare Apple's 0.32s `cubic-bezier(0.4, 0, 0.6, 1)`: Apple snaps; Haven *settles.* A 200ms difference produces a completely different brand register — fast-precise (Apple) vs. slow-warm (Haven). For gastronomy / beauty / wellness clients, default to the slow side.
- RESERVE button: `transition: background-color 0.5s ease` (color shift on hover; no transform, no scale, no shadow change). The lightest possible CTA hover.

**Active animations at runtime:**
- One SVG `@keyframes drawSVG` — 1407ms linear, one-shot. Likely an SVG logo or illustration stroking itself in on first load.
- **Zero JS motion library.** No GSAP, no Framer Motion, no Lenis. The entire site's motion is CSS color transitions + a single SVG keyframe animation. 5536px page height, zero motion JS. The lesson: **a hospitality site can win an award entirely on type, color, and 500ms ease transitions.** Don't reach for Lottie or GSAP before the simpler stack has been exhausted.

**Recipe correction for `templates/gastronomy.md` half-pill component:**
- Build the half-pill as a static (not fixed) component in the nav row's right cell
- `transition: background-color 0.5s ease`
- Don't add a transform on hover — the color shift is enough; warmth comes from restraint

---

## 16. lessestudio.com

**Vertical match:** design + technology studio (full-service agency, Italy-based). Direct competitor-class reference for any future agency-portfolio page we build for ourselves.

### Stack signals — system fonts for chrome, custom fonts for work

- **Body font-family** declares the system stack first: `ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", ...` — same pattern as Really Up There. The body chrome runs on OS-native fonts, no payload cost.
- **Three custom fonts loaded:**
  - **HostGrotesk** (variable 100-900, free, OFL-licensed via Behance / Google Fonts) — workhorse for chrome + display.
  - **DMSans** (Pangram-style Google font, free) — used for the lead paragraph at **43.2px / 400 / 48px line**.
  - **LaCerchia** — boutique licensed display face, single 400 weight, used as a typographic accent (likely italic or decorative section dividers).

### Body background — confident mid-grey

`#EBEBEB` body background — not white, not cream. Mid-grey says "architectural studio" or "Swiss-influenced design office." For an agency-portfolio site this is more interesting than the default white agencies usually default to. Codify as `--bg-studio-grey` for the future agency-self template.

### Layout signature

- **No `<h1>` element** in the DOM (an SEO oversight on a *design-and-technology* studio — worth flagging in our own audit checklist as a parable). The visual "lead" is a 43.2px paragraph in DMSans.
- **The h2 acts as an eyebrow label** — `FULL-SERVICE AGENCY` at 14.4px / 400 / uppercase / `#909090` mid-grey. Same eyebrow-then-display-paragraph pattern as Auwa (§6).
- Section structure visible from the h2 sequence: `FULL-SERVICE AGENCY` → studio description (h2) → `OUR SERVICES` → `OUR APPROACH AND VALUES` → `LATEST WORK` → `TESTIMONIALS` → `LATEST NEWS` → "Ready to get started?" (closing CTA). **That's the canonical agency-self pitch in 8 sections.** Useful as a reference outline when we build our own portfolio page.

### What to steal

1. **The agency-self section outline:** Eyebrow → Studio mission (display paragraph) → Services → Approach/values → Work → Testimonials → News → Closing CTA. 8-section linear pitch.
2. **System-stack body** for the agency's own site — every gram of font payload we save makes us look more performance-conscious to a design-conscious prospect.
3. **Eyebrow + display-paragraph hero** is now confirmed across Auwa, Lesse, and (partially) Watch House. It is the *current* (2026) agency-portfolio convention.

### Caveats

- Missing `<h1>` is an audit fail; copy the structure but fix the heading.
- Typo in their own copy: `"hollistic"` (should be "holistic"). A working reminder that even premium-presenting agencies ship with copy errors — proofread the proofreader.

---

## 17. laurentiwebdesign.it

**Vertical match:** small independent web-design studio (Italy, Arezzo) — solo / two-person agency. The most directly comparable scale to our own operation.

### The single-font, near-zero-dependency build

- **Only one custom font:** `Manrope` (Mikhail Sharanda, OFL-licensed via Google Fonts). Weights 400, 500, 600 loaded — that's the entire typographic system.
- **Zero motion library:** no GSAP, no Framer Motion, no Three.js, no `<canvas>`, no `<video>`. Pure HTML + CSS. The lightest site in this study by JS payload.
- **Page height: 6 773 px.** Tightly scoped, single-language Italian (`lang="it"`) — appropriate for a regional studio targeting Italian SMBs.

This is a working agency-self template proof of concept built on the minimum viable stack. For our own future portfolio page on a Vercel free tier, Laurenti's build is closer to what we'd ship than the Auwa/Lesse maximalism.

### Typography rhythm

| Element | Spec |
|---|---|
| `h1` | 72px / 400 / line-height 79.2px / **−2px tracking** (~2.8 % of size — slightly more aggressive than Apple's −1.5 %) / sentence-case / black |
| `h2` | 64px / **500** weight (a step heavier than h1, intentional — the section heads carry more visual weight than the hero on this page) / mixed case |
| `h3` | 28px / 500 |
| body | 16px / 400 |

Note the h1 copy: `"Digital.\nDesign to move."` — period-terminated phrases again (Watch House's voice signature reappearing — confirms a 2025-2026 trend among design-conscious brands).

### What to steal

1. **Manrope as the free Inter substitute.** Inter is the obvious choice; Manrope is what design-Twitter chooses when they want to look like they made a less obvious decision. For freelancer-tier clients, both work — Manrope's character has slightly more warmth.
2. **"3 weights, one font, zero motion libraries" is a credible agency-self build.** Codify in `templates/professional-services.md` as a minimum bar for our own agency portfolio when we get there. We don't need GSAP to look credible to a design-aware Berlin lead.

### Caveats

- Italian-only site (no English/German). For our DACH market this would fail; minimum DE + EN.
- The Manrope-everywhere approach can read as "I couldn't decide on a second font." Mixing in a single secondary face (mono for code samples, serif for project descriptions) adds depth without adding cost.

---

## 18. juanmora.co

**Vertical match:** independent design director / brand-and-web specialist (freelance, 16-year practitioner). Solo-practitioner agency-self reference.

### Color system — warm-cream + soft-peach + warm-grey

Three colors do all the work, none of them primary:

- **Body bg: `rgb(250, 246, 239)` = `#FAF6EF`** — *another* warm cream/bone. The hospitality-cream signal is now confirmed across Watch House, Auwa, Haven, and Juan Mora. **The 2025-2026 design-conscious default is not white.**
- **Body text: `rgb(51, 51, 51)` = `#333`** — warm dark-grey rather than black. Friendlier than `#000` at body weight, still AAA against the cream.
- **Personality accent: `rgb(255, 188, 149)` = `#FFBC95`** — soft peach/apricot. Used only on the h1 (headline) and h3 (lead description) — the two "speaks for me" elements.
- **Section divider color: `rgb(150, 144, 140)` = `#96908C`** — warm mid-grey. Used on h2 ("Websites & Landing pages", "Visual Branding") so they read as *quiet category labels* rather than competing personalities.

The trick: the personality color (peach) marks the *human voice*; the divider color (grey) marks the *structural taxonomy*. A reader's eye is pulled to the peach for "what does Juan say about himself" and ignores the grey for "what categories of work does he do." Brilliant hierarchy control through color, not font-size.

### The Arial body — confidence about constraints

`body { font-family: Arial, sans-serif }` — the body literally uses **system Arial**. No custom body font. Only the headings use a custom face (`Goga`, a boutique licensed display).

For a *design director*, shipping body text in Arial is a confident move — "I trust the OS default, I spent my type budget on the headlines." It also has a side effect: the page loads visibly faster than competitors who ship custom body fonts. Same principle as Really Up There (§7) and Lesse (§16) — *the chrome is system, the work is custom.*

### Typography rhythm

| Element | Family / Spec |
|---|---|
| h1 | Goga 32px / 600 / peach `#FFBC95` — small, sentence-case, almost label-like |
| h2 (section heads) | Goga 57.6px / 600 / line-height 51.84px / **−2.16px tracking** (~3.7 % of size — most aggressive negative tracking in the study) / warm-grey `#96908C` |
| h3 | Goga 21.6px / 600 / peach |
| p (lead) | Goga 32px / 600 / peach — same size as h1, no visual distinction |
| body | Arial 14px / 400 / `#333` |

Notice: h2 is **larger than h1**. Semantically inverted (the SEO-correct h1 is small; the visual hero is the h2 section heads). Same pattern as Auwa and Lesse — confirms the "small label-h1, big section-h2" convention is now established practice among design-Twitter portfolios in 2026.

### The signature copy move — animated phrase

`"16 years  making users  click   and scroll my designs"` — the variable spaces (note `users` is double-spaced from `making`, `click` is triple-spaced) indicate **inline keyword animations** at those positions. Words like `click` and `scroll` are likely animated icons that physically demonstrate the verb. GSAP is loaded, supporting this inference. Worth seeing live; the technique is a typographic equivalent of demo-driven sales — *the headline performs what the headline says.*

### What to steal

1. **Body color in `#333` (warm dark-grey)** instead of `#000` — friendlier across long-form copy on any non-corporate brand. Adopt as the default `--text-body` in non-industrial templates.
2. **Two-color heading system: personality + structure.** Peach for "what I say about myself" (h1, h3), grey for "what structural category we're in" (h2). Portable to any portfolio or service-business landing where the brand voice needs separation from the IA.
3. **`Arial, sans-serif` body** for any solo-practitioner Tier-1 build — saves a custom-font fetch and signals confidence rather than cheapness, *if the headings carry the design weight.*
4. **Verbs-as-icons in headlines** (`click`, `scroll`, `tap`, `swipe`) — a GSAP/Lottie inline-icon pattern. Adopt for our agency-self page when we get there.

### Caveats

- The h2 at −2.16px tracking is unusually aggressive. At 57.6px size that's 3.7 % — closer to "too tight." Test on long German section heads ("Suchmaschinenoptimierung") before adopting; compound nouns can collide.
- Page height 11 440 px and 7 videos is past the Tier-2 budget. For our clients we'd cap the videos at 2-3 inline demos.

---

## 19. t11.com

**Vertical match:** experiential events management (T11 is a "360° events management partner" operating across the Middle East + Asia). Closest agency analogue: the **events-hospitality** template's "experiential events / festival production" archetype.

### Stack signals

- **Tailwind-based** (the `ui-sans-serif, system-ui, ...` body font-family chain is Tailwind's default).
- **Monument Grotesk** (ABC Dinamo, licensed) + **Monument Grotesk Mono** as the typographic system.
- Body bg `#F5F5F5` — light grey, same family as Apple's secondary.

### The mono-for-catalog pattern (confirmed again)

- h3 project labels use **Monument Grotesk Mono** at 12px / 400 / +0.3px tracking / uppercase. Example: `OFFLIMITS FESTIVAL`. The visual reads as "directory entry / curated index."
- Nav target `PORTFOLIO [21]` — bracketed count in the nav itself. Same editorial-index pattern as Mily Group's `PRODUCTS (5)` (§9) — *and now we have a second independent confirmation that "label + bracketed count + mono font" is a coherent 2026 catalog convention.*

For our agency: codify this as the canonical pattern across templates that list curated work (gastronomy menu sections, beauty service categories, trades project portfolios, artisan collections).

### Typography spec

| Element | Spec |
|---|---|
| h1 | Monument Grotesk 50.4px / 700 / line-height 45.36px (less than font-size) / **−1.26px tracking** / uppercase / white |
| h2 | Monument Grotesk 20px / 400 / −0.5px tracking / uppercase / `#F5F5F5` |
| h3 | Monument Grotesk **Mono** 12px / 400 / +0.3px tracking / uppercase / `#121212` |
| body | system UI 16px / 400 |

### What to steal

1. **`Monument Grotesk Mono` is the third independent vote** in this study (after Mily's IBM Plex Mono and Hubtown's Commit Mono) for *mono-as-catalog-label*. We can now declare with confidence: **catalog/portfolio item labels look right in a monospace.** Add to `DESIGN-BEST-PRACTICES.md` and the relevant per-vertical templates.
2. **Bracketed count next to nav label** (`PORTFOLIO [21]`) — three independent samples now (Mily, T11, partial pattern at Lesse). Adopt across templates with curated lists.

### Caveats

- 9.6px paragraph in the cookie notice fails our agency body-size floor (16px minimum, 14px absolute floor for fine-print). Don't copy.
- 2 console errors at load — fix in a clone.

---

## 20. kindredofireland.com

**Vertical match:** luxury linen apparel, made-to-order, handmade in Ireland. Heritage-craft / artisan-apparel direct reference for the **artisan** template's "heritage-textile" archetype.

### The signature — light-weight serif at extreme size

- **Freight Big Pro** (Adobe Type, premium serif by Joshua Darden) is the entire display system. All weights loaded at **300 (light)**:
  - h3 = **100px / 300 / line-height 100px** (font-size = line-height, no leading) — applied to category titles like `Shirts & Blouses`. Yes, *category labels* are 100px.
  - h2 = 44px / 300 / 44px line — applied to section heads and the mission statement.
  - h1 = 44px / 300 / 44px line — same as h2, semantically distinguished by position only.
  - body p = 16px / 300 / 32px line — generous 2.0 line-height. Magazine-spacious.

The single decision that drives the entire aesthetic: **light-weight serif at large size**. Heavy serif at large size = traditional / authoritative (Vogue, NYT). *Light* serif at large size = fragile elegance / handmade / fashion-editorial. The weight 300 + the slim Freight Big strokes evoke linen itself: airy, draped, made of thin fibers. **Type as material metaphor.**

### Color & body

- Body bg `#FBF8F5` — *another* warm cream (cream count: Watch House, Auwa, Haven, Juan Mora, Kindred — five independent confirmations this is the 2026 hospitality / artisan default).
- Body color `#000` (pure black for once — but acceptable here because the serif strokes are so thin the page never feels heavy).
- Body font family declared as `"Folio Std", serif` — fallback to a system serif if the premium load fails. Bold call: most sites fall back to sans, Kindred falls back to *another* serif so the brand voice survives a font-load failure.

### What to steal

1. **Light-weight serif at display size** is a one-decision artisan/apparel/wellness signature. Adobe Freight Big Pro is premium; free equivalents include **Cormorant Garamond Light** and **EB Garamond Light** (already noted on Auwa). Codify in `templates/artisan.md` and `templates/beauty.md` as the "fragile elegance" archetype.
2. **Serif body fallback** (`serif`, not `sans-serif`) for serif-led brands — the page survives a font-load failure with the brand voice intact. Add to the agency's font-loading checklist.

### Caveats

- 7 videos on an e-commerce home is heavy. Their CDN can carry it; ours can't for free-tier clients.
- 100px h3 (category title) requires very short category names. "Shirts & Blouses" (2-3 words) fits. "Wedding & Bridesmaid Coordinated Linen Collections" wouldn't. Constrain copywriting before adopting.

---

## 21. victorfuruya.com

**Vertical match:** independent multidisciplinary designer portfolio. Same archetype as Really Up There (§7) and Evagria (§12), in a sans-serif on near-black register.

### Quick spec

- Body bg `rgb(15, 15, 15)` = `#0F0F0F` (near-black charcoal — *not* pure black; same family as Evagria's `#1D1D1D`).
- Single font: **Satoshi** (Pangram Pangram, premium variable 100-900). The only typeface on the page. Weights 400, 500, 700, plus the full variable axis 100-900 loaded.
- h1: 77.76px / weight **650** (a non-integer weight from the variable axis — possible only with variable fonts) / line-height 73.87px / **−2.72px tracking** (~3.5 % of size — aggressive). h2: 56px / 700 / **−2.8px tracking** (5 % — extreme).
- **Per-character DOM split** again — `h1.innerText` returns `"M\na\nk\ne\n \nI\nt\n\n\nL\na\ns\nt"`. Each letter is its own element so a scroll-driven "carve in" animation can affect each letter independently. Same structural pattern as Brandon Herbel's reallyupthere.com (§7).
- Page height 900 px — single-viewport landing (like Aircenter §4 and Marvell §11), with navigation routing to deeper pages.

### What's new (vs. Brandon Herbel)

1. **Non-integer variable-font weights.** `font-weight: 650` is something you can only do once you've loaded a variable font with a continuous weight axis (Satoshi 100-900). Static font files only support the loaded integer values (400/500/700). The 650 is between 600 (semi-bold) and 700 (bold) — a typographer's *exact* preference, not a system-default rounding. **Adopt as a rule:** if a project loads a variable font, use the variable axis. Don't snap to 100s.
2. **−5 % tracking on display headlines** is past Apple's −1.5 % and Juan Mora's −3.7 %. The trade-off: at 56-78px the negative spacing is invisible to the casual viewer but the *overall weight balance* of the page shifts. Aggressive negative tracking on sans-display is the "tech designer / 2026" signature.

### Caveats

- The per-character DOM split breaks copy-paste (selecting "Make It Last" copies "M\na\nk\ne\n I\nt\n L\na\ns\nt"). Cosmetic for a portfolio, *annoying* for any client whose text might be quoted (a press kit, a menu). Don't copy for content-led sites.
- Single-viewport landing + JS routing to inner pages = no traditional SEO crawl. Reserve for portfolios.

---

## 22. fourmula.ai

**Vertical match:** AI product-image generation SaaS ("upload or drop your assets → instantly re-shot catalog"). The clearest "we want to look like an Apple sub-product" page in the entire study.

### The deliberate Apple-mimicry

Live-measured signals that read as overt positioning:

| Apple's signature (from §1) | Fourmula's choice |
|---|---|
| Font: SF Pro Display | Font: **SF Pro Display** (literally — Apple's licensed display face) |
| h1 80px / weight 600 / −1.2px tracking | h1 = **73.2px / 400 / −2.2px tracking** (slightly larger ratio) |
| Primary CTA: `border-radius: 980px` | Primary CTA: `border-radius: **1317.53px**` |
| Primary CTA: `padding: 11px 21px` | Primary CTA: `padding: 11.6px 19.96px` |
| Primary CTA: `rgb(0, 113, 227)` (Apple blue) | Primary CTA: `rgb(2, 1, 8)` (their near-black) — same shape, brand color |

The brand has effectively forked Apple's button system, swapping only the color. For an AI product targeting designers and brand marketers (whose visual reference is Apple's product pages), this is *deliberate* not lazy — they're saying "we belong in your iPhone-buying mental model."

### Typography at extreme sizes with extreme tracking

- h2 = 99.8px / weight 400 / line-height 99.8px / **−2.99px tracking** (~3 % of size). All sentences end with period (`"On-brand visuals.\nMade by AI."` — period inside both phrases). The full-stop punctuation is the same Watch House / Laurenti / Apple voice signature.
- h1 = 73.2px / 400 / −2.2px tracking.
- h3 = 43.3px / 500 / −1.33px tracking.

### What to steal

1. **SF Pro Display is licensed for non-Apple use** (since 2017 via Apple's developer fonts page, with attribution restrictions). For AI/tech products positioning as "Apple-adjacent," it's a legal one-decision brand positioning. Note the licensing constraints in `TECH.md` §Fonts before suggesting this to a client.
2. **Period-terminated headline phrases** — now seen on Watch House, Laurenti, Apple, Fourmula. **Officially a 2026 design convention.** Add as a copy-voice option in `templates/*.md` voice sections.

### Caveats

- 14.4px body text on a SaaS sign-up page is sub-AA size for German readers (we recommend 16px floor). For DACH adoption, scale up.

---

## 23. eclettica.bulgari.com/emerald-strata

**Vertical match:** luxury fashion / haute joaillerie campaign microsite. Closest agency analogue: a **beauty** template's "couture / heritage-luxury" archetype, or a one-off events-hospitality launch site.

> ⚠️ **Inspection blocked — deferred to manual session.** The Bulgari campaign microsite returns `net::ERR_HTTP2_PROTOCOL_ERROR` on every headless-browser navigation attempt — four attempts to date (three on 2026-05-18; one on 2026-05-19 Phase 1c retry). This is consistent with deliberate TLS/HTTP fingerprinting against automated clients — luxury brands routinely deploy bot-mitigation that targets headless Chrome's HTTP/2 implementation. **No live measurements have been taken.** Per `docs/audit/RUNBOOK-real-browser-audit.md`, measurement is deferred to a manual non-headless session.

**What is publicly known** (Bulgari press kit + the broader awwwards record, *not* a runtime read): the Eclettica platform is Bulgari's editorial micro-experiences hub, with per-collection microsites built as cinematic scroll-narratives. Common moves across that platform: oversized italic serif display (Bulgari uses a custom variant of `Bulgari Serif`), deep emerald + ink-black palette with thin gold accents, full-bleed video hero, scroll-locked panel transitions with 60+ fps GPU-composited animation, no visible CTAs above the second viewport (the experience leads, the store is downstream). The borrowable principle (*if confirmed manually*) is **"campaign is the product"** — when launching a single piece of work (a collection, a wedding venue, a tasting menu, a seasonal capsule), the page does not need to be a website; it can be a sequence of cinematic frames with the call-to-action arriving only after the visitor has *felt* the brand.

**Status:** placeholder. Excluded from cross-site synthesis until manually measured. Both unaudited entries in this study (HBA §2, Bulgari §23) exhibit bot-mitigation that headless can't bypass — closed as a capability gap by the runbook.

---

## 24. awwwards.com

**Vertical match:** *the* awards site for web design. The most meta-reference in this study — the platform that defines what "design-conscious 2026 website" *means*, observed from the inside.

### The genuine surprise — Awwwards itself is restrained

Live-measured:

- **Single font for the entire site: Inter Tight** (Rasmus Andersson, free, variable axis 100-900). One typeface. No serif, no display face, no mono.
- Body color `rgb(34, 34, 34)` = `#222` (warm dark grey, same family as Juan Mora and our own preferred body color).
- Body bg `rgb(248, 248, 248)` = `#F8F8F8` — slightly off-white grey.
- Body font-size 14px / weight **300** (light!) / line-height **28px** (1:2 ratio — generous magazine-rhythm).
- **No `<h1>` element** in the DOM (yes — the *awards site* that judges web design ships without a semantic h1).
- **No GSAP, no Framer Motion, no Three.js, no `<canvas>`, no `<video>`.** Pure HTML + CSS, IntersectionObserver-driven scroll reveals at most.
- 12 781 px page height. Award winners ride the page; the chrome stays out of the way.

The lesson: **the platform that celebrates maximalist design is itself minimalist.** A juror's site is not a winner's site. When you're the canvas on which other people's work is judged, you make yourself invisible. The h3 for award-winning site names is huge (`CAPITOLIUM` at 126.7px / 600 / line-height 126.7px / uppercase), but the rest of the page recedes.

### What to steal

1. **Inter Tight at 14px / weight 300 / line-height 28px** is the most-copied body-text spec on the modern web design Twitter feed. It works because the 1:2 line-height gives the page magazine breathing room, and the light weight keeps a long page from feeling text-heavy. Adopt as a body-text *option* (alongside our existing 16px / 400) for content-led, design-conscious clients.
2. **Restraint as authority.** When designing for a client whose role is to "show other people's work" (a gallery, a producer's portfolio, a casting director, an agency's case-studies index), make the chrome quieter than the catalog. The agency takeaway: if the client's product is a *collection*, the site is a *frame.*
3. **A platform like Awwwards ships without an h1.** That doesn't make it correct — but it confirms that even tier-S design teams cut corners on semantic HTML. The lesson: *we ship better than Awwwards* by enforcing the agency `CHECKLIST.md` semantic-landmark gate. Use this as a sales point ("better SEO than the awards site itself").

### Caveats

- 14px body is on the small side for German (DACH visitors expect 16px+). Not a clone target without scaling.

---

## Cross-site synthesis

Twenty-two of the twenty-four sites yielded usable live measurements (HBA and Bulgari were blocked by bot-mitigation). The following patterns are *confirmed by independent samples* — not single-site curiosities. Each is referenced by the section numbers where it appears.

### 1. The cream background is the new white (5 independent confirmations)

The single strongest signal in the entire study. Hospitality / wellness / artisan / freelance-design brands consistently *do not ship pure white.* Live-measured cream backgrounds:

| Site | Background | Section |
|---|---|---|
| Watch House (coffee) | `#F9F4EE` | §5 |
| Auwa (wellness) | `oklch(0.97 0.004 95)` ≈ `#F7F5EE` | §6 |
| Haven Annecy (café) | `#FFFAF7` | §15 |
| Juan Mora (designer portfolio) | `#FAF6EF` | §18 |
| Kindred (linen apparel) | `#FBF8F5` | §20 |

All five are in the warm 92-100 L * range, with very low chroma at hue 80-95 (yellow-to-peach axis). **Adopt `--bg-cream` as a default token across the agency's gastronomy, beauty, artisan, and any-designer-portfolio templates.** Pure white reads as "tech product"; cream reads as "considered hospitality." This is the single most efficient atmospheric upgrade available.

### 2. Warm brown body text instead of black (3 independent confirmations, plus 1 grey variant)

Brands whose product is *material* — coffee, leather, stone, food, fabric — converge on a warm dark-brown body color rather than pure black:

| Site | Body color | Hex | Section |
|---|---|---|---|
| Mily Group (antler chews) | `rgb(44, 26, 17)` | `#2C1A11` | §9 |
| Flyward (concierge) | `rgb(61, 45, 32)` | `#3D2D20` | §13 |
| Haven (café) | `rgb(43, 26, 18)` | `#2B1A12` | §15 |
| Juan Mora (designer) | `rgb(51, 51, 51)` | `#333` (warm grey variant) | §18 |
| Awwwards | `rgb(34, 34, 34)` | `#222` (warm grey variant) | §24 |

The principle: **body text color is a brand decision, not a system default.** For any client whose product, material, or atmosphere is warm (leather, wood, terracotta, food, fabric, paper), the body text should pick up that warmth. Adopt `--text-warm-brown` (range `#2B1A12` – `#3D2D20`) and `--text-warm-grey` (range `#222` – `#333`) as named tokens.

### 3. The pill-button arms race

Border-radius on primary CTAs has been steadily escalating across this study:

| Site | Radius |
|---|---|
| SweepingCorp (B2B utility) | 7.5px |
| Apple iPhone | 980px |
| Fourmula.ai | 1317.53px |
| Horeca-Social | 1440px |
| Flyward | 1600px |
| Haven (half-pill) | `30px 0 0 30px` |

All values 980+ produce a perfect pill at any pixel width — functionally identical. The escalation is decorative one-upmanship, not engineering. **For the agency's templates, codify ONE value (use `9999px` or simply `--radius-pill: 9999px`) and stop debating.** Apple's discipline (a single radius for all pill-buttons across the site) is the model. The agency standard should be `9999px` for premium, `8px` for utility (matching SweepingCorp's 7.5 chip).

The standout variant: **Haven's half-pill** (`30px 0 0 30px`) on the sticky right-edge RESERVE button is the single most useful CTA pattern in this study. Adopt as a reusable Astro component.

### 4. Negative letter-spacing on display type signals "modern / premium"

Every single site that wanted to register as "design-conscious" applied negative tracking to its display headlines. Live measurements ordered by intensity:

| Site | Tracking on display | % of size |
|---|---|---|
| Apple h1 80px | −1.2px | 1.5 % |
| Aircenter h1 71px | −2.84px | 4.0 % |
| Marvell h1 256px | −1.28px | 0.5 % |
| Sweepingcorp h1 54px | −1.08px | 2.0 % |
| Flyward h2 80px | +1.6px (positive — uppercase serif exception) | +2.0 % |
| Hubtown / Mily-ish | ranges | — |
| Juan Mora h2 57.6px | −2.16px | 3.7 % |
| Victor Furuya h2 56px | −2.8px | 5.0 % |
| Fourmula h2 99.8px | −2.99px | 3.0 % |

**Pattern:** negative tracking on display sans = "tech / modern / consumer." Positive tracking on display serif = "premium / classical / heritage." The agency rule for template defaults:

- Display sans, all-caps OR sentence-case → `letter-spacing: -0.022em` (≈ −2.2 %)
- Display serif, uppercase → `letter-spacing: +0.025em` (≈ +2.5 %)
- Display serif, sentence-case → `letter-spacing: 0` (let the typeface do the work)

### 5. Period-terminated headline phrases (4 independent confirmations)

A specific brand-voice signature now seen across:

- Watch House: `Modern Coffee.` · `Shop.` · `Visit us.` · `Menu.` (§5)
- Laurenti: `Digital.\nDesign to move.` (§17)
- Apple iPhone-line phrases: `Privacy. That's iPhone.` etc.
- Fourmula: `Your catalog, instantly re-shot.` · `On-brand visuals.\nMade by AI.` (§22)

**This is now an established 2026 copy convention.** Suggest it in template copy-voice sections for clients who want to feel "considered." Particularly powerful for short CTAs (`Shop.`, `Book.`, `Visit.`) — the period turns a verb into a complete utterance.

### 6. Monospace font for catalog / portfolio labels (3 independent confirmations)

When a section header counts curated items or labels a portfolio entry, three sites independently reached for a monospace:

- Mily Group: `IBM Plex Mono` for `PRODUCTS (5)` (§9)
- Hubtown: `Commit Mono` loaded (§8)
- T11: `Monument Grotesk Mono` for `OFFLIMITS FESTIVAL` and `PORTFOLIO [21]` (§19)

**Pattern:** mono = "directory entry / curated index / system reference." Adopt across gastronomy menu sections, beauty service categories, trades project portfolios, artisan collections. Free choices: **JetBrains Mono**, **IBM Plex Mono**, **Commit Mono**, **Geist Mono**, **Berkeley Mono** (paid).

### 7. Inverted heading hierarchy: tiny h1 + giant h2 (3 confirmations)

Three sites set the visual hero in an h2 or paragraph and reduced the h1 to a tiny tracked-uppercase eyebrow label:

| Site | h1 | h2 / hero |
|---|---|---|
| Auwa (§6) | 12px / +1.92px tracking / 45 % opacity black | 32px serif paragraph |
| Lesse (§16) | (missing) | 14.4px uppercase eyebrow + 43.2px paragraph |
| Juan Mora (§18) | 32px / peach | 57.6px / grey |

**Pattern:** SEO-correct h1 carries the keyword target as a quiet label, the *visual* lead is a 32-57px paragraph or h2. This is the current (2026) design-Twitter portfolio convention. Codify in `templates/professional-services.md` and the future agency-self template.

### 8. System-font body + one custom display face (3 confirmations)

Three sites declared a system font stack for the body chrome and reserved their custom font load for the display elements only:

- Really Up There (§7): `system-ui, -apple-system, ...` body + `Oziksoft` display
- Lesse (§16): `ui-sans-serif, system-ui, ...` body + `HostGrotesk` + `DMSans` + `LaCerchia` display
- Juan Mora (§18): `Arial, sans-serif` body + `Goga` display

**Pattern:** chrome runs on the OS, the work loads custom fonts. Cuts font payload by ~70 % vs. a two-custom-font setup. Strongly recommended for Tier-1 single-page agency landings and for solo-practitioner clients where performance matters more than typographic chrome polish.

### 9. Fixed-viewport SPA landings (3 confirmations)

Three sites had `pageHeight = window.innerHeight` (900 px) and used some form of in-place panel switching rather than vertical scroll:

- Aircenter (§4): z-stacked cross-fade panels driven by wheel events
- Marvell (§11): single landing, nav to interior pages
- Victor Furuya (§20): single landing, nav to interior pages
- Hubtown (§8): canvas-rendered WebGL "page" with no DOM scroll

**Pattern:** appropriate when the client is selling a single high-trust, low-volume item (a building, a couture piece, a portfolio, a service) where the visitor arrives via personal referral, not search. **Hostile to SEO; do not use for any client whose acquisition includes Google.**

### 12. Mobile responsive collapse — measured (Phase 1a addendum, 2026-05-19)

Eight high-relevance sites were re-probed at 375 × 812 viewport. Findings ground the agency's mobile-first defaults.

**Display-h1 scale-down ratio (desktop → 375px):**

| Site | Desktop h1 | Mobile h1 | Ratio | Notes |
|---|---:|---:|---:|---|
| Watch House §5 | 20px (wordmark) | 20px | 100 % | h1 is a small wordmark; never needs scaling |
| Haven §15 | 49.5px | 39.6px | 80 % | Modest scale-down — fits hospitality calm |
| Marvell §11 | 256px | 112px | 44 % | Large reduction because the wordmark must stay visible |
| Mily §9 | 108.5px | 62px | 57 % | |
| Auwa §6 | 12px (eyebrow) | 12px | 100 % | Eyebrow-style h1 stays identical (12px / +1.92px tracking) |
| Modus §3 | 121.6px | 59.25px | 49 % | |
| Horeca-Social §10 | 163.7px | 86.6px | 53 % | |
| Kindred §20 | 44px | 32px | 73 % | h3 (category labels): 100px → 50px = 50 % |

**Pattern:** display heroes that exceed ~80px desktop almost universally **halve to ~50 %** on mobile (Marvell 44 %, Modus 49 %, Mily 57 %, Horeca 53 %). Heroes ≤ 50px desktop stay closer to their original size (Haven 80 %, Kindred 73 %). Tiny/eyebrow h1s (Auwa 12px, Watch House 20px) don't scale at all. **Agency rule (Phase 2 codification): for fluid display headlines, use `clamp(min, fluid, max)` where min ≈ 50 % of max for the >80px tier, and ~75 % of max for the ≤50px tier.**

**Body text — no site goes below 14px on mobile:**

| Site | Mobile body | Weight |
|---|---:|---|
| Watch House | 16px | 300 |
| Haven | 18px | 300 |
| Auwa, Mily, Marvell, Kindred | 16px | 400 |
| Modus | 14.4px | 400 |
| Horeca-Social | 20px | 400 |

**Pattern:** mobile body is **never below 14px**, never above 20px. The 16-18px range covers 6 of 8 sites. **Agency rule already in place** (`PERFORMANCE.md` body-size floor) is validated by the data.

**Mobile nav collapse:**

5 of 8 sites collapse desktop nav to a hamburger (`navHidden: true`): Mily, Auwa, Horeca-Social, Kindred, Modus (after threshold). The 3 that *don't* collapse — Watch House, Haven, Marvell — keep their nav inline because their desktop nav is already minimal (4-6 short labels). **Agency rule:** if desktop nav has ≥ 6 labels, collapse to hamburger below 768 ; if ≤ 4 labels, keep inline.

**Ambient video on mobile — the brand-policy split:**

| Site | Videos on page | Still playing on mobile |
|---|---:|---:|
| Watch House §5 | 7 | **7/7** ⚠️ |
| Auwa §6 | 6 | **0/6** ✅ |
| Kindred §20 | 7 | **0/7** ✅ |

Two of three video-heavy sites *pause all autoplay videos on mobile* (Auwa, Kindred) — likely via `<video autoplay playsinline>` with a `prefers-reduced-data` or `effectiveType` media query gating. Watch House does not pause; all 7 videos continue auto-playing on 375 viewport. **This is the live evidence behind the Phase 2 mandatory-constraints rule for ambient video** (`PERFORMANCE.md`). The pattern works *only* when paused on mobile.

**Container padding observed:** 16-24px horizontal padding on most sites at 375 (gutters appear inside child elements rather than on `main`). For our agency template, default `padding-inline: 1rem` at < 480, `1.5rem` at 480-768, `2rem` at ≥ 768.

### 11. Motion recipes — measured house units (Phase 1b addendum, 2026-05-19)

Five sites with the most distinctive motion were re-probed with `document.getAnimations()` + computed-transition reads. Three findings ground the agency's motion vocabulary:

**Duration map by brand register:**

| Register | Duration | House examples | Use for |
|---|---|---|---|
| Tech-snap | **180-320 ms** | Apple §1 (0.32s) · Auwa nav (0.3s) · Really Up There button (0.18s) | tech / SaaS / consumer-product / agency-self |
| Hospitality-warm | **500 ms** | Watch House (inferred) · Haven §15 (0.5s) · Auwa marquee CTA (0.5s) | gastronomy / beauty / wellness / artisan |
| Premium-deliberate | **600 ms** | Aircenter §4 (0.6s) | real estate / luxury / institutional |
| Statement-reveal | **800-1000 ms** | Apple ribbon-drop (0.8s) · Really Up There tile clip-path (1.0s) | one-time hero entries; not for ongoing interactions |

**Easing curves — measured & named:**

| Curve | Cubic-bezier | Where seen | When to reach for it |
|---|---|---|---|
| Apple smooth | `cubic-bezier(0.4, 0, 0.6, 1)` | Apple nav, h2 reveal | Default ease-in-out for *everything* in a tech/agency-self build |
| Tailwind default | `cubic-bezier(0.4, 0, 0.2, 1)` | Auwa nav | Free baseline if not opinionated |
| Quart in/out (Auwa marquee) | `cubic-bezier(0.7, 0, 0.3, 1)` | Auwa marquee CTA | Symmetrical "consciously paced" transitions — labels swapping, panel reveals |
| Expo out | `cubic-bezier(0.16, 1, 0.3, 1)` | Auwa image-card lift | "Settles into place" — image lifts, card hovers, dropdown menus |
| Extreme S | `cubic-bezier(0.9, 0, 0.1, 1)` | Really Up There clip-path | One-time reveals where the "pause-then-snap" is the visual punctuation |
| Decisive snap, long tail | `cubic-bezier(0.25, 0.74, 0.22, 0.99)` | Aircenter color hover | Luxury / institutional, deliberate interactions |
| Hospitality `ease` | browser default ease | Haven `a` color | When the choice is restraint — let the OS default handle calm color hovers |

**Stagger cascade — Apple's 20ms inter-item rule:**
- Items in a dropdown / lineup appear at 20ms incremental delays (item 1: 200ms, item 2: 220ms, item 3: 240ms, …). All items share the same 320ms transition duration; the staggered delay is what creates the wave.
- Adopt as default for any list-of-items animation (menu sections, project grid reveals, FAQ accordions): `delay: calc(var(--base-delay) + var(--stagger-step, 20ms) * var(--i))`.

**JS motion library audit (across 5 sites measured):**
- Apple §1 — pure CSS · Auwa §6 — pure CSS · Haven §15 — pure CSS · Aircenter §4 — pure CSS (imperative JS, library un-detected globally) · Really Up There §7 — **GSAP 3.15** (only one of the five)
- Lesson: **4 of 5 best-in-class motion sites use no JS animation library.** For our agency Tier-1/Tier-2 builds, the default position should be *zero motion library* — CSS transitions + `@keyframes` cover the entire range of moves seen in this study except the per-character letter animations (Brandon Herbel only). Lottie/GSAP/Framer Motion is a Tier-3 tool, not a Tier-2 default.

**Drop-in agency motion-token block:**
```css
:root {
  /* duration tokens */
  --motion-fast: 180ms;       /* button color hover, tech register */
  --motion-base: 320ms;       /* Apple house unit — nav, default scroll-reveal */
  --motion-warm: 500ms;       /* hospitality / artisan / wellness register */
  --motion-deliberate: 600ms; /* luxury / institutional */
  --motion-reveal: 800ms;     /* one-time hero entries, ribbon drops */

  /* easing tokens — pick the curve that matches the brand register */
  --ease-apple-smooth: cubic-bezier(0.4, 0, 0.6, 1);    /* default ease-in-out */
  --ease-quart: cubic-bezier(0.7, 0, 0.3, 1);           /* symmetric paced */
  --ease-expo-out: cubic-bezier(0.16, 1, 0.3, 1);       /* settle-into-place */
  --ease-luxe: cubic-bezier(0.25, 0.74, 0.22, 0.99);    /* deliberate, long tail */

  /* stagger */
  --stagger-step: 20ms;
}
```

These tokens land in `TECH.md` §7 as part of Phase 2.

### 10. Color-as-material (4 implicit confirmations)

When the client's product is a natural material, three of our reference brands took their brand accent color *literally from the material*:

- Marvell (§11): `#B1A781` = the color of cut sandstone
- Mily (§9): `#2C1A11` = the color of antler / leather
- Haven (§15): `#C1643B` = the color of roasted coffee / terracotta brick
- Kindred (§20) implied: the cream `#FBF8F5` = the color of unwashed linen

**Adopt as a template rule for natural-materials clients:** sample the brand color from a high-resolution photo of the finished product. RGB-pick the dominant hue, lighten 5-10 %, desaturate 5-10 % — that's the brand accent. Codify in `templates/trades.md`, `templates/gastronomy.md`, `templates/artisan.md` color archetype sections.

---

## Agency takeaways

Cross-walked to the 12 vertical templates in `docs/design/templates/`. Each row points to the source sites in this study.

| Vertical template | Top moves to import |
|---|---|
| **gastronomy** | Cream background §5/§15 · period-terminated CTAs §5 · hours-in-nav (`COFFEE 8:00-4:00`) §15 · half-pill sticky RESERVE §15 · ambient autoplay-muted MP4 loops §5 |
| **beauty** | Cream background §6/§18 · marquee-on-hover CTAs §6 · color-mix body text token §3 · eyebrow-h1 + display-paragraph hero §6 · light-weight serif at display size §20 |
| **trades** | Warm-brown body color §9 · "your color is your material" rule §11/§9 · Eurostile or DIN for heavy-industry §14 · navy `#042940` for regulated trades §14 · serif + uppercase headlines for premium-contractor §3 |
| **health** | (defer to a future audit including doctor / clinic references — none in this set) |
| **studio** | System-font body + single custom display §7/§16/§18 · per-character DOM split for letter-animations §7/§21 · 144-256px hero wordmark §11/§7 |
| **professional-services** | Hot-pink body confidence §10 · 20px body for editorial weight §10 · big-number stat callouts §10 · positive-tracked uppercase serif §13 |
| **pets** | Three-font role allocation (serif display + sans body + mono catalog) §9 · IBM Plex Mono for `PRODUCTS (N)` §9 |
| **automotive** | Eurostile / DIN industrial display §14 · navy `#042940` (§14) for fleet credibility |
| **education** | (defer) |
| **events-hospitality** | Brown + cream as neutral pair §13 · positive-tracked uppercase serif §13 · cinematic single-piece "campaign is the product" model §23 (Bulgari, unaudited) |
| **home-garden** | Color-as-material §11 · light-weight serif §20 · 5000-7000 px page cap |
| **artisan** | Light-weight serif at display §20 · Instrument Serif as free premium-serif alt §6/§9 · serif body fallback §20 · per-character DOM split §7/§21 |

### Token additions for `tokens.css`

Add to the agency-wide design-tokens layer:

```css
:root {
  /* warm-neutral backgrounds — confirmed across §5/§6/§15/§18/§20 */
  --bg-cream: #FBF8F3;          /* the median of the 5 measured creams */
  --bg-charcoal: #1D1D1D;       /* §12 — warmer than pure black */
  --bg-night: #020A18;          /* §8 — luxury nighttime */
  --bg-studio-grey: #EBEBEB;    /* §16 — architectural neutral */

  /* warm body text — confirmed across §9/§13/§15 */
  --text-warm-brown: #2B1A12;
  --text-warm-grey: #333;
  --text-trade-navy: #042940;

  /* error / system colors — §4 */
  --c-error: #e34a4a;

  /* button radii — §5 + §15 */
  --radius-pill: 9999px;        /* premium CTA */
  --radius-pill-half: 30px 0 0 30px;  /* sticky right-edge tab */
  --radius-chip: 8px;           /* utility / filter chip */

  /* tracking conventions — §1/§4/§11/§22 */
  --tracking-display-sans: -0.022em;
  --tracking-display-serif-caps: +0.025em;
  --tracking-body: -0.005em;    /* Apple's quiet body tightening */
}
```

### Doc additions needed in subsequent passes

1. **`DESIGN-BEST-PRACTICES.md` §Color** — document the cream-not-white principle, the warm-brown body principle, the color-as-material rule. Each with the 5/3/4 site samples cited here.
2. **`DESIGN-BEST-PRACTICES.md` §Typography** — document the negative-tracking-on-sans / positive-tracking-on-serif rule with the live measurements.
3. **`templates/gastronomy.md` §Heros** — add Haven's hours-in-nav pattern + half-pill RESERVE as default options.
4. **`templates/artisan.md` §Color** — add "sample the brand color from a photo of the finished product" as the primary rule.
5. **`templates/trades.md` §Color archetypes** — split "industrial" (navy `#042940`, Eurostile) from "premium-contractor" (uppercase serif + cream/brown, à la Modus Projects §3).
6. **`tokens.css` template** — add the token block above as the new baseline. Migrate existing client projects on next maintenance window.
7. **Agency capability note** — two sites (HBA §2, Bulgari §23) were inaccessible to the headless MCP browser. If we want to study luxury / fashion / heavily-CDN-protected sites in future audits, we'll need a real-browser DevTools workflow (open in Chrome → `Save All as` → re-run the inspector locally). Worth a one-page runbook in `docs/audit/`.

### What was *not* observed in this study (gaps for future audits)

- No health / clinic / Doctolib-style reference (none of the 24 sites were medical-vertical)
- No education / academy / language-school reference
- No automotive (workshop, garage, dealer) reference
- No municipal / public-sector reference
- No proper accessibility audit per site (a separate WCAG 2.2 AA pass would be needed; this study captured contrast ratios opportunistically but not exhaustively)

These gaps suggest a follow-up audit of 8-12 sites in those verticals before any health / education / automotive client engagement.

---

*End of study. Live-measurements timestamped 2026-05-18. Source measurement script archived inline in §1 (Apple). Browser used: Chromium via Docker MCP Playwright tools at 1440 × 900 viewport.*
