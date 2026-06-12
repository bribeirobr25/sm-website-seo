# SEO Production Cutover, Keyword Audit, Schema Enhancements

> **Status (updated 2026-06-09):** pending real domain (`breno-bar.com` or equivalent) + Resend production key + lawyer sign-off. ✅ **Resolved 2026-06-09:** Anmeldung address (Strausberger Pl. 11, 10243 Berlin, Friedrichshain-Kreuzberg), VAT status (**Kleinunternehmer § 19 UStG** — no USt-IdNr; imprint VAT line auto-hidden), and the branded OG image (§1.5). Brand display name is now **BAR Agency** (folder/URL/email keep `breno-bar`).
> **Date drafted:** 2026-05-30. **Last code change applied:** 2026-05-30 (per-page meta refinements + trilingual schema landed in production deploy at 11:21 local).
> **Single-source checklist** for the moment the site moves off the `vercel.app` subdomain. Plus per-locale keyword targets, plus proposed `schema.ts` enhancements for trilingual signal. Read top-to-bottom in order.

---

## §0. Status summary (what's done, what's waiting)

Status legend: `[DONE]` shipped and live · `[PENDING DOMAIN]` waiting for `breno-bar.com` connection · `[PENDING OWNER]` needs an owner action that the agent cannot do alone (Finanzamt, dashboard account, DNS).

| Section | Item | Status |
|---|---|---|
| §1.1 | Domain anchor (`SITE.url`, `astro.config.ts:site`) | `[PENDING DOMAIN]` |
| §1.2 | `noindex` default flip + `robots.txt` flip + `Sitemap:` line | `[PENDING DOMAIN]` |
| §1.3 | DRAFT items (street, PLZ, USt-IdNr) | `[DONE 2026-06-09]` — address confirmed (Strausberger Pl. 11, 10243 Berlin, Friedrichshain-Kreuzberg); **Kleinunternehmer § 19 UStG** (no USt-IdNr) |
| §1.4 | Real GA4 ID + Search Console verification + sitemap submission | `[PENDING DOMAIN]` |
| §1.5 | Branded OG image + 3-aspect schema photography | OG image `[DONE 2026-06-09]` (BAR Agency card); 3-aspect schema photography still `[PENDING OWNER]` |
| §1.6 | Resend domain verification + production API key | `[PENDING DOMAIN]` |
| §1.7 | Sentry production project DSN | `[PENDING OWNER]` (verify Vercel env) |
| §1.8 | GBP listing claim with production URL | `[PENDING DOMAIN]` |
| §1.9 | HSTS preload-list submission at `hstspreload.org` (one-way door) | `[PENDING DOMAIN]` |
| §2.1–§2.9 | Per-page meta refinements (titles + descriptions, 3 locales) | `[DONE]` (deployed 2026-05-30) |
| §2.11 | **Inbound-funnel pages** (pricing · website-check · tools · 24 German local pages) added 2026-06-04 — meta titles/descriptions written; keyword-audit treatment is a follow-up | `[FOLLOW-UP]` (see §2.11) |
| §1.x | **Funnel DRAFT items** (prices · promise numbers · reviews · WhatsApp number · website-check price+scheduling) | `[PENDING OWNER]` — `BRIEF.md` #7–#13 |
| §1.4 | Analytics should also track tool/funnel conversions (scan run, gbp lead, pricing→contact) | `[PENDING DOMAIN]` |
| §3.1 | `knowsAbout` 8 EN → 22 trilingual | `[DONE]` |
| §3.2 | `serviceType` 4 EN → 12 trilingual | `[DONE]` |
| §3.3 | `businessSchema(locale)` locale-aware description | `[DONE]` |
| §3.4 | `WebSite.inLanguage` trilingual | `[DONE]` (already correct) |
| §3.5 | `OfferCatalog` localization | `[DEFERRED]` (after first GSC impressions data) |
| Side-fix | Title brand-duplication bug (`X — breno-bar · breno-bar`) | `[DONE]` |

**Net result.** Every SEO change that does not depend on the real domain has shipped. The site now emits clean per-page titles and descriptions optimized for the per-locale target queries listed in §2, and the JSON-LD surfaces EN + DE + PT-BR keyword variants simultaneously. The `noindex` policy means none of this is visible to Google yet, but the entire payload is ready for the moment §1.1 + §1.2 are flipped.

---

## §1. Production-cutover gates (run in order)

Each step assumes the previous one is done. Do not skip ahead. The site is currently 100 % invisible to Google by deliberate policy (demo phase, `noindex`), so this section is the only path from invisible to indexed.

### 1.1. Anchor the URL on the real domain `[PENDING DOMAIN]`

| Action | File / location | Detail |
|---|---|---|
| Connect domain in Vercel | Vercel dashboard, project `agency-breno-bar` | Add `breno-bar.com` + `www.breno-bar.com`. Set the apex as primary, `www` as redirect. |
| Update site canonical | `src/lib/site.ts`, line 35 | `url: 'https://breno-bar.com'` (no trailing slash) |
| Update Astro config | `astro.config.ts`, line 8 | `site: 'https://breno-bar.com'` |
| Rebuild + redeploy | shell | `pnpm build` then `vercel --prod --prebuilt` |
| Verify | view-source on `https://breno-bar.com/` | Every `<link rel="canonical">`, `<link rel="alternate" hreflang="...">`, `<meta property="og:url">`, and JSON-LD `@id` / `url` field is anchored to the new domain. |

