# SEO Depth Expansion Plan
## sm-website-seo · 2026-05-18

**Author:** Claude (in collaboration with Breno)
**Status:** **APPROVED 2026-05-18** — **Revision 6** incorporates `SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md` §12 R5-audit findings (consistency cleanup): stale `§8.10` label references purged from current-state sections (kept in historical changelog entries), MVP-scope framing residue removed from §2/§3, "10 fix-locations" → "11 fix-locations" everywhere in current-state references (item 10 spans 2 files). Pre-batch hotfix is approved to execute immediately. Batch 1 → Batch 2 → Batch 3 execute in sequence after the hotfix lands.
**Estimated total effort:** **~40–48 hours** across 3 active batches + 1 trigger-gated batch (multi-session). Revised up from Revision 4's 32-40 hr estimate after Breno chose **Full scope (up to 40 archetype-specific JSON-LD blocks)** for Batch 3 instead of MVP — adds ~8-10 hrs.
**Trigger:** Audit-driven gap analysis on 2026-05-18 following the wrap of `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md`. The agency's SEO rules cover the universal layer well (`SEO.md` 1,248 lines · 16 sections · per-vertical §11.x) but are thin on three operational deliverables that move client outcomes in the 60–90 day measurement window: review-generation, citation-building, and per-vertical paste-ready schema.

This plan also closes the **2026 schema compliance fixes** that surfaced during research and were expanded by audits: (a) FAQPage rich result deprecated for all sites on 2026-05-07; (b) self-serving `aggregateRating` on the business's own LocalBusiness is policy-banned. Audit rounds verified these violations propagate beyond `SEO.md` §5 into **3 vertical templates** (`gastronomy.md`, `beauty.md`, `studio.md`), **2 checklist conditions** (`CHECKLIST.md` §3, `SEO.md` §14), **1 stale FAQ visibility claim** in `SEO.md` §8 (paragraph anchor: `### Q&A section (removed November 2025)`), AND **2 reference-impl TypeScript files** (`reference-solo-barber/src/lib/seo/schema.ts` + `reference-studio-booking/src/lib/seo/schema.ts` + the callsite in `src/app/layout.tsx`). Plus `studio.md` §11.8 uses the non-existent `YogaStudio` `@type`. All get fixed pre-Batch-1 as a single standalone commit (~85–100 min), then expanded in Batch 3.

### Revision 6 changelog (2026-05-18, post-R5-audit consistency cleanup)

Incorporates `SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md` §12 findings (R5 audit). Verified against the actual plan file before adopting:

- **🟡 §12.3 adopted** (stale `§8.10` references) — §1.3 preamble + §1.3 propagation surface table + §2 Diagnosis table updated to use the `### Q&A section (removed November 2025)` text anchor. Historical changelog entries (Revision 2 / Revision 3) preserve the `§8.10` mention for audit trail.
- **🟡 §12.4 adopted in full — initial dismissal corrected** — On first pass I claimed the audit's §12.4 was wrong because line 277 in §4 Batch 3 deliverable already reads "~41 paste-ready blocks ... Full scope". That was a confusion between two different sections: §4 Batch 3 *deliverable* (line 277, correct) vs §9 Batch 3 *success criteria* (line 431, stale). The audit was actually right — the success criteria still carried `"12 paste-ready JSON-LD blocks exist (or up to 40 if Full scope) — one per vertical at MVP"` and the pre-flight validation line said `before authoring all 12 blocks`. Both fixed to Full scope. Also updated the §9 success criteria reference to the studio-booking path reconciliation — no reconciliation needed; the two files are unrelated (verified in §6). §2 Diagnosis "What's missing" + §3 strategy "Extended templates" also updated to remove residual MVP framing.
- **🟡 §12.5 adopted** ("10 fix-locations" vs 11 success-criteria items) — §1.3 preamble · §8 decisions table row 5 · §12 execution gate · §9 hotfix success criteria header all updated from "10" to "11 fix-locations" with a note that hotfix table item 10 spans 2 files (`schema.ts` + `layout.tsx`). Historical Revision 3 changelog mention of "10 fix-locations" preserved.

### Revision 5 changelog (2026-05-18, §8 decisions resolved)

All 7 open decisions in §8 answered by Breno on 2026-05-18. Confirmed answers now bind execution:

- **§8 #1 — Schema cookbook scope: FULL (up to 40 blocks)** — overrides Revision 4's MVP recommendation. Every (vertical × archetype) combination gets its own paste-ready `@graph` block. Batch 3 effort grows from 14-18 hrs (MVP) to **22-28 hrs (Full)**. Total plan budget grows to 40-48 hrs.
- **§8 #2 — `CITATIONS.md` as separate doc:** confirmed ✅
- **§8 #3 — DE + EN + PT-BR message templates day-one:** confirmed ✅ (+30 min to Batch 1)
- **§8 #4 — PAA seeds in `§11.10` inside each template (trigger-gated):** confirmed ✅
- **§8 #5 — Pre-batch hotfix as standalone commit before Batch 1:** confirmed ✅
- **§8 #6 — Reference-impl updates fold into Batch 3:** confirmed ✅
- **§8 #7 — `PENDING.md` incremental updates per batch:** confirmed ✅
- **Execution scope:** Breno chose **Full plan** (hotfix + Batch 1 + Batch 2 + Batch 3) over hotfix-only or hotfix+Batch-1-only. Aligns with the docs-expansion-before-builds posture from the 2026-05-16 plan.

### Revision 4 changelog (2026-05-18, post-R3-audit)

Incorporates Round 3 audit findings (`SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md` §12). Verified each against actual source files before adopting:

- **🔴 R3 Issue 1 adopted (with corrected line numbers)** — Row 10 was generic about the studio-booking callsite. The audit named `src/app/layout.tsx` lines 3 + 44; actual verification via `grep -rn` shows **line 4 (import) + line 46 (function call)** — audit's numbers were off by 1-2. Row 10 now explicitly names this single known callsite at the verified line numbers and notes that `pnpm build` catches anything else.
- **🟡 R3 Issue 2 — audit's premise rejected, improvement adopted defensively** — Audit claimed the solo-barber `aggregateRating` block "begins around line 53, not line 60." Direct file read shows the block actually starts at **line 60** (the `// aggregateRating only rendered when owner-approved` comment) and the `if` guard is line 61. **My Revision 3 "lines 60-64" was correct, not wrong.** That said: the audit's *improvement* suggestion (use a content anchor instead of line numbers) is still valid — pre-execution edits to any file before the hotfix lands could shift the numbers regardless of whether they're correct today. Row 9 now uses the comment `// aggregateRating only rendered when owner-approved` as the content anchor, with the verified line number as a hint only.
- **🟢 R3 Issue 3 confirmed** — Studio-booking line numbers (19 + 31) verified exact. No change needed.

### Revision 3 changelog (2026-05-18, post-R2-audit)

Incorporates Round 2 audit findings (`SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md` §11):

- **🔴 Hotfix scope expanded again** — reference-impl TypeScript code carries the violations the docs do. Two additional fixes: `clients/reference-solo-barber/src/lib/seo/schema.ts` (remove conditional `aggregateRating` block at lines 60–64) and `clients/reference-studio-booking/src/lib/seo/schema.ts` (rename `yogaStudioSchema` → `sportsActivityLocationSchema`, change `'@type': 'YogaStudio'` → `'SportsActivityLocation'`). **Total hotfix scope: 10 fix-locations across 5 markdown files + 2 TypeScript files. Effort: ~85–100 min (was 60–75 in Revision 2).**
- **§6 studio-booking path corrected** — `src/lib/schema.ts` is the Drizzle ORM database schema (`trial_signups` table); `src/lib/seo/schema.ts` is the canonical SEO file. Revision 2's "consolidate if both exist" wording was wrong and removed.
- **§4 hotfix table — Q&A block reference rewritten** — `SEO.md` has no `§8.10` label (audit R2 Issue 2). Row now points to the `### Q&A section (removed November 2025)` paragraph anchor instead.
- **Appendix A corrected** — `TECH.md` and `LEGAL.md` were shown as "unchanged" but both are modified in Batch 1 (TECH §1 product-type matrix footnote · LEGAL §DE post-service communications note). Appendix A entries updated.
- **§9 Batch 2 success criteria count** — bumped from "5 new citation pre-launch items" to **6** (Canonical NAP · universal · DE-general · berlin.de · vertical-specific · per-directory trap awareness).
- **Month-1 sprint step 4** — DE legal gate promoted from parenthetical to explicit conditional: "DE clients: confirm legal sign-off **BEFORE** proceeding · EN/PT-BR: send directly."

### Revision 2 changelog (2026-05-18)

Incorporates audit findings from `SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md`:

- **Expanded hotfix scope** — from 2 files (SEO.md §5.3 + §5.4) to 5 files / 8 distinct fix-locations including all 3 violating templates + 2 stale checklist conditions + `YogaStudio` → `SportsActivityLocation` correction + 1 stale FAQ-visibility claim (§8.10 line 727)
- **Batch 1 legal gate** — DE review-request template ships as DRAFT pending client legal review; new `CHECKLIST.md` production-blocker; new `LEGAL.md` DE "Post-service communications" note
- **Batch 1 KPI data-source per tier** — `review_count_30d` defined as manual / BrightLocal / GBP API by retainer tier; PostHog SQL removed (no native GBP integration)
- **Batch 1 tool cost pass-through** — `SEO.md` §8.4.8 clarifies SMS/review-tool costs pass through to the client at €300+/mo retainers, not absorbed in the retainer fee
- **Batch 1 drought-alert SLA** — `SEO.md` §8.4.3 encodes the 21-day "review drought" threshold + retainer SLA
- **Batch 2 per-directory trap mechanics** — Gelbe Seiten / Das Örtliche / 11880 / meinestadt split into a per-directory table (was previously collapsed under "Sellwerk")
- **Batch 2 berlin.de** — added to `CITATIONS.md` §3 as a Berlin-specific must-claim
- **Batch 2 SALES.md** — 6-month citation refresh cadence + Month 1 review sprint added to §10 retainer deliverables
- **Batch 3 `@graph` pre-validation** — 30-min mock validation before authoring all 12 blocks (prevents re-authoring cycle)
- **Batch 3 file-path verification** — verified reference-impl paths; corrected studio-booking schema path from `src/lib/seo.ts` to actual `src/lib/seo/schema.ts`
- **New CHECKLIST.md production-blocker** — vanity review redirect tested end-to-end (HTTP 301 + correct GBP destination)
- **New `TECH.md` cross-reference** — product-type matrix notes citation + review-link setup as standard production-cutover deliverables
- **Improvement-5 (competitor presence column in `CITATIONS.md` §4) deferred** to a trigger-gated future batch — adds 6 hrs and needs real client SERP data to populate accurately

