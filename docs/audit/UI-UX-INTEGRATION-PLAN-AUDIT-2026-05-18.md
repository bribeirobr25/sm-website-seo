# UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md
## Audit of UI-UX-INTEGRATION-PLAN-2026-05-18.md

**Auditor:** Claude (independent review)
**Date:** 2026-05-18
**Plan version reviewed:** Initial (no prior revisions)
**Status:** Ready for Bar/Breno review — 3 decisions needed before Phase 3b starts; all other phases can proceed immediately
**Files read:** UI-UX-INTEGRATION-PLAN-2026-05-18.md (full) · ui-ux-reference-study.md (full) · DESIGN-BEST-PRACTICES.md (full) · TECH.md (§1–7) · PERFORMANCE.md (full) · CHECKLIST.md (§0–phase legend) · UI_REVIEW.md (full) · docs/design/templates/gastronomy.md (§1–3 + §9) · clients/reference-solo-barber/src/styles/tokens.css (full) · clients/reference-solo-barber/src/components/ui/Button.astro (full) · clients/reference-solo-barber/src/components/ directory · clients/ directory listing

---

## 0. Executive summary

The plan is well-structured, correctly scoped, and fits naturally into the agency's existing convention for pattern-extraction work (UI_REVIEW.md, local_business_website_benchmark_report.md). The research in the source study is genuinely useful and the integration targets (DESIGN-BEST-PRACTICES.md, TECH.md §7, vertical templates §9) are the right homes.

