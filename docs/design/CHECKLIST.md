# CHECKLIST.md — Master Pre-Delivery Checklist
## Run this before going live on every client project

**Applies to:** All product types (1–5). The checklist itself is universal; **how many items apply at each type follows `TECH.md` §1.3 activation matrix.** A Type 1 info site legitimately skips form / API / DB rows; a Type 3+ site must hit them all.

**Pull from:** every standards doc — this is the master gate.
**Run in order.** Fix every failure before delivering.

---

## Phase legend — demo vs production gates

Not every gate applies at every phase. Use the legend to triage what's blocking *now* vs what's deferred until production cutover.

| Tag | Meaning |
|-----|---------|
| 🔴 **Production blocker** | Must pass before `noindex` is removed and the client sees the live URL |
| 🟠 **Best practice** | Should pass even in demo; not a launch blocker but a code-health item |
| 🟡 **Demo-deferrable** | Acceptable to leave open during demo; auto-required at production cutover |
| 🟢 **Pass** | Already in place — verify it stays in place after future edits |

**Demo-phase exemptions** — gates that are *intentionally absent* during demo and only activate at production cutover:

- Analytics + cookie consent banner (`ANALYTICS.md`)
- Uptime monitoring (`RELIABILITY.md`)
- Secret rotation cadence (`SECURITY.md`)
- Custom domain + SEO score ≥ 95 (`SEO.md`)
- Real photos in place of placeholders / scraped images (`DESIGN-BEST-PRACTICES.md`)
- Confirmed Impressum / Datenschutzerklärung content (`SECURITY.md`)

**Production-blockers that must exist by day one** — even before demo handoff:

- `noindex` meta on every page during demo
- Schema.org valid
- HTTPS via Vercel auto-cert
- All standards docs' security headers in `vercel.json`
- Custom 404 page
- Real client phone + WhatsApp links functional

---

## 0. Pre-flight

- [ ] Client has reviewed and approved all content (copy, hours, prices, photos)
- [ ] `noindex` meta tag is **removed** from all pages
- [ ] Real domain is configured (not `vercel.app`)
- [ ] HTTPS is active (Vercel provisions automatically)
- [ ] All environment variables set in Vercel project settings (not in code)

---

## 1. Technical

### Build
- [ ] `pnpm lint` passes with zero warnings
- [ ] `pnpm build` completes without errors
- [ ] No `console.log` statements in production code
- [ ] No `any` TypeScript types, no `// @ts-ignore`

### Static files in `public/`
- [ ] **`public/favicon.svg`** exists (primary favicon — see `DESIGN-BEST-PRACTICES.md` §3 favicon priority hierarchy)
- [ ] **`public/favicon.ico`** exists (32×32 PNG fallback — `rsvg-convert -w 32 -h 32 favicon.svg -o favicon.ico`)
- [ ] **`public/apple-touch-icon.png`** exists (180×180 — same generation command at 180×180)
- [ ] **`public/robots.txt`** exists. Production state: `User-agent: *\nAllow: /` + `Sitemap: https://[domain]/sitemap-index.xml`. (Demo state was `Disallow: /` — flip happens at production cutover, paired with `noindex` removal.)
- [ ] All four files reachable: `curl -I https://[domain]/favicon.svg | grep "200"` and equivalent for the other three

### Schema.org / structured data
- [ ] `LocalBusiness` `@graph` with most-specific subtype (`IceCreamShop` for gelateria · `CafeOrCoffeeShop` for café · `Restaurant` for full-service · `BarberShop` / `BeautySalon` / `Dentist` etc.). Audit-driven — `Restaurant` was found on a gelateria site; the SEO.md rule says "most-specific Schema.org subtype." Verify: `curl -s [url] | grep -oE '"@type":"[^"]+"' | head -3`.
- [ ] `BreadcrumbList` JSON-LD emitted on **every inner page** (non-home). The canonical `BaseLayout.astro` auto-derives breadcrumbs from `Astro.url.pathname` + page `title` prop and skips single-segment paths (home). Verify: `curl -s [url]/[inner-page] | grep -c '"@type":"BreadcrumbList"'` returns ≥1.
- [ ] `FAQPage` JSON-LD emitted whenever the `FAQ` canonical component is on the page (default behavior — `emitSchema={true}`). Schema items MUST match the rendered question + answer text exactly. SERP rich result deprecated 2026-05-07 but markup remains an AI-extraction signal per `SEO.md`.
- [ ] No `aggregateRating` on own LocalBusiness (Google policy violation; rule per `SEO.md §5.3`)

### HTML structure
- [ ] One `<h1>` per page
- [ ] Heading hierarchy is logical: `h1` → `h2` → `h3`, no levels skipped
- [ ] `<html lang>` attribute set correctly on every page (`de`, `en`, `pt-BR`)
- [ ] `<meta charset="UTF-8">` and `<meta name="viewport">` present
- [ ] `<address>` element used for contact info block
- [ ] `<a href="tel:+49...">` for phone (not plain text)
- [ ] `<a href="mailto:...">` for email (if shown)
- [ ] `<time>` used for hours where applicable
- [ ] No `<div>` used where a semantic element applies (`<nav>`, `<main>`, `<footer>`, etc.)

### Performance
- [ ] PageSpeed Insights **mobile score ≥ 90** (run on live domain, not preview)
- [ ] LCP < 2.5s
- [ ] CLS < 0.1
- [ ] Hero/LCP image does **not** have `loading="lazy"`
- [ ] Hero/LCP image **has `fetchpriority="high"`** (not set by Astro `<Image>` by default — see `PERFORMANCE.md`)
- [ ] All below-fold images have `loading="lazy"`
- [ ] All images have explicit `width` and `height` attributes (prevents CLS)
- [ ] All images converted to **WebP** format
- [ ] **WebP companion files exist** for every JPEG/PNG used in `FullBleedHero` / `SplitHero` / `MenuCard` / `TeamGrid` / `PhotoGrid` — the canonical components render `<picture><source srcset="image.webp" type="image/webp"><img src="image.jpg"></picture>` by auto-deriving the `.webp` filename from the `.jpg`/`.png` src. If the `.webp` file is missing, browsers fall back to the JPEG (still works, just larger). Verify: `ls public/img/hero-*.webp` returns at least one file per used hero. Added 2026-05-23 from the 3-demo audit batch.
- [ ] Hero image max 1920px wide; section images max 800px
- [ ] No unoptimized images above 200KB
- [ ] **Schema `image` URL returns 200** — every `image` reference inside `lib/seo/schema.ts` (the LocalBusiness `@graph` node, the `Restaurant`/`CafeOrCoffeeShop`/etc. node, OG image fallback in `BaseLayout.astro`) must resolve. Audit-driven gate after the Saltlines `hero-surf-coffee.jpg` broken-reference incident — would have 404'd in Google rich-results. `curl -sI [SITE.url]/img/[schema-image-path].jpg | head -1` must return `HTTP/2 200`.
- [ ] Image `widths` array has at least one variant within ~25 % of the actual displayed width × DPR (avoids browser over-picking)
- [ ] Image `quality` set to 75 for photos (default 80 wastes ~10 % bytes for no visible gain)
- [ ] **Zero `fonts.googleapis.com` or `fonts.gstatic.com` references** in the rendered HTML — all fonts self-hosted via `@fontsource-variable/*` or equivalent
- [ ] `font-display: swap` on every `@font-face` (fontsource sets this by default — verify)
- [ ] Display font's LCP-element subset preloaded (optional but worth ~100–200 ms LCP)
- [ ] No render-blocking scripts
- [ ] If LCP > 2.5 s, **read the LCP breakdown** in PageSpeed — `Element render delay` is the dominant lever in our builds; almost always means render-blocking fonts or CSS above the LCP element

