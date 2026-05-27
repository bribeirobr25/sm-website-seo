# Archive candidacy audit (2026-05-27)

**Scope:** every `.md` under `docs/` (excluding subtrees already in `archived/`). Triaged into EVERGREEN · ARCHIVE NOW · KEEP IN PLACE · DELETE.

## Summary

**99 files total** under `docs/` (43 evergreen rule docs + 12 vertical templates + 32 component specs + 4 component-tree READMEs + 8 audit-tree files + 21 active per-client docs + already-archived bundles).

- **76 EVERGREEN** — no action (rule library, templates, component specs, active per-client docs, READMEs)
- **5 ARCHIVE NOW** — historical/completed audits + Bellini-specific runbook artifacts that no other demo carries
- **1 KEEP IN PLACE (caveats)** — `PENDING.md` (rolling resolved log healthy at 203 lines)
- **0 DELETE OUTRIGHT** — every candidate has historical-record value

---

## Archive recommendations (move to `archived/`)

### 1. `docs/audit/2026-05-26-bonsai-full-audit.md` → `docs/audit/archived/`
**Size:** 510 lines · 8 blockers · 19 warnings · 71 passes
**Why archive-eligible:** Per `PENDING.md` "Recently resolved" 2026-05-26 entry "**Bonsai full-rule audit + visual regression — 8 blockers + 19 warnings closed**" — every blocker B1–B8 explicitly addressed (B7 was deferred as agency policy and documented). Audit findings rolled up into rules (i18n patterns backport) and scaffold backports. No active reference in any rule doc.
**Has historical-record value:** Yes (worked-example of a 4-locale demo audit; the audit method "4 parallel subagents with fresh context" is referenced in §1 as methodology).

### 2. `docs/audit/2026-05-26-bonsai-visual-regression.md` → `docs/audit/archived/`
**Size:** 132 lines · 0 blockers · 2 cosmetic warnings
**Why archive-eligible:** Snapshot deliverable — 22 screenshots × 4 locales × 3 viewports captured 2026-05-26, fully delivered. PENDING.md "Recently resolved" 2026-05-26 captures the closure. No subsequent rule references it.
**Has historical-record value:** Marginal (one of the cleaner visual-regression report shapes; useful as a template if a future demo needs the same format).

### 3. `docs/audit/2026-05-26-bonsai-demo-audit.md` → `docs/audit/archived/`
**Size:** 172 lines
**Why archive-eligible:** Earlier same-day audit superseded by `2026-05-26-bonsai-full-audit.md` (more comprehensive). PENDING.md explicitly notes "the latter now superseded" (referring to `2026-05-25-cross-tree-audit.md` but the sequence is bonsai-demo → bonsai-full → visual). All blockers in this audit are a subset of the full-audit blockers, all closed.
**Has historical-record value:** Low (superseded same-day). Could even be a delete candidate, but per the rule "DELETE is rare" → archive.

### 4. `docs/audit/2026-05-25-cross-tree-audit.md` → `docs/audit/archived/`
**Size:** 185 lines · 6 blockers + warnings
**Why archive-eligible:** PENDING.md explicitly says "the latter now superseded" referring to this file (under the 2026-05-26 closure entry). The cross-tree audit's blockers were folded into the bonsai scaffold backport + ANALYTICS↔KPI event-naming reconciliation, all listed under PENDING.md "Recently resolved" 2026-05-26.
**Has historical-record value:** Yes (the 5-parallel-subagent audit methodology + the systemic-vs-bonsai-only triage approach are referenced patterns).

### 5. `docs/audit/2026-05-23-portfolio-rebuild-audit.md` → `docs/audit/archived/`
**Size:** 354 lines · scorecard + 6-demo audit
**Why archive-eligible:** PENDING.md 2026-05-23 "3-demo audit + critical-bug sweep + portfolio hardening" entry closes all critical bugs (Adèle team-chef.jpg, Saltlines schema, Bellini Restaurant→IceCreamShop, favicon gaps, OG path). The remaining "🟡 acceptable for portfolio demo" items in §7 (real photography, component parameterization, section-count variation) are all trigger-gated to client conversion. No design doc cross-references this audit.
**Has historical-record value:** Yes (the 6-demo cross-rule audit table §7.2 + scorecard §7.4 + 5 net-new agency rules-codification mapping = canonical worked example of audit-to-rule loop).

