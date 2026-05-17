# PENDING.md — agency-level backlog aggregator

**Last updated:** 2026-05-17 (reference impls `pnpm build`-validated end-to-end; 5 build-time rules captured in INTEGRATIONS.md + CHECKLIST.md)

Single source of truth for unresolved items across **all clients + active prospects + open agency-template work**. Replaces the need to grep individual `BRIEF.md` files when you need a portfolio-wide view of "what's owner-pending, what's user-pending, what's Claude-pending."

**Maintenance discipline:** every time a per-client BRIEF.md DRAFT item gets resolved, mark it ✅ here. Every time a new DRAFT or open finding surfaces in a session, add it. Refresh the "Last updated" date.

---

## Agency state at a glance

- **Active client builds:** none paying. Two **reference implementations** live as canonical worked examples:
  - `clients/reference-solo-barber/` (Tier 2 / Type 1 / BR-LGPD) — Astro + Tailwind v4, Sentry server-only
  - `clients/reference-studio-booking/` (Tier 3 / Type 3 / DE-DSGVO) — Next.js 16 + Tailwind v4 + Drizzle + Neon + Upstash + Resend + Sentry + 4-stream analytics + own trial-booking flow
- **Current pipeline:** docs-expansion **complete** — Batches 0, 1, 2, 3 all shipped 2026-05-16. New rules library + 2 reference impls ready to seed paying-client work.
- **Prospects:** 2 intake-only (Café Del Corso, Laudam) — clearance to scaffold from reference impls when ready.

---

## By next-action owner — what's blocking what

| Owner | Item | Where | Severity |
|---|---|---|---|
| **You (Breno)** | Commit + push the 15-entry working tree (build fixes + 4 doc updates from this round) | git working tree | 🔴 Required before next session reads "main as truth" |
| **You (Breno)** | Pick the first friend-and-family portfolio site — solo-barber template fits beauty/trades verticals; studio-booking fits studio/health/professional-services with booking needs | root `CLAUDE.md` §Portfolio strategy | 🟠 Blocks: cold-outreach close-rate scaling |
| **You (Breno)** | Approach decision for Café Del Corso + Laudam — both intakes ready; rules library and reference impls now complete | `docs/audit/cafedelcorso.md` · `docs/audit/laudam.md` | 🟠 Cold-outreach kickoff |
| **Claude (on demand)** | Apply reference-impl scaffold to a real prospect — `cp -r clients/reference-{matching-impl} clients/[real-slug]`, swap DRAFT items per the impl's own DRAFT checklist | Triggered per signed prospect | — On standby |

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
| **AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md** (Batches 0/1/2/3) | ✅ All 4 batches complete 2026-05-16 | — |
| **INFRASTRUCTURE.md scaffold drop-in** (vercel.json + 404/500 + ci.yml + uptime monitor) | ✅ Doc complete with Sentry recipe (§6) — server-only on Tier 1 form endpoints, full SDK on Tier 2 + 3 | First paying-client production cutover |
| **Reference implementations** | ✅ Both shipped: solo-barber (Tier 2 / BR-LGPD) + studio-booking (Tier 3 / DE-DSGVO). Both pending: `pnpm install && pnpm build` verification by human reviewer; browser/visual verification by human reviewer | When first matching prospect signs OR when picked as portfolio-site basis |
| **Idea A — 3-palette picker** (`<PaletteSwitcher>` demo-mode component) | Proposed 2026-05-15; deferred | Next cold-call demo where palette ambiguity is the differentiator |
| **Idea B — Per-vertical / sub-archetype font pairings** | Proposed 2026-05-15; deferred | Next non-Beauty/Gastronomy prospect OR when font monotony becomes a real complaint |

---

## Recently resolved (within last ~30 days)

- ✅ **2026-05-17 (reference impls `pnpm build` validation + rules harvested)** — Ran `pnpm install && pnpm build` on both reference impls. **Both green.** Validation surfaced 5 real bugs the agency rule library wouldn't have otherwise caught; all 5 fixed in code + encoded as rules:
  1. `@sentry/astro` v8 rejects `sendDefaultPii` as integration option → runtime init moved to `sentry.{client,server}.config.mjs` (auto-discovered); rule encoded in `INTEGRATIONS.md` §Sentry (Astro split build-time vs runtime).
  2. Astro hints on `<script type="...">` with attributes → add explicit `is:inline` (fixed in `BaseLayout.astro`).
  3. `@sentry/nextjs ^8` doesn't support Next 16 + Turbopack; v9+ requires `instrumentation.ts` → bumped to `^10.0.0`, added `instrumentation.ts` with `onRequestError = Sentry.captureRequestError`. Version-floor table encoded in `INTEGRATIONS.md` §Sentry (Next.js). Also: `withSentryConfig` options `hideSourceMaps` + `disableLogger` removed in v10 (use `sourcemaps.deleteSourcemapsAfterUpload` / drop the option) — documented.
  4. `typedRoutes: true` rejects `string` href on `<Link>` in wrapper components → cast `href as Route` at the wrapper seam (Button.tsx). Pattern is targeted, preserves typedRoutes safety for direct `<Link>` use elsewhere.
  5. **`db.ts` + `ratelimit.ts` + `resend.ts` all threw at module-eval** — breaks Next page-data collection + CI builds + preview deploys. **New top-level rule** in `INTEGRATIONS.md` §Lazy initialization for env-dependent server modules: every env-dependent server module must lazy-init via `getX()` getter. Pattern + `WRONG`/`RIGHT` code blocks + when-to-apply table now canonical. Reference impls' `db.ts` / `ratelimit.ts` / `resend.ts` all refactored to match. New operational test in `CHECKLIST.md` §1.5 — "Build robustness — env-var resilience" subsection — catches future regressions.
