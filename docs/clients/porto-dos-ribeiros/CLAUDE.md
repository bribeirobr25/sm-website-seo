# CLAUDE.md — Porto dos Ribeiros

## Product type and stack

- **Product type:** **1 — Static info (multi-page)**. Landing + dedicated menu/visit/privacy pages. No forms, no DB, no system. CTAs are phone, WhatsApp, and Google Maps.
- **Stack tier:** **Tier 2 — Astro 6 + Tailwind v4**.
- **Phase:** Demo (`noindex` on every page; awaiting cold call).

The product type determines which standards docs apply at full strength vs N/A. For Type 1: `FORMS.md`, `ANALYTICS.md` events, `RELIABILITY.md` retry/degraded-mode are N/A. All universal-core docs apply. See `docs/design/TECH.md` §1.3 for the full activation matrix.

## What this project is

Porto dos Ribeiros — Brazilian restaurant, café and delivery on Rua da Constituição 982, Porto, Portugal.
Stack: Astro 6 + Tailwind v4 (Tier 2). Hosting: Vercel.
Live at: https://gastronomy-demo.vercel.app/ — demo phase (`noindex` on every page). Custom domain pending owner commit.

## Standards inheritance

This project inherits all standards from:
- `docs/design/DESIGN-BEST-PRACTICES.md` — UI/UX, typography, color, motion, anti-slop
- `docs/design/TECH.md` — stack, code organization, Configuration-as-Code, naming, deployment
- `docs/design/PERFORMANCE.md` — perf budgets, image rules, font self-hosting, LCP diagnostic
- `docs/design/ACCESSIBILITY.md` — WCAG 2.2 AA, contrast, keyboard, focus trap, reduced motion
- `docs/design/SECURITY.md` — TLS, headers, contact-form hardening, secret rotation, German legal
- `docs/design/RELIABILITY.md` — error handling, recovery, third-party degraded mode, monitoring, backup
- `docs/design/QUALITY.md` — `pnpm validate` pipeline, CI/CD, coverage targets, parity validators
- `docs/design/FORMS.md` — form validation, sanitization, honeypot, rate limit, idempotency
- `docs/design/ANALYTICS.md` — event tracking, consent gating, retainer reporting
- `docs/design/SEO.md` — local SEO, schema, GBP integration
- `docs/design/I18N.md` — multilingual setup (PT default + EN)
- `docs/design/CHECKLIST.md` — master pre-delivery gate + free-tool launch combo (run before launch)

Per-client overrides and additions are listed below and in `design.md` / `BRIEF.md`.

## Tech stack

- Framework: Astro 5+
- Styling: Tailwind CSS v4 via `@tailwindcss/vite` (NOT the deprecated `@astrojs/tailwind`)
- Language: TypeScript strict mode (`noUncheckedIndexedAccess`, no `any`)
- Icons: Lucide (`lucide-astro`)
- Hosting: Vercel
- Package manager: pnpm
- Linting: Biome
- Forms (if used): Zod for validation, Resend for delivery

## Quick commands

```bash
pnpm dev        # Dev server at http://localhost:4321
pnpm build      # Production build
pnpm preview    # Preview production build locally
pnpm lint       # Biome linting
pnpm format     # Biome formatting
```

**Run `pnpm validate` before declaring any change done.** This runs lint, then build, then prints the visual-validation checklist (the script lives at `scripts/visual-validate-reminder.mjs`). A green `pnpm validate` is the code half; you still owe the visual half.

## Validation — both halves are required

Code-level (the easy half):

```bash
pnpm validate     # = pnpm lint && pnpm build && visual reminder
```

Visual-level (the half that catches AI-template tells):

```bash
pnpm dev:host     # binds 0.0.0.0 so Docker MCP browser can reach it
# Then from Claude Code, use MCP browser tools to:
#   - browser_navigate http://host.docker.internal:4321/<path>
#   - browser_resize 375 812  → browser_take_screenshot fullPage:true
#   - browser_resize 768 1024 → screenshot
#   - browser_resize 1280 900 → screenshot
# Repeat for every page × every locale.
```

Cross-check every screenshot against:

- `docs/design/DESIGN-BEST-PRACTICES.md` **AI-template tells** subsection
- `docs/design/CHECKLIST.md` **Visual review at three viewports** subsection

