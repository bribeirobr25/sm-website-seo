# CLAUDE.md — sm-website-seo Agency
## Master Entry Point for Every Claude Code Session

**Read this first. Always.**

---

## What this agency does

Three services for small businesses in Berlin (and occasionally Portugal and Brazil):

1. **Website** — build or redesign a landing page / multi-page site from scratch
2. **Google Business Profile** — set up, optimize, and maintain the GBP listing
3. **SEO** — on-page SEO, local SEO, schema markup, Google Search Console setup

**The typical client:** A small local business in Berlin with no website or an outdated one — restaurant, clinic, salon, fitness studio, tradesperson, retailer. Owner-operated. Budget-conscious. Not technical.

**The typical deliverable:** A fast, mobile-first, multilingual (DE + EN minimum) landing page deployed on Vercel, paired with an optimized Google Business Profile and connected Google Search Console.

**Languages:** Bar is trilingual (DE / EN / PT-BR). Most Berlin clients need DE + EN. Brazilian community businesses also need PT-BR.

---

## The business model

### How clients are acquired — demo-first cold outreach

1. Find a business with a weak or missing web presence (Google Maps, Instagram, physical visit)
2. **Build a demo site first** using publicly available information (name, address, services, hours, photos from Google Maps / Instagram)
3. Deploy to Vercel free tier under a `vercel.app` URL (set `noindex` — do not index the demo)
4. Call the owner, explain who you are, show them the demo URL
5. If interested → schedule a meeting, show the full site, explain the value
6. If they commit → sign a simple agreement, get real content/photos, move to production

**Why this works:** The owner sees a finished product, not a pitch. Friction to say yes is almost zero.

### Product types (the agency's service catalog)

Every project is one of five product types. Pick the type *first*, then the stack tier follows. See `docs/design/TECH.md` §1 for the full matrix.

| Type | What it is | Stack tier | Examples |
|------|-----------|-----------|----------|
| **1** | **Static info** — landing + phone/WhatsApp/maps CTAs, no system | Tier 1 (HTML) or Tier 2 (Astro) | Restaurant info, barber info-only |
| **2** | **Info + contact form** — same + form emails the owner (no DB) | Tier 2 (Astro + serverless endpoint) | Inquiry form, newsletter signup |
| **3** | **Info + booking** — DB-backed appointment / reservation system | Tier 3 (Next.js) | Online table booking, appointment scheduler |
| **4** | **Info + transactional** — orders, payments, fulfillment (PCI-relevant) | Tier 3 + payments stack | Restaurant ordering, retail catalog |
| **5** | **Application** — auth, multi-role, dashboards. Marketing is a sub-component | Tier 3 + auth + DB | Todo system, member portal |

### Pricing model (indicative — adjust per client; see `docs/design/SALES.md` §4 for the full breakdown)

| Type | One-time | Monthly retainer |
|------|---------|-----------------|
| Type 1 (Static info, single page) | €500–800 | €150–300 |
| Type 1 (Static info, multi-page) | €800–1.500 | €150–300 |
| Type 2 (Info + contact form) | €1.200–2.000 | €200–400 |
| Type 3 (Info + booking) | €2.500–5.000 | €300–600 |
| Type 4 (Info + transactional) | €4.000–8.000 | €400–800 |
| Type 5 (Application) | Quote per project | Quote per project |
| Standalone GBP setup | €150–300 | — |
| Existing-site audit (any type) | €300–600 | — |

**Rule:** Always try to sell a retainer alongside the one-time build. A site without ongoing maintenance is a one-time job; a site with a retainer is recurring revenue.

**Default to Type 1 first.** Most local businesses do not need a system — phone + WhatsApp covers 90 % of inbound. Recommend Type 2+ only when the client has a volume problem Type 1 can't solve.

### Portfolio strategy (the first 3–5 clients)

