# BAR Agency — BRIEF

**Project:** agency-self marketing site (display brand: **BAR Agency**; folder/URL/email keep the `breno-bar` form)
**Status:** Demo-deployed at https://bar-agency.vercel.app (noindex; Berlin-night redesign). Single GitHub-connected Vercel project (auto-deploys `main`); the old `agency-breno-bar` project was deleted 2026-06-14. Pre-production: domain + Resend env vars + lawyer sign-off pending (address + USt-IdNr now resolved — see DRAFT table).
**Built:** 2026-05-27 · **Inbound-funnel sprint:** 2026-06-04 · **Rebrand + pricing/contract overhaul:** 2026-06-09 to 12 (anniversary billing + § 3 payment details added 06-12 — see the per-client `CLAUDE.md` 2026-06-09→12 section)

## Owner / data controller

- **Founder:** Breno Ribeiro (Berlin-based Einzelunternehmer; sole operator)
- **Public-facing email:** hello@breno-bar.com (display + mailto target — requires real MX + forwarder before launch)
- **Backend inbox:** breno.ribeirobr@gmail.com — receives every contact-form submission via Resend
- **LinkedIn:** https://www.linkedin.com/in/bribeirobr/
- **X:** https://x.com/bribeiro_br

## Business positioning

Voice "Websites that bring you customers." (was "Websites worth being proud of."). Visual register: originally Apple-inspired, **re-skinned 2026-06-13 to the dark "Berlin night" look**, deployed 2026-06-14 to `bar-agency.vercel.app` (see `design.md` § "Berlin night"). **4-offering catalog** for owner-led businesses (rebranded 2026-06-09):

1. **Web Design** — custom, mobile-first marketing site (detail page `/services/website`)
2. **SEO and Local Listing** — Google/Maps/Apple Maps + directories (detail page `/services/seo`)
3. **E-Commerce and Business Email** — online store + professional email (no detail page; tiered in plans)
4. **AI Solutions, Booking System and More** — chatbot/automation/booking (no detail page; top-tier plan)

Plans are **bilingual DE+EN** by default; extra languages are a **+€36/mo per-language** add-on, business email a **+€12/mo per-mailbox** add-on (both shown as ⓘ tooltips on `/pricing`). Custom software stays quote-per-project, not bundled. No "account manager / same-day / team" claims (honest solo-studio positioning).

**Pricing (updated 2026-06-06):** the earlier "no pricing on site" stance was reversed by the inbound-funnel sprint, and the model was then pivoted from hybrid to a **pure-monthly subscription ("Website-Abo")**. `/pricing` publishes three owner-confirmed monthly plans — **Start €219 · Growth €390 · Complete €570 per month, NO setup fee** (plus VAT). The website is a **managed subscription, not a one-time handover**: the client owns their domain, content, and data (full export anytime); the build/design/code is licensed while subscribed; cancelling takes the site offline, with an **optional one-time buy-out** to own it outright. Ownership copy states this **honestly** — deliberately NOT iCreate's "you own everything" ambiguity, which in DE is UWG/§305c-§307 BGB risk (see `docs/benchmark/_analysis.md` + the 2026-06-06 decision below). Non-pricing CTAs still route to contact; free tools + the paid "website-check" micro-product are additional lead surfaces.

## Target audience

Berlin SMBs (primary) + Brazilian community in Berlin + Portugal owner-led businesses. Trilingual delivery (EN/DE/pt-BR) on the agency's own site demonstrates the agency's i18n capability.

