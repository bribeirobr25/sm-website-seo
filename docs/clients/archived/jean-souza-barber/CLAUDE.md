# CLAUDE.md — Jean Souza Barbearia

## Product type and stack

- **Product type:** **1 — Static info (single page)**. Hero · Sobre · Serviços · Galeria · Avaliações · Endereço/Horas · CTA, all on one scrollable page. Plus `/politica-de-privacidade` (LGPD). No forms, no DB, no system. Primary CTAs: WhatsApp + deep-link to existing Trinks booking page.
- **Stack tier:** **Tier 2 — Astro 6 + Tailwind v4**.
- **Phase:** Portfolio build (owner verbally agreed) — domain-cost-only engagement per root `CLAUDE.md` portfolio strategy.

The product type determines which standards docs apply at full strength vs N/A. For Type 1: `FORMS.md` and `RELIABILITY.md` retry/degraded-mode are N/A. All universal-core docs apply. See `docs/design/TECH.md` §1.3 for the full activation matrix.

## What this project is

Jean Souza Barbearia — single-chair barber (Jean + Anderson, possibly Diegão) at Av. Sete de Setembro 325, Santa Rosa, Niterói, RJ. 10+ years in business. 5.0★ from 52 Google reviews.
Stack: Astro 6 + Tailwind v4 (Tier 2). Hosting: Vercel.
Current URL: pending — will be `jeansouzabarbearia.com.br` (or owner-controlled equivalent) once domain is confirmed. Demo will live at a `*.vercel.app` URL with `noindex` until owner approves launch.

See `BRIEF.md` for full business detail, audience, services, hours, and the 12 open questions for the owner conversation.

## Standards inheritance

This project inherits all standards from:
- `docs/design/DESIGN-BEST-PRACTICES.md` — UI/UX, typography, color, motion, anti-slop
- `docs/design/TECH.md` — stack, code organization, Configuration-as-Code, naming, deployment
- `docs/design/PERFORMANCE.md` — perf budgets, image rules, font self-hosting, LCP diagnostic
- `docs/design/ACCESSIBILITY.md` — WCAG 2.2 AA, contrast, keyboard, focus trap, reduced motion
- `docs/design/SECURITY.md` — TLS, security headers, secret rotation. **§6.5 LGPD/BR legal applies for this build.**
- `docs/design/RELIABILITY.md` — error handling, third-party degraded mode (Trinks link), monitoring, backup
- `docs/design/QUALITY.md` — `pnpm validate` pipeline (Tier 2), CI/CD, coverage targets
- `docs/design/INFRASTRUCTURE.md` — agency-template scaffold drop-in (`vercel.json` + 404/500 + CI workflow + uptime monitoring). **Phase A blocker per audit; drop-in pending.**
- `docs/design/ANALYTICS.md` — event tracking, LGPD consent gating, retainer reporting hooks
- `docs/design/SEO.md` — local SEO, schema (`BarberShop`), GBP integration
- `docs/design/CHECKLIST.md` — master pre-delivery gate + leanest free launch combo

**N/A for this build (Type 1):**
- `docs/design/FORMS.md` — no contact form (WhatsApp + Trinks deep-link only)
- `docs/design/I18N.md` — PT-BR only, no multilingual setup

**Archetype reference:** `docs/design/templates/beauty.md` Archetype C (Solo / Atmospheric Trust-Led).

## Tech stack

- Framework: Astro 6
- Styling: Tailwind CSS v4 via `@tailwindcss/vite` (NOT the deprecated `@astrojs/tailwind`)
- Language: TypeScript strict mode (`noUncheckedIndexedAccess`, no `any`)
- Icons: Lucide (`lucide-astro`)
- Fonts: Self-hosted via `@fontsource-variable/fraunces` + `@fontsource-variable/manrope`
- Hosting: Vercel
- Package manager: pnpm
- Linting: Biome

### `package.json` minimum scaffold

```json
{
  "engines": {
    "node": ">=22.12.0",
    "pnpm": ">=10.0.0"
  },
  "packageManager": "pnpm@10.33.2"
}
```

Full scripts block per `QUALITY.md` §2 (Tier 2 `pnpm validate` pipeline).

## Quick commands

```bash
pnpm dev          # Dev server at http://localhost:4321
pnpm dev:host     # Same, bound to 0.0.0.0 (for Docker MCP browser via host.docker.internal)
pnpm build        # Production build
pnpm preview      # Preview production build locally
pnpm lint         # Biome linting
pnpm format       # Biome formatting
pnpm validate     # lint + build + visual reminder (Tier 2 pipeline)
```