- Build 3–5 sites for people you know personally (friends, family, acquaintances)
- Charge only domain costs (≈ €10–15/year for a `.de`)
- These become the portfolio → essential for credibility before the first cold outreach
- Prioritize visually interesting businesses (café, salon, studio) over generic ones
- Document before/after: old site vs new site, GBP before/after, any metrics after 60–90 days

---

## Document structure

All standards documents live in `docs/design/`. Read the relevant ones before starting any client project.

**Every standards doc declares which product types it applies to** in its opening `**Applies to:**` line. Decide the product type first (see `TECH.md` §1), then apply only the relevant docs. A Type 1 info site does not need `FORMS.md`; a Type 3 booking system needs everything.

| Document | What it covers | Read when |
|----------|---------------|-----------|
| `docs/design/DESIGN-BEST-PRACTICES.md` | UI/UX, typography, color, layout, components, mobile, anti-slop | Starting any client UI work |
| `docs/design/COLOR.md` | Cross-cutting palette rules — 60-30-10 proportion · harmony frameworks (analogous / complementary / monochromatic / split-complementary / triadic) · max-5-brand-token cap · color psychology by vertical · 6-point pre-launch palette audit · 15 anti-patterns (incl. cream-default ban, brown-default ban, CTA hover-state contrast, Tailwind v4 unlayered-body cascade trap). Owns the "what proportions / which harmony" rule; `DESIGN-BEST-PRACTICES.md §5` owns *sourcing*; per-vertical templates own per-vertical recipes. | Every client project — at scaffold time + before production cutover |
| `docs/design/TECH.md` | Stack decisions, code organization, Configuration-as-Code, TypeScript, naming, deployment | Starting any client project |
| `docs/design/PERFORMANCE.md` | Web performance — budgets, image rules, font self-hosting, LCP diagnostic | Building, debugging slow pages, pre-launch |
| `docs/design/ACCESSIBILITY.md` | WCAG 2.2 AA — contrast, keyboard nav, focus trap, reduced motion, semantic HTML, touch targets | Any client UI work, pre-launch a11y pass |
| `docs/design/SECURITY.md` | TLS, security headers, contact-form hardening, secret rotation, malware/blacklist monitoring, pre-launch security gates. **Legal compliance is in `LEGAL.md` — SECURITY.md §6/§6.5 stub to it.** | Any client project, mandatory before production |
| `docs/design/LEGAL.md` | Consolidated 4-jurisdiction legal compliance: DE (DSGVO + Impressum), BR (LGPD + Razão Social/CNPJ/MEI), PT (RGPD + NIF/CAE/Livro de Reclamações), US (CCPA/CPRA + COPPA + state baselines). Per-client market → jurisdiction mapping rule · Privacy Policy + Terms of Use spec · cookie consent banner spec (consent-first, "Reject all" parity, ≤6mo). | Any client project — before production launch |
| `docs/design/RELIABILITY.md` | Error handling, recovery, third-party degraded mode, logging, monitoring, backup/DR, audit rubric | Production builds; auditing any inherited site |
| `docs/design/QUALITY.md` | `pnpm validate` pipeline, CI/CD (GitHub Actions), coverage targets, parity validators, pre-commit hooks | Setting up any new client project |
| `docs/design/INFRASTRUCTURE.md` | Scaffold drop-in: `vercel.json` + custom 404/500 + CI workflow + uptime monitoring + rollback drill | Every new client project — drop in at scaffold time |
| `docs/design/FORMS.md` | Contact / booking / waitlist form patterns — validation, sanitization, honeypot, rate limit, idempotency, accessibility | Any form on a client site |
| `docs/design/ANALYTICS.md` | Event tracking, consent gating (DSGVO/LGPD), GSC + Clarity + GA4 + PostHog (Tier 3) stack, per-tier stack-selection decision tree, retainer reporting hooks | Production launch and retainer phase |
| `docs/design/KPI.md` | Product KPIs + measurement framework — KPI taxonomy (acquisition/conversion/retention/health) · per-product-type defaults · canonical event-naming convention · per-tool dashboard recipes · the per-client BRIEF.md "KPI contract" block · monthly retainer-report structure | Every production cutover; every retainer-tier client |
| `docs/design/INTEGRATIONS.md` | Per-integration setup recipes — Resend (transactional email) · Sentry (error tracking) · PostHog (product analytics) · Neon (PostgreSQL) · Upstash (Redis rate limit) · Stripe (payments). Each with free-tier thresholds, env-var inventory, EU/US region selection, DPA + Privacy Policy disclosure text, key-rotation cadence. | Whenever a project needs one of the canonical agency integrations |
| `docs/design/SOCIAL-SHARING.md` | Share-button component spec (WhatsApp/Facebook/X/Instagram/Copy-link) · per-channel intent URLs · Open Graph + Twitter Card requirements · OG image generation (static, page-specific, dynamic via `@vercel/og`) · Instagram embed (consent-gated) · per-vertical share strategy · IG bio-link UTM convention | Every production cutover (OG is mandatory); high-leverage verticals (gastronomy/beauty/events/artisan) get the full share row |
| `docs/design/SEO.md` | Local SEO, keyword research, schema, GBP optimization, measurement (including the 2026-05-18 review-generation playbook at §8.4 — TOS, link mechanics, drought-alert SLA, DE/EN/PT-BR message templates, response templates, vertical velocity targets, retainer-tier tools, purge recovery) | Any SEO or GBP work |
| `docs/design/CITATIONS.md` | Local citation / business-directory landscape — universal (GBP/Apple/Bing/Yelp/FB/IG) · DE general (Gelbe Seiten/Sellwerk trap, Das Örtliche, 11880 telesales, meinestadt, **berlin.de**) · per-vertical must-claim across 12 verticals (Jameda, Treatwell, Tripadvisor, MyHammer, etc.) · PT + BR seed lists · NAP canonical template (declared per client in BRIEF.md) · aggregator verdict (no Yext/Uberall below €500/mo retainer) · 6-month refresh cadence | Every client at launch — pre-`noindex`-flip production-cutover deliverable |
| `docs/design/I18N.md` | Multilingual setup, locale config, translation files, parity validator, DE/EN/PT-BR rules | Any multilingual site |
| `docs/design/CHECKLIST.md` | Master pre-delivery checklist + leanest free launch combo runbook | Before going live on any client |
| `docs/design/SALES.md` | **Public stub** — agency methodology summary + cross-doc-reference absorber. Tactical playbook (objection scripts, retainer terms, cold-call openings) is internal, lives at `docs/design/private/SALES.md` (gitignored). | When managing the client relationship |
| `docs/design/components/` | **Canonical UI component library — 32 components + 6 universal primitives** organized into 6 tiers: Tier 0 universal primitives (Button · CookieBanner · Placeholder · ShareButton · Section) · Tier 1 infrastructure (Dialog · Accordion · ConsentGate) · Tier 2 universal SMB (FAQ · Testimonial · TeamGrid) · Tier 3 reference-study patterns (HalfPillCTA · LabelCountHeader · HoursInNav · MarqueeCTA · EyebrowDisplayHero · StatCallouts · Section · SplitText) · Tier 3b hero+menu (FullBleedHero · MenuCard) · Tier 4 promotion-from-demos (SplitHero · CourseList · Press · NewsletterMock · BookingMock · WaveReportTicker · PhotoGrid) · Tier 5 vertical multipliers (VideoFacade · MapEmbed · Lightbox · BeforeAfterSlider · PricingTable · TrustBadgeRow · ServiceArea · Timeline · ScrollSpyNav). Each component has a spec sheet + working `_impl/` file. README.md has the full tiered index + build-dependency graph + skip-list (carousel/toast/tabs anti-patterns) + buy-don't-build table. | Picking components for any client UI work — read the README's tier index, then the matching spec sheet |

