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
| `reference-solo-barber/` | `docs/clients/reference-solo-barber/` | 2026-05-19 | Source code at `clients/reference-solo-barber/` deleted 2026-05-19. Components extracted to `docs/design/components/_impl/`; non-component working code (lib, configs, LGPD pages) to `docs/design/_impl/`; install-ready replacement at `scaffolds/astro-tier2/`. Docs retained as **the canonical worked example of a Tier 2 / BR-LGPD per-client doc set** — `CLAUDE.md` shape, `BRIEF.md` shape, `design.md` shape. Reference when drafting any new Tier-2 BR client's docs. |
| `reference-studio-booking/` | `docs/clients/reference-studio-booking/` | 2026-05-19 | Source code at `clients/reference-studio-booking/` deleted 2026-05-19. Components + lib + DE-DSGVO legal pages + Drizzle schema + form-endpoint extracted to `docs/design/_impl/`; install-ready replacement at `scaffolds/nextjs-tier3/`. Docs retained as **the canonical worked example of a Tier 3 / DE-DSGVO per-client doc set** — `CLAUDE.md` shape, `BRIEF.md` shape, `design.md` shape. Reference when drafting any new Tier-3 DE client's docs. |

## Convention going forward

When a client's code is deleted from `clients/` but the per-client docs have historical-record value, move the entire `docs/clients/[slug]/` folder here in one atomic move. Update this README with a row describing what was archived and why.

Archived bundles are evidence of *what the agency standards looked like at the time of the build*, not deliverable templates. Pull from `docs/design/templates/` + `scaffolds/{astro-tier2,nextjs-tier3}/` for current work — `clients/reference-*` no longer exists post-the 2026-05-19 restructure.