### Security
- [ ] Security headers configured in `vercel.json` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`)
- [ ] No API keys, credentials, or secrets in source code or committed `.env` files
- [ ] Contact form (if present): server-side validation with Zod, honeypot field, rate limiting
- [ ] `dangerouslySetInnerHTML` not used with user-provided content

### Infrastructure
- [ ] `robots.txt` present and allows all crawlers
- [ ] `sitemap.xml` generated and correct
- [ ] `vercel.json` has correct `buildCommand`, `outputDirectory`, security headers
- [ ] `.gitignore` includes `.env`, `node_modules/`, `.next/`, `dist/`, `.astro/`, `.vercel/`
- [ ] `pnpm-lock.yaml` committed

---

## 1.5. Operational tests

These tests verify that the **rules behave as documented** at runtime, not just that the rule's artifacts exist on disk. A page-existence check passes if `/datenschutz` returns 200 — an operational test passes only if loading the page does *not* fire a GA4 cookie before the user clicks Accept.

Each item below is a runtime probe with a specific pass condition. Run them against the production URL after the `noindex` flip, before client handoff.

### Cookie banner behavior (if banner is shipped)

- [ ] **Banner appears on first visit** — open the site in a private window with cleared cookies; banner renders before any tracking script fires. Pass: visible within 1s of page load.
- [ ] **No tracking cookies dropped before Accept** — open DevTools → Application → Cookies on first load. Pass: only essential cookies present (session, language, consent record itself). FAIL: `_ga`, `_clck`, `_fbp`, `ph_*` present.
- [ ] **No third-party requests before Accept** — DevTools → Network → reload first-visit page. Pass: no requests to `googletagmanager.com`, `google-analytics.com`, `clarity.ms`, `posthog.com`, `facebook.com/tr`. FAIL: any of those fire on initial load.
- [ ] **"Reject all" works and persists** — click Reject all → reload page → confirm no tracking cookies fire on second load.
- [ ] **"Reject all" has parity with "Accept all"** — same prominence, same number of clicks to action, same visual weight. Pass: side-by-side screenshot review.
- [ ] **GPC signal honored (US-market sites)** — set `Sec-GPC: 1` via browser extension; reload page. Pass: site treats the visit as opted-out without prompting (no banner, no sale/share cookies).
- [ ] **Footer "Manage cookie preferences" link reopens banner** — present on every page; click reopens the consent modal.
- [ ] **Consent record stored with ≤ 6 month expiry** — DevTools → Application → Local Storage / Cookies → consent record. Verify `Expires` ≤ 180 days from set date.

### KPI / event wiring tests (every retainer-tier production cutover)

Per `KPI.md` §Pre-launch verification — every site ships with at least 3 KPIs wired before `noindex` flip.

- [ ] **KPI contract block exists in `BRIEF.md`** — 3–5 KPIs with target + data source named, owner-confirmed
- [ ] **Each canonical event named in BRIEF.md fires correctly** — DevTools → Network → trigger the action → confirm payload sent to GA4 / Clarity / PostHog (Tier 3)
- [ ] **No PII in any event payload** — inspect a representative event for each tool; confirm no email, name, phone, address, free-text input in `payload` / `properties` / `eventParameters`
- [ ] **Event names match the canonical agency-wide list** — `KPI.md` §Event naming convention. Diff `src/lib/analytics.ts` (Tier 2/3) or inline handlers (Tier 1) against the table.
- [ ] **Required parameters present** — every event includes `source_page` + `source_section` (and `locale` for multilingual sites)
- [ ] **Funnel-style events have a `_failed` counterpart wired** — `booking_failed`, `contact_form_failed`, `payment_failed`
- [ ] **`consent_given` / `consent_rejected` events fire** when the cookie banner is accepted / rejected
- [ ] **Vertical-specific events fire per the matching template's §11** — open the per-vertical template `§11.4 Vertical-specific event names`; trigger each event; confirm
- [ ] **Dashboards exist and are accessible to the client** — GA4 + Clarity + (Tier 3) PostHog dashboards built per `KPI.md` §Dashboard recipes; client account granted view access
- [ ] **First monthly KPI report drafted before the 5th business day of the next month** — `KPI.md` §Retainer reporting cadence

### Social + sharing tests (every production cutover)

Per `SOCIAL-SHARING.md` §Pre-launch verification.

- [ ] **OG tags present on every indexed page** — `<meta property="og:*">` (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`)
- [ ] **OG image is a real photo, not a logo-on-white** — visually inspect
- [ ] **OG image dimensions 1200×630 (or close — 1.91:1)** — verify via `<meta property="og:image:width">`
- [ ] **OG image < 300 KB** — `curl -I [og-image-url] | grep -i content-length` returns < 307200
- [ ] **Twitter Card tags present** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- [ ] **Meta Sharing Debugger re-scraped** ([developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)) for production URL — clears WhatsApp/FB cache that may hold the broken pre-launch preview
- [ ] **X Card preview renders correctly** when URL pasted into a private X compose
- [ ] **WhatsApp preview renders** when URL pasted into WhatsApp Web compose
- [ ] **Share-button component renders the per-vertical default targets** (see matching template §11.7) — count + match
- [ ] **Each share-button click opens the correct intent URL** — test each target (WhatsApp, Facebook, X, Instagram-copy-fallback, Copy-link)
- [ ] **`share_click` event fires** with `share_target` + `source_page` + `source_section` params
- [ ] **Copy-link button shows "Copied!" confirmation** for ~1.5s after click
- [ ] **Locale-correct aria-labels in every locale shipped** (DE / EN / PT-BR / PT-PT — per `I18N.md`)
- [ ] **IG embed pattern (if used)** is the consent-gated `type="text/plain"` script-blocking — verify via DevTools that no IG SDK loads before consent
- [ ] **IG bio-link UTMs set per canonical convention** — `?utm_source=instagram&utm_medium=bio_link&utm_campaign=...`

### Build robustness — env-var resilience (any Tier 2+ build with env-dependent modules)

Per `INTEGRATIONS.md` §Lazy initialization for env-dependent server modules. Catches the canonical failure mode: a `db.ts` / `ratelimit.ts` / `resend.ts` that throws at module-eval time breaks the Next.js *Collecting page data* phase, breaks CI builds, and breaks preview deploys — even though the routes would work fine at request time.

- [ ] **`pnpm build` succeeds with no env vars set** — clone the repo into a clean directory, run `pnpm install && pnpm build` with an empty `.env`. The build must complete. If it fails on missing DATABASE_URL / RESEND_API_KEY / UPSTASH_REDIS_REST_URL, an env-dependent module is throwing at module-eval — refactor to lazy-init.
- [ ] **Every env-dependent server module uses the `getX()` getter pattern** — `grep -rn "process.env" src/lib/` should return no top-level `new`/`throw` outside a function body. Eager top-level instantiation breaks the build.
- [ ] **At least one preview deploy completed without production secrets** — Vercel preview deploys for non-main branches run with whatever env vars are scoped to "Preview". Any env-dependent module that throws at module-load will break preview deploys silently; the operational test is that previews build green.

### Sentry / error tracking (any Tier 2+ build or Tier 1 with form endpoint)

- [ ] **`sendDefaultPii: false` is set** — `grep "sendDefaultPii: false" src/ astro.config.ts sentry.*.config.*` returns at least one match in every Sentry init.
- [ ] **No PII in captured events** — trigger a known error in production; inspect the event in the Sentry dashboard. Pass: no request body, no headers (cookies, auth), no raw IP, no form-field values.
- [ ] **Sentry data region matches client jurisdiction** — Sentry → Settings → General → Data Region = EU for DE/PT clients; BR or US acceptable for BR/US clients.
- [ ] **Sentry named as data processor in Privacy Policy** — search the policy page for "Sentry"; confirm it appears under the third-party-processor list.

### Per-jurisdiction legal pages (matching the client's market)

- [ ] **DE clients:** `/impressum` returns 200 and contains the 8 TMG § 5 fields (legal name, address, email+phone, HRB or USt-IdNr if applicable, Aufsichtsbehörde for regulated trades)
- [ ] **DE clients:** `/datenschutz` returns 200 and lists every active third-party processor by name
- [ ] **BR clients:** `/politica-de-privacidade` returns 200 with all 7 LGPD sections
- [ ] **BR clients:** footer shows Razão Social + CNPJ/MEI + address on every page (`curl -s [url] | grep -i 'CNPJ\\|MEI'`)
- [ ] **PT clients:** footer shows NIF (9 digits) + CAE + sede on every page
- [ ] **PT clients:** Livro de Reclamações link present in footer (`href="https://www.livroreclamacoes.pt/inicio"`)
- [ ] **US clients (when activated):** "Your Privacy Choices" link in footer; opt-out toggle reachable and persists
- [ ] **All clients:** legal pages return `X-Robots-Tag` allowing indexing (NOT `noindex`). `curl -I [url]/datenschutz | grep -i x-robots-tag` must NOT return `noindex`.