**Why this is step 1:** Canonical, hreflang, OG, sitemap, and all three JSON-LD nodes (`ProfessionalService`, `Person`, `WebSite`) derive from `SITE.url`. Fix the anchor first, every downstream signal re-anchors automatically. Then flip the indexing switches.

### 1.2. Flip the three indexing switches together `[PENDING DOMAIN]`

| Switch | File | From | To |
|---|---|---|---|
| BaseLayout default | `src/layouts/BaseLayout.astro`, line 49 | `noindex = true` | `noindex = false` |
| robots.txt directive | `public/robots.txt` | `Disallow: /` | `Allow: /` |
| robots.txt sitemap pointer | `public/robots.txt`, new line | (none) | `Sitemap: https://breno-bar.com/sitemap-index.xml` |

Keep the surgical Disallow lines (these stay forever):
```
Disallow: /_demo/
Disallow: /contract
Disallow: /de/contract
```

Keep `noindex={true}` explicit on `src/pages/contract.astro` and `src/pages/de/contract.astro` (internal print form).

**Verify:**
1. `curl https://breno-bar.com/robots.txt` returns the new file.
2. View-source on home: no `<meta name="robots" content="noindex, nofollow">` present.
3. Google Search Console > URL Inspection on `https://breno-bar.com/` returns "URL is on Google" (after submission). Allow 2 to 7 days for first crawl.

### 1.3. Resolve the 3 DRAFT items so JSON-LD validates `[PENDING OWNER]`

Currently the JSON-LD emits literal placeholder text to Google.

| DRAFT item | File / line | Owner action |
|---|---|---|
| `address.street` | `src/lib/site.ts`, line 51 | Berlin Anmeldung address (Gewerbeanmeldung confirmation). |
| `address.neighborhood` | line 52 | Bezirk (e.g. "Mitte", "Prenzlauer Berg"). |
| `address.postalCode` | line 55 | Postleitzahl. |
| `legal.taxId` | line 73 | USt-IdNr (Umsatzsteuer-Identifikationsnummer, requested via ELSTER after Anmeldung). Fallback: Steuernummer if you opt out of USt. |

