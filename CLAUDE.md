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
| `docs/design/TECH.md` | Stack decisions, code organization, Configuration-as-Code, TypeScript, naming, deployment | Starting any client project |
| `docs/design/PERFORMANCE.md` | Web performance — budgets, image rules, font self-hosting, LCP diagnostic | Building, debugging slow pages, pre-launch |
| `docs/design/ACCESSIBILITY.md` | WCAG 2.2 AA — contrast, keyboard nav, focus trap, reduced motion, semantic HTML, touch targets | Any client UI work, pre-launch a11y pass |
| `docs/design/SECURITY.md` | TLS, security headers, contact-form hardening, secret rotation, German legal (DSGVO/Impressum), Brazilian legal (LGPD/Razão Social), pre-launch security gates | Any client project, mandatory before production |
| `docs/design/RELIABILITY.md` | Error handling, recovery, third-party degraded mode, logging, monitoring, backup/DR, audit rubric | Production builds; auditing any inherited site |
| `docs/design/QUALITY.md` | `pnpm validate` pipeline, CI/CD (GitHub Actions), coverage targets, parity validators, pre-commit hooks | Setting up any new client project |
| `docs/design/INFRASTRUCTURE.md` | Scaffold drop-in: `vercel.json` + custom 404/500 + CI workflow + uptime monitoring + rollback drill | Every new client project — drop in at scaffold time |
| `docs/design/FORMS.md` | Contact / booking / waitlist form patterns — validation, sanitization, honeypot, rate limit, idempotency, accessibility | Any form on a client site |
| `docs/design/ANALYTICS.md` | Event tracking, consent gating (DSGVO), GSC + Clarity + GA4 stack, retainer reporting hooks | Production launch and retainer phase |
| `docs/design/SEO.md` | Local SEO, keyword research, schema, GBP optimization, measurement | Any SEO or GBP work |
| `docs/design/I18N.md` | Multilingual setup, locale config, translation files, parity validator, DE/EN/PT-BR rules | Any multilingual site |
| `docs/design/CHECKLIST.md` | Master pre-delivery checklist + leanest free launch combo runbook | Before going live on any client |
| `docs/design/SALES.md` | Outreach workflow, pricing, contracts, client handoff, retainer | When managing the client relationship |

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

Client source code lives in `clients/[client-slug]/`.

Cross-client audit + intake artifacts live in `docs/audit/`:

| File / folder | What it covers |
|---|---|
| `PENDING.md` | **Agency-level backlog aggregator** — every unresolved item across all clients + prospects + agency-template work, organized by next-action owner. Single-pane portfolio view. Check it before each cold call and before each production cutover. |
| `[client-slug].md` | Prospect intake (cold-outreach research) — per `CHECKLIST.md` §9 template. No date suffix. |
| `[client-slug]-[YYYY-MM-DD].md` | Site audit (against agency standards) — per `CHECKLIST.md` §8 template. Date-suffixed to pin the audit gate. Amend in place per the §8 supersession convention. |
| `archived/` | Superseded audit files retained for historical-record value (audit-gate semantics). See `archived/README.md` for the convention — what gets moved here vs deleted outright. Files in `archived/` are read-only; updates go in the current dated audit md in the parent folder. |

---

## How to start a new client project

### Step 0 — Read the prospect intake first

If a prospect-intake file exists at `docs/audit/[client-slug].md` (per `CHECKLIST.md` §9), read it **before any code**. The intake is the canonical source for every reachable URL the scaffold will pull from. Image sources, brand source signals, contact info, hours discrepancies — all already enumerated there.

Reference implementations: `docs/audit/jean.md`, `docs/audit/cafedelcorso.md`, `docs/audit/laudam.md`.

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
- Multi-page static → Astro 5+ + Tailwind v4 (Tier 2) ← most common
- Dynamic features needed → Next.js 16 + next-intl (Tier 3)

**Then pick the matching vertical template in `docs/design/templates/`** (12 available — one per benchmark category): gastronomy · beauty · trades · health · studio · professional-services · pets · automotive · education · events-hospitality · home-garden · artisan. The template captures archetype options, default palette per sub-archetype (when client has no brand), photography rules, typography pairings, anti-patterns, and reference sites. Read its §1 archetype matrix + §10 decision matrix before drafting the per-client `design.md`.