**Per-vertical templates** live in `docs/design/templates/`:

| Folder / file | What it covers |
|---|---|
| `docs/design/templates/` | 12 per-vertical templates (one per benchmark category — see `local_business_website_benchmark_report.md` §7). Each follows a canonical 10-section structure: rules at a glance · sourcing rules · archetypes · IA per archetype · hero patterns · photography · typography · color archetypes + default palette · copy voice · anti-patterns · reference site annotations · decision matrix. Pick the matching template *before* per-client design.md work. |
| Categories with templates | gastronomy · beauty · trades · health · studio · professional-services · pets · automotive · education · events-hospitality · home-garden · artisan |

When cross-referencing a specific section, prefer the section heading over the number alone — e.g., `TECH.md §Stack decision matrix` rather than `TECH.md §1`. Headings survive renumbering; numbers don't.

Per-client files live in `docs/clients/[client-slug]/`:

| File | What it covers |
|------|---------------|
| `CLAUDE.md` | Entry point for this specific client (stack, commands, context) |
| `design.md` | Per-client design decisions (color tokens, fonts, copy, aesthetic) |
| `BRIEF.md` | Business context, contacts, scope, timeline |

Client source code lives in `clients/[client-slug]/`, scaffolded from `scaffolds/astro-tier2/` or `scaffolds/nextjs-tier3/` per Step 3 below. The `clients/` directory itself is intentionally otherwise empty by design — see `clients/README.md` for the convention.