### Review generation — pre-launch (every retainer-tier production cutover)

The full playbook lives in `SEO.md` §8.4. These items are the operational pre-launch tests. Owner-side legal compliance is documented in `LEGAL.md` §DE "Post-service communications" (Bestandskunden frame under UWG §7(2)(b)).

**Configuration (every retainer client):**

- [ ] **GBP review link visible in site chrome** — footer or About page carries the link to the GBP review form (the per-market vanity redirect from `SEO.md` §8.4.2, NOT a raw `g.page/r/...` URL exposed to end users)
- [ ] **Vanity review redirect configured** — `/bewertung` (DE) / `/avaliacao` (PT/BR) / `/review` (EN) per market, declared in the client's hosting/redirect config
- [ ] **QR card with review link prepared for client** — printable PDF at minimum 7 × 5 cm, vanity URL clearly readable, owner's name + business name + "Bewertung / Avaliação / Review" label
- [ ] **Response SLA documented in retainer agreement** — 24h target per `SEO.md` §8.4.6; explicit at retainer-tier level (≤€300/mo = owner responds, €500+/mo = agency responds)
- [ ] **Review velocity baseline captured at handoff** — record `review_count_30d` + `review_response_rate_30d` + `days_since_last_review` from the client's existing GBP listing into the BRIEF.md or initial monthly report, for the 90-day before/after comparison per `SEO.md` §13

**🔴 Production blockers — must pass before flipping `noindex` off:**

- [ ] 🔴 **Vanity review redirect tested end-to-end** — issue an HTTP HEAD against the vanity URL: response is `301 Moved Permanently` AND the `Location` header points to the correct `g.page/r/<short-id>/review` (NOT a 404, NOT a generic Google business search). Run: `curl -sI https://[client-domain]/bewertung | grep -E "HTTP|Location"` — both lines must be present and correct. A broken vanity redirect sending customers to a 404 is worse than no redirect.
- [ ] 🔴 **DE clients with agency-managed campaigns: client legal counsel has cleared the §8.4.5 DE review-request template** — written sign-off from the client's counsel (email is sufficient, save to `docs/clients/[slug]/legal-signoff-bestandskunden.md` or equivalent) before any mass SMS or email deployment. Engagement-managed scope only — owner-managed cadence (≤€300/mo retainer where the client themselves sends individual requests) does not require agency-collected legal sign-off but the client is still on the hook for UWG compliance. The agency's role: provide the DRAFT, document the gate, never deploy mass campaign without the sign-off on file. See `LEGAL.md` §DE Post-service communications for the full Bestandskunden frame.

### Citations — pre-launch (every client at production cutover)

The full playbook lives in `CITATIONS.md`. Citations are a **cross-type** production-cutover deliverable per `TECH.md` §1 — every client builds the baseline at launch, regardless of stack tier or product type.

- [ ] **Canonical NAP block declared in `BRIEF.md`** — per `CITATIONS.md` §7 template (name · street · ZIP/city · country · phone · website canonical) · owner-confirmed before any directory is claimed · matches the GBP listing exactly
- [ ] **Universal citations claimed (___ / 6)** — Google Business Profile (postcard-verified) · Apple Business Connect · Bing Places · Yelp Germany · Facebook Business Page · Instagram Business Profile (NAP in bio matches canonical). See `CITATIONS.md` §2.
- [ ] **DE-general citations claimed (___ / 8)** — Gelbe Seiten · Das Örtliche · Das Telefonbuch · 11880.com · meinestadt.de · berlin.de (for Berlin clients) · Cylex · GoYellow. See `CITATIONS.md` §3.
- [ ] **berlin.de claimed (Berlin-primary clients only)** — Berliner Senatsverwaltung portal · free · government-adjacent trust signal · most-under-claimed entry · always claim for Berlin-primary
- [ ] **Vertical-specific citations claimed (___ / N)** — 1-3 directories from the vertical's row in `CITATIONS.md` §4 (e.g., Jameda for health · Treatwell for beauty · Tripadvisor for gastronomy · MyHammer for trades · etc.) — see matching `templates/[vertical].md` §11.6 Citations subsection for the per-vertical pick
- [ ] **Per-directory premium-upsell traps documented in retainer agreement** — Sellwerk 3-month auto-renewal (Gelbe Seiten / Das Örtliche bundle) cancellation reminder calendared 2 weeks before trial end · 11880 ProfiEintrag telesales follow-up window (2 weeks post-claim) flagged to owner · the agency never absorbs these tool costs from the retainer fee per `SEO.md` §8.4.8 pass-through rule

### Integration health checks (every production cutover with paid integrations)

Per `INTEGRATIONS.md` pre-launch verification — one test per active integration.

#### Resend (Type 2+)

- [ ] **Custom domain verified** — Resend dashboard shows green check on the client's domain
- [ ] **DKIM + SPF DNS records propagated** — `dig TXT [domain]._domainkey.resend._domainkey.[client-domain]` returns the expected record
- [ ] **Test email delivered** — submit the production contact form; owner receives the email within 60s
- [ ] **Honeypot rejects** — submit with honeypot populated; no email sent
- [ ] **Resend named in Privacy Policy** under "Who we share with"

#### Stripe (Type 4+)

- [ ] **Stripe account owned by the client** (NOT the agency)
- [ ] **KYC verification complete** on Stripe dashboard
- [ ] **Per-jurisdiction payment methods enabled** — Pix for BR · SEPA for DE/PT · ACH for US
- [ ] **Test checkout completed in production mode** — full flow from cart to paid
- [ ] **Webhook endpoint signature-verifies every request** — invalid signature returns 400, valid signature processes the event
- [ ] **Products + prices live in Stripe Dashboard** (NOT in code) — no client-supplied amounts in `checkout.sessions.create`
- [ ] **`payment_failed` events fire to Sentry + PostHog** with no card data in payload
- [ ] **Stripe named in Privacy Policy** with jurisdiction-specific entity (Stripe Payments Europe / Stripe Brasil / Stripe USA)

#### Neon (Tier 3+)

- [ ] **Region matches client jurisdiction** — EU-Central for DE/PT/BR/EU · US-East-1 for US
- [ ] **`DATABASE_URL` set in Vercel env**, not in code, not in committed `.env`
- [ ] **Migrations applied to production branch** — `pnpm drizzle-kit migrate` ran successfully
- [ ] **Encryption at rest verified** for sensitive columns (`customer_name_enc`, `customer_address_enc`, etc.) — SELECT returns encrypted bytes, not plaintext
- [ ] **Pre-deploy branch created** before first production deploy
- [ ] **Restore drill executed once** and documented in per-client `CLAUDE.md`
- [ ] **Neon named in Privacy Policy**

#### Upstash (Tier 2+ with rate limit)

- [ ] **Region matches client jurisdiction** — EU-West (Ireland) for DE/PT/BR/EU · US-East-1 for US
- [ ] **`UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` set in Vercel env**
- [ ] **Rate-limit fires on every public endpoint** — submit 6× in 60s; 6th returns 429 with `X-RateLimit-*` headers
- [ ] **IP hashing in place** — no raw IPs in Redis keys (`redis-cli KEYS rl:*` returns hashed IDs only — would need Upstash REST API in production)
- [ ] **`IP_HASH_SALT` env var set** and rotation cadence documented in per-client `CLAUDE.md`
- [ ] **Upstash named in Privacy Policy** (hashed IPs technically qualify as PII processor)

#### PostHog (Tier 3+)

Already covered in §KPI / event wiring tests above — verify all PostHog-specific items there.

#### Sentry

Already covered in §Sentry / error tracking subsection.

### Form endpoints (Type 2+ with contact / booking forms)

- [ ] **Honeypot trap rejects bots** — submit form with the honeypot field populated; endpoint returns 200 (no error leak) but no email is sent and no DB row written.
- [ ] **Rate limit fires** — submit the form 6× in 60s from the same IP; 6th request returns 429.
- [ ] **Server-side validation rejects malformed input** — submit with missing required fields directly to the endpoint (bypass client); endpoint returns 400 with a Zod error.

