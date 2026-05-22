# GASTRONOMY-UIUX-UPGRADE-PLAN-2026-05-22.md

**Goal:** lift the UI/UX, design, layout, and typography of the gastronomy template (and components it consumes) to the level of modern coffee-chain + Berlin third-wave specialty sites. **Preserve** the SEO, accessibility, performance, KPI-monitoring, and infra-monitoring rigor already in the rule library. **Re-apply** the upgraded template to the Eiscafé Bellini demo as the first build.

**Inputs:** 5 reference sites picked by the owner for visual research:

| # | URL | Type | Geo | Notes |
|---|---|---|---|---|
| 1 | https://www.starbucks.com/ | Global coffee chain | US-anchor | Brand benchmark — what every prospect compares to whether they should or not |
| 2 | https://de.espressohouse.com/ | Nordic coffee chain | DE-localized | Scandinavian sensibility filtered through DE retail |
| 3 | https://thebarn.de/ | Berlin third-wave specialty | DE — Berlin | Most directly applicable register for Berlin prospects |
| 4 | https://watchhouse.com/ | London specialty | UK | **Already in the agency's 24-site UI/UX reference study at §15** — measured tokens already captured; revisit for any gastronomy-specific patterns we missed |
| 5 | https://www.coffee-fellows.com/ | DE coffee chain | DE | Mass-market DE chain — the budget/operational tier of coffee retail |

---

## 0. Strategic framing

### What stays as it is

- **SEO:** local-business H1 keyword rule (no eyebrow-h1 inverted hero for gastronomy clients), `@graph` schema with `Restaurant` subtype, hreflang alternates, no `aggregateRating` on `Restaurant`, sitemap, canonical URLs, OG/Twitter meta — all stay per `SEO.md`
- **Accessibility:** WCAG 2.2 AA contrast on every text/bg pair, focus-visible rings, ≥ 44px tap targets, `aria-label`s on icon-only CTAs, `prefers-reduced-motion: reduce` honored — all stay per `ACCESSIBILITY.md`
- **Performance:** image rules (responsive AVIF/WebP, dimensions, lazy below fold), font self-hosting at production, motion on `transform` + `opacity` only, ambient-video constraints — all stay per `PERFORMANCE.md`
- **KPI monitoring:** GA4 + Clarity consent-gated stubs in the scaffold remain; for real clients the per-vertical KPI block in `templates/gastronomy.md` §11.1 stays; for demos the "KPI contract N/A" framing stays per `BRIEF.md` template
- **Infra monitoring:** Sentry server-only init in scaffold, `vercel.json` 6 security headers + cache, `pnpm validate` gate, `.github/workflows/ci.yml` — all stay per `INFRASTRUCTURE.md` + `INTEGRATIONS.md`
- **Legal compliance:** DE-DSGVO Impressum + Datenschutzerklärung pages, consent banner with "Reject all" parity, processor list — all stay per `LEGAL.md`

### What gets upgraded

- **Typography hierarchy + scale** — current build leans heavily on Cormorant Garamond serif for everything serif-able; modern coffee sites mix display serif + display sans + body sans in tighter ratios with more deliberate weight/size jumps
- **Hero structure** — current Bellini hero is a left-text + right-image grid (template-y). Coffee references use bigger, more confident hero approaches (full-bleed photography, OR dramatic typography over color blocks, OR cards-as-hero)
- **Section rhythm + density** — current build alternates cream/cream-shaded bg with comfortable padding; references use bolder color blocks, asymmetric grids, more whitespace at top of section + tighter content density
- **Photography treatment** — current Bellini uses stock Unsplash crops without art direction; references use full-bleed, edge-bleed, tight crops, color-graded-to-brand
- **Menu presentation** — current Bellini gelato page is a 2-col text list; references use either menu cards with photography OR a more typographically distinctive list (right-aligned prices, ruled separators, italic tags)
- **Motion** — current build uses only the canonical `transition-colors` hover; references use entry animations, scroll-reveal, sticky-CTA polish that we've measured (Haven half-pill, Auwa marquee) but not yet applied to gastronomy
- **Color palette confidence** — current cream + terracotta + pistachio is correct for Heritage-Italian, but the saturation/contrast feels timid vs. references; tighter accent usage + more confident dark on light contrast
- **CTA design** — current build uses filled-rectangle CTAs; some references use more interesting CTA shapes (Watch House half-pill, Espressohouse plain underlined links for secondary, Starbucks pill primary)

