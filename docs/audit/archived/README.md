# archived/ — retired audit reports + completed-initiative runbooks

## What this folder is for

Audit reports + build runbooks whose findings have been **fully addressed** and whose ongoing reference value has dropped to "historical record only." Mirrors the same convention as `docs/clients/archived/`.

Each archived file:
- Represents an audit cycle whose blockers + warnings are all closed (cross-referenced in `docs/audit/PENDING.md` "Recently resolved"), OR
- Documents a one-time initiative (portfolio rebuild, gastronomy upgrade, etc.) whose deliverables are now codified into the rule library
- Should NOT be edited after archiving — it's a frozen historical record. If a finding resurfaces, open a new dated audit; do not re-edit the archived one

## What goes here vs deletion

| Disposition | Criteria |
|---|---|
| **Stays in `docs/audit/` (active)** | `PENDING.md` is the rolling aggregator. Any dated audit whose findings are still being addressed stays in the parent folder until closed |
| **Moved to `docs/audit/archived/`** | Audit/runbook whose findings + deliverables are 100 % addressed AND has historical-record value (rule-evolution evidence, what-broke-and-why, prior-art for the next similar audit) |
| **Deleted outright** | Stale draft never published; superseded same-day by a better version of itself; no historical value |

## How to reference archived audits

From a current doc (e.g. `docs/audit/PENDING.md` "Recently resolved"):

```markdown
- ✅ **2026-05-23 (Portfolio rebuild audit)** — All findings closed.
  Full audit detail: `docs/audit/archived/2026-05-23-portfolio-rebuild-audit.md`.
```

When linking, prefer relative paths so the doc still resolves if the parent folder is later renamed.

## What is currently here

See `git log docs/audit/archived/` for the move history. The folder is kept lean — only files still cross-referenced by the live rule library or per-client docs are retained:

- `2026-05-12-porto-dos-ribeiros-uiux-review.md` — anti-pattern reference cited by `COLOR.md` + ~11 component spec sheets (the "what failed and why" evidence behind several design rules)
- `2026-05-23-portfolio-rebuild-audit.md` — origin/rationale cited by 6 component spec sheets (newsletter-mock, booking-mock, press, course-list, photo-grid, menu-card)
- `PORTFOLIO-BUILD-RUNBOOK.md` — the canonical demo-build workflow, still referenced by live per-client docs (e.g. `docs/clients/demo-eiscafe-bellini/`)

Completed audits with no remaining cross-references (the 2026-05-25 cross-tree audit, the three 2026-05-26 bonsai audits, the gastronomy upgrade plan + instantiation runbook, and the 2026-05-27 archive-candidacy rollover) were deleted in the 2026-06-12 doc-leanness sweep — their findings are codified in `docs/design/` rules + the live `clients/demo-*/` builds, so the audit records carried no further value.