Cross-client audit + intake artifacts live in `docs/audit/`:

| File / folder | What it covers |
|---|---|
| `PENDING.md` | **Agency-level backlog aggregator** — every unresolved item across all clients + prospects + agency-template work, organized by next-action owner. Single-pane portfolio view. Check it before each cold call and before each production cutover. |
| `private/[client-slug].md` | Prospect intake (cold-outreach research) — per `CHECKLIST.md` §9 template. No date suffix. Lives in the gitignored `private/` folder (intakes hold un-consented prospect data). |
| `[client-slug]-[YYYY-MM-DD].md` | Site audit (against agency standards) — per `CHECKLIST.md` §8 template. Date-suffixed to pin the audit gate. Amend in place per the §8 supersession convention. |
| `archived/` | Superseded audit files retained for historical-record value (audit-gate semantics). See `archived/README.md` for the convention — what gets moved here vs deleted outright. Files in `archived/` are read-only; updates go in the current dated audit md in the parent folder. |

---

## How to start a new client project

### Step 0 — Read the prospect intake first

If a prospect-intake file exists at `docs/audit/private/[client-slug].md` (per `CHECKLIST.md` §9), read it **before any code**. The intake is the canonical source for every reachable URL the scaffold will pull from. Image sources, brand source signals, contact info, hours discrepancies — all already enumerated there.

Reference implementations: `docs/audit/private/cafedelcorso.md`, `docs/audit/private/laudam.md` (gitignored).

### Step 1 — Create the client docs

```bash
mkdir -p docs/clients/[client-slug]
touch docs/clients/[client-slug]/CLAUDE.md
touch docs/clients/[client-slug]/design.md
touch docs/clients/[client-slug]/BRIEF.md
```

Fill in the `CLAUDE.md` using the template in `TECH.md` §20.
Fill in the `design.md` using the template in `DESIGN-BEST-PRACTICES.md` §17.

### Step 2 — Decide the stack + pick the vertical template

Use the decision tree in `TECH.md` §1:
- Single landing page → HTML + Tailwind + vanilla JS (Tier 1)
- Multi-page static → Astro 6 + Tailwind v4 (Tier 2) ← most common
- Dynamic features needed → Next.js 16 + next-intl (Tier 3)

**Then pick the matching vertical template in `docs/design/templates/`** (12 available — one per benchmark category): gastronomy · beauty · trades · health · studio · professional-services · pets · automotive · education · events-hospitality · home-garden · artisan. The template captures archetype options, default palette per sub-archetype (when client has no brand), photography rules, typography pairings, anti-patterns, and reference sites. Read its §1 archetype matrix + §10 decision matrix before drafting the per-client `design.md`.

