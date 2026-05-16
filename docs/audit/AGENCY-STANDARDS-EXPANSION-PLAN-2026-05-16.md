# Agency Standards Expansion Plan
## sm-website-seo · 2026-05-16

**Author:** Claude (in collaboration with Breno)
**Status:** APPROVED 2026-05-16 — §7 open decisions confirmed by Breno; ready for Batch 1 execution.
**Estimated total effort:** ~52–62 hours across 3 batches (multi-session) — slightly higher than original estimate after US legal coverage was promoted into Batch 1.
**Trigger:** Two events in succession — (1) the LGPD video / lawyer notification (`mano davin` audit, 9 non-conformities); (2) deletion of all client projects (`clients/jean-souza-barber/` and all three `clients/porto-dos-ribeiros*/`) because they lacked legal compliance + product KPIs + monitoring + integrations + analytics + social distribution.

---

## 1. Context — why this plan exists

The agency's documentation library (16 standards docs + 12 vertical templates + supporting docs) was strong on:

- ✅ How the website *looks* (DESIGN-BEST-PRACTICES, per-vertical templates)
- ✅ What stack to use (TECH.md tiers, product types)
- ✅ Legal documentation **at the page level** (DE Impressum, BR LGPD, PT NIF/CAE)
- ✅ Pre-launch checklist for technical + design + i18n + legal page existence

It was thin on:

- ❌ Legal **enforcement** at the code level (cookie banner that blocks scripts, Sentry PII handling, IP anonymization)
- ❌ The website as a **measured product** (product KPIs, conversion funnels, retention metrics)
- ❌ The website as a **monitored target** (Sentry, error tracking, performance regression alerts)
- ❌ The website as a **distribution node** (social sharing, growth loops, embed patterns)
- ❌ **US legal** (CCPA/COPPA — agency may attract US clients eventually)
- ❌ **Per-vertical SEO essentials** (schema variants, GBP categories, local-pack signals embedded in each template)
- ❌ **Integration recipes** for the canonical agency stack (Resend, Sentry, PostHog, Neon, Upstash, Stripe)

The deleted builds (Jean BR + Porto PT) would have failed the LGPD video's 9-point lawyer audit. The deletion was correct. Rebuilding without these standards in place would repeat the mistake at higher cost.

**Operating principle going forward:** *Rules before builds.* No client scaffolding resumes until at least Batch 1 ships.

---

## 2. Diagnosis — gap audit per layer

| Layer | What we have | What's missing | Severity |
|---|---|---|---|
| **Legal** | SECURITY.md §6 (DE) · §6.5 (BR LGPD) · CHECKLIST.md §5.5/§5.6 (BR + PT pre-launch) | US legal (CCPA/COPPA) · Terms of Use spec · **cookie-consent banner code** (rule documented, implementation absent) · DPO-appointment threshold rule | 🔴 |
| **Analytics + product KPIs** | ANALYTICS.md (GA4 + Clarity event tracking, consent gating) | PostHog integration spec · **product-KPI framework** · per-vertical KPI mapping · dashboard recipes | 🔴 |
| **Infra monitoring** | INFRASTRUCTURE.md (uptime monitor) · RELIABILITY.md §9 (basic monitoring) | **Sentry integration recipe with `send_default_pii: false`** · structured error tracking · performance regression alerts · log retention policy | 🔴 |
| **Integrations** | FORMS.md (Resend + Upstash) · TECH.md §1 (Neon for Type 3+) | PostHog · Sentry · Neon setup recipe · Stripe (for Type 4) · social-share component | 🟠 |
| **Social distribution** | DESIGN-BEST-PRACTICES.md (Instagram as place-identity, WhatsApp as CTA) | Share-button component · per-vertical share strategy · social-meta optimization · Instagram embed pattern | 🟠 |
| **SEO per vertical** | SEO.md (universal: local SEO, schema, GBP, GSC) | Per-vertical schema variants · per-vertical keyword patterns · GBP category checklists embedded in each template | 🟡 |
| **Pre-launch operational tests** | CHECKLIST.md (technical + design + legal page existence) | **Operational tests** — verify cookie banner blocks scripts · verify no PII in Sentry · verify GA4 fires only post-consent · verify KPI events wire | 🔴 |

---

## 3. Strategy — target end-state

After this plan executes, the agency standards library will encode:

### New / strengthened standards docs

| Doc | New or strengthened | What it adds |
|---|---|---|
| `docs/design/LEGAL.md` | **NEW** | Consolidated legal layer covering **all three jurisdictions in parallel (not picked per project — all rules + templates apply globally; client business location determines which jurisdiction is enforced at production)**: DE Impressum + DSGVO · BR LGPD + Razão Social/MEI/CNPJ + Pix · PT NIF/CAE + Livro de Reclamações · **US CCPA/CPRA + COPPA + state-level (CCPA-California, VCDPA-Virginia, CPA-Colorado, CTDPA-Connecticut, UCPA-Utah baseline)**. Each section: Terms of Use spec · Privacy Policy spec · Cookie Consent banner spec (consent-first script-blocking, category-segmented, ≤6mo, parity) · DPO/contact thresholds · per-jurisdiction comparison table · per-client market → jurisdiction mapping rule. |
| `docs/design/KPI.md` | **NEW** | Agency KPI framework · per-vertical KPI mapping · dashboard recipes (PostHog / GA4 / custom) · event-naming convention · pre-launch event-wiring tests |
| `docs/design/INTEGRATIONS.md` | **NEW** | Per-integration recipe: Resend · Sentry · PostHog · Neon · Upstash · Stripe — each with env vars + key rotation + free-tier thresholds + LGPD/GDPR processor-disclosure language |
| `docs/design/SOCIAL-SHARING.md` | **NEW** | Share-button component spec · per-vertical share strategy · OG tag optimization · Instagram embed pattern · WhatsApp share vs CTA distinction |
| `docs/design/SECURITY.md` | Strengthened | Cross-ref to LEGAL.md · keep DE/BR/PT-specific deep content here · point to LEGAL.md for consent-banner spec |
| `docs/design/ANALYTICS.md` | Strengthened | Per-tier analytics stack decision tree · explicit consent-first script-loading rule · PostHog vs Clarity vs GA4 selection · event-naming convention |
| `docs/design/INFRASTRUCTURE.md` | Strengthened | Add Sentry integration to the scaffold drop-in · alert-threshold defaults · log retention policy |
| `docs/design/CHECKLIST.md` | Strengthened | New §1.5 "Operational tests" with verifiable checks (banner-blocks-scripts, no-PII-in-Sentry, KPI-events-wired, share-buttons-render, schema-validates) |
| Root `CLAUDE.md` | Strengthened | New Working Principles entries: "Legal compliance enforced, not just documented" · "KPI dashboards delivered with every project" · "Sentry pre-configured on every Type 2+ build" |

### Extended vertical templates

Each of the 12 vertical templates gets a new **§11 Measurement + Integrations + SEO essentials** section containing:

- 3–5 product KPIs that matter for this vertical (e.g. gastronomy: weekly reservations, on-time delivery rate, repeat-customer rate)
- Which integrations apply by tier (e.g. beauty Tier 2: Resend + Clarity; Tier 3: PostHog + Sentry + Mindbody API)
- Per-vertical schema variants (BarberShop vs Restaurant vs FloristShop vs LegalService)
- Per-vertical keyword pattern (e.g. "[service] em [city]" structure)
- GBP category + attribute checklist
- Share strategy per vertical (high-leverage IG-driven verticals vs WhatsApp-CTA-driven vs no-share-relevant)

### New reference implementation

One client built end-to-end with every layer wired: legal pages + cookie banner + Sentry + PostHog + KPI dashboard + share buttons. Becomes the canonical template for all future client scaffolds. Vertical TBD per §7 (open decisions).

---

## 4. Execution batches

### Batch 1 — Legal + operational tests (~10–12 hours, revised)

**Why first:** highest-risk gap. The LGPD video's 9-point lawyer audit would flag both deleted builds + every future build until this ships. Direct exposure to NPD/ANPD/EU DPAs/US state AGs / regulatory fines.

**Scope revision (2026-05-16):** US legal coverage promoted into Batch 1 per Breno's decision #1. The agency standards must encode DE + BR + PT + US legal requirements in parallel — *all* covered at the rule/template level, with **per-client enforcement** determined by business location at the build phase. Adds ~2 hours to Batch 1.

