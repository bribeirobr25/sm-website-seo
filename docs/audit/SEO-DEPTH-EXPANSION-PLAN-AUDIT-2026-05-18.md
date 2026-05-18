# SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md
## Audit of SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md — Complete Audit Record

**Auditor:** Claude (multi-round review)
**Plan versions reviewed:** Revision 1 → Revision 2 → Revision 3 → Revision 4 → Revision 5
**Final status:** Plan approved (Revision 5 · APPROVED 2026-05-18). Hotfix ready to execute.
**Document purpose:** Cumulative audit record across all five revisions. Each section is additive — earlier findings that were incorporated are marked ✅ RESOLVED. Outstanding items are marked with severity.

---

## Table of contents

- [§1 — Original audit (Revision 1 plan)](#1-original-audit-revision-1-plan)
- [§2 — Issues requiring resolution](#2-issues-requiring-resolution)
- [§3 — Gap analysis](#3-gap-analysis)
- [§4 — Compliance check](#4-compliance-check)
- [§5 — Improvements](#5-improvements)
- [§6 — Risk assessment](#6-risk-assessment)
- [§7 — Original verdict](#7-original-verdict)
- [§8 — Addendum: deeper read findings (all 12 templates + full checklists)](#8-addendum-deeper-read-findings)
- [§9 — Revision 2 audit](#9-revision-2-audit)
- [§10 — Revision 3 audit](#10-revision-3-audit)
- [§11 — Revision 4 audit](#11-revision-4-audit)
- [§12 — Revision 5 audit (final)](#12-revision-5-audit-final)

---

## 1. Original audit (Revision 1 plan)

**Files read:** SEO.md (§1–6), CHECKLIST.md (§0–1.5), KPI.md (§0–taxonomy), ANALYTICS.md (§0–rules), LEGAL.md (§0–jurisdiction mapping), SALES.md (§0–finding prospects), INTEGRATIONS.md (§0–rules), CLAUDE.md (full), PENDING.md (full), templates/gastronomy.md (full).

### 1.1 Verification — plan claims vs docs

Both compliance hotfix claims confirmed correct against current SEO.md §5:
- **FAQPage rich result deprecation:** SEO.md §5 had no mention of the 2026-05-07 deprecation. Fix accurate and necessary.
- **`aggregateRating` self-serving prohibition:** SEO.md §5.3 conditioned inclusion on "owner consent" — not the structural ban Google's policy requires. Fix accurate and necessary.
- **Gastronomy template §11.8 stub:** confirmed `aggregateRating` directly on `Restaurant` node. Fix necessary.
- **Plan's §1.1 checklist of "what SEO.md covers well":** all 16 items verified accurate.
- **Plan's §1.2 three operational gaps:** all three confirmed absent from the standards library.

---

## 2. Issues requiring resolution

### Issue 1 — Pre-batch hotfix scope was incomplete: gastronomy.md §11.8 🔴 → ✅ RESOLVED in Revision 2
**Original finding:** plan scoped hotfix to only SEO.md §5.3 and §5.4. gastronomy.md §11.8 had the same violation and was deferred to Batch 3 — a propagation risk for any gastronomy client scaffolded during Batch 1–2.
**Resolution:** Revision 2 expanded hotfix to include all 3 violating templates. ✅

### Issue 2 — DE review-request templates: legal gate was a footnote, not a hard blocker 🔴 → ✅ RESOLVED in Revision 2
**Original finding:** The "real client legal review still required" was buried in §10 Risks. LEGAL.md had no framing for post-service outbound comms. No CHECKLIST.md production blocker.
**Resolution:** Revision 2 added a DRAFT marker to §8.4.5 DE template, a 🔴 CHECKLIST.md production blocker, and a LEGAL.md §DE "Post-service communications" Bestandskunden note. ✅

### Issue 3 — `review_count_30d` KPI had no practical data source for most retainer tiers 🟠 → ✅ RESOLVED in Revision 2
**Original finding:** Plan listed "PostHog SQL or GA4 custom event source: monthly GBP scrape via GBP API" — neither practical below €500/mo retainer. PostHog has no native GBP integration.
**Resolution:** Revision 2 defined per-tier data sources (manual / BrightLocal / GBP API) and removed PostHog SQL from the recipe. ✅

### Issue 4 — CITATIONS.md §3 Sellwerk warning conflated three distinct auto-renewal traps 🟠 → ✅ RESOLVED in Revision 2
**Original finding:** "Sellwerk" umbrella collapsed Gelbe Seiten, Das Örtliche, and 11880 with different mechanics and cancellation paths.
**Resolution:** Revision 2 split into a per-directory trap table. ✅

### Issue 5 — Reference implementation file paths in §6 were assumed 🟠 → ✅ RESOLVED in Revision 2
**Original finding:** Paths like `src/lib/seo.ts` (wrong) listed without verification.
**Resolution:** Revision 2 verified paths via directory scan and corrected `src/lib/seo.ts` → `src/lib/seo/schema.ts`. ✅

### Issue 6 — US legal scope ambitious for a Berlin solo agency 🟡 → ✅ RESOLVED (not applicable to this plan)
**Original finding:** Noted as strategic scope concern in LEGAL.md context (different plan). Not directly applicable here. Acknowledged.

---

## 3. Gap analysis

### Gap A — TECH.md product-type matrix missing citation/review as standard deliverables 🟠 → ✅ RESOLVED in Revision 2
Added footnote to §1 product-type matrix: citation-building per CITATIONS.md + review-link setup per SEO.md §8.4 as standard production-cutover deliverables. ✅

### Gap B — LEGAL.md missing post-service communications cross-reference 🟠 → ✅ RESOLVED in Revision 2
Added "Post-service communications" Bestandskunden note to LEGAL.md §DE. ✅

### Gap C — CHECKLIST.md missing vanity redirect end-to-end test 🟡 → ✅ RESOLVED in Revision 2
Added 🔴 production blocker: vanity review redirect tested end-to-end (HTTP 301 verified, destination resolves to correct GBP review URL). ✅

### Gap D — SALES.md §10 missing 6-month citation refresh cadence 🟡 → ✅ RESOLVED in Revision 2
Added semi-annual citation audit to §10 retainer deliverables. ✅

---

## 4. Compliance check

All compliance checks from the original audit remain valid. Key items:

- **vs TECH.md dependency management:** CITATIONS.md adds no new technical dependencies. ✅ Compliant.
- **vs ANALYTICS.md "three streams" rule:** `review_count_30d` sourced from GBP Insights (manual/BrightLocal/API), not a new analytics stream. ✅ Compliant.
- **vs LEGAL.md consent rules:** Schema and citation changes don't involve user data collection. Review templates do — legal gate now enforced via CHECKLIST.md. ✅ Compliant.
- **vs CHECKLIST.md phase legend:** All review/citation/schema deliverables correctly scoped as production gates. ✅ Compliant.
- **vs SALES.md retainer pricing:** Tool cost pass-through clarified in SEO.md §8.4.8. ✅ Compliant.

---

## 5. Improvements

| # | Improvement | Status |
|---|---|---|
| 1 | Add "Month 1 review sprint" 5-step box to SALES.md §10 | ✅ RESOLVED in Revision 2 |
| 2 | Add "review drought alert" 21-day threshold to SEO.md §8.4.3 | ✅ RESOLVED in Revision 2 |
| 3 | Add berlin.de to CITATIONS.md §3 as Berlin-specific must-claim | ✅ RESOLVED in Revision 2 |
| 4 | Pre-validate @graph root pattern before Batch 3 authoring (30-min gate) | ✅ RESOLVED in Revision 2 — pre-flight validation gate added to Batch 3 |
| 5 | Add competitor citation presence column to CITATIONS.md §4 | ✅ Correctly deferred — needs real Berlin SERP data (≥2–3 clients per vertical). Logged in PENDING.md as trigger-gated. |

---

## 6. Risk assessment

All original risks captured. Key ones resolved by subsequent revisions:

| Risk | Resolution |
|---|---|
| gastronomy/beauty/studio schema propagation | ✅ Hotfix expanded to 3 templates |
| DE review templates trigger UWG liability | ✅ DRAFT marker + CHECKLIST.md blocker + LEGAL.md note |
| `review_count_30d` data source ambiguous | ✅ Per-tier definition added to KPI.md |
| Sellwerk traps conflated | ✅ Per-directory breakdown added |
| Reference-impl paths wrong | ✅ Verified and corrected |
| Schema cookbook blocks rot | Ongoing — "validated on YYYY-MM-DD" per block + 6-month re-validation SOP |
| @graph RRT inconsistency | ✅ Pre-flight validation gate added |
| Full-scope schema effort overrun (NEW in Rev 5) | ✅ Companion-file pattern + checkpoint after first 6 blocks added to §10 risks |

---

## 7. Original verdict

Issued as: "Plan ready to execute after five items resolved." All five items resolved in Revision 2. ✅

---

## 8. Addendum: deeper read findings (all 12 templates + full checklists)

*Added after reading SEO.md §7–16 complete, CHECKLIST.md §2–9 complete, and scanning all 12 vertical templates §11.8.*

### Addendum Finding 1 — `aggregateRating` violation in THREE templates, not one 🔴 → ✅ RESOLVED in Revision 2
Full template scan confirmed violation in gastronomy.md, beauty.md, and studio.md. All three patched in hotfix. ✅

### Addendum Finding 2 — studio.md §11.8 uses non-existent `YogaStudio` @type 🔴 → ✅ RESOLVED in Revision 2
Fix included in hotfix: `YogaStudio` → `SportsActivityLocation`. ✅

### Addendum Finding 3 — CHECKLIST.md §3 and SEO.md §14 carried stale `aggregateRating` condition 🟠 → ✅ RESOLVED in Revision 2
Both updated to reflect the self-serving ban. ✅

### Addendum Finding 4 — CHECKLIST.md §3 FAQPage item should note SERP deprecation 🟡 → ✅ RESOLVED in Revision 2
Parenthetical added: FAQPage no longer produces SERP rich result as of 2026-05-07. ✅

### Addendum Finding 5 — SEO.md §8.4 is ~40 lines, not 29 🟡 → Immaterial
Plan's expansion target (275 lines across 9 sub-sections) is the meaningful number. Discrepancy noted, no action needed. ✅

**Updated hotfix scope from addendum:** 7 files (5 markdown + 2 additional stale checklist conditions). Subsequently expanded further by §9.

---

## 9. Revision 2 audit

*All 5 original issues incorporated. All 4 gaps closed. All 5 improvements addressed. One new critical issue discovered.*

### R2 Issue 1 — Reference implementation code carries both violations; hotfix was docs-only 🔴 → ✅ RESOLVED in Revision 3

**What was found:** Reading both reference impl TypeScript files revealed:
- `clients/reference-solo-barber/src/lib/seo/schema.ts`: conditional `aggregateRating` block (`if (SITE.reviews.approvedForDisplay)`) directly on `BarberShop` LocalBusiness node — the self-serving pattern the hotfix bans.
- `clients/reference-studio-booking/src/lib/seo/schema.ts`: `'@type': 'YogaStudio'` (non-existent) + function named `yogaStudioSchema`.

**Why critical:** The reference impls are the canonical scaffold source. Patching docs but not code means every future scaffold inherits the violations regardless of doc updates.

**Resolution:** Revision 3 added two new hotfix rows (items 9 and 10) for both TypeScript files. Effort updated to ~85–100 min. ✅

### R2 Issues 2–4 — Correct but framing sharpened in R3 (see §10)

---

## 10. Revision 3 audit

*All R2 findings incorporated. R3 Issue 1 is the most consequential new finding.*

### R3 Issue 1 — Hotfix row 10 named callsite generically; specific file and lines were known 🔴 → ✅ RESOLVED in Revision 4

**What was found:** Reading `src/app/layout.tsx` revealed exactly one callsite:
```typescript
// Line 4 — import
import { yogaStudioSchema } from '@/lib/seo/schema';
// Line 46 — call
const schema = JSON.stringify(yogaStudioSchema());
```
Plan said "update any callsites in `src/app/`" — generic. The specific file and lines were known and should be named.

**Resolution:** Revision 4 incorporated this with corrected line numbers (line 4 import, line 46 call — R3 audit had said lines 3 and 44, off by 1–2). ✅

### R3 Issue 2 — Solo-barber `aggregateRating` line numbers claimed as "starting ~line 53" 🟡 → ✅ RESOLVED in Revision 4 (with correction)

**What was found by this audit:** The comment `// aggregateRating only rendered when owner-approved` is at line 60, and the `if` guard is line 61. The R3 audit incorrectly said the block "begins around line 53."

**Resolution:** Revision 4 verified via direct file read — confirmed line 60 is the comment, line 61 is the `if` guard. Revision 4's "lines 60–64" was correct all along. Revision 4 also adopted the improvement of using the comment as a content anchor alongside the line number. ✅

### R3 Issue 3 — Studio-booking line numbers verified correct 🟢 → ✅ Confirmed
Line 19 (function) and line 31 (`@type`) both verified exactly correct. No change needed. ✅

---

## 11. Revision 4 audit

*All R3 findings incorporated with one counter-correction on solo-barber line numbers (R4 was right, R3 was wrong). Plan fully ready. §8 open decisions pending.*

### Revision 4 summary — what changed

1. **🔴 R3 Issue 1 adopted with line-number correction:** Row 10 now names `src/app/layout.tsx` line 4 (import) and line 46 (function call) as the single known callsite. R3 said lines 3 and 44; R4 verified lines 4 and 46 via grep. Correct.

2. **🟡 R3 Issue 2 — audit's premise rejected, improvement adopted defensively:** R3 claimed block starts at "~line 53." R4 verified it starts at line 60 (comment) / line 61 (if guard). R3 was wrong; R4's original "lines 60–64" was correct. R4 adopted the content-anchor improvement defensively regardless.

3. **🟢 R3 Issue 3 confirmed:** Lines 19 and 31 both exact. No change. ✅

### Revision 4 state: clean
No new issues introduced by Revision 4. Plan was fully accurate and ready to execute pending §8 decisions.

---

## 12. Revision 5 audit (final)

*Triggered by Breno resolving all §8 open decisions on 2026-05-18. Plan status changed from DRAFT to APPROVED.*

**Files read for this audit round:** Full Revision 5 plan · layout.tsx (re-verified) · solo-barber schema.ts (re-verified) · studio-booking schema.ts (re-verified).

### 12.1 Verification of §8 decisions as incorporated

All 7 decisions confirmed incorporated correctly:

| Decision | Plan's claim | Verified |
|---|---|---|
| #1 Full schema scope (40 blocks) | Batch 3 effort bumped to 22–28 hrs; total plan 40–48 hrs | ✅ Reflected in header + §9 Batch 3 criteria |
| #2 CITATIONS.md as separate doc | Confirmed | ✅ Appendix A shows new doc |
| #3 DE + EN + PT-BR day-one | +30 min to Batch 1 | ✅ In Batch 1 description |
| #4 PAA seeds in §11.10 | Trigger-gated, confirmed | ✅ Batch 4 unchanged |
| #5 Hotfix as standalone commit | ~85–100 min confirmed | ✅ §12 execution gate |
| #6 Reference-impl updates in Batch 3 | Confirmed | ✅ §6 unchanged |
| #7 PENDING.md incremental | Confirmed | ✅ Unchanged |

### 12.2 Verification of Revision 4 line-number corrections against actual files

**studio-booking `layout.tsx`:** Re-read the file. Import `yogaStudioSchema` is on **line 4**. Function call `yogaStudioSchema()` is on **line 46**. Plan's Revision 4 claim ("line 4 import · line 46 function call") is **exactly correct**. ✅

**solo-barber `schema.ts`:** Re-read the file. The comment `// aggregateRating only rendered when owner-approved` is on **line 60**. The `if (SITE.reviews.approvedForDisplay)` guard is on **line 61**. The closing `}` of the block is on **line 66**. Plan's Revision 4 claim ("lines 60–64" as hint + content anchor) is accurate for the meaningful range. ✅

**studio-booking `schema.ts`:** `export function yogaStudioSchema()` is on **line 19**. `'@type': 'YogaStudio'` is on **line 31**. Both verified exact as in prior rounds. ✅

**Critical note:** `layout.tsx` still shows the un-patched import on line 4 and call on line 46. This is expected — the hotfix has not executed yet. The plan is approved; the code violations are still present in the repo and will be fixed when the hotfix commit runs. This is the correct state.

### 12.3 New issue introduced by Revision 5: one stale reference in the preamble 🟡

**What the plan says in §1.3 "Audit-verified propagation surface" table:**

| # | File | Fix |
|---|---|---|
| 3 | `SEO.md` §8.10 (line 727) | Update stale claim... |

**The problem:** This row still shows `SEO.md §8.10 (line 727)` — the incorrect section label that was explicitly corrected in Revision 3 (R2 Issue 2). The hotfix table in §4 correctly uses the text anchor `### Q&A section (removed November 2025)`. The §9 success criteria also correctly says "no `§8.10` label — search for `### Q&A section (removed November 2025)`". But the §1.3 propagation surface table was never updated and still shows the old bogus label.

**Severity:** Low. The actual execution instructions (§4 hotfix table, §9 success criteria) are both correct. The §1.3 table is a diagnosis/context section, not an execution guide. A developer reading §4 to execute the hotfix will follow the correct anchor. But someone reading §1.3 as a summary will see an inconsistency.

**Resolution:** Update §1.3 row 3 from `SEO.md §8.10 (line 727)` to `SEO.md §8 — Q&A section (paragraph anchor: "### Q&A section (removed November 2025)")`. One-line fix, can be made during the hotfix session before committing.

### 12.4 New issue: Batch 3 success criteria still says "MVP" in one checklist item 🟡

**What §9 Batch 3 success criteria says:**

> "12 paste-ready JSON-LD blocks exist (or up to 40 if Full scope) — one per vertical at MVP"

**The problem:** Breno confirmed Full scope (decision #1). "One per vertical at MVP" is now a contradiction — Full scope means up to 40 blocks (vertical × archetype), not 12. The parenthetical "or up to 40 if Full scope" softens this but the primary claim ("12 paste-ready blocks") describes MVP, not the approved Full scope.

**Resolution:** Update to: "Up to 40 paste-ready JSON-LD blocks exist (Full scope confirmed — one per vertical × archetype combination per §8 #1)." One-line fix.

### 12.5 New issue: Revision 5 changelog says "hotfix: ~85–100 min, 10 fix-locations" but §9 hotfix criteria lists 11 checklist items 🟡

**What the Revision 5 changelog says:** "~85–100 min (10 fix-locations across 5 markdown files + 2 TypeScript files)"

**What §9 pre-batch hotfix success criteria actually lists:** Counting the checkboxes:
1. SEO.md §5.3
2. SEO.md §5.4
3. SEO.md §8 Q&A block
4. SEO.md §14
5. CHECKLIST.md §3
6. gastronomy.md §11.8
7. beauty.md §11.8
8. studio.md §11.8
9. clients/reference-solo-barber/src/lib/seo/schema.ts
10. clients/reference-studio-booking/src/lib/seo/schema.ts
11. **clients/reference-studio-booking/src/app/layout.tsx** ← added in R3, listed as `NEW (R3)`

That is **11 fix-locations**, not 10. The Revision 5 changelog header still says "10 fix-locations" — it wasn't updated when the `layout.tsx` callsite was promoted from a note inside row 10 to its own explicit success criterion in §9.

**Severity:** Low-medium. The effort estimate (~85–100 min) is still accurate since the `layout.tsx` update was already within the row 10 budget. But the count mismatch (10 vs 11) could cause confusion when verifying completeness.

**Resolution:** Update Revision 5 changelog and plan header from "10 fix-locations" to "11 fix-locations." Also update the Revision 3 changelog (which introduced the callsite as a separate item) from "10 fix-locations" to "11 fix-locations."

### 12.6 Confirmation: no issues with Full scope expansion in §10 risks

Revision 5 adds one new risk for the Full schema scope: "Schema cookbook Full-scope effort overrun — 22–28 hrs is a multi-session commitment." Mitigation is solid: companion-file pattern + validate-first-6-blocks checkpoint before authoring the remaining 34. This is appropriately calibrated. ✅

### 12.7 Confirmation: §8 resolved decisions table is clean

The §8 table is accurate, well-structured, and maps each decision to the binding confirmation. The "APPROVED 2026-05-18" status is consistent throughout the plan header, §8, and §12 execution gate. ✅

---

## 13. Final verdict — Revision 5

**Plan is APPROVED and hotfix-ready. Three minor fixes recommended before the hotfix session closes, but none block execution:**

| Priority | Fix | Location | Effort |
|---|---|---|---|
| 🟡 During hotfix session | Update §1.3 row 3: replace `SEO.md §8.10 (line 727)` with text anchor | Plan §1.3 propagation table | 1 min |
| 🟡 Before Batch 3 starts | Update §9 Batch 3 first criterion from "12 paste-ready blocks" to "Up to 40 paste-ready blocks (Full scope)" | Plan §9 Batch 3 criteria | 1 min |
| 🟡 During or after hotfix | Update all changelog references from "10 fix-locations" to "11 fix-locations" | Plan header + Revision 3 + Revision 5 changelogs | 2 min |

**Everything else in Revision 5 verified correct.** Line numbers in the hotfix table (layout.tsx line 4 + line 46, schema.ts lines 19/31/60) all confirmed accurate against actual source files. All prior audit findings correctly resolved. §8 decisions cleanly incorporated. Effort estimates realistic.

**The pre-batch hotfix can execute immediately.** The three fixes above are cosmetic consistency items that can be made in the same hotfix commit or immediately after.

---

## 14. Cumulative resolution scorecard

| Round | Issues found | Issues resolved by next revision |
|---|---|---|
| Original audit | 5 issues + 4 gaps + 5 improvements | All resolved in Revision 2 ✅ |
| Addendum (deeper read) | 5 findings (3 templates, 2 checklists) | All resolved in Revision 2 ✅ |
| R2 audit | 1 critical (reference impl code) | Resolved in Revision 3 ✅ |
| R3 audit | 1 critical (callsite), 2 cosmetic | Resolved in Revision 4 ✅ (with one counter-correction) |
| R4 audit | 0 new issues — plan clean | — |
| R5 audit (this section) | 3 minor consistency issues | Recommended fixes — none block execution |

**Total across all rounds:** 12 issues found · 9 resolved before this round · 3 minor remaining (all cosmetic, none blocking).

---

*Audit complete. Five revision cycles audited. Plan is in its most accurate and complete form. Pre-batch hotfix approved to execute.*