### 6. `docs/clients/demo-eiscafe-bellini/VISUAL-VALIDATION.md` → `docs/clients/demo-eiscafe-bellini/archived/`
**Size:** 160 lines · dated 2026-05-21 · Phase 6 report
**Why archive-eligible:** Snapshot deliverable from the now-archived `PORTFOLIO-BUILD-RUNBOOK.md` §3.6 workflow. References the runbook (which lives in `docs/audit/archived/`). No other demo carries a VISUAL-VALIDATION.md — the workflow that produced it is retired. Findings fully resolved per PENDING.md 2026-05-23.
**Has historical-record value:** Low (the runbook that authored it is archived).

### 7. `docs/clients/demo-eiscafe-bellini/COPY-DE.md` + `COPY-EN.md` + `CREDITS.md` → `docs/clients/demo-eiscafe-bellini/archived/` (3 files)
**Why archive-eligible:** Same lineage — produced by the archived `PORTFOLIO-BUILD-RUNBOOK.md` workflow (§1.3 CREDITS canonical-source-of-truth rule; §3.3 COPY-DE template). No other demo replicates this pattern. Per-component spec `DESIGN-BEST-PRACTICES.md:188` references `CREDITS.md` generically as a future pattern but does not require Bellini's file specifically.
**Caveat:** `CREDITS.md` is referenced by `design.md:180` + `design.md:191` (image-sourcing brief). **Before moving, update those 2 cross-references in `design.md`** or leave `CREDITS.md` in place — recommend updating refs and archiving (the bellini design.md should not point to a Bellini-specific historical file).
**Has historical-record value:** Marginal — useful only as a Phase-6 runbook artifact, which itself is archived.

---

## Keep in place with caveats

### `docs/audit/PENDING.md`
**Why keep:** Living aggregator. Single source of truth for backlog. The "Recently resolved" log currently sits at ~75 entries / ~203 lines — **well under any rollover threshold.** No action needed at this audit. **Re-evaluate when the file passes 700 lines or the "Recently resolved" section passes 100 entries** — at that point roll pre-2026-05-15 entries into `docs/audit/archived/PENDING-rolled-YYYY-MM-DD.md` and keep PENDING.md's resolved log as a 30-day window.

### `docs/audit/cafedelcorso.md` + `docs/audit/laudam.md`
**Why keep:** Active prospect intakes per PENDING.md "Prospects" table. Both are "Not contacted. Scaffold-ready 2026-05-18." When a prospect closes (signs or drops), the intake either (a) gets superseded by a per-client `docs/clients/[slug]/` bundle and the intake archives, or (b) gets marked dead-prospect and archives. Today: neither has triggered.

### `docs/audit/RUNBOOK-real-browser-audit.md`
**Why keep:** Living runbook referenced by `ui-ux-reference-study.md` Phase 1c (HBA + Bulgari deferred). Still authoritative for the next time the MCP browser hits a Cloudflare / HTTP/2 / Akamai block. Re-triggers on every UI/UX 6-month refresh (2026-11-18).

### `docs/audit/ui-ux-reference-study.md`
**Why keep:** 1,539-line measurement baseline. Actively cross-referenced by `SEO.md` §15 (2× tech-SEO anti-patterns), `CHECKLIST.md` §Vertical-scoped gates, `TECH.md` §7 (tokens canon), `DESIGN-BEST-PRACTICES.md` §3 + §Cross-site synthesis (3× citations). 6-month refresh scheduled 2026-11-18 per PENDING.md.

---

## Evergreen (no action)

