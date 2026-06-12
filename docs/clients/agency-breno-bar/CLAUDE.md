# BAR Agency — per-client CLAUDE.md

**Status:** AGENCY-SELF marketing site. This is the agency's own studio website — not a paying-client demo.
Live URL: https://agency-breno-bar.vercel.app (noindex until legal DRAFT items resolve).
**Brand display name is "BAR Agency"** (rebranded 2026-06-09 from "breno-bar"). The folder slug (`clients/agency-breno-bar/`), the Vercel URL (`agency-breno-bar.vercel.app`), and the email (`hello@breno-bar.com`) keep the `breno-bar` form — those are infra/contact identifiers, not the display brand. `SITE.name`/`shortName` = "BAR Agency"; `SITE.legal.legalEntity` = "BAR Agency, Einzelunternehmer".

**Inherits:** repo-root `CLAUDE.md` and every rule in `docs/design/`. No matching per-vertical template — the agency itself is `professional-services` with an Apple-inspired premium register that's deliberately distinct from every other demo built on the same library.

## 2026-06-09 to 12 — rebrand + catalog/pricing/contract overhaul

- **Rebrand → BAR Agency** across header logo, footer, titles, schema, email templates, WhatsApp prefills (domain/email/Vercel URL unchanged). New **favicon** ("BAR" on blackish-blue `#0c1a2b`, SVG + ico + apple-touch) and new **OG card** (`/img/og-default.png` — BAR Agency + tagline on blackish-blue; replaced the scaffold placeholder).
- **Tagline** → "Websites that bring you customers." (was "Websites worth being proud of.").
- **4-offering catalog** (Web Design · SEO and Local Listing · E-Commerce and Business Email · AI Solutions/Booking) on the home + `/services` overview. Only Web Design + SEO ship a `/services/[slug]` detail page; `google-business` + `social-media` are retired as standalone pages (kept in the type for portfolio tagging).
- **Pricing** (`funnel.ts`): every plan is **bilingual DE+EN** with extra languages a **+€36/mo per-language** ⓘ-tooltip add-on, business email **+€12/mo per-mailbox** add-on; numeric content-update limits (10/20/40 per mo, no "unlimited"); e-commerce/booking/AI tiered in; WCAG (not ADA), GDPR framing. NO "account manager/same-day/team" (honest, solo-studio positioning). Tooltips: hover + tap/click, in `PricingTiers.astro`.
- **Contract `/contract` is now plan-driven and reads from `/pricing` as the single source of truth.** § 2 mirrors the selected plan's FUNNEL feature list verbatim (incl. its "Everything in X, plus:" line); the old `SERVICE_SCOPES` mechanism + 4-checkbox Services step were deleted. The **draft/lawyer red banner was removed** per owner request (the "not lawyer-reviewed" caveat is therefore no longer on-document — still true). Phone field added; dates auto-fill (signature = today, start = +5 days); go-live removed; sticky toolbar fixed to `top-0`. The monthly fee is the single price input (auto-filled from the plan); the one-time buy-out (18× the monthly fee) is a **derived note** under it, not a field, and recomputes live with the fee. Billing is **anniversary-based** (added 2026-06-12): the fee bills on the **start date** each month, not a fixed 1st — § 3/§ 4 use "billing month" anchored to the start date (clamped to the month's last day for the 29th–31st). § 3 also prints the agency **payment details** (bank transfer IBAN/BIC + PayPal, from `SITE.payment`); accepted methods are bank transfer or PayPal.
- **Portfolio**: Eiscafé Bellini (gastronomy/gelateria) replaced myPlanny.
- **`/tools`** added to the header nav (2nd, between Services and Pricing) + footer.
- **About** page reworked to a "Why choose us" hero + 4-reason grid (EN/DE/PT-BR).

## Stack

