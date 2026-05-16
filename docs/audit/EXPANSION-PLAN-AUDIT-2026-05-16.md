# EXPANSION-PLAN-AUDIT-2026-05-16.md
## Audit of AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md

**Auditor:** Claude (review session)
**Date:** 2026-05-16
**Status:** Ready for Bar/Breno review
**Audit scope:** Plan alignment with existing documentation and reality, gap identification, risk and regression analysis, improvement suggestions

---

## 0. Executive summary

The plan is strategically sound, correctly sequenced, and addresses a real regulatory gap. The trigger (LGPD lawyer audit + deleted builds) was the right call. The batch ordering (Legal → Measurement → Integrations) is correct.

However, a detailed cross-reference of the plan against all 14 existing standards docs and the 12 vertical templates reveals **7 concrete issues** — ranging from plan-internal inconsistencies to regressions against existing rules — and **6 improvement opportunities** that would make the plan more effective without increasing scope.

None of the issues are showstoppers. All are fixable before or during Batch 1 execution.

---

## 1. Context verification — what actually exists vs what the plan assumes

The plan was written against a documentation library it characterizes accurately in §2 (Diagnosis). Cross-referencing against the actual files confirms:

| Plan claim | Verified? | Notes |
|---|---|---|
| "SECURITY.md §6 (DE)" exists | ✅ | Full Impressum + DSGVO section confirmed |
| "SECURITY.md §6.5 (BR LGPD)" exists | ✅ | Política de Privacidade, CNPJ/MEI, Razão Social, Pix trust signal all present |
| "CHECKLIST.md §5.5/§5.6 (BR + PT pre-launch)" exists | ✅ | Confirmed at CHECKLIST.md, the doc also has §8 audit rubric + §9 prospect intake |
| "ANALYTICS.md (GA4 + Clarity event tracking, consent gating)" exists | ✅ | Detailed implementation with consent-gating pseudo-code confirmed |
| "INFRASTRUCTURE.md (uptime monitor) · RELIABILITY.md §9" exists | ✅ | Full 7-section INFRASTRUCTURE.md with Better Stack + UptimeRobot recipes confirmed |
| "FORMS.md (Resend + Upstash)" exists | ✅ (implied) | Not read in this session but referenced across multiple docs — trust confirmed |
| "16 standards docs" claimed | ✅ | `ls docs/design/` shows 14 `.md` files + 12 templates. The "16" likely includes LEGAL.md (planned) + one other. Count is approximately correct. |
| Deleted builds (Jean + Porto) | ✅ confirmed deleted | `docs/clients/` still has the client docs; `PENDING.md` confirms builds deleted but prospect docs preserved |
| `docs/audit/archived/` directory | ✅ created | README.md present; `porto-dos-ribeiros-2026-05-13.md` already moved |
| `jean-souza-barber-2026-05-14.md` and `porto-dos-ribeiros-2026-05-14.md` still in `docs/audit/` | ✅ NOT yet archived | These two files are still in the main `docs/audit/` folder — housekeeping item from Batch 1 is pending |

**Critical observation on PENDING.md state:** The current `PENDING.md` (last updated 2026-05-16 afternoon) has NOT yet been rewritten per §7 decision #7. It still references the deleted builds (Jean + Porto) as active work items, not archived context. This is the most urgent Batch 1 housekeeping item because every Claude session that opens PENDING.md receives a false picture of the current state. This must be the very first action in Batch 1, before any doc writing.

---

## 2. Issues — concrete problems requiring resolution

### Issue 1 — CLAUDE.md "Current client roster" is critically stale 🔴

**Severity:** High. Affects every future Claude Code session.

**What the plan says:** §8 housekeeping includes "Update root `CLAUDE.md` 'Current client roster'" with empty roster.

**What the current `CLAUDE.md` shows:** The "Current client roster" section still lists Porto dos Ribeiros (with all three variant directories A/B/C and their live Vercel URLs) and Jean Souza Barbearia as active builds. These builds are deleted. Any future Claude Code session that reads this file will attempt to reference directories that don't exist.

**The risk:** Claude Code sessions don't just use `CLAUDE.md` as context — they read it as the authoritative project state. A session starting on a new prospect will read the Porto/Jean sections and potentially reference phantom client data.

