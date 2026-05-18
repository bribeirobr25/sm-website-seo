# PENDING.md — agency-level backlog aggregator

**Last updated:** 2026-05-18 (SEO-DEPTH-EXPANSION-PLAN **Batch 3 MVP complete** — all 6 MVP slices shipped: canonical `@graph` pattern docs in SEO.md §5 · 12 paste-ready default-archetype JSON-LD blocks (one per vertical) in templates §11.8 · SEO.md §5 cross-reference + CHECKLIST.md §3 schema pre-launch expanded · reference impl schemas upgraded to `@graph`+Person+WebSite pattern · CHECKLIST.md Guard 8 added. **29 archetype-specific blocks (non-default archetypes A/B/C across all 12 verticals) deferred as trigger-gated work** — see below. SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md is now **functionally complete at MVP scope**.)

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
| **You (Breno)** | Commit + push the Batch 3 MVP working tree (17 files · ~1,192 insertions across SEO.md §5 canonical pattern, 12 templates §11.8 paste-ready schema blocks, CHECKLIST.md Guards 8+9, reference impl schema upgrades, PENDING.md close) | git working tree | 🔴 Required before next session reads "main as truth" |
| **You (Breno)** | Pick the first friend-and-family portfolio site — solo-barber template fits beauty/trades verticals; studio-booking fits studio/health/professional-services with booking needs | root `CLAUDE.md` §Portfolio strategy | 🟠 Blocks: cold-outreach close-rate scaling |
| **You (Breno)** | Approach decision for Café Del Corso + Laudam — both intakes ready; **all clearance gates met** (rules library + reference impls + DE legal completeness all shipped 2026-05-18) | `docs/audit/cafedelcorso.md` · `docs/audit/laudam.md` | 🟠 Cold-outreach kickoff |
| **You (Breno)** | Upgrade local Node to ≥22.12.0 (currently v21.7.3) — required for solo-barber `astro check` + `pnpm build` to run locally · `nvm use 22` if nvm is installed, otherwise install Node 22 LTS · studio-booking is unaffected (Next 16 uses its bundled toolchain) | local dev environment | 🟡 Blocks: local validation of solo-barber schema changes — not blocking for production (Vercel uses its own Node) |
| **Claude (on demand)** | Apply reference-impl scaffold to a real prospect — `cp -r clients/reference-{matching-impl} clients/[real-slug]`, swap DRAFT items per the impl's own DRAFT checklist | Triggered per signed prospect | — On standby |

---

## Prospects — intake-only, no scaffold

| Prospect | Intake md | Vertical | Status |
|---|---|---|---|
| Café Del Corso | `docs/audit/cafedelcorso.md` | Gastronomy | Not contacted. **Scaffold-ready 2026-05-18.** `templates/gastronomy.md` §11.8 paste-ready `Restaurant` schema shipped (Batch 3 MVP) · solo-barber reference impl is the closest stack-tier match for a Tier 2 / Type 1 info site · CITATIONS.md gastronomy must-claim list (Tripadvisor + TheFork + Lieferando if delivery) populated |
| Laudam (Rechtsanwalt) | `docs/audit/laudam.md` | Professional Services | Not contacted. **Scaffold-ready 2026-05-18.** `templates/professional-services.md` §11.8 paste-ready `LegalService` schema shipped (Batch 3 MVP — Berlin example uses "Kanzlei Laudam" placeholder; trivial swap for the real prospect) · LEGAL.md §DE Bestandskunden frame complete · solo-barber reference impl is the closest Tier 2 / Type 2 stack match (lawyer info site + consultation request form) |

**Discipline:** no scaffold work on either prospect until the expansion plan completes. New prospects can be added as intake mds (no date suffix) at any time — they just queue behind the rule work.

---

## Agency-template / standards work

