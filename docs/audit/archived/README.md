# archived/ — superseded audit + intake artifacts

## What this folder is for

Audit files that have been **fully superseded** by a newer dated audit md but retained for historical-record value. Each archived file:

- Pins the audit gate at the date it represents (per `docs/design/CHECKLIST.md` §8 "When to audit" — quarterly, kickoff, handoff, or major rule change)
- Has been superseded by a more recent dated audit md in the parent `docs/audit/` folder
- Should NOT be edited after archiving — it's a historical record. Updates go in the current dated audit md (per the §8 supersession convention)

## What goes here vs deletion

| Disposition | Criteria |
|---|---|
| **Stays in `docs/audit/` (active)** | Current audit cycle for the client. Amended in place per the §8 supersession convention. |
| **Moved to `docs/audit/archived/`** | Superseded by a newer dated audit md AND retains historical-record value (audit-gate semantics) |
| **Deleted outright** | Editorial drafts, working notes that have been fully integrated into canonical docs (e.g., the now-removed `website-list.md` whose content lives in `local_business_website_benchmark_report.md`) |

## How to reference archived files

When a current document needs to point to an archived audit (e.g., a "Supersedes" declaration), use the `docs/audit/archived/[filename]` path explicitly. Do not retroactively edit archived files to update internal references.

## Current contents

| File | Superseded by | Archived on | Why archived |
|---|---|---|---|
| `porto-dos-ribeiros-2026-05-13.md` | `docs/audit/porto-dos-ribeiros-2026-05-14.md` | 2026-05-16 | The 05-14 audit re-ran the same compliance scorecard + 12-question reliability rubric AND extended coverage to Variants B and C (which did not exist on 05-13) AND incorporated the new §3 / §5 / §9 rules. The 05-13 audit is fully superseded but pinned as the original audit gate. |

## Convention going forward

Per `CHECKLIST.md` §8 "Supersession convention" (added 2026-05-15), audits should be **amended in place** rather than re-created as new dated files. The 05-13 → 05-14 split predates this convention; future post-audit changes will amend existing files in `docs/audit/` directly. Net result: this `archived/` folder should grow slowly — typically one entry per client per audit-trigger event (quarterly review, rule change, handoff), not one per change.