However, the audit surfaces **one high-severity architectural conflict** (Phase 3b creates a third reference client that will split the canonical scaffold), **three medium issues** (token naming, a PERFORMANCE.md conflict, a SEO risk on cross-site synthesis finding #7), and **four gaps** the plan doesn't address. None are showstoppers. The plan can execute Phases 1–2 and Phase 3a immediately. Phase 3b needs one architectural decision resolved first.

---

## 1. Verification — what the plan claims vs what actually exists

### 1.1 Context claims — all accurate

| Plan claim | Verified |
|---|---|
| `tokens.css` is canonical inside each scaffold (not agency-wide) | ✅ Confirmed — `clients/reference-solo-barber/src/styles/tokens.css` uses `@theme {}` block per Tailwind v4; no global agency tokens.css exists |
| Token additions land as rules in `TECH.md` §7, not as a global file | ✅ Consistent with TECH.md §7 "CSS and design token standards" |
| `clients/reference-solo-barber` and `clients/reference-studio-booking` are populated | ✅ Both confirmed live |
| Every vertical template already has §9 "Reference site annotations" | ✅ Confirmed in gastronomy.md — §9 exists with "Reference audit: 2026-05-13. Three sites analyzed" |
| `UI_REVIEW.md` and `local_business_website_benchmark_report.md` exist as prior pattern-extraction precedents | ✅ Both present in docs/design/ |

### 1.2 The source study — quality and gaps

The study is methodologically sound (runtime computed-style extraction, not CSS guessing). Measurements are timestamped (2026-05-18, 1440×900, Chromium via Docker MCP Playwright). Cross-site synthesis findings are grounded in the data.

**Gaps in the study the plan correctly identifies and assigns to Phase 1:**
- Mobile viewports (375/768) missing for 8 key sites → Phase 1a ✅
- Animation specs captured programmatically but not from DevTools Performance tab → Phase 1b ✅
- HBA + Bulgari blocked → Phase 1c ✅
- Health/education/automotive verticals absent → Phase 1d ✅

---

## 2. Issues — concrete problems requiring resolution

### Issue 1 — Phase 3b creates a THIRD reference client, conflicting with the two-impl canonical model 🔴

**Severity:** High. Architectural conflict that will persist beyond this plan.

**What the plan says:** Phase 3b creates `clients/reference-gastronomy-cafe/` as a new Tier-2 Astro scaffold to demonstrate hospitality-specific patterns (cream bg, hours-in-nav, half-pill sticky RESERVE, ambient autoplay loops).

**What the current model says:** PENDING.md, CLAUDE.md, and the SEO-DEPTH-EXPANSION-PLAN all operate on a two-reference-impl model:
- `clients/reference-solo-barber/` = Beauty / Tier 2 / BR-LGPD (canonical Astro scaffold)
- `clients/reference-studio-booking/` = Studio / Tier 3 / DE-DSGVO (canonical Next.js scaffold)

Both impls are documented in PENDING.md's "Active client builds" and "By next-action owner" sections as the canonical starting points for real client scaffolds. CLAUDE.md §How to start a new client project says "cp -r clients/reference-{matching-impl}."

**The conflict:** Adding a third reference impl creates three problems:

1. **Split canonical scaffold.** The solo-barber impl is currently the canonical Astro/Tier-2 starting point for all beauty clients AND, by extension, any Tier-2 client copying the scaffold. A gastronomy-specific impl alongside it means future sessions must decide: which Tier-2 scaffold do I copy for a café client? The current answer is unambiguous (solo-barber); the post-Plan answer is ambiguous.

2. **Maintenance multiplication.** Two impls already need `pnpm install && pnpm build` verification after every standards update (Sentry version bumps, Tailwind v4 breaking changes, etc.). A third impl adds ~33% maintenance overhead with no proportional gain if the alternative is adding components to the existing solo-barber impl.

3. **PENDING.md and CLAUDE.md divergence.** Both docs explicitly list two reference impls as the canonical agency state. A third impl exists outside this model until someone updates both documents — which the plan doesn't mention.

**The alternative (which resolves all three problems):** Add the hospitality-specific patterns to `clients/reference-solo-barber/src/components/` as additional components (HalfPillCTA.astro, HoursInNav.astro, etc.) with a companion `_demo/` page for each. The solo-barber impl already has `src/components/layout/`, `src/components/sections/`, and `src/components/ui/` — this is exactly the structure for adding more components.

The only pattern that genuinely doesn't fit the solo-barber impl is "ambient autoplay-muted MP4 loops" — because the solo-barber impl is a dark urban barber with amber accent, not a cream hospitality brand. That's a visual mismatch, not a structural one. The component itself can live in solo-barber with a `TODO: swap visual identity for gastronomy use` comment.

**Resolution needed (decision for Bar/Breno before Phase 3b starts):**
- **Option A:** Add all 8 components to the existing `clients/reference-solo-barber/src/components/` with `_demo/` pages — no third impl. Simpler, no maintenance overhead, no PENDING.md/CLAUDE.md update needed.
- **Option B:** Create `clients/reference-gastronomy-cafe/` as described — but update PENDING.md and CLAUDE.md to acknowledge three reference impls and define the selection rule ("Tier 2 gastronomy/hospitality → copy reference-gastronomy-cafe; everything else → copy reference-solo-barber").

**Default recommendation: Option A.** The components are the value; the scaffold is just a container. The visual identity mismatch is solved by the spec sheets (Phase 3a) pointing developers to the correct brand direction.

---

### Issue 2 — Token naming in the synthesis conflicts with the solo-barber tokens.css already in production 🟠

**Severity:** Medium. Creates inconsistency that will surface on first real client build.

**What the study's Cross-site synthesis proposes (Agency token additions):**
```css
--bg-cream: #FBF8F3;
--bg-charcoal: #1D1D1D;
--bg-night: #020A18;
--bg-studio-grey: #EBEBEB;
--text-warm-brown: #2B1A12;
--text-warm-grey: #333;
--text-trade-navy: #042940;
--radius-pill: 9999px;
--radius-pill-half: 30px 0 0 30px;
--radius-chip: 8px;
--tracking-display-sans: -0.022em;
--tracking-display-serif-caps: +0.025em;
--tracking-body: -0.005em;
```

**What the current `clients/reference-solo-barber/src/styles/tokens.css` already uses:**

| Proposed token | Existing token | Conflict |
|---|---|---|
| `--radius-pill: 9999px` | `--radius-full: 9999px` | Same value, different name |
| `--radius-chip: 8px` | `--radius-md: 8px` | Same value, different semantic |
| `--bg-cream: #FBF8F3` | Not present (dark theme) | Naming pattern differs: `--color-bg` vs `--bg-cream` |
| `--text-warm-brown` | Not present | Naming pattern differs: `--color-text` vs `--text-warm-brown` |

**The core inconsistency:** The existing impl uses `--color-*` prefix for colors (`--color-bg`, `--color-surface`, `--color-text`, `--color-accent`). The study's proposed tokens use category-only prefixes (`--bg-cream`, `--text-warm-brown`). TECH.md §7 should define one naming convention, not two.

**Resolution:** When Phase 2 integrates the token block into TECH.md §7, align the naming convention with the existing `--color-*` pattern:

| Proposed (study) | Rename to (TECH.md §7 standard) |
|---|---|
| `--bg-cream` | `--color-bg-cream` |
| `--bg-charcoal` | `--color-bg-charcoal` |
| `--text-warm-brown` | `--color-text-warm` |
| `--radius-pill` | `--radius-full` (already exists — reference the existing token, don't duplicate) |
| `--radius-chip` | `--radius-md` (already exists) |
| `--tracking-display-sans` | Keep as-is (tracking tokens don't exist yet, naming is fine) |

---

### Issue 3 — Cross-site synthesis finding #9 (fixed-viewport SPA) is absent from the Phase 2 integration table 🟠

**Severity:** Medium. Missing from Phase 2 despite being the highest-risk finding.

**What the study correctly identifies:** Finding #9 (fixed-viewport SPA landings) concludes: "Hostile to SEO; do not use for any client whose acquisition includes Google." This is a prohibition, not a recommendation.

**What the Phase 2 integration table shows:** 13 findings mapped to target docs. Finding #9 is **absent**. The current DESIGN-BEST-PRACTICES.md §15 anti-slop checklist and §3 "Forbidden visual directions" don't mention scroll-hijacking or fixed-viewport SPA patterns.

**The risk:** Without this being codified as a rule, a future session building a premium-contractor site (where Marvell §11 is the reference) could adopt the fixed-viewport aesthetic without knowing the SEO caveat. The study says it explicitly; the rules library doesn't.

**Resolution:** Add to Phase 2 integration table:

| Finding | Lands in |
|---|---|
| Fixed-viewport SPA (§9 — "hostile to SEO") | `DESIGN-BEST-PRACTICES.md` §3 "Forbidden visual directions" + `SEO.md` §Tech SEO anti-patterns |

Rule text: "Never use fixed-viewport / scroll-hijacked SPA navigation for any client whose acquisition channel includes organic search. This pattern prevents indexing of below-fold content, destroys Core Web Vitals, and breaks standard scroll. Acceptable only for purely referral-driven clients (portfolio, high-end invite-only) where SEO is explicitly deprioritized in BRIEF.md."

---

### Issue 4 — Phase 3b's "ambient autoplay-muted MP4 loops" conflicts with PERFORMANCE.md page-weight budget 🟠

**Severity:** Medium. A Phase 3b component that violates performance standards as shipped without explicit constraints.

**What PERFORMANCE.md says:** Total page weight < 500 KB on mobile. No specific video rule currently exists in PERFORMANCE.md — this is a gap.

**The problem:** An ambient autoplay MP4 loop will typically add 2–8 MB to page weight (a 10-second compressed 1080p loop runs ~3–5 MB even at quality=50). This blows the 500 KB budget by a factor of 4–16×. Watch House can sustain this because they're a premium brand with a CDN and a desktop-first referral audience. A Type 1/2 Berlin café cannot afford the LCP hit.

The pattern works only with mandatory constraints:
- Conditional load (`navigator.connection.effectiveType === '4g'`)
- `preload="none"`, autoplay deferred until hero image LCP has fired
- Poster image is the actual LCP element with `fetchpriority="high"`, not the video
- Loop duration ≤ 5s, resolution ≤ 720p, total payload ≤ 2 MB

**Resolution:** The component spec sheet (Phase 3a) and working component (Phase 3b) must encode these as mandatory props, not optional suggestions. Also add to PERFORMANCE.md: "Ambient autoplay video" section with the above five constraints as hard requirements.

---

### Issue 5 — Cross-site synthesis finding #7 (inverted h1/h2 hierarchy) needs a hard restriction, not just "a caveat" 🟡

**Severity:** Low-medium. Risk of pattern adoption without the SEO consequence being enforced.

**What the Phase 2 integration table says:** "Inverted h1/h2 hierarchy → `DESIGN-BEST-PRACTICES.md` §4 — flag with SEO caveat."

**The problem:** Auwa, Lesse, and Juan Mora are portfolio/brand sites that tolerate poor local SEO because they acquire clients via referral, not search. A Berlin Physiotherapist or café that adopts this pattern loses their primary keyword (`Physiotherapie Prenzlauer Berg`, `Café Kreuzberg`) from the most-indexed element on the page.

**Resolution:** Phase 2 integration for finding #7 must include a hard restriction: "Permitted **only** for clients where SEO is explicitly deprioritized in BRIEF.md (referral-only, portfolio, agency-self). For all local-business clients, the h1 must be the visually primary headline AND carry the primary SEO keyword. The 'eyebrow h1' pattern is forbidden for local business clients." Cross-reference from SEO.md §On-page SEO, not just DESIGN-BEST-PRACTICES.md §4.

---

## 3. Gap analysis — what the plan misses

### Gap A — No PENDING.md update planned 🟠

Phase 4's 6-month audit refresh should be logged in PENDING.md as a timed item. Phase 1d (health/education/automotive audit, ~8 hrs) should be logged as a trigger-gated item ("trigger: before first health/education/automotive client engagement"). Without PENDING.md entries, both items fall off the radar between sessions.

### Gap B — Phase 2 CHECKLIST.md additions are underspecified 🟠

The plan says "one new line per integrated rule in CHECKLIST.md §2." But the patterns being added are vertical-specific recommendations, not universal requirements. Adding "cream background used" as a flat CHECKLIST.md item would incorrectly flag legitimate dark-theme clients.

**Resolution:** CHECKLIST.md additions should be vertically scoped: "for gastronomy/beauty/artisan clients: if background is pure white (#FFF), flag for client discussion — cream is the pattern-evidenced default (see `DESIGN-BEST-PRACTICES.md` §5)." The phase legend (🔴/🟠/🟡/🟢) helps with severity, but vertical scoping must be explicit in the item text.

### Gap C — Component copy-portability mechanism not defined 🟡

The plan says Phase 3b components are "pnpm-copyable into a client scaffold (no hidden dependencies)." But the existing Button.astro imports from local token CSS variables via `@theme {}` and uses Tailwind utility classes that reference those tokens. A component copied to a different scaffold works only if the receiving scaffold defines the same variable names.

**Resolution:** Each Phase 3b component spec sheet should document: (a) the list of CSS custom properties the component consumes, and (b) a minimal standalone CSS snippet that defines those properties, so the component can be dropped into any Tier 1/2/3 scaffold without modification.

### Gap D — Phase 4 adoption log disconnected from BRIEF.md template 🟡

Phase 4 says each client's BRIEF.md records which agency components it imported. But the existing BRIEF.md template (TECH.md §20 + CHECKLIST.md §9) has no "Imported components" section. The plan should note that Phase 4 includes a TECH.md §20 update to add this field.

---

## 4. Compliance check — plan vs core principles

| Check | Result | Note |
|---|---|---|
| vs DESIGN-BEST-PRACTICES.md anti-slop | ✅ PASS | Provided inverted h1/h2 lands with the hard restriction from Issue 5 |
| vs PERFORMANCE.md page-weight budget | 🔴 CONFLICT | Ambient autoplay video without conditional-load constraints violates < 500 KB target |
| vs SEO.md on-page requirements | 🟠 RISK | Inverted h1/h2 without restriction conflicts with keyword-in-h1 rule |
| vs TECH.md §7 token naming | 🟠 INCONSISTENCY | `--bg-cream` vs `--color-bg` convention mismatch — fix during Phase 2 |
| vs CHECKLIST.md phase legend | ✅ PASS | Design-quality checks, not security or legal gates |
| vs ACCESSIBILITY.md WCAG 2.2 AA | 🟡 PARTIAL | Half-pill sticky CTA needs `aria-label`; per-character DOM split needs `aria-hidden` on spans + `aria-label` on container. Must be in spec sheets before components are considered done. |
| vs LEGAL.md | ✅ N/A | Pure UI work, no data collection |

---

## 5. Improvements — not required but valuable

### Improvement 1 — Phase 1b should pre-note the GSAP/WebGL capture limitation

`getAnimations()` captures CSS transitions and keyframes only. GSAP (Apple, Really Up There), Lottie, and Three.js/WebGL (Aircenter) are not in the CSSOM and won't appear in programmatic inspection. Phase 1b should preemptively scope: "GSAP/Lottie/WebGL-driven animations document what was observed behaviorally (estimated duration, visual ease impression); only CSS-driven animations are verifiable from computed style."

### Improvement 2 — Add a `## Amendment log` to `ui-ux-reference-study.md`

Phase 1 adds four addendum blocks. Phase 4 schedules a 6-month refresh. Without a versioning convention, the document will accumulate addenda in different formats. A simple amendment log at the top (date, phase, sites affected, what was added) makes the study durable as a living document.

### Improvement 3 — Phase 3a spec sheets should cross-reference ACCESSIBILITY.md explicitly

The spec sheet structure lists "HTML / accessibility structure" as item 2. The template should call out: "See `ACCESSIBILITY.md` §[relevant section] for the WCAG requirement this component must satisfy." This prevents the accessibility section from being written as "just works" without verification.

### Improvement 4 — Phase 1d should define the 8 target URLs before execution

Doctolib is mentioned as a health reference but it is a SaaS booking platform — not a local business site and not the right reference for a Berlin Physiotherapeut or Zahnarztpraxis. The 8 URLs should be defined and agreed before execution starts.

More appropriate health references for this agency's context:
- A Berlin Zahnarztpraxis with strong web presence (e.g., a Berlin Invisalign practice)
- A solo Physiotherapeut or Osteopath with an appointment-request site
- A top-rated Kieferorthopäde from Jameda's Berlin listings (to see the trust-signal layer patients expect)

### Improvement 5 — Link Phase 3a spec sheets bidirectionally to UI_REVIEW.md format

Future client audits (in the style of UI_REVIEW.md) should be able to reference the spec sheets directly — e.g., "Issue #3 — sticky CTA missing: adopt Half-pill sticky-edge CTA per `docs/design/components/half-pill-cta.md`." The spec sheet template should note this bidirectional use case.

---

## 6. Three decisions needed before full execution

### Decision 1 — Phase 3b: third reference impl or extend solo-barber? (Required before Phase 3b starts)

- **Option A (recommended):** Extend `clients/reference-solo-barber/src/components/` — 8 components + `_demo/` pages. No maintenance overhead, no PENDING.md/CLAUDE.md update, no ambiguous scaffold selection.
- **Option B:** Create `clients/reference-gastronomy-cafe/` + update PENDING.md + CLAUDE.md with three-impl selection rule.

### Decision 2 — Phase 1d: which 8 specific URLs? (Required before Phase 1d starts)

Define before execution. Avoid SaaS platform sites (Doctolib) — use actual local clinic/studio/garage sites in Berlin or comparable German market.

### Decision 3 — Phase 2 CHECKLIST.md additions: universal or vertical-scoped? (Required before Phase 2 starts)

Vertical-scoped (recommended) vs flat universal gates. Flat gates will incorrectly flag dark-theme and industrial clients.

---

## 7. Risk register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Third reference impl splits canonical scaffold | High if Option B chosen | High | Choose Option A (extend solo-barber) |
| Ambient video violates page-weight budget | High if shipped without constraints | High | Mandatory conditional-load + poster-first in spec + PERFORMANCE.md update |
| Inverted h1/h2 adopted for local-business clients | Medium if no hard restriction | High | Hard restriction in DESIGN-BEST-PRACTICES.md §4 + SEO.md cross-reference |
| Token naming inconsistency between study and existing convention | High if not reconciled in Phase 2 | Medium | Rename to `--color-*` prefix during Phase 2 |
| Phase 1b over-promises GSAP/WebGL animation capture | Medium | Low | Pre-scope in Phase 1b plan |
| Phase 1d scope ambiguity wastes session time | Medium | Low | Define 8 URLs before starting |
| WCAG failures in per-character DOM split component | Medium if not caught at spec stage | Medium | Explicit WCAG section required in every spec sheet |

---

## 8. Execution readiness by phase

| Phase | Ready to start? | Blocker |
|---|---|---|
| Phase 1c — unblock HBA + Bulgari | ✅ Yes | None |
| Phase 1b — animation specs | ✅ Yes (with Improvement 1 caveat) | None |
| Phase 1a — mobile re-audit | ✅ Yes | None |
| Phase 1d — health/edu/auto audit | 🟡 After Decision 2 | 8 specific URLs need to be defined |
| Phase 2 — doc integration | 🟡 After Decision 3 | CHECKLIST.md gate scope needed |
| Phase 3a — spec sheets | ✅ Yes (after Phase 2) | None once Phase 2 done |
| Phase 3b — working components | 🔴 After Decision 1 | Third impl vs extend solo-barber |
| Phase 4 — maintenance process | ✅ Define now, run incrementally | None |

---

## 9. Summary scores

| Area | Score | Key reason |
|---|---|---|
| Strategic direction | ✅ Strong | Correct targets, correct insertion points, fits existing agency conventions |
| Phase 1 (data gaps) | ✅ Solid | Well-scoped; Phase 1d needs URL definition before starting |
| Phase 2 (doc integration) | 🟡 Needs 3 additions | Missing fixed-viewport SPA ban; token naming mismatch; CHECKLIST.md gate scope unclear |
| Phase 3a (spec sheets) | ✅ Solid | Right structure; needs explicit WCAG cross-reference in spec sheet template |
| Phase 3b (components) | 🔴 Decision pending | Third-impl vs extend-existing is the single most consequential open question |
| Phase 4 (maintenance) | 🟡 Underspecified | Needs PENDING.md entries and BRIEF.md template update |
| Compliance vs existing docs | 🟠 Two conflicts | PERFORMANCE.md (ambient video budget) + SEO.md (inverted h1 risk) need resolution in Phase 2 |

---

*Audit complete. Plan is strong overall. Three decisions block Phase 3b, Phase 1d, and Phase 2 respectively. All Phase 1a/1b/1c work can start immediately following the recommended execution order.*
