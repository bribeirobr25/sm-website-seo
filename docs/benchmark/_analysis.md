# iCreateYourSite benchmark — competitive analysis + inbound-funnel sprint plan

**Created:** 2026-06-04
**Source material:** the 21 captured pages in this folder (`docs/benchmark/*.md`) + the live site https://icreateyoursite.com
**Target surface for all work below:** our live agency site `clients/baragency/` (Tier 2 Astro · trilingual EN/DE/pt-BR), unless a specific item says otherwise.
**Backlog mirror:** the 9 items are tracked as `F1`–`F9` in `docs/audit/private/PENDING.md` → "2026-06-04 inbound-funnel backlog."

---

## Implementation status (updated 2026-06-06)

**✅ F1–F8 BUILT** on `clients/baragency/` the same day this plan was written. `pnpm validate` green · 104 static + 3 SSR routes · visual-validated at 375/768/1280 · scanner tested end-to-end · code-review pass fixed 4 issues (explicit-any, sub-AA fine-print, Safari `<summary>` marker, `h1→h3` skip). **F9 deferred** per plan.

**⚠ F2 model pivot (2026-06-06):** this plan recommended a *hybrid* (low-upfront + monthly) model — see Part C "F2" + the Part E guardrail "we use the hybrid." The owner instead chose a **pure-monthly subscription ("Website-Abo")**: **€219 / €390 / €570 per month, no setup fee** (owner-confirmed). To make a no-setup monthly fee safe, the website is a **managed subscription, not a one-time handover** — the client owns domain/content/data, the build/design/code is licensed while subscribed, with an optional one-time buy-out. Crucially, the ownership copy says this **honestly** rather than copying iCreate's "you own everything" (which means only content): in DE that ambiguity is irreführende Werbung (UWG) + a voidable surprising clause (§305c/§307 BGB), and iCreate in fact has **no Terms/Privacy/contract at all** (only a refund policy) — so their model is legally exposed, not "safe." The honest framing gives the same asset-protection without the exposure. The Part C/E "hybrid" wording below is superseded for this client; the real AGB + Datenschutz + buy-out contract need a German lawyer.

Everything stays `noindex` (demo discipline) and every concrete commitment — prices (F2/F4), promise numbers (F5), reviews (F7), the WhatsApp number (F8, wired but `visible: false`) — is **DRAFT pending owner sign-off**. The Part D inputs below are therefore no longer "before we start" but "before it goes production-real." Backlog statuses: `docs/audit/private/PENDING.md` ("2026-06-04 inbound-funnel backlog"). Per-client specifics: `docs/clients/baragency/{CLAUDE,BRIEF}.md`.

Route map: F2 `/pricing` · F4 `/website-check` · F3 `/tools` + `/tools/website-scan` + `/tools/gbp-check` (+ `api/site-scan`, `api/gbp-check`) · F1 `/webdesign-berlin` + 24 `/webdesign-berlin/[slug]` (German) · F5/F6/F7 on the home pages · F8 sitewide hidden `ContactBar`.

---

## Part A — The core model difference

| | **iCreate Your Site** | **Us** |
|---|---|---|
| Acquisition | Inbound (SEO + free tools + reviews) | Outbound (demo-first cold calls) |
| Money | No/low upfront, everything rolled into a monthly fee ($249 / $449 / $749+) | One-time build (€500–8k) **+** retainer (€150–800) |
| Ethos | Volume ("1,000+ sites," "1,000/year") | Quality-first, small batch, engineering-grade |
| Tech | WordPress / Elementor | Astro / Next, perf + a11y + DSGVO baked in |

They are a productized, inbound, retainer-funded shop; we are a craft, outbound, project-funded shop. We are technically far stronger; they are commercially more *packaged*. **Almost everything worth borrowing is on the packaging / funnel side** — it converts our existing technical assets into an inbound engine.

---

## Part B — Impact ranking (strategic value, highest first)