### Step 3 — Scaffold the project from `scaffolds/`

**The agency ships two install-ready scaffolds** at `scaffolds/`. Copy the one matching the client's tier:

```bash
# Tier 2 (Astro — default for most Berlin SMB clients: Type 1 static info / Type 2 info + contact form):
cp -r scaffolds/astro-tier2 clients/[client-slug]
cd clients/[client-slug]
pnpm install
cp .env.example .env.local                  # fill with real keys later
pnpm dev                                    # http://localhost:4321

# Tier 3 (Next.js — Type 3 booking with DB / Type 4 transactional / Type 5 application):
cp -r scaffolds/nextjs-tier3 clients/[client-slug]
cd clients/[client-slug]
pnpm install
cp .env.example .env.local                  # fill with real keys (DATABASE_URL etc.) later
pnpm dev                                    # http://localhost:3000
```

**Then per-client setup** (in this order):
1. Rename `package.json` `"name"` field → `[client-slug]`
2. Edit `src/lib/site.ts` (already a copy of `site.example.ts` so the build works out-of-the-box). Replace every `TODO`/`DRAFT` with owner-confirmed data; cross-reference unresolved DRAFT items in `docs/clients/[slug]/BRIEF.md` §Open questions
3. Override the palette in `src/styles/tokens.css` (Tier 2) or `src/app/globals.css` (Tier 3) per the matching `docs/design/templates/[vertical].md` archetype. Keep the canonical motion/easing/tracking/radii tokens unchanged
4. Replace the placeholder `src/lib/seo/schema.ts` with the per-vertical paste-ready `@graph` block from `docs/design/templates/[vertical].md` §11.8 (swap `LocalBusiness` for the most-specific subtype)
5. Declare any canonical components imported from `docs/design/components/_impl/` in the client's `docs/clients/[slug]/CLAUDE.md` "Imported components" table per `TECH.md` §20
6. **Source palette + photos + favicon per the hierarchies in `DESIGN-BEST-PRACTICES.md` §3 + §5** — try booking-platform profile pages (Trinks / Booksy / Treatwell / Mindbody / Doctolib / Resy) **FIRST** for beauty/health/studio/gastronomy verticals (WebFetch-accessible, yield master logo + structured business data in one call). Instagram + GBP are blocked for automated extraction — manual download path only

**`clients/` vs `scaffolds/` distinction:**
- `scaffolds/` is where you copy **FROM** — install-ready, content-neutral, token-neutral, version-pinned starters. Do NOT add client-specific data here.
- `clients/[slug]/` is where you copy **TO** — your client builds live here. Each gets its own palette, content, photos, domain.
- They are NOT interchangeable. See `clients/README.md` and `scaffolds/README.md` for the convention.

**Why scaffolds replace `pnpm create astro@latest`:** the scaffolds ship pre-wired with Sentry · cookie banner · consent layer · analytics · canonical agency tokens · `vercel.json` (6 security headers + cache) · `.github/workflows/ci.yml` (`pnpm validate` gate) · biome config. The Astro CLI's `--template minimal` produces a bare project that takes ~2 hours to bring up to agency baseline; the scaffold is the agency baseline pre-applied.

**Required public files** (every site, no exceptions — per `TECH.md` §20):
- `public/favicon.svg` (scaffold ships placeholder; replace with client brand) + `public/favicon.ico` (32×32 PNG fallback — generate via `rsvg-convert` per `TECH.md` §8) + `public/apple-touch-icon.png` (180×180)
- `public/robots.txt` (scaffold ships `Disallow: /` for demo phase; flip at production cutover)

