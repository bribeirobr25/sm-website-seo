# breno-bar — BRIEF

**Project:** agency-self marketing site
**Status:** Demo-deployed at https://agency-breno-bar.vercel.app (noindex). Pre-production: legal DRAFT items + domain + Resend env vars pending.
**Built:** 2026-05-27

## Owner / data controller

- **Founder:** Breno Ribeiro (Berlin-based Einzelunternehmer; sole operator)
- **Public-facing email:** hello@breno-bar.com (display + mailto target — requires real MX + forwarder before launch)
- **Backend inbox:** breno.ribeirobr@gmail.com — receives every contact-form submission via Resend
- **LinkedIn:** https://www.linkedin.com/in/bribeirobr/
- **X:** https://x.com/bribeiro_br

## Business positioning

International-premium voice ("Websites worth being proud of."), Apple-inspired register. Three services for owner-led businesses:

1. **Website** — multilingual marketing site deployed on infrastructure the client controls
2. **SEO** — local SEO with schema, Search Console, monthly retainer reports
3. **Google Business Profile** — setup + monthly optimization
4. **Social media** (optional) — light-touch IG + Facebook cadence

Pricing is intentionally NOT displayed on the site; every CTA routes to the contact form for a qualified inquiry. Founder retains pricing flexibility per CLAUDE.md §pricing-model.

## Target audience

Berlin SMBs (primary) + Brazilian community in Berlin + Portugal owner-led businesses. Trilingual delivery (EN/DE/pt-BR) on the agency's own site demonstrates the agency's i18n capability.

## Open questions (DRAFT to confirm before production)

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Berlin Anmeldung address (street + Bezirk + PLZ) | Founder | DRAFT — populate `src/lib/site.ts` `address.*` |
| 2 | USt-IdNr from Finanzamt | Founder | DRAFT — populate `src/lib/site.ts` `legal.taxId` |
| 3 | Real domain `breno-bar.com` purchase + Vercel domain attachment | Founder | DRAFT |
| 4 | MX setup for `hello@breno-bar.com` → forward to gmail (Cloudflare Email Routing or similar) | Founder | DRAFT |
| 5 | Resend domain verification + `RESEND_API_KEY` populated in Vercel env | Founder | DRAFT — endpoint returns 503 without |
| 6 | Decide whether to flip from `noindex` after #1-5 resolve | Founder | DRAFT — root `CLAUDE.md` demo-discipline rule applies |

## Out of scope (intentional)

- Pricing tables on the site (CTA-driven; founder chose "no pricing")
- Phone number CTAs (email-first agency)
- Founder photo on /about (workshop-ethos voice; no founder card)
- Calendly / booking integration (founder retains qualifying control)
- Newsletter signup (the contact form is the lead-gen surface)

## Pre-launch checklist (post-DRAFT-resolution)

Per `docs/design/CHECKLIST.md`:

- [ ] Flip `noindex` in `src/layouts/BaseLayout.astro` defaults
- [ ] Flip `public/robots.txt` from `Disallow: /` to `Allow: /` + add `Sitemap:` line
- [ ] Submit `sitemap-index.xml` to Google Search Console + Bing Webmaster
- [ ] Wire GA4 + Plausible (consent-gated) — currently no analytics scripts emitted
- [ ] Visual regression at 375/768/1280 across all 3 locales (latest cycle: 2026-05-27 confirmed clean)
- [ ] Schema validator (Google Rich Results Test) green on home + portfolio detail + service detail
- [ ] Real OG image (1200×630) — currently `og-default.png` is the scaffold placeholder
- [ ] Custom favicon — currently the scaffold placeholder
- [ ] First retainer-tier KPI dashboard wiring (Type 2 defaults per `KPI.md`)

## Architectural decisions log

| Decision | Rationale | Per |
|---|---|---|
| EN at root (not `/en/`) | International-premium positioning; Apple.com defaults to user's locale + serves global at root | User-confirmed 2026-05-27 |
| Trilingual (EN/DE/pt-BR) | Demonstrates the agency's i18n capability on its own site | User-confirmed |
| Browser-locale auto-detect on EN home only | Lets non-EN users land on their language but never bounces manual-switcher choices | User-confirmed 2026-05-27 (revision #3) |
| `featured: true` on only 3 portfolio entries (bonsai, adele, atem) | 3-column home grid is cleaner than 4-up; diBoaS still on full /portfolio | User-confirmed 2026-05-27 (revision #5) |
| Hero top-padding tightened from py-32/44/56 to pt-12/16/20 + pb-24/32/40 | "Breath space was too much" — Apple does aggressive vertical rhythm but breno-bar tightens above-the-fold | User-confirmed 2026-05-27 (revision #2) |
| DemoBanner removed | Agency's own site is not a portfolio demo, so the disclosure pattern doesn't apply | User-confirmed 2026-05-27 (revision #1) |
| Phone hidden (`SITE.phone: null`) | Email-first agency, no phone CTAs anywhere | User-confirmed 2026-05-27 (revision #4) |
| Email display = `hello@breno-bar.com`, backend = gmail | Public branding vs. real-inbox separation; gmail is the actual delivery target via `formNotificationEmail` | User-confirmed 2026-05-27 (revision #4) |

## KPI contract (Type 2 defaults per `KPI.md` §Type 2)

| # | KPI | Target | Source | Status |
|---|---|---|---|---|
| 1 | Contact-form submission rate | ≥ 2 % of unique visitors | GA4 `contact_form_submit` event (consent-gated) | DEFERRED — no analytics wired yet |
| 2 | Portfolio → Contact funnel | ≥ 8 % of portfolio-detail viewers click Contact CTA | GA4 `page_view` → `contact_cta_click` | DEFERRED |
| 3 | Inquiry response time (median) | < 24 h business-day | Manual log; Resend webhook → spreadsheet (later) | DEFERRED |

Activate KPIs after the `noindex` flip — see Pre-launch checklist above.
