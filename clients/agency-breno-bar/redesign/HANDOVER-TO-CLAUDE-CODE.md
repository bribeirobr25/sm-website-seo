# HANDOVER — Apply the "Berlin night" redesign across the live agency site

**For:** Claude Code
**From:** redesign prototype review session (2026-06-12)
**Project:** `clients/agency-breno-bar/` (BAR Agency — the agency's own marketing site)
**Source of truth for the look:** `clients/agency-breno-bar/redesign/index.html` (+ its `README.md`)
**Mode:** **PLAN-ONLY / Option B.** Produce a written plan, get owner approval, THEN execute. Do not edit source files before the plan is approved. No auto-commit; atomic commits with owner sign-off per the repo workflow.

---

## 1. What the owner wants (read this twice)

Take the **visual language** of the single-page prototype at `redesign/index.html` and **roll it across the existing multi-page site**, replacing the current Apple-light register with the prototype's dark "Berlin night" register — **without collapsing the site into one landing page.** The site keeps every page and route it has today; each page adopts the new look but keeps its own structure and content.

Concretely:

1. **Re-skin the whole marketing site** to the Berlin-night aesthetic (dark `#060b14` base, favicon-blue `#0c1a2b` surfaces, single `#0071e3` accent / `#7cc0ff` AA text-accent, Inter display type, the prototype's nav / footer / buttons / section chrome / motion vocabulary).
2. **Decompose, don't flatten.** The prototype is one long scroll *for demonstration*. Map its sections onto the **existing page structure**:
   - The hero, promises, services teaser, work teaser, pricing teaser, trust row, quotes, final CTA currently living in one scroll get distributed to the pages that already own that content (`/`, `/services`, `/portfolio`, `/pricing`, etc.). The home page is a curated overview that teases and links onward — exactly as it is today — just restyled.
3. **Apply the same style to `/tools`** and its children (`/tools/website-scan`, `/tools/gbp-check`).
4. **`/tools` in the menu:** already present in `Header.astro` nav (2nd item, after Services). **Verify it renders in all three locales and the mobile menu; no add needed unless it regressed.** (If the owner perceived it as missing, confirm it's visible and styled in the new nav — the task is to make sure it's there and obvious, which it currently is in code.)

### Scope decisions already made by the owner

| Decision | Answer |
|---|---|
| How far to push dark | **Dark on all MARKETING pages. Keep the LEGAL/contract pages light** for readability + print: `/privacy`, `/imprint`, `/contract` (+ `/de/contract`) stay on the current light register. Everything else goes dark. |
| WebGL shader hero | **Every page hero** gets the shader treatment (home + all marketing pages). Legal pages keep their plain light header. Provide the static-gradient fallback everywhere (already in the prototype CSS). |
| Execution ceremony | **Plan-only (Option B).** Plan → approval → execute. |

---

## 2. Non-negotiables — the existing architecture wins every time

These are repo rules from the root `CLAUDE.md`, `docs/design/`, and the per-client `docs/clients/agency-breno-bar/CLAUDE.md`. The redesign adapts to them, not the other way around.

1. **`BaseLayout.astro` is sacred — do NOT rewrite it.** It centralizes title/canonical/OG/hreflang/JSON-LD/BreadcrumbList. There is a documented incident (2026-05-26 Kodama-bonsai) where a hand-rebuilt BaseLayout silently dropped schema + hreflang. Extend via its existing props (`extraSchema`, `localePath`, `ogImage`, etc.) and by editing the global stylesheet it already imports — never by replacing it. The shader/motion get added through a new island/partial that BaseLayout or each page includes, not by forking the layout.
2. **Trilingual EN / DE / PT-BR is mandatory and parity-checked.** All copy stays in the typed content modules (`site.ts` i18n, `page-strings.ts`, `funnel.ts`, `tools.ts`, `local-pages.ts`). **No hard-coded display strings in components or pages.** `scripts/validate-translations.mjs` must still pass (32 i18n + 125 page-strings keys × 3 locales). If the redesign introduces any new visible string, it goes into the right module in all three locales.
3. **The prototype's English copy is already the approved source text** (it was lifted from `funnel.ts` / `site.ts` / the schema offer catalog). Reuse the existing keys; do not invent new marketing claims. Where the prototype shows a string that already exists in a content module, wire to that key rather than duplicating.
4. **GSAP via `pnpm add gsap` — NOT the CDN.** The prototype uses the cdnjs CDN for portability; production pulls GSAP as a dependency per `TECH.md` dependency rules, imported in a client script. Same for the Inter font — keep the existing `@fontsource-variable/inter` self-host, do **not** add the `rsms.me` stylesheet the prototype uses.
5. **Tailwind v4 + the `@theme` token system.** The redesign is delivered by **editing `src/styles/tokens.css` + `src/styles/global.css`**, not by bolting on a parallel CSS file with hardcoded hexes. Introduce the Berlin-night palette as the token values (or as a dark theme layer) so every component that already consumes `--color-bg`, `--color-text`, `--color-accent`, etc. flips automatically. This is the single highest-leverage move — see §4.
6. **`noindex` stays.** Demo discipline: every page keeps `noindex` until the owner flips it at production cutover (`docs/clients/agency-breno-bar/PRODUCTION-CUTOVER.md`). Do not touch indexing.
7. **Motion safety (from the prototype, keep it):** no-JS → content visible; failed GSAP load → content visible (gate hidden state on a `.motion` class added only after successful init); `prefers-reduced-motion` → static, counters show finals, shader off. WCAG 2.2 AA contrast pairs must hold on the dark register (the prototype's `#7cc0ff` on `#060b14` ≈ 9:1; white on `#0071e3` fills ≈ 4.6:1).
8. **No full-page scroll-hijack.** The prototype's horizontal work strip is desktop-only inside normal flow — keep that constraint; never pin the whole viewport. (This is a standing UI/UX-audit rule in the repo.)
9. **Per-client docs are the real docs.** When done, update `docs/clients/agency-breno-bar/CLAUDE.md` (stack/page-tree/imported-components/DRAFT items) and `design.md` (palette/typography) to reflect the new register — the COLOR.md portfolio-diversity note about "Apple-inspired near-white" is now outdated for this client and must be rewritten.

---

## 3. Current-state facts you can rely on (verified 2026-06-12)

- **Routes (each ×3 locales unless noted):** `/` · `/services` + `/services/[slug]` (web-design, seo only) · `/portfolio` + `/portfolio/[slug]` (×9) · `/about` · `/contact` · `/pricing` · `/website-check` · `/tools` + `/tools/website-scan` + `/tools/gbp-check` · `/privacy` · `/imprint` · `/contract` (EN) + `/de/contract` · German-only `/webdesign-berlin` + 24 `/webdesign-berlin/[slug]` · `/404` · `/500`. Total ~104 static + 3 SSR.
- **Nav (`src/components/layout/Header.astro`):** Services · **Tools** · Pricing · Portfolio · About · Contact, + "Start a project" pill + locale switcher + mobile hamburger. `/tools` label comes from `TOOLS[locale].hub.eyebrow`. **`/tools` is already in nav** — confirm it survives the restyle.
- **Tokens (`src/styles/tokens.css`):** Apple-light — `--color-bg:#fbfbfd`, `--color-text:#1d1d1f`, `--color-accent:#0071e3`, plus `--color-inverted-*` (pure-black tile sections) and a full set of canonical motion/easing tokens that **must not be renamed** (per `TECH.md §7`). The accent `#0071e3` is already shared with the prototype — only the bg/text/surface families invert.
- **Global CSS (`src/styles/global.css`):** already has `@layer base` typography (with a documented Tailwind-v4 cascade fix — keep the `@layer base` wrapper), `.container-page`, `.section`, `.reveal-rise/.reveal-fade` (CSS `animation-timeline: view()` reveals), `.bg-hero-gradient`, `.bg-noise`, `.hero-dark` + `.hero-dark__veil` (a dark cinematic hero pattern **already exists** and is AA-tuned — reuse/evolve it rather than inventing a new one), `.svc-card-photo`.
- **BaseLayout** already emits the consent-gated GA4, skip-link, locale auto-detect, schema. The prototype's skip-link / reduced-motion / grain overlay partly duplicate what BaseLayout/global.css already do — reconcile, don't double up.
- **Components today:** `layout/{Header,Footer,DemoBanner}.astro` · `sections/{Faq,GbpCheckTool,PricingTiers,PromiseStrip,ReviewsWall,SiteScanTool,TrustBadgeRow}.astro` · `ui/{Button,ContactBar,CookieBanner,Placeholder}.astro`. Several already map 1:1 to prototype sections (PromiseStrip≈promises, PricingTiers≈pricing, ReviewsWall≈quotes, TrustBadgeRow≈trust) — **restyle these in place**, don't rebuild.

---

## 4. Suggested approach (the plan you should flesh out and propose)

Produce a phased plan in `docs/audit/` (e.g. `REDESIGN-ROLLOUT-PLAN-2026-06-12.md`) with these phases. Each phase = one reviewable commit after approval.

**Phase 0 — Token + global flip (highest leverage, do first).**
Invert the palette at the token layer in `tokens.css`: bg→`#060b14`, surface→`#0c1a2b`, text→`#f4f6fa`, muted→`#93a3ba`, hairline→`#1b2940`, keep accent `#0071e3`, add `--color-accent-text:#7cc0ff` for text-on-dark. Decide with the owner whether this is a hard replace or a `.theme-dark` scope on `<body>` for marketing pages while legal pages opt out to a light scope. Update `global.css` base accordingly. After this phase alone, most components should already read dark because they consume tokens. Screenshot every route to catch contrast regressions (dark-on-dark CTAs are the classic failure — see the global.css `@layer base` note).

**Phase 1 — Shared chrome.** Restyle `Header.astro` + `Footer.astro` to the prototype's glass nav + minimal footer (keep all existing nav logic, locale switcher, hamburger, mobile menu, the `/tools` item). Port the prototype `.btn` system into the existing `ui/Button.astro` so every CTA updates once. Confirm CTA always visible on mobile.

**Phase 2 — Hero system + shader island.** Build one reusable hero partial/island that renders the WebGL aurora (ported from the prototype, with the CSS-gradient fallback + reduced-motion + no-WebGL guards) and the split-word headline. Parameterize it (eyebrow / headline / sub / CTAs) so **every marketing page hero** uses it with its own content from the content modules. GSAP added via `pnpm`, init in a shared client script with the `.motion`-class safety gate. Legal pages do not get the island.

**Phase 3 — Section components.** Restyle the existing `sections/*` to match the prototype (promises grid, pricing tiers with "Most chosen" Growth, reviews/quotes with the honesty caption, trust row, services cards with cursor-glow, the desktop-only horizontal work strip). Reuse prototype CSS but express colors via tokens. Keep `faqPageSchema` etc. intact.

**Phase 4 — Page-by-page application.** Walk each marketing route and assemble it from the restyled hero + sections, preserving its current content/structure: `/` (overview teasers), `/services` (+detail), `/portfolio` (+detail), `/about`, `/pricing`, `/website-check`, `/contact`, `/tools` (+ website-scan, gbp-check), `/webdesign-berlin` (+slugs, German-only). Legal pages: leave light, but reconcile the now-dark Header/Footer against them (decide: light header on legal pages, or a light-scoped wrapper).

**Phase 5 — Verify + docs.** `pnpm validate` (lint + translation parity + `astro check` + build) must pass. Visually verify every route at 375 / 768 / 1280 (Playwright or the Docker browser MCP) for zero console errors, zero horizontal overflow, AA contrast, working reduced-motion + no-JS. Update the per-client `CLAUDE.md` + `design.md` + the COLOR.md diversity note. Keep `noindex`.

---

## 5. Acceptance checklist (put this at the bottom of your plan)

- [ ] Palette flipped at token layer; legal pages (`/privacy`, `/imprint`, `/contract`, `/de/contract`) remain light + print-friendly.
- [ ] Every **marketing** page hero shows the shader (with fallback); legal pages excluded.
- [ ] `/tools`, `/tools/website-scan`, `/tools/gbp-check` fully restyled.
- [ ] `/tools` visible + obvious in header nav (desktop + mobile) in EN/DE/PT-BR.
- [ ] Site remains multi-page — no route removed, no page collapsed into the home scroll.
- [ ] `BaseLayout.astro` not rewritten; shader/motion added via island + global CSS + content modules only.
- [ ] All new strings in `site.ts`/`page-strings.ts`/`funnel.ts`/`tools.ts` in all 3 locales; `validate-translations` green.
- [ ] GSAP via pnpm (no CDN); Inter still self-hosted (no rsms.me).
- [ ] Motion safety: no-JS visible · failed-GSAP visible · reduced-motion static · no-WebGL gradient fallback.
- [ ] No full-page scroll-hijack; work strip desktop-only in normal flow.
- [ ] WCAG 2.2 AA contrast holds on dark; no dark-on-dark CTA regressions.
- [ ] `pnpm validate` passes; every route screenshot-verified at 375/768/1280, zero console errors, zero overflow.
- [ ] `noindex` untouched; per-client `CLAUDE.md` + `design.md` + COLOR.md note updated.
- [ ] Atomic commits, owner sign-off, no auto-commit.

---

## 6. Reference files

- `clients/agency-breno-bar/redesign/index.html` — the look to absorb (CSS + shader + GSAP choreography all inline and commented).
- `clients/agency-breno-bar/redesign/README.md` — design rationale, deliberate tech decisions, the same integration path summarized.
- `clients/agency-breno-bar/src/styles/{tokens,global}.css` — where the palette flip lands.
- `clients/agency-breno-bar/src/components/layout/Header.astro` — nav already contains `/tools`.
- `clients/agency-breno-bar/src/layouts/BaseLayout.astro` — sacred; extend via props only.
- `docs/clients/agency-breno-bar/CLAUDE.md` — per-client truth; update at the end.

**First action:** read the four reference files above, then produce the phased plan and present it for approval. Do not edit source until approved.
