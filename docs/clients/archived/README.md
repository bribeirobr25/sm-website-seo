# archived/ — retired per-client docs

## What this folder is for

Per-client doc bundles (`CLAUDE.md` + `design.md` + `BRIEF.md` + any per-client supporting files) for clients whose code has been deleted from `clients/` but whose documentation retains historical-record value. Each archived bundle:

- Represents a build that pre-dates a major rule expansion or was abandoned without going to production
- Has its source code removed from `clients/` — only the docs remain here
- Should NOT be edited after archiving — it's a historical record. If the client returns and re-engages, start fresh from a reference implementation rather than reviving the archived bundle

## What goes here vs deletion

| Disposition | Criteria |
|---|---|
| **Stays in `docs/clients/[slug]/` (active)** | Live client engagement — demo, production, or retainer phase |
| **Moved to `docs/clients/archived/[slug]/`** | Code removed from `clients/` AND the docs retain historical-record value (worked example, rule-evolution evidence, lessons-learned reference) |
| **Deleted outright** | Demo never shipped + no rule-evolution value + client did not sign |

## How to reference archived bundles

When a current document needs to point to an archived per-client doc (e.g., a "Predecessor implementation" note in a new client's BRIEF.md, or a worked-example callout in a per-vertical template), use the `docs/clients/archived/[slug]/[file]` path explicitly. Do not retroactively edit archived files to update internal references — they are pinned to the rule state they were built under.

## Current contents

| Folder | Originally at | Archived on | Why archived |
|---|---|---|---|
| `jean-souza-barber/` | `docs/clients/jean-souza-barber/` | 2026-05-16 | Source code at `clients/jean-souza-barber/` deleted 2026-05-16 in the Batch 0 housekeeping pass. The original build pre-dated the LEGAL.md / KPI.md / INFRASTRUCTURE.md (Sentry) rule expansion; rebuilding cleanly from the Batch 3 `reference-solo-barber` impl is the right path forward if the client signs. Docs retained as the first beauty-vertical worked example. |
| `porto-dos-ribeiros/` | `docs/clients/porto-dos-ribeiros/` | 2026-05-16 | Source code at `clients/porto-dos-ribeiros/` (3 variants A/B/C) deleted 2026-05-16 in the Batch 0 housekeeping pass. Same rationale as Jean Souza — pre-dated the legal/KPI/monitoring rule expansion. Docs retained as the first gastronomy-vertical multi-variant exploration. |

## Convention going forward

When a client's code is deleted from `clients/` but the per-client docs have historical-record value, move the entire `docs/clients/[slug]/` folder here in one atomic move. Update this README with a row describing what was archived and why. The audit-gate equivalent (dated audit mds) goes to `docs/audit/archived/` separately — these two archive folders are independent.

Per the rule-expansion convention (Batch 0 onward), archived bundles are evidence of *what the agency standards looked like at the time of the build*, not deliverable templates. Pull from `docs/design/templates/` + `clients/reference-*` for current work.