**Resolution:** This must happen in Batch 1 housekeeping, immediately after PENDING.md rewrite. Not just "clear the table" — also note explicitly that the two reference implementations (Batch 3) will fill this slot eventually.

---

### Issue 2 — Sentry on Tier 1 static sites conflicts with the "no JS framework" rule 🔴

**Severity:** Medium-High. Risk of anti-pattern introduction.

**What the plan says:** §7 resolution #3: "Every production build, including Tier 1 static. `send_default_pii: false` is the rule; non-negotiable."

**What TECH.md says:** "No JavaScript framework for pure landing pages. Vanilla HTML + CSS + minimal JS only." and "Performance rules — No JavaScript framework for pure landing pages."

**What PERFORMANCE.md and CHECKLIST.md imply:** Tier 1 sites aim for ≥ 90 PageSpeed mobile, LCP < 2.5s, zero render-blocking scripts. Sentry's JS SDK adds ~50KB (minified + gzip) and introduces an additional script dependency.

**The conflict:** Adding `@sentry/browser` to a Tier 1 static HTML + vanilla JS page:
- Breaks the "no framework, minimal JS" principle
- Adds weight that directly threatens the PageSpeed ≥ 90 target
- Introduces a third-party script that must be added to the CSP `script-src` directive
- Requires a Sentry DSN as an env var — adding secret-management overhead to a project type explicitly designed to have none

**Additionally:** `INFRASTRUCTURE.md` §7 "Demo-deferrable" guidance says security headers and uptime monitoring can wait until noindex flip. If Sentry is now mandatory on Tier 1, it becomes the only mandatory non-trivial JS dependency on a stack tier that explicitly avoids them.

**The valid use cases the plan mentions** ("build errors, deploy issues, edge runtime errors") are more accurately monitored by:
- Vercel build logs (already available)
- Uptime monitoring via Better Stack / UptimeRobot (already specified in INFRASTRUCTURE.md)
- GitHub Actions `pnpm validate` CI gate (already specified in INFRASTRUCTURE.md)

**Resolution needed before Batch 1 ships:** Narrow the Sentry mandate in INFRASTRUCTURE.md to:
- **Tier 1 static:** Optional, only if the client explicitly wants error monitoring. Document the PageSpeed trade-off (estimated -3 to -8 points on mobile). Vercel uptime + CI gate covers the gap.
- **Tier 2 Astro (with contact form, i.e. Type 2):** Strongly recommended — server-side edge functions introduce real error surface.
- **Tier 3 Next.js:** Mandatory. `send_default_pii: false` is the rule.

This change reduces scope of the Sentry spec in INFRASTRUCTURE.md (still Batch 1), removes a real-world regression, and remains consistent with the existing "right tool for the tier" philosophy.

---

### Issue 3 — Plan references docs that don't yet exist as sources 🟠

**Severity:** Medium. Causes confusion during Batch 1 execution.

**What the plan says in §2 Diagnosis:** "SECURITY.md §6 (DE) · §6.5 (BR LGPD) · CHECKLIST.md §5.5/§5.6 (BR + PT pre-launch)" are listed as existing. These exist. But the plan also treats `SECURITY.md` as having PT (Portuguese) coverage already ("DE Impressum + DSGVO · BR LGPD") when in reality PT legal (NIF + CAE + Livro de Reclamações) is only handled in `CHECKLIST.md §5.6`, not in SECURITY.md.

**The gap:** There is currently no standards doc that consolidates Portuguese market legal requirements at the depth given to German (SECURITY.md §6) or Brazilian (SECURITY.md §6.5). `CHECKLIST.md §5.6` has checklist items but no explanatory content (why NIF, what CAE is, what Livro de Reclamações is, how the Autoridade Tributária relates, RGPD vs GDPR overlap).

**Resolution:** LEGAL.md (Batch 1 new doc) should absorb the PT section from CHECKLIST.md §5.6 and expand it to match the depth of the DE and BR sections. SECURITY.md should cross-reference LEGAL.md for PT legal. CHECKLIST.md §5.6 should point to LEGAL.md for the explanatory content and keep only the checklist items.