**Run `pnpm validate` before declaring any change done.** The script chains `pnpm lint && pnpm build` and then prints the visual-validation checklist (URLs × viewports × AI-template tells). A green code run is half the gate; the visual half is still required.

## Validation — both halves are required

Code-level (the easy half):

```bash
pnpm validate     # = pnpm lint && pnpm build && visual reminder
```

Visual-level (the half that catches AI-template tells):

```bash
pnpm dev:host     # binds 0.0.0.0 so Docker MCP browser can reach it
# Then use MCP browser tools to:
#   - browser_navigate http://host.docker.internal:4321/
#   - browser_resize 375 812  → browser_take_screenshot fullPage:true
#   - browser_resize 768 1024 → screenshot
#   - browser_resize 1280 900 → screenshot
# Repeat for `/politica-de-privacidade`.
```

Cross-check every screenshot against:
- `docs/design/DESIGN-BEST-PRACTICES.md` AI-template tells subsection
- `docs/design/CHECKLIST.md` Visual review at three viewports subsection
- `docs/clients/jean-souza-barber/design.md` Anti-slop guardrails section

If a tell is present, fix the source and re-run both halves. A change is not "done" until both halves are clean.

## Project structure (target — to be created during scaffold)

```
clients/jean-souza-barber/
├── src/
│   ├── assets/
│   │   └── images/                  # hero, portrait, portfolio cuts, storefront — all through Astro <Image>
│   ├── pages/
│   │   ├── index.astro              # single-page PT-BR site
│   │   └── politica-de-privacidade.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── components/
│   │   ├── sections/                # Hero, SobreJean, Servicos, Galeria, Avaliacoes, Visitar
│   │   ├── ui/                      # Button, StarRating, StickyWhatsApp, StickyAgendar
│   │   └── layout/                  # Header, Footer
│   ├── lib/
│   │   ├── seo/schema.ts            # BarberShop LocalBusiness schema
│   │   ├── site.ts                  # SITE constants
│   │   └── metadata.ts
│   └── styles/
│       ├── tokens.css               # @theme {} — color + font tokens per design.md
│       └── global.css
├── public/
│   └── favicon.png
├── astro.config.mjs                 # @tailwindcss/vite plugin; allowedHosts for MCP dev
├── biome.json
├── tsconfig.json                    # strict + noUncheckedIndexedAccess
├── package.json                     # sharp as direct dep
└── .nvmrc                           # 22.22.2
```

**Tailwind v4 note:** no `tailwind.config.ts`. Tokens live in `src/styles/tokens.css` under `@theme {}` (see `design.md` for the locked palette) and are consumed in templates as `var(--color-...)` or via Tailwind arbitrary-value syntax `bg-[var(--color-accent)]`. The `@tailwindcss/vite` plugin (registered in `astro.config.mjs`) compiles them.

## Business context

- **Business name:** Jean Souza Barbearia
- **Type:** Single-chair barber shop (Jean + Anderson)
- **City / neighborhood:** Niterói, RJ — Santa Rosa / Icaraí, Av. Sete de Setembro 325
- **Primary language:** PT-BR
- **Additional languages:** none
- **Primary CTA:** Trinks booking deep-link + WhatsApp (`+55 21 97552-9808`)
- **Target audience:** Long-term loyal clients (families) + new clients in Icaraí/Niterói
- **Google Business Profile:** 5.0★ / 52 reviews — URL to add once confirmed
- **Instagram:** `@jeansouzabarbearia` (2.5K followers)
- **Trinks booking:** `trinks.com/jean-souza-barbear...` (confirm exact slug)

See `BRIEF.md` for full detail and open questions.

## Design decisions

See `design.md` for:
- Archetype: Beauty / **Modern Urban Barber (dark)** — new sub-archetype in `templates/beauty.md` §6, Jean as reference implementation
- Palette: **dark near-black `#131418` + white + saturated red `#dc2626`** (tier 3 brand-sourced from the Trinks logo, 2026-05-15 — supersedes the earlier tier-5 cream/caramel direction)
- Typography: Fraunces (display) + Manrope (body), self-hosted
- Hero headline (DRAFT): *"Jean Souza Barbearia · 10 anos cuidando do seu corte em Niterói."* (warm copy retained; only the visual register changed dark)
- Section-by-section plan and anti-slop guardrails

## SEO requirements