If a tell is present, fix the source and re-run both halves. A change is not "done" until both halves are clean.

## Project structure

```
clients/porto-dos-ribeiros/
├── src/
│   ├── assets/
│   │   └── images/                  # all dish photos — go through Astro <Image> pipeline
│   ├── pages/
│   │   ├── index.astro              # PT home
│   │   ├── menu.astro               # PT menu (stub: "Em breve")
│   │   ├── visitar.astro            # PT visit (stub)
│   │   ├── politica-de-privacidade.astro
│   │   └── en/
│   │       ├── index.astro          # EN home
│   │       ├── menu.astro           # EN menu (stub: "Coming soon")
│   │       ├── visit.astro          # EN visit (stub)
│   │       └── privacy-policy.astro
│   ├── layouts/
│   │   └── BaseLayout.astro         # uses getImage() to derive OG/schema image URL
│   ├── components/
│   │   ├── sections/                # Hero, Hours, MenuPreview, Reviews, Visit, StubBody
│   │   ├── ui/                      # Button, Azulejo, StarRating, StickyWhatsApp
│   │   └── layout/                  # Header (with mobile nav strip), LangSwitcher, Footer
│   ├── i18n/locales/                # pt/{common,pages}.json, en/{common,pages}.json
│   ├── lib/
│   │   ├── seo/schema.ts            # Restaurant LocalBusiness — accepts imageUrl param
│   │   ├── site.ts                  # SITE constants + i18n helpers
│   │   └── metadata.ts
│   └── styles/
│       ├── tokens.css               # @theme {} — color + font tokens
│       └── global.css
├── public/
│   └── images/
│       └── logo.png                 # favicon only — everything else lives in src/assets/
├── scripts/
│   └── visual-validate-reminder.mjs # printed by `pnpm validate` after lint+build
├── astro.config.mjs                 # @tailwindcss/vite plugin; i18n PT default + EN; allowedHosts for MCP dev
├── biome.json                       # CSS files excluded; .astro overrides for noUnusedImports
├── tsconfig.json                    # strict + noUncheckedIndexedAccess
├── package.json                     # sharp as direct dep; pnpm.onlyBuiltDependencies includes sharp + esbuild
└── .nvmrc                           # 22.22.2
```

**Tailwind v4 note:** no `tailwind.config.ts`. Tokens live in `src/styles/tokens.css` under `@theme {}` and are consumed in templates as `var(--color-…)` or via Tailwind arbitrary-value syntax `bg-[var(--color-accent)]`. The `@tailwindcss/vite` plugin (registered in `astro.config.mjs`) compiles them.

## Business context

- **Business name:** Porto dos Ribeiros — Comida Brasileira
- **Type:** Brazilian restaurant + café + delivery
- **City / neighborhood:** Porto, Portugal — Rua da Constituição (Cedofeita / Paranhos border, residential)
- **Primary language:** PT (Brazilian-Portuguese voice)
- **Additional languages:** EN
- **Primary CTA:** WhatsApp order (`+351 963 349 411`) — also tap-to-call
- **Target audience:** Brazilian diaspora + Portuguese locals + English-speaking tourists
- **Google Business Profile:** 4.7★ / 287 reviews — URL to add once we have the cid link

See `BRIEF.md` for full business detail, hours, menu draft, and open questions.

## Design decisions

See `design.md` for palette (warm clay + cream + herb-green accent), typography (Fraunces + Manrope), and approved copy. Hero headline locked: **"Comida brasileira no Porto, do café da manhã ao jantar"** / **"Brazilian home cooking in Porto, from morning coffee to dinner"**.

## i18n setup

- Default locale: `pt` at `/` (no `/pt/` prefix)
- EN locale: `/en/`
- Astro built-in `i18n` config in `astro.config.mjs` with `defaultLocale: "pt"`, `locales: ["pt", "en"]`, `routing: { prefixDefaultLocale: false }`
- `<html lang>` per page (`pt`, `en`)
- `og:locale`: `pt_BR` for PT, `en_US` for EN
- hreflang: symmetric, x-default → `/`
- Translation files: `src/i18n/locales/[locale]/common.json` + `pages.json`, dot-notation keys
- **Voice:** PT uses Brazilian-Portuguese conventions (mostly matches IG bio) — not formal pt-PT