- **Tier 2** (Astro 6 + Tailwind v4 + Sentry). Type 2 product (info + contact form). The single SSR endpoint at `/api/contact` is the form-submission handler; everything else is static.
- **Adapter:** `@astrojs/vercel` with `output: 'static'` — Astro pre-renders all marketing pages and the Vercel adapter routes the lone SSR endpoint to Fluid Compute.
- **Email send:** Resend (EU servers). `RESEND_API_KEY` env-var gates send; without it the endpoint returns 503 and the form renders a friendly "Service temporarily unavailable" — see `src/pages/api/contact.ts`.
- **Display font:** Inter Variable (one family handles both display + body via the opsz axis, mimicking Apple's SF Pro Display/Text). Self-hosted via `@fontsource-variable/inter`.
- **Schema.org:** `ProfessionalService` + `Person` (founder) + `WebSite` 3-node @graph. `priceRange: '€€'`, `hasOfferCatalog` lists 4 Service entries. Per-portfolio `CreativeWork` schema on each detail page, locale-aware `inLanguage`.
- **Languages:** **3-locale build.** EN at root (default) · DE at `/de/` · pt-BR at `/pt-br/`. Locale switcher dropdown in Header. Browser-locale auto-detect on the EN home only (`navigator.language` → redirect to matching variant, once per session, sessionStorage `lc` flag).
- **Jurisdiction:** DE (DSGVO + § 5 TMG); founder is Berlin-based Einzelunternehmer.

## Common commands

```bash
cd clients/agency-breno-bar
pnpm install
pnpm dev                                                  # http://localhost:4321
pnpm validate                                             # lint + 32+125-key translation parity + build
pnpm build                                                # 104 static + 3 SSR (api/contact, api/site-scan, api/gbp-check)
PATH=$HOME/.nvm/versions/node/v21.7.3/bin:$PATH vercel --prod --yes
```

## Page tree (104 static + 3 SSR)

> Expanded 2026-06-04 by the inbound-funnel sprint — see the dedicated section at the end of this file + `docs/benchmark/_analysis.md`. The trilingual marketing core below is unchanged; the funnel routes (pricing · website-check · tools · the German `webdesign-berlin` local pages) are additive.

EN at root · DE at `/de/...` · pt-BR at `/pt-br/...`:

- `/` — Apple-style hero + stats strip (10 / 6 / 4) + 4-tile alternating-dark services + 3 featured portfolio + about teaser + dark-bg CTA
- `/services` — overview of 4 services (alternating dark/light tiles)
- `/services` overview — the 4-offering catalog (Web Design · SEO and Local Listing · E-Commerce and Business Email · AI Solutions/Booking). `/services/[slug]` detail pages exist only for **Web Design + SEO** (×2); `google-business`/`social-media` are retired as standalone pages (still in `ServiceSlug` for portfolio tagging).
- `/portfolio` — 9-entry grid (6 internal demos + diBoaS + bible-tt + Eiscafé Bellini)
- `/portfolio/[slug]` × 9 — case-study with hero screenshot + stack/vertical/services aside + 3 related
- `/about` — workshop ethos (4 sections)
- `/contact` — Resend-wired form + alternatives (email, LinkedIn, X)
- `/privacy` — DSGVO 9-section template + dedicated `Contact form` section explaining the Resend flow + 12-month inquiry retention
- `/imprint` — § 5 TMG template
- `/404`, `/500` — Apple-clean error pages
- `/api/contact` (SSR-only) — POST endpoint; honeypot + 5 s min-fill-time + IP-keyed rate limit + HTML-escape + Reply-To + auto-confirmation

## Configuration-as-Code

- `src/lib/site.ts` — trilingual `SITE.i18n` (32 keys × 3 locales) + brand identity + legal + processors list
- `src/lib/page-strings.ts` — `PAGE_STRINGS` per-page content (125 keys × 3 locales)
- `src/lib/portfolio.ts` — 9 entries × trilingual `imageAlt` + `shortDescription` + `longDescription`. `featured: true` on 3 entries (bonsai-kodama, restaurant-adele, yoga-atem-studio) — home grid surfaces those three.
- `src/lib/services.ts` — service-slug taxonomy + portfolio cross-references
- `src/lib/seo/schema.ts` — `businessSchema()` + `portfolioCaseSchema()` + (2026-06-04) `faqPageSchema()` + `localServiceSchema()`
- **(2026-06-04 inbound-funnel)** `src/lib/funnel.ts` — trilingual `FUNNEL` content (promises · reviews · trust badges · home FAQ · pricing · website-check) · `src/lib/tools.ts` — trilingual `TOOLS` content (scan + gbp + hub) · `src/lib/local-pages.ts` — **German-only** `VERTICALS` × `BEZIRKE` → `LOCAL_PAGES` · `src/lib/contact-channels.ts` — hidden WhatsApp/phone config (F8). All four use compile-time `Record<Locale,…>` parity (like `portfolio.ts`), so they stay OUT of the `validate-translations` runtime check.
- `src/styles/tokens.css` — Apple-inspired palette (#fbfbfd / #1d1d1f / #0071e3) + 22-px radii + Apple-restrained shadows
- `src/styles/global.css` — Inter-tuned typography + reveal-on-scroll (`animation-timeline: view()`) + bg-hero-gradient + bg-noise utilities

## Validation gates

- `scripts/validate-translations.mjs` — verifies key-set parity across 3 locales for both `SITE.i18n` and `PAGE_STRINGS`. Chained into `pnpm validate`. 32 i18n keys + 125 page-strings keys = 157 keys × 3 locales.
- `scripts/optimize-portfolio.mjs` — re-encodes thum.io thumbnails to 16:10 hero (1600×1000) WebP at q=78. Idempotent. 9 portfolio entries currently at 441 KB total (`PERFORMANCE.md §5` budget ≤ 250 KB each, ≤ 80 KB for cards-only).

## DRAFT items requiring owner sign-off before production traffic

Before flipping `noindex` to allow indexing:

| Field | Location | Status |
|---|---|---|
| Berlin Anmeldung address (street + Bezirk + PLZ) | `src/lib/site.ts` `address.*` | ✅ CONFIRMED 2026-06-09 — Strausberger Pl. 11, 10243 Berlin, Friedrichshain-Kreuzberg |
| USt-IdNr (Finanzamt nach Anmeldung) | `src/lib/site.ts` `legal.taxId` | ✅ RESOLVED 2026-06-09 — **Kleinunternehmer § 19 UStG** (no USt-IdNr; `legal.kleinunternehmer: true`; imprint VAT section auto-hidden, contract shows the Kleinunternehmer line) |
| Domain — real `breno-bar.com` with MX + Resend verification | Vercel Domains + Resend dashboard | DRAFT |
| Resend `RESEND_API_KEY` + `RESEND_FROM` env vars | Vercel project env vars | DRAFT (contact + gbp-check forms return 503 until set) |
| **(funnel) Subscription prices** | `src/lib/funnel.ts` `pricing.tiers[].price` | ✅ CONFIRMED 2026-06-06 — €219/€390/€570 per month, no setup |
| **(funnel) Lawyer to FINALIZE subscription legal docs** — the plan-driven `/contract` + `/de/contract` (`contract-strings.ts`, plain-language subscription clauses § 3 monthly + optional 18-month buy-out, § 4 cancel→offline, § 5 licence-not-transfer; § 2 reads the selected plan from `/pricing`) · plus AGB · Datenschutz · buy-out contract. NOTE: the on-document "DRAFT — not lawyer-reviewed" red banner was **removed 2026-06-09** per owner request, so the contract no longer self-warns — the legal text is still unreviewed. | German lawyer | 🔴 REQUIRED before charging — not finalized legal text |
| **(funnel) Public promise numbers** (preview/load/response time) | `src/lib/funnel.ts` `promises.items` | DRAFT — confirm we commit to these publicly |
| **(funnel) Real Google reviews** (replace example quotes) | `src/lib/funnel.ts` `reviews.items` | DRAFT — clearly labelled examples; never ship invented testimonials |
| **(funnel) Micro-product price + scheduling/payment** | `src/lib/funnel.ts` `websiteCheck.priceLine` | DRAFT — `priceLine` now **empty** (the "DRAFT, €120" placeholder was removed from the UI 2026-06-08; the `/website-check` price chip shows only the sub-line); no scheduling/payment tool wired |
| **(F8) Real WhatsApp Business number + `visible` flip** | `src/lib/contact-channels.ts` | DRAFT — placeholder number, `visible: false` |
| **(funnel) `PAGESPEED_API_KEY`** (optional, scan tool headroom) | Vercel project env vars | OPTIONAL — PSI works keyless at low quota |

**Contact channels (updated 2026-06-04):** `SITE.phone` stays `null` (schema emits no `telephone`). WhatsApp + click-to-call are now **wired but hidden** via `src/lib/contact-channels.ts` (`CONTACT_CHANNELS.visible: false`) + `src/components/ui/ContactBar.astro` (renders nothing while hidden, mounted on every page). DRAFT placeholder numbers; flip `visible: true` + set a real number to surface a sitewide WhatsApp/phone CTA. See F8 in the inbound-funnel section below.

## Imported components

The agency site uses no canonical components from `docs/design/components/_impl/` directly. All page sections are inline + bespoke to give the Apple register its distinct visual identity. The 4 universal scaffold primitives ARE used:

| Component | Source | Notes |
|---|---|---|
| `BaseLayout` | scaffold (extended) | Trilingual hreflang via `LOCALES` iteration; auto-emits BreadcrumbList + per-page schema. Skip-link + locale-detect script inlined here. |
| `Header` | scaffold (rewritten) | Locale switcher dropdown (EN/DE/PT, 3 entries — distinct from bonsai's 4-locale variant). Apple-clean "Start a project" pill CTA. |
| `Footer` | scaffold (rewritten) | 4-column layout. "Manage preferences" + Cookie reopen via `consent:reopen` event. |
| `CookieBanner` | scaffold (unchanged) | Locale-driven consent strings from `SITE.i18n[locale].consent`. |

The scaffold's `DemoBanner` was deliberately REMOVED from `BaseLayout.astro` for the agency build — the demo-disclosure pattern (`BEISPIEL — Demo-Website von sm-website-seo. ...`) doesn't apply to the agency's own marketing site.

**(2026-06-04) Bespoke reusable section components** added by the inbound-funnel sprint — all prop-driven, no hard-coded copy (content comes from `funnel.ts` / `tools.ts`):

| Component | Used by | Notes |
|---|---|---|
| `sections/PromiseStrip` | home | F5 measurable-commitment stat row |
| `sections/Faq` | home · pricing · local pages | F6 — native `<details>` accordion; page emits `faqPageSchema` via BaseLayout `extraSchema` (keep items in sync) |
| `sections/ReviewsWall` | home | F7 — DRAFT example quotes, `draftNote` always rendered; no `aggregateRating` |
| `sections/TrustBadgeRow` | home | F7 — factual capability claims, not invented awards |
| `sections/PricingTiers` | pricing | F2 — monthly-subscription cards (`price` + `priceSuffix` + `priceNote`, no setup); tier name is `h2` (avoids `h1→h3` skip) |
| `sections/SiteScanTool` | tools/website-scan | F3b — form + live results, posts to `/api/site-scan`; Safari `::-webkit-details-marker` handled |
| `sections/GbpCheckTool` | tools/gbp-check | F3a — self-check list (static value) + hardened lead form to `/api/gbp-check` |
| `ui/ContactBar` | every page | F8 — WhatsApp/phone, **renders nothing while `CONTACT_CHANNELS.visible === false`** |

## Per-client i18n conventions

- **Reference locale:** EN (root). Validation pivots on EN.
- **Registers:** EN "we"/"you" (international premium); DE `du` (informal — Apple.com/DE uses Sie but the SMB target reads as too formal); pt-BR `você`.
- **Hreflang:** every page emits 3 alternates + `x-default` → EN root.
- **URL prefix:** `LOCALE_PREFIX.en = ''` (root); `LOCALE_PREFIX.de = '/de'`; `LOCALE_PREFIX['pt-br'] = '/pt-br'`.

## Demo discipline

- `noindex` until DRAFT items resolve. Per root `CLAUDE.md` "Demo discipline" rule.
- `robots.txt` ships as `Disallow: /` (scaffold default). Flip at production cutover.
- Sentry `sendDefaultPii: false` enforced in `sentry.{client,server}.config.mjs`.

## Inbound-funnel sprint (2026-06-04)

Built from the `icreateyoursite.com` competitor benchmark — full rationale + roadmap at `docs/benchmark/_analysis.md`, backlog at `docs/audit/private/PENDING.md` ("2026-06-04 inbound-funnel backlog", items `F1`–`F9`). All additive; the trilingual marketing core is unchanged. Everything stays `noindex`; concrete commitments (prices, promise numbers, reviews, WhatsApp number) are **DRAFT** pending owner sign-off (see the DRAFT table above).

**New routes**

- **F2 — `/pricing`** (×3 locales) — **pure-monthly subscription ("Website-Abo")**: Start €219 · Growth €390 · Complete €570/mo, NO setup fee. The site is a managed subscription (client owns domain/content/data; build licensed while subscribed; optional one-time buy-out), stated **honestly** — deliberately NOT iCreate's "you own everything" ambiguity (UWG + §305c/§307 BGB risk in DE). "Most Chosen" anchor, rental terms, FAQPage schema, nav-linked. *(Pricing published 2026-06-04; pivoted to subscription + repriced 2026-06-06. AGB/Datenschutz/buy-out contract need a lawyer — see BRIEF.md.)*
- **F4 — `/website-check`** (×3) — paid 1:1 "Website & Google check" micro-product. CTA routes to `/contact`.
- **F3 — `/tools`, `/tools/website-scan`, `/tools/gbp-check`** (×3) — free lead-magnet tools. `website-scan` → `/api/site-scan` (Google PSI + security-header + tracker checks, graceful degradation without `PAGESPEED_API_KEY`). `gbp-check` → `/api/gbp-check` (guided self-check + hardened lead capture; no paid Places API; 503 without Resend).
- **F1 — `/webdesign-berlin` + `/webdesign-berlin/[slug]`** — **German-only** local-SEO landing pages: 4 verticals (gastronomie · friseur · praxis · handwerk) × 6 Bezirke (mitte · kreuzberg · neukoelln · prenzlauer-berg · friedrichshain · charlottenburg) = **24 pages** + hub. Genuinely differentiated per-axis copy (anti-slop), `Service`+`FAQPage` schema, breadcrumb, cross-links. NOT in the trilingual set (own data module, excluded from the parity validator); German chrome via `locale='de'`, no hreflang. Footer link shown only on DE.
- **F5/F6/F7** — home-page additions: PromiseStrip, ReviewsWall + TrustBadgeRow, FAQ (with FAQPage schema).
- **F8** — WhatsApp/phone wired but hidden (see Contact channels note above).
- **F9 (AI productized line)** — deferred per plan; not built.

**Two new SSR endpoints** (`prerender = false`, mirror `api/contact.ts` hardening — honeypot/rate-limit/validation/Sentry-no-PII/graceful 503): `api/site-scan.ts`, `api/gbp-check.ts`. Env: optional `PAGESPEED_API_KEY` documented in `.env.example`.

**Patterns worth backporting** (triage per root `CLAUDE.md` "audit whether it belongs in the scaffold"): the prop-driven `Faq` + `faqPageSchema` pairing and the hidden-channel `ContactBar`/`contact-channels.ts` flag pattern are generic enough to consider for the scaffold; the data-driven local-pages route group is a reusable local-SEO recipe.
