# Redesign rollout plan — apply the "Berlin night" (v1) register across the live agency site

**Date:** 2026-06-13 · **Author:** Claude Code (planning session) · **Status:** PLAN — awaiting owner approval. **No source files edited yet.**
**Project:** `clients/baragency/` (BAR Agency — the agency's own marketing site)
**Look to absorb:** `clients/baragency/redesign/index.html` (the **v1** prototype) + its `README.md`
**Supersedes intent of:** `redesign/HANDOVER-TO-CLAUDE-CODE.md` (used as input; this is the full plan it asked for). The owner reviewed both prototypes and chose **v1** (Inter, blue night palette, the v1 layout/style/motion). The `v2.html` serif direction is **not** used.

---

## 1. Goal & scope

Re-skin the **existing multi-page live site** to the v1 "Berlin night" visual language — dark `#060b14` base, favicon-blue `#0c1a2b` surfaces, single `#0071e3` accent (with `#7cc0ff` text-accent on dark), Inter display type, the v1 nav/button/section chrome, the WebGL aurora hero, and the v1 motion vocabulary.

**This is a UI/UX re-skin, NOT a restructure.** Every route, page, and piece of content stays exactly where it is. Only look + motion change.

### Three explicit carve-outs (keep as-is)
1. **About section keeps its current photo** — the home About-teaser image (`/img/home/studio-notebook.webp`) and the `/about` page image (`/img/about/berlin-altbau-dawn.webp`) are **preserved**; the About blocks keep their `<img>` (no shader, no text-only replacement). They restyle to dark like everything else, but the photo stays.
2. **Home FAQ stays** — the `<Faq>` section on the home page (and its `FAQPage` JSON-LD via `extraSchema`) is kept. v1 had no FAQ; we keep ours.
3. **Footer stays** — the current 4-column `Footer.astro` is kept (structure + content + links). It is **not** replaced with v1's minimal centered footer. It restyles to dark by inheriting the theme tokens. *(Decision D3 below: confirm "keep footer" = keep structure but go dark, which is the assumption here.)*

### Out of scope
- No content/copy rewrites (reuse existing typed content modules verbatim).
- No new routes, no removed routes, no page merged into another.
- No `noindex` change (demo discipline holds).
- No production-cutover work (domain, Resend key, lawyer sign-off) — unrelated, tracked elsewhere.

---

## 2. Keystone strategy — scoped `.theme-night`, not a hard global flip

The site has a coherent Tailwind v4 `@theme` token system; the audit confirms **~94% of color usage is token-driven** and will re-skin automatically when the tokens change. The decision is *how* to change them.

**Chosen approach: keep the light tokens as the default `@theme`, add a `.theme-night` override scope applied to `<body>` on marketing pages only.**

Why this and not a hard global flip:
- **Legal pages must stay light** (`/privacy`, `/imprint`, `/contract`, `/de/contract`) for readability + print. With a scope, legal pages simply don't get `.theme-night` → they stay on the default light tokens. Zero changes needed on legal pages.
- **The shared Header/Footer inherit the page's scope.** On a marketing page (`body.theme-night`) they render dark; on a legal page (no class) they render light — automatically consistent with each page. This **dissolves the audit's only HIGH-risk item** (dark chrome clashing on light legal pages).
- Tailwind v4 mechanics support it: `bg-bg` compiles to `background-color: var(--color-bg)`. Overriding `--color-bg` (and siblings) inside `.theme-night` cascades to all descendants, so every token-driven utility flips with no markup change.

**Mechanism (revised per Audit Finding 1):** add a `theme?: 'light' | 'night'` prop to `BaseLayout.astro` that puts the theme class on `<body>`. **The theme is auto-derived from the route so legal-page lightness is structural, not opt-out:** if the prop is omitted, `BaseLayout` matches `Astro.url.pathname` against a `LIGHT_ROUTE_PATTERNS` list (`/privacy`, `/imprint`, `/contract` — substring match covers all locale prefixes) → light; everything else → night. An explicit prop always wins. This keeps the ergonomic default (most pages are marketing → night) while making it **structurally impossible to forget** light on a legal/print page (a forgotten prop on a future legal route still resolves light). This is an **additive prop + a derivation helper** (the sanctioned "extend via props" pattern) — `BaseLayout` is NOT rewritten; all existing head emissions (title/canonical/OG/hreflang/JSON-LD/BreadcrumbList/consent-GA4/skip-link/locale-detect) are untouched.

---

## 3. Verified current-state facts (read from code, 2026-06-13)

- **Stack:** Astro 6, `output: 'static'`, Vercel adapter, Tailwind v4 via Vite, Sentry, sitemap. `@fontsource-variable/inter` already self-hosted in `BaseLayout`. Only `/api/*` are SSR.
- **Pages exist twice:** `src/pages/X.astro` (EN at root) and `src/pages/[locale]/X.astro` (de + pt-br via `getStaticPaths`) are **near-verbatim duplicates**. **Any per-page markup edit must be made in both copies.** → strong bias toward token/global-CSS/component changes (which hit both for free) and shared components for the hero.
- **Tokens** (`src/styles/tokens.css`): Apple-light `@theme`. Palette tokens + `--color-inverted-*` (pure-black "tile" sections) + canonical motion/easing/tracking tokens (must NOT be renamed).
- **Home composition** (both copies): `.hero-dark` photo hero → `bg-inverted-surface` stats → `PromiseStrip` → `bg-bg` services (`svc-card-photo`) → `bg-surface` portfolio → `ReviewsWall` + `TrustBadgeRow` → `bg-bg` **About teaser (image)** → **`Faq`** → `bg-inverted-bg` CTA → `Footer` + `ContactBar`. It is already a dark/light alternating rhythm.
- **Chrome is token-driven:** `Header` (`bg-bg/80 backdrop-blur-xl border-border`), `Footer` (`bg-surface border-border`), `Button` (`bg-accent text-bg` etc.) all flip automatically.
- **Motion today:** CSS-only `animation-timeline: view()` reveals (`.reveal-rise/.reveal-fade`) + `animation-delay` inline. **No GSAP currently.** Graceful no-JS/old-browser fallback already in place.
- **Already-dark sections reuse light tokens as contrast elements** — e.g. the inverted CTA button is `bg-bg text-text` (a near-white pill on black). When the page goes dark, these invert and break (near-black pill on black). These are the surgical fixes (§5 Phase 1).

---

## 4. Non-negotiables (the architecture wins)

1. `BaseLayout.astro` is **not rewritten** — extended only via an additive `theme` prop + the existing `extraSchema`/`localePath`/`ogImage` props.
2. **Trilingual parity holds.** All visible strings stay in `site.ts` / `page-strings.ts` / `funnel.ts` / `tools.ts` / `local-pages.ts`. `scripts/validate-translations.mjs` must stay green (no new hard-coded display strings; if any new string appears, add it to all three locales). The redesign introduces **no new copy** — it reuses existing keys.
3. **Token-first delivery.** The re-skin lands in `tokens.css` + `global.css` (+ the `.theme-night` scope), not a parallel hardcoded-hex stylesheet. Canonical motion/easing/tracking tokens keep their names.
4. **GSAP via `pnpm add gsap`** if adopted (Decision D2), never the CDN. Inter stays self-hosted (no `rsms.me`). The WebGL shader is inline vanilla (no three.js), exactly as v1.
5. **`noindex` untouched.** Demo discipline.
6. **Motion safety (v1 model):** no-JS → visible; failed-GSAP → visible (reveal hidden-state gated on a `.motion` class added only after init); `prefers-reduced-motion` → static, counters show finals, shader off; no-WebGL → CSS-gradient fallback.
7. **No full-page scroll-hijack.** (v1's horizontal work strip is desktop-only in normal flow; we likely omit it — see Decision D4.)
8. **WCAG 2.2 AA holds on dark.** Every text/CTA/eyebrow pair re-verified in-browser per `COLOR.md` §6 (the accent-on-dark retune in Phase 0 is the main item).
9. **Per-client docs are the real docs** — update `design.md` (palette/type → dark register), `CLAUDE.md` (register note), and the `COLOR.md` "Apple-inspired near-white" diversity note at the end (it's now outdated for this client).

---

## 5. Phased plan (each phase = one reviewable commit after approval)

### Phase 0 — Night token scope + global parameterization (highest leverage)
**Files:** `src/styles/tokens.css`, `src/styles/global.css`, `src/layouts/BaseLayout.astro` (additive prop only).

1. Add a `.theme-night` override block (in `global.css`, after the `@import`/`@theme`) redefining the color custom properties. **Recommended starting values** (verify in-browser, tune to AA):
   ```css
   .theme-night {
     --color-bg: #060b14;
     --color-surface: #0c1a2b;            /* favicon blue — raised surface */
     --color-surface-elev: #0e1c2f;
     --color-text: #f4f6fa;
     --color-text-muted: #93a3ba;         /* ~6.5:1 on bg — AA */
     --color-text-subtle: #7c8ba1;        /* AA-large only */
     --color-accent: #0071e3;             /* CTA fill — unchanged; white text on it = 4.6:1 AA */
     --color-accent-deep: #0058b8;        /* CTA hover = DARKEN (per COLOR.md); white on it = 7.3:1 — correct on dark too */
     --color-accent-light: #7cc0ff;       /* accent TEXT on dark ≈ 9:1 */
     --color-accent-on-surface: #7cc0ff;  /* see note — accent TEXT on the page bg (night value) */
     --color-border: #1b2940;             /* hairline */
     --color-inverted-bg: #03070e;        /* deepest band (CTA tiles) — distinct from bg for rhythm */
     --color-inverted-surface: #0c1a2b;
     --color-inverted-text: #f4f6fa;
     --color-inverted-text-muted: #93a3ba;
   }
   ```
   - **CORRECTION (a11y) — the `accent-deep` dual-role does NOT collapse to one value on dark.** The codebase overloads `accent-deep` for *both* (i) accent **text** on the page bg (eyebrows/links/icon strokes) and (ii) CTA **fill hover**. On dark these genuinely diverge: a CTA-hover fill must stay a **dark** blue so white text holds AA (white-on-`#0058b8` = 7.3:1; white-on a *bright* blue like `#2da0ff` is only ~2.8:1 → **fails**), while accent **text** on near-black must be a **light** blue (`#7cc0ff` ≈ 9:1; `#0058b8` as text on `#060b14` ≈ 2.4:1 → **fails**). Resolution: keep `--color-accent-deep` = `#0058b8` (CTA hover, darken-on-hover per `COLOR.md`, AA on both themes) **and** introduce a new semantic token **`--color-accent-on-surface`** for accent *text* (light `#0058b8` in the base `@theme`, night `#7cc0ff` in `.theme-night`). Migrate the accent-**text** usages (`text-accent-deep` used on eyebrows/links/icons — single-source in `sections/*` + the home inline eyebrows ×2 copies) to `text-accent-on-surface`; CTA fills keep `hover:bg-accent-deep` untouched. This satisfies COLOR.md (darken-on-hover) *and* AA accent-text on dark. Document both ratios in `design.md`.
   - **CORRECTION (a11y) — skip link + any `focus:text-bg` on accent.** `BaseLayout`'s skip link is `focus:bg-accent focus:text-bg` → on night `text-bg` is dark-on-blue (fails). Change to `focus:text-white` (a surgical, additive edit — not a rewrite). Audit for any other `*-accent` paired with `text-bg`.
2. Parameterize the two hardcoded global classes so they follow the theme:
   - `.hero-dark`: `#000` → `var(--color-inverted-bg)`, `#ffffff` → `var(--color-inverted-text)`. (On light legal pages the token is still near-black, so their existing dark hero is unchanged.)
   - `.svc-card-photo`: keep white text (cards are always photo-dark) but confirm the `rgba(0,0,0,…)` veil still yields AA over the now-dark page; tune if needed.
3. Add `theme?: 'light' | 'night'` prop to `BaseLayout` with **route-auto-derivation** (Finding 1): `const bodyTheme = theme ?? (LIGHT_ROUTE_PATTERNS.some(p => Astro.url.pathname.includes(p)) ? 'theme-light' : 'theme-night')` → `class:list={[bodyTheme]}` on `<body>`. Legal routes resolve light even with no prop.
4. **Outcome:** every marketing page renders dark automatically; legal pages still light (structurally). Screenshot every route to catch contrast regressions before deeper work.

### Phase 1 — Two systematic, grep-enumerated class sweeps (RE-SCOPED after the §8 grep gate, 2026-06-13)
The "~94% token-driven" figure is directionally right, but the remaining ~6% is concentrated in **two repeated inline patterns the token flip does NOT fix** — the **CTA system** and the **accent-text eyebrows** — present on nearly every marketing page in **both** locale copies. Phase 1 is therefore **two mechanical sweeps + a few component fixes**, not a handful of spot-fixes. **Run the §11 grep gate first; its enumerated output is the edit list.**

**Sweep A — CTA normalization (Audit Finding 5 / Category A — top priority).** Two inline CTA patterns fail WCAG on night: the base reads, but the **hover** state is dark-text-on-dark-blue / dark-text-on-blue (fails the all-4-states rule). Grep-confirmed instances:
- `bg-text text-bg hover:bg-accent-deep` (white pill, dark text; hover keeps dark text on dark-blue) — **incl. the contact-form submit (`contact.astro` + `[locale]/contact.astro`) — the most conversion-critical control on the site (Finding 5, do first)** — plus `about`, `pricing` (top CTA), `portfolio/[slug]` visit-live, `services/[slug]`, `404`, `500`, `Header` (desktop L77 + mobile L155), `ContactBar` phone, `GbpCheckTool` submit, `PricingTiers` non-popular button.
- `bg-bg text-text hover:bg-accent hover:text-bg` (dark pill; hover blue + dark text) — `index` inverted-CTA, `website-check`, `pricing` (secondary), `tools/website-scan`, `tools/gbp-check`, `webdesign-berlin` (+slug).
- `bg-accent text-bg` (dark text on blue) — `Button.astro` primary, `SiteScanTool` submit, `PricingTiers` "Most chosen" badge.
- **Fix:** normalize all to the single AA-correct accent CTA — **`bg-accent text-white hover:bg-accent-deep`** (white-on-blue base 4.6:1; hover darker blue 7.3:1 — passes all 4 states on both themes; also more v1-faithful). `--color-accent-deep` STAYS `#0058b8` as the CTA darken-hover.
- **Scope exclusion:** the **light** legal/print pages keep their current CTA classes untouched — `contract.astro`, `de/contract.astro` toolbar buttons are correct on light. (404/500 go dark → fix them.)

**Sweep B — accent-text migration (Audit Category B — wider than first stated).** `text-accent-deep` used as **text/icon** color (eyebrows, links, check-icons, review stars, arrows, bullets) drops to ~2.4:1 on near-black. Grep-confirmed: **18 page files + 6 components** (`Faq`, `PromiseStrip`, `ReviewsWall`, `PricingTiers`, `GbpCheckTool`, `tools/index`). Migrate these **text/icon** uses → **`text-accent-on-surface`** (new token: `#0058b8` in base `@theme`, `#7cc0ff` in `.theme-night`, ≈9:1).
- **Do NOT touch `bg-accent-deep`** (CTA hover fills — Sweep A).
- **Scope exclusion:** **light** pages keep `text-accent-deep` (correct on light) — `imprint.astro` email link + any accent-text on contract pages stay as-is.

**Component fixes (global, hit both copies for free):**
- `CookieBanner.astro` accept: `bg-text text-white` → `bg-accent text-white hover:bg-accent-deep` (on night the current is white-on-near-white = invisible). **Consent logic (`applyConsent`/`data-cookie-category`) untouched — colour classes only.**
- `ContactBar.astro` WhatsApp `bg-success text-white` — verify green+white AA on dark (passes); hidden today (`visible:false`).
- `bg-inverted-*` sections (stats/CTA/trust) — driven by night `--color-inverted-*`; verify `text-accent-light` eyebrows pop.

**Category C — DO NOT over-correct (leave as-is):** `text-white`, `text-white/85`, `border-white/30|70` inside `.hero-dark`/photo-veil blocks are **correct on both themes** (`.hero-dark` is near-black via `--color-inverted-bg` on light too). They must NOT be tokenized; they carry over unchanged when those blocks become `<ShaderHero>` (Phase 3).

**Out of scope (confirmed GREP 5):** raw hex in `api/contact.ts` + `api/gbp-check.ts` are **owner-notification email templates** (render in the recipient's mail client, never themed) — leave. `PricingTiers.astro` `rgb(0 0 0 / .18)` box-shadow is a black shadow, theme-agnostic — leave.

### Phase 2 — Chrome to v1 (Header / Footer / Buttons)
- **Header:** already a glass nav (`backdrop-blur-xl` + hairline border) — matches v1 once dark. Keep ALL logic (locale switcher, hamburger, mobile menu, the **`/tools`** item). Restyle deltas only: the primary CTA pill `bg-text text-bg` → **accent-blue pill** (`bg-accent text-white hover:bg-accent-deep`) to match v1; optional v1 logo dot (`BAR●`). Confirm `/tools` renders in all 3 locales + mobile menu (it does in code).
- **Footer:** **kept** (Decision D3) — structure/content unchanged, inherits dark tokens. Verify `text-muted` on `bg-surface` ≥ AA on dark.
- **Button.astro:** the `text-white` fix from Phase 1 is the only change; variants stay token-driven.

### Phase 3 — Hero system (shader island + v1 motion)
- Build a shared **`src/components/sections/ShaderHero.astro`** (props: `eyebrow`, `titleLines` | `title`, `subtitle`, `ctas[]`, optional `imageSrc`/`imageAlt`, `align`). Renders, back-to-front: the page's **subtle photo layer** (kept per D1 — the current hero photo + a heavier veil) → the v1 WebGL aurora `<canvas>` blended over it → the v1 CSS-gradient fallback → the eyebrow/title/sub/CTA. This reuses the existing `.hero-dark__img` + `.hero-dark__veil` structure (so the photo stays) and layers the aurora on top. Content + image come from each page's existing `page-strings`.
- Add a shared client island script (`src/scripts/motion.ts` or inline island) porting v1's: vanilla WebGL aurora (with reduced-motion + no-WebGL guards → the photo+gradient remains as fallback), the `.motion`-gated reveal/word-split, counters, magnetic CTAs, service cursor-glow. **GSAP via `pnpm add gsap`** (D2). Keep the existing CSS `animation-timeline` reveals for section reveals (don't rip them out) — GSAP only adds the v1 signature moments.
- Convert each marketing page's `.hero-dark` block → `<ShaderHero …>` (in both copies), passing the page's existing hero image so it stays behind the aurora. **ShaderHero renders the page's single `<h1>`; the old hero `<h1>` is removed in the same edit** (Finding 4 — guard against double-h1). **About keeps its image — it's a section, not the hero, so unaffected.**
- **Finding 2 — reduced-motion gates the rAF loop, not just entrance tweens.** Under `prefers-reduced-motion: reduce` the WebGL `requestAnimationFrame` loop **must not start at all** (the static photo+gradient is shown) — a continuously animating aurora is itself motion the user opted out of, and an always-running rAF is an INP/battery cost. (v1 already does `if (reduced) return;` before the loop — preserve it explicitly.) Keep the IntersectionObserver off-screen gate too.
- **Finding 3 — the hero photo stays the LCP element.** Keep the photo as a real, eager, `fetchpriority="high"` `<img>` in normal flow; the aurora `<canvas>` is `position:absolute` over it and must NOT become the LCP candidate. Verify in Phase 6 with a per-breakpoint CWV trace that LCP resolves to the image and LCP time has not regressed vs. today's `.hero-dark`. If the canvas steals LCP, defer its first paint behind the image's load/`.motion` gate.

### Phase 4 — Section parity to v1
Most sections already exist and just need the dark restyle (carried by Phase 0) plus small deltas to match v1:
- **Services:** add v1 cursor-glow + gradient-hover treatment (the home uses `svc-card-photo` photo cards today — decide whether to keep photo cards or move to v1's flat glow cards; recommend keeping photo cards, they're stronger than v1's flat cards, just ensure dark veil reads well).
- **PromiseStrip:** optional count-up animation (v1) via the GSAP counters.
- **PricingTiers:** "Most chosen" accent treatment already present; align glow/border to v1.
- **ReviewsWall / TrustBadgeRow:** restyle dark (automatic); keep the DRAFT honesty caption.
- These are deltas, not rebuilds. Keep `faqPageSchema` and all data wiring intact.

### Phase 5 — Per-page application + carve-out verification
Walk every marketing route (`/`, `/services`+detail, `/portfolio`+detail, `/about`, `/contact`, `/pricing`, `/website-check`, `/tools`+children, `/webdesign-berlin`+slugs) in **both** copies: confirm hero swapped, sections dark, no inverted-token breakage, **exactly one `<h1>` per route and it is the ShaderHero's** (Finding 4). Explicitly verify the **three carve-outs**: home About image present, home FAQ present + `FAQPage` schema intact, Footer unchanged. Legal pages (`/privacy`, `/imprint`, `/contract`, `/de/contract`) auto-resolve light and are confirmed **untouched/light/print-OK**. 404/500: dark (token-driven, follow the body theme).

### Phase 6 — Verify + docs
- `pnpm validate` (Biome + `validate-translations` parity + `astro check` + build) must pass.
- **Re-run the §11 grep gate** → zero remaining failing `text-bg`/`bg-text` CTA patterns on night pages, zero un-migrated `text-accent-deep` text uses on night pages, zero arbitrary-hex.
- Screenshot **every route** at **375 / 768 / 1280** (Docker browser MCP): zero console errors, zero horizontal overflow, AA contrast (incl. **all 4 CTA states**), working reduced-motion + no-JS + no-WebGL fallbacks.
- **Finding 2:** confirm no rAF activity under `prefers-reduced-motion` (static gradient shown).
- **Finding 3:** per-breakpoint CWV/Lighthouse trace — LCP resolves to the hero **image**, not the canvas, and LCP time has not regressed vs. baseline.
- **Finding 4:** `grep -c '<h1' ` per built page = exactly 1.
- **Forms regression:** actually submit `/contact`, `/tools/website-scan`, `/tools/gbp-check` — confirm field `name`s/honeypot/rate-limit intact and endpoints still return success (the re-skin was class-only).
- **Consent regression:** confirm GA4 stays blocked until accept; banner reopen works.
- Update `docs/clients/baragency/design.md` (palette + type → dark register, with measured AA ratios, incl. the `accent-deep`/`accent-on-surface` split), `CLAUDE.md` (register note + `ShaderHero` in the Imported-components table), and the `COLOR.md` "Apple-inspired near-white" diversity note. **Note re COLOR.md §6.5:** the portfolio-diversity gate governs the *demo* portfolio; the agency's own marketing site is exempt — state this explicitly rather than forcing a ΔE check against bellini/barber.
- Keep `noindex`. Atomic commits, owner sign-off, no auto-commit.

---

## 6. Decisions — RESOLVED (owner, 2026-06-13)

- **D1 — Hero photos:** ✅ **Keep a subtle photo behind the shader.** Heroes layer the current photo (with veil) under the v1 aurora; the photo also serves as the no-WebGL fallback. (About-section photo kept regardless.)
- **D2 — GSAP:** ✅ **Add GSAP via `pnpm add gsap`** for v1's word-split / count-up / magnetic CTAs / service cursor-glow. Existing CSS `animation-timeline` reveals are kept for section reveals.
- **D3 — Footer:** ✅ **Keep the current 4-column footer, restyled dark** (structure/content/links unchanged; inherits the night tokens).
- **D4 — Horizontal work strip:** ✅ **Omit** (portfolio stays a grid; avoids scroll-hijack risk).
- **D5 — Services cards:** ✅ **Keep the photo service cards**, restyled dark, with v1 cursor-glow added (not v1's flat cards).

---

## 7. Risk register
- **Duplicated pages (×2):** every per-page markup edit done twice. *Mitigation:* push as much as possible to tokens/global/components; shared `ShaderHero`; per-page edits are mechanical + screenshot-verified in both copies.
- **Accent-on-dark contrast** (eyebrows/CTAs): handled by the Phase 0 accent retune; verify in-browser per `COLOR.md` §6.
- **Already-dark-section inversions:** enumerated in Phase 1; the inverted CTA button is the main one.
- **Legal-page light preservation:** guaranteed by the scope approach (no `.theme-night` → light); double-check Header/Footer render light there.
- **Motion regressions:** keep CSS reveals; gate GSAP/shader behind `.motion`/guards; test reduced-motion + no-JS.
- **Translation parity:** no new strings introduced; run `validate-translations` in Phase 6.

---

## 8. Acceptance checklist
- [ ] Palette flipped via `.theme-night` scope; legal pages (`/privacy`, `/imprint`, `/contract`, `/de/contract`) remain light + print-friendly, untouched.
- [ ] Every marketing hero shows the shader (with CSS-gradient + no-WebGL + reduced-motion fallbacks); legal pages excluded.
- [ ] Three carve-outs intact: home **About image** kept, home **FAQ** + `FAQPage` schema kept, **Footer** kept (structure/content).
- [ ] `/tools` + children fully restyled and visible/obvious in header nav (desktop + mobile) in EN/DE/PT-BR.
- [ ] Site remains multi-page — no route removed, no page collapsed.
- [ ] `BaseLayout.astro` not rewritten; only the additive `theme` prop + shader/motion island + global CSS + content modules touched.
- [ ] No new visible strings outside the content modules; `validate-translations` green (32 i18n + 125 page-string keys × 3 locales).
- [ ] GSAP via pnpm (no CDN) if adopted; Inter still self-hosted (no rsms.me).
- [ ] Motion safety: no-JS visible · failed-GSAP visible · reduced-motion static · no-WebGL gradient fallback.
- [ ] No full-page scroll-hijack.
- [ ] WCAG 2.2 AA holds on dark; no dark-on-dark CTA/eyebrow regressions (all 4 CTA states verified).
- [ ] `pnpm validate` passes; every route screenshot-verified at 375/768/1280, zero console errors, zero overflow.
- [ ] `noindex` untouched; `design.md` + `CLAUDE.md` + `COLOR.md` diversity note updated.
- [ ] Atomic commits, owner sign-off, no auto-commit.

---

## 9. Standards-conformance review (2026-06-13)

Reviewed the plan against each standards doc + the code. Verdict: **conformant after the corrections folded into §5/§6.**

| Doc | Verdict | Notes / what the re-skin must preserve |
|---|---|---|
| **SEO.md** | ✅ Preserved | JSON-LD `@graph`, `BreadcrumbList`, `FAQPage` (home) all emitted in `BaseLayout`/`faqPageSchema` — untouched. hreflang/canonical/OG/Twitter/title/meta — untouched (additive `theme` prop only). `noindex` untouched. **Single-`h1` rule:** `ShaderHero` renders the page's one `<h1>`; pages must not keep a second. Hero image `alt` carried through. Sitemap unaffected. |
| **ACCESSIBILITY.md** | ⚠️ Corrected | Night palette retune (§5 Phase 0) — **two AA corrections applied**: (1) accent-text vs CTA-hover token split (`--color-accent-on-surface`); (2) skip-link `focus:text-bg`→`focus:text-white`. Verify all body/muted/eyebrow/CTA-4-states/focus-ring/border pairs in-browser per COLOR.md §6. No opacity-on-muted (`text-muted/N`) introduced. Reduced-motion honored (shader off, counters final, GSAP gated). Canvas `aria-hidden`. Touch targets, landmarks, focus traps unchanged. |
| **PERFORMANCE.md** | ✅ Within budget (verify) | GSAP (`gsap`+`ScrollTrigger`, ~34 KB gz) bundled + deferred, non-render-blocking; well under the 500 KB page budget. WebGL aurora is procedural (no asset), `low-power`, DPR≤1.5, IntersectionObserver-gated. **LCP stays the hero photo** (kept, `loading=eager fetchpriority=high`) — the canvas must not become LCP. Only `transform`/`opacity` animated. Watch INP on `pointermove` (magnetic/cursor-glow) — keep passive listeners + `gsap.quickTo`. Inter stays self-hosted. Re-measure CWV in Phase 6. |
| **SECURITY.md** | ✅ No header change | **CSP/`vercel.json` needs NO change** because GSAP is bundled `'self'` (not CDN) and the shader/motion are local — **no new external origins**, no `connect-src`/`img-src` additions. The 6 security headers untouched. Sentry (`sendDefaultPii:false`) untouched. No secrets touched. (Using pnpm-bundled GSAP instead of a CDN is the security-correct choice.) |
| **LEGAL.md / DSGVO** | ✅ Preserved | Consent-first cookie banner + `data-cookie-category` script-blocking preserved (only the accept-button colour changes). **GSAP + WebGL are first-party, set no cookies, send no data → no consent implications, no new processor.** Legal pages stay light + print-friendly (scope approach). Impressum/privacy content untouched. No `rsms.me`/CDN hotlink (no third-party data leak). |
| **ANALYTICS.md** | ✅ Preserved | Consent-gated GA4 (`type="text/plain"`) in `BaseLayout` untouched; `analytics.ts` import untouched. **Preserve all `data-event`/`data-source-section` attributes** on Buttons/CTAs during restyle. No new events wired (out of scope). |
| **RELIABILITY.md** | ✅ Preserved | No-JS → content visible (reveal hidden-state gated on `.motion`, added only after GSAP init; existing CSS reveals are already no-JS-safe). Failed-GSAP → content visible. No-WebGL → photo+gradient fallback. 404/500 keep working (dark, token-driven). No full-page scroll-hijack. |
| **QUALITY.md** | ✅ Gated | `pnpm validate` (astro check + biome + translation parity + build) in Phase 6. New files (`ShaderHero.astro`, motion script) must be typed + lint-clean. No new strings → parity stays green. secretlint unaffected. |
| **TECH.md** | ✅ Conformant | Token-first (colours live in `tokens.css`/`.theme-night`, not scattered hexes). Canonical motion/easing/tracking tokens **not renamed**. `@layer base` body rule kept (custom-property overrides on `.theme-night` cascade normally and don't reintroduce the utility-shadowing bug). `BaseLayout` extended via additive prop, not rewritten. PascalCase component / camelCase script naming. Existing `<img>`+`heroSrcset` image pattern kept. |
| **COLOR.md** | ✅ Conformant | 60-30-10 holds (bg / text+surface / accent). ≤5 brand families (the new `--color-accent-on-surface` is a semantic alias of the accent, not a new hue). Darken-on-hover preserved (CTA hover = `#0058b8`). Update the "Apple-inspired near-white" diversity note + `design.md` provenance; confirm the dark-blue base is distinct from the bellini/barber dark demos if the portfolio-diversity gate is applied to the agency site. |
| **FORMS.md** | ✅ Preserved | `/api/contact`, `/api/site-scan`, `/api/gbp-check` (SSR) **not touched**. Restyling `SiteScanTool`/`GbpCheckTool`/contact form = **classes only**; preserve every field `name`, the honeypot field, rate-limit/idempotency wiring, and the endpoint contract. |

## 10. Integration-preservation guarantees (explicit "do-not-break" list)

The re-skin touches **presentation only**. These are verified-untouched or class-only:
1. **Schema/SEO emission** (`BaseLayout` + `lib/seo/schema.ts` + `faqPageSchema`) — no edits beyond the additive `theme` prop.
2. **hreflang / canonical / OG / Twitter / sitemap / `noindex`** — unchanged.
3. **Consent + GA4** (`BaseLayout` consent scripts, `consent.ts`, `analytics.ts`, `CookieBanner` logic) — class-only on the banner; logic untouched.
4. **CSP + 6 security headers (`vercel.json`)** — unchanged (no new origins; GSAP bundled).
5. **Sentry** (`sentry.*.config.mjs`, `sendDefaultPii:false`) — unchanged.
6. **Form endpoints + field contracts + honeypot/rate-limit** — class-only on form markup; names/wiring unchanged.
7. **`data-event` analytics hooks** on CTAs/buttons — preserved through restyle.
8. **i18n content modules + parity validator** — no new strings; `validate-translations` stays green.
9. **Motion safety** (no-JS / failed-GSAP / reduced-motion / no-WebGL) — all four fallbacks retained.
10. **Carve-outs** — home About image, home FAQ (+schema), Footer — preserved.

**Phase 6 regression gate adds:** confirm FAQ `FAQPage` JSON-LD still emits on home; confirm one `<h1>` per page; confirm consent banner blocks GA4 until accept; confirm contact/tools forms still submit (field names intact); `pnpm validate` green; CWV re-measured.

---

## 11. Audit response + pre-execution grep gate (2026-06-13)

Independent audit `REDESIGN-ROLLOUT-PLAN-AUDIT-2026-06-13.md` reviewed this plan. I re-verified each finding against the code (not just accepted them) and ran its §8 grep gate. **All five findings are valid; I agree with all of them, and my own grep run *expands* Findings 5 and B to their true sitewide scope.** Dispositions:

| Finding | Severity | Disposition | Folded into |
|---|---|---|---|
| **1 — `default='night'` makes legal-light opt-out** | 🟠 | **Agreed.** Adopted option (a): route-auto-derive (`LIGHT_ROUTE_PATTERNS`) so legal stays light structurally; explicit prop overrides. | §2 mechanism, Phase 0 step 3 |
| **2 — reduced-motion must gate the shader rAF loop** | 🟠 | **Agreed.** rAF must not start under `prefers-reduced-motion`. | Phase 3, Phase 6 |
| **3 — confirm LCP stays the hero photo** | 🟠 | **Agreed.** Photo stays eager/high-priority LCP; canvas absolute, must not steal LCP; per-breakpoint CWV trace. | Phase 3, Phase 6 |
| **4 — single-`h1` per route (build won't catch)** | 🟡 | **Agreed.** ShaderHero owns the h1; old hero h1 removed same edit; per-route check + `grep -c '<h1'`. | Phase 3, Phase 5, Phase 6 |
| **5 — contact-submit `text-bg` invisible-on-dark** | 🔴 | **Agreed + EXPANDED.** It is not one button — the grep gate shows a **sitewide CTA pattern** (~30 inline CTAs both copies + Header/ContactBar/PricingTiers/GbpCheck/SiteScan/Button). Re-scoped Phase 1 into Sweep A. | Phase 1 Sweep A |
| **Category B — accent-text migration wider than stated** | 🟠 | **Agreed + ENUMERATED.** 18 page files + 6 components (not just `sections/*`). | Phase 1 Sweep B |
| **Category C — don't over-correct hero `text-white`** | ✅ | **Agreed.** Added explicit "leave as-is" note. | Phase 1 Category C |

**Net effect on the plan:** Phase 1 is re-scoped from "surgical spot-fixes" to **two systematic, grep-enumerated class sweeps** (CTA normalization + accent-text migration) across all marketing pages in both copies + shared components, with the light legal/print pages explicitly excluded. The keystone strategy, phase order, and integration analysis are unchanged and confirmed sound.

### The grep gate (run before Phase 1 closes; re-run in Phase 6)
Run from `clients/baragency/src` over `pages/**/*.astro` + `components/**/*.astro` (both locale copies):
1. **`text-bg`** → every hit on a *filled/colored* bg (`bg-text`/`bg-accent`/`bg-bg…hover:bg-accent`) is a night hover-state failure → normalize to `bg-accent text-white hover:bg-accent-deep`. **Exclude** the light pages (`contract`, `de/contract`). *(Run 2026-06-13: ~30 CTA hits enumerated in Phase 1 Sweep A; the contact submit is the priority.)*
2. **`text-accent-deep`** used as **text/icon** (NOT `bg-accent-deep`) → migrate to `text-accent-on-surface`. **Exclude** light pages (`imprint`, contract). *(Run 2026-06-13: 18 page files + 6 components.)*
3. **`text-white` / `border-white` / `/85` / `/30` / `/70`** → confirm each sits inside a `.hero-dark`/photo-veil context (legitimate, leave) and not on a now-dark page surface. *(Run 2026-06-13: all legitimate, inside heroes.)*
4. **`text-[#` / `bg-[#` / `border-[#`** (arbitrary hex) → must be zero / tokenized. *(Run 2026-06-13: **zero** — token system clean. Raw hex exists only in `api/contact.ts`/`api/gbp-check.ts` email templates + one black box-shadow — all out of scope.)*

This four-line gate is the 10-minute step that turns "~94% token-driven" into a verified, enumerated edit list — and it already surfaced the sitewide CTA hover failure that a spot-fix Phase 1 would have shipped.
