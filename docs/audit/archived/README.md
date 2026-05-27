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
- ✅ **2026-05-26 (Bonsai full-rule audit)** — All 8 blockers + 19 warnings closed.
  Full audit detail: `docs/audit/archived/2026-05-26-bonsai-full-audit.md`.
```

When linking, prefer relative paths so the doc still resolves if the parent folder is later renamed.

## What is currently here

See `git log docs/audit/archived/` for the move history. As of 2026-05-27 the folder contains:

- 5 files moved 2026-05-26 (`PORTFOLIO-BUILD-RUNBOOK.md`, `PORTFOLIO-BUILD-INSTANTIATION-2026-05-20-GASTRONOMY.md`, `GASTRONOMY-UIUX-UPGRADE-PLAN-2026-05-22.md`, `demo-eiscafe-bellini-RESEARCH.md`, `gastronomy-coffee-RESEARCH-2026-05-22.md`) — one-time initiatives whose deliverables are codified in `docs/design/` rules + `clients/demo-*/` builds
- The archive-candidacy audit on 2026-05-27 (this current rollover) added more — see git log for the move set