### Rule library (`docs/design/`) — 21 files
- `docs/design/ACCESSIBILITY.md`
- `docs/design/ANALYTICS.md`
- `docs/design/CHECKLIST.md`
- `docs/design/CITATIONS.md`
- `docs/design/COLOR.md`
- `docs/design/DESIGN-BEST-PRACTICES.md`
- `docs/design/FORMS.md`
- `docs/design/I18N.md`
- `docs/design/INFRASTRUCTURE.md`
- `docs/design/INTEGRATIONS.md`
- `docs/design/KPI.md`
- `docs/design/LEGAL.md`
- `docs/design/PERFORMANCE.md`
- `docs/design/QUALITY.md`
- `docs/design/RELIABILITY.md`
- `docs/design/SALES.md`
- `docs/design/SECURITY.md`
- `docs/design/SEO.md`
- `docs/design/SOCIAL-SHARING.md`
- `docs/design/TECH.md`
- `docs/design/UI_REVIEW.md`
- `docs/design/local_business_website_benchmark_report.md`

### Per-vertical templates (`docs/design/templates/`) — 12 files
artisan · automotive · beauty · education · events-hospitality · gastronomy · health · home-garden · pets · professional-services · studio · trades

### Component spec sheets (`docs/design/components/`) — 32 + READMEs
All 32 component spec sheets + `README.md` + `_impl/README.md` + `_impl/` working code. All evergreen.

### Active per-client docs (`docs/clients/demo-*/`) — 21 files across 7 demos
All 7 demos × {CLAUDE.md, design.md, BRIEF.md} = 21 files. All EVERGREEN. (Bellini's 4 extra files break out separately above.)

### Root + archived READMEs
- `/CLAUDE.md` (root)
- `/docs/clients/archived/README.md`
- `/docs/audit/archived/README.md` (does not exist — recommend creating once these moves land, per the convention `docs/clients/archived/README.md` already documents)

### Already in `archived/` (no action)
- `docs/audit/archived/GASTRONOMY-UIUX-UPGRADE-PLAN-2026-05-22.md`
- `docs/audit/archived/PORTFOLIO-BUILD-INSTANTIATION-2026-05-20-GASTRONOMY.md`
- `docs/audit/archived/PORTFOLIO-BUILD-RUNBOOK.md`
- `docs/audit/archived/demo-eiscafe-bellini-RESEARCH.md`
- `docs/audit/archived/gastronomy-coffee-RESEARCH-2026-05-22.md`
- `docs/clients/archived/reference-solo-barber/{BRIEF,CLAUDE,design}.md`
- `docs/clients/archived/reference-studio-booking/{BRIEF,CLAUDE,design}.md`

---

## Delete outright

None. Every candidate has at minimum historical-record value (audit-gate semantics per `CHECKLIST.md`).

---

## Pre-move action items (do not skip)

1. **Before archiving Bellini's `CREDITS.md`** → update 2 cross-refs in `docs/clients/demo-eiscafe-bellini/design.md:180,191` (either rewrite to point to the archived path, or rewrite to point at the generic `DESIGN-BEST-PRACTICES.md §3` photo-sourcing rule).
2. **Create `docs/audit/archived/README.md`** — `docs/clients/archived/README.md` documents the convention; the parallel `docs/audit/archived/` folder has 5 files already but no convention README. Add one before the next batch lands.
3. **Verify zero design-doc references** to the 5 audit files being archived. Confirmed in this audit via `grep`: only references are inside `PENDING.md` "Recently resolved" entries (which are themselves historical) — those refs survive archiving and remain valid as `docs/audit/archived/...` paths.

---

## Recommended commit shape

One commit per archive batch:
- Commit 1: 5 audit files (2026-05-23 + 2026-05-25 + 3× 2026-05-26) → `docs/audit/archived/` + new `archived/README.md`
- Commit 2: 4 Bellini-specific files → `docs/clients/demo-eiscafe-bellini/archived/` + `design.md` cross-ref update

Both commits should update PENDING.md's "Last updated" + add a "Recently resolved" entry noting the archive batch + reference back to this audit doc.
