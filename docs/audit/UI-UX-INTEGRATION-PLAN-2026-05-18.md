# UI/UX Integration Plan — 2026-05-18

**Source study:** [`docs/audit/ui-ux-reference-study.md`](./ui-ux-reference-study.md) (24 sites measured at 1440 × 900 desktop, 22 yielded live runtime data, 2 blocked by bot-mitigation)

**Goal:** turn the 24-site study from research into a reusable agency asset, so future client builds reuse measured patterns without re-discovering them.

**Decisions locked in (2026-05-18):**

- Phase 3 — do *both* 3a (spec sheets) and 3b (working Astro components)
- Phase 1d (health / education / automotive vertical-gap audit) — **not skipped**; included
- Sequencing — per the recommended order at the bottom of this doc; start with Phase 1c

**Total active effort:** ~42-51 hrs across 4 phases.

---

## Amendment log

| Date | Phase status | Change |
|---|---|---|
| 2026-05-18 | All phases pending | Initial draft authored |
| 2026-05-18 | All phases pending | Revision after audit (`UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md`): 5 issues + 4 gaps + 5 improvements adopted. Key changes: (a) Phase 3b drops `reference-gastronomy-cafe` scaffold, extends `reference-solo-barber` instead (Option A); (b) all token names aligned to existing `--color-*` prefix; (c) fixed-viewport SPA + ambient-video constraints + inverted-h1 hard restriction added to Phase 2; (d) Phase 1d defines selection criteria, not specific URLs |
| 2026-05-19 | 1c ✅ · 1b ✅ · 1a ✅ · 1d skipped | Phase 1c (HBA + Bulgari): both confirmed unblockable from headless MCP, runbook written, study placeholders point to it. Phase 1b (animation): 5 sites measured; 2 corrections to v1 analysis (Aircenter is horizontal-translate not z-stacked; Haven half-pill is `position:static` not fixed). Phase 1a (mobile): 8 sites measured at 375; mobile-pattern synthesis added. Phase 1d **skipped per user 2026-05-19** — will surface via the Phase 4 PENDING.md trigger when the first health/education/automotive client arrives. |
| 2026-05-19 | Phase 2 ✅ | Doc integration complete. Files modified: `TECH.md` §7 (extended token canon — bg-cream/charcoal/night/studio, text-warm/warm-grey/trade-navy, motion tokens, tracking tokens, system-font option, radius-pill-half), `PERFORMANCE.md` (new §8 Ambient autoplay video with 5 mandatory constraints, renumbered §8 Tools → §9), `DESIGN-BEST-PRACTICES.md` (7 edits: §3 fixed-viewport SPA ban, §4 typography ranges + inverted-h1 hard restriction + mono catalog labels, §5 cream-not-white + warm-brown body + color-as-material tier 3.5, §7 radius convention + half-pill sticky CTA + marquee-on-hover, §8 motion duration map + ambient-video nuance, §11 period-terminated CTAs), `SEO.md` §15 (new Tech SEO anti-patterns block), `CHECKLIST.md` §2 (8 vertical-scoped gates), 7 vertical templates §9 (gastronomy + Watch House/Haven; beauty + Auwa/Kindred; trades + Marvell/Modus/SweepingCorp; professional-services + Lesse/Laurenti/Juan Mora/Horeca; events-hospitality + Flyward/T11/Aircenter; artisan + Mily/Kindred/Evagria; pets + Mily). 3 templates deferred with Phase 1d (health, education, automotive). |
| 2026-05-19 | Phase 3a 🟡 4/8 | New `docs/design/components/` folder with `README.md` index + 4 spec sheets drafted: `half-pill-cta.md`, `label-count-header.md`, `hours-in-nav.md`, `marquee-cta.md` — the four highest-leverage components for our typical Berlin gastronomy/beauty/health clients. 4 remaining for next session: `eyebrow-display-hero.md`, `stat-callouts.md`, `alternating-section-bg.md`, `per-character-split.md`. |
| 2026-05-19 | Phase 3a ✅ | Remaining 4 spec sheets drafted: `eyebrow-display-hero.md` (with HARD SEO restriction banner for local-business clients), `stat-callouts.md` (trades + professional-services), `alternating-section-bg.md` (Apple's measured 14-section rhythm), `per-character-split.md` (portfolio/agency-self letter-animation primitive). All 8 specs follow the audit-revised 8-section structure (purpose + a11y cross-ref + CSS spec + required tokens + perf constraints + ref sites + UI_REVIEW bidirectional link + impl pointer). Plus `PHASE-3B-PREP.md` written — handoff brief with token block to commit first, implementation order, per-component effort estimates, decisions-already-made list, and verification gates. Phase 3b ready to start in next session. |
| 2026-05-19 | Audit-trail patch | Clarifying note re: Phase 2 vertical-template annotations. The amendment row above states *"3 templates deferred with Phase 1d (health, education, automotive)"* — incomplete. **Actual untouched set is 5 templates: health, education, automotive, studio, home-garden.** All five lack matching sites in the 24-site UI/UX reference study. health/education/automotive are deferred per the Phase 1d trigger (will be sourced when the first client in those verticals arrives). **studio + home-garden are not deferred** — they already ship complete §9 reference-site annotations sourced from their own categories (Equinox/Smart Fit/Hotpod Yoga for studio; Bloom & Wild/Patch Plants/The Sill/TruGreen/etc. for home-garden), so no cross-reference to the 24-site study is needed. Intentionally un-annotated against that set, not pending. Surfaced by Phase 3a→3b transition audit. |
| 2026-05-19 | Phase 3b ✅ | All 8 working Astro components shipped to `clients/reference-solo-barber/src/components/`: `ui/HalfPillCTA.astro` · `sections/LabelCountHeader.astro` · `layout/HoursInNav.astro` · `sections/StatCallouts.astro` · `layout/Section.astro` (alternating-bg variant) · `ui/MarqueeCTA.astro` · `sections/EyebrowDisplayHero.astro` (with build-time SEO-restriction warn) · `ui/SplitText.astro` (per-character split + IntersectionObserver stagger). Net-new tokens (motion, easing, tracking, `--radius-pill-half`, optional palette extensions) committed in isolation to `src/styles/tokens.css` first, per PHASE-3B-PREP.md §2. Companion demo pages at `src/pages/demo/` (renamed from `_demo/` — Astro treats `_`-prefixed dirs as private and skips routing; indexing protection now layered via robots.txt `Disallow: /demo/` + BaseLayout default `noindex`). Verification: `pnpm build` succeeds with 0 errors / 0 warnings / 0 hints (Astro check) across 13 generated pages (4 original + 9 demo). `pnpm exec biome check` passes on all 8 new components + 9 demo pages. Verification gates remaining (manual / user-side): 375×812 mobile viewport visual check via `pnpm dev`. Post-audit fixes 2026-05-19: (i) HalfPillCTA `font-weight` reverted 500 → 400 to match spec exactly; (ii) project-wide `pnpm exec biome check --write src/` applied to fix pre-existing import-sort + CSS-format issues in 13 unrelated files — `pnpm validate` (= `pnpm lint && pnpm build`) is now fully green. |
| 2026-05-19 | Phase 4 ✅ | Closeout. (a) `docs/design/TECH.md` §20 per-client CLAUDE.md template extended with "Imported components" section — table mapping component name → spec-sheet path → file-in-client → surface, plus the convention rule for adding new rows when a client adopts a canonical component. (b) `docs/audit/PENDING.md` two new agency-template entries: 2026-11-18 6-month UI/UX reference-study refresh (calendar trigger) + Phase 1d vertical-gap audit (trigger-gated on first health / education / automotive client engagement). "Last updated" date refreshed; "Recently resolved" entry added for the full UI/UX plan closure. (c) `RUNBOOK-real-browser-audit.md` was already done in Phase 1c — no further work. **UI/UX Integration Plan is functionally complete.** Phase 1d remains the only trigger-gated leftover; all rule + component + maintenance deliverables shipped. |
| 2026-05-19 | Post-plan note | Forward pointer: `CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md` relocated the 8 working Astro components from `clients/reference-solo-barber/src/components/` to `docs/design/components/_impl/` (Phase 1 extraction). All `clients/reference-solo-barber/` references in THIS plan doc describe pre-restructuring state and are historically accurate — they are NOT current paths. Current paths: see `docs/design/components/_impl/`. |

---

## Context (read before executing)

1. **There's already a pattern for this kind of work.** `docs/design/UI_REVIEW.md` (Porto dos Ribeiros measured audit) and `docs/design/local_business_website_benchmark_report.md` exist — the agency already extracts patterns from measured sites. This plan fits the same convention.
2. **Tokens live per-client, not agency-wide.** `tokens.css` is canonical inside each scaffold (e.g., `clients/reference-solo-barber/src/styles/tokens.css`). No global `tokens.css`. **Token additions land as rules in `TECH.md` §7, not as a global file.**
3. **Reference clients exist.** `clients/reference-solo-barber` (Tier-2 Astro) and `clients/reference-studio-booking` (Tier-3 Next.js) are populated. They're the natural homes for Phase 3b component code.
4. **Every vertical template already has §9 "Reference site annotations"** — the natural insertion point for the 24-site findings. No new sections needed in those templates.

---

## Phase 1 — Close the data gaps (~16-20 hrs total)

The study has known holes. Close them before building anything on top.

| Sub | What | Effort | Output |
|---|---|---|---|
| **1a** | Mobile re-audit at 375 + 768 viewports for 8 highest-agency-relevance sites: Watch House, Haven, Marvell, Mily, Auwa, Modus, Horeca-Social, Kindred | ~4 hr | Append `### Mobile (375 / 768)` block per entry in `ui-ux-reference-study.md` |
| **1b** | Animation specs for 5 most distinctive motion sites (Apple, Auwa, Haven, Really Up There, Aircenter). **Scope caveat:** `getAnimations()` returns CSS transitions/keyframes only. GSAP, Lottie, and WebGL animations live outside the CSSOM and are not programmatically inspectable. For those, document what was observed behaviorally (estimated duration, visual ease impression, trigger) and flag for a manual Chrome DevTools Performance-tab session. | ~3 hr | Append `### Motion` block per entry; consolidated motion-recipes added to §Cross-site synthesis |
| **1c** | Unblock HBA + Bulgari (the 2 placeholder entries). Try headless retry tactics first; fall back to manual real-browser inspection if still blocked. If manual fallback is needed, defer to a Phase 4 runbook entry (don't block Phase 1) | ~30 min – 1 hr | Replace 2 placeholder entries in `ui-ux-reference-study.md` with real data OR mark them as "deferred to manual session per `RUNBOOK-real-browser-audit.md`" |
| **1d** | Vertical-gap audit: add 6-8 new sites covering health, education, automotive. **Site-selection criteria** (not specific URLs): real Berlin or comparable German-market local-business sites, not SaaS booking platforms. Targets — Health: 1 Berlin Zahnarztpraxis (Invisalign / cosmetic dental), 1 solo Physiotherapeut/Osteopath with appointment-request flow, 1 high-Jameda-score Kieferorthopäde. Education: 1 Berlin Sprachschule, 1 Berlin tutoring service, 1 premium Kita (Reggio/Montessori). Automotive: 1 Berlin detailing/wrapping service, 1 solo Berlin Werkstatt with strong web. **Confirm or override list with user before starting** | ~8 hr | New `## Study addendum — 2026-05` section in the study with 8 new entries |

---

## Phase 2 — Integrate findings into agency rules (~6-8 hrs)

Surface each §Cross-site synthesis finding into the doc that already governs the same territory. **Extend, never duplicate.**

### Findings → existing docs

| Finding | Lands in |
|---|---|
| Cream-not-white background (5 samples) | `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette" — as default-bg rule for hospitality / artisan / beauty |
| Warm-brown body color (3 samples) | `DESIGN-BEST-PRACTICES.md` §5 + `TECH.md` §7 token canon (`--color-text-warm`) |
| Pill-radius arms race → single value | `TECH.md` §7 — **reference existing `--radius-full: 9999px`** (already in `clients/reference-solo-barber/src/styles/tokens.css`); do *not* introduce `--radius-pill` as a duplicate. Add the rule "primary CTAs use `--radius-full`" to `DESIGN-BEST-PRACTICES.md` §7 Components |
| Negative tracking on sans display | `DESIGN-BEST-PRACTICES.md` §4 Typography — measured ranges by display type |
| Period-terminated CTAs (4 samples) | `DESIGN-BEST-PRACTICES.md` §11 Copy rules (new option) |
| Mono for catalog labels (3 samples) | `DESIGN-BEST-PRACTICES.md` §4 + per-vertical templates §5 |
| **Inverted h1/h2 hierarchy (HARD RESTRICTION)** | `DESIGN-BEST-PRACTICES.md` §4 + `SEO.md` §On-page SEO. **Rule:** "Permitted *only* for clients where SEO is explicitly deprioritized in `BRIEF.md` (referral-only, portfolio, agency-self). For all local-business clients, the h1 must be the visually primary headline AND carry the primary SEO keyword. The 'eyebrow h1' pattern is **forbidden for local-business clients**." |
| System-font body | `TECH.md` §7 (Tier-1 option) + `PERFORMANCE.md` |
| Color-as-material | `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette" — **new tier** in the priority hierarchy |
| Hours-in-nav | `templates/gastronomy.md`, `beauty.md`, `health.md` §3 Hero patterns |
| Half-pill sticky CTA | `DESIGN-BEST-PRACTICES.md` §7 + gastronomy / beauty / health / studio templates |
| Marquee-on-hover CTA | `DESIGN-BEST-PRACTICES.md` §8 Motion |
| **Fixed-viewport SPA / scroll-hijacking (PROHIBITED)** | `DESIGN-BEST-PRACTICES.md` §3 "Forbidden visual directions" + `SEO.md` §Tech SEO anti-patterns. **Rule:** "Never use fixed-viewport / scroll-hijacked SPA navigation for any client whose acquisition channel includes organic search. This pattern prevents indexing of below-fold content, destroys Core Web Vitals, and breaks standard scroll. Acceptable only for purely referral-driven clients (portfolio, high-end invite-only) where SEO is explicitly deprioritized in `BRIEF.md`." |
| **Ambient autoplay video (HARD CONSTRAINTS)** | New `PERFORMANCE.md` §Ambient autoplay video subsection. **Mandatory constraints (all five must apply when shipped):** (1) conditional load — only on `navigator.connection.effectiveType === '4g'`; (2) `preload="none"`; (3) autoplay deferred until hero image LCP has fired; (4) the `poster` image is the LCP element with `fetchpriority="high"`, never the video itself; (5) loop ≤ 5 s, resolution ≤ 720p, total payload ≤ 2 MB. **Without all five, ambient video must not ship.** |
| Verification gates | New lines in `CHECKLIST.md` §2 — **all scoped by vertical**, never flat. Example: "For gastronomy/beauty/artisan clients: if background is pure white (#fff), flag for client discussion — cream is the pattern-evidenced default (`DESIGN-BEST-PRACTICES.md` §5)." Flat universal gates would incorrectly flag legitimate dark-theme / industrial clients. |

### Token-naming reconciliation (must align with `clients/reference-solo-barber/src/styles/tokens.css`)

The existing scaffold uses `--color-*` prefix for colors and `--radius-*` for radii. New tokens must follow this convention; existing tokens are referenced, not duplicated.

| Study draft | Phase 2 final |
|---|---|
| `--bg-cream` | `--color-bg-cream` |
| `--bg-charcoal` | `--color-bg-charcoal` |
| `--bg-night` | `--color-bg-night` |
| `--bg-studio-grey` | `--color-bg-studio` |
| `--text-warm-brown` | `--color-text-warm` |
| `--text-warm-grey` | `--color-text-warm-grey` |
| `--text-trade-navy` | `--color-text-trade-navy` |
| `--radius-pill: 9999px` | **reference existing `--radius-full`** — do not duplicate |
| `--radius-pill-half: 30px 0 0 30px` | new `--radius-pill-half` (no existing equivalent) |
| `--radius-chip: 8px` | **reference existing `--radius-md`** — do not duplicate |
| `--tracking-display-sans: -0.022em` | keep as-is (no tracking tokens exist yet) |
| `--tracking-display-serif-caps: +0.025em` | keep as-is |
| `--tracking-body: -0.005em` | keep as-is |

### Per-vertical template §9 additions

| Template | Add references from study |
|---|---|
| `templates/gastronomy.md` | Watch House §5, Haven §15 |
| `templates/beauty.md` | Auwa §6, Kindred §20 |
| `templates/trades.md` | Marvell §11, Modus §3, SweepingCorp §14 |
| `templates/professional-services.md` | Lesse §16, Laurenti §17, Juan Mora §18, Horeca-Social §10 |
| `templates/events-hospitality.md` | Flyward §13, T11 §19, Aircenter §4 |
| `templates/artisan.md` | Mily §9, Kindred §20, Evagria §12 |
| `templates/pets.md` | Mily §9 |
| `templates/health.md` | (from Phase 1d) |
| `templates/education.md` | (from Phase 1d) |
| `templates/automotive.md` | (from Phase 1d) |

---

## Phase 3 — Component library (~22-26 hrs)

**Both 3a and 3b** — spec sheets *and* working Astro code. Spec sheets are the source of truth; the code is the executable reference.

### 3a — Spec sheets (~7-8 hrs)

New directory: `docs/design/components/`

One markdown per component. Structure (each section is mandatory):

1. **Purpose + when to use** — including per-vertical surface (which `templates/*.md` recommends it)
2. **HTML / accessibility structure** — semantic markup + explicit cross-reference to `ACCESSIBILITY.md` §[relevant section] for the WCAG requirement this component must satisfy (e.g., half-pill sticky CTA needs `aria-label`; per-character DOM split needs `aria-hidden` on inner spans + `aria-label` on container)
3. **CSS spec** — computed values from the source study (with link to the study §N anchor)
4. **Required CSS custom properties** — list of the `--color-*` / `--radius-*` / `--tracking-*` tokens the component consumes, plus a **minimal standalone CSS snippet** defining those properties. This makes the component pnpm-copyable into any Tier 1/2/3 scaffold whose `tokens.css` may not have the matching names (Gap C resolution).
5. **Performance constraints** — for components with potential page-weight cost (ambient video, large videos, heavy GSAP), the spec MUST encode the constraints from `PERFORMANCE.md` as required props, not optional suggestions.
6. **Reference sites** — study section anchors (`ui-ux-reference-study.md` §N)
7. **Bidirectional UI_REVIEW.md cross-link** — note for future client audits: "If a client audit (`UI_REVIEW.md`-style) flags a missing sticky CTA or wrong heading hierarchy, link back here as the canonical implementation: `docs/design/components/<this>.md`."
8. **Implementation pointer** — path in `clients/reference-solo-barber/src/components/` where the working `.astro` file lives

### 3b — Working Astro components (~10-14 hrs)

**Where things live (revised per audit Issue 1):**

- **All 8 components extend** `clients/reference-solo-barber/src/components/` — adding to the existing `ui/`, `layout/`, `sections/` subdirectories per the impl's existing structure
- **No new reference client.** The audit correctly identified that creating `clients/reference-gastronomy-cafe/` would (1) split the canonical Tier-2 scaffold, (2) add ~33 % maintenance overhead, (3) require PENDING.md + CLAUDE.md updates to disambiguate scaffold selection. The components are the value; the scaffold is just a container.
- **Visual-identity mismatch handling:** the solo-barber scaffold's dark + amber identity differs from hospitality (cream + terracotta) and from industrial (navy). The components carry the *structure* and *behavior*; the visual identity is supplied per-client via tokens. Each component's `_demo/` page renders it in the solo-barber identity *and* documents in inline comments which token swaps adapt it to gastronomy / industrial / portfolio.

**For each component:**
- Single `.astro` file (props-driven, token-driven via CSS custom properties)
- Companion `_demo/<component>.astro` page rendering it with notes
- pnpm-copyable into any scaffold *because* the spec sheet (Phase 3a §4) documents required tokens + ships a minimal CSS snippet
- WCAG verification per the spec sheet's `ACCESSIBILITY.md` cross-reference — component is not considered done until WCAG section passes

### Component priority list (build in this order)

1. **Half-pill sticky-edge CTA** — Haven §15. Maps to: gastronomy book-a-table · beauty book-an-appointment · health book-a-visit · trades request-a-quote.
2. **`LABEL (N)` monospace section header** — Mily §9 + T11 §19. Maps to: every menu / portfolio / catalog section.
3. **Hours-in-nav** — Haven §15. Maps to: any business with regular opening hours.
4. **Marquee-on-hover CTA** — Auwa §6. Maps to: boutique / artisan / beauty.
5. **Eyebrow h1 + display-paragraph hero** — Auwa §6 / Lesse §16 / Juan Mora §18. Maps to: solo-practitioner / agency-self.
6. **Big-number stat callouts (`400+`, `15+ Jahre`)** — Horeca §10. Maps to: trades / professional-services.
7. **Alternating-section-background rhythm** — Apple §1. Maps to: any long-form landing.
8. **Per-character DOM split for letter animation** — Really Up There §7 / Victor Furuya §21. Maps to: solo/artisan portfolios.

---

## Phase 4 — Maintenance (process + 2 file updates) (~3-4 hrs)

- **6-month audit refresh:** re-measure top references (CSS drifts, brands rebrand). **Log in `docs/audit/PENDING.md`** as a timed item dated 2026-11-18 (Gap A resolution). Without a PENDING.md entry, this falls off the radar between sessions.
- **Phase 1d follow-on trigger:** log in `docs/audit/PENDING.md` as a trigger-gated item: "Before first health / education / automotive client engagement — confirm Phase 1d vertical-gap audit is complete; if not, do it first."
- **Capability gap closure:** write `docs/audit/RUNBOOK-real-browser-audit.md` documenting how to audit Cloudflare- and HTTP/2-blocked sites manually (open in Chrome, run the inspector script from `ui-ux-reference-study.md` §1 in DevTools console, paste results into the study). Closes the headless-browser gap that hit HBA + Bulgari.
- **Per-client adoption log:** each client's `BRIEF.md` records which agency components it imported. **Requires updating `TECH.md` §20 (BRIEF.md template) to add an "Imported components" field** (Gap D resolution). Without the template field, the convention is invisible to future sessions.

---

## Where everything saves — at a glance

| Phase | Files created | Files modified |
|---|---|---|
| 1 | none | `docs/audit/ui-ux-reference-study.md` (append addendum + amendment log) |
| 2 | none | `DESIGN-BEST-PRACTICES.md` (§3, §4, §5, §7, §8, §11), `TECH.md` §7 + §20, `PERFORMANCE.md` (new §Ambient autoplay video), `SEO.md` (§On-page + §Tech SEO anti-patterns), `CHECKLIST.md` §2, and 10 `docs/design/templates/*.md` §9 reference annotations |
| 3a | new `docs/design/components/*.md` spec sheets (8 files) | none |
| 3b | new `.astro` files in `clients/reference-solo-barber/src/components/` + companion `_demo/` pages | `clients/reference-solo-barber/src/styles/tokens.css` (add new tokens with reconciled `--color-*` naming) |
| 4 | new `docs/audit/RUNBOOK-real-browser-audit.md` | `docs/audit/PENDING.md` (add refresh + trigger items), `TECH.md` §20 (BRIEF.md template gains "Imported components" field), ongoing per-client `BRIEF.md` updates |

---

## Recommended execution order (locked in)

1. **Phase 1c** — unblock HBA + Bulgari (30 min – 1 hr) — quick win
2. **Phase 1b** — animation specs (3 hr) — highest-value gap; scope caveat noted (CSS-only programmatic capture; GSAP/Lottie/WebGL flagged for manual)
3. **Phase 1a** — mobile re-audit (4 hr) — required before Phase 3
4. **Phase 1d** — health/education/automotive audit (8 hr) — confirm site list per Phase 1d criteria with user before starting
5. **Phase 2** — doc integration (7-9 hr) — covers 2 prohibitions (fixed-viewport SPA, inverted-h1-for-local-business) + 5 mandatory video constraints + token reconciliation + vertical-scoped CHECKLIST gates
6. **Phase 3a** — spec sheets (7-8 hr) — each sheet mandatorily includes ACCESSIBILITY cross-ref, required-tokens block with standalone CSS snippet, performance constraints (where applicable), bidirectional UI_REVIEW.md link
7. **Phase 3b** — working components (10-14 hr) — all 8 land in `clients/reference-solo-barber/src/components/`; no new scaffold
8. **Phase 4** — runbook + PENDING.md entries + TECH.md §20 update + ongoing maintenance (3-4 hr)

---

## Realistic execution constraints (what the headless browser can / cannot do)

- **Phase 1a (mobile re-audit):** ✅ fully possible — resize viewport + re-run inspector script
- **Phase 1b (animation specs):** ⚠️ partial — `getAnimations()` + CSS transition inspection works in headless; full Performance-tab recording requires a real browser. Capture what we can programmatically; flag the rest for a manual session
- **Phase 1c (unblock HBA + Bulgari):** ⚠️ partial — retry with backoff; if still blocked, document runbook entry and defer measurement to a manual real-browser session
- **Phase 1d (vertical-gap audit):** ✅ fully possible — same workflow as the original 24-site study
- **Phase 2:** ✅ fully possible — pure doc editing
- **Phase 3a:** ✅ fully possible — markdown spec sheets
- **Phase 3b:** ✅ fully possible — Astro component scaffolding + writing

---

## Status tracking

This plan is the source of truth; per-phase status is tracked in the task list (`TaskList`). Update tasks as phases complete.

*Plan authored 2026-05-18. Source study measurements timestamped 2026-05-18, 1440 × 900 viewport, Chromium via Docker MCP Playwright.*
