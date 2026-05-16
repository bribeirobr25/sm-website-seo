# PENDING.md — agency-level backlog aggregator

**Last updated:** 2026-05-16 (Batch 0 housekeeping — client builds deleted, docs-expansion phase begins)

Single source of truth for unresolved items across **all clients + active prospects + open agency-template work**. Replaces the need to grep individual `BRIEF.md` files when you need a portfolio-wide view of "what's owner-pending, what's user-pending, what's Claude-pending."

**Maintenance discipline:** every time a per-client BRIEF.md DRAFT item gets resolved, mark it ✅ here. Every time a new DRAFT or open finding surfaces in a session, add it. Refresh the "Last updated" date.

---

## Agency state at a glance

- **Active client builds:** none. Jean Souza Barbearia + Porto dos Ribeiros (3 variants) deleted from `clients/` on 2026-05-16 because they pre-dated the legal/KPI/monitoring rule expansion. Per-client docs archived at `docs/clients/archived/` for historical reference.
- **Current pipeline:** docs-expansion phase per `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` (Batches 0 → 3, ~52-62 hrs total).
- **Prospects:** 2 intake-only (Café Del Corso, Laudam) — no scaffold work until expansion ships and decisions confirmed with each owner.

---

## By next-action owner — what's blocking what

| Owner | Item | Where | Severity |
|---|---|---|---|
| **You (Breno)** | Approve Batch 0 completion + authorize Batch 1 kickoff (LEGAL.md 4-jurisdiction + cookie banner spec + Sentry recipe + CHECKLIST.md operational tests + Working Principles updates) | `docs/audit/AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` §Batch 1 | 🔴 Blocks: all downstream rule + reference-implementation work |
| **You (Breno)** | Confirm or build 2-3 friend-and-family portfolio sites once Batch 3 reference implementations exist (post-expansion they double as portfolio) | root `CLAUDE.md` §Portfolio strategy | 🟠 Blocks: cold-outreach close-rate scaling |
| **Claude (next session)** | Execute Batch 1 — LEGAL.md (DE + BR + PT + US), cookie banner spec, INFRASTRUCTURE.md Sentry server-only recipe, CHECKLIST.md operational tests sub-section, Working Principles updates | `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` §Batch 1 | 🔴 Awaiting authorization |
| **Claude (Batch 2)** | KPI.md (product + infra KPIs), ANALYTICS.md edit (three-streams rule → three marketing + one product on Tier 3+), PostHog consent recipe, per-vertical template §11 "Measurement + Integrations + SEO essentials" | `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` §Batch 2 | 🟠 Blocked on Batch 1 |
| **Claude (Batch 3)** | INTEGRATIONS.md (Neon + Upstash + Resend + Stripe), SOCIAL-SHARING.md (WhatsApp + IG + FB + X + copy-paste), 2 reference implementations (solo barber Tier 2 / studio with booking Tier 3) | `AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md` §Batch 3 | 🟠 Blocked on Batch 2 |

---

## Prospects — intake-only, no scaffold

| Prospect | Intake md | Vertical | Status |
|---|---|---|---|
| Café Del Corso | `docs/audit/cafedelcorso.md` | Gastronomy | Not contacted — wait for Batch 3 gastronomy reference impl before scaffolding |
| Laudam (Rechtsanwalt) | `docs/audit/laudam.md` | Professional Services | Not contacted — wait for Batch 3 reference impl + DE legal completeness check |

**Discipline:** no scaffold work on either prospect until the expansion plan completes. New prospects can be added as intake mds (no date suffix) at any time — they just queue behind the rule work.

---

## Agency-template / standards work

| Item | State | Trigger to resolve |
|---|---|---|
| **AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md** (Batches 0/1/2/3) | Batch 0 complete 2026-05-16. Batch 1 awaiting authorization. | Sequential execution per plan |
| **INFRASTRUCTURE.md scaffold drop-in** (vercel.json + 404/500 + ci.yml + uptime monitor) | Doc exists. Sentry recipe to be appended in Batch 1 (server-only on Tier 1, full SDK on Tier 2 + 3) | First production cutover after expansion ships |
| **Reference implementations (Batch 3)** | None yet — solo barber (Tier 2/Type 1, BR LGPD) + studio with booking (Tier 3/Type 3) planned | Each is validated/refined when first matching prospect signs |
| **Idea A — 3-palette picker** (`<PaletteSwitcher>` demo-mode component) | Proposed 2026-05-15; deferred | Next cold-call demo where palette ambiguity is the differentiator |
| **Idea B — Per-vertical / sub-archetype font pairings** | Proposed 2026-05-15; deferred | Next non-Beauty/Gastronomy prospect OR when font monotony becomes a real complaint |