## SEO requirements

- Title format: `[Primary keyword] — Porto dos Ribeiros (Porto)` per SEO.md
- LocalBusiness schema with `@type: "Restaurant"`, `servesCuisine: "Brazilian"`, `priceRange: "€"`
- `openingHoursSpecification` — built from hours in BRIEF.md, **regenerated whenever owner confirms changes**
- `geo` — verified 2026-05-13 against OSM Nominatim (street + postal-code triangulation): **41.1626, -8.6107**. Previous guess was ~1.5 km west. Re-verify against the actual Google Maps pin once we have the API key for house-number precision.
- No `aggregateRating` rendered unless owner approves the 287/4.7 display
- Sitemap built; **not submitted to GSC until production**

## Environment variables

| Variable | Purpose | Where to set |
|----------|---------|--------------|
| `RESEND_API_KEY` | Email delivery for any contact form | Vercel project settings (user manages) |
| `CONTACT_EMAIL` | Recipient for form submissions | Vercel project settings (user manages) |
| `PUBLIC_SITE_URL` | Canonical origin used in schema + hreflang | `.env` local + Vercel |

No secrets in source. No `.env` committed.

## Demo vs production gates

**Demo phase (current):**
- `<meta name="robots" content="noindex, nofollow">` on every page
- Photos sourced from public `portodosribeiros.com` gallery, run through Astro's `<Image>` pipeline → responsive WebP (~50–200 KB per width)
- `dist/` total weight: **1.5 MB** (down from 30 MB)
- Geo verified via Nominatim (precise enough for the demo; re-verify pre-production)
- Menu shown without prices, with DRAFT tag on items not confirmed
- Sticky WhatsApp bubble + real mobile nav present
- No real form submission — WhatsApp / tel: only
- No GA4, no GSC verification, no sitemap submission
- Deployed manually by user to `*.vercel.app`

**Production gates (still open):**
- `noindex` removed from every page
- **Owner-supplied photos** replace the scraped ones (drop into `src/assets/images/`; pipeline does the rest)
- Confirmed menu + prices (or explicit decision to omit prices)
- Confirmed hours
- Confirmed NIF + CAE in footer (currently italic "to confirm" placeholder)
- Geo re-verified against actual Google Maps pin (Nominatim is centroid-precise, GMaps Geocoding is house-number-precise)
- `livroreclamacoes.pt` link in footer (already present)
- GA4 + GSC connected and verified
- Sitemap submitted
- GBP updated with website URL
- Full `docs/design/CHECKLIST.md` run top to bottom

## Delivery checklist (slim summary — full list in CHECKLIST.md)

- [ ] `pnpm validate` clean (lint + build pass; visual reminder printed)
- [ ] Screenshots captured at 375/768/1280 for every page × every locale
- [ ] PageSpeed mobile ≥ 90 on live domain
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] Phone is `tel:`, WhatsApp is `https://wa.me/`, map links to Google Maps
- [ ] Hours confirmed and identical across site + schema + GBP
- [ ] hreflang symmetric (PT ↔ EN, x-default → PT)
- [ ] PT and EN tested at 375px — no overflow in PT (longer language)
- [ ] PT legal footer (legal name + NIF + CAE + address) present
- [ ] livroreclamacoes.pt link present
- [ ] `noindex` removed from every page
- [ ] Custom domain wired (manual)
- [ ] Sitemap submitted to GSC (manual)
- [ ] GBP updated with website URL (manual)

## How to work on this project

- **No auto-commits, no auto-pushes, no auto-deploys.** User runs git + Vercel manually.
- Atomic commits with English messages — staged and reported, not committed by Claude.
- Run `pnpm validate` before declaring any change done. The script chains `pnpm lint && pnpm build` and then prints the visual-validation checklist (URLs × viewports × AI-template tells). A green code run is half the gate; the visual half is still required.
- Write the plan first for any multi-step change. Get approval. Then execute.
- Never invent client content. Anything unconfirmed gets a `DRAFT` tag in the brief and a visible placeholder on the page.
- Code in English (variable names, components, comments). Content/UI strings live in i18n JSON, never inlined.
