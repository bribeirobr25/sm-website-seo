# CLIENTS-RESTRUCTURE-PLAN-AUDIT-2026-05-19.md
## Audit of CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md

**Auditor:** Claude (independent review)
**Date:** 2026-05-19
**Plan version reviewed:** Initial
**Status:** Plan is strategically sound — one significant factual error, one architectural risk, and two compliance gaps require resolution before Phase 1 starts
**Files read:** CLIENTS-RESTRUCTURE-PLAN-2026-05-19.md (full, 785 lines) · PENDING.md (full) · docs/design/components/README.md (full) · docs/design/components/half-pill-cta.md (head) · clients/reference-solo-barber/src/components/ directory tree · clients/reference-studio-booking/src/components/ directory tree · clients/reference-solo-barber/src/pages/ directory tree · TECH.md (tail, §20 template) · search for jean-souza-barber, StickyMobileCta, reference-solo-barber across docs/

---

## 0. Executive summary

The plan correctly identifies the core problem: after the UI/UX Phase 3b work, the canonical components live in `clients/reference-solo-barber/`, which is a dark+amber barber identity scaffold — wrong container for patterns that need to be extracted and reused across any vertical. The Hybrid Option 3 architecture is the right answer. The phase staging (extract first, delete last) is correct.

However, the audit surfaces **one significant factual error** that changes the component inventory, **one architectural risk** the plan doesn't fully address, **two compliance gaps** against existing standards, and **six improvements**.

None are showstoppers. The plan can execute as written after the factual error is corrected and two small pre-flight additions are made.

---

## 1. Verification — what the plan claims vs what actually exists

### 1.1 Component inventory — PARTIALLY WRONG 🔴

**What the plan's §2A table says:** 8 canonical components (HalfPillCTA, LabelCountHeader, HoursInNav, StatCallouts, Section/alternating-bg, MarqueeCTA, EyebrowDisplayHero, SplitText) live in `clients/reference-solo-barber/src/components/` and need to be moved to `docs/design/components/_impl/`.

**What actually exists:** Verified by direct directory listing. All 8 are confirmed present:

| Component | Actual path | Plan's stated path |
|---|---|---|
| HalfPillCTA | `src/components/ui/HalfPillCTA.astro` | ✅ matches |
| MarqueeCTA | `src/components/ui/MarqueeCTA.astro` | ✅ matches |
| SplitText | `src/components/ui/SplitText.astro` | ✅ matches |
| Button | `src/components/ui/Button.astro` | ✅ matches |
| CookieBanner | `src/components/ui/CookieBanner.astro` | ✅ matches |
| Placeholder | `src/components/ui/Placeholder.astro` | ✅ matches |
| ShareButton | `src/components/ui/ShareButton.astro` | ✅ matches |
| EyebrowDisplayHero | `src/components/sections/EyebrowDisplayHero.astro` | ✅ matches |
| LabelCountHeader | `src/components/sections/LabelCountHeader.astro` | ✅ matches |
| StatCallouts | `src/components/sections/StatCallouts.astro` | ✅ matches |
| HoursInNav | `src/components/layout/HoursInNav.astro` | ✅ matches |
| Section (alt-bg) | `src/components/layout/Section.astro` | ✅ matches |

**9 demo pages confirmed at:** `src/pages/demo/` — index + 8 component demos. ✅

**The inventory error: Footer.astro and Header.astro are not in the plan's §2A table.** Both exist at `src/components/layout/Footer.astro` and `src/components/layout/Header.astro`. The plan tables only Header.tsx and Footer.tsx (Tier 3 React versions, §2B items 46). The Tier 2 Astro versions are present in `clients/reference-solo-barber/src/components/layout/` and are NOT listed in §2A, which means they have no stated disposition. If Phase 6 deletes `clients/reference-solo-barber/` without extracting these, they are lost.

**Impact:** Footer.astro likely contains the DE legal disclosure link pattern + WhatsApp CTA positioning + social links layout. Header.astro contains the nav structure with HoursInNav integration. Both are "🔴 only in code" items by the plan's own classification.

**Resolution:** Add two rows to §2A:

| # | Artifact | Scope | Doc'd? | Disposition |
|---|---|---|---|---|
| NEW-A | `src/components/layout/Footer.astro` | Tier 2 (Astro) | 🔴 | Move → `docs/design/_impl/components/Footer.astro` |
| NEW-B | `src/components/layout/Header.astro` | Tier 2 (Astro) | 🔴 | Move → `docs/design/_impl/components/Header.astro` |

Also add to Phase 1 diff checks: `diff -q docs/design/_impl/components/Footer.astro clients/reference-solo-barber/src/components/layout/Footer.astro`.

---

### 1.2 Zombie references — PARTIALLY WRONG 🟠

**What the plan says (§4M, §4T):** TECH.md §485 references `clients/jean-souza-barber/src/lib/site.ts`. TECH.md §770 references `clients/jean-souza-barber/src/components/ui/Placeholder.astro`. TECH.md §783 has the StickyMobileCta zombie. DESIGN-BEST-PRACTICES.md §320 references `clients/jean-souza-barber/design.md`.

**What actually exists:** File-system search for `jean-souza-barber` across the entire project returns **zero matches** in the docs/ tree. Either these references were already cleaned up in Batch 0 housekeeping (PENDING.md's "Recently resolved" confirms Batch 0 fixed TECH.md Tailwind v4 contradictions and multiple cross-references), or the plan is pointing at lines that no longer contain those strings.

**StickyMobileCta:** Search returns **zero matches** anywhere in `docs/design/`. The §783 zombie reference does not appear to exist in the current codebase.

**Impact:** Phase 2's §4M (TECH.md lines 485, 770, 783) and §4T (DESIGN-BEST-PRACTICES.md line 320) may be editing lines that no longer contain the described content. The line numbers will drift to different content, and applying the described edits will produce wrong results or no-ops.

**Resolution:** Before Phase 2 executes, verify the specific line content of each §4 item against the actual current file. The plan was authored with line numbers from a specific snapshot; by execution time they may have shifted. This is a general Phase 2 risk, not just for the Jean references — **treat all line numbers in §4 as approximate anchors to search-and-verify, not precise edit targets.**

---

### 1.3 Spec sheet implementation pointers — STALE HEADERS 🟡

**What the plan says:** The 8 component spec sheets' `**Implementation:**` lines (e.g., line 4 of `half-pill-cta.md`) point at `clients/reference-solo-barber/src/components/ui/HalfPillCTA.astro`.

**What actually exists:** Reading `docs/design/components/half-pill-cta.md` line 4:
```
**Implementation:** `clients/reference-solo-barber/src/components/ui/HalfPillCTA.astro` (Phase 3b — pending).
```

The `(Phase 3b — pending)` suffix is stale. The `README.md` in `docs/design/components/` confirms "Phase 3a + 3b are complete." The component is built and present. This stale suffix will cause confusion after the path is updated — a reader will see the new `_impl/` path but the `(Phase 3b — pending)` note will still be there.

**Resolution:** When Phase 2 updates each spec sheet's Implementation line, also strip the `(Phase 3b — pending)` suffix and replace with `(Phase 3b — complete 2026-05-19)` or simply remove the phase reference entirely.

---

### 1.4 PENDING.md current state — accurate

PENDING.md confirms both reference impls live, all batches complete, UI/UX Phases 1a/1b/1c/2/3a/3b/4 complete. The "By next-action owner" table shows the scout items for Breno. The plan's §4B PENDING.md edits are accurate in intent — just the line numbers need verification per Issue 1.2. ✅

---

## 2. Issues — concrete problems requiring resolution

### Issue 1 — Two Tier 2 components missing from §2A inventory 🔴

Detailed above in §1.1. Footer.astro and Header.astro are not in the plan's disposition table. They will be deleted in Phase 6 without extraction unless added.

**Severity:** High. These contain canonical patterns (legal disclosure layout in footer, HoursInNav integration in header) and are classified 🔴 ("only in code") by the plan's own logic.

**Fix:** Add rows NEW-A and NEW-B to §2A. Add to Phase 1 diff checks. Add to Phase 6 pre-deletion grep.

---

### Issue 2 — Line-number drift risk across all of §4 🟠

**Severity:** Medium. Affects Phase 2 execution reliability.

**What the plan does:** §4 provides precise line numbers for every doc edit (e.g., "TECH.md line 485," "DESIGN-BEST-PRACTICES.md line 320," "gastronomy.md line 206"). Many of these were sourced from a specific file snapshot.

**The risk:** Between the plan's authoring and Phase 2 execution, any document that has been modified (TECH.md was modified in Batch 0, Batch 1, and during the UI/UX Phase 2 integration) will have different line numbers. A Claude Code session executing Phase 2 with a str_replace targeting "line 485" will either miss the target or hit the wrong content.

Two specific confirmed misses: the Jean-era references at TECH.md §485, §770, §783 and DESIGN-BEST-PRACTICES.md §320 don't appear in the current docs (likely cleaned in Batch 0 already).

**Resolution:** Phase 2 execution must treat all §4 line numbers as "approximate — search for the content described, don't assume the line number is current." Add to Phase 2 instructions: "For each §4 edit, grep for the quoted old content before applying the replacement. If the content isn't found at the stated line, search the file. If not found anywhere in the file, the item was already resolved — skip it and note in the commit message."

---

### Issue 3 — `scaffolds/` at repo root conflicts with the `clients/` teaching-artifact convention 🟠

**Severity:** Medium. Creates a new naming ambiguity at root level.

**What the plan says:** After Phase 6, `clients/` is preserved as an empty directory with `.gitkeep + README` as a "teaching artifact" (Q10 recommendation). `scaffolds/` is a new top-level directory alongside it.

**The problem:** Two directories at the project root will serve similar purposes from a visitor's perspective — `clients/` is where client code goes, `scaffolds/` is where starter code lives. Root `CLAUDE.md` will need to explain the distinction clearly and consistently. The current CLAUDE.md structure (document table, client roster) doesn't have a natural home for `scaffolds/`.

**The compounding problem:** PENDING.md currently says "Apply scaffold to a real prospect — `cp -r clients/reference-{matching-impl}`..." The plan rewrites this to `cp -r scaffolds/{tier}`. But if future Claude sessions open PENDING.md and see `clients/` mentioned anywhere as a work surface, they may be confused about whether to use `clients/` (teaching artifact, empty) or `scaffolds/` (functional).

**Resolution:** Root `CLAUDE.md` Step 3 rewrite (Phase 3) must be very explicit: "`clients/` is where your client builds live after scaffolding. `scaffolds/` is where you copy FROM. They are not interchangeable." Also add a one-liner to `clients/README.md` (the Q10 teaching artifact file): "This directory is intentionally empty. Scaffold client projects from `scaffolds/astro-tier2/` or `scaffolds/nextjs-tier3/` per CLAUDE.md Step 3, then your new client directory appears here."

---

### Issue 4 — PERFORMANCE.md ambient video constraints not captured in the scaffold 🟠

**Severity:** Medium. Creates a scaffold that can ship a performance violation.

**Context:** The UI/UX Integration Plan Phase 2 added ambient video performance constraints to PERFORMANCE.md (confirmed in PENDING.md: "Phase 2 — PERFORMANCE.md §8 ambient video" was completed). The constraints are: conditional load, poster image as LCP element with `fetchpriority="high"`, loop ≤5s, resolution ≤720p, payload ≤2MB.

**The problem:** The plan's `scaffolds/nextjs-tier3/` destination architecture doesn't include a pre-wired ambient video component with these constraints. If Phase 3b eventually ships a gastronomy-cafe scaffold (per the plan's §3 architecture tree, which still mentions it as part of the hybrid), the ambient video pattern will be in code without the mandatory guards.

**Resolution:** The component spec sheet for ambient autoplay video (if one is added in future UI/UX plan phases) must enforce the conditional-load prop as non-optional. This is a reminder, not an immediate Phase 1 blocker — but it should be noted in the `scaffolds/README.md` as a known pattern that requires PERFORMANCE.md §8 compliance when video is introduced.

---

## 3. Compliance gaps against core standards

### Gap A — `docs/design/_impl/` naming convention conflicts with TECH.md "no underscores in URL slugs" rule 🟡

**Severity:** Low. Convention inconsistency, not a functional problem.

**What TECH.md says (§6 Naming conventions):** "URL slugs are lowercase, hyphenated. Never underscores."

**What the plan proposes:** `docs/design/_impl/` and `docs/design/components/_impl/` — both use leading underscores. The underscore convention is inherited from the `_demo/` directory precedent, which is valid for "not-a-route, support directory" semantics. But TECH.md's underscore prohibition is stated for URL slugs specifically, not for directory names in general. The plan's underscore usage is not for URLs — it's for internal documentation directories.

**Verdict:** No real conflict. The TECH.md rule applies to URL-facing paths (routes, slugs). `docs/design/_impl/` is a filesystem directory in a documentation tree, never a URL. No change required, but the `_impl/README.md` should note: "The underscore prefix follows the `_demo/` convention: it signals 'support directory, not primary content, not a URL route.'"

---

### Gap B — Phase 4 cross-vertical matrix adds §9 to health/education/automotive templates but they have no existing §11.8 schema blocks yet 🟡

**Severity:** Low. Creates an inconsistency in template completeness.

**What the plan says (Phase 4):** "Add §9 cross-applicable-pattern sections to health / education / automotive."

**What PENDING.md confirms:** The 12 vertical templates each have §11.1–§11.9 (Measurements, KPIs, integrations, share, schema, GBP) — confirmed shipped in Batch 2–3. The three gap-vertical templates (health, education, automotive) got §11.8 paste-ready schema blocks in Batch 3 MVP.

**The gap:** Phase 4 adds §9 (Reference site annotations — the 24-site study cross-applicable patterns) to these three templates. But §9 in the other templates (gastronomy, beauty, trades, etc.) contains measured site data — specific pixel values, font sizes, color tokens — from the reference study. The §9 additions for health/education/automotive in Phase 4 are crossover patterns from other verticals' reference sites (Marvell for trades → health, Horeca for pro-services → education). These are derivations, not primary measurements.

**Resolution:** Each §9 addition should be clearly labeled "Cross-applicable pattern (derived from [source vertical] reference — not a native health/education/automotive measured site)" to distinguish from primary measurements. This avoids future confusion when Phase 1d eventually adds category-native health/edu/auto sites and the §9 sections look like they contain measured data when they actually contain inferences.

---

## 4. The 10 open questions — assessment of agent recommendations

All 10 recommendations are sound. Three have nuances worth noting:

| Q | Agent's rec | Assessment |
|---|---|---|
| Q1 — Hybrid vs pure-docs/ | Hybrid ✅ | Correct. The build-validated property of scaffolds/ is essential. |
| Q2 — `_impl/` naming | `_impl/` ✅ | Correct. Short, signal-bearing underscore prefix, no collision. |
| Q3 — StickyMobileCta zombie | Remove in restructuring, build later in PENDING.md | ✅ But note: the zombie may already be gone (search returned zero matches). Verify before Phase 2. |
| Q4 — Cross-vertical matrix scope in Phase 4 | Yes, fold into Phase 4 | ✅ Same conceptual work, right to batch together. |
| Q5 — Check in scaffold lockfiles | Yes | ✅ Reproducible builds. Quarterly refresh per R1. |
| Q6 — Keep `_demo/` pages | Yes | ✅ Essential for visual regression prevention. |
| Q7 — Embed Tier-3 route.ts in FORMS.md | Yes | ✅ Redundancy is cheap insurance on the most complex integration. |
| Q8 — Archive banner wording | One-liner status header | ✅ Matches existing archived/ convention. |
| Q9 — Node 22 before Phase 1 | Confirm `nvm use 22` first | ✅ Non-optional. astro-tier2 scaffold won't build on Node 21. |
| Q10 — Keep empty `clients/` | Keep with README | ✅ Teaching artifact. But see Issue 3 — the README must be very clear about the clients/ vs scaffolds/ distinction. |

**One nuance on Q3:** If the search confirms the StickyMobileCta and Jean references are already gone (which the file-system search suggests), Phase 2 should skip those items and add a note in the commit: "§4M items pre-resolved in Batch 0 — no edit needed." Don't apply phantom edits to lines that no longer contain the old content.

---

## 5. Risk register — additions and amendments to the plan's §7

The plan's 14 risks are well-identified and mitigated. Three additions:

### R15 — Phase 1 extraction misses Footer.astro + Header.astro (Tier 2 Astro)

**Failure mode:** Phase 6 deletes `clients/reference-solo-barber/` including `layout/Footer.astro` and `layout/Header.astro`. These are not in §2A and not added to `docs/design/_impl/`. Two canonical Astro layout components are permanently lost.

**Mitigation:** Add to §2A (Issue 1). Add to Phase 1 extraction. Add to Phase 6 pre-deletion grep: `ls clients/reference-solo-barber/src/components/layout/` → confirm all 4 files have documented dispositions before deletion runs.

### R16 — Phase 2 line-number drift causes phantom edits

**Failure mode:** A Claude Code session executing Phase 2 runs str_replace against line numbers that have shifted. The replacement either hits the wrong content or fails silently if the content isn't found at the given line.

**Mitigation:** Add to Phase 2 pre-flight: "grep for the described old content before editing. If not found, skip and document in commit message." Apply to all 21 files listed in §4. Especially critical for TECH.md (modified multiple times since any line-number snapshot) and DESIGN-BEST-PRACTICES.md.

### R17 — `scaffolds/` maintenance burden is understated vs reference impls

**Failure mode:** The plan says scaffolds "replace reference impls as the build-validation gate." But reference impls were built to prove rules; scaffolds are built to be copied. The maintenance model differs: a reference impl can have per-client content that serves as proof; a scaffold must stay content-neutral. If a session accidentally adds barber-specific or studio-specific content to a scaffold, it degrades the scaffold's usefulness.

**Mitigation:** Add to `scaffolds/README.md` a "What must NOT be in this scaffold" section: no client-specific copy, no client-specific palette values, no client-specific photos, no client domain. All of these must come from the real client project. The `site.example.ts` with TODO placeholders is the correct model.

---

## 6. Improvements — not required but worth doing

### Improvement 1 — Add a Phase 0 inventory verification step

Before any file moves in Phase 1, run a 15-minute inventory check: `ls -la clients/reference-solo-barber/src/components/**/*.astro` and compare to §2A. This catches any files added since the plan was authored (like Footer.astro and Header.astro — already found by this audit) before extraction begins.

### Improvement 2 — `tokens.canonical.css` should be TECH.md §7 verbatim

The plan creates `docs/design/_impl/styles/tokens.canonical.css` as "the full canonical `@theme {}` block." But TECH.md §7 is already the stated canonical token source. If `tokens.canonical.css` diverges even slightly from TECH.md §7, future sessions will have two competing token references.

**Suggested fix:** `tokens.canonical.css` should include a JSDoc: `/* This file is the EXECUTABLE FORM of TECH.md §7 token canon. If these diverge, TECH.md §7 wins. Sync quarterly per R1. */` This makes the relationship explicit and the hierarchy unambiguous.

### Improvement 3 — `scaffolds/` should include the CHECKLIST.md pre-flight steps for new client setup

Root `CLAUDE.md` Step 3 (Phase 3 rewrite) will document the scaffold workflow. But CHECKLIST.md §0 "Pre-flight" currently references the noindex step, real domain setup, and env vars. These are the same steps a developer needs when starting from a scaffold.

Add to `scaffolds/README.md` a "New client setup — after copying the scaffold" section that points to CHECKLIST.md §0 Pre-flight. This makes the scaffold self-contained enough that a developer doesn't need to hunt through CLAUDE.md.

### Improvement 4 — Phase 3b of the UI/UX Plan had an outstanding audit recommendation: Decision 1 (third ref impl vs extend solo-barber)

The UI/UX Integration Plan Audit recommended Option A (extend solo-barber's components/ instead of creating a third reference impl). The CLIENTS-RESTRUCTURE-PLAN implicitly resolves this in favor of Option A — by moving all components to `docs/design/components/_impl/` and NOT creating a reference-gastronomy-cafe impl. This is the right call. But the UI-UX-INTEGRATION-PLAN-AUDIT-2026-05-18.md currently still shows Decision 1 as "pending." The Phase 7 wrap-up should add an amendment-log note to that audit file: "Decision 1 resolved 2026-05-19 by CLIENTS-RESTRUCTURE-PLAN — Option A adopted implicitly (components moved to `docs/design/components/_impl/`, no third reference impl created)."

### Improvement 5 — Add a §3 destination mapping for the 4 per-client content-only pages

The plan correctly marks the barber-specific page content (Hero.astro, Services.astro, Gallery.astro, Reviews.astro, About.astro, Visit.astro, index.astro, site.ts) as "Delete — not canonical." But the studio-booking equivalent section content (Hero.tsx, Classes.tsx, Pricing.tsx, Instructors.tsx, About.tsx, Visit.tsx, stundenplan/page.tsx, kurse/page.tsx, trial/page.tsx, page.tsx) also needs explicit "Delete" marking in §2B. The plan has §2B item 54 covering some of these ("per-client content — Delete") but the full list in §2B is less comprehensive than §2A's per-file table.

### Improvement 6 — Phase 6 commit message should reference the full diff-check results

The plan's Phase 6 verification gates include `diff -q` checks confirming extracted files are byte-identical. The commit message for the Phase 6 delete commit should include the diff-check output (or a summary: "All 14 extracted Tier-2 files and 12 Tier-3 files confirmed byte-identical before deletion"). This makes the deletion auditable from git history without needing to re-run the checks.

---

## 7. Verdict

**Plan is approved with two pre-Phase-1 additions:**

| Priority | Action | Phase |
|---|---|---|
| 🔴 Before Phase 1 starts | Add Footer.astro + Header.astro (Tier 2 Astro) to §2A inventory with `docs/design/_impl/components/` disposition | Pre-flight |
| 🔴 Before Phase 1 starts | Run inventory verification: `ls -la clients/reference-solo-barber/src/components/**/*.astro` and confirm all files have a §2A disposition before extraction begins | Phase 0 |
| 🟠 Before Phase 2 starts | Treat all §4 line numbers as approximate — grep for content before applying edits; skip any that are already resolved | Phase 2 instruction |
| 🟠 Before Phase 3 starts | Add explicit `clients/` vs `scaffolds/` distinction to `clients/README.md` and root CLAUDE.md Step 3 | Phase 3 |
| 🟡 During Phase 7 | Add amendment-log note to UI-UX-INTEGRATION-PLAN-AUDIT resolving Decision 1 (Option A adopted) | Phase 7 |
| 🟡 During Phase 7 | Add "Cross-applicable pattern (derived)" labeling to health/education/automotive §9 additions | Phase 4/7 |

---

## 8. Summary scores

| Area | Score | Key reason |
|---|---|---|
| Strategic direction | ✅ Strong | Hybrid Option 3 is correct; phase staging is correct; extract-before-delete is correct |
| §2A component inventory | 🔴 Incomplete | Footer.astro + Header.astro (Tier 2) missing from disposition table |
| §2B Tier-3 inventory | ✅ Comprehensive | All Tier-3-only patterns correctly identified; asymmetric-risk items flagged |
| §4 doc cross-references | 🟠 Line-number risk | Line numbers may have drifted; Jean/StickyMobileCta references appear pre-resolved |
| Phase 1–3 staging | ✅ Solid | Each phase independently revertable; verification gates are appropriate |
| Phase 4 cross-pollination | 🟡 Minor labeling gap | §9 additions to gap verticals should be labeled as derivations, not primary measurements |
| Risk register | ✅ Comprehensive | 14 items well-identified; 3 additions (R15 Footer/Header, R16 line-drift, R17 scaffold purity) |
| Q1–Q10 open questions | ✅ All sound | Agent recommendations are all correct; Q3 may be moot (zombie already resolved) |
| Compliance vs standards | ✅ Mostly clean | _impl/ underscore not a real violation; ambient video constraint noted but not blocking |

---

*Audit complete. Two pre-Phase-1 actions required: Footer.astro + Header.astro must be added to the §2A inventory, and a quick directory scan must confirm no other files are missing before extraction begins. All other issues can be resolved during the relevant phase.*