---

## Recently resolved (within last ~30 days)

- ✅ **2026-05-16 (Batch 0 housekeeping)** — Deleted Jean + Porto client builds from `clients/`; archived `docs/clients/jean-souza-barber/` + `docs/clients/porto-dos-ribeiros/` → `docs/clients/archived/`; moved `jean-souza-barber-2026-05-14.md` + `porto-dos-ribeiros-2026-05-14.md` → `docs/audit/archived/`; rewrote root `CLAUDE.md` Current client roster ("no active builds"); fixed `TECH.md` Tailwind v4 contradiction (removed `tailwind.config.ts` from 2 project trees + §Tailwind code example, replaced with `@theme {}` in CSS); rewrote `gastronomy.md` §9.4 (archetype patterns, no directory references); dropped CLAUDE.md cross-ref rule (line 106) — replaced with lighter practice note preferring section *headings* over numbers; rewrote this PENDING.md.
- ✅ **2026-05-16 (afternoon — pre-deletion)** — Root `CLAUDE.md` + README updates: added `docs/design/templates/` row to Document structure table (12 vertical templates listed); enhanced "How to start" Step 2 to mention vertical-template picking.
- ✅ **2026-05-16 (afternoon — pre-deletion)** — `docs/audit/` cleanup: deleted `website-list.md` (editorial draft notes fully integrated into `local_business_website_benchmark_report.md`; zero references in the repo). Created `docs/audit/archived/` with README documenting the archive convention. Moved `porto-dos-ribeiros-2026-05-13.md` → `archived/` (superseded by 05-14 audit).
- ✅ **2026-05-16** — 7 new per-vertical templates created speculatively (explicit user override of prospect-trigger rule): `templates/professional-services.md` · `templates/pets.md` · `templates/automotive.md` · `templates/education.md` · `templates/events-hospitality.md` · `templates/home-garden.md` · `templates/artisan.md`. Total: 12 vertical templates · 4,597 lines across the library.
- ✅ **2026-05-15** — Booking-platform tier-3 elevation rule added to `DESIGN-BEST-PRACTICES.md` §Sourcing hierarchy
- ✅ **2026-05-15** — Lighter-on-hover WCAG anti-pattern rule added to `DESIGN-BEST-PRACTICES.md` §Hover state contrast
- ✅ **2026-05-15** — Palette re-sourcing mid-build rule added to `DESIGN-BEST-PRACTICES.md` §Re-sourcing the palette mid-build
- ✅ **2026-05-15** — Dark-mode per-vertical coverage audited (5 verticals)
- ✅ **2026-05-15** — Image-extraction operational toolkit documented in `TECH.md` §Image-extraction operational toolkit
- ✅ **2026-05-14** — Audit md supersession convention documented in `CHECKLIST.md` §Audit gate
- ✅ **2026-05-14** — INFRASTRUCTURE.md created with full scaffold drop-in recipe
- ✅ **2026-05-14** — SECURITY.md §6.5 LGPD added (Brazilian-market legal)
- ✅ **2026-05-14** — CHECKLIST.md BR-legal pre-launch sub-section + prospect intake template

---

## How to use this file

**Daily / weekly:** scan the "By next-action owner" table at the top — answers "what should I focus on today?"

**Before a cold call:** open the prospect's section under "Prospects." For new prospects, create an intake md per `CHECKLIST.md` §Prospect intake template.

**Before a production cutover:** filter for items marked 🔴 with that client's name. All must resolve before flipping `noindex` off. (Currently no active client builds — this section will repopulate once Batch 3 reference implementations spawn portfolio sites or a prospect signs.)

**When a new item surfaces in a session:** append to the appropriate section. Note the date in the resolution column if it was discovered today.

**When an item resolves:** move to "Recently resolved" with date. Keep "Recently resolved" to the last ~30 entries; archive older ones to a quarterly summary if needed.