### Pre-launch verification

- [ ] All applicable checks above pass on the production URL (not preview)
- [ ] Re-run the checks 24 hours after the `noindex` flip — passes still pass

---

## 2. Design and UX

### Visual review at three viewports (mandatory)
- [ ] **Screenshots captured** at 375 × 812, 768 × 1024, and 1280 × 900 — for every page, for every locale
- [ ] All screenshots reviewed against `DESIGN-BEST-PRACTICES.md` **AI-template tells** subsection — zero present
- [ ] Hero headline does not wrap to more than 3 lines at 768 px (the 768 breakpoint trap)
- [ ] At 375 px, every top-level navigation destination is reachable from the header (no `hidden sm:flex` orphans)
- [ ] At 375 px, sticky service-CTA bubble (WhatsApp / Call) is present for service businesses

### Visual quality
- [ ] No stock photos passed off as the actual business
- [ ] At least one real photo of the physical business used prominently
- [ ] **Every image alt text matches the photo's actual subject** — no image labeled "Feijoada" if the photo shows Jardineira, no card labeled "[dish X]" without owning a photo of [dish X]
- [ ] No pure `#000` or `#FFF` for body text or background
- [ ] All color tokens defined in one CSS file (`tokens.css`); no hardcoded hex in components
- [ ] **Eyebrow / kicker text does not use the same hue as the primary CTA** (the accent color is reserved for the call to action — see `DESIGN-BEST-PRACTICES.md` color rules)
- [ ] Maximum 3 font families; display font is characterful (not Inter/Roboto/Arial)
- [ ] No mixed icon families; no emoji used as UI icons
- [ ] **Star ratings rendered as SVG icons**, not unicode `★` characters (see `DESIGN-BEST-PRACTICES.md` icon rules)
- [ ] No AI glow, gradient orbs, or decorative sparkles
- [ ] No card soup (every section has distinct visual weight)
- [ ] **Section rhythm varies** — not the same `eyebrow → h2 → content → CTA` pattern repeated 3+ times in a row (see `DESIGN-BEST-PRACTICES.md` layout rules)
- [ ] **Primary CTA does not appear unchanged in two sections** — second appearance differs in shape/label/variant (see `DESIGN-BEST-PRACTICES.md` CTA repetition rule)
- [ ] Hero section answers: **what** the business does, **where** it is, **how to contact**

**Vertical-scoped gates** (added 2026-05-19, grounded in `docs/audit/ui-ux-reference-study.md`):
- [ ] **For gastronomy / beauty / artisan clients:** if background is pure white (`#fff`), flag for client discussion — cream is the pattern-evidenced default (5 awarded sites). See `DESIGN-BEST-PRACTICES.md` §5 "Cream beats white for hospitality."
- [ ] **For gastronomy / beauty / health / studio clients:** if the client has a reservation/booking flow, the **half-pill sticky-edge CTA** (`RESERVE` / `BOOK` / `TERMIN` / `JOIN`) is the recommended pattern. See `DESIGN-BEST-PRACTICES.md` §7 Half-pill sticky-edge CTA. Optional but strongly recommended.
- [ ] **For gastronomy / beauty / health clients:** opening hours surfaced in the nav (`COFFEE 8:00 – 16:00` style, two-line nav-item) rather than buried in footer. See `templates/gastronomy.md` hours-in-nav recipe.
- [ ] **For trades / industrial / regulated-services clients:** body text color is `--color-text-trade-navy` (`#042940`) OR a brand-extracted navy/charcoal, NEVER pure black. See `DESIGN-BEST-PRACTICES.md` §5 Warm body text — section "trade navy variant."
- [ ] **For any client whose product is a natural material** (stone, leather, wood, food, fabric, paper, ceramic): brand accent color was sampled from a product photograph per `DESIGN-BEST-PRACTICES.md` §5 Sourcing the palette tier 3.5 — *not* invented from a generic vertical palette.
- [ ] **For any client with ambient autoplay video:** all 5 mandatory constraints in `PERFORMANCE.md` §8 are met AND Lighthouse confirms the poster image (not the video) is the LCP element. If even one constraint is missing — pull the video before launch.
- [ ] **For local-business clients (every vertical except portfolio / agency-self):** the `h1` is the visually primary headline AND carries the primary SEO keyword. No eyebrow-h1 pattern. See `DESIGN-BEST-PRACTICES.md` §4 inverted-h1 restriction + `SEO.md` §15 Tech SEO anti-patterns.
- [ ] **No fixed-viewport SPA / scroll-hijacking.** Document scrollable. Sections not absolutely-positioned-with-translate. See `DESIGN-BEST-PRACTICES.md` §3 Forbidden visual directions + `SEO.md` §15 Tech SEO anti-patterns.

### Typography
- [ ] Body text minimum 16px
- [ ] Line height on body: 1.6 (not default 1.0)
- [ ] Phone numbers and hours use `tabular-nums` or mono font
- [ ] No letter-spacing issues on labels

### Interaction
- [ ] Every interactive element has a `hover:` state
- [ ] Every interactive element has `focus-visible:ring-2` focus ring (styled, not browser default)
- [ ] Buttons have `active:scale-95` press feedback
- [ ] All animations use `transform` / `opacity` only (no `width`, `height`, `margin`)
- [ ] No animation exceeds 400ms
- [ ] No linear easing on any animation
- [ ] `prefers-reduced-motion` respected

### Accessibility
- [ ] Text/background contrast ≥ 4.5:1 for body text (checked with a contrast tool)
- [ ] Large text (≥ 24px bold) contrast ≥ 3:1
- [ ] CTA buttons contrast ≥ 4.5:1
- [ ] All images have descriptive `alt` text; decorative images have `alt=""`
- [ ] All tap targets ≥ 44×44px on mobile
- [ ] Tab through the page — every interactive element is reachable without a mouse
- [ ] No `outline: none` without a styled replacement

### Mobile
- [ ] Tested on an **actual mobile device** (not just DevTools)
- [ ] Tested at 375px, 768px, and 1280px viewports
- [ ] Hero text fits without overflow at 375px
- [ ] Primary CTA button is thumb-reachable on mobile
- [ ] Body text readable without zooming (minimum 16px)
- [ ] Hamburger menu (if used) has a close button and traps focus when open
- [ ] Map links open the Google Maps app (`https://maps.google.com/?q=...`)

### Content
- [ ] No lorem ipsum anywhere
- [ ] No invented reviews or testimonials (only real ones, client-approved)
- [ ] No fabricated certifications, awards, or years of experience
- [ ] **No fabricated photo-label pairings** — no image labeled as [dish/service X] unless the file actually depicts X
- [ ] **No header or footer link goes to a 404** — every link in the chrome resolves; if a route isn't built yet, stub it with a one-line "Coming soon" page or remove the link
- [ ] **Map block renders content** — not a blank iframe; if using the free Google embed (`?output=embed`) replace with static image, keyed Embed API, or a no-map location card (see `DESIGN-BEST-PRACTICES.md` map embed rule)
- [ ] Phone number in international format (`+49 30 ...` for Berlin)
- [ ] Hours confirmed with client and formatted correctly (24h for DE, 12h for EN)
- [ ] Primary CTA is one action, clearly dominant
- [ ] No corporate filler copy ("We are dedicated to...", "Our passion is...")
- [ ] "Welcome to [Business Name]!" is not the hero headline

### Human touch — hygiene (check all)
- [ ] Background is warm/cool off-white, not pure white
- [ ] Custom `::selection` color matching brand accent
- [ ] Focus rings styled in brand accent color
- [ ] Tabular-nums on hours and prices