### What we will probably NOT take

- **Starbucks:** the brand voice + menu app prompts + reward-program prominence are SaaS-app territory, not local-business positioning. Take only the **product-photography crop discipline** and **typographic scale**.
- **Coffee Fellows:** the mass-market chain register (Bavarian-ski-lodge serif, promotional banners) is the OPPOSITE of what we want. Mostly a counter-example.
- **All chains** (Starbucks, Espressohouse, Coffee Fellows) include cart/order/account UI that's irrelevant for a Type-1 info site — don't import these patterns

---

## 1. Phase 1 — Research (live browser exploration)

**Goal:** capture per-site structured findings; produce a `gastronomy-coffee-RESEARCH-2026-05-22.md` log.

**Tooling — preferred / fallback:**
- **Preferred (with MCP reconnected):** Playwright via `mcp__MCP_DOCKER__browser_*` — captures screenshots at 1280 + 375 viewports, lets us probe runtime measured CSS via `browser_evaluate` (e.g., `getComputedStyle(document.querySelector('h1'))` to extract exact font-size/weight/letter-spacing per site, matching the discipline of the 24-site reference study)
- **Fallback (MCP offline):** `WebFetch` per URL — extracts HTML + visible text + section structure but no visual screenshots, no measured CSS

**Per-site data capture matrix:**

| Data point | Why it matters | MCP needed? |
|---|---|---|
| Hero structure (full-bleed photo / grid / typography-led / video) | Defines the gastronomy hero archetypes update | Both |
| H1 font-family, size, weight, line-height, letter-spacing (computed) | Updates `templates/gastronomy.md` §Typography measured values | **MCP-only** (computed CSS) |
| Body font-family, size, line-height | Same | **MCP-only** |
| Primary CTA — shape, padding, font weight, color, border-radius | Updates §7 component recommendations (Button vs HalfPillCTA vs marquee) | Both visible; MCP for measurements |
| Color palette — bg, surface, text, accent — measured hex | Updates §6 default palettes per sub-archetype | **MCP-only** for hex via `getComputedStyle` |
| Section padding (top/bottom) at 1280px | Updates §Section spacing | **MCP-only** |
| Menu/product grid structure (cards / list / mixed) | Updates §IA per archetype | Both |
| Photography treatment (full-bleed, edge-bleed, framed, cropped) | Updates §Photography rules | Both — screenshots |
| Motion patterns (scroll-reveal? hover-reveal? sticky CTA?) | Decides whether to add new components or apply existing | **MCP-only** (motion measurement via `document.getAnimations()` + transitions) |
| Mobile collapse pattern (hamburger / drawer / bottom-nav) | Updates Header.astro across all gastronomy clients | Both — screenshots at 375 |
| Footer structure (legal columns, newsletter signup, social) | Footer.astro upgrade | Both |
| Cookie banner behavior | Confirm DSGVO parity | Both |

**Deliverable:** `docs/audit/gastronomy-coffee-RESEARCH-2026-05-22.md` following the same RESEARCH.md structure as Phase 1 of the Bellini build.

**Effort:** ~2 hrs with MCP / ~1 hr WebFetch-only (less depth).

---

## 2. Phase 2 — Synthesis + cross-site pattern extraction

**Goal:** produce a synthesis section in the same research doc that distills:
1. **Universal patterns** (≥3/5 sites share it) → high-confidence rule updates
2. **Berlin-relevant patterns** (Espressohouse, The Barn, Coffee Fellows show it) → DE-specific rule additions
3. **Specialty/third-wave patterns** (The Barn, Watch House show it) → premium / boutique sub-archetype refinements
4. **Anti-patterns to avoid** (Starbucks app-y bits, Coffee Fellows mass-market promo banners) → additions to §Anti-patterns

**Process:**
- For each capture row, mark which sites share the pattern
- Compare against the existing `templates/gastronomy.md` §6 Color · §Typography · §IA · §Photography · §Anti-patterns content
- Identify deltas (rule says X, references show Y)
- Decide: replace the rule, add a sub-archetype variant, or add an "advanced patterns" section