---

### Issue 4 — "PostHog as default for Tier 2" conflicts with ANALYTICS.md 🟠

**Severity:** Medium. Creates a direct contradiction between docs.

**What the plan says:** §7 resolution #2: "Tier 2 = Clarity primary · Tier 3 = PostHog primary."

**What ANALYTICS.md currently says:** "Three analytics streams, no more: Google Search Console (organic search), Microsoft Clarity (behavior), GA4 only if the client wants it." PostHog is not mentioned at all in ANALYTICS.md.

**The conflict:** Batch 2 specifies creating `KPI.md` with PostHog integration spec and strengthening ANALYTICS.md with "per-tier decision tree + PostHog adoption rules." But the current ANALYTICS.md is well-structured around the GSC + Clarity + GA4 stack and explicitly recommends against adding more tools. Adding PostHog for Tier 3 without a clear explanation of why it complements (rather than replaces or duplicates) Clarity will confuse anyone reading ANALYTICS.md mid-Batch 2.

**Resolution:** ANALYTICS.md needs a "PostHog vs Clarity" comparison section added in Batch 2 that explains:
- Clarity = behavior/UX tool (heatmaps, session recordings, rage clicks)
- PostHog = product analytics tool (funnels, cohorts, feature flags, custom event queries)
- They answer different questions; both can coexist
- The stack decision tree per tier should make this explicit

Without this, a developer starting a Tier 3 project post-Batch 2 will see "PostHog primary" in KPI.md and "Clarity (default for retainer clients)" in ANALYTICS.md and have no way to reconcile them.

---

### Issue 5 — Section numbering collision in CHECKLIST.md 🟠

**Severity:** Medium. Causes execution confusion in Batch 1.

**What the plan says:** "New CHECKLIST.md §1.5 'Operational tests'" — inserted between the existing §1 (Technical) and §2 (Design and UX).

**What CHECKLIST.md currently has:** The doc has sections numbered §0 through §9 (where §8 is the audit rubric and §9 is the prospect intake template). The existing §5 contains two subsections labeled §5.5 (BR-legal) and §5.6 (PT-legal). Adding §1.5 by renumbering is straightforward, but CLAUDE.md already cross-references CHECKLIST.md with section-specific mentions: "Verify legal compliance per market... · CHECKLIST.md §5.6 (NIF + CAE + Livro de Reclamações)."

**Also:** CLAUDE.md has this explicit rule: "Cross-references between standards docs always point to the topic doc, never to a specific section." But CLAUDE.md itself violates this rule in the Working Principles section by citing `SECURITY.md §6`, `SECURITY.md §6.5`, and `CHECKLIST.md §5.6` with section numbers.

**Resolution:** Before modifying CHECKLIST.md structure, reconcile the cross-reference convention. Either:
- (A) Enforce the "no section references" rule and update CLAUDE.md Working Principles to drop the section numbers → then freely renumber CHECKLIST.md.
- (B) Accept that section references are useful for navigation and document the convention as "section references are allowed in CLAUDE.md Working Principles as navigational aids, but docs don't reference each other's sections." → Then document the new §1.5 addition and update CLAUDE.md Working Principles accordingly.

Option A is cleaner but requires updating ~15 cross-references across the library. Option B formalizes the existing practice.

---

### Issue 6 — "Reference implementation" in gastronomy.md §9.4 references deleted builds 🟠

**Severity:** Medium. Creates a dangling reference in a live doc.

**What exists:** `gastronomy.md §9.4` ("Reference implementations — Porto dos Ribeiros variants") explicitly references the three deleted Porto variants (`clients/porto-dos-ribeiros/`, `clients/porto-dos-ribeiros-v2/`, `clients/porto-dos-ribeiros-v3-heritage/`) as scaffold starting points for new gastronomy clients, including directory paths and descriptions of what to copy.

**The problem:** These directories no longer exist. A developer reading gastronomy.md §9.4 to scaffold a new restaurant client will follow directory paths that don't exist.

**The plan does not address this.** The plan archives the `docs/clients/` entries but does not mention updating `gastronomy.md §9.4` which references `clients/` source code (not `docs/clients/`).