### Step 3 — Scaffold the project

```bash
mkdir -p clients/[client-slug]
cd clients/[client-slug]

# Tier 2 (Astro — most common):
pnpm create astro@latest . -- --template minimal --typescript strict --no-git
npx astro add tailwind    # Uses @tailwindcss/vite — correct for Tailwind v4
pnpm add -D biome

# Tier 1 (Pure HTML):
# Create index.html + src/styles/tokens.css + src/styles/global.css manually
```

**Required public files** (every site, no exceptions — per `TECH.md` §20):
- `public/favicon.svg` + `public/favicon.ico` (32×32 PNG fallback) + `public/apple-touch-icon.png` (180×180)
- `public/robots.txt` (`Disallow: /` during demo; flip at production cutover)

Generate favicons from the brand source via `rsvg-convert` — recipes in `TECH.md` §8 "Image-extraction operational toolkit."

**Source palette + photos + favicon per the hierarchies in `DESIGN-BEST-PRACTICES.md` §3 + §5** — try booking-platform profile pages (Trinks / Booksy / Treatwell / Mindbody / Doctolib / Resy) **FIRST** for beauty/health/studio/gastronomy verticals. They're WebFetch-accessible and yield the master logo + structured business data in one call (per the Jean Souza Barber worked example). Instagram + GBP are blocked for automated extraction — manual download path only.

Drop in the agency-template **infrastructure scaffold** at this step OR before the production cutover gate — `docs/design/INFRASTRUCTURE.md` packages `vercel.json` + `404.astro` + `500.astro` + `.github/workflows/ci.yml` + uptime monitoring as a single recipe. ~30-45 min, applies retroactively to every existing build, applies automatically to future ones.

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

- **Never auto-commit or auto-push.** Stage changes, report what's ready, wait for instruction.
- **Atomic commits.** English, imperative, one logical change per commit.
- **Write the plan first** for any multi-step task. Get approval. Then execute.
- **pnpm everywhere.** Never npm, never yarn.
- **Run before declaring done:** `pnpm validate` (= lint + build + visual-review reminder). The visual half is not optional — capture screenshots at 375/768/1280 against the AI-template tells in `DESIGN-BEST-PRACTICES.md` §15.
- **Never invent client content.** Hours, prices, reviews, certifications — all confirmed with client or labeled DRAFT.
- **Re-source the palette mid-build when a higher-priority signal arrives** — logo retrieval, brand guide email, owner-supplied photos. Per `DESIGN-BEST-PRACTICES.md` §5 "Re-sourcing the palette mid-build." The hierarchy is enforced throughout the build, not just at scaffold time.
- **Verify WCAG 2.2 AA contrast before committing tokens.** Recipe in `TECH.md` §8 "Image-extraction operational toolkit." Especially: white-on-tinted-button hover states (lighter-on-hover is a WCAG anti-pattern — see `DESIGN-BEST-PRACTICES.md` §5).
- **Legal compliance per client market** — non-negotiable for production launch:
  - 🇩🇪 German: Impressum + Datenschutzerklärung (DSGVO) — `SECURITY.md` §6
  - 🇧🇷 Brazilian: Política de Privacidade + Razão Social/MEI/CNPJ footer (LGPD) — `SECURITY.md` §6.5
  - 🇵🇹 Portuguese: NIF + CAE footer + Livro de Reclamações link — `CHECKLIST.md` §5.6
- **Track unresolved items in `docs/audit/PENDING.md`** — agency-level backlog aggregator across all clients. Add to it when a DRAFT item surfaces; move to "Recently resolved" when it closes.

---

## Current client roster

**No active client builds.** The agency is in a docs-expansion phase (see `docs/audit/AGENCY-STANDARDS-EXPANSION-PLAN-2026-05-16.md`). The previous portfolio attempts — Jean Souza Barbearia + Porto dos Ribeiros (3 variants) — were deleted from `clients/` on 2026-05-16 because they pre-dated the legal/KPI/monitoring rule expansion; their per-client docs are archived at `docs/clients/archived/` for historical reference. Reference implementations (solo barber + studio with booking) land in Batch 3 of the expansion plan.

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
