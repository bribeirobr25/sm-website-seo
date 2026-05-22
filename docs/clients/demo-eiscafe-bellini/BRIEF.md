> **STATUS: PORTFOLIO DEMO**
>
> This brief documents a fictional business built by sm-website-seo as a cold-outreach
> demonstration artifact. The business identity, address, hours, and prices are all
> invented and clearly marked DRAFT. No KPI dashboard wires (per `KPI.md` — N/A for
> demos). No citation claims (per `CITATIONS.md` — N/A for demos). No real client
> approval gate. See `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` for the canonical demo
> build runbook.

# BRIEF.md — Eiscafé Bellini (demo)

## 1. Business identity

| Field | Value |
|---|---|
| Name | **Eiscafé Bellini** |
| Tagline (DE) | Drei Generationen Familieneis. In Berlin seit 1987. |
| Tagline (EN) | Three generations of family gelato. In Berlin since 1987. |
| Founder (1st gen) | Tommaso & Rosa Bellini (immigrated from Treviso, Veneto in 1985) |
| Founder (2nd gen) | Paolo Bellini (son, joined 1998) |
| Operator today | Giulia Bellini (granddaughter, took over 2020) |
| Founded | 1987 |
| Bezirk | Prenzlauer Berg (Kollwitzkiez subzone) |
| Address (DRAFT) | Husemannstraße 28, 10435 Berlin |
| Phone (DRAFT) | +49 30 4400 1987 *(year-based vanity number for demo realism)* |
| Email (DRAFT) | hallo@eiscafe-bellini.de |
| Domain (DRAFT) | eiscafe-bellini.de — **placeholder; do NOT register**, this is a demo |
| Primary locale | de-DE |
| Secondary locale | en-US |
| Vercel deploy | demo-gastronomy.vercel.app (`noindex`) |

## 2. Scope

Tier 2 / Type 1 (static info site, no booking flow, no transactional). Scaffold from `scaffolds/astro-tier2/`. Pages:
- `/` (DE) + `/en/` Home — Hero · Menu preview · About · Visit
- `/gelato` (DE) + `/en/gelato` Menu — full gelato + sorbet + Spezialitäten listing
- `/besuchen` (DE) + `/en/visit` Visit — hours · address · map · contact
- `/impressum` DE-only — DSGVO TMG §5
- `/datenschutz` DE-only — DSGVO Datenschutzerklärung
- 404 + 500 — branded error pages (DE + EN)

## 3. Plausibility check (per runbook §1.2)

| Check | Result | Date |
|---|---|---|
| Google search "Eiscafé Bellini Berlin" | No exact-match Bellini gelateria in Prenzlauer Berg or anywhere in Berlin on first page of results | 2026-05-20 |
| GBP lookup "Eiscafé Bellini" + Berlin | No GBP entry for this exact name in Berlin | 2026-05-20 |
| `eiscafe-bellini.de` whois | Available as of retrieval | 2026-05-20 |
| Husemannstraße 28 (real address) | Real Prenzlauer Berg street; #28 verified to exist via Google Maps | 2026-05-20 |

**Verdict:** name is plausible-but-unclaimed; safe for demo use. Address is real (Kollwitzkiez area, gelateria-friendly neighborhood).

## 4. Open questions / DRAFT items

| # | Field | Status | Resolution before launch |
|---|---|---|---|
| 1 | Real domain | DRAFT — never registered | Demo: keep `*.vercel.app` URL; if elevated to real client, register at scaffold time |
| 2 | Real phone | DRAFT — `+49 30 4400 1987` is a vanity placeholder | Demo: keep as-is (clearly fictional pattern) |
| 3 | Real owner photos | DRAFT — Unsplash candidate images for "Italian-grandmother-baker" + "young Italian woman in apron" identified in CREDITS.md | Demo: keep Unsplash images with attribution; flag as "Modell-Foto" / "Symbol image" in alt text |
| 4 | Real menu prices | DRAFT — pricing is reasonable Prenzlauer Berg market range (single scoop €2.20, coppa €5.50) but invented | Demo: keep as-is |
| 5 | Real opening hours | DRAFT — Sommer 11-22 / Winter Di-So 12-19 is the typical Berlin gelateria pattern, invented for plausibility | Demo: keep as-is |

## 5. KPI contract — N/A (demo)

Per `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` §4.5: demos have no real KPIs to wire. No GA4, no PostHog, no Clarity. The scaffold's consent-gated analytics stubs remain present but use `G-XXXXXX` placeholder IDs — they do nothing in practice (script-src guards by `data-cookie-category="analytics"` AND the placeholder GA4 ID returns 404 anyway).

## 6. Citations contract — N/A (demo)

Per `docs/audit/PORTFOLIO-BUILD-RUNBOOK.md` §4.6: no NAP listed in directories. The `<script type="application/ld+json">` Restaurant schema is generated with the demo data and will serve search engines if (despite `noindex`) anything indexes the demo URL — but no citation claims, no GBP entry created.

## 7. Image inspiration (refined in Phase 3)

| Slot | Concept | Source plan |
|---|---|---|
| Hero | Gelato display case close-up with hand-spatula scooping — Italian artisan feel | Unsplash search: `gelato counter italy` |
| About | Three generations: vintage 1980s family photo + modern owner portrait | Unsplash search: `italian family vintage`, `young woman gelateria apron` |
| Menu category | Pistachio gelato with whole Sicilian pistachios visible | Unsplash search: `pistachio gelato bronte` |
| Visit | Husemannstraße / Prenzlauer Berg café-street exterior with cobblestone | Unsplash search: `prenzlauer berg cafe street` |
| Section bg | Cream + texture (parchment / wood / linen) — for layered sections | Unsplash search: `cream linen texture` |

## 8. Demo handoff / portfolio use

This demo is the agency's gastronomy vertical artifact. Cold-outreach process:
1. Real Berlin gelateria owner contacted
2. Show this `demo-gastronomy.vercel.app` URL
3. Pitch: "Hier ist, wie wir ein Eiscafé wie Ihres umsetzen könnten — in Ihrer Farbe, mit Ihrem Namen, mit Ihrer Geschichte."
4. If interested, copy `clients/demo-eiscafe-bellini/` → `clients/[real-slug]/`, swap SITE constants, run Phase 1-6 with real data.

---

*Phase 1 RESEARCH source: `docs/audit/demo-eiscafe-bellini-RESEARCH.md` (2026-05-20).*