**Audit findings declined or partially incorporated (with rationale):**

- *Improvement 5 (competitor citation presence column)* — **deferred**, not declined. Needs real Berlin SERP data. Logged in `PENDING.md` as trigger-gated.
- *Issue 5 (file path verification)* — **partially incorporated**. I verified the paths myself rather than scheduling a 5-min step at Batch 3 start. Both reference impls were scanned 2026-05-18; studio-booking schema path corrected in §6. A re-verification step at Batch 3 start remains in the success criteria as belt-and-braces in case files move between now and execution.

**Items where the audit's framing is sharper than mine and the audit text is the canonical record:**

- The audit's `SEO-DEPTH-EXPANSION-PLAN-AUDIT-2026-05-18.md` §3 Gap A/B/C/D and §5 Improvement 1-4 are all now reflected in this plan's batches above. The audit document stays in place as the historical record of which findings drove which plan changes.

---

## 1. Context — why this plan exists

The 2026-05-16 expansion plan closed the legal/measurement/integration gaps. With those load-bearing items shipped, the next-highest gap is **the gap between "what our rules say to do for SEO" and "what actually moves client rankings in 2026."** Audit on 2026-05-18 surfaced three specific operational deliverables we lack:

### 1.1 What `SEO.md` already covers well

- ✅ Local-SEO first principles (3-layer system: site + GBP + off-page)
- ✅ Keyword research workflow (formula · 6-step process · volume triangulation · 3-tier organization)
- ✅ Intent classification + SERP verification loop
- ✅ On-page SEO (title formula · meta · h-hierarchy · URL structure)
- ✅ Schema.org base templates + @type selection table
- ✅ Technical SEO (Core Web Vitals targets · canonical · redirects)
- ✅ Multilingual (hreflang · URL structure · per-language KW)
- ✅ GBP optimization (setup · photos · posts · category · WhatsApp · profile strength)
- ✅ Content strategy (BOFU framing · FAQ-from-PAA · never-invent rule · freshness)
- ✅ AEO (fragment-based content · schema as legibility layer)
- ✅ Metadata implementation (SEO constants file · BaseLayout · OG image)
- ✅ Sitemap + crawlability
- ✅ Measurement (dark local funnel · minimum stack · KPIs · pivot thresholds)
- ✅ Delivery checklist
- ✅ Anti-patterns
- ✅ Per-vertical §11.5/11.8/11.9 (pre-launch verification · schema @type pick · GBP category + keyword pattern)

### 1.2 What `SEO.md` is thin on (this plan closes)

- ❌ **Operational review-generation playbook** — current `SEO.md` §8.4 (29 lines) says reviews are #1 ranking factor and offers a strategy bullet list. No concrete request-message templates, response templates, velocity targets per vertical, channel-conversion table, response-time SLA, or recovery-from-review-purge runbook. The single highest-ROI gap by 2026 weighting.
- ❌ **Local citation-building playbook** — `SEO.md` currently has *no section* on local citations / business-directory listings. No Berlin/DE directory list, no NAP canonical template, no vertical-specific must-claim list, no aggregator vs manual-claim decision rule. Gap is total.
- ❌ **Per-vertical paste-ready schema** — `SEO.md` §5 has a generic LocalBusiness template + @type selection table; per-vertical §11.8 lists 2-3 `@type` choices with a stub example. No `@graph`-rooted, archetype-resolved, paste-and-swap JSON-LD per vertical. Custom-authored per client today.

### 1.3 Critical compliance fixes (out-of-cycle, before Batch 1)

2026 research surfaced two policy-relevant gaps; the audit then verified the violations propagate further than originally scoped. All fixes ship as one standalone hotfix commit before Batch 1 starts.

**The two policy violations:**

- 🔴 **FAQPage rich result deprecated** — Google announced 2026-04 that the FAQPage rich result (SERP accordion) will be removed for **all sites on 2026-05-07** (previously restricted to gov/health since Aug 2023). The schema.org markup itself remains valid and useful for AI Overviews + Gemini ingestion, but no longer produces a SERP feature. Reframe as "AI-extraction signal, not a SERP feature in 2026."
- 🔴 **`AggregateRating` self-serving prohibition** — Google's review-snippet policy is explicit: a business cannot place `aggregateRating` on its *own* `LocalBusiness` schema; only third-party reviewers can. Self-serving aggregateRating is ineligible for SERP stars and risks manual action. Allowed only on `Product` schema (retail/artisan items) when reviews are visible on-page + owner-approved.

**Plus a known-incorrect `@type` flagged by 2026 research and propagated into one template:**

- 🔴 **`YogaStudio` non-existent on schema.org** — `studio.md` §11.8 currently uses `@type: "YogaStudio"` (also listed as a real option at line 509). The schema.org vocabulary has no `YogaStudio` type. Correct pattern is `SportsActivityLocation` + descriptive `name`/`keywords`.

**Audit-verified propagation surface (8 fix-locations across 5 files):**

| # | File | Fix |
|---|---|---|
| 1 | `SEO.md` §5.3 | Rewrite `aggregateRating` rule: never on own `LocalBusiness`; allowed only on `Product` for retail/artisan with visible on-page reviews + owner consent. |
| 2 | `SEO.md` §5.4 | Rewrite FAQ schema section: reframe as AI-extraction-only; SERP rich result deprecated 2026-05-07. Keep JSON-LD example. |
| 3 | `SEO.md` §8 — Q&A section paragraph (anchor: `### Q&A section (removed November 2025)`) | Update stale claim "use FAQPage schema to make it visible in search results" — FAQPage no longer produces a SERP feature. Reframe as "useful for AI extraction." (No `§8.10` label exists in `SEO.md` — `§8` has no numbered decimal subsections.) |
| 4 | `SEO.md` §14 (delivery checklist, lines 1157–1158) | Update: "No `aggregateRating` on own LocalBusiness schema (Product-only; visible reviews + owner consent)" + "FAQPage schema matches visible content (AI-extraction only, no SERP rich result in 2026)" |
| 5 | `CHECKLIST.md` §3 (lines 350–351) | Same two updates as `SEO.md` §14. |
| 6 | `gastronomy.md` §11.8 (line 465) | Remove `aggregateRating` block from the `Restaurant` example. Replace comment with prohibition note. |
| 7 | `beauty.md` §11.8 (line 462) | Remove `aggregateRating` block from the `BarberShop` example. Replace comment with prohibition note. |
| 8 | `studio.md` §11.8 (lines 509, 516, 528) | Replace `YogaStudio` with `SportsActivityLocation` (both in the prose list at line 509 and the JSON example at line 516) AND remove `aggregateRating` block at line 528. |

**Total effort: ~85–100 minutes** (Revision 1 estimated 30 min; R1 audit expanded to 8 locations / 5 markdown files; R2 audit added 2 reference-impl TypeScript files; R3 audit added the explicit `layout.tsx` callsite). **11 fix-locations total** — 10 hotfix table rows where row 10 spans 2 files (the studio-booking schema rename + the matching `layout.tsx` import + callsite update). Still one clean standalone commit.

**Why pre-Batch-1:** without these fixes, any gastronomy/beauty/studio scaffold during the Batch 1 + Batch 2 window propagates policy-violating markup. The Revision 1 approach ("flag for Batch 3 cleanup") left the violation in the live templates for weeks — a 15-minute hotfix expansion closes the propagation window instead.

**Operating principle going forward:** *Spec the rule before scaling the implementation.* No client scaffolding inherits the SEO.md §5 errors; the hotfix gates everything else in this plan.

---

## 2. Diagnosis — gap audit per area