**Canonical components** are at `docs/design/components/_impl/` (32 canonical components + 6 universal primitives, per the tier index at `docs/design/components/README.md`). Scaffolds do NOT auto-include the 32 — opt in per the matching `docs/design/components/[component].md` §1 per-vertical applicability table. Universal primitives (`Button`, `CookieBanner`, `Placeholder`, `ShareButton`, `Section`, `Header`/`Footer`) ARE in each scaffold's `src/components/`.

**Non-component canonical assets** (lib code, legal pages, configs, Sentry recipes) are at `docs/design/_impl/`. The scaffolds include the universal subset; per-vertical assets (DSGVO Impressum/Datenschutz, LGPD política, Drizzle schema, form-endpoint route.ts) are opt-in copies from `docs/design/_impl/`.

### Step 4 — Set noindex for the demo

Add to every page `<head>` before showing the client:
```html
<meta name="robots" content="noindex, nofollow">
```
Remove completely before going to production.

### Step 5 — Build, deploy demo to Vercel

```bash
vercel --prod   # Gets a vercel.app URL
# Share URL with client
```

### Step 6 — After client commits: production

1. Remove `noindex` tags + flip `public/robots.txt` from `Disallow: /` to `Allow: /` + add `Sitemap:` line
2. Add real content, confirmed hours, real photos
3. **Drop in `INFRASTRUCTURE.md` scaffold** if not already done (vercel.json + 404/500 + ci.yml + uptime monitor) — every audit flags these gaps; ship once and they apply
4. Connect real domain in Vercel settings
5. Submit sitemap to Google Search Console
6. Update GBP with new website URL
7. Verify legal compliance per market: German → `SECURITY.md` §6 (Impressum + Datenschutzerklärung) · Brazilian → §6.5 (Política de Privacidade + Razão Social/MEI/CNPJ + Pix) · Portuguese → CHECKLIST.md §5.6 (NIF + CAE + Livro de Reclamações)
8. Run `CHECKLIST.md` top to bottom before calling it done

---

## Working principles (apply to every client session)