| Rank | Code | Item | Why it matters | Effort |
|---|---|---|---|---|
| 1 | **F1** | Programmatic local × vertical landing pages | New inbound acquisition channel; highest ceiling. We can out-build them with our component library + 12 vertical templates. | High |
| 2 | **F2** | Published, productized packages (hybrid low-upfront + monthly) | Converts inbound; reframes the offer to lower entry friction. | Med |
| 3 | **F3** | Free lead-magnet tools (GBP checkup → DSGVO+PageSpeed scanner) | New top-of-funnel + email capture; plays to our local-SEO + engineering strengths. | High |
| 4 | **F4** | Low-commitment micro-product (paid "Website- & GBP-Check" session) | New revenue + a funnel rung that converts the hesitant. | Low |
| 5 | **F7** | Social-proof architecture (reviews wall + awards/trust-badge row) | Trust multiplier on every page. Pairs with our existing review-gen playbook. | Low–Med |
| 6 | **F5** | Specific, measurable promises (perf / timeline numbers) | Cheap trust multiplier — and we actually beat the numbers they claim. | Low |
| 7 | **F6** | FAQ-on-every-page + FAQPage schema | SEO + objection-handling in one reusable block. | Low |
| 8 | **F8** | Messaging-first CTA (WhatsApp, our Berlin analog to their "Text Us") | Friction reduction across the whole site. | Low |
| 9 | **F9** | AI productized line (chatbot / automation add-on) | New revenue line; we're built on Claude — but unproven, needs its own GTM. | High |

> **Sequencing nuance:** strategic *impact* ranks F1–F2–F3 at the top, but several low-effort items (F5/F6/F7/F8) are **prerequisites for the big pieces to convert** — a landing page or packages page is far weaker without promises, FAQ, social proof, and a frictionless CTA. So the *execution* order front-loads those cheap multipliers (Phase 0) before the channel builds. Impact still drives the order; the multipliers just happen to be both cheap and foundational.

---

## Part C — Aggressive-sprint execution plan (~2 weeks)

Day ranges assume high availability. Dependencies are noted per phase; respect them over the calendar.

### Phase 0 — Conversion multipliers (Day 1) · build once, reuse everywhere
These become shared building blocks for F2 and F1.

**F8 — Messaging-first CTA**
- Goal: replace the primary CTA across the agency site with a WhatsApp-first action (kept alongside the existing Resend contact form, not replacing it).
- Steps: extend the `Button` / CTA primitive with a `whatsapp` variant (`https://wa.me/<number>?text=<prefilled DE/EN/PT>`); add a sticky mobile "WhatsApp / Anrufen" bar; keep form as the fallback.
- Reuses: `docs/design/components/_impl/` Button, `FORMS.md`.
- Blocked by: **WhatsApp Business number (owner)**.
- Effort: ~half day.