| Area | What we have | What's missing | Severity | Real-world impact |
|---|---|---|---|---|
| **Review generation** | `SEO.md` §8.4 (29 lines, strategy bullets) · per-template §11.1 references reviews as KPI | Operational playbook: TOS 2026 update · request-link mechanics · velocity vs recency weighting · channel/timing decision matrix · message templates DE/EN/PT-BR · response templates 5★/4★/1-3★ · velocity targets per vertical · tools tier per retainer level · purge-recovery runbook | 🔴 | Reviews are the **#1 local-pack ranking factor in 2026** (Whitespark) with velocity overtaking count. Direct client outcome lever. |
| **Local citations** | None | Universal directory list (Apple Maps, Bing, Yelp DE, Facebook, IG) · DE general directories (Gelbe Seiten, Das Örtliche, 11880, meinestadt.de) · vertical-specific must-claims (Jameda for health · Treatwell for beauty · Tripadvisor for gastro · MyHammer for trades) · PT seed (PaginasAmarelas) · BR seed (TeleListas, Apontador) · NAP canonical template · aggregator decision rule (don't pay until €500+/mo retainer) · 6-month refresh cadence | 🟠 | Citations dropped from "top 5 ranking factor" to "hygiene + AI-search input" in 2026, but **industry-specific citations (Jameda, Tripadvisor, Treatwell) still drive direct traffic and bookings independently of rank**. Current zero coverage means every new client wastes 3-4 hours on duplicate research. |
| **Per-vertical schema** | `SEO.md` §5 (base template + @type table) · per-template §11.8 (2-3 @type choices + stub) | **~41 paste-ready `@graph`-rooted JSON-LD blocks** (one per vertical × archetype — Full scope confirmed per §8 #1) · `hasOfferCatalog` pattern · `Person` for solo operators · 3-aspect-ratio image array · `sameAs` linking GBP+IG · `areaServed` for SAB trades · vertical-specific fields (`servesCuisine`, `medicalSpecialty`, `serviceType`, etc.) · FAQ schema reframed as AI-extraction-only · aggregateRating moved off LocalBusiness onto Product-only | 🟡 | Schema is one of the last places where being thorough still wins (rich snippets lift CTR 20-30% below the pack). Current generic stubs leave 80% of the value on the table per client. |
| **2026 schema compliance fixes** (pre-batch) | Current `SEO.md` §5.3 + §5.4 + §8 (Q&A removal paragraph) + §14, `CHECKLIST.md` §3, 3 vertical templates' §11.8, AND 2 reference-impl TypeScript files reflect pre-2026 policy | FAQPage reframe (5 doc locations) · `aggregateRating` self-serving ban (5 doc locations + 1 reference-impl code file) · `YogaStudio` → `SportsActivityLocation` (1 doc location + 1 reference-impl code file + 1 callsite) | 🔴 | Without the hotfix, Batch 3 schema cookbook propagates the error across all 12 verticals AND any gastronomy/beauty/studio scaffold during the Batch 1+2 window inherits policy-violating markup. Manual-action risk on existing reference impls (zero active client builds today). |
| **KPI data-source for `review_count_30d`** (Batch 1) | None — KPI not currently defined | Per-retainer-tier rule: ≤€300/mo = manual owner screenshot · €300–500/mo = manual or BrightLocal · €500+/mo = GBP API via agency Google Cloud project. PostHog has no native GBP integration; "PostHog SQL for GBP" is wrong and must be removed from KPI dashboard tile recipes. | 🟠 | Without per-tier definition, retainer reports would show "review_count_30d: unknown" because no team member knows where the data lives for ≤€300/mo retainers. Practical gap, not policy. |
| **DE review-request legal frame** (Batch 1) | `LEGAL.md` covers Privacy Policy + cookie consent + Impressum. No section on post-service outbound comms (review requests, satisfaction surveys). | UWG §7(2)(b) Bestandskunden exemption framing in `LEGAL.md` §DE · production-blocker in `CHECKLIST.md` (client legal counsel cleared template before mass deployment) · DRAFT marker on `SEO.md` §8.4.5 DE template | 🔴 | Without an explicit legal gate, an agency-managed SMS/email review-request campaign could violate UWG / DSGVO. Liability is the client's; reputational damage extends to the agency. |

---

## 3. Strategy — target end-state

After this plan executes, the agency standards library will encode:

### 3.1 Strengthened standards docs

| Doc | Change | What it adds |
|---|---|---|
| `docs/design/SEO.md` | **Pre-batch hotfix + Batch 1 strengthening** | (a) Pre-batch: §5.3 + §5.4 corrected for 2026 policy. (b) Batch 1: §8.4 expanded from 29 lines to an operational playbook covering TOS · link mechanics · velocity/recency · channels · message templates · response templates · velocity targets · tools · purge recovery. |
| `docs/design/CITATIONS.md` | **NEW** (Batch 2) | Citations-as-a-ranking-factor 2026 reality · universal directories · DE general directories (Gelbe Seiten/Das Örtliche/11880/meinestadt) · NAP canonical template · per-vertical must-claim table · PT + BR seed lists · aggregator decision rule · 6-month refresh cadence. |
| `docs/design/CHECKLIST.md` | Strengthened (Batches 1+2+3) | New checks: GBP review link + QR card prepared · response SLA wired · citations claimed (universal + DE-general + vertical-specific count) · schema validates against Rich Results Test + Schema.org Validator · no self-serving `aggregateRating` on own LocalBusiness · FAQPage marked as AI-only. |
| `docs/design/KPI.md` | Strengthened (Batch 1) | `review_count_30d` and `review_response_rate_30d` promoted as canonical Health KPIs in §Per-product-type KPI defaults. |
| Root `CLAUDE.md` | Strengthened (Batch 2) | New doc-table row for `CITATIONS.md`. New Working Principle: "Citation hygiene applied per client at launch — universal + DE-general + vertical-specific list per `CITATIONS.md`. No monthly citation maintenance below €500/mo retainer." |

### 3.2 Extended per-vertical templates

Each of the 12 vertical templates gets two extensions:

- **§11.1 Product KPIs** — `review_count_30d` and `review_response_rate_30d` added as Health KPIs with vertical-specific velocity targets (e.g., gastronomy 8-15/mo · health 8-12/mo · trades 1-3/mo).
- **§11.6 Integrations applicable** — new "Citations" subsection cross-linking to `CITATIONS.md` and listing the 1-3 vertical-specific must-claim directories.
- **§11.8 Schema.org variants** — promoted from a list of `@type` choices to **paste-ready `@graph`-rooted JSON-LD blocks per archetype** (Full scope confirmed per §8 #1 — Berlin example data; placeholders for client-specific fields). ~41 blocks total across the 12 verticals; companion JSON files in `templates/schema-cookbook/[vertical]-[archetype].json` keep the template MD readable.
- **§11.10 Recurring PAA seeds** — placeholder for Batch 4 trigger-gated work.

### 3.3 No new standalone docs beyond `CITATIONS.md`

Review generation lives inside `SEO.md` §8.4 (operational playbook fits naturally under existing GBP section). Schema cookbook lives inside per-vertical templates §11.8. Citations is its own discipline → its own doc.

---

## 4. Execution batches

### Pre-batch hotfix — 2026 schema compliance corrections (~85–100 min)

**Why first:** the FAQPage reframe + `aggregateRating` self-serving ban + `YogaStudio` non-existent-type fix are policy/correctness gaps in current docs. Without the hotfix: (a) Batch 3 schema cookbook would propagate the errors across all 12 verticals, and (b) any gastronomy/beauty/studio scaffold during the Batch 1+2 window inherits the violating markup.

**Scope expanded from Revision 1** based on two audit rounds:

- **Round 1 audit (`§1.1 + Addendum Findings 1–4`):** docs-only violations propagate across 8 fix-locations in 5 markdown files.
- **Round 2 audit (`§11 R2 Issue 5`):** the reference impl TypeScript code carries the same violations — `clients/reference-solo-barber/src/lib/seo/schema.ts` has the conditional `aggregateRating` block (lines 60–64) and `clients/reference-studio-booking/src/lib/seo/schema.ts` uses `'@type': 'YogaStudio'` (line 31) + the function name `yogaStudioSchema` (line 19). Patching the `.md` docs but leaving the code violations means every future scaffold copied from these impls inherits the violations regardless of doc updates. Adds 2 code-file fixes to the hotfix.

**Total scope: 11 fix-locations across 5 markdown files + 2 TypeScript files** (hotfix table item 10 spans both `clients/reference-studio-booking/src/lib/seo/schema.ts` and `src/app/layout.tsx`).

| # | Item | Effort | Deliverable |
|---|---|---|---|
| 1 | Update `SEO.md` §5.3 "Aggregate rating" | 15 min | Rewrite: `aggregateRating` is **never** placed on the business's own `LocalBusiness` schema (self-serving rule per Google's review-snippet policy). Allowed only on `Product` schema for retail/artisan/ecommerce items, and only when reviews are visible on-page + owner-approved. GBP listing remains the source of truth for SERP stars. |
| 2 | Update `SEO.md` §5.4 "FAQ schema" | 10 min | Rename section to "FAQ schema (AI-extraction signal; no SERP feature in 2026)". Add policy note: SERP rich result deprecated for all sites 2026-05-07; markup still useful for AI Overviews + Gemini ingestion. Keep the JSON-LD example. |
| 3 | Update `SEO.md` §8 — Q&A removal block (line 727) | 5 min | `§8` has no numbered decimal subsections; find the paragraph headed `### Q&A section (removed November 2025)`. Reframe the final sentence (currently "use FAQPage schema to make it visible in search results") — FAQPage no longer produces a SERP feature; useful for AI extraction only. |
| 4 | Update `SEO.md` §14 delivery checklist (lines 1157–1158) | 5 min | Replace stale `aggregateRating` and FAQPage items with post-hotfix versions. |
| 5 | Update `CHECKLIST.md` §3 (lines 350–351) | 5 min | Same two updates as `SEO.md` §14. |
| 6 | Update `gastronomy.md` §11.8 (line 465) | 5 min | Remove `aggregateRating` block from `Restaurant` example; add prohibition note pointing to `SEO.md` §5.3. |
| 7 | Update `beauty.md` §11.8 (line 462) | 5 min | Remove `aggregateRating` block from `BarberShop` example; same prohibition note. |
| 8 | Update `studio.md` §11.8 (lines 509, 516, 528) | 10 min | Replace `YogaStudio` with `SportsActivityLocation` in both the prose `@type` list (line 509) and the JSON example (line 516). Remove `aggregateRating` block at line 528. Same prohibition note. |
| 9 | **NEW (R2)** — Update `clients/reference-solo-barber/src/lib/seo/schema.ts` | 10 min | Remove the conditional `aggregateRating` block — the `if (SITE.reviews.approvedForDisplay) { schema.aggregateRating = { … } }` guard (currently ~line 61–65 verified 2026-05-18; **use the content anchor, not the line number** — anything editing the file beforehand shifts the numbers). The block is uniquely identified by the comment `// aggregateRating only rendered when owner-approved` immediately above it. Replace the whole guard + assignment with: `// aggregateRating deliberately omitted — self-serving on own LocalBusiness is policy-banned per Google review-snippet guidelines. See SEO.md §5.3.` |
| 10 | **NEW (R2)** — Update `clients/reference-studio-booking/src/lib/seo/schema.ts` + `src/app/layout.tsx` | 10 min | **In `src/lib/seo/schema.ts`:** rename export `yogaStudioSchema` → `sportsActivityLocationSchema` (line 19). Change `'@type': 'YogaStudio'` → `'@type': 'SportsActivityLocation'` (line 31). Update JSDoc header (line 2) from "YogaStudio variant" → "SportsActivityLocation variant (schema.org has no `YogaStudio` type — see `SEO.md` §5 and `templates/studio.md` §11.8)". **In `src/app/layout.tsx` (the single known callsite — verified by `grep -rn yogaStudioSchema clients/reference-studio-booking/src/`):** update the named import on **line 4** (`import { yogaStudioSchema } from '@/lib/seo/schema'` → `import { sportsActivityLocationSchema } from '@/lib/seo/schema'`) and the call site on **line 46** (`JSON.stringify(yogaStudioSchema())` → `JSON.stringify(sportsActivityLocationSchema())`). `pnpm build` will catch any callsites the grep missed. |
|  | **Verification step** (post-edit, in-commit) | 10 min | (1) `grep -rn "aggregateRating" docs/design/` returns zero matches on `LocalBusiness` or any subtype (only on `Product` if/when authored). (2) `grep -rn "YogaStudio" docs/design/templates/` returns zero matches. (3) `grep -rn "aggregateRating" clients/reference-solo-barber/src/` returns zero matches. (4) `grep -rn "YogaStudio\|yogaStudioSchema" clients/reference-studio-booking/src/` returns zero matches. (5) Both reference impls build clean (`pnpm build` in each — confirms the renamed export's callsites updated). |

**Success criteria:**
- [ ] All 11 fix-locations updated in one standalone commit (8 docs + 2 reference-impl code files + 1 callsite in `layout.tsx`)
- [ ] Verification grep confirms no remaining `aggregateRating` on `LocalBusiness` or subtypes anywhere in `docs/design/`
- [ ] Verification grep confirms no remaining `YogaStudio` `@type` references in `docs/design/templates/`
- [ ] Verification grep confirms no remaining `aggregateRating` in `clients/reference-solo-barber/src/`
- [ ] Verification grep confirms no remaining `YogaStudio` or `yogaStudioSchema` in `clients/reference-studio-booking/src/`
- [ ] Both reference impls `pnpm build` clean (validates the studio-booking export rename propagated to all callsites)
- [ ] FAQ schema framing consistent across `SEO.md` §5.4 + §8 Q&A block + §14 and `CHECKLIST.md` §3 (all reframed as AI-extraction-only)
- [ ] **Acceptance:** a fresh read of gastronomy/beauty/studio templates AND a scan of both reference impl `seo/schema.ts` files produces no policy-violating JSON-LD a scaffold would copy

### Batch 1 — Review generation operational playbook (~10–12 hours)

**Why first:** reviews are the **#1 local-pack ranking factor in 2026** with velocity now outweighing count. Direct, measurable client outcome lever within the 60-90 day measurement window. Highest single ROI gap. No dependencies on Batches 2 or 3.

| Item | Effort | Deliverable |
|---|---|---|
| Expand `SEO.md` §8.4 "Reviews" into multi-subsection playbook | 5–6 hrs | New subsections: **§8.4.1 Current Google TOS (2026)** with the May-2026 policy update banning on-site kiosks + staff-name requests + the new "Suspected Fake Review" warning · **§8.4.2 Review-request link mechanics** with `g.page/r/<short-id>/review`, `search.google.com/local/writereview?placeid=`, and the recommended vanity-redirect pattern (`/bewertung` DE / `/avaliacao` BR/PT / `/review` EN) · **§8.4.3 Velocity vs recency 2026 weighting + drought-alert SLA** — Whitespark 2026 #11 (was #93) · 5-fresh-reviews/month rule · **21-day "review drought" threshold = retainer SLA alert · 6-week threshold = competitive-vertical rank softening warning** (Sterling Sky 2025) · **§8.4.4 Channel + timing decision matrix** with conversion table (SMS 12-20% · email 3-8% · WhatsApp ≈SMS · QR-at-POS 2-5%) + 24-48h post-visit timing · **§8.4.5 Message templates marked DRAFT pending client legal review** (DE Bestandskunden frame under UWG §7(2)(b) for transactional carve-out · EN · PT-BR) — every template tagged `<!-- DRAFT — requires client legal counsel sign-off before mass deployment -->` · **§8.4.6 Response templates 5★/4★/1-3★** with "no reviewer-name + no relitigation + move-to-DM" rule for negative reviews · **§8.4.7 Velocity targets per vertical** (table covering all 12 verticals) · **§8.4.8 Tools tier per retainer level + cost pass-through rule** — free GBP link + vanity redirect for ≤€300/mo · MessageBird/Twilio SMS €5-15/mo for €300-500/mo · Reputigo/NiceJob entry €15-30/mo for €500+/mo. **Tool costs at €300+/mo retainers are passed through to the client as a separately-itemized line, not absorbed in the retainer fee** (or the retainer agreement caps agency tool selection at €X/mo) · **§8.4.9 Recovery from the 2024-2025 review purge** with spread-requests + diversity + neutral-language playbook |
| Update `KPI.md` §Per-product-type KPI defaults | 1 hr | Promote `review_count_30d` and `review_response_rate_30d` to canonical Health KPIs for **all 12 verticals**. Document per-vertical velocity targets (re-state from §8.4.7). **Define data source per retainer tier:** ≤€300/mo = manual owner screenshot of GBP review count on the 1st of each month, entered in monthly retainer report · €300-500/mo = manual or BrightLocal reporting if citation management bundled · €500+/mo = GBP API via agency Google Cloud project. **Remove "PostHog SQL" from the dashboard recipe** — PostHog has no native GBP integration; the GBP metric is not a product-event source. |
| Update each of 12 `templates/*.md` §11.1 Product KPIs | 12 × ~5 min = 1 hr | Add `review_count_30d` (target X/month per vertical from §8.4.7) and `review_response_rate_30d` (target 80%+) as Health KPIs. Cross-link to `SEO.md` §8.4. |
| Update `CHECKLIST.md` pre-launch SEO section | 45 min | Add: "GBP review link in footer/About visible" · "Vanity review redirect configured (`/bewertung` or `/review`)" · 🔴 **production blocker: vanity review redirect tested end-to-end — HTTP 301 verified, destination resolves to the correct `g.page/r/<short-id>/review` URL** · "QR card with review link prepared for client" · "Response SLA documented in retainer agreement (24h target)" · "Review velocity baseline captured at handoff for the 90-day before/after comparison" · 🔴 **production blocker (DE clients with agency-managed review campaigns): client's legal counsel has cleared the DE review-request template before mass SMS or email deployment**. |
| Update `SALES.md` retainer-tier definitions + §10 retainer deliverables | 45 min | Add review-generation deliverable per tier: ≤€300/mo = monthly review-request cadence email to owner + weekly response cadence by owner; €300-500/mo = SMS sequence setup + weekly response oversight; €500+/mo = full response handling by agency. **Add "Month 1 review sprint" 5-step box** to §10 — plain-language client-facing recipe pointing back to `SEO.md` §8.4 (not duplicating content): (1) baseline GBP review count + last review date · (2) set up vanity redirect + QR card · (3) collect 20 customer contacts · (4) **DE clients: confirm client's legal counsel cleared the §8.4.5 template (CHECKLIST.md 🔴 production blocker) BEFORE proceeding; EN / PT-BR clients: send the §8.4.5 template directly** · (5) target +5 reviews by day 30. |
| **NEW — Add legal-frame note to `LEGAL.md` §DE** | 30 min | Add "Post-service communications" subsection: "Post-service review-request emails are lawful under the UWG §7(2)(b) Bestandskunden exemption when (a) the email is solely about the transaction the customer already completed, (b) no marketing content is included, (c) opt-out is clearly signposted. Real legal review by the client's counsel is required before any mass deployment. See `SEO.md` §8.4.5 for templates marked DRAFT pending that review." |
| **NEW — Update `TECH.md` product-type matrix** | 15 min | Add footnote at the bottom of the §1 product-type table: "All types at production cutover: citation-building per `CITATIONS.md` (universal + DE-general + vertical-specific), review-link + vanity redirect setup per `SEO.md` §8.4." Anchors the new deliverables as standard agency outputs. |
| Update `docs/audit/PENDING.md` | 15 min | Mark "review-generation playbook" gap as resolved; add the Batch 4 trigger-gated PAA-seeds item. |

**Success criteria:**
- [ ] `SEO.md` §8.4 grew from 29 lines to ~250-300 lines with 9 sub-sections
- [ ] All 12 templates' §11.1 list `review_count_30d` with vertical-specific velocity target
- [ ] `CHECKLIST.md` has 5 new review-generation pre-launch items
- [ ] Acceptance test: for any vertical, the agency can answer "how do we generate the first 10 reviews for this client in the first 30 days?" within 60 seconds by reading SEO.md §8.4 + the matching template §11.1
- [ ] No "ask for incentives" or "ask only happy customers" language remains anywhere in agency docs

### Batch 2 — Berlin/DE citation-building checklist (~6–8 hours)

**Why second:** mechanical, well-bounded, low risk. Doesn't depend on Batch 1 or Batch 3 (could run in parallel with Batch 1 if appetite exists). Yields a paste-ready operational checklist that saves 3-4 hours per new client.

| Item | Effort | Deliverable |
|---|---|---|
| Create `docs/design/CITATIONS.md` | 4-5 hrs | **§1 State of citations 2026** (honest reality: hygiene + AI-search input · not top-5 ranking factor · Sterling Sky says monthly maintenance is wasted budget except for industry-specific) · **§2 Universal citations** table (GBP, Apple Business Connect, Bing Places, Yelp DE, Facebook, IG Business) with claim URL + free/paid + value tier + effort estimate · **§3 DE general directories** as a **per-directory trap table** (NOT collapsed under "Sellwerk"): Gelbe Seiten (free listing always; Sellwerk premium upsell ~€29.90/mo via sales reps; cancel with Sellwerk in writing 2 weeks before trial end) · Das Örtliche (free listing; Das Örtliche premium tier ~€19.90/mo; written cancellation required) · Das Telefonbuch (free; bundled with above via Sellwerk) · 11880.com (free listing; aggressive "ProfiEintrag" telesales follow-up after free claim — flag the 2-week follow-up window) · meinestadt.de (free; paid advertising upsell, no auto-renewal on basic) · **berlin.de** (Berlin-specific must-claim — government-adjacent trust signal, free) · Cylex, GoYellow (lower-value, free) · **§4 Vertical-specific must-claim** table covering all 12 verticals (Jameda + Doctolib for health · Treatwell + Booksy + Fresha for beauty · MyHammer + Check24 Profis for trades · Tripadvisor + TheFork + Lieferando for gastro · Eversports + Urban Sports Club for studio · Anwalt.de + ProvenExpert for pro-services · etc.) · **§5 PT seed list** (PaginasAmarelas · Infoempresas · OLX PT) · **§6 BR seed list** (TeleListas · Apontador · GuiaMais · iFood for gastro) · **§7 NAP canonical template** (declared per client in BRIEF.md · name without keyword stuffing · `Bergmannstraße` not `Bergmannstr.` · `+49 30 1234567` E.164 · canonical https + trailing slash) with tolerable-variance and killing-inconsistency lists · **§8 Aggregator verdict** (don't pay Yext/Uberall below €500/mo retainer · BrightLocal one-off ~€200 OK for €300+/mo · per-directory manual claim is correct default) · **§9 6-month refresh cadence** for retainer clients (hours, holidays, photo refresh propagation) |
| Update root `CLAUDE.md` document table | 15 min | Add `CITATIONS.md` row pointing to this new doc. Add new Working Principle bullet: "Citation hygiene applied per client at launch — universal + DE-general + vertical-specific list per `CITATIONS.md`. No monthly citation maintenance below €500/mo retainer." |
| Update each of 12 `templates/*.md` §11.6 Integrations | 12 × ~10 min = 2 hrs | Add a new "Citations" subsection at the end of §11.6 cross-linking to `CITATIONS.md` §4 and listing the 1-3 vertical-specific must-claim directories with claim URLs. (DRY: don't duplicate the full universal/DE-general list — those live in `CITATIONS.md`.) |
| Update `docs/clients/[client-slug]/BRIEF.md` template | 30 min | Add a "Canonical NAP" block (name · street · ZIP/city · country · phone · website canonical) at the top of every per-client BRIEF.md. Owner-confirmed before scaffold starts. |
| Update `CHECKLIST.md` pre-launch SEO section | 30 min | Add: "Canonical NAP declared in BRIEF.md and matches GBP exactly" · "Universal citations claimed (count: ___ / 6)" · "DE general citations claimed (count: ___ / 8)" · "berlin.de claimed (Berlin clients only)" · "Vertical-specific citations claimed (count: ___ / N)" · "Per-directory premium-upsell traps documented in retainer agreement: Sellwerk cancellation reminder calendared (Gelbe Seiten / Das Örtliche), 11880 telesales follow-up window flagged." |
| **NEW — Update `SALES.md` §10 retainer deliverables** | 15 min | Add: "6-month citation audit (per `CITATIONS.md` §9): re-verify NAP consistency across claimed directories, refresh hours + holiday updates where supported. Not monthly — semi-annual." |
| Update `SEO.md` §8 cross-reference | 15 min | Add a "Citations: see `CITATIONS.md` for the full citation-building playbook" line near §8.7 GBP category. Don't duplicate the content — `SEO.md` keeps GBP optimization; `CITATIONS.md` owns the wider directory landscape. |
| Update `docs/audit/PENDING.md` | 15 min | Mark "citation-building playbook" gap as resolved. |

**Success criteria:**
- [ ] `CITATIONS.md` exists with 9 sections + 3 directory tables (universal, DE general, vertical-specific) + PT + BR seeds + NAP template
- [ ] Root `CLAUDE.md` doc table lists `CITATIONS.md`
- [ ] All 12 templates' §11.6 include Citations subsection with vertical-specific must-claim directories
- [ ] `BRIEF.md` template has Canonical NAP block
- [ ] `CHECKLIST.md` has 4 new citation pre-launch items
- [ ] Acceptance test: for a hypothetical Berlin restaurant client, the agency can produce a 15-directory citation claim list with URLs in under 5 minutes by reading `CITATIONS.md` §2 + §3 + §4-gastronomy
- [ ] Sellwerk auto-renewal warning visible (mistake-prevention)

### Batch 3 — Per-vertical schema.org cookbook (~22–28 hours, FULL scope confirmed)

**Why last:** heaviest batch. Depends on the pre-batch hotfix (otherwise propagates §5.3+§5.4 errors). Independent of Batches 1 + 2.

**Scope (§8 #1 RESOLVED — Breno chose Full):** up to **40 paste-ready `@graph` JSON-LD blocks** — one per (vertical × archetype). Every template's archetype matrix produces a corresponding block: gastronomy (3 archetypes × 1 = 3 blocks) · beauty (3) · health (3) · trades (4) · studio (4) · pro-services (4) · pets (4) · automotive (4) · education (4) · events-hospitality (4) · home-garden (4) · artisan (4) = **~41 blocks total**.

| Item | Effort | Deliverable |
|---|---|---|
| **Pre-flight `@graph` validation** (gate before authoring all ~41 blocks) | 30 min | Author one mock `@graph`-rooted block linking `HairSalon` + `Person` + `WebSite` via `@id`. Submit to Google Rich Results Test AND Schema.org Validator. If RRT returns errors on the `@graph` pattern (Google has shown inconsistent behavior here historically), fall back to separate `<script>` tags per entity. Decision made before the ~41-block authoring sprint starts — prevents a re-authoring cycle. |
| Author all ~41 JSON-LD blocks (one per vertical × archetype) | 14-18 hrs | Each block: `@graph`-rooted (or fallback per pre-flight) · most-specific `@type` per 2026 research and per archetype A/B/C/D within each template. Per-vertical defaults at the **default-archetype** block: gastronomy: `Restaurant`/`CafeOrCoffeeShop`/`BarOrPub` per archetype · beauty: `HairSalon`/`BeautySalon` per archetype · trades: `Plumber`/`Electrician`/`HomeAndConstructionBusiness` per archetype · health: `Dentist`/`Physician`/`Physiotherapy`/`MedicalClinic` per archetype · studio: `SportsActivityLocation` for all (NOT `YogaStudio` — hotfixed) · pro-services: `LegalService`/`AccountingService` (NOT deprecated `ProfessionalService`) per archetype · pets: `VeterinaryCare`/`LocalBusiness`+additionalType per archetype · automotive: `AutoRepair`/`AutoBodyShop` per archetype · education: `EducationalOrganization`/`School`/`LocalBusiness`+`hasCourse` per archetype · events-hospitality: `Hotel`/`BedAndBreakfast`/`LocalBusiness`+`availableService` per archetype · home-garden: `Florist`/`Store` per archetype · artisan: `JewelryStore`/`Store`+per-piece `Product` per archetype. Each block: `LocalBusiness` + `Person` (when solo) + `WebSite` linked by `@id` · `image` array with 16:9, 4:3, 1:1 · `geo` ≥ 5 decimal places · `openingHoursSpecification` (NOT deprecated `openingHours` string) · `sameAs` array linking GBP + IG + Facebook · `priceRange` · vertical-specific properties (`servesCuisine`, `medicalSpecialty`, `serviceType`, `areaServed` for SAB, etc.) · `hasOfferCatalog` pattern with `OfferCatalog` → `Offer` → `Service` where applicable · **NO** self-serving `aggregateRating` on `LocalBusiness` (post-hotfix rule) · **NO** FAQPage as a rich-result claim (still allowed as AI-extraction signal but reframed) · Berlin example data (real street, real ZIP, real lat/long via Nominatim). |
| Validate every block against Google Rich Results Test + Schema.org Validator | 4 hrs | Run https://search.google.com/test/rich-results AND https://validator.schema.org on every block. Document warnings to ignore (eligibility warnings are fine for types without rich-result counterparts — `VeterinaryCare`, `JewelryStore`, etc.). Document errors that must be fixed before locking. |
| Update each of 12 `templates/*.md` §11.8 Schema.org variants — Full scope = all archetypes inline | 12 × ~45 min = 9 hrs | Promote §11.8 from "list of `@type` choices + stub" to "paste-ready `@graph` blocks **for each archetype** (full blocks inline OR linked from `templates/schema-cookbook/[vertical]-[archetype].json` companion files; recommend companion files at Full scope to keep template MD readable). Document the Berlin example placeholders the agency must swap per client. Add the post-hotfix rules (no self-serving aggregateRating · FAQPage as AI-only). |
| Update `SEO.md` §5 cross-reference | 30 min | Add: "Per-vertical paste-ready blocks live in each `templates/*.md` §11.8 (per archetype). Use them as the default starting point per client based on the §10 decision matrix; the §5 generic LocalBusiness template is the fallback when no vertical template matches." |
| Update `CHECKLIST.md` pre-launch SEO section | 30 min | Add: "Schema.org block validates against Rich Results Test (no errors)" · "Schema.org block validates against Schema.org Validator (no errors)" · "No `aggregateRating` on `LocalBusiness` schema" · "FAQ schema present (AI-extraction) but no rich-result expectation" · "Most-specific `@type` chosen from the per-vertical template, not the generic `LocalBusiness`" · "Correct archetype block selected from the §11.8 set per the §10 decision matrix" |
| Update `docs/audit/PENDING.md` | 15 min | Mark "per-vertical schema cookbook" gap as resolved (Full scope shipped — no MVP follow-up needed). |

**Success criteria:**
- [ ] **~41 paste-ready blocks exist** (one per vertical × archetype — Full scope per §8 #1 resolution)
- [ ] Every block validates against RRT + schema.org validator
- [ ] No block contains self-serving `aggregateRating` on `LocalBusiness`
- [ ] Every block uses `openingHoursSpecification` (not legacy `openingHours` string)
- [ ] Every solo-operator block includes a linked `Person` node via `@id`
- [ ] Every block has `image` array with 3 aspect ratios documented (16:9, 4:3, 1:1)
- [ ] All 12 templates' §11.8 promoted to paste-ready per archetype (inline or via companion JSON files in `templates/schema-cookbook/`)
- [ ] Each template §10 decision matrix cross-references the matching §11.8 archetype block
- [ ] Acceptance test: for a new Berlin barber-shop client, the agency picks the matching archetype via §10, copies the §11.8 block, swaps 8 placeholders (name · street · postal code · lat/long · phone · website · IG handle · price range) and has valid `HairSalon`+`Person` schema in under 10 minutes

### Batch 4 (trigger-gated) — Per-vertical PAA seeds (deferred)

**Trigger condition:** ≥ 2-3 real clients per vertical produce overlapping People-Also-Ask question sets, validating which questions actually recur. Not before.

**Scope when triggered:** add a new §11.10 "Recurring PAA seeds" subsection to each vertical template containing 8-15 PAA questions in DE/EN/PT-BR per (vertical × market) that recur across multiple real client SERPs. Becomes the FAQ section content scaffold for future clients in that vertical.

**Why deferred:** premature without real client SERP data. Synthesizing PAA from a single incognito session per vertical produces low-signal noise. Wait for the real signal.

**Effort estimate when triggered:** ~3-5 days (12 verticals × 2-3 client SERPs × incognito research + synthesis). Logged in `PENDING.md` as a trigger-gated item with "≥2 real clients per vertical" as the entry condition.

---

## 5. Per-vertical relevance preview

The three batches don't apply uniformly to every vertical. This table previews where the depth matters most:

| Vertical | Review velocity target | Citation breadth | Schema richness |
|---|---|---|---|
| **Gastronomy** | 8-15/mo · **very high** | Universal + DE + Tripadvisor + TheFork + Lieferando | `Restaurant` + `servesCuisine` + `hasMenu` + `acceptsReservations` |
| **Beauty** | 3-8/mo · high | Universal + DE + Treatwell + Booksy + Fresha | `HairSalon`/`BeautySalon` + `hasOfferCatalog` Service items |
| **Trades** | 1-3/mo · medium | Universal + DE + MyHammer + Check24 Profis + Handwerkskammer | `Plumber`/`Electrician` + `areaServed` (SAB) + `hasOfferCatalog` |
| **Health** | **8-12/mo · very high** | Universal + DE + **Jameda** + **Doctolib** + Sanego | `Dentist`/`Physician`/`Physiotherapy` + `medicalSpecialty` + `availableService` (medical-schema policed; high accuracy risk) |
| **Studio (fitness/yoga)** | 2-5/mo · medium-high | Universal + DE + Eversports + Urban Sports Club + ClassPass | `SportsActivityLocation` (no real `YogaStudio` type) + `hasOfferCatalog` Service items (drop-in, 10-class, monthly) |
| **Pro services** | 1-3/mo · medium | Universal + DE + Anwalt.de / Steuerberater.de + ProvenExpert | `LegalService`/`AccountingService` (not deprecated `ProfessionalService`) + `priceRange` + `knowsLanguage` |
| **Pets** | 2-5/mo · medium | Universal + DE + Tasso e.V. + Doctolib Vet | `VeterinaryCare` (for vets) · `LocalBusiness` + `additionalType` (for groomers) |
| **Automotive** | 1-3/mo · medium | Universal + DE + Werkstars + Autoscout24 Werkstattportal + fairgarage | `AutoRepair`/`AutoBodyShop` + `serviceType` + `areaServed` |
| **Education** | 2-5/mo · medium | Universal + DE + Superprof + Preply + Berlin Weiterbildungsdatenbank | `EducationalOrganization`/`School` for institutions · `LocalBusiness` + `hasCourse` for solo tutors (note: `Course` rich result dead but schema useful for AI) |
| **Events-hospitality** | 5-10/mo · high (hotel/B&B) · 1-3/mo · low (event planner) | Universal + DE + Booking.com + HRS + Eventbrite | `Hotel`/`BedAndBreakfast` + `numberOfRooms` + `amenityFeature` · `LocalBusiness` + `availableService` for solo planners |
| **Home-garden** | 2-5/mo · medium | Universal + DE + MyHammer + Houzz Pro DE + GaLaBau Berlin | `Florist` (specific type exists!) · `Store` + keywords for garden centers · `HomeAndConstructionBusiness` + `additionalType` for landscapers |
| **Artisan** | 1-3/mo · low (review channel) · high (Etsy/IG product reviews) | Universal + DE + Etsy + Palundu + Made in Berlin | `JewelryStore`/`Store` + per-piece `Product` schema with offers, brand, image (Product rich result still live) |

Each cell becomes a specific recommendation in the matching template's §11.1 (KPIs), §11.6 (Citations), §11.8 (Schema cookbook).

---

## 6. Reference implementations — do they need updating?

The two reference impls shipped in `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` Batch 3 are `clients/reference-solo-barber/` (Beauty / Tier 2 / Type 1) and `clients/reference-studio-booking/` (Studio / Tier 3 / Type 3). After this plan executes, both should be updated to demonstrate the new patterns.

**File paths verified 2026-05-18 via directory scan** (Revision 1 had `studio-booking` schema path wrong — corrected below):

| Update | Effort | Where it lands (verified) |
|---|---|---|
| Solo-barber: replace generic LocalBusiness schema with the Batch 3 `HairSalon`+`Person`+`hasOfferCatalog` paste-ready block | ~30 min | `clients/reference-solo-barber/src/lib/seo/schema.ts` ✅ |
| Solo-barber: footer review-link section with vanity redirect `/avaliacao` (BR client) | ~20 min | `clients/reference-solo-barber/src/components/layout/Footer.astro` ✅ |
| Solo-barber: BRIEF.md updated with Canonical NAP block | ~10 min | `docs/clients/reference-solo-barber/BRIEF.md` ✅ |
| Studio-booking: replace generic LocalBusiness schema with the Batch 3 `SportsActivityLocation`+`Person`+`hasOfferCatalog` block | ~30 min | `clients/reference-studio-booking/src/lib/seo/schema.ts` ✅ — canonical SEO schema file confirmed by file read 2026-05-18 (R2 audit Issue 1). **Do not touch** `src/lib/schema.ts` — that file is the Drizzle ORM database schema (`trial_signups` table for the Type 3 booking demo). The two files have unrelated purposes; "consolidate if both exist" wording from Revision 2 was incorrect. |
| Studio-booking: footer review-link section with vanity redirect `/bewertung` (DE client) | ~20 min | `clients/reference-studio-booking/src/components/layout/Footer.tsx` ✅ |
| Studio-booking: BRIEF.md updated with Canonical NAP block | ~10 min | `docs/clients/reference-studio-booking/BRIEF.md` ✅ |

**Total: ~2 hours of reference-impl updates after Batch 3 ships.** Folded into Batch 3's success criteria; not a separate batch.

---

## 7. Sequencing rationale

| # | Why this batch in this position |
|---|---|
| **Pre-batch hotfix** | Policy-relevant errors in current `SEO.md` §5 must be corrected before Batch 3 propagates them across all 12 vertical templates. 30 minutes, blocks nothing else. |
| **Batch 1 (Reviews)** | Highest ROI single deliverable in the plan. Reviews are the #1 local-pack ranking factor in 2026; velocity overtook count. Direct, measurable client outcome lever in the 60-90 day window. No dependencies. |
| **Batch 2 (Citations)** | Mechanical, well-bounded. Doesn't move rankings as much as reviews but saves 3-4 hours of duplicate research per client and unlocks the industry-specific traffic channels (Jameda for health, Tripadvisor for gastro). Can run in parallel with Batch 1 if appetite exists. |
| **Batch 3 (Schema)** | Heaviest batch + depends on pre-batch hotfix. Rich snippets lift CTR 20-30% below the local pack but only marginally improve rank; comes last because the ranking impact compounds with the higher-impact items already in place. |
| **Batch 4 (PAA seeds)** | Trigger-gated. Premature without real client SERP data. Waits for ≥2-3 clients per vertical. |

---

## 8. Open decisions — RESOLVED 2026-05-18 by Breno

All 7 open decisions answered. Confirmed answers below; these now bind execution:

| # | Question | Resolution | Source |
|---|---|---|---|
| **1** | **Schema cookbook scope (Batch 3)** — MVP (12 blocks, default archetype only) or Full (up to 40 blocks, vertical × archetype)? | ✅ **FULL — up to 40 blocks.** Every (vertical × archetype) combination gets its own paste-ready `@graph` block. Batch 3 effort: **22-28 hrs** (was 14-18 for MVP). Total plan: 40-48 hrs. | Breno 2026-05-18 |
| **2** | **`CITATIONS.md` as separate doc vs section inside `SEO.md`** | ✅ **Separate doc.** Citations is its own discipline. `SEO.md` keeps GBP optimization; `CITATIONS.md` owns the wider directory landscape. | Breno 2026-05-18 (matches default) |
| **3** | **Message template language scope** (Batch 1 §8.4.5) — DE + EN at MVP or DE + EN + PT-BR day-one? | ✅ **DE + EN + PT-BR day-one.** ~30 min added to Batch 1. PT-BR templates ship in §8.4.5 alongside DE and EN. | Breno 2026-05-18 (matches default) |
| **4** | **Where Batch 4 PAA seeds live** — `templates/*.md` §11.10 or a separate `PAA-SEEDS.md` doc? | ✅ **§11.10 inside each template.** Per-vertical seeds belong with vertical content. | Breno 2026-05-18 (matches default) |
| **5** | **Pre-batch hotfix as standalone commit or fold into Batch 1?** | ✅ **Standalone commit before Batch 1.** ~85-100 min (11 fix-locations across 5 markdown + 2 TypeScript files; item 10 spans 2 TS files). | Breno 2026-05-18 (matches default) |
| **6** | **Reference-impl update timing** — fold into Batch 3 or separate batch? | ✅ **Fold into Batch 3.** File paths verified 2026-05-18; `src/lib/seo/schema.ts` is canonical (not `src/lib/seo.ts`). | Breno 2026-05-18 (matches default) |
| **7** | **`PENDING.md` rewrite** — incremental per batch or full rewrite at conclusion? | ✅ **Incremental per batch.** Each batch closes its corresponding entry. | Breno 2026-05-18 (matches default) |

**Execution scope confirmed:** Full plan — pre-batch hotfix + Batch 1 + Batch 2 + Batch 3 — in sequence.

---

## 9. Success criteria per batch

### Pre-batch hotfix — 2026 schema compliance corrected (10 locations, 5 markdown + 2 TS files)

- [ ] `SEO.md` §5.3 reframed: no self-serving `aggregateRating` on own `LocalBusiness`; Product-only with on-page visible reviews + owner consent
- [ ] `SEO.md` §5.4 reframed: FAQPage = AI-extraction signal in 2026, not a SERP rich result (deprecated 2026-05-07 for all sites)
- [ ] `SEO.md` §8 Q&A removal block reframed: stale "use FAQPage to make it visible in search results" claim removed (no `§8.10` label — search for `### Q&A section (removed November 2025)`)
- [ ] `SEO.md` §14 delivery checklist updated for both items
- [ ] `CHECKLIST.md` §3 updated to match
- [ ] `gastronomy.md` §11.8 — `aggregateRating` block removed from `Restaurant` example
- [ ] `beauty.md` §11.8 — `aggregateRating` block removed from `BarberShop` example
- [ ] `studio.md` §11.8 — `YogaStudio` replaced with `SportsActivityLocation` (line 509 + line 516) AND `aggregateRating` block removed (line 528)
- [ ] **NEW (R2)** `clients/reference-solo-barber/src/lib/seo/schema.ts` — conditional `aggregateRating` block (lines 60–64) removed; replaced with prohibition-note comment
- [ ] **NEW (R2)** `clients/reference-studio-booking/src/lib/seo/schema.ts` — `yogaStudioSchema` renamed to `sportsActivityLocationSchema`; `'@type': 'YogaStudio'` → `'SportsActivityLocation'`; JSDoc updated
- [ ] **NEW (R3)** `clients/reference-studio-booking/src/app/layout.tsx` — line 4 import updated to `sportsActivityLocationSchema`; line 46 function call updated. (Verified via grep 2026-05-18 as the only callsite.)
- [ ] `grep -rn "aggregateRating" docs/design/` returns no matches on `LocalBusiness` or any subtype
- [ ] `grep -rn "YogaStudio" docs/design/templates/` returns zero matches
- [ ] `grep -rn "aggregateRating" clients/reference-solo-barber/src/` returns zero matches
- [ ] `grep -rn "YogaStudio\|yogaStudioSchema" clients/reference-studio-booking/src/` returns zero matches
- [ ] Both reference impls `pnpm build` clean (verifies the studio-booking export rename propagated to all callsites)
- [ ] **Acceptance:** Batch 1-2 work no longer depends on "remember to fix the templates later" — all known violating patterns purged from docs AND reference-impl code in one commit. New scaffolds copied from either reference impl no longer inherit the violations.

### Batch 1 — Review generation playbook integrated

- [ ] `SEO.md` §8.4 grew from ~40 lines (Reviews subsection + 5-step strategy list) to ~275 lines across 9 sub-sections
- [ ] All 12 templates' §11.1 list `review_count_30d` (target X/month per vertical) and `review_response_rate_30d` (target 80%)
- [ ] `KPI.md` lists both as canonical Health KPIs for all 12 verticals **with per-tier data source defined** (manual / BrightLocal / GBP API)
- [ ] PostHog SQL no longer referenced anywhere as a GBP data source
- [ ] `CHECKLIST.md` has the 5 review-gen pre-launch items + 🔴 production blocker on vanity redirect e2e test + 🔴 production blocker on DE legal sign-off for agency-managed campaigns
- [ ] `SALES.md` has retainer-tier review-generation deliverables + "Month 1 review sprint" 5-step box in §10
- [ ] `LEGAL.md` §DE has the "Post-service communications" Bestandskunden note cross-referencing `SEO.md` §8.4.5
- [ ] `TECH.md` product-type matrix has the footnote on citation + review-link as standard production-cutover deliverables
- [ ] `SEO.md` §8.4.3 encodes the 21-day "review drought" SLA threshold
- [ ] `SEO.md` §8.4.5 DE template tagged `<!-- DRAFT — requires client legal counsel sign-off -->`
- [ ] `SEO.md` §8.4.8 explicitly states tool cost pass-through rule at €300+/mo retainers
- [ ] No "ask for incentives" or "ask only happy customers" language anywhere
- [ ] **Acceptance:** for any vertical, the agency can answer "how do we generate the first 10 reviews in the first 30 days?" in under 60 seconds by reading `SEO.md` §8.4 + matching template §11.1; and "how do we measure review velocity for a €200/mo retainer client?" by reading `KPI.md`

### Batch 2 — Citation-building checklist integrated

- [ ] `CITATIONS.md` exists with 9 sections + 3 directory tables (universal, DE general with **per-directory trap breakout** for Gelbe Seiten/Das Örtliche/11880/meinestadt, vertical-specific) + berlin.de called out + PT seed + BR seed + NAP template + aggregator decision rule + refresh cadence
- [ ] Root `CLAUDE.md` doc table lists `CITATIONS.md`
- [ ] All 12 templates' §11.6 include Citations subsection
- [ ] `BRIEF.md` template has Canonical NAP block
- [ ] `CHECKLIST.md` has 6 new citation pre-launch items (Canonical NAP · universal count · DE-general count · berlin.de · vertical-specific count · per-directory trap awareness in retainer agreement)
- [ ] Per-directory premium-upsell traps documented in `CITATIONS.md` §3 — not collapsed under "Sellwerk"
- [ ] `SALES.md` §10 has the 6-month citation audit deliverable
- [ ] **Acceptance:** for a Berlin restaurant client, agency produces a 15-directory claim list with URLs in under 5 minutes by reading `CITATIONS.md` §2 + §3 + §4-gastronomy, AND knows which directories have telesales follow-up traps to flag in onboarding

### Batch 3 — Schema cookbook integrated (+ reference impl updates)

- [ ] `@graph` pre-flight validation completed (or fallback to separate `<script>` tags adopted) before authoring all ~41 blocks
- [ ] **~41 paste-ready JSON-LD blocks exist** (Full scope confirmed per §8 #1 — one per vertical × archetype combination)
- [ ] Every block validates against Rich Results Test + Schema.org Validator
- [ ] No block has self-serving `aggregateRating` on `LocalBusiness`
- [ ] Every block uses `openingHoursSpecification` (not deprecated `openingHours` string)
- [ ] Every solo-operator block includes linked `Person` node
- [ ] No block uses `YogaStudio` (or any other deprecated/non-existent `@type`)
- [ ] All 12 templates' §11.8 promoted to paste-ready per archetype (companion JSON files in `templates/schema-cookbook/[vertical]-[archetype].json` recommended at Full scope)
- [ ] `SEO.md` §5 cross-references the per-vertical-per-archetype blocks
- [ ] Reference-impl file paths re-verified at Batch 3 start (`find clients/reference-* -type f`) before any edits. **No reconciliation needed** — `src/lib/schema.ts` (Drizzle ORM) and `src/lib/seo/schema.ts` (Schema.org JSON-LD) are unrelated files; only the latter is touched.
- [ ] Reference impl 1 (solo-barber) updated with new `HairSalon`+`Person` schema + vanity review link `/avaliacao` + BRIEF.md Canonical NAP
- [ ] Reference impl 2 (studio-booking) updated with new `SportsActivityLocation`+`Person` schema + vanity review link `/bewertung` + BRIEF.md Canonical NAP
- [ ] **Acceptance:** for a new Berlin barber-shop client, agency swaps 8 placeholders and ships valid schema in under 10 minutes

### Batch 4 (trigger-gated) — PAA seeds

- Not in scope. Trigger condition: ≥2-3 real clients per vertical. Logged in `PENDING.md`.

---

## 10. Risks + mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| **Schema cookbook Full-scope effort overrun** — 22-28 hrs is a multi-session commitment with no shortcut | Medium (committed scope per §8 #1 = Full) | Companion-file pattern (`templates/schema-cookbook/[vertical]-[archetype].json`) keeps template MD readable and allows partial-batch checkpoints. Validate the first 6 blocks (2 verticals × 3 archetypes) end-to-end before authoring the remaining 35. If RRT/validator surfaces systemic issues at block #6, pause and fix the pattern before continuing. |
| **Schema cookbook blocks rot** — Google policy changes on structured data are frequent | Medium | Note every block's "validated against RRT on YYYY-MM-DD." Add a 6-month re-validation reminder to retainer-client SOP. |
| **DE message templates run afoul of double opt-in law** — review requests as marketing | Medium | §8.4.5 templates use the "service email" frame (Bestandskunden, purpose-bound to the confirmed transaction). Documented in `SEO.md` + cross-referenced from `LEGAL.md` §DE. Real client legal review still required before mass deployment. |
| **Citation auto-renewal traps** — Sellwerk free-trial converts to paid without warning | Medium | `CITATIONS.md` §3 calls out the Sellwerk pattern explicitly. `CHECKLIST.md` adds a "Sellwerk cancellation reminder calendared" item. Owner-side mistake-prevention. |
| **Review-purge collateral damage** — clients lose 5-10 legitimate 5★ reviews in a Google enforcement wave | Medium (occurred in 2024-2025) | §8.4.9 documents the spread + diversity + neutral-language pattern. Retainer SLA includes "monitor for unusual review-count drops and report to client within 7 days." |
| **Per-vertical schema requires medical-licensure verification** | Low-Medium for health | §11.8 health block has a prominent warning: `medicalSpecialty` may only be claimed by a licensed practitioner. Owner-confirmed before scaffold scaffold. |
| **Aggregator subscription temptation** — Yext/Uberall sales pitches to retainer clients | Low-Medium | `CITATIONS.md` §8 explicitly recommends against paid aggregators below €500/mo retainer. Defensible position with sourced reasoning. |
| **gastronomy/beauty/studio violating-schema propagation** during Batch 1+2 window if a client scaffolds before hotfix | High pre-hotfix; zero post-hotfix | Hotfix expanded from 2 fix-locations to 8 across 5 files in Revision 2. Verification grep ensures zero residual matches before commit lands. |
| **DE review-request templates trigger UWG / DSGVO liability** for the client (and reputational damage for agency) | Medium-High | `SEO.md` §8.4.5 DE template tagged DRAFT; `CHECKLIST.md` carries 🔴 production-blocker requiring client legal counsel sign-off before mass deployment; `LEGAL.md` §DE codifies the Bestandskunden frame. Real client legal review remains the client's responsibility — agency standards explicitly say so. |
| **`review_count_30d` data source ambiguous** for ≤€300/mo retainers | High pre-Batch-1; zero post-Batch-1 | `KPI.md` defines manual-screenshot path per tier; PostHog SQL explicitly removed as not applicable. |
| **Tool-cost ambiguity at €300+/mo retainer tier** — pass-through vs absorbed | Medium | `SEO.md` §8.4.8 codifies pass-through rule explicitly; retainer agreement template can include monthly cap if preferred. |
| **`@graph` pattern inconsistent in Google Rich Results Test** — forces re-authoring of all ~41 blocks at Full scope | Low-Medium | Pre-flight validation gate at Batch 3 start (one mock block, 30 min). Fall back to separate `<script>` tags per entity if RRT flags `@graph` issues. The pre-flight gate is even more load-bearing at Full scope (~41 blocks × re-author cost) than it would have been at MVP (12 blocks). |
| **Reference-impl file-path drift** — Batch 3 hunts for files that have moved | Low (paths verified 2026-05-18) | `find` re-run at Batch 3 start before any edits. Path corrections folded into §6. |
| **Per-directory premium upsells confused** — agency or client cancels the wrong product, misses the right one | Medium | `CITATIONS.md` §3 breaks out Gelbe Seiten / Das Örtliche / 11880 / meinestadt as distinct products with distinct trap mechanics (not collapsed under "Sellwerk"). |

---

## 11. What we are explicitly NOT doing in this plan

- ❌ **NOT** rebuilding `SEO.md` from scratch. Pre-batch hotfix corrects §5; Batch 1 expands §8.4; everything else stays as-is.
- ❌ **NOT** writing PAA seeds without ≥2-3 real clients per vertical to draw from. Batch 4 is trigger-gated.
- ❌ **NOT** building a custom review-management UI. Free GBP dashboard + vanity redirect + manual SMS/email for ≤€500/mo retainers. Paid tools (Reputigo, NiceJob) only at €500+/mo tier.
- ❌ **NOT** subscribing to Yext / Uberall / Moz Local. Per-directory manual claim + optional BrightLocal one-off for retainers €300+/mo.
- ❌ **NOT** adding new verticals beyond the existing 12.
- ❌ **NOT** changing the underlying agency stack (Astro · Next.js · Vercel · pnpm). This plan is rules + templates + docs only, with one ~2hr reference-impl update at Batch 3.
- ❌ **NOT** removing FAQPage schema from existing templates — it remains valid as an AI-extraction signal (just no SERP rich result in 2026).
- ❌ **NOT** acquiring new prospects during this plan's execution. Same rule as the 2026-05-16 plan: no cold outreach until at least Batch 1 ships.
- ❌ **NOT** adding the competitor citation-presence column to `CITATIONS.md` §4 (audit Improvement 5). Deferred to a trigger-gated future batch — needs real Berlin SERP data per vertical (≥2-3 clients) to populate accurately. Adds ~6 hrs of research and produces a "guess" without that data. Logged in `PENDING.md`.

---

## 12. Execution gate — CLEARED 2026-05-18

Breno resolved all 7 open decisions on 2026-05-18 via AskUserQuestion (recorded in §8). Pre-batch hotfix is approved to execute immediately.

Resolved gates:

1. ✅ §8 open decisions answered (#1: **Full scope** for schema cookbook — overrides MVP recommendation · #3: DE + EN + PT-BR day-one · #2/#4/#5/#6/#7: all defaults confirmed)
2. ✅ Pre-batch hotfix scope confirmed at **~85-100 min** (11 fix-locations: 5 markdown files + 2 TypeScript files; hotfix table item 10 spans both the studio-booking `schema.ts` and the `layout.tsx` callsite)
3. ✅ Confirmed: no new prospects pursued until Batch 1 ships (carry-over rule from 2026-05-16 plan)
4. ✅ Batch effort budget confirmed: Batch 1 at **10-12 hours** · Batch 2 at **7-9 hours** · Batch 3 at **22-28 hours (Full scope)** · Total: **40-48 hours**

**This plan supersedes any prior implicit roadmap.** `PENDING.md` will be updated incrementally per batch (§8 #7).

**Next action:** Pre-batch hotfix execution begins now. Then Batch 1 → Batch 2 → Batch 3 in sequence.

---

## Appendix A — Doc table after full plan execution (target state)

```
docs/design/
├── DESIGN-BEST-PRACTICES.md        (existing — unchanged)
├── TECH.md                         (existing — §1 product-type matrix footnote added in Batch 1)
├── PERFORMANCE.md                  (existing — unchanged)
├── ACCESSIBILITY.md                (existing — unchanged)
├── SECURITY.md                     (existing — unchanged)
├── RELIABILITY.md                  (existing — unchanged)
├── QUALITY.md                      (existing — unchanged)
├── INFRASTRUCTURE.md               (existing — unchanged)
├── FORMS.md                        (existing — unchanged)
├── ANALYTICS.md                    (existing — unchanged)
├── SEO.md                          (existing — §5 hotfix + §8.4 expanded ~250-300 lines)
├── I18N.md                         (existing — unchanged)
├── CHECKLIST.md                    (existing — 9 new pre-launch items across 3 batches)
├── SALES.md                        (existing — retainer-tier review-gen deliverables added)
├── UI_REVIEW.md                    (existing — unchanged)
├── LEGAL.md                        (existing — §DE "Post-service communications" Bestandskunden note added in Batch 1)
├── KPI.md                          (existing — review KPIs promoted in defaults)
├── INTEGRATIONS.md                 (existing — unchanged)
├── SOCIAL-SHARING.md               (existing — unchanged)
├── CITATIONS.md                    ← NEW (Batch 2)
├── local_business_website_benchmark_report.md  (existing — unchanged)
└── templates/
    ├── gastronomy.md               (existing — §11.1 + §11.6 + §11.8 updated)
    ├── beauty.md                   (existing — §11.1 + §11.6 + §11.8 updated)
    ├── trades.md                   (existing — §11.1 + §11.6 + §11.8 updated)
    ├── health.md                   (existing — §11.1 + §11.6 + §11.8 updated)
    ├── studio.md                   (existing — §11.1 + §11.6 + §11.8 updated)
    ├── professional-services.md    (existing — §11.1 + §11.6 + §11.8 updated)
    ├── pets.md                     (existing — §11.1 + §11.6 + §11.8 updated)
    ├── automotive.md               (existing — §11.1 + §11.6 + §11.8 updated)
    ├── education.md                (existing — §11.1 + §11.6 + §11.8 updated)
    ├── events-hospitality.md       (existing — §11.1 + §11.6 + §11.8 updated)
    ├── home-garden.md              (existing — §11.1 + §11.6 + §11.8 updated)
    └── artisan.md                  (existing — §11.1 + §11.6 + §11.8 updated)

docs/clients/
├── archived/                       (existing)
├── reference-solo-barber/          (existing — BRIEF.md Canonical NAP block added in Batch 3)
└── reference-studio-booking/       (existing — BRIEF.md Canonical NAP block added in Batch 3)

docs/audit/
├── PENDING.md                       (existing — incremental updates per batch)
├── AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md  (existing)
├── SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md         ← THIS DOC
├── archived/                       (existing)
├── jean.md                         (existing prospect intake)
├── cafedelcorso.md                 (existing prospect intake)
└── laudam.md                       (existing prospect intake)

clients/
├── reference-solo-barber/          (existing — schema + footer review-link updated in Batch 3)
└── reference-studio-booking/       (existing — schema + footer review-link updated in Batch 3)
```

---

## Appendix B — Research-source summary

The 2026 specifics in this plan come from three parallel research briefs commissioned on 2026-05-18. Load-bearing sources cited inline above; the headline findings:

### B.1 Review generation 2026

- **Whitespark Local Search Ranking Factors 2026** — review velocity lifted from #93 to #11.
- **Sterling Sky 2025 case study** — rankings "fall off a cliff" after ~3 weeks of zero new reviews; "5 fresh reviews/month beats 200 stale ones."
- **2026 GBP policy update** — on-site kiosks + staff-name requests explicitly banned; "Suspected Fake Review" warning label added; Germany now displays removed-review counts on profile.
- **FTC August 2024 fake-review rule** — US civil penalty up to ~$51k per violation.
- **Channel conversion rates**: SMS 12-20% · email 3-8% · QR-at-POS 2-5% · hybrid sequence lifts 40-60%.
- **German market specifics**: double opt-in for marketing SMS/email; service-email frame (Bestandskunden) the lawful pattern for review requests.
- **Response time**: 24h target; 89% of consumers prefer responsive businesses.
- **2024-2025 review purge**: 600% rise in deletions; 38% of removed were 5★ in English markets; DE disproportionately loses 1★ via defamation takedowns.

### B.2 Local citations 2026

- **BrightLocal Local Algorithm survey 2026** — citations #6 for Local Pack, #4 for Local Organic; median top-10 has ~81 citations.
- **Sterling Sky retainer experiments** — monthly citation maintenance "rarely moves rankings" once a baseline ~30-50 exists; exception is industry-specific (Jameda, Tripadvisor).
- **Whitespark 2026 AI-search angle** — 3 of top 5 AI-visibility factors are citation-like; new tailwind from LLM grounding.
- **Sellwerk trap** — Gelbe Seiten / Das Örtliche free premium trial auto-renews at €29.90/mo if not cancelled with 2-weeks notice.
- **Aggregator verdict** — Yext/Uberall not ROI-positive below €500/mo retainer; BrightLocal one-off ~€200 the realistic upsell.

### B.3 Schema.org 2026

- **FAQPage rich result** — deprecated for all sites 2026-05-07 (previously gov/health-only since Aug 2023). Schema still valid for AI ingestion; no SERP feature.
- **HowTo rich result** — dead since Sep 2023.
- **Course Info rich result** — dead since June 12 2025 (along with Book Actions, Claim Review, Estimated Salary, Learning Video, Special Announcement, Vehicle Listing).
- **`aggregateRating` self-serving rule** — Google's review-snippet policy: ineligible on the entity's own LocalBusiness; allowed only when a third party reviews you. Violations trigger manual action.
- **Type deprecations** — `ProfessionalService` and `Attorney` deprecated on schema.org; use specific subtypes (`LegalService`, `AccountingService`) or fall back to `LocalBusiness`.
- **Image requirements** — Google now wants 16:9 + 4:3 + 1:1 versions in `image` array; min 50,000 px².
- **`openingHoursSpecification`** — preferred over deprecated `openingHours` string.
- **`Person` for solo operators** — modest E-E-A-T benefit via `@graph` + `@id` linking; high value for regulated professions (Physician/Dentist/Attorney).

Full source citations live in each research brief; not duplicated here.

---

*Plan complete. Awaiting Breno's review + answers to §8 open decisions before pre-batch hotfix + Batch 1 start.*