### Human touch — required craft (both must be present)
- [ ] **One typographic flourish** — oversized italic pull-quote, drop cap, oversized stat, tracked-uppercase ribbon, or hand-set price list. Tabular-nums does not count (that's hygiene). The flourish must read as a deliberate compositional decision (see `DESIGN-BEST-PRACTICES.md` human touch checklist)
- [ ] **One place-identity detail** — beyond the address text, one element signals the city/neighborhood: U-Bahn line dot, Kiez name as a kicker, azulejo (tile) corner accent, regional motif tied to the cuisine. One detail only — overdoing it is the opposite mistake (see `DESIGN-BEST-PRACTICES.md` human touch checklist)

---

## 3. SEO

### On-page
- [ ] Every page has a unique `<title>` (50–60 characters, includes business name + keyword + city)
- [ ] Every page has a unique `<meta name="description">` (140–160 characters, includes city, has CTA)
- [ ] `<link rel="canonical">` on every page
- [ ] URL slugs are lowercase, hyphenated, in the page's primary language
- [ ] No broken links (all phone, map, social, WhatsApp links tested)

### Schema.org

Per the 2026-05-18 schema cookbook in each `templates/[vertical].md` §11.8 (MVP scope: default archetype only — 12 paste-ready `@graph` blocks). Pick the matching template, swap 8 placeholders, validate.

- [ ] `LocalBusiness` schema present in `<head>` as `<script type="application/ld+json">`
- [ ] **Most-specific `@type` chosen from the per-vertical template** (`templates/[vertical].md` §11.8), NOT the generic `LocalBusiness` (that's the §5 fallback)
- [ ] **`@graph`-rooted block** with `@id` cross-references between LocalBusiness + Person (when solo) + WebSite nodes — per `SEO.md` §5 canonical pattern
- [ ] Schema validated with **Google Rich Results Test** (zero errors — warnings on missing optional fields acceptable). If `@graph` causes RRT inconsistency on the specific `@type`, fall back to three separate `<script>` tags per entity (same content, just split inline)
- [ ] Schema validated with **Schema.org Validator** (zero errors)
- [ ] Latitude/longitude verified against actual Google Maps pin (≥ 5 decimal places, never approximate)
- [ ] `image` array carries **three aspect ratios** (16:9, 4:3, 1:1) — per Google's LocalBusiness docs
- [ ] `openingHoursSpecification` array used (NOT the deprecated `openingHours` string)
- [ ] Opening hours in schema match website and GBP exactly
- [ ] `sameAs` array links the GBP listing + Instagram + Facebook (entity-graph cross-linking)
- [ ] `priceRange` set (`€`, `€€`, `€€€`, `€€€€` — max 4 chars)
- [ ] `hasOfferCatalog` with `Service` items present when the business has a service menu (haircuts / treatments / classes / consultations / etc.)
- [ ] Vertical-specific properties from the matching template's §11.8 are populated (`servesCuisine` for gastronomy · `medicalSpecialty` for health · `areaServed` for SAB / trades / pro-services · `hasCourse` for education · `amenityFeature` for studio / hotel · etc.)
- [ ] No `aggregateRating` on own `LocalBusiness` schema (self-serving is policy-banned per `SEO.md` §5.3) — allowed only on `Product` schema (artisan / Type 4 ecommerce) with on-page visible reviews + owner consent
- [ ] `FAQPage` schema matches visible FAQ content exactly (if FAQ section present) — note: SERP rich result deprecated for all sites 2026-05-07; markup is now an AI-extraction signal, not a SERP feature
- [ ] Medical schema (`Dentist` / `Physician` / `Physiotherapy` / `VeterinaryCare`): `medicalSpecialty` is only claimed for licensed practitioners — owner-confirmed before scaffold
- [ ] `studio` clients: `@type: SportsActivityLocation` is used (NOT `YogaStudio` — schema.org has no such type per the 2026-05-18 hotfix)

#### Schema policy regression guards — run before production cutover

The three commands below catch the 2026 schema-policy violations from sneaking back into client builds (the 2026-05-18 hotfix patched all of these; these guards prevent regression). Run from the agency root. **All three MUST return zero matches before flipping `noindex` off.**

```bash
# Guard 1 — no aggregateRating ASSIGNMENT on own LocalBusiness schema (self-serving ban, SEO.md §5.3).
# The pattern below matches code (`aggregateRating:` object property OR `aggregateRating =` assignment)
# but NOT narrative mentions in comments / JSDoc / prohibition notes — the word followed by `:` or `=`.
# Scoped to src/lib/seo/ since visible UI rating values in src/components/ are a separate concern (allowed).
grep -rnE "aggregateRating[[:space:]]*[=:]" clients/*/src/lib/seo/

# Guard 2 — no 'YogaStudio' as @type (non-existent schema.org type; use SportsActivityLocation)
grep -rnE "'YogaStudio'|\"YogaStudio\"" clients/

# Guard 3 — no references to the renamed export (sportsActivityLocationSchema replaced it on 2026-05-18)
grep -rn "yogaStudioSchema" clients/

# Guard 4 — DRAFT marker integrity on SEO.md §8.4.5 message templates.
# Every code block in §8.4.5 (DE/EN/PT-BR SMS + DE email) must carry the literal marker
# `DRAFT — requires client legal counsel sign-off before mass deployment`. If a future
# edit strips the marker, an agency-managed campaign could deploy without legal review —
# the worst-case scenario the §8.4.5 framing exists to prevent.
opens=$(awk '/^#### 8\.4\.5/,/^#### 8\.4\.6/' docs/design/SEO.md | grep -c '^```text')
markers=$(awk '/^#### 8\.4\.5/,/^#### 8\.4\.6/' docs/design/SEO.md | grep -c 'DRAFT — requires client legal counsel')
[ "$opens" = "$markers" ] && echo "Guard 4 PASS ($opens templates, $markers markers)" || echo "Guard 4 FAIL ($opens templates, $markers markers)"

# Guard 5 — every vertical template's §11.1 carries the review_count_30d Health KPI row.
# Catches a real regression risk: if someone edits a template §11.1 KPI table and
# accidentally removes the review KPIs, the Batch 1 review-generation playbook silently
# stops being enforced for that vertical. Per the 2026-05-18 Batch 1 contract, every
# template's §11.1 must reference review_count_30d.
missing=()
for t in docs/design/templates/{gastronomy,beauty,trades,health,studio,professional-services,pets,automotive,education,events-hospitality,home-garden,artisan}.md; do
  awk '/^### 11\.1 Product KPIs/,/^### 11\.2/' "$t" | grep -q "review_count_30d" || missing+=("$(basename $t)")
done
[ ${#missing[@]} -eq 0 ] && echo "Guard 5 PASS (all 12 templates carry review_count_30d in §11.1)" || echo "Guard 5 FAIL — missing in: ${missing[*]}"

# Guard 6 — every vertical template's §11.6 carries a Citations subsection cross-linking
# to CITATIONS.md §4. Catches the analogous regression for Batch 2: if a template §11.6
# edit drops the Citations subsection, the per-vertical must-claim list silently stops
# being enforced for that vertical at production cutover. Per the 2026-05-18 Batch 2
# contract, every template's §11.6 must reference CITATIONS.md.
missing=()
for t in docs/design/templates/{gastronomy,beauty,trades,health,studio,professional-services,pets,automotive,education,events-hospitality,home-garden,artisan}.md; do
  awk '/^### 11\.6/,/^### 11\.7/' "$t" | grep -q "CITATIONS\.md" || missing+=("$(basename $t)")
done
[ ${#missing[@]} -eq 0 ] && echo "Guard 6 PASS (all 12 templates reference CITATIONS.md in §11.6)" || echo "Guard 6 FAIL — missing in: ${missing[*]}"

# Guard 7 — CITATIONS.md exists with all 9 canonical sections intact.
# Every other doc (SEO.md §8, CHECKLIST.md §Citations, SALES.md §10, root CLAUDE.md,
# 12 vertical templates §11.6, both reference-impl BRIEF.md files) cross-references
# specific CITATIONS.md sections by number. If a section is renamed or deleted, all
# those cross-references break silently — the production-cutover playbook stops being
# enforceable. Verify all 9 sections still exist.
required_sections=(
  "## 1. State of citations"
  "## 2. Universal citations"
  "## 3. DE general directories"
  "## 4. Vertical-specific must-claim"
  "## 5. Portugal seed list"
  "## 6. Brazil seed list"
  "## 7. NAP canonical template"
  "## 8. Aggregator verdict"
  "## 9. 6-month refresh cadence"
)
if [ ! -f docs/design/CITATIONS.md ]; then
  echo "Guard 7 FAIL — docs/design/CITATIONS.md is missing"
else
  missing=()
  for section in "${required_sections[@]}"; do
    grep -qF "$section" docs/design/CITATIONS.md || missing+=("$section")
  done
  [ ${#missing[@]} -eq 0 ] && echo "Guard 7 PASS (all 9 CITATIONS.md sections present)" || echo "Guard 7 FAIL — missing: ${missing[*]}"
fi

# Guard 8 — every vertical template's §11.8 carries a paste-ready @graph-rooted
# schema block (Batch 3 MVP contract). Catches the analogous regression for the
# schema cookbook: if a template §11.8 edit drops the @graph block or reverts to
# the pre-Batch-3 stub, the per-vertical paste-ready pattern silently stops being
# available for client scaffolding. Verify every §11.8 contains `"@graph"` (the
# canonical pattern marker per SEO.md §5).
missing=()
for t in docs/design/templates/{gastronomy,beauty,trades,health,studio,professional-services,pets,automotive,education,events-hospitality,home-garden,artisan}.md; do
  awk '/^### 11\.8/,/^### 11\.9/' "$t" | grep -q '"@graph"' || missing+=("$(basename $t)")
done
[ ${#missing[@]} -eq 0 ] && echo "Guard 8 PASS (all 12 templates carry @graph-rooted schema block in §11.8)" || echo "Guard 8 FAIL — missing in: ${missing[*]}"

# Guard 9 — canonical-pattern semantic integrity per SEO.md §5. Each template §11.8
# @graph block must carry: (a) Person OR Physician node (the operator entity) ·
# (b) WebSite node (entity-graph cross-link) · (c) openingHoursSpecification ·
# (d) priceRange · (e) NO aggregateRating on the LocalBusiness root.
# Catches the bugs the 2026-05-18 substantive review surfaced: missing
# openingHoursSpecification in events-hospitality, missing priceRange in health,
# accidental aggregateRating regression, missing Person/WebSite from accidental
# edits. Promotes the canonical pattern from spec to enforceable.
missing=()
for t in docs/design/templates/{gastronomy,beauty,trades,health,studio,professional-services,pets,automotive,education,events-hospitality,home-garden,artisan}.md; do
  block=$(awk '/^### 11\.8/{f=0} /^```json/{f=1; next} /^```$/{if(f){f=0}} f' "$t")
  echo "$block" | grep -qE '"@type":[[:space:]]*"(Person|Physician)"' || missing+=("$(basename $t):Person/Physician")
  echo "$block" | grep -q '"@type": "WebSite"' || missing+=("$(basename $t):WebSite")
  echo "$block" | grep -q '"openingHoursSpecification"' || missing+=("$(basename $t):openingHoursSpecification")
  echo "$block" | grep -q '"priceRange"' || missing+=("$(basename $t):priceRange")
  echo "$block" | grep -q '"aggregateRating"' && missing+=("$(basename $t):aggregateRating-regression")
done
[ ${#missing[@]} -eq 0 ] && echo "Guard 9 PASS (all 12 templates §11.8 satisfy canonical pattern: Person/Physician + WebSite + openingHoursSpecification + priceRange · no aggregateRating)" || echo "Guard 9 FAIL — missing/violating: ${missing[*]}"
```

- [ ] Guard 1 (`aggregateRating` in `src/lib/seo/`) returns zero matches
- [ ] Guard 2 (`'YogaStudio'` `@type`) returns zero matches
- [ ] Guard 3 (`yogaStudioSchema` export name) returns zero matches
- [ ] Guard 4 (§8.4.5 DRAFT-marker integrity) reports PASS — every template carries the legal-review marker
- [ ] Guard 5 (review-KPI integrity across 12 templates) reports PASS — every vertical template's §11.1 carries `review_count_30d`
- [ ] Guard 6 (Citations subsection integrity across 12 templates) reports PASS — every vertical template's §11.6 cross-links `CITATIONS.md`
- [ ] Guard 7 (CITATIONS.md 9-section structural integrity) reports PASS — file exists with all 9 canonical sections intact
- [ ] Guard 8 (schema cookbook integrity across 12 templates) reports PASS — every vertical template's §11.8 carries a paste-ready `@graph`-rooted block
- [ ] Guard 9 (canonical-pattern semantic integrity across 12 templates) reports PASS — every block has Person/Physician + WebSite + openingHoursSpecification + priceRange, and zero aggregateRating

If any guard returns nonzero, production is blocked. Either (a) it's a real regression — fix it by following the matching template's §11.8 pattern; or (b) it's a deliberate exception — document the reason inline + add a precise `--exclude` to the guard with the justification in the commit message.

### Crawlability
- [ ] `sitemap.xml` submitted to **Google Search Console**
- [ ] GSC property verified (DNS TXT record or HTML tag)
- [ ] GA4 tag firing correctly (tested in GA4 debugger/DebugView)

### Local
- [ ] **Google Business Profile updated** with the new website URL
- [ ] GBP hours match website hours exactly
- [ ] GBP phone number matches website phone number exactly
- [ ] GBP address matches website address exactly (NAP consistency)

---

## 4. Internationalization (multilingual sites only)

- [ ] `<html lang>` is correct BCP 47 code per page (`de`, `en`, `pt-BR`)
- [ ] `hreflang` tags present and **symmetric** on every page (every version links to all other versions)
- [ ] `x-default` hreflang included, points to primary locale URL
- [ ] `og:locale` matches current page locale (`de_DE`, `en_US`, `pt_BR`)
- [ ] Language switcher visible in header, showing **native language names** (Deutsch, English, Português)
- [ ] Translation key parity check passes (`pnpm validate:translations`)
- [ ] No raw translation keys visible in the UI on any locale
- [ ] All translations reviewed and approved by client (or a native speaker)
- [ ] German: `Sie`/`du` choice consistent throughout
- [ ] German: all nouns capitalized
- [ ] Hours formatted correctly per locale (24h for DE/PT, 12h for EN)
- [ ] Prices formatted correctly per locale (`45,00 €` for DE, `€45.00` for EN)
- [ ] All components tested in the **longest language** (German) at 375px — no overflow

---

## 5. Legal (German market — mandatory)

For DE-market sites. The full DSGVO / Impressum spec lives in `LEGAL.md` §DE — Germany (DSGVO + Impressum); this list is the runtime check.

- [ ] **Impressum page** present at `/impressum`, reachable within 2 clicks from any page (footer link uses exact word "Impressum" — no creative rename)
- [ ] Impressum contains all 8 TMG § 5 fields: legal name, street address, email + phone, HRB if applicable, USt-IdNr if applicable, Aufsichtsbehörde for regulated trades, Berufsbezeichnung for regulated professions, MStV § 18 content-responsibility statement
- [ ] Impressum reviewed and confirmed by client
- [ ] **Datenschutzerklärung** (privacy policy) present at `/datenschutz`, all 10 required sections present (`LEGAL.md` §Datenschutzerklärung — required structure)
- [ ] Privacy policy lists every data processor by name (Vercel, GA4 if used, Resend, Sentry, Microsoft Clarity, etc.)
- [ ] Cookie banner shipped if any non-essential cookie fires — consent-first, "Reject all" parity verified (`LEGAL.md` §Cookie consent banner — universal spec)
- [ ] Legal pages are **not** set to `noindex`

## 5.5. Legal (Brazilian market — mandatory)

For BR-market sites. The full LGPD spec lives in `LEGAL.md` §BR — Brazil (LGPD); this list is the runtime check.

- [ ] **Política de Privacidade page** present at `/politica-de-privacidade`, reachable from every footer
- [ ] Política contains all **7 LGPD-mandated sections** in order: Quem somos · Quais dados coletamos · Base legal · Compartilhamento · Seus direitos (Art. 18) · Cookies · Contato do Controlador
- [ ] **Footer disclosure on every page:** Razão Social + CNPJ (or MEI) + operating address + link to Política de Privacidade
- [ ] Razão Social and CNPJ/MEI confirmed by owner (NOT invented)
- [ ] **Data Controller email** is real and monitored (owner-confirmed; not a generic `contato@`)
- [ ] All third-party tools (analytics, booking platforms, payment processors, Sentry) named in Política §4 Compartilhamento
- [ ] **Cookie banner** only if non-essential cookies are used (per `LEGAL.md` §Cookie banner threshold under LGPD — strictly technical cookies do not require banner; analytics with user profiling does)
- [ ] Pix trust badge surfaced where relevant (checkout / pricing / contact for any payment-adjacent flow)
- [ ] Política de Privacidade is **not** set to `noindex`

## 5.6. Legal (Portuguese market — mandatory)

For PT-PT / Portuguese-market sites. The full RGPD + national-disclosure spec lives in `LEGAL.md` §PT — Portugal (RGPD + national); this list is the runtime check.

- [ ] **Footer block** contains: Razão social + NIF (9 digits) + CAE + sede/morada
- [ ] If sociedade: footer also has capital social + Conservatória do Registo Comercial + número de matrícula (sole-trader / empresário em nome individual is exempt)
- [ ] **Livro de Reclamações Eletrónico** link present in footer (`https://www.livroreclamacoes.pt/inicio`) — non-negotiable for any business serving consumers
- [ ] **`/politica-de-privacidade`** exists with RGPD-aligned 10 sections in PT-PT (not PT-BR)
- [ ] CNPD named as supervisory authority in the rights section (link to https://www.cnpd.pt)
- [ ] All third-party processors named in the subcontratantes section
- [ ] Cookie banner shipped if non-essential cookies fire — CNPD Deliberação 2022/622 "Reject all" parity respected
- [ ] Owner-confirmed NIF and CAE — never invented
- [ ] Privacy + Termos pages are **not** set to `noindex`

## 5.7. Legal (US market — activate only when client has US-market exposure)

For sites with explicit US-market exposure per the activation criteria in `LEGAL.md` §US — United States — registered US entity, US physical address shown on site, US-targeted ads, US-currency pricing, or US-resident audience. Passive accessibility from the US alone does not trigger this section.

- [ ] Privacy Policy contains all 10 CCPA-required sections (`LEGAL.md` §CCPA / CPRA → Privacy Policy — required structure)
- [ ] "Notice at Collection" surfaced at every form / point of PI collection
- [ ] **"Your Privacy Choices"** link present in footer (with the privacyrights.us official icon)
- [ ] Working opt-out mechanism — toggle / form actually disables sale/share cookies on submit
- [ ] **GPC signal honored** — test by sending `Sec-GPC: 1` header → site treats visit as opted-out without prompt
- [ ] Privacy Policy is **not** set to `noindex`
- [ ] Effective date + amendment history maintained on the policy
- [ ] If education vertical or under-13 audience: COPPA section added + verifiable parental consent flow shipped (`LEGAL.md` §COPPA — under-13 audience)
- [ ] Owner-confirmed business identity (LLC name, EIN if relevant)

---

## 6. Sign-off

- [ ] All items above checked and passing
- [ ] Client has done a final review and given written approval (email is fine)
- [ ] Domain is live and HTTPS is working
- [ ] First GBP post published after launch (announce the new website)
- [ ] Client knows how to contact you for future updates
- [ ] Retainer or next-step conversation had with client

---

## 7. The leanest free launch combo

A runbook for pre-launch verification using only free tools (as of 2026-05-13). Listed in execution order. Each tool's role is documented in the topic doc named beside it — open the relevant doc when in doubt.

| # | Tool | Topic doc | What to verify |
|---|------|-----------|----------------|
| 1 | PageSpeed Insights | `PERFORMANCE.md` + `SEO.md` | Performance ≥ 90, Accessibility 100, Best Practices 100 mobile. SEO ≥ 95 in production (~69 expected in demo due to `noindex`) |
| 2 | Lighthouse (Chrome DevTools) | `PERFORMANCE.md` + `ACCESSIBILITY.md` | Same audits as PageSpeed — local detail + investigation of any failing findings |
| 3 | WAVE | `ACCESSIBILITY.md` | Accessibility deep check — visual overlay of WCAG issues |
| 4 | axe DevTools | `ACCESSIBILITY.md` | Cross-check of WAVE findings; catches ARIA issues WAVE misses |
| 5 | Responsively App | `ACCESSIBILITY.md` | Manual viewport sweep at 375 / 768 / 1280 / 1920 — verify touch targets and focus rings |
| 6 | Rich Results Test | `SEO.md` | Schema.org structured data validates against Google's actual rich-result eligibility |
| 7 | Schema Markup Validator | `SEO.md` | Cross-check against the Schema.org spec |
| 8 | SSL Labs SSL Server Test | `SECURITY.md` | TLS configuration grade A+ |
| 9 | SecurityHeaders.com | `SECURITY.md` | HTTP security headers grade A |
| 10 | MDN HTTP Observatory | `SECURITY.md` | Cross-check of headers — catches subtle CSP issues |
| 11 | Internet.nl | `SECURITY.md` | IPv6, DNSSEC, HTTPS, email — modern internet standards |
| 12 | Sucuri SiteCheck | `SECURITY.md` | Malware + blacklist status — must be clean |
| 13 | Google Safe Browsing Site Status | `SECURITY.md` | Domain not on Google's blocklist |
| 14 | Google Search Console | `SEO.md` | Sitemap submitted, no indexing errors, Core Web Vitals confirmed |
| 15 | Bing Webmaster Tools | `SEO.md` | Sitemap submitted on Bing too |
| 16 | Microsoft Clarity | `SALES.md` (retainer) | Installed and recording from day one — sets up retainer-phase insight |

A site that fails any gate is not ready for handoff. Re-run the failed gate after each fix until clean.

---

## 8. Audit template — for auditing existing sites

When auditing a site (one of ours coming up for retainer review, or a client's previous site we've been asked to take over), use this template. Save the result to `docs/audit/[client-slug]-[YYYY-MM-DD].md`.

The structure below mirrors the canonical Porto dos Ribeiros audit — replicate it section-for-section. Consistency across audits lets you compare clients, track agency-wide compliance trends, and reuse fix recipes.

### Template structure

```markdown
# Audit — [Client Name]
## [Build phase] vs. agency standards · [YYYY-MM-DD]

**Auditor:** [name / Claude]
**Build under review:** [project path] — [stack summary]
**Standards reference:** docs/design/*.md (current version)
**Live URL:** [URL] ([noindex / production])
**Phase:** [Demo / Production / Retainer]

[One-paragraph context — what phase the site is in, why we're auditing now]

Findings tagged: 🔴 Production blocker · 🟠 Best practice · 🟡 Demo-deferrable · 🟢 Compliant

---

## 0. Executive summary

**Compliance:** XX %
**Reliability rubric:** X / 12
**Production-blockers:** X · **Best-practice gaps:** X · **Demo-deferrable:** X · **Surprising compliance:** X

Top three things to fix first:
1. [item]
2. [item]
3. [item]

---

## 1. Compliance scorecard

Score each standards doc as Compliant / Partial / Gap / N/A:

| Standards doc | Score | Notes |
|---|---|---|
| DESIGN-BEST-PRACTICES.md | | |
| TECH.md | | |
| PERFORMANCE.md | | |
| ACCESSIBILITY.md | | |
| SECURITY.md | | |
| RELIABILITY.md | | |
| QUALITY.md | | |
| FORMS.md | | |
| ANALYTICS.md | | |
| SEO.md | | |
| I18N.md | | |
| CHECKLIST.md | | |
| SALES.md | | |

---

## 2. The 12-question reliability rubric

Apply `RELIABILITY.md` §12 verbatim. Pass / Fail / N/A per question, with notes.

---

## 3. Detailed findings

### 3.1 Gaps — items missing entirely
[severity table]

### 3.2 Concerns — items that exist but need verification
[severity table]

### 3.3 Surprising compliance — things the build does right
[short list — important for audit balance]

---

## 4. Prioritized fix list

### Phase A — Production cutover blockers
### Phase B — Best-practice gaps
### Phase C — Demo-phase deferrals

---

## 5. Docs-improvement notes (optional)

Anything the audit exposed about gaps in the standards docs themselves. These flow back into the next `docs/design/` revision.
```

### Audit workflow

1. **Snapshot the standards.** Note the date and current `docs/design/*.md` set — the audit must be tied to a specific version of the rules.
2. **Read the codebase in full** — config files first, then source. Don't audit blindly from a checklist; the audit must reflect what's actually there.
3. **Run the reliability rubric.** This is the load-bearing section — five fails here means the site is fragile, regardless of what the scorecard says.
4. **Tag by severity, not by alphabetical order.** 🔴 first, 🟠 second, 🟡 third. Most readers don't read past the first 20 findings.
5. **Include surprising compliance.** Auditors who only list defects produce gloomy reports nobody acts on. Naming what works calibrates the reader to the gaps that actually matter.
6. **Generate the Phase A/B/C fix list.** This is the deliverable. If the audit doesn't end in a sequenced action list, it's a complaint, not an audit.
7. **Flag docs gaps back to the standards.** Section 5 is optional but valuable — auditing real codebases against the standards is the best way to find where the standards are ambiguous, missing, or over-specified.

### When to audit

- **Before retainer kickoff** on every new client (even ours) — establishes the baseline
- **Quarterly** on every retainer client — catches drift
- **Before any handoff** to another developer — same artifact, different audience
- **Whenever a major rule changes** — like the doc updates that triggered the Porto audit

### Supersession convention — when post-audit work changes the findings

Audits are point-in-time snapshots. When work after the audit changes its findings (palette correction, infrastructure scaffold added, DRAFT items resolved), **do NOT create a new dated audit md file** for every change. Instead:

1. **Amend the existing audit md in place** with date-marked supersession notes inside the relevant table cells or row entries. Use phrasing like *"Originally tier 5 (audit date); superseded by tier 3 on YYYY-MM-DD when Jean's logo was retrieved from Trinks. See `clients/.../design.md` §Palette source provenance."*
2. **Keep the original audit date in the filename** (`docs/audit/[client-slug]-[YYYY-MM-DD].md`). The file name pins when the audit was conducted; the in-file supersession notes pin when each finding became stale.
3. **Create a new dated audit md only when triggered by §"When to audit" above** — quarterly review, major rule change, retainer kickoff, handoff. Routine post-audit fixes do NOT trigger a new file; they amend the existing one.

**Why amend rather than re-date:** auditing is a discipline tied to specific gates (kickoff, quarterly, handoff). Renaming the file every time a finding changes loses the audit gate semantics and creates churn in git history. The pattern that survived the Jean Souza Barber 05-15 brand correction was inline amendment + clear "Superseded YYYY-MM-DD" notes — preserving the audit's identity while keeping it current.

**Worked example:** a prior in-progress audit was amended 2026-05-15 with 4 in-line supersession notes (palette tier 5 → tier 3, favicon priority-4 fallback → tier-1 real brand, sub-archetype changed, etc.) — file name unchanged. The next dated audit md (`-2026-08-XX.md`) will be the next quarterly review, not the post-correction snapshot.

---

## 9. Prospect intake template — for cold-outreach research

**Distinct from §8.** Section 8 audits an *existing site* against agency standards. Section 9 captures *prospect research* — public information about a business the agency is considering as a client, before any code is written, before the cold call is made.

Save the result to `docs/audit/[business-slug].md` (no date suffix — the file evolves as the conversation progresses). Reference implementations: `docs/audit/cafedelcorso.md`, `docs/audit/laudam.md`.

**The intake exists for one reason:** to give the scaffold step (and the cold-call step) a single source of truth for *every reachable URL and asset of the prospect*. Per `DESIGN-BEST-PRACTICES.md` §3 "Sourcing photos and favicon from the prospect intake," the scaffold reads this file and pulls assets from the listed URLs.

### Template structure

```markdown
# [Business Name]

## Identity

- **Display name:**
- **Legal / Razão Social:** (if known — usually unknown until owner conversation)
- **Vertical:** [Gastronomy / Beauty / Trades / Health / Studio / Pro Services / Home & Garden / Artisan / Pets / Automotive / Education / Events]
- **Sub-category:** (e.g. "barber shop, single chair" / "Italian gelato café, multi-location")
- **Address(es):**
- **Phone:**
- **Owner name(s) (if public):**
- **Country / market:** [DE / PT / BR / other]
- **Primary language(s):** [DE / EN / PT-BR / PT-PT / other]

## Online presence — every reachable URL

> This section is the **canonical source for the scaffold**. List every URL in priority order. Each URL must be reachable from a browser — if blocked (geo, Cloudflare, auth-only), note it explicitly.

| Channel | URL | Reachable? | Notes |
|---|---|---|---|
| Existing website | | ✅ / ❌ blocked / ⊘ none | Stack guess if reachable; gallery/photo count |
| Instagram | | ✅ / ❌ | Follower count; visual consistency assessment |
| Facebook | | ✅ / ❌ | Follower count |
| Google Business Profile | | ✅ / ❌ | Rating, review count, photo count |
| Booking platform | | ✅ / ❌ | Which (Trinks / Treatwell / Booksy / Fresha / Doctolib / Resy / OpenTable) |
| TripAdvisor / Yelp / equivalent | | ✅ / ❌ | Rating, review count |
| LinkedIn (for pro services / B2B) | | ✅ / ❌ | |
| Other | | | |

## Image source inventory

> Per `DESIGN-BEST-PRACTICES.md` §3, the scaffold pulls from these in declared priority. Mark each item as ✅ Fetched / 📥 Manual download needed / ❌ Blocked.

- [ ] **Logo file** — source: (owner / IG bio image / cropped storefront / typeset monogram fallback)
- [ ] **Hero photo** — source URL, what it depicts
- [ ] **Operator portrait(s)** — source URL, who
- [ ] **Storefront / exterior** — source URL
- [ ] **Interior** — source URL
- [ ] **Work portfolio (cuts / dishes / treatments / projects)** — source URLs, count
- [ ] **Team / staff** — source URLs, names if known

## Brand & color source inventory

> Per `DESIGN-BEST-PRACTICES.md` §5 "Sourcing the palette." Identify the highest-priority source tier that's available for this prospect.

- **Brand guide exists?** [Yes / No / Unknown]
- **Existing site palette?** (extract on first audit pass)
- **Storefront / signage colors?** (which photo to sample from)
- **Instagram feed color grade?** (consistent / inconsistent / not assessed)
- **Fallback:** vertical-default per `templates/[vertical].md` "Default palette when client has no brand"
- **Final tier used:** [1 / 2 / 3 / 4 / 5 / 6] — to be filled during `design.md` drafting

## Reviews and trust signals

| Source | Rating | Count | Notable quote(s) |
|---|---|---|---|

> Capture 3–5 verbatim review quotes if possible — they become candidate testimonials for the site (subject to owner clearance). Note: quotes can be shown as visible on-page testimonials with owner consent; `aggregateRating` is **never** placed on the business's own `LocalBusiness` schema regardless of consent (self-serving ban per `SEO.md` §5.3).

## Hours, services, pricing — initial public data

> Mark each as PUBLIC (from GBP / IG bio / website) vs DRAFT (best-guess until owner confirms). Cross-conflicts (e.g. GBP shows 19:00, IG bio says 18:00) flagged explicitly.

## Differentiators

> 3–5 bullet points: what makes this business worth approaching? What's the cold-call hook?

## Owner relationship status

- [ ] Cold prospect — no contact yet
- [ ] Indirect connection (friend of friend)
- [ ] Personal connection (friend / family)
- [ ] Verbally agreed to portfolio build (domain-cost-only per root `CLAUDE.md`)
- [ ] Verbally agreed to paid engagement
- [ ] Contract signed

## Time sensitivity

> Is there a known deadline? (Launch event, competitor about to undercut, etc.) If none, mark "no time pressure" — informs whether to skip portfolio work and call now, or build portfolio first.

## Next steps

1. [Specific actions before any code is written]
2. [Owner-conversation questions to gather]
3. [Stack / product type decision — references `TECH.md` §1]
```

### How the intake flows into the scaffold

1. `docs/audit/[slug].md` is created (this template) — usually by the user, from public-data research.
2. Claude reads it as the **first action** when starting any new client project, before scaffolding.
3. Asset URLs feed the photo + favicon sourcing workflow (§Sourcing photos and favicon from the prospect intake).
4. Brand inventory feeds the palette sourcing workflow (§Sourcing the palette).
5. Identity, hours, services, reviews feed `BRIEF.md` (per the template in `TECH.md` §20).
6. Differentiators + owner status feed the cold-call talking points / scope conversation.

The intake is **research, not commitment**. Creating one doesn't mean the agency is taking on the prospect — it means the prospect is worth thinking about. The decision to scaffold comes after.

---

*Every item on this list has saved real time or prevented a real problem. Don't skip it.*