**F5 — Measurable promises**
- Goal: publish concrete numbers we genuinely hit — "Vorschau in 5 Werktagen," "< 2 s Ladezeit, 90+ PageSpeed," "Antwort in unter 24 h."
- Steps: a `StatCallouts`/promise strip in the hero + a "Warum wir" section; verify each number against `PERFORMANCE.md` budgets before publishing (don't claim what we can't prove).
- Reuses: `StatCallouts` component, `PERFORMANCE.md`.
- Blocked by: **owner sign-off on which numbers we commit to publicly** (I'll propose, you confirm).
- Effort: ~half day.

**F6 — FAQ block + FAQPage schema**
- Goal: a reusable FAQ section that doubles as `FAQPage` JSON-LD, droppable on every key page.
- Steps: build/confirm the `FAQ` component emits schema; author 6–8 Q&As per page type (home, packages, each local page); wire schema via BaseLayout `extraSchema`.
- Reuses: `docs/design/components/FAQ.md`, `SEO.md` (FAQ schema), BaseLayout `extraSchema` extension point (do **not** rewrite BaseLayout — per the Kodama rule).
- Effort: ~half day.

**F7 — Social-proof architecture**
- Goal: a "Wall of Love" reviews section + an awards/trust-badge row.
- Steps: use `Testimonial` for the wall (real Google reviews only — owner-confirmed or labelled DRAFT, never invented); build a `TrustBadgeRow` (e.g. "DSGVO-konform," "100% Made in Berlin," real awards if/when we have them).
- Reuses: `Testimonial` + `TrustBadgeRow` components, `SEO.md` §8.4 review-generation playbook.
- Blocked by: **real review text + any badges (owner)** — placeholders labelled DRAFT until then.
- Effort: ~half–1 day.

### Phase 1 — Package the offer (Days 2–3)

**F2 — Hybrid pricing / packages page**
- Goal: 2–3 named packages with a "Most Popular" anchor, EU-compliant terms, **hybrid low-upfront + monthly** framing.
- Steps: design the tier ladder (e.g. *Start / Wachstum / Komplett*); show a smaller upfront + monthly care plan; write transparent, Widerrufsrecht-compliant terms (NOT their non-refundable / chargeback-fee model); feature-comparison table; FAQ (F6); CTA (F8).
- Reuses: `SALES.md` (internal pricing matrix), `PricingTable` component, `KPI.md` KPI-contract framing, `LEGAL.md` for terms.
- Blocked by: **real prices + what's bundled per tier (owner)** — built with DRAFT numbers until signed off.
- Guardrail: do not copy their pure-monthly / no-upfront model wholesale (churn + lock-in risk); hybrid keeps cashflow + ownership clean.
- Effort: ~1 day.

**F4 — Micro-product: paid "Website- & GBP-Check" session**
- Goal: a low-commitment paid offer (their $150 1-on-1 analog) that is both standalone revenue and a funnel rung into full projects.
- Steps: a dedicated page (format, duration, what's covered, deliverable), a scheduling embed, and a payment link; position it as creditable toward a full build (unlike their non-creditable deposit).
- Reuses: existing "existing-site audit (€300–600)" offer in root `CLAUDE.md`, `SALES.md`.
- Blocked by: **price + format + scheduling tool choice (owner)** — e.g. Cal.com vs Calendly; payment via Stripe link.
- Effort: ~half–1 day.

### Phase 2 — The inbound engine (Days 3–7)

**F1 — Local × vertical landing pages**
- Goal: high-intent pages like *"Friseur-Website Kreuzberg," "Restaurant-Website Mitte,"* targeting vertical × Bezirk.
- Approach: data-driven Astro routes from a typed page-data file, **but** each page carries genuinely differentiated copy (Bezirk-specific references, vertical-specific pain) — NOT find-and-replace. Their pages are near-duplicate thin content; that's the one thing we must not copy.
- Per page: H1 + intent intro · vertical pain section · our process · `ServiceArea`/`MapEmbed` · FAQ (F6) · social proof (F7) · packages CTA (F2) · lead-tool CTA (F3) · `LocalBusiness`+`Service`+`FAQPage` schema · BreadcrumbList.
- First cut (owner chose vertical × Bezirke combo): **proposed verticals** gastronomy · beauty · health · trades (match our strongest templates + existing demos); **proposed Bezirke** Mitte · Kreuzberg · Neukölln · Prenzlauer Berg · Friedrichshain · Charlottenburg. Start with **1 fully-written exemplar**, get approval on depth/voice, then expand combos.
- Reuses: `docs/design/templates/{gastronomy,beauty,health,trades}.md` (archetypes + §11.8 schema), `SEO.md` local-SEO, `CITATIONS.md`, components (`ServiceArea`, `MapEmbed`, `FAQ`, `Testimonial`), `DESIGN-BEST-PRACTICES.md` §6.5 anti-slop discipline.
- Blocked by: **final vertical + Bezirk list (owner — defaults proposed above)**.
- Anti-slop gate: apply the same portfolio-diversity / no-duplicate-composition rules we enforce on demos.
- Effort: ~2–3 days for the system + first 4–6 pages; scales after.

### Phase 3 — Lead-magnet tools (Days 5–10, overlaps Phase 2)
Heaviest builds; develop while Phase 2 content matures. Owner chose **both, sequenced**.

**F3a — GBP / Local-SEO checkup (FIRST)**
- Goal: enter a business name → report on GBP completeness (categories, hours, photos, reviews, NAP consistency) → email-gated full report → "let us fix it" CTA.
- Tech: needs a server surface. baragency is Astro (1 SSR route already) — add an Astro API route / serverless function on Vercel. **Data-source decision needed:** Google Places API (paid per call, most accurate) vs a lighter guided/manual-assisted check vs scraping (fragile, ToS risk). Recommend Places API with a free-tier cap + a per-day rate limit.
- Reuses: `SEO.md` local-SEO + GBP optimization, `CITATIONS.md` NAP template, `ANALYTICS.md` (consent-gated event), `FORMS.md` (email capture + honeypot + rate limit), `INTEGRATIONS.md` (Resend for delivering the report).
- Blocked by: **data-source + API-budget decision (owner/me)**.
- Effort: ~2–3 days.

**F3b — DSGVO + PageSpeed scanner (SECOND)**
- Goal: enter a URL → report on cookie/consent compliance, PageSpeed, security headers → email-gated → CTA.
- Tech: call Google PageSpeed Insights API (free), check response headers (`SECURITY.md`'s 6 headers), detect a consent banner / pre-consent third-party requests. Serverless function.
- Reuses: `PERFORMANCE.md`, `SECURITY.md` (header set), `LEGAL.md` (DSGVO checks), `ANALYTICS.md`, `FORMS.md`.
- Blocked by: F3a's serverless scaffolding (reuse it).
- Effort: ~2 days (cheaper — PSI API is free, no paid data).

### Phase 4 — New product line (post-sprint)

**F9 — AI productized line**
- Goal: a consent-gated AI chatbot / automation add-on as an upsell ("Type 2.5").
- Why deferred: new, unproven, needs its own positioning, pricing, and a reference build before we sell it. Don't let it dilute the sprint.
- Reuses: `INTEGRATIONS.md`, the `ai-services.md` benchmark page for offer structure (but more honestly integrated + EU-hosted).
- Trigger: after the sprint lands and one inbound lead asks, or we build one reference chatbot on a demo.

---

## Part D — Inputs needed from Breno (owner-pending)

Built as DRAFT until provided; none block starting Phase 0 except F8's number.

1. **WhatsApp Business number** (+ prefilled message tone) — blocks F8.
2. **Public promise numbers** we commit to (preview time, load time, response time) — I'll propose, you confirm — blocks F5 publish.
3. **Real review text + any award badges** — blocks F7 going non-DRAFT.
4. **Hybrid package prices + per-tier inclusions** (upfront + monthly) — blocks F2 going non-DRAFT.
5. **Micro-product price + format + scheduling/payment tools** (Cal.com vs Calendly; Stripe link) — blocks F4.
6. **Final vertical + Bezirk list** for F1 (defaults proposed: gastronomy/beauty/health/trades × Mitte/Kreuzberg/Neukölln/Prenzlauer Berg/Friedrichshain/Charlottenburg).
7. **GBP-tool data source + API budget** (Places API paid vs manual-assisted) — blocks F3a.
8. **Confirm F9 (AI line) stays deferred** past the sprint.

---

## Part E — Guardrails (what NOT to copy)

- **Their refund policy** — strictly non-refundable + $50 chargeback fee won't survive EU/German consumer law (Widerrufsrecht). Our terms follow `LEGAL.md`.
- **Pure monthly / no-upfront** — funds them but creates churn + hosting lock-in and clashes with "you own your site." We use the **hybrid**.
- **Thin near-duplicate location pages** — their `/miami` `/hialeah` `/marietta` pages are find-and-replace clones (a ranking risk). Our F1 pages must be genuinely differentiated per the anti-slop rules.
- **Volume claims + "custom, no templates" positioning** while running a template. We compete on craft, not a sites-count number.
- **Sloppiness** — their live site advertises "$180/mo" in the title but shows $249 on the page (see `pricing.md`). Accuracy is part of our pitch; never ship that.