| Item | State | Trigger to resolve |
|---|---|---|
| **AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md** (Batches 0/1/2/3) | ✅ All 4 batches complete 2026-05-16 | — |
| **SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md** Batch 1 — review-generation playbook | ✅ **Complete 2026-05-18** — all 8 slices shipped. `SEO.md` §8.4 expanded 16 → 291 lines · `KPI.md` Cross-type Health KPIs (H1-H3) with per-tier data source · `LEGAL.md` §DE "Post-service communications" Bestandskunden subsection · 12 vertical templates §11.1 each with `review_count_30d` + `review_response_rate_30d` rows · `CHECKLIST.md` 5 pre-launch items + 2 🔴 production blockers (vanity redirect e2e, DE legal sign-off) · `SALES.md` §10 "Review-gen by retainer tier" + "Month 1 review sprint" · `TECH.md` §1 production-cutover footnote (citations + review-link as cross-type deliverables) · `CHECKLIST.md` Guard 4 (DRAFT-marker integrity). All 5 §8.4 dangling cross-references now resolve. | — |
| **SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md** Batch 2 — citation-building | ✅ **Complete 2026-05-18** — `CITATIONS.md` new doc (9 sections: state of citations 2026 · universal directory table · DE general + per-directory trap table with Sellwerk/11880/berlin.de · 12-vertical must-claim · PT + BR seed · NAP canonical template · aggregator verdict · 6-month refresh cadence) · root CLAUDE.md doc table + Citation hygiene & Review-generation Working Principles · 12 templates §11.6 Citations subsection · BRIEF.md Canonical NAP block in both reference impls · CHECKLIST.md 5 citation pre-launch items · SEO.md §8 cross-reference · SALES.md §10 6-month audit deliverable · Guard 6 added to regression-prevention block. | — |
| **SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md** Batch 3 MVP — schema cookbook (12 default-archetype paste-ready `@graph` blocks) | ✅ **Complete 2026-05-18** — scope revised from Full (41 blocks) to MVP (12 default-archetype blocks) per Breno 2026-05-18. Default archetype per vertical: gastronomy=Restaurant · beauty=HairSalon · trades=Plumber · health=Dentist · studio=SportsActivityLocation · pro-services=LegalService · pets=VeterinaryCare · automotive=AutoRepair · education=MusicSchool · events-hospitality=LocalBusiness+Photographer · home-garden=Florist · artisan=JewelryStore. All blocks use `@graph` + Person + WebSite pattern per `SEO.md` §5 canonical. Reference impl schemas upgraded to match. | — |
| **Batch 3 — 29 archetype-specific JSON-LD blocks (deferred from Full scope)** | ⏳ **Trigger-gated** — author each block when a real client picks the matching non-default archetype. The plan locked Full scope (41 blocks) on 2026-05-18 but MVP-first was chosen 2026-05-18 post-Batch-2; the remaining 29 are deferred. Per-vertical breakdown: **gastronomy** A (CafeOrCoffeeShop) + B (BarOrPub) · **beauty** A (Editorial Portfolio BeautySalon) + B (Atmospheric Sensory DaySpa) · **health** A (Content Authority MedicalClinic) + B (Conversion Chain Physiotherapy) · **trades** A (Heritage Craft Premium) + B (Conversion Chain Emergency) + C (Insurance-Backed Network — rarely an agency client) · **studio** A (Premium Editorial Luxury) + B (Mass-Market Value ExerciseGym) + C (Boutique Atmospheric HealthClub) · **pro-services** A (Global Big-Law) + B (Productized Mid-Tier) + C (Quote-led InsuranceAgency) · **pets** A (Premium Vet Network) + B (Retail PetStore) + D (Daycare/Boarding) · **automotive** A (Conversion Chain Network) + B (TireShop) + C (AutoBodyShop / Detailing) · **education** A (Premium Preschool) + B (LanguageSchool) + C (Tutoring Franchise) · **events-hospitality** A (Hotel) + B (BedAndBreakfast) + C (EventVenue) · **home-garden** A (Plant Ecommerce Store) + B (LandscapingBusiness) + C (HomeGoodsStore garden center) · **artisan** A (Luxury Jewelry — high-end JewelryStore) + B (Premium Craft Store) + C (Modern artisan ecommerce + per-piece Product). Each block ~30 min authoring + 5 min validation. Total: ~17-20 hrs when fully triggered. | When a real client picks the matching archetype OR when 3+ clients per archetype materialize and the agency wants the patterns ahead of need |
| **SEO-DEPTH-EXPANSION-PLAN-2026-05-18.md** — plan completion status | ✅ **Hotfix + Batches 1, 2, 3 MVP all shipped 2026-05-18.** Plan deliverables: review-generation playbook · citation-building playbook · schema cookbook (MVP). Out of plan: 29 archetype-specific schema blocks (trigger-gated) · the 3-palette picker + per-vertical font pairings logged earlier · PAA seeds per vertical (trigger-gated when ≥2-3 real clients per vertical). | — |
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