**Owner discussion points the synthesis will surface:**
- Do we adopt ALL universal patterns into `gastronomy.md` defaults, or split them between Heritage-Italian sub-archetype vs. new Specialty-Coffee sub-archetype?
- Does the agency need a new `templates/gastronomy.md` sub-archetype for "specialty-coffee / third-wave" (alongside the existing A/B/C)? OR is The Barn covered well enough by existing sub-archetype B?
- For motion: is scroll-reveal worth adopting agency-wide given the `prefers-reduced-motion` discipline, or kept opt-in per client?
- For photography: do we tighten image sourcing rules to require full-bleed treatment OR accept the existing constrained framing?

**Deliverable:** synthesis section appended to the research doc + a short bullet list of "rule changes ready to apply" — used as the brief for Phase 3.

**Effort:** ~1 hr.

---

## 3. Phase 3 — Rules + template updates

**Goal:** apply synthesis findings to the agency rule library. Touches:

### 3.1 `docs/design/templates/gastronomy.md` — primary target

Sections likely to update (will be confirmed by Phase 2 findings):

| Section | Expected change |
|---|---|
| §1 Archetype matrix | Possibly add 4th sub-archetype "Specialty / Third-wave coffee" if The Barn-style fits no existing slot; OR refine the existing sub-archetypes' definitions |
| §3 Hero patterns | Add 2-3 modern hero variants (full-bleed photo, typography-led, video) with explicit per-sub-archetype recommendation |
| §4 Photography rules | Tighten — require either full-bleed or edge-bleed framing, with art-direction notes |
| §5 Typography pairings | Refine measured font-size scale, add display-sans option for non-Heritage sub-archetypes |
| §6 Color archetypes | Add or refine default palettes — possibly tone down terracotta saturation in the Heritage palette; add a "specialty coffee" cool-cream + accent palette |
| §7 (if exists, otherwise §11) IA per archetype | Adjust menu-page recommendations — picture-cards vs. typographic-list per sub-archetype |
| §Anti-patterns | Add "mass-market promo banner overlays" (Coffee Fellows pattern) · "SaaS app prompts in info site" (Starbucks) · "full-screen-takeover newsletter modal" (common across chains) |
| §10 Decision matrix | Update with the new sub-archetype if added |

### 3.2 `docs/design/components/_impl/` — potential refinements

- `Hero.astro` (currently per-client, not canonical) — consider promoting to a canonical component with 3 variants (grid / full-bleed / typography-led)
- `LabelCountHeader.astro` — no change expected; the mono catalog header is already a coffee-shop-friendly pattern
- `HalfPillCTA.astro` — already Watch-House-derived; no change
- `MarqueeCTA.astro` — already in the library; verify gastronomy applicability is reflected in §1
- Possible **NEW** component: full-bleed hero image with edge-anchored typography (Watch House §15 has elements of this; refine + canonicalize if 3+ of the 5 references show it)
- Possible **NEW** component: menu-card with image (currently the gelato page is text-only — coffee references almost universally use product imagery in menu sections)

### 3.3 `docs/design/DESIGN-BEST-PRACTICES.md` — refinements only if patterns are universal across verticals

- §Hero (current §3 or §7) — if the reference sites confirm a hero-design principle that applies beyond gastronomy, update
- §Motion (current §8) — if scroll-reveal becomes a measured + recommended pattern, add it

### 3.4 `docs/audit/ui-ux-reference-study.md` — append addendum

Add a "Coffee + gastronomy sub-study (2026-05-22)" section appending the 4 new measured sites (Starbucks, Espressohouse, The Barn, Coffee Fellows) — Watch House is already there at §15.

**Deliverables:**
- Updated `templates/gastronomy.md`
- 0-2 new canonical component spec sheets + impls in `docs/design/components/`
- Possibly amended `DESIGN-BEST-PRACTICES.md`
- Addendum in `ui-ux-reference-study.md`

**Effort:** ~3-4 hrs.

---

## 4. Phase 4 — Bellini rebuild (apply upgraded template)

**Goal:** apply the upgraded `templates/gastronomy.md` rules to the existing `clients/demo-eiscafe-bellini/` build. Bellini stays at the Heritage-Italian sub-archetype (not migrated to a different archetype) but absorbs the visual upgrades.