| Item | Effort | Deliverable |
|---|---|---|
| Create `LEGAL.md` consolidating **DE + BR + PT + US legal** (4 jurisdictions in parallel) | 5–6 hrs | Single doc with: per-jurisdiction comparison table · Terms of Use spec · Privacy Policy spec per jurisdiction · Cookie Consent banner spec · DPO/contact-officer thresholds · per-client market → jurisdiction mapping rule |
| Cookie-consent banner spec (consent-first, category-segmented, "Reject all" parity, ≤6mo duration, re-consent flow) | 1 hr | Spec doc + reference snippet — applies across all 4 jurisdictions (no full component yet — that's Batch 3) |
| Strengthen INFRASTRUCTURE.md with Sentry integration recipe + `send_default_pii: false` rule — **applies to every production build including Tier 1 static** per Breno's decision #3 | 2 hrs | Add §6 "Error tracking" with full Sentry setup; rule covers Tier 1 + Tier 2 + Tier 3 |
| New CHECKLIST.md §1.5 "Operational tests" | 1-2 hrs | 12–18 verifiable test items beyond page-existence checks (cookie banner blocks scripts · no PII in Sentry · per-jurisdiction legal pages present) |
| Update root CLAUDE.md Working Principles | 30 min | 3 new bullets including the 4-jurisdiction legal posture |
| Update SECURITY.md cross-references to LEGAL.md | 30 min | Cross-link cleanup |

**Success criteria:** any future client build can pass the LGPD video's 9-point lawyer audit AND the equivalent EU/PT/US-jurisdiction audits when the operational tests pass. All 4 jurisdictions' rules + templates ship in this batch; per-client deployments enforce the rule set matching the client's business location.

**Adjacent housekeeping included in Batch 1:**
- Move `docs/clients/jean-souza-barber/` and `docs/clients/porto-dos-ribeiros/` to `docs/clients/archived/` (they describe deleted builds) — preserve as historical context for the prospects
- Move `docs/audit/jean-souza-barber-2026-05-14.md` and `docs/audit/porto-dos-ribeiros-2026-05-14.md` to `docs/audit/archived/` (ghost-audits of deleted builds)
- Rewrite `docs/audit/PENDING.md` — purge entries referencing deleted projects, add the expansion-plan-driven items

### Batch 2 — Measurement layer (~18–22 hours)

**Why second:** highest revenue impact. KPIs justify retainer fees. Without them, every project is a one-time build with no measurable ROI.

| Item | Effort | Deliverable |
|---|---|---|
| Create `KPI.md` with agency framework | 4 hrs | KPI taxonomy · per-product-type KPI defaults · event-naming convention · dashboard recipes for PostHog + GA4 |
| Strengthen ANALYTICS.md with per-tier decision tree + PostHog adoption rules | 2 hrs | Add §11 "Stack selection per tier" |
| Extend all 12 vertical templates with §11 §Measurement subsection (KPIs per vertical only — full integration recipes in Batch 3) | 12 × 1 hr = 12 hrs | 12 template extensions with 3–5 KPIs each + dashboard recipe |
| Update CHECKLIST.md §1.5 with KPI-event-wiring tests | 30 min | Add specific event-wire-check items |

**Success criteria:** the agency can answer "what KPIs will this site track from day one?" for any vertical without inventing per-client. Retainer pricing has a concrete deliverable.

### Batch 3 — Integrations + social + reference implementation (~22–28 hours)

**Why last:** operational polish. Needed but lower urgency than legal risk + measurement value-prop.

| Item | Effort | Deliverable |
|---|---|---|
| Create `INTEGRATIONS.md` with per-integration recipe | 5 hrs | Resend · Sentry · PostHog · Neon · Upstash · Stripe each with full setup |
| Create `SOCIAL-SHARING.md` | 2-3 hrs | Share-button component spec · per-vertical share strategy · OG optimization · IG embed pattern |
| Extend all 12 vertical templates with §11 finishing (integration recipes + share strategy + schema + GBP + keywords per vertical) | 12 × 1 hr = 12 hrs | Templates finalized |
| **Build the reference implementation client** | 8-12 hrs | One canonical demo (vertical TBD) with everything wired: legal + cookie banner + Sentry + PostHog + KPI dashboard + share buttons. Lives at `clients/[reference]/` and `docs/clients/[reference]/`. |
| Strengthen CHECKLIST.md with social + integration test items | 1 hr | Final ops-test additions |

**Success criteria:** new client scaffolds can copy the reference implementation's structure end-to-end. The reference impl is the canonical worked example for every layer.

---

## 5. Per-vertical layer relevance (preview)

Not all layers are equally important per vertical. This table previews the per-vertical §11 work in Batch 2 + 3:

| Vertical | Legal | Product KPIs | Monitoring | Social share | Integrations |
|---|---|---|---|---|---|
| Gastronomy | High | High (orders/reservations/repeat) | High | **Very high** (IG, GBP reviews) | Medium (Resend, possibly OpenTable / TheFork API) |
| Beauty | High | High (bookings/staff util/no-shows) | High | **Very high** (IG, before/after) | High (Trinks/Booksy/Treatwell deep-link) |
| Trades | High | High (leads/quotes/conversion/response-time) | Medium | Low (WhatsApp CTA, not share) | Medium (Resend) |
| Health | **Very high** (PII) | High (appointments/no-shows/referral source) | High | Low | High (Doctolib/Zocdoc) |
| Studio | High | High (trials/retention/MRR) | High | High (IG class-in-progress) | High (Mindbody/ClassPass/Glofox) |
| Pro Services | **Very high** (confidentiality) | Medium (consultations/matters/conversion) | High | Low | Medium (Calendly, Resend) |
| Pets | High | Medium (appointments/products) | Medium | Medium (IG pet content) | Medium (Petlove, vet platforms) |
| Automotive | High | High (leads/quotes/insurance jobs) | Medium | Low (WhatsApp CTA) | Medium (Resend, possibly insurance API) |
| Education | **Very high** (minors) | High (trials/enrollment/retention) | High | Medium | Medium (Superprof, Preply, Resend) |
| Events | High | High (inquiries/bookings/booking-rate) | High | **Very high** (IG, Pinterest) | High (Resend, possibly CRM) |
| Home & Garden | Medium | Medium (orders/delivery on-time) | Medium | High (IG for florists) | Medium-High (Resend, possibly Stripe) |
| Artisan | Medium | High (orders/repeat/AOV) | Medium | High (IG) | High (Shopify/Stripe, Sentry for ecommerce) |

Each cell becomes a specific recommendation in the matching template's §11.

---

## 6. Reference implementation — which vertical?

The reference impl (Batch 3) should be **realistic to actually use**, not aspirational. Considerations:

| Option | Pros | Cons |
|---|---|---|
| **Solo barber/salon (Beauty, Tier 2, Type 1)** | Lowest complexity · matches the prior Jean-style portfolio piece · BR LGPD coverage tested | Limited integration showcase — Trinks deep-link only |
| **Restaurant / cafe (Gastronomy, Tier 2, Type 2)** | Covers OG/social sharing well · GBP heavy · Resend + IG embed | Doesn't exercise the Type 3 booking-DB layer |
| **Studio with booking (Studio, Tier 3, Type 3)** | Exercises the full stack: Mindbody API + PostHog + KPI dashboard + Sentry · best showcase of all layers | High build effort · doesn't match the typical Berlin solo-operator client |
| **Solo lawyer (Pro Services, Tier 2, Type 2)** | Highest LGPD/GDPR sensitivity (PII) · clean contact-form exercise · trust-led brand · matches an actual prospect on file (Laudam) | No social-share showcase (low-leverage for legal) |

**My recommendation: build TWO reference impls in Batch 3:**
1. **Solo barber** (matches the deleted-Jean pattern, BR LGPD, simplest) — ~6 hrs
2. **Studio with booking** (highest stack showcase, Type 3 with Mindbody mock) — ~10 hrs

Total 16 hrs (within the 22–28 hr Batch 3 budget). The two-impl approach validates the standards across radically different stack tiers.

**Decision needed from user.** See §7 below.

---

## 7. Open decisions — RESOLVED 2026-05-16

All 7 open decisions answered by Breno on 2026-05-16. Confirmed answers below; these now bind Batch 1 execution.

| # | Question | Resolution | Source |
|---|---|---|---|
| **1** | **US legal coverage** — include CCPA/COPPA in LEGAL.md from Batch 1, or defer until first US prospect appears? | ✅ **INCLUDE in Batch 1.** All 4 jurisdictions (DE / BR / PT / US) covered at rule + template level. Per-client business location determines which jurisdiction is enforced in production. Adds ~2 hrs to Batch 1. | Breno 2026-05-16 |
| **2** | **PostHog adoption scope** — recommend for every Type 2+ build, or only Type 3+? | ✅ **Tier 2 = Clarity primary · Tier 3 = PostHog primary.** GA4 cross-stack as marketing-attribution baseline regardless of tier. | Breno 2026-05-16 (matches default) |
| **3** | **Sentry adoption scope** — every production build, or only Type 2+ with forms / Type 3+ with backend? | ✅ **Every production build, including Tier 1 static.** `send_default_pii: false` is the rule; non-negotiable. Static Astro Tier 1 still benefits (build errors, deploy issues, edge runtime errors). | Breno 2026-05-16 |
| **4** | **Reference implementation vertical (Batch 3)** | ✅ **Solo barber (Tier 2 / Type 1, BR LGPD)** + **Studio with booking (Tier 3 / Type 3)** — two reference impls covering radically different stack tiers. | Breno 2026-05-16 |
| **5** | **What to do with deleted-build per-client docs** (`docs/clients/jean-souza-barber/` + `porto-dos-ribeiros/`) | ✅ **Archive to `docs/clients/archived/`.** Preserves as prospect context — the businesses exist, the demo builds do not. | Breno 2026-05-16 |
| **6** | **What to do with deleted-build site audits** (`jean-souza-barber-2026-05-14.md` + `porto-dos-ribeiros-2026-05-14.md`) | ✅ **Archive to `docs/audit/archived/`.** Same logic — ghost-audits of deleted builds. | Breno 2026-05-16 |
| **7** | **PENDING.md** — full rewrite or amend in place? | ✅ **Full rewrite.** Reset to reflect: 0 active builds · 3 prospects on file · expansion-plan-driven backlog · archive housekeeping. | Breno 2026-05-16 |

---

## 8. Adjacent housekeeping (folded into Batch 1)

Before any new doc work, clean up state to reflect "all builds deleted":

| Action | Files affected |
|---|---|
| Move `docs/clients/{jean-souza-barber, porto-dos-ribeiros}/` → `docs/clients/archived/` | 6 per-client doc files |
| Move dated audit MDs of deleted builds → `docs/audit/archived/` | 2 audit MDs (jean 2026-05-14, porto 2026-05-14) |
| Keep `docs/audit/{jean, cafedelcorso, laudam}.md` in place | These are prospect intakes — businesses still exist as prospects |
| Rewrite `docs/audit/PENDING.md` | Reset to reflect: 0 active builds · 3 prospects on file · expansion-plan-driven backlog · existing rules audit + archive complete |
| Update root `CLAUDE.md` "Current client roster" | Empty roster · note about reference-impl coming in Batch 3 |
| Add `docs/clients/archived/README.md` (mirror the audit/archived README convention) | New convention doc |

---

## 9. Success criteria per batch

### Batch 1 — Legal + ops checklist passes

- [ ] `LEGAL.md` exists, covers **DE + BR + PT + US** legal layers in parallel (all 4 jurisdictions; per-client enforcement by business location)
- [ ] Per-jurisdiction Privacy Policy + Terms of Use specs documented (4 jurisdictions × 2 docs = 8 spec blocks)
- [ ] Cookie-consent banner spec documented (consent-first, category-segmented, parity, ≤6mo, re-consent flow) — applies to all 4 jurisdictions
- [ ] Per-client market → jurisdiction mapping rule documented (e.g., business operates in Berlin → DE+EU rules; in Niterói → BR rules; in Porto → PT+EU rules; in California → US-state rules)
- [ ] `INFRASTRUCTURE.md` includes Sentry recipe with `send_default_pii: false` defaulted, applies to Tier 1 + Tier 2 + Tier 3
- [ ] `CHECKLIST.md` §1.5 has ≥12 operational test items including per-jurisdiction legal page checks
- [ ] Root `CLAUDE.md` Working Principles updated with the 4-jurisdiction legal posture
- [ ] Housekeeping complete: 2 client folders archived to `docs/clients/archived/`, 2 audit MDs archived to `docs/audit/archived/`, PENDING.md rewritten from scratch
- [ ] **Acceptance:** simulate the LGPD video's 9-point lawyer audit against the cookie-banner + Sentry + Terms of Use specs — all 9 items addressed at the spec level. Also verify equivalent simulated audits for EU/DSGVO, PT, and US-CCPA scenarios.

### Batch 2 — Measurement layer integrated

- [ ] `KPI.md` exists with agency framework + per-product-type defaults
- [ ] All 12 templates have §11 "Measurement" subsection with 3–5 KPIs each
- [ ] `ANALYTICS.md` has per-tier stack decision tree (Clarity vs PostHog vs GA4)
- [ ] Event-naming convention documented and consistent across docs
- [ ] **Acceptance:** for any vertical, the agency can answer "what KPIs will this site track from day one?" within 60 seconds by reading the template

### Batch 3 — Reference implementations + final integrations

- [ ] `INTEGRATIONS.md` exists with per-integration setup (Resend, Sentry, PostHog, Neon, Upstash, Stripe)
- [ ] `SOCIAL-SHARING.md` exists with share-component spec + per-vertical strategy
- [ ] All 12 templates have §11 finalized (KPIs + integrations + share + SEO essentials)
- [ ] Reference implementation #1 (solo barber) shipped to `clients/` with all layers wired
- [ ] Reference implementation #2 (studio with booking, Type 3) shipped to `clients/`
- [ ] **Acceptance:** new client scaffold copies the matching reference impl, swaps in client data, ships in < 4 hours

---

## 10. Risks + mitigations

| Risk | Likelihood | Mitigation |
|---|---|---|
| **Scope creep** — each new doc surfaces another 3 missing pieces | High | Strict per-batch scope. New gaps go to PENDING.md, NOT the current batch. |
| **Reference impl over-engineered** — building 2 demos in Batch 3 could balloon past 16 hrs | Medium | Time-box: each reference impl gets max 8 hours. If it exceeds, ship what's working + document gaps. |
| **Standards proliferation** — too many new docs, harder to navigate | Medium | Strict policy: every new doc gets a row in root CLAUDE.md document table at creation time. No orphan docs. |
| **LGPD legal advice quality** — Claude is not a lawyer | Medium | LEGAL.md is engineering-implementation guidance based on documented LGPD/GDPR/CCPA text. Real client legal review still required before production. Document this caveat prominently. |
| **Cookie banner specification vs implementation gap repeats** | Medium-High | The Batch 1 spec is for the rule + the test. Batch 3 ships the actual component. Don't ship a build without both rule AND tested implementation. |
| **PostHog free-tier limits** — could blow up for high-traffic clients | Low (for agency's typical client size) | Document tier thresholds + escape valve (downgrade to Clarity if PostHog exceeds free tier). |

---

## 11. What we are explicitly NOT doing in this plan

To prevent scope creep:

- ❌ **NOT** rewriting any of the 12 vertical templates from scratch. Just adding §11. Existing §1-§10 stay as-is.
- ❌ **NOT** building a CMS or admin dashboard. Client KPI dashboards are PostHog/GA4 native — agency curates the recipe, not the UI.
- ❌ **NOT** adding new verticals beyond the existing 12. The benchmark report's 12 categories are the universe.
- ❌ **NOT** building real-DB-backed reference impls until Batch 3. Batch 1 + 2 are pure documentation.
- ❌ **NOT** acquiring new prospects during this plan's execution. The 3 prospects on file (Jean, Café Del Corso, Laudam) stay on file but no outreach until Batch 1 ships.
- ❌ **NOT** Tier 4 / Tier 5 product types (transactional ecommerce / full apps). Out of scope for agency at current size.
- ❌ **NOT** the resumed Porto cold call. The Porto demo is deleted. Resuming requires a new build, which requires Batch 1 + at least the reference impl.

---

## 12. Execution gate — CLEARED 2026-05-16

Breno reviewed the plan and resolved all 7 open decisions on 2026-05-16. Batch 1 is approved to start.

Resolved gates:

1. ✅ §7 open decisions answered (1: US legal **IN** Batch 1; 2: PostHog default confirmed; 3: Sentry all tiers; 4: 2 reference impls; 5/6: archive deleted-build docs; 7: full PENDING.md rewrite)
2. ✅ Batch 1 scope confirmed at **10-12 hours** (revised up from 8-10 due to US legal inclusion)
3. ✅ Housekeeping approved — archive deleted-build per-client docs + ghost-audit MDs
4. ✅ Confirmed: NO client builds resume until Batch 1 ships

**This plan supersedes any prior implicit roadmap.** PENDING.md will be rewritten in Batch 1 to reflect this plan as the agency's current execution backlog.

**Next action:** start Batch 1 execution when ready.

---

## Appendix A — Doc table after full plan execution (target state)

```
docs/design/
├── DESIGN-BEST-PRACTICES.md        (existing — unchanged structurally)
├── TECH.md                         (existing — unchanged structurally)
├── PERFORMANCE.md                  (existing — unchanged)
├── ACCESSIBILITY.md                (existing — unchanged)
├── SECURITY.md                     (existing — cross-ref LEGAL.md from §6 family)
├── RELIABILITY.md                  (existing — unchanged)
├── QUALITY.md                      (existing — unchanged)
├── INFRASTRUCTURE.md               (existing — Sentry recipe added)
├── FORMS.md                        (existing — unchanged)
├── ANALYTICS.md                    (existing — per-tier decision tree added)
├── SEO.md                          (existing — unchanged structurally)
├── I18N.md                         (existing — unchanged)
├── CHECKLIST.md                    (existing — §1.5 operational tests added)
├── SALES.md                        (existing — unchanged)
├── UI_REVIEW.md                    (existing — unchanged)
├── LEGAL.md                        ← NEW (Batch 1)
├── KPI.md                          ← NEW (Batch 2)
├── INTEGRATIONS.md                 ← NEW (Batch 3)
├── SOCIAL-SHARING.md               ← NEW (Batch 3)
├── local_business_website_benchmark_report.md  (existing — unchanged)
└── templates/
    ├── gastronomy.md               (existing — §11 added in Batches 2 + 3)
    ├── beauty.md                   (existing — §11 added)
    ├── trades.md                   (existing — §11 added)
    ├── health.md                   (existing — §11 added)
    ├── studio.md                   (existing — §11 added)
    ├── professional-services.md    (existing — §11 added)
    ├── pets.md                     (existing — §11 added)
    ├── automotive.md               (existing — §11 added)
    ├── education.md                (existing — §11 added)
    ├── events-hospitality.md       (existing — §11 added)
    ├── home-garden.md              (existing — §11 added)
    └── artisan.md                  (existing — §11 added)

docs/clients/
├── archived/                       ← NEW (Batch 1)
│   ├── README.md
│   ├── jean-souza-barber/          (moved from docs/clients/)
│   └── porto-dos-ribeiros/         (moved from docs/clients/)
└── [reference-impl-1]/             ← NEW (Batch 3, solo barber)
└── [reference-impl-2]/             ← NEW (Batch 3, studio with booking)

docs/audit/
├── PENDING.md                       (existing — rewritten in Batch 1)
├── AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md  ← THIS DOC
├── archived/
│   ├── README.md
│   ├── porto-dos-ribeiros-2026-05-13.md  (existing)
│   ├── porto-dos-ribeiros-2026-05-14.md  (moved in Batch 1)
│   └── jean-souza-barber-2026-05-14.md   (moved in Batch 1)
├── jean.md                         (existing prospect intake)
├── cafedelcorso.md                 (existing prospect intake)
└── laudam.md                       (existing prospect intake)

clients/
├── [reference-impl-1]/             ← NEW (Batch 3)
└── [reference-impl-2]/             ← NEW (Batch 3)
```

---

## Appendix B — Why this specific batching order

1. **Batch 1 (Legal + ops) first** because LGPD/GDPR exposure has *immediate, hard-currency penalties*. Every day without proper consent banner + Sentry PII handling is a day of regulatory risk. The video's lawyer audit found 9 violations on a live SaaS — both deleted demos would have failed identically. Closing this gap first protects every future build.

2. **Batch 2 (Measurement) second** because KPIs are the *revenue justification*. The agency's deliverable shifts from "a website" to "a website with measured outcomes." This is what supports retainer billing (per `SALES.md` §4). Without KPIs, the agency is a one-time-build shop; with them, it's a long-term partner.

3. **Batch 3 (Integrations + social + reference impl) last** because it's *operational polish + executable validation*. The first two batches are pure docs; Batch 3 proves the docs work by building actual reference impls. Doing Batch 3 first would risk repeating the deleted-builds mistake — shipping demos before the rules they're built against are stable.

---

*Plan complete. Awaiting Breno's review + answers to §7 open decisions before Batch 1 starts.*