- **Pre-commit secret scanning is mandatory.** A `secretlint` hook (via `simple-git-hooks`) blocks commits containing secret patterns; run `pnpm install` at the repo root on a fresh clone to activate it. Wiring: `scripts/precommit-secrets.sh` + `.secretlintrc.json`. Bypass (`--no-verify` / `SKIP_SIMPLE_GIT_HOOKS=1`) only when you understand why.
- **Two `private/` folders are gitignored** — `docs/audit/private/` (backlog `PENDING.md`, prospect intakes, research) + `docs/design/private/` (sales playbook `SALES.md`); each has a public stub at the canonical path so references resolve. Never commit anything from `private/`.
- **Never auto-commit or auto-push.** Stage changes, report what's ready, wait for instruction.
- **Atomic commits.** English, imperative, one logical change per commit.
- **Write the plan first** for any multi-step task. Get approval. Then execute.
- **pnpm everywhere.** Never npm, never yarn.
- **Run before declaring done:** `pnpm validate` (= lint + build + visual-review reminder). The visual half is not optional — capture screenshots at 375/768/1280 against the AI-template tells in `DESIGN-BEST-PRACTICES.md` §15.
- **Never invent client content.** Hours, prices, reviews, certifications — all confirmed with client or labeled DRAFT.
- **Re-source the palette mid-build when a higher-priority signal arrives** (logo, brand guide, owner photos) — the sourcing hierarchy holds throughout the build, not just at scaffold. → `DESIGN-BEST-PRACTICES.md` §5.
- **Portfolio diversity is a hard gate.** Before committing `tokens.css` / `index.astro` for a new demo/client, run the diversity + section-composition audits (no two demos share a dominant bg hue · ≥1 dark-bg · ≥1 saturated accent · don't reuse a composition order / the universal-9 default). → `COLOR.md` §6.5 + `DESIGN-BEST-PRACTICES.md` §6.5.
- **Cream / bone / off-white is NOT a default base** — only a vertical-specific choice (gastronomy-heritage, fine-dining, boutique-salon, artisan). If the template doesn't call for cream, pick another base. → `COLOR.md` §6 #11 + §6.5.
- **Verify WCAG 2.2 AA contrast before committing tokens** — especially button hover (lighter-on-hover fails). → `TECH.md` §8 + `DESIGN-BEST-PRACTICES.md` §5.
- **Verify CTA color in a real browser, not the class string.** Tailwind v4's unlayered `body{color}` shadows `.text-*` utilities; the body rule MUST sit in `@layer base` (scaffolds ship the fix). → `DESIGN-BEST-PRACTICES.md` §7 + `CHECKLIST.md` §Accessibility.
- **Never rewrite scaffold infrastructure files** (`BaseLayout` / `CookieBanner` / `DemoBanner` / `consent.ts` / `Footer`) in per-client setup — they carry non-negotiable baseline (JSON-LD, BreadcrumbList, hreflang, locale consent). Customize via the extension points (`extraSchema` prop, `i18n[locale].consent`), never by replacing. (Kodama-bonsai incident.)
- **When a per-client build yields a generally-useful pattern, triage it:** BACKPORT to the scaffold (generic + low-risk), DOCUMENT AS RECIPE in `docs/design/`, or DEFER. Don't leave learnings locked in one client folder.
- **Demos require real photographs, not gradient placeholders** — ≥5 Unsplash CC0 (Hero + 4); verify valid JPEGs. → `DESIGN-BEST-PRACTICES.md` §3.
- **Legal compliance enforced per business location** — 🇩🇪 DSGVO + Impressum · 🇧🇷 LGPD + Razão Social/CNPJ · 🇵🇹 RGPD + NIF/CAE/Livro de Reclamações · 🇺🇸 CCPA/CPRA + GPC (US only on explicit exposure). Runtime checks in `CHECKLIST.md` §Operational tests. → `LEGAL.md` §Per-client market → jurisdiction mapping.
- **Sentry instruments every server-side surface** (Tier 1 form-fn only · Tier 2/3 full SDK). `send_default_pii: false` non-negotiable. → `INFRASTRUCTURE.md` §Error tracking.
- **KPI dashboards delivered with every retainer client** — ≥3 KPIs wired at production cutover; the BRIEF.md KPI contract is owner-confirmed before scaffold. No KPIs = no launch. → `KPI.md`.
- **Track unresolved items in `docs/audit/PENDING.md`** — add when a DRAFT surfaces; move to "Recently resolved" when it closes.
- **Declare imported canonical components in the per-client CLAUDE.md** "Imported components" table. → `TECH.md` §20 + `docs/design/components/README.md` (tier index).
- **Citation hygiene at launch** — claim universal + DE-general + 1–3 vertical directories; canonical NAP in BRIEF.md first. No monthly maintenance below €500/mo retainer (semi-annual audit instead). → `CITATIONS.md`.
- **Review-generation playbook per retainer GBP client** — review-count/response/drought Health KPIs + vanity redirect (`/bewertung`·`/avaliacao`·`/review`, 🔴 blocker); DE templates need legal sign-off. → `SEO.md` §8.4 + `KPI.md`.

---

## Current client roster

**Live agency-self marketing site:** `clients/agency-breno-bar/` (display brand **BAR Agency**; folder slug + email keep the `breno-bar` form) deployed at https://bar-agency.vercel.app (Tier 2 Astro · trilingual EN/DE/pt-BR · dark "Berlin night" register · Resend-wired contact form). **Inbound-funnel sprint 2026-06-04** (`icreateyoursite.com` benchmark): `/pricing`, paid `/website-check` micro-product, two free lead-tools (`/tools/website-scan` PSI scanner + `/tools/gbp-check`), 24 German `/webdesign-berlin/*` local-SEO pages, home social-proof/promises/FAQ, WhatsApp/phone wired-but-hidden. **Rebrand + overhaul 2026-06-09:** breno-bar → BAR Agency (new favicon/OG); 4-offering catalog (Web Design · SEO and Local Listing · E-Commerce and Business Email · AI Solutions/Booking); pricing add-ons (biz email +€12/mo, languages DE+EN standard + €36/mo per-language, via ⓘ tooltips) + content-update limits; **`/contract` § 2 sourced from `/pricing`** (single source of truth; `SERVICE_SCOPES` deleted; draft banner removed); About reworked; `/tools` in nav; portfolio Bellini swap; real address + Kleinunternehmer § 19 UStG resolved. Pre-production still pending: real domain + Resend API key (the `/contact` + `/tools/gbp-check` forms 503 until `RESEND_API_KEY`/`RESEND_FROM`/`NOTIFICATION_EMAIL` are set) + lawyer sign-off + funnel DRAFTs. Per-client docs (2026-06-09→12 section) at `docs/clients/agency-breno-bar/`. **Berlin-night redesign 2026-06-13→14:** the whole site was re-skinned to a dark "Berlin night" register (WebGL aurora heroes + GSAP motion; legal pages stay light) — **committed (`6b79b92` re-skin + `5e253df` docs) and deployed 2026-06-14 to the `bar-agency.vercel.app` Vercel project** (noindex). The old `agency-breno-bar` project was deleted; `bar-agency` is now GitHub-connected (auto-deploys `main`; Root Directory = `clients/agency-breno-bar`). Plan + audit at `docs/audit/REDESIGN-ROLLOUT-PLAN-2026-06-13.md` (+ `…-AUDIT-…`); register documented in `docs/clients/agency-breno-bar/design.md` § "Berlin night".

**Seven portfolio demos** at `clients/demo-*/`:
- `demo-bonsai-kodama` (4-locale education/artisan · 134 routes — agency-largest)
- `demo-restaurant-adele` (gastronomy/fine-dining)
- `demo-yoga-atem-studio` (studio/wellness)
- `demo-coffee-saltlines` (gastronomy/specialty-café)
- `demo-barber-bart-pomade` (beauty/barbershop)
- `demo-lawyer-sander-voss` (professional-services/legal)
- `demo-eiscafe-bellini` (gastronomy — Vercel URL squatted on `demo-gastronomy.vercel.app`; deferred until re-aliased)

All on `noindex`. Per-client docs at `docs/clients/demo-*/`. Recently resolved entries in `docs/audit/PENDING.md` summarize each build closure.

**Two install-ready scaffolds** at `scaffolds/` are the canonical starting points. The prior reference impls in `clients/reference-*/` were distilled into `docs/design/_impl/` + `docs/design/components/_impl/` + `scaffolds/` on 2026-05-19:
- `scaffolds/astro-tier2/` (Tier 2 / Astro 6 / Tailwind v4 / Sentry — for Type 1 + Type 2 client builds)
- `scaffolds/nextjs-tier3/` (Tier 3 / Next.js 16 / Tailwind v4 / Drizzle + Neon + Upstash + Resend + Sentry + PostHog — for Type 3+ client builds)

Per-client doc archives at `docs/clients/archived/reference-solo-barber/` (Tier 2 / BR-LGPD worked example) and `docs/clients/archived/reference-studio-booking/` (Tier 3 / DE-DSGVO worked example) retain the canonical `CLAUDE.md` + `BRIEF.md` + `design.md` shapes.

**Next phase: paying clients.** The rule library is feature-complete + the agency's own site is live. Either pursue Café Del Corso / Laudam (intakes ready in `docs/audit/private/`) or use the agency site for inbound. See `docs/audit/PENDING.md` for the current backlog and trigger-gated items.

---

## Agency contacts and accounts

| Service | Account | Notes |
|---------|---------|-------|
| Vercel | | Agency account — all client projects here |
| Google Search Console | | Add client as owner before handoff |
| Domain registrar | | Client always owns their domain |
| Resend | | Transactional email for contact forms |

---

*Build the demo. Make the call. Show the work.*