- Title format: `[Primary keyword] — Jean Souza Barbearia (Niterói)` per `SEO.md`
- LocalBusiness schema with `@type: "BarberShop"`, `priceRange: "$$"` (placeholder)
- `openingHoursSpecification` — built from confirmed hours, **regenerated whenever owner confirms changes**
- `geo` — to verify against Google Maps pin (Av. Sete de Setembro 325, Santa Rosa, Niterói)
- `aggregateRating` rendered **only if owner approves** the 5.0/52 display
- Sitemap built; **not submitted to GSC until production launch**

## Environment variables

| Variable | Purpose | Where to set |
|----------|---------|--------------|
| `PUBLIC_SITE_URL` | Canonical origin used in schema + OG metadata | `.env` local + Vercel |

No `RESEND_API_KEY` or `CONTACT_EMAIL` needed — Type 1 build, no contact form. If analytics is added later, GA4 measurement ID will go here.

No secrets in source. No `.env` committed.

## Demo vs production gates

**Demo phase (current):**
- `<meta name="robots" content="noindex, nofollow">` on every page
- Photos sourced from Instagram `@jeansouzabarbearia` with owner permission, run through Astro's `<Image>` pipeline → responsive WebP (~50–200 KB per width)
- Services shown without prices, with DRAFT tag on items not confirmed
- Sticky WhatsApp bubble + "Agendar" pill on mobile
- No real form submission — WhatsApp + Trinks + `tel:` only
- No GA4, no GSC verification, no sitemap submission
- Deployed manually by user to `*.vercel.app`

**Production gates (still open — see `BRIEF.md` open-questions section):**
- `noindex` removed from every page
- **Owner-supplied photos** preferred over scraped IG
- Confirmed services + prices (or explicit decision to omit)
- Confirmed hours (Tue–Sat 09:00–18:00 per IG bio — needs owner sign-off)
- Confirmed MEI/CNPJ + Razão Social in footer
- Confirmed LGPD data-controller email
- Confirmed 4 review quotes for site use
- Confirmed `aggregateRating` display decision
- Geo verified against actual Google Maps pin
- GA4 + GSC connected and verified
- Sitemap submitted
- GBP updated with website URL
- Full `docs/design/CHECKLIST.md` run top to bottom

## Reliability — restore procedure

5-minute restore from Vercel rollback per `RELIABILITY.md` §10:
1. Vercel dashboard → project → Deployments
2. Find the last known-good deployment
3. Click `⋯` → Promote to Production
4. Verify the production URL serves the rolled-back version

No DB to restore (Type 1). Trinks is a third-party dependency — if Trinks is down, the WhatsApp CTA remains the working fallback (matches `RELIABILITY.md` third-party degraded mode).

## Uptime monitoring

UptimeRobot (or Better Stack) ping every 5 min on the homepage. Alerts to agency email + WhatsApp. **Set up before flipping `noindex` off** per `RELIABILITY.md` §9.

## Delivery checklist (slim summary — full list in CHECKLIST.md)

- [ ] `pnpm validate` clean (lint + build pass; visual reminder printed)
- [ ] Screenshots captured at 375/768/1280 for index + privacy page
- [ ] PageSpeed mobile ≥ 90 on live domain
- [ ] LCP < 2.5s, CLS < 0.1
- [ ] Phone is `tel:`, WhatsApp is `https://wa.me/`, map links to Google Maps
- [ ] Trinks deep-link tested and opens the correct booking page
- [ ] Hours confirmed and identical across site + schema + GBP
- [ ] PT-BR readability test at 375px — no overflow, line lengths reasonable
- [ ] LGPD footer (Razão Social + MEI/CNPJ + address) present
- [ ] Política de Privacidade page present with data-controller contact
- [ ] `noindex` removed from every page
- [ ] Custom domain wired (manual)
- [ ] Sitemap submitted to GSC (manual)
- [ ] GBP updated with website URL (manual)

## How to work on this project

- **No auto-commits, no auto-pushes, no auto-deploys.** User runs git + Vercel manually.
- Atomic commits with English messages — staged and reported, not committed by Claude.
- Run `pnpm validate` before declaring any change done.
- Write the plan first for any multi-step change. Get approval. Then execute.
- Never invent client content. Anything unconfirmed gets a `DRAFT` tag in `BRIEF.md` and a visible placeholder on the page.
- Code in English (variable names, components, comments). Content/UI strings live in PT-BR directly in the templates (no i18n indirection — single-locale build).
- Reuse the Porto codebase as a reference for: Tailwind v4 setup, font self-hosting, Astro image pipeline, schema scaffolding. Do **not** copy Porto's PT/EN i18n setup — Jean is PT-BR-only.

---

*Portfolio piece #1 — the credibility wrapper around 10 years of barber work. Don't over-engineer; show Jean as he is and let the track record carry the conversion.*