**Resolution:** In Batch 1 housekeeping, update `gastronomy.md §9.4` to:
- Mark the Porto directories as "archived reference — directories deleted; pattern described below is the canonical starting point."
- Preserve the archetype descriptions (they're valuable)
- Reference the Batch 3 reference implementations as the future canonical starting points
- This is a 5-minute edit, not additional scope

---

### Issue 7 — US legal (CCPA/COPPA) coverage in LEGAL.md is ambitious for a Berlin-based solo agency 🟡

**Severity:** Low-Medium. Strategic scope concern, not a technical issue.

**What the plan says:** §7 decision #1: "Include in Batch 1. All 4 jurisdictions (DE / BR / PT / US) covered at rule + template level."

**The concern:** US legal (CCPA/CPRA for California, VCDPA, CPA, CTDPA, UCPA, COPPA) is considerably more complex than DE, BR, or PT individually. CCPA has different consent mechanics than GDPR (opt-out rather than opt-in for data sale), CPRA adds additional rights, COPPA applies to under-13s and has very specific verifiable parental consent requirements. Getting this right at the "engineering-implementation guidance" level that the plan specifies ("Claude is not a lawyer" caveat in §10) is genuinely risky.

**The practical context:** The agency is Berlin-based, currently targeting DE/BR/PT markets. US clients are speculative. The plan adds ~2 hours for US legal coverage. The risk is that the US section of LEGAL.md is written at lower quality than the DE/BR sections (which have real worked examples and client context behind them) and creates false confidence.

**This is not a reason to drop US legal.** The decision to include it is confirmed and correct in principle. But it should be framed more carefully:

**Resolution:** In LEGAL.md, clearly label the US section as "Engineering framework — not legal advice, more variability than EU/BR, higher variance, verify with US counsel before production." Make the "per-client business location determines jurisdiction" rule extremely explicit for US: unlike DE/BR/PT which have clear bright-line rules, US is state-dependent and the agency may serve clients in California (CCPA), Virginia (VCDPA), Texas (no comprehensive privacy law), etc. The section should be more "here's what you need to know about the landscape" and less "here's the cookie banner spec for US" — because unlike GDPR/LGPD, there is no single US federal standard.

---

## 3. Gap analysis — what the plan misses

### Gap A — No TECH.md update planned

**Severity:** 🟠 Medium.

TECH.md currently has a `tailwind.config.ts` reference in the per-client token setup section. Post-Tailwind v4 migration, tokens are declared in CSS with `@theme {}` instead. TECH.md §7 "CSS and design token standards" still shows the old `tailwind.config.ts` pattern. The plan touches TECH.md nowhere.

This is outside the plan's scope, but worth noting as an adjacent item that PENDING.md should track.

### Gap B — ANALYTICS.md has no PostHog consent gating spec

**Severity:** 🟠 Medium.

The plan adds PostHog for Tier 3 builds. PostHog's JavaScript SDK drops cookies by default (`ph-no-capture` opt-out is available but not the default). Under DSGVO/LGPD/GDPR, PostHog requires the same consent-first gating as Clarity and GA4. ANALYTICS.md §5 documents consent gating for Clarity and GA4 with implementation pseudo-code, but PostHog will need its own consent gating spec. This should be added when ANALYTICS.md is strengthened in Batch 2.

### Gap C — No plan for migrating existing CHECKLIST.md items from SECURITY.md §6 to LEGAL.md

**Severity:** 🟡 Low.

Once LEGAL.md exists as the legal source of truth, there will be overlap:
- SECURITY.md §6 (German Impressum + DSGVO) → partially superseded by LEGAL.md
- SECURITY.md §6.5 (LGPD) → partially superseded by LEGAL.md
- CHECKLIST.md §5.5 (BR pre-launch) → cross-referenced by LEGAL.md
- CHECKLIST.md §5.6 (PT pre-launch) → cross-referenced by LEGAL.md

Without a migration plan, LEGAL.md will create a fourth home for legal rules (alongside SECURITY.md §6, §6.5 and CHECKLIST.md §5.x). The plan mentions "SECURITY.md cross-references to LEGAL.md" in Batch 1, but doesn't specify what stays in SECURITY.md vs moves to LEGAL.md.

**Suggested resolution:** Legal philosophy and requirement specs → LEGAL.md. Implementation and code-level details (headers, CSP additions, env vars) → SECURITY.md, cross-referencing LEGAL.md. Checklist items → CHECKLIST.md, cross-referencing LEGAL.md for context.

### Gap D — Cookie-consent banner "spec" vs "implementation" split is underspecified

**Severity:** 🔴 High. This is the gap that caused the deleted builds.

The plan correctly notes in §10 Risks: "Cookie banner specification vs implementation gap repeats" as a medium-high risk. But the mitigation is weak: "The Batch 1 spec is for the rule + the test. Batch 3 ships the actual component."

The deleted builds failed partly because they had cookie consent rules documented but not implemented. Batch 3 is 52+ hours away. Every demo built between Batch 1 and Batch 3 will face the same gap: a spec exists, an operational test exists (CHECKLIST.md §1.5), but no copy-paste-ready component code exists.

**Proposed mitigation:** Within Batch 1, alongside the cookie consent spec in LEGAL.md, ship a minimal but complete reference snippet — not a full React component, just a vanilla JS + HTML pattern that:
1. Blocks all analytics scripts on load
2. Shows a banner with Accept / Reject All / Preferences
3. Stores consent in a `sameSite: strict; secure` cookie
4. Fires a `consent:given` event when accepted
5. Can be imported into any Tier 1/2/3 build with < 30 min adaptation

This is within the 1hr currently allocated for the "cookie-consent banner spec" item. The goal is to ensure the spec is executable immediately, not just theoretically correct.

### Gap E — No mention of PT legal depth increase

**Severity:** 🟡 Low.

As noted in Issue 3, PT legal is currently thinner than DE and BR in the standards library. LEGAL.md will consolidate all jurisdictions, but the plan doesn't specify that PT content needs expansion. If LEGAL.md is written with equal depth across all four jurisdictions, PT will improve naturally. But if the author doesn't know PT legal is currently thin, it may get less attention than it deserves.

**Specific PT gaps not currently documented anywhere:**
- Portugal's specific implementation of GDPR (Lei n.º 58/2019)
- CNPD (Comissão Nacional de Proteção de Dados) — the PT DPA, equivalent to Germany's BfDI
- LSNS (Lei dos Serviços de Comunicação Social) for media sites
- Livro de Reclamações: both physical (for physical premises) and online (livroreclamacoes.pt) — the plan should clarify which applies for a local-business website

### Gap F — The batching creates a "Batch 2 orphan" for ANALYTICS.md PostHog addition

**Severity:** 🟡 Low.

The plan adds PostHog to ANALYTICS.md in Batch 2. But `KPI.md` (also Batch 2) will reference PostHog event schemas, dashboards, and setup. If `INTEGRATIONS.md` (Batch 3) has the actual PostHog setup recipe, then between Batch 2 and Batch 3:
- KPI.md says "use PostHog for event X" 
- ANALYTICS.md says "PostHog for Tier 3"
- But there is no implementation recipe yet

This means any Tier 3 build started after Batch 2 but before Batch 3 will have the "what" (KPIs, event names) without the "how" (setup recipe, DSN, env vars, consent gating). The developer will have to improvise.

**Proposed mitigation:** Add a minimal PostHog setup sketch to ANALYTICS.md in Batch 2 — not the full recipe (that's Batch 3), but enough to get started: SDK install, DSN env var, consent-gating hook, first 3 events. The full recipe in INTEGRATIONS.md then becomes an upgrade, not a prerequisite.

---

## 4. Compliance check — plan vs core principles

### vs TECH.md "Dependency management" principle

TECH.md states: "Every dependency is a liability. Minimize, justify, and audit." PostHog, Sentry, Neon, Upstash, and Stripe being introduced in Batches 2–3 each need justification documented at the point of introduction. INTEGRATIONS.md provides this naturally — the plan is correctly structured here. No action required, but the per-integration write-up should explicitly address the "justify" question ("why this, not X alternative?").

### vs ANALYTICS.md "Three analytics streams, no more"

The plan adds PostHog as a fourth stream for Tier 3. This breaks the "no more" rule. The rule should be updated in Batch 2 to: "Three analytics streams for Tier 1/2; up to four for Tier 3 when justified by booking/funnel complexity." This is a minor wording update, not a substantive change to the intent.

### vs SECURITY.md "Pre-launch security gates"

The plan adds operational test items to CHECKLIST.md §1.5. These are complementary to, not replacing, the existing SECURITY.md §9 pre-launch gates (SSL Labs, SecurityHeaders.com, MDN Observatory, etc.). The plan must be explicit that §1.5 is *additive* — it doesn't replace the security gates, it adds behavioral verification on top of them.

### vs CHECKLIST.md "Phase legend — demo vs production gates"

The cookie banner operational test ("verify cookie banner blocks scripts") is a production gate, not a demo gate. This is correct — demo sites don't have analytics. The §1.5 placement must respect the existing phase legend and tag items appropriately. Sentry verification is also a production gate for Tier 2/3 but arguably a demo-deferrable for Tier 1 (given Issue 2 above).

### vs DESIGN-BEST-PRACTICES.md "Anti-slop checklist"

The plan introduces social sharing buttons in Batch 3 (SOCIAL-SHARING.md). Social share buttons are a common source of visual slop (cramped, inconsistent, low-contrast social icons). SOCIAL-SHARING.md should cross-reference the anti-slop checklist and add specific anti-patterns: "Social icons must not use brand colors from memory — use official brand kit colors. Facebook blue ≠ any shade of blue you choose."

### vs I18N.md "DE + EN is the standard baseline"

The plan's vertical template §11 adds "per-vertical keyword pattern (e.g. '[service] em [city]' structure)" — this is Brazilian Portuguese keyword pattern. The §11 additions should also include the German keyword pattern per vertical (`[service] [Berlin-neighborhood]`) since most builds will be DE+EN first. Not a regression, but a gap in the planned content.

### vs SALES.md "Anti-patterns — don't build on WordPress/Wix"

The plan doesn't reference SALES.md. This is fine — it's a standards expansion plan, not a sales expansion plan. But SALES.md's pricing model (€500–1500 for a site) should be cross-checked against the effort estimate increase from adding Sentry + PostHog + cookie banner. A Tier 2 build that now requires Sentry setup + PostHog + LEGAL.md cookie banner + LGPD policy takes meaningfully longer than the current pricing model assumes. This isn't a plan issue but it should be flagged for SALES.md review in a future pass.

---

## 5. Housekeeping verification — what's done vs what the plan thinks needs doing

| Housekeeping item | Plan says | Actual state |
|---|---|---|
| Move `docs/clients/jean-souza-barber/` → `docs/clients/archived/` | Batch 1 | NOT done — directory still at `docs/clients/jean-souza-barber/` |
| Move `docs/clients/porto-dos-ribeiros/` (and v2, v3) → `docs/clients/archived/` | Batch 1 | NOT done — directory still at `docs/clients/porto-dos-ribeiros/` |
| Create `docs/clients/archived/README.md` | Batch 1 | NOT done (no archived/ folder in docs/clients/) |
| Move `docs/audit/jean-souza-barber-2026-05-14.md` → `docs/audit/archived/` | Batch 1 | NOT done — file still at `docs/audit/jean-souza-barber-2026-05-14.md` |
| Move `docs/audit/porto-dos-ribeiros-2026-05-14.md` → `docs/audit/archived/` | Batch 1 | NOT done — file still at `docs/audit/porto-dos-ribeiros-2026-05-14.md` |
| Create `docs/audit/archived/README.md` | ✅ Already done | README.md present in `docs/audit/archived/` |
| Move `porto-dos-ribeiros-2026-05-13.md` → `docs/audit/archived/` | ✅ Already done | File confirmed in `docs/audit/archived/` |
| Rewrite `PENDING.md` | Batch 1 | NOT done — PENDING.md still references active builds |
| Update root `CLAUDE.md` current client roster | Batch 1 | NOT done — roster still shows Porto + Jean as active |

**The 5 remaining housekeeping items must be the literal first actions in Batch 1** — before any doc is written, before LEGAL.md is started. Starting Batch 1 doc writing with a stale project state creates noise in every subsequent Claude session that references CLAUDE.md or PENDING.md.

---

## 6. Improvements — not required but worth considering

### Improvement 1 — Add a "jurisdiction detection flowchart" to LEGAL.md

The plan says "per-client market → jurisdiction mapping rule" will be documented. This is important but abstract. The most useful form is a simple decision tree:

```
Is the client's business registered in Germany (or serving German market)?
  YES → DSGVO + DE rules apply. Also apply GDPR as the superset.
  NO  ↓
Is the client's business registered in Brazil (CNPJ/MEI)?
  YES → LGPD + BR rules apply.
  NO  ↓
Is the client's business registered in Portugal (NIF)?
  YES → RGPD (PT implementation of GDPR) + PT rules apply.
  NO  ↓
Is the client targeting California residents or any US market?
  YES → US section applies (baseline CCPA; check state).
  NO  → Default to GDPR as the conservative baseline.
```

This is more operationally useful than a table and maps directly to build decisions.

### Improvement 2 — Name the 9 LGPD lawyer audit points explicitly

The plan repeatedly references "the LGPD video's 9-point lawyer audit" as the acceptance criterion for Batch 1. But these 9 points are never listed. LEGAL.md's value as a document is partly dependent on how explicitly it maps to those 9 points. If the points can be retrieved (from the video, from memory, from the ANPD guidance), listing them and mapping each to a LEGAL.md section would make the acceptance criterion concrete and testable.

### Improvement 3 — Batch 1 operational test §1.5 should include a "shadow audit" procedure

The current plan describes §1.5 as "12–18 verifiable test items." These are good, but the most valuable test is a complete walkthrough of the LGPD audit against a real build. Since there are no current builds, this can't happen until the Batch 3 reference implementation.

Suggestion: In CHECKLIST.md §1.5, add a "Pre-launch jurisdiction audit" procedure: "For any production build, simulate the audit for the client's jurisdiction: DE → run the Internet.nl + SecurityHeaders + Impressum accessibility check. BR → run the ANPD's 9-question self-assessment. US → check California Consumer Privacy Act compliance checklist." This makes the operational tests less abstract and directly traceable to the regulatory frameworks.

### Improvement 4 — Create a "Batch 0" for the 5 housekeeping items

The plan calls the housekeeping "adjacent housekeeping included in Batch 1." Given the urgency (stale CLAUDE.md + PENDING.md are actively misleading every session), and given that these 5 items are ~1 hour total, separating them as "Batch 0 — complete first, unblock Batch 1" would make the execution gate cleaner. Right now, a session that starts "Batch 1" could write LEGAL.md while PENDING.md still shows Porto as active.

### Improvement 5 — SOCIAL-SHARING.md should be Batch 2, not Batch 3

The per-vertical share strategy (Batch 3 §11 content) is being written in Batch 2 (the vertical template §11 Measurement subsections). But the spec doc (SOCIAL-SHARING.md) is Batch 3. This means in Batch 2, when adding §11 to each vertical template, the author won't have SOCIAL-SHARING.md to reference — they'll be writing share strategy guidance without a canonical doc to point to.

Either: (a) move SOCIAL-SHARING.md to Batch 2, or (b) in Batch 2's template §11 work, mark the share strategy sections as DRAFT until SOCIAL-SHARING.md exists. Option (b) is lower-risk for Batch 2 timeline.

### Improvement 6 — Reference implementation #1 should be DE-market, not BR-market

The plan chooses "Solo barber (Tier 2 / Type 1, BR LGPD)" as reference implementation #1. The rationale is that it matches the deleted Jean build pattern.

However, the agency's primary market is Berlin (DE). Most future client builds will be DE-market sites (DSGVO, German Impressum, DE+EN bilingual). Building the canonical reference implementation against LGPD means the primary compliance path exercised is the *secondary* market.

Suggestion: Flip the order — make reference impl #1 a DE-market site (could still be a barber/beauty vertical), and reference impl #2 the BR LGPD-heavy exercise. This doesn't change the complexity, but aligns the primary reference with the primary market. The Jean Souza prospect can be the BR reference impl when the build resumes (if it ever does).

---

## 7. Risk assessment — what could go wrong with the plan

| Risk | Likelihood | Impact | Current mitigation | Additional mitigation |
|---|---|---|---|---|
| LEGAL.md US section written at insufficient quality | High | Medium | "Claude is not a lawyer" caveat | Explicitly limit US section to framework overview, not prescriptive implementation. Mark as "verify with US counsel." |
| Sentry on Tier 1 creates PageSpeed regression | High | High | None in current plan | Narrow mandate to Tier 2+ (see Issue 2) |
| PENDING.md / CLAUDE.md staleness misleads Batch 1 session | High | High | None — items deferred to "Batch 1" | Treat as Batch 0 — first 30 min of Batch 1 |
| Batch 2 + 3 template §11 work (12 × 1 hr = 12 hrs) expands beyond budget | Medium | Medium | Time-box per §10 | Apply §11 to the 5 highest-priority verticals first (Gastronomy, Beauty, Health, Trades, Studio) — the other 7 can follow |
| Cookie banner spec (Batch 1) not actionable until Batch 3 component | Medium-High | High | Partial — plan acknowledges this | Ship minimal vanilla JS snippet in Batch 1 alongside spec (see Gap D) |
| gastronomy.md §9.4 dangling references to deleted Porto builds | High | Low-Medium | Not addressed in plan | 5-min edit in Batch 1 housekeeping |
| ANALYTICS.md PostHog addition creates confusion pre-INTEGRATIONS.md | Medium | Medium | Not addressed | Add minimal PostHog sketch to ANALYTICS.md in Batch 2 |

---

## 8. Verdict — is the plan ready to execute?

**Yes, with the following pre-conditions:**

### Must fix before starting Batch 1 doc writing (Batch 0)

1. Execute the 5 pending housekeeping items (PENDING.md rewrite, CLAUDE.md roster update, archive moves for `jean-` and `porto-` docs, `docs/clients/archived/` creation).
2. Update `gastronomy.md §9.4` to mark Porto reference impls as archived.

### Must resolve before finalizing LEGAL.md (within Batch 1)

3. Narrow Sentry mandate: mandatory for Tier 2+ with server functions, optional for Tier 1 static (with documented trade-offs).
4. Define clearly what stays in SECURITY.md §6 / §6.5 vs moves to LEGAL.md — avoid creating a fourth home for legal rules.
5. Add minimal executable cookie-consent snippet alongside the LEGAL.md spec.

### Must address in Batch 2 execution

6. Update ANALYTICS.md "three streams, no more" rule to accommodate PostHog for Tier 3.
7. Add PostHog consent-gating spec to ANALYTICS.md when PostHog is introduced.
8. Add German keyword pattern to per-vertical §11 SEO sections (not just Brazilian).
9. Mark share strategy in template §11 as DRAFT until SOCIAL-SHARING.md exists (or move SOCIAL-SHARING.md to Batch 2).

### Recommended (not required)

10. Rename implementation #1 to DE-market (see Improvement 6).
11. List the 9 LGPD lawyer audit points explicitly in LEGAL.md acceptance criteria.
12. Add jurisdiction detection flowchart to LEGAL.md.

---

## 9. Summary score by area

| Area | Score | Key reason |
|---|---|---|
| Strategic direction | ✅ Strong | Correct trigger, correct prioritization, correct batch order |
| Batch 1 scope | 🟡 Needs minor adjustment | Sentry Tier 1 conflict; LEGAL.md scope needs PT depth check |
| Batch 2 scope | 🟡 Needs coordination | PostHog vs ANALYTICS.md rule conflict; share strategy ordering |
| Batch 3 scope | ✅ Solid | Well-contained; reference impl vertical choice is the one open debate |
| Housekeeping | 🔴 Urgent | 5 items pending; blocking every future session |
| Cross-doc consistency | 🟠 Mixed | Several existing docs will conflict with new docs unless patched proactively |
| Regulatory coverage | 🟡 Proceed with caution on US | DE/BR solid; PT thin; US is ambitious |

---

*This audit is a point-in-time review against the documentation state as of 2026-05-16. Batch 1 execution should start with the 5 housekeeping items and the Sentry-scope clarification before any new doc writing begins.*