**Verify:** paste the production URL into [Google Rich Results Test](https://search.google.com/test/rich-results). Expect `ProfessionalService` to validate with 0 errors, 0 warnings. Currently it would flag `"streetAddress": "TODO: Berlin Anmeldung address"`.

### 1.4. Real analytics + Search Console `[PENDING DOMAIN]`

| Action | File / location | Detail |
|---|---|---|
| Create GA4 property | analytics.google.com | One property for `breno-bar.com`. Save the `G-XXXXXXX` measurement ID. |
| Replace GA4 placeholder | `src/layouts/BaseLayout.astro`, lines 162 and 170 | Replace both `G-XXXXXX` occurrences with the real ID. |
| Create GSC property | search.google.com/search-console | Add as **Domain property** (`breno-bar.com`, DNS verification). The Domain variant covers `http`, `https`, all subdomains, all paths. URL-prefix is a fallback if DNS verification fails. |
| Submit sitemap | GSC > Sitemaps | Add `https://breno-bar.com/sitemap-index.xml`. Expect "Success" within minutes. |
| URL-inspect each top page | GSC > URL Inspection | Run on `/`, `/de`, `/pt-br`, `/services`, `/de/services`, `/pt-br/services`, the 4 service detail pages per locale (12 total), `/portfolio` (3), `/about` (3). Request indexing on each. ~30 URLs total, 30 minutes of work. |
| Bing Webmaster Tools | bing.com/webmasters | Import from GSC (one click), submit sitemap. Bing is ~3 % of EU search but still worth claiming. |

### 1.5. OG image + 3-aspect schema photography `[PENDING OWNER]`

Currently `public/img/og-default.png` is a placeholder, and `schema.ts` lines 41-45 point all three image-array entries to the same placeholder.

| Asset | Spec | Use |
|---|---|---|
| `og-default.png` | 1200 x 630, < 200 KB, JPEG fallback acceptable | Twitter/Facebook/LinkedIn share preview. Should carry brand mark + tagline + a Berlin-anchored visual cue. |
| `og-landscape.jpg` | 1200 x 630 | Schema image[0] (landscape aspect, also serves the share preview). |
| `og-portrait.jpg` | 1200 x 1500 (4:5) | Schema image[1] (portrait aspect). Per `SEO.md` §5 "3-aspect rule" so Google can pick the right crop for different surfaces. |
| `og-square.jpg` | 1200 x 1200 | Schema image[2] (square aspect, used in mobile knowledge panels and local-pack cards). |

Edit `src/lib/seo/schema.ts` lines 41-45 to point to the three distinct files. Verify via [opengraph.xyz](https://www.opengraph.xyz/) and [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator).

### 1.6. Email infrastructure `[PENDING DOMAIN]`

| Action | Where | Detail |
|---|---|---|
| DNS for `hello@breno-bar.com` | domain registrar | Either MX records pointing to your mailbox provider, or a forwarding rule (Cloudflare Email Routing is the simplest free option) that lands `hello@` in `breno.ribeirobr@gmail.com`. |
| Resend domain verification | resend.com/domains | Add `breno-bar.com`. Resend gives 3 DNS records (DKIM, SPF, return-path). Add them at the registrar, click "Verify" in Resend. Required before any contact-form email will leave the building. |
| Production API key | Vercel env vars | `RESEND_API_KEY = re_...prod...` (production-scoped, separate from any dev key). Set on `Production` environment only. |
| End-to-end smoke test | `https://breno-bar.com/contact` | Submit the form, confirm receipt at `breno.ribeirobr@gmail.com`, confirm Resend dashboard shows "delivered" not "bounced". |

### 1.7. Sentry production project `[PENDING OWNER]`

| Action | Where | Detail |
|---|---|---|
| Confirm production DSN | Vercel env vars | `SENTRY_DSN` should match the production project, not a dev project. Verify via Sentry dashboard > Project Settings > Client Keys (DSN). |
| Smoke-test error capture | manually trigger | Visit a known-bad URL or temporarily throw in a SSR endpoint, confirm event lands in Sentry within 2 minutes. |
| `send_default_pii: false` | already set | Per agency rule, never flip this on. Confirm via Sentry init in `astro.config.ts`. |

### 1.8. GBP (Google Business Profile) listing `[PENDING DOMAIN]`

GBP is its own pre-launch deliverable, but the production URL is the value GBP needs. Run this after §1.1 to §1.4 are done.

| Action | Where | Detail |
|---|---|---|
| Claim / create the listing | business.google.com | Category: **Web designer** (most specific). Secondary categories: **Marketing agency**, **Internet marketing service**. |
| Set Website URL | GBP > Edit profile > Website | `https://breno-bar.com/` (root). |
| Set Service area | GBP | Berlin + 50 km radius (covers all Berlin Bezirke + immediate Brandenburg). |
| Add 3 verticals to "Services" | GBP > Services | "Website design", "Search engine optimization", "Google Business Profile setup". |
| Hours | GBP | "By appointment" (matches `SITE.hours.appointment`). |
| Photos | GBP | Minimum 5 photos: 1 logo, 1 cover (1200 x 627), 3 supporting (studio, neighborhood, work-in-progress). Same photography as the schema 3-aspect set. |

### 1.9. HSTS preload-list submission `[PENDING DOMAIN]`

The agency's `vercel.json` already emits the preload-eligible HSTS header (`Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`). Submitting `breno-bar.com` to the shared browser preload list hard-pins it to HTTPS in every Chrome / Firefox / Safari shipped after the next release, closing the first-visit SSL-stripping window that HSTS alone cannot.

| Action | Where | Detail |
|---|---|---|
| Verify the header is live on the new domain | shell | `curl -sI https://breno-bar.com/ \| grep -i strict-transport-security` — confirm the response carries `max-age=63072000; includeSubDomains; preload`. |
| Verify apex + www both serve HTTPS only | shell | `curl -sI http://breno-bar.com/` and `curl -sI http://www.breno-bar.com/` must both 301/308-redirect to `https://`. Vercel's apex + www config does this automatically; sanity-check before submitting. |
| Submit to the preload list | https://hstspreload.org/ | Enter `breno-bar.com`. The form validates the 4 prerequisites: valid cert, redirect HTTP → HTTPS on apex, `max-age` ≥ 31536000, both `includeSubDomains` + `preload` directives present. Vercel meets all four. Submit. |
| Track inclusion | the same form | The form's status page shows `pending`, then `preloaded` once it rolls into the next Chrome stable release. Typical timeline: 6 to 12 weeks. |

**One-way door — read before submitting.** HSTS preload is effectively irreversible. Removal requires a formal request and takes 6 to 12 months minimum to propagate. Submitting commits the agency to HTTPS-only on `breno-bar.com` and every subdomain forever. Vercel makes this trivial (free certs, auto-renewal), so it's the right move for a marketing site that owns its DNS, but never preload a domain you might want to point at a non-HTTPS legacy system later.

**Why bother:** without preload, a user typing `breno-bar.com` (no protocol) into a fresh browser session that has never visited the site gets one HTTP request before the HSTS header pins them to HTTPS. An active network attacker on that hop (cafe wifi, hostile ISP) can intercept and downgrade. Preload closes this on a per-browser basis the moment the user updates their browser.

**Do not run §1.9 until §1.1 and §1.2 are clean.** Submitting before the domain serves the correct header is a wasted submission.

---

## §2. Per-page keyword audit (what each page should rank for)

> **Status:** all §2.1 through §2.9 meta refinements `[DONE]` and deployed 2026-05-30 (production deploy at 11:21 local time). The "proposed refinements" blocks below are now the **live** meta. Kept here as the source-of-truth audit record. Diff: `git log -1 src/lib/page-strings.ts` after the change set.

For each page: **primary intent**, **per-locale target queries** (highest-priority first, ranked by buying intent x reachability for a small studio), **current meta**, **proposed meta refinements**.

### 2.1. Home page (`/`, `/de`, `/pt-br`)

**Primary intent.** Brand discovery, broad agency search, "what does this studio do".

**Target queries.**

| Locale | Query (priority order) | Volume | Competition |
|---|---|---|---|
| EN | "english speaking web designer berlin" | low | low (good niche) |
| EN | "berlin web agency small business" | low | medium |
| EN | "multilingual website berlin" | low | low |
| EN | "expat web designer berlin" | low | low |
| DE | "webdesign berlin kleinunternehmen" | medium | high |
| DE | "webdesigner berlin selbstständig" | low | medium |
| DE | "webagentur berlin kleine unternehmen" | low | medium |
| DE | "mehrsprachige webseite berlin" | low | low (good niche) |
| DE | "webseite erstellen lassen berlin" | medium | high |
| PT-BR | "web designer brasileiro berlim" | very low | very low (own the niche) |
| PT-BR | "agência de marketing digital berlim" | very low | low |
| PT-BR | "criar site em berlim" | very low | low |

**Meta (2026-05-30 snapshot — superseded.** Rebranded to **BAR Agency** + tagline "Websites that bring you customers." + 4-offering catalog on 2026-06-09; `src/lib/page-strings.ts` is the live source of truth.)
```
EN  title: 'breno-bar — Websites worth being proud of.'
EN  desc:  'A small Berlin studio building websites for owner-led businesses. Website, SEO, Google Business Profile. Trilingual delivery.'

DE  title: 'breno-bar — Webseiten, auf die man stolz sein kann.'
DE  desc:  'Ein kleines Berliner Studio, das Webseiten für inhabergeführte Unternehmen baut. Website, SEO, Google Business Profile. Trilingual.'

PT  title: 'breno-bar — Sites dos quais a gente se orgulha.'
PT  desc:  'Um pequeno estúdio berlinense que constrói sites para negócios liderados pelo dono. Site, SEO, Google Business Profile. Trilíngue.'
```

**Audit.** Voice-strong, keyword-light. Titles are brand-led, which is correct (CTR > literal keyword stuffing in the title), but descriptions are missing direct anchors for the highest-priority queries.

**Proposed refinements** (keep voice, add keyword anchors in the meta description only; do not touch the on-page H1):

```
EN  desc: 'A small Berlin web agency for owner-led businesses. Multilingual website design, local SEO, Google Business Profile. English, German, Portuguese.'

DE  desc: 'Webdesign und lokales SEO aus Berlin für kleine, inhabergeführte Unternehmen. Mehrsprachige Webseiten, Google Unternehmensprofil, DSGVO-konform.'

PT  desc: 'Web designer brasileiro em Berlim, para pequenos negócios. Sites multilíngues, SEO local, Google Business Profile. Em português, alemão e inglês.'
```

The DE version adds **"Webdesign"**, **"lokales SEO"**, **"Google Unternehmensprofil"**, **"DSGVO-konform"**, all high-intent DE keywords. The PT-BR version surfaces **"web designer brasileiro em Berlim"**, the precise long-tail this site can plausibly own.

### 2.2. Services index (`/services`, `/de/services`, `/pt-br/services`)

**Primary intent.** Comparison-shopping the service catalog. User typed "what does this agency offer".

**Target queries.**

| Locale | Query |
|---|---|
| EN | "berlin web agency services", "website design and seo packages berlin" |
| DE | "webagentur leistungen berlin", "webdesign und seo paket berlin", "webdesign google profil paket" |
| PT-BR | "serviços web design berlim", "pacote site e seo berlim" |

**Current meta.**
```
EN  title: 'Services — breno-bar'
EN  desc:  'Three core services for owner-led businesses: website creation, search-engine optimization, Google Business Profile setup. Plus optional social-media management.'

DE  title: 'Leistungen — breno-bar'
DE  desc:  'Drei Kernleistungen für inhabergeführte Unternehmen: Website-Erstellung, Suchmaschinen-Optimierung, Google Business Profile. Plus optionale Social-Media-Pflege.'

PT  title: 'Serviços — breno-bar'
PT  desc:  'Três serviços principais para negócios liderados pelo dono: criação de site, SEO, Google Business Profile. Mais gestão opcional de redes sociais.'
```

**Audit.** Titles are too generic. "Services — breno-bar" wins zero queries. Should signal both the service area (Berlin) and the audience (small business / inhabergeführt / pequeno negócio).

**Proposed refinements.**

```
EN  title: 'Web design, SEO and Google Business Profile services in Berlin — breno-bar'
EN  desc:  'Web design, local SEO, and Google Business Profile setup for small Berlin businesses. Sold one at a time. No upsell, no retainer pressure.'

DE  title: 'Webdesign, SEO und Google Unternehmensprofil aus Berlin — breno-bar'
DE  desc:  'Webdesign, lokales SEO und Google Unternehmensprofil für kleine Berliner Geschäfte. Einzeln verkauft. Kein Upsell, kein Druck auf einen Vertrag.'

PT  title: 'Site, SEO local e Google Business Profile em Berlim — breno-bar'
PT  desc:  'Criação de site, SEO local e perfil Google Empresa para pequenos negócios em Berlim. Vendidos um de cada vez. Sem upsell.'
```

### 2.3. `/services/website` (Tier 1 service detail)

**Primary intent.** Ready to buy a small-business website.

**Target queries.**

| Locale | Query |
|---|---|
| EN | "small business website berlin", "restaurant website designer berlin", "multilingual website berlin" |
| DE | "webseite kleinunternehmen berlin", "restaurant webseite berlin", "café webseite berlin", "friseur webseite berlin", "mehrsprachige webseite berlin" |
| PT-BR | "site para restaurante em berlim", "site bilíngue berlim" |

**Current meta.**
- Title is computed in `services/[slug].astro` as `${s.name} — breno-bar`. So EN renders `'Website — breno-bar'`, DE renders `'Website — breno-bar'`, PT-BR renders `'Site — breno-bar'`.
- Description is `s.shortTagline`, e.g. EN `'The first room your next customer will walk into.'`

**Audit.** "Website — breno-bar" as a `<title>` is the weakest signal on the site. Wins nothing. The `shortTagline` is voice-poetic and unique to your brand, but Google has no idea this is a Berlin web-design service page from the title.

**Proposed fix** (per `services/[slug].astro` line 19 and `[locale]/services/[slug].astro` line 36, change the title formula):

```astro
// Instead of:
title={`${s.name} — breno-bar`}

// Use a per-service SEO title pulled from page-strings, e.g.:
title={s.seoTitle}        // new field in PAGE_STRINGS

// And description from a new field:
description={s.seoDescription}
```

Then add per-locale `seoTitle` + `seoDescription` to each service in `page-strings.ts`:

```
website.en  seoTitle: 'Small business website design in Berlin — breno-bar'
website.en  seoDescription: 'Multilingual websites for Berlin restaurants, cafés, salons, and trades. Fast on the worst U-Bahn signal. Live in 3 to 6 weeks. DSGVO + Impressum included.'

website.de  seoTitle: 'Webseite für kleine Unternehmen in Berlin — breno-bar'
website.de  seoDescription: 'Mehrsprachige Webseiten für Berliner Cafés, Restaurants, Salons und Handwerk. Schnell auch im schwächsten U-Bahn-Signal. In drei bis sechs Wochen online. DSGVO und Impressum inklusive.'

website.pt  seoTitle: 'Site para pequenos negócios em Berlim — breno-bar'
website.pt  seoDescription: 'Sites multilíngues para restaurantes, cafés, salões e oficinas em Berlim. Rápidos até no pior sinal de U-Bahn. No ar em 3 a 6 semanas.'
```

### 2.4. `/services/seo`

**Target queries.**

| Locale | Query |
|---|---|
| EN | "local seo berlin small business", "english speaking seo berlin" |
| DE | "lokales seo berlin", "suchmaschinenoptimierung berlin", "seo für kleine unternehmen berlin", "seo bäckerei berlin" |
| PT-BR | "seo local berlim", "seo para pequenos negócios berlim" |

**Proposed `seoTitle` + `seoDescription`.**

```
seo.en  seoTitle: 'Local SEO for small Berlin businesses — breno-bar'
seo.en  seoDescription: 'Quiet, patient local SEO over 90 days. Schema, on-page, Search Console. For the bakery, the salon, the dentist, the plumber. One monthly note. No 12-tab dashboards.'

seo.de  seoTitle: 'Lokales SEO für kleine Berliner Unternehmen — breno-bar'
seo.de  seoDescription: 'Geduldiges, lokales SEO über 90 Tage. Schema, On-Page, Google Search Console. Für die Bäckerei, den Salon, die Praxis, den Handwerker. Eine Notiz im Monat. Keine zwölf Dashboard-Tabs.'

seo.pt  seoTitle: 'SEO local para pequenos negócios em Berlim — breno-bar'
seo.pt  seoDescription: 'SEO local paciente, ao longo de 90 dias. Schema, on-page, Google Search Console. Uma nota por mês, sem dashboards intermináveis.'
```

### 2.5. `/services/google-business`

**Target queries.**

| Locale | Query |
|---|---|
| EN | "google business profile setup berlin", "google my business help berlin" |
| DE | "google unternehmensprofil einrichten berlin", "google my business berlin", "google profil bäckerei berlin" |
| PT-BR | "perfil google empresa berlim", "google meu negócio berlim" |

**Proposed `seoTitle` + `seoDescription`.**

```
gbp.en  seoTitle: 'Google Business Profile setup and management in Berlin — breno-bar'
gbp.en  seoDescription: 'Verified ownership, geo-tagged photos, monthly posts, reviews answered within 48 hours. The listing that does the local-search heavy lifting.'

gbp.de  seoTitle: 'Google Unternehmensprofil einrichten und pflegen, Berlin — breno-bar'
gbp.de  seoDescription: 'Verifizierte Inhaberschaft, geo-getaggte Fotos, monatliche Beiträge, Rezensionen innerhalb von 48 Stunden beantwortet. Das Profil, das die lokale Sichtbarkeit übernimmt.'

gbp.pt  seoTitle: 'Configuração e gestão do perfil Google Empresa em Berlim — breno-bar'
gbp.pt  seoDescription: 'Posse verificada, fotos geolocalizadas, posts mensais, avaliações respondidas em até 48 horas. O perfil que faz o trabalho pesado da busca local.'
```

### 2.6. `/services/social-media`

**Target queries.**

| Locale | Query |
|---|---|
| EN | "instagram management small business berlin" |
| DE | "instagram betreuung berlin kleinunternehmen", "social media betreuung berlin", "instagram für gastronomie berlin" |
| PT-BR | "gestão de instagram berlim", "instagram para pequenos negócios berlim" |

**Proposed `seoTitle` + `seoDescription`.**

```
social.en  seoTitle: 'Instagram management for small Berlin businesses — breno-bar'
social.en  seoDescription: 'Two posts a week, in your voice, drawn from your week. DMs answered on weekdays. No viral promises, no bought followers. Optional, not a retainer trap.'

social.de  seoTitle: 'Instagram-Betreuung für kleine Berliner Geschäfte — breno-bar'
social.de  seoDescription: 'Zwei Posts pro Woche, in deiner Stimme, aus deiner Woche heraus. DMs werktags beantwortet. Keine viralen Versprechen, keine gekauften Follower.'

social.pt  seoTitle: 'Gestão de Instagram para pequenos negócios em Berlim — breno-bar'
social.pt  seoDescription: 'Dois posts por semana, na sua voz, tirados da sua semana. DMs respondidas em dias úteis. Sem promessas de viralizar, sem seguidores comprados.'
```

### 2.7. `/portfolio` index

**Target queries.**

| Locale | Query |
|---|---|
| EN | "berlin web agency portfolio", "web designer berlin examples" |
| DE | "webagentur berlin referenzen", "webdesign berlin beispiele" |
| PT-BR | "portfólio web designer berlim" |

**Proposed `seoTitle` + `seoDescription`.**

```
portfolio.en  title: 'Selected work: Berlin web agency portfolio — breno-bar'
portfolio.en  description: 'Nine projects across restaurants, cafés, salons, studios, education, and legal. Multilingual, fast, DSGVO-ready. The work, in one place.'

portfolio.de  title: 'Ausgewählte Arbeiten, Berliner Webagentur — breno-bar'
portfolio.de  description: 'Neun Projekte aus Gastronomie, Beauty, Studio, Bildung und Recht. Mehrsprachig, schnell, DSGVO-konform. Die Arbeit, an einem Ort.'

portfolio.pt  title: 'Trabalhos selecionados: portfólio de web design em Berlim — breno-bar'
portfolio.pt  description: 'Nove projetos, de restaurantes a salões, estúdios, educação e direito. Multilíngues, rápidos, em conformidade com DSGVO.'
```

### 2.8. `/portfolio/[slug]` detail pages

These already emit `portfolioCaseSchema` (CreativeWork) per page. The titles + descriptions are pulled from `entry.shortDescription[locale]` and templated as `${entry.name} — ${p.detailTitleSuffix}`.

**Recommendation:** keep the current pattern. Per-case descriptions are unique strings already, which is the largest signal Google needs for distinct pages. The only addition: ensure each `entry.shortDescription[locale]` mentions the **vertical** ("restaurant", "café", "barbershop", "yoga studio", etc.) and the **city** at least once. Current copy mostly already does this. Quick audit before launch.

### 2.9. `/about`

**Primary intent.** Trust signals. Who runs this. E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).

**Target queries.**

| Locale | Query |
|---|---|
| EN | "breno ribeiro web designer", "breno-bar studio berlin" |
| DE | "breno ribeiro webdesigner berlin", "breno-bar studio" |
| PT-BR | "breno ribeiro web designer berlim", "estúdio brasileiro berlim" |

**Audit.** Current title `'About — breno-bar'` (EN), `'Studio — breno-bar'` (DE), `'Estúdio — breno-bar'` (PT). Good for brand search ("breno-bar about"), too generic for founder search. Add the founder name to the title to win that long-tail.

**Proposed.**

```
about.en  title: 'About the studio: Breno Ribeiro, web designer in Berlin — breno-bar'
about.de  title: 'Über das Studio: Breno Ribeiro, Webdesigner in Berlin — breno-bar'
about.pt  title: 'Sobre o estúdio: Breno Ribeiro, web designer em Berlim — breno-bar'
```

Descriptions stay as-is, the current copy is good.

### 2.10. `/contact`, `/privacy`, `/imprint`

No SEO action. Contact is a conversion page (not a query target), legal pages are utility (also not query targets). Current setup is correct.

---

### 2.11. Inbound-funnel pages (added 2026-06-04) `[FOLLOW-UP]`

The 2026-06-04 inbound-funnel sprint (full rationale: `docs/benchmark/_analysis.md`) added pages that already ship meta titles/descriptions + schema but have **not** had the per-page keyword audit §2.1–§2.10 received. They become indexable automatically at the §1.2 global `noindex` flip. Follow-up before/shortly after cutover:

- **`/pricing` (×3)** — target "Webdesign Preise Berlin", "website cost Berlin", "Webagentur Kosten". FAQPage schema already emitted.
- **`/website-check` (×3)** — target "Website Check", "Google Business Check", "Website Beratung Berlin".
- **`/tools`, `/tools/website-scan`, `/tools/gbp-check` (×3)** — lead-magnet/utility intent ("Website Speed Test", "DSGVO Check", "Google Unternehmensprofil prüfen"). Consider whether tools should be `index` or `noindex` (thin-utility risk) — decide at cutover.
- **`/webdesign-berlin` + 24 `/webdesign-berlin/[slug]` (German only)** — the **core local-SEO play**: target "[Vertical]-Website [Bezirk]" (e.g. "Friseur Website Kreuzberg", "Restaurant Website Mitte"). `Service` + `FAQPage` schema + `BreadcrumbList` already emitted; genuinely differentiated copy (anti-slop). **Highest-priority keyword surface** — these are the pages built to rank locally. Verify no thin-content/duplicate flags post-index.
- **Two new SSR endpoints** (`api/site-scan`, `api/gbp-check`) — confirm function timeouts/limits on the production Vercel plan (PSI can be slow; see `_analysis.md` deployment note) and that `RESEND_*` (gbp lead) + optional `PAGESPEED_API_KEY` are set.
- **Funnel DRAFT values** (prices, promise numbers, reviews, WhatsApp number) must be owner-confirmed before indexing — `BRIEF.md` open questions #7–#13.

---

## §3. Schema enhancements (`src/lib/seo/schema.ts`)

> **Status:** §3.1, §3.2, §3.3 `[DONE]` and deployed 2026-05-30. §3.4 was already correct. §3.5 `[DEFERRED]` per the note in that subsection.

### 3.1. `knowsAbout` expansion (8 EN terms, to ~22 trilingual) `[DONE]`

Currently emits an 8-term English-only array. A Berlin-market trilingual site should surface German + Portuguese keyword variants in `knowsAbout` so Google's entity extraction picks up signals across all 3 markets, not just English.

**Current (8 terms, English):**
```ts
knowsAbout: [
  'Web design',
  'Web development',
  'Local SEO',
  'Schema.org markup',
  'Google Search Console',
  'Google Business Profile',
  'Multilingual websites',
  'DSGVO compliance',
],
```

**Proposed (22 terms, trilingual):**
```ts
knowsAbout: [
  // English (current set, kept)
  'Web design',
  'Web development',
  'Local SEO',
  'Schema.org markup',
  'Google Search Console',
  'Google Business Profile',
  'Multilingual websites',
  'GDPR compliance',                    // was 'DSGVO compliance' → 'GDPR' is the EN term

  // German (high-value Berlin-market queries)
  'Webdesign',
  'Webentwicklung',
  'Lokales SEO',
  'Suchmaschinenoptimierung',
  'Google Unternehmensprofil',
  'Mehrsprachige Webseiten',
  'DSGVO-Konformität',
  'Datenschutzkonformität',

  // Portuguese-BR (Brazilian-community-in-Berlin niche)
  'Design de sites',
  'Desenvolvimento web',
  'SEO local',
  'Perfil da Empresa no Google',
  'Sites multilíngues',
  'Conformidade com LGPD',
],
```

**Why the LGPD term:** German `DSGVO-Konformität` covers the legal reality of the agency's market, but PT-BR clients (Brazilian-community businesses, or future Brazilian clients) recognize **LGPD** (Lei Geral de Proteção de Dados) as the equivalent. Surfacing it widens entity association without misrepresenting compliance scope.

**Apply:** edit `src/lib/seo/schema.ts` line 86-95.

### 3.2. `serviceType` localization `[DONE]`

Same logic for `serviceType` (the 4 high-level service buckets, currently English-only). Schema-validators accept arrays of strings, so trilingual variants are fine.

**Current:**
```ts
serviceType: [
  'Website design',
  'Search engine optimization',
  'Google Business Profile',
  'Social media management',
],
```

**Proposed:**
```ts
serviceType: [
  // English
  'Website design',
  'Search engine optimization',
  'Google Business Profile',
  'Social media management',

  // German
  'Webdesign',
  'Suchmaschinenoptimierung',
  'Google Unternehmensprofil',
  'Social-Media-Betreuung',

  // Portuguese-BR
  'Design de sites',
  'SEO local',
  'Perfil da Empresa no Google',
  'Gestão de redes sociais',
],
```

**Apply:** edit `src/lib/seo/schema.ts` line 80-85.

### 3.3. `description` locale awareness `[DONE]`

Currently `businessSchema()` emits `description: SITE.tagline` (English only). The schema spec allows only one `description` string per node (no `@language` tag at the field level without `@graph` complexity), and the JSON-LD is emitted once per page request anyway, so this is best-handled by making the schema function accept a `locale` argument and passing the locale-correct tagline from the page-strings.

**Recommended signature change:**
```ts
export function businessSchema(locale: Locale = 'en'): Record<string, unknown> {
  // ...
  description: SITE.i18n[locale].tagline,
  // ...
}
```

Then `BaseLayout.astro` calls `businessSchema(locale)` instead of `businessSchema()`. This makes the JSON-LD describe the business in the same language as the rendered page, which is a small but real ranking signal for non-English markets.

**Apply:**
1. `src/lib/seo/schema.ts` line 17: accept `locale` param.
2. `src/lib/seo/schema.ts` line 58 area: use `SITE.i18n[locale].tagline`.
3. `src/layouts/BaseLayout.astro` line 58: `const schema = JSON.stringify(businessSchema(locale));`.

### 3.4. `inLanguage` per WebSite node

Already correct, no change. `LOCALES.map((l) => LOCALE_LANG[l])` emits `['en-US', 'de-DE', 'pt-BR']` per `schema.ts` line 146.

### 3.5. New: `OfferCatalog` localization (low priority, after §3.1 to §3.3)

The 4 `Offer.itemOffered.Service` nodes (`schema.ts` lines 96-137) all have English names and descriptions. Same locale-aware pattern can apply: pass `locale` to `businessSchema()`, render the catalog in the page-locale. Defer until after the core trilingual `knowsAbout` is live, then measure GSC impressions for German queries to see if catalog localization moves the needle.

---

## §4. Post-launch SEO actions (week 1, week 2 to 4, month 2 to 3)

### 4.1. Week 1 (cutover week)

- [ ] All §1 gates done, verified
- [ ] GSC + Bing sitemap submitted, ~30 URLs individually URL-inspected
- [ ] Citations claimed: GBP, Apple Business Connect, Bing Places, Yelp.de, Facebook Page, Instagram (already exists, just confirm `breno-bar.com` link in bio per `CITATIONS.md` §2). Skip Sellwerk / 11880 telesales (agency rule).
- [ ] berlin.de "Wirtschaftsförderung" directory listing requested (the DE-general highest-authority citation per `CITATIONS.md` §3).
- [ ] Resend "domain verified" check, end-to-end form test
- [ ] Sentry first-error smoke test

### 4.2. Week 2 to 4

- [ ] GSC: first impressions data arrives ~3 to 7 days after first crawl. Note which queries already drive impressions, which are at position 50+ (low-hanging fruit for content tweaks)
- [ ] Apply §2 per-page meta refinements if not done as part of §1. Re-deploy, re-request indexing
- [ ] Apply §3.1 + §3.2 schema enhancements (`knowsAbout` and `serviceType` trilingual). Re-deploy, re-run Rich Results Test
- [ ] Apply §3.3 (locale-aware schema description). Re-deploy
- [ ] First GBP post (Google rewards posting cadence, even weak posts initially)
- [ ] Confirm OG image renders correctly across WhatsApp, LinkedIn, Twitter/X, Facebook share-card validators

### 4.3. Month 2 to 3

- [ ] Review GSC "Search results" report for the 12 high-value queries listed in §2. Note position trends, CTR, impressions per query
- [ ] If any high-value query is stuck at position 20 to 30 (page 2 to 3), write a deeper section on that topic on the relevant page. Position 20 to 5 is the common SEO sweet-spot (content depth, not keyword stuffing, moves it)
- [ ] First retainer-style monthly note (per `KPI.md` §Retainer report) covering: top queries, top pages, organic clicks, contact-form submission rate
- [ ] Begin building "topic cluster" content: 1 blog post per service every 6 to 8 weeks, anchored to the long-tail query that has best CTR potential. Example: "DSGVO-konforme Webseite für Berliner Cafés: was wirklich rein muss" (long-tail, low competition, high intent)

---

## §5. What this doc does not cover

- **Per-vertical landing pages.** If down the line you want a `/restaurants` or `/baeckereien` landing page targeting gastronomy-specific queries ("Restaurant-Webseite Berlin"), that is a content-strategy decision (not a cutover gate). Worth doing once you have 2 to 3 gastronomy clients in the portfolio to anchor the case studies. Out of scope here.
- **Paid search.** Google Ads / Meta Ads. Out of scope (the agency rule is organic first, paid only at client request with separate budget).
- **Link building.** Acquired citations and back-references (e.g. Berlin Mittelstands-Verbände, Brasilianisches Generalkonsulat business listings) per `CITATIONS.md` §3. Mostly handled by the §4.1 citation list; deeper outreach is post-launch month 4+.
- **A11y + Performance audits.** Run pre-cutover per `CHECKLIST.md`, not duplicated here.

---

## §6. Single-page summary (for the meeting where you flip the switch)

When the real domain arrives, run in this order:

1. `breno-bar.com` connected in Vercel
2. `SITE.url` and `astro.config.ts:site` updated to the new domain
3. DRAFT items resolved (street, PLZ, USt-IdNr)
4. `BaseLayout.astro:49` flip: `noindex = false`
5. `public/robots.txt` flip: `Allow: /` + `Sitemap:` line
6. Real GA4 ID in `BaseLayout.astro:162` and `:170`
7. Real OG image + 3-aspect schema photography
8. Resend domain verified, production API key set in Vercel env vars
9. `pnpm build` + `vercel --prod --prebuilt` + `vercel alias`
10. GSC Domain property added, sitemap submitted, ~30 URLs individually URL-inspected
11. Bing Webmaster Tools imported from GSC
12. GBP listing created or claimed, website URL set
13. HSTS preload submitted at https://hstspreload.org/ (verify header + redirects first; this is a one-way door, see §1.9)
14. ~~Apply §2 per-page meta refinements~~ already shipped 2026-05-30 (skip)
15. ~~Apply §3.1 to §3.3 schema enhancements~~ already shipped 2026-05-30 (skip)
16. Monitor §4.2 + §4.3 windows.

Done is the day the home page shows up on its own brand search ("breno-bar") within the first 3 results. That should happen 3 to 14 days after the §1 gates are clean.
