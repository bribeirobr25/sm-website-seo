# BRIEF.md — Reference Solo Barber

**Status:** reference implementation · not a real client engagement.

This BRIEF.md exists to demonstrate the agency-canonical brief structure for solo-operator beauty clients (specifically barbers in BR market). When a real solo-barber prospect signs, copy this file, replace the archetypal details with confirmed values, and remove this status line.

---

## Business context

| Field | Value |
|---|---|
| Business name | Barbearia Tio Edu |
| Founder | Eduardo "Tio Edu" Santos |
| Founded | 2018 |
| Type | Single-operator barbershop, 1 chair |
| Location | Rua Aspicuelta, 123 — Vila Madalena, São Paulo/SP |
| Market | Brazil (LGPD enforced) |
| Languages | PT-BR only |
| Booking platform | Trinks |

## Scope

| Item | Decision |
|---|---|
| Product type (per `docs/design/TECH.md` §Stack decision matrix) | **Type 1** — static info site + Trinks deep-link |
| Stack tier | **Tier 2** (Astro) — info site with rich UI but no contact form, no DB |
| Pages | Single-page index · `/politica-de-privacidade` · `/404` · `/500` |
| Multilingual? | No — PT-BR only |
| Forms? | No contact form (booking handled by Trinks; WhatsApp for ad-hoc inquiries) |
| Payment? | No (booking platform charges; in-person payment after service) |

## Pricing (indicative — see `SALES.md` §Pricing)

| Line item | Range |
|---|---|
| One-time build (Type 1 multi-page) | €800–1.500 |
| Monthly retainer | €150–300 |
| GBP setup | included in retainer first month |
| Existing-site audit | n/a — greenfield |

---

## Open questions (DRAFT items requiring owner confirmation)

All items in `clients/reference-solo-barber/src/lib/site.ts` flagged `confirmed: false` or with placeholder values require owner sign-off before production launch:

| # | Item | Where placeholder lives | Resolves when |
|---|---|---|---|
| 1 | Razão Social + MEI/CNPJ (LGPD footer + Política de Privacidade) | `site.ts` `legal.razaoSocial` + `legal.cnpjOrMei` | Owner provides registration documents |
| 2 | Data Controller email (LGPD Art. 18 contact) | `site.ts` `legal.dataControllerEmail` | Owner confirms or creates monitored mailbox |
| 3 | Phone + WhatsApp number | `site.ts` `phone` + `whatsapp` | Owner provides real numbers |
| 4 | Full street address + postal code | `site.ts` `address` | Owner confirms |
| 5 | Geo coordinates | `site.ts` `geo` | Verify against Google Maps pin |
| 6 | Trinks deep-link slug | `site.ts` `booking.url` | User tests link OR owner confirms |
| 7 | Service prices (4 services × `R$ XX` placeholder) | `site.ts` `services[].price` + `confirmed: false` flag | Owner provides actual prices OR confirms "Consulte" wording |
| 8 | Real photos (1 Hero + 1 About + 6 Gallery slots) | `<Placeholder>` components | Owner supplies + agency optimizes |
| 9 | Review approval (`approvedForDisplay: false` gated) | `site.ts` `reviews.approvedForDisplay` | Owner approves 4.9-star / 87-review schema display + 1 featured quote verbatim |
| 10 | Instagram handle | `site.ts` `social.instagram` | Owner confirms handle exists OR removes the link |
| 11 | Real domain | `site.ts` `url` | Owner confirms ownership OR registers `.com.br` |
| 12 | Real Sentry DSN + project + auth token | Vercel env vars (`.env.example` stubs) | Agency creates Sentry project (EU region for BR-LGPD adjacency) |
| 13 | Real GA4 measurement ID | `BaseLayout.astro` (`G-XXXXXX` placeholder) | Agency creates GA4 property + sets ID |

---

## KPI contract — owner-confirmed before scaffold

Per `KPI.md` §KPI contract block. The 4 KPIs we track:

**Defined at:** 2026-05-16 (reference template — date moves to real-client-engagement date on copy)
**Reviewed at:** not yet reviewed (reference template)

### KPIs we track

1. **Trinks booking-platform handoff rate** — ≥ 8% of mobile sessions — `GA4: booking_started` event
2. **Combined phone + WhatsApp click rate** — ≥ 5% of mobile sessions — `GA4: phone_click + whatsapp_click`
3. **Gallery (real client work) engagement** — ≥ 40% of sessions view gallery — `GA4: gallery_viewed` event
4. **GBP profile views + direction requests** — month-over-month growth trend — `GBP Insights`

### Dashboards

- **GA4** — custom dashboard built per `KPI.md` §Dashboard recipes (link populated post-launch)
- **Microsoft Clarity** — default dashboard with heatmaps on home + services + gallery + visit pages
- **GBP Insights** — read directly in Google Business Profile manager
- **GSC** — read directly in Search Console

### Who reads which dashboard

- **Daily quick-check:** GBP Insights · phone calls + profile views
- **Weekly business review:** GA4 · `booking_started` count + top landing pages
- **Monthly retainer report:** agency-supplied PDF (see `KPI.md` §Retainer reporting cadence)

### Review cadence

- Agency sends monthly KPI report by the 5th business day of each month
- Client + agency review quarterly: first Monday of Apr/Jul/Oct/Jan
- KPI list revisited at 6-month mark (add/remove based on what mattered vs what got ignored)

---

## Timeline

| Phase | Duration | Status |
|---|---|---|
| Reference scaffold | n/a — already built | ✅ Complete (Batch 3 of agency-standards expansion) |
| Real-client owner conversation | 1-2 hrs | n/a — reference template |
| DRAFT-item resolution | 1-2 weeks of back-and-forth | n/a |
| Production cutover | 1 day | n/a |
| First monthly KPI report | end of month 1 | n/a |

---

## Photos to fetch from sources (real-client engagement)

When a real solo-barber client signs and uses this scaffold:

| Slot | Source attempt order | Notes |
|---|---|---|
| Logo | Trinks profile page → Google Business Profile → Instagram → owner manual | Per `DESIGN-BEST-PRACTICES.md` §Sourcing hierarchy |
| Hero photo (interior, chair + mirror) | Owner manual upload | Real shop — never stock |
| About photo (founder portrait) | Owner manual upload | Headshot release required |
| Gallery 1-6 (real client work, signed consent) | Owner manual upload | Each photo has explicit consent on file |
| Storefront photo | GBP if available, else owner manual | For OG image fallback |