**In-scope changes:**
- Refresh `src/styles/tokens.css` palette per the (possibly revised) §6 Heritage palette + tone down saturation if Phase 2 finds the current terracotta too retail-y
- Refresh `src/lib/site.ts` — no data changes; possibly add new fields if new components need them
- Rewrite/refine sections: `Hero.astro` (apply new hero variant), `MenuPreview.astro` (possibly add image cards), `About.astro` (possibly add scroll-reveal), `VisitPreview.astro` (refine)
- Refresh `src/pages/gelato.astro` — apply updated menu presentation (image-cards or refined typographic list)
- Refresh `Header.astro` — apply mobile-nav improvement (hamburger if patterns warrant)
- Refresh `Footer.astro` — possibly add newsletter slot or social block if patterns warrant
- Self-host fonts (`@fontsource-variable/cormorant-garamond` + `@fontsource-variable/inter`) — this was a polish item in the existing VISUAL-VALIDATION.md
- Add scroll-reveal entry animation IF the §Motion rule update adds it as a standard
- Replace remaining Placeholder slots with actual sourced Unsplash images for menu cards (if image-cards become the new standard) + an owner-portrait area for About

**Out-of-scope (preserve as-is):**
- All Restaurant `@graph` schema
- Hreflang + i18n structure (DE primary + EN secondary)
- DE-DSGVO Impressum + Datenschutzerklärung
- Demo banner persistence + `noindex` discipline
- Sentry server-only + consent-gated analytics
- The Bellini fictional identity (Husemannstraße / Treviso / Tommaso & Rosa / Giulia)
- `pnpm validate` gate

**Effort:** ~4-5 hrs.

---

## 5. Phase 5 — Re-validation + re-deploy

**Goal:** ensure none of the upgrade work regressed SEO / accessibility / performance / KPI / infra. Re-deploy and re-validate.

**Validation gates (must all pass before deploy):**

| Gate | Method |
|---|---|
| `pnpm validate` 0/0/0 | Astro check + Astro build + Biome |
| Restaurant `@graph` schema renders correctly | Verify HTML output contains the JSON-LD block; manual review of structure |
| Hreflang alternates correct | Verify DE→EN and EN→DE `<link rel="alternate">` |
| WCAG contrast on every new color combo introduced | Manual contrast check per `ACCESSIBILITY.md` §3 |
| `prefers-reduced-motion: reduce` honored on any new animations | Test by toggling system preference; ensure flat fallback |
| Mobile tap targets ≥ 44px on any changed CTAs | Visual + DevTools inspect |
| `noindex` meta + `robots.txt` Disallow: / preserved | Build output check |
| DEMO banner persistent + visible at top of every page | Playwright visual check on 4+ pages |
| Lighthouse score ≥ 90/95/90/95 (Perf/A11y/BP/SEO) on mobile + desktop | Run via Chrome DevTools or `lighthouse` CLI |
| Re-take 5 Playwright screenshots at 1280 + 375 (DE + EN, Home + Menu + Impressum) | MCP browser tools (or fallback to Chrome DevTools if MCP still offline) |

**Re-deploy:**
- `vercel deploy --prod --yes` to the same `demo-gastronomy-iota.vercel.app` alias
- Append a v2 entry to `docs/clients/demo-eiscafe-bellini/VISUAL-VALIDATION.md` documenting the upgrade
- Update `docs/audit/PENDING.md` "Recently resolved" entry

**Effort:** ~1-2 hrs.

---

## 6. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Coffee-chain patterns drift the gastronomy template AWAY from local-business positioning toward chain-store | Medium | High | Synthesis filters explicitly — chains studied for visual maturity ONLY; SaaS-app / cart / loyalty patterns rejected up-front |
| New scroll-reveal motion fails `prefers-reduced-motion` discipline | Low | High | Phase 4 validation gate explicitly checks reduced-motion fallback before deploy |
| Bellini rebuild introduces accessibility regression (contrast, focus rings) | Low | High | Phase 5 contrast gate per `ACCESSIBILITY.md` §3 |
| Bellini rebuild breaks the i18n routing or removes Impressum/Datenschutz | Very low | High | Out-of-scope items explicitly preserved (Phase 4 "out-of-scope" section); pnpm validate catches breakage |
| Synthesis over-fits to 5 sites; missing patterns common in Berlin gastronomy beyond coffee | Medium | Medium | Phase 1 limited to coffee specifically (per owner pick); broader gastronomy patterns already in existing template §9 (Watch House Annecy + 8 others measured 2026-05-19) |
| New canonical components added but their bidirectional cross-links not maintained | Low | Medium | Phase 3 deliverables include component spec sheet creation if any new component lands; the agency convention has this pattern |
| Vercel re-deploy fails (auth / alias collision) | Low | Low | Already validated on previous deploy; re-deploy is idempotent |
| Self-hosted fonts add bundle weight that drops Lighthouse Perf below 90 | Low | Medium | Use `@fontsource-variable/*` with `font-display: swap` + subset to latin only |
| MCP stays disconnected through Phase 1 | Already realized | Medium | WebFetch fallback documented; lose measured CSS values; can still extract structure/copy; Phase 1 effort lower-bound (1 hr vs 2 hr); document gap in research file |