## Open questions (DRAFT to confirm before production)

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Berlin Anmeldung address (street + Bezirk + PLZ) | Founder | ✅ CONFIRMED 2026-06-09 — Strausberger Pl. 11, 10243 Berlin, Friedrichshain-Kreuzberg (`site.ts` `address.*`) |
| 2 | USt-IdNr from Finanzamt | Founder | ✅ RESOLVED 2026-06-09 — **Kleinunternehmer § 19 UStG** (no USt-IdNr; `site.ts` `legal.kleinunternehmer: true`) |
| 3 | Real domain `breno-bar.com` purchase + Vercel domain attachment | Founder | DRAFT |
| 4 | MX setup for `hello@breno-bar.com` → forward to gmail (Cloudflare Email Routing or similar) | Founder | DRAFT |
| 5 | Resend domain verification + `RESEND_API_KEY` populated in Vercel env | Founder | DRAFT — endpoint returns 503 without |
| 6 | Decide whether to flip from `noindex` after #1-5 resolve | Founder | DRAFT — root `CLAUDE.md` demo-discipline rule applies |
| 7 | **(funnel)** Subscription prices | Founder | ✅ CONFIRMED 2026-06-06 — €219 / €390 / €570 per month, no setup fee (`funnel.ts` `pricing.tiers`) |
| 7b | **(legal — NEW)** Lawyer must FINALIZE the subscription legal docs: **the `/contract` (`/de/contract`) template** (`src/lib/contract-strings.ts`) is a subscription version — § 3 monthly fee billed **anniversary-based** (on the start date each month, not a fixed 1st; clamped for the 29th–31st) + a derived optional buy-out note (18× the monthly fee, no separate build fee) + the agency payment details (IBAN/BIC + PayPal, from `SITE.payment`), § 4 cancellation→site offline (content/data/domain handed over, not the build) with 14-day notice to the end of a billing month, § 5 licence-not-transfer. The on-document red "DRAFT — NOT LAWYER-REVIEWED" banner was **removed per owner request 2026-06-09** (the contract no longer self-warns). A Berlin Rechtsanwalt must finalize: legal classification (Dienst-/Mietvertrag), § 307 AGB-Kontrolle, Widerrufsrecht for consumers, the § 5 licence + buy-out mechanics, the anniversary-billing + cancellation wording, VAT §19-vs-regular, and the AVV cross-ref · plus AGB · Datenschutzerklärung. | Founder + lawyer | 🔴 REQUIRED before charging — the contract + on-site terms/FAQ are honest summaries, not finalized legal text (and now carry no on-document warning) |
| 8 | **(funnel)** Public promise numbers (preview/load/response time) | Founder | DRAFT — `funnel.ts` `promises.items` |
| 9 | **(funnel)** Real Google reviews to replace example quotes | Founder | DRAFT — `funnel.ts` `reviews.items` (never ship invented testimonials) |
| 10 | **(funnel)** `/website-check` price + scheduling/payment tool (Cal.com vs Calendly; Stripe) | Founder | DRAFT — `funnel.ts` `websiteCheck`; €120 placeholder |
| 11 | **(F8)** Real WhatsApp Business number + flip `CONTACT_CHANNELS.visible` | Founder | DRAFT — `contact-channels.ts` |
| 12 | **(funnel)** Confirm F1 vertical/Bezirk list (currently gastronomie/friseur/praxis/handwerk × 6 Bezirke) | Founder | DRAFT — `local-pages.ts`; defaults shipped |
| 13 | **(funnel)** Optional `PAGESPEED_API_KEY` for the scan tool | Founder | OPTIONAL — PSI works keyless at low quota |
| 14 | **(deploy)** Vercel project topology | Founder + Claude | ✅ RESOLVED 2026-06-14 — old `agency-breno-bar` project deleted; **`bar-agency` is the single GitHub-connected project** (auto-deploys `main`). **Root Directory set to `clients/agency-breno-bar`** (via API) so the monorepo builds correctly; verified with a git-sourced production build of `e2075e7` (READY · noindex + redesign confirmed on `bar-agency.vercel.app`). |

## Out of scope (intentional)

- ~~Pricing tables on the site~~ — **reversed 2026-06-04, repriced 2026-06-06**: `/pricing` publishes a pure-monthly subscription (€219/€390/€570, no setup). See positioning note above.
- ~~Phone number CTAs (email-first agency)~~ — **partially reversed 2026-06-04**: WhatsApp/phone are now *wired but hidden* (F8, `contact-channels.ts`, `visible: false`). Nothing renders until the owner sets a real number + flips the flag.
- Founder photo on /about (workshop-ethos voice; no founder card)
- Calendly / booking integration (founder retains qualifying control) — note: the `/website-check` micro-product still needs a scheduling/payment tool decision (DRAFT)
- Newsletter signup (the contact form + the two free tools' lead capture are the lead-gen surfaces)

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
| Phone hidden (`SITE.phone: null`) | Email-first agency, no phone CTAs anywhere | User-confirmed 2026-05-27 (revision #4); **partially superseded 2026-06-04** — WhatsApp/phone now wired-but-hidden (F8) |
| Email display = `hello@breno-bar.com`, backend = gmail | Public branding vs. real-inbox separation; gmail is the actual delivery target via `formNotificationEmail` | User-confirmed 2026-05-27 (revision #4) |
| **Inbound-funnel sprint** — published pricing, paid website-check micro-product, 2 free tools, 24 German local-SEO pages, home social-proof/promises/FAQ, hidden WhatsApp | Borrow the high-leverage packaging/funnel patterns from the `icreateyoursite.com` benchmark while keeping our engineering + EU-compliance edge | User-directed 2026-06-04; full plan in `docs/benchmark/_analysis.md` |
| **Pure-monthly subscription model** (€219/€390/€570, no setup) replacing the hybrid build+retainer | Recurring revenue with low entry friction (iCreate proved the no-setup/cancel-anytime model converts) | User-directed 2026-06-06 |
| **Website is a managed subscription, not a one-time handover** — client owns domain/content/data, the build is licensed while subscribed, optional one-time buy-out | Protects the asset so a no-setup monthly fee adds up (you don't give the working site away free on cancellation) — the exact defence iCreate uses | User-directed 2026-06-06 |
| **Ownership stated HONESTLY, not iCreate's "you own everything" ambiguity** | In DE, a "you own your site" claim contradicting a rental reality is irreführende Werbung (UWG) + a voidable surprising clause (§305c/§307 BGB); honesty is also the agency's core brand. Honest framing gives the same protection without the legal/brand exposure — and that's what "safely" actually requires | Claude recommendation, 2026-06-06; user goal was "safely charge only monthly without giving the site away" |

## KPI contract (Type 2 defaults per `KPI.md` §Type 2)

| # | KPI | Target | Source | Status |
|---|---|---|---|---|
| 1 | Contact-form submission rate | ≥ 2 % of unique visitors | GA4 `contact_form_submit` event (consent-gated) | DEFERRED — no analytics wired yet |
| 2 | Portfolio → Contact funnel | ≥ 8 % of portfolio-detail viewers click Contact CTA | GA4 `page_view` → `contact_cta_click` | DEFERRED |
| 3 | Inquiry response time (median) | < 24 h business-day | Manual log; Resend webhook → spreadsheet (later) | DEFERRED |

Activate KPIs after the `noindex` flip — see Pre-launch checklist above.