- ✅ **2026-05-16 (Batch 3 — reference impl: studio-booking)** — `clients/reference-studio-booking/` complete. Next.js 16 App Router + Tailwind v4 + Drizzle + Neon HTTP driver + Upstash rate-limit + Resend + Sentry (3 configs, all `sendDefaultPii: false`) + PostHog (EU + opt-out-by-default) + GA4 + Clarity. Cream + sage palette per `templates/studio.md` boutique-sensory sub-archetype. 18 React components (Header/Footer + 6 sections + 5 UI primitives + 1 bootstrap). 9 pages (home + kurse + stundenplan + trial form + impressum DSGVO + datenschutz DSGVO 10-section + 404 + 500 + /api/trial endpoint with Zod + honeypot + rate-limit + Resend). YogaStudio JSON-LD. 9 `<Placeholder>` slots remain for real photos. Per-client docs at `docs/clients/reference-studio-booking/`.
- ✅ **2026-05-16 (Batch 3 — reference impl: solo-barber)** — `clients/reference-solo-barber/` complete. Astro 6 + Tailwind v4 + Sentry (server-only via `@sentry/astro`) + LGPD-aligned consent banner + GA4. Warm-dark + amber palette per `templates/beauty.md` modern-urban-barber-dark sub-archetype. 4-page site (home + Política de Privacidade LGPD 7-section + 404 + 500). BarberShop JSON-LD. 9 `<Placeholder>` slots. Per-client docs at `docs/clients/reference-solo-barber/`.
- ✅ **2026-05-16 (Batch 3 — docs)** — `INTEGRATIONS.md` (816 lines) created covering Resend / Sentry / PostHog / Neon / Upstash / Stripe with per-service free-tier thresholds, EU/US region selection, DPA + Privacy Policy disclosure text, key-rotation cadence. `SOCIAL-SHARING.md` (454 lines) created covering share-button spec (WhatsApp + FB + X + IG copy-fallback + copy-link) + OG image generation (static / page-specific / dynamic `@vercel/og`) + IG asymmetric (consent-gated) + per-vertical share strategy. All 12 per-vertical templates extended with §11.6 Integrations + §11.7 Share + §11.8 Schema + §11.9 GBP. `CHECKLIST.md` §1.5 extended with Social + sharing tests + Integration health checks.
- ✅ **2026-05-16 (Batch 2)** — `KPI.md` (398 lines) created — 4-bucket KPI taxonomy (Acquisition / Conversion / Retention / Health) + per-product-type defaults + canonical event-naming convention + per-tool dashboard recipes + BRIEF.md "KPI contract" block + monthly retainer-report structure. `ANALYTICS.md` edited: "three streams" → "3 marketing + 1 product on Tier 3+" + PostHog consent recipe (opt-out-by-default) + new §7 per-tier stack-selection decision tree. All 12 templates extended with §11.1-§11.5 (Measurement + per-tier stack + dashboards + canonical events + verification). `CHECKLIST.md` §1.5 KPI / event-wiring tests subsection.
- ✅ **2026-05-16 (Batch 1)** — `LEGAL.md` (669 lines) created — DE-DSGVO + Impressum (TMG §5) + BR-LGPD + Razão Social/CNPJ/MEI + PT-RGPD + NIF/CAE/Livro de Reclamações + US-CCPA/CPRA + COPPA. Per-client market → jurisdiction mapping rule. Privacy Policy + Terms of Use spec. Cookie consent banner spec (consent-first, "Reject all" parity, ≤6mo). `INFRASTRUCTURE.md` §6 Error tracking with Sentry per-tier recipe (server-only on Tier 1, full SDK on Tier 2 + 3, all `sendDefaultPii: false`). `CHECKLIST.md` §1.5 Operational tests + §5.6 PT-legal expanded + §5.7 US-market exposure check. `SECURITY.md` §6 + §6.5 stubbed to `LEGAL.md`. Root `CLAUDE.md` updated with LEGAL.md row in Document structure + 3 new Working Principles bullets (legal compliance / Sentry surface-coverage / KPI delivery).
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