---

## 7. Open decisions (owner sign-off needed before Phase 1 starts)

| # | Decision | Recommendation |
|---|---|---|
| 1 | **MCP reconnect:** retry `/mcp` before Phase 1, or accept WebFetch-only research? | Try `/mcp` once. If MCP reconnects, proceed with full-quality research. If not, proceed with WebFetch (lower depth, no computed CSS). |
| 2 | **Bellini rebuild scope:** in-place (overwrite `clients/demo-eiscafe-bellini/`) or build a v2 alongside? | **In-place.** It's a demo; git history preserves the v1 if needed. |
| 3 | **New gastronomy sub-archetype for "Specialty / third-wave coffee"?** | Decide after Phase 2 synthesis — surface a recommendation at that gate, don't pre-commit here |
| 4 | **Self-host fonts in Bellini rebuild?** | **Yes.** It's a documented polish item already; the rebuild is the right moment to close it. |
| 5 | **Scroll-reveal entry animations?** | Decide after Phase 2 — if 3+/5 sites use them, recommend adopting as opt-in pattern with mandatory reduced-motion fallback. |
| 6 | **Add menu-cards-with-image to gelato page?** | Lean yes — coffee references universally use product imagery. Will require sourcing 12 + 8 + 4 = 24 individual flavor photos (or accepting Placeholder slots for some). |
| 7 | **Newsletter signup slot in Footer?** | **No for Bellini specifically** (walk-in shop, no email-list mechanic); leave the option as `templates/gastronomy.md` §11.X for other clients. |
| 8 | **Update the broader `DESIGN-BEST-PRACTICES.md` or only `templates/gastronomy.md`?** | Default to gastronomy.md only; promote to DESIGN-BEST-PRACTICES.md only if Phase 2 confirms a pattern is universal (applies to ≥3 of the 12 verticals). |

---

## 8. Total effort estimate

| Phase | Hours (with MCP) | Hours (WebFetch-only) |
|---|---|---|
| 1. Research | 2 | 1 |
| 2. Synthesis | 1 | 1 |
| 3. Rules + template updates | 3-4 | 3 |
| 4. Bellini rebuild | 4-5 | 4-5 |
| 5. Re-validation + re-deploy | 1-2 | 1-2 |
| **Total** | **11-14 hrs** | **10-12 hrs** |

---

## 9. Phase staging — each phase = one reviewable commit

Per agency convention (`CLAUDE.md` working principles), each phase is one logical commit:

1. **Phase 1 commit:** `research(gastronomy): add 4 coffee sites to UI/UX study + synthesis log`
2. **Phase 2 commit:** *folded into Phase 1 — synthesis is appended to the research doc*
3. **Phase 3 commit:** `feat(rules): upgrade gastronomy template typography + hero + photography per coffee benchmarks`
4. **Phase 4 commit:** `feat(demo-bellini): rebuild Hero / MenuPreview / About per upgraded gastronomy template`
5. **Phase 5 commit:** `chore(demo-bellini): re-deploy + revalidate after UI/UX upgrade`

Owner reviews + approves each commit before the next phase starts. Stopping points are clean at any commit boundary.

---

## 10. What this is NOT

- This is not a fundamental rewrite of the agency rule library. The 18 standards docs stay. The 12 vertical templates stay. The 8 canonical components stay (with possible refinements + ≤ 2 additions).
- This is not a new vertical. Gastronomy stays gastronomy.
- This is not a Bellini identity change. Three-generation Italian family stays the positioning.
- This is not an excuse to lose any of the SEO / a11y / perf / KPI / legal rigor.

This is a **visual maturity upgrade** to one vertical and one demo, with the rule changes propagating to every future gastronomy build.

---

*Plan authored 2026-05-22. Awaits owner approval before Phase 1 begins. After approval, proceed sequentially; ask once for go-ahead at each phase boundary or run through end-to-end per the same "execute everything until done" pattern used for the original Bellini build.*
