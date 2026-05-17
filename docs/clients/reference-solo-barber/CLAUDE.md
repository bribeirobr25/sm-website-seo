# CLAUDE.md — Reference: Solo Barber (Tier 2 / Type 1 / BR-LGPD)

**Codebase:** `clients/reference-solo-barber/`
**Vertical:** Beauty (sub-archetype: Modern urban barber, dark — per `docs/design/templates/beauty.md` §6)
**Stack:** Astro 6 + Tailwind v4 (CSS `@theme {}` tokens) + Biome + Sentry (`@sentry/astro`)
**Market:** Brazil (LGPD enforced)
**Status:** reference implementation — agency canonical worked example, not a real client.

---

## What this is

One of two reference implementations shipped in Batch 3 of the agency-standards expansion. The other is `clients/reference-studio-booking/` (Tier 3 / Type 3 / DE-DSGVO). Together they cover the spread of the agency stack — Tier 2 + Tier 3, BR + DE jurisdictions, Type 1 (static info) + Type 3 (booking with own DB).

Use this scaffold as the **starting point** when a real solo-barber or barbershop client signs:

```bash
cp -r clients/reference-solo-barber clients/[real-client-slug]
# Then:
# 1. Update SITE constants in src/lib/site.ts with real values
# 2. Replace <Placeholder> components with real photos
# 3. Replace placeholder Trinks URL with real client URL
# 4. Set real Sentry DSN + Vercel env vars
# 5. Flip robots.txt to allow + add sitemap line + remove noindex
# 6. Run docs/design/CHECKLIST.md top to bottom
```

---

## File map

```
clients/reference-solo-barber/
├── package.json              ← Astro 6 + Tailwind v4 + @sentry/astro + @astrojs/sitemap
├── astro.config.ts           ← Tailwind via @tailwindcss/vite plugin · Sentry integration · sitemap
├── tsconfig.json             ← astro/tsconfigs/strict · @/* path alias
├── biome.json                ← agency linting + formatting rules
├── vercel.json               ← 6 security headers (per SECURITY.md) · cache headers · clean URLs
├── .github/workflows/ci.yml  ← pnpm lint + build on push/PR (per INFRASTRUCTURE.md)
├── .env.example              ← Sentry env var stubs
├── README.md
├── public/
│   ├── favicon.svg           ← Primary favicon (TE monogram)
│   └── robots.txt            ← Disallow: / (demo phase — flip at production cutover)
└── src/
    ├── styles/
    │   ├── tokens.css        ← Tailwind v4 @theme {} block — palette tokens (warm dark + amber)
    │   └── global.css        ← Reset, base typography, reduced-motion respect
    ├── lib/
    │   ├── site.ts           ← Configuration-as-Code: SITE constant (business data + KPI contract)
    │   ├── consent.ts        ← LGPD consent record + applyConsent() script-upgrade pattern
    │   ├── analytics.ts      ← Consent-gated track() helper, EVENTS canonical constants
    │   └── seo/schema.ts     ← BarberShop JSON-LD generator
    ├── layouts/
    │   └── BaseLayout.astro  ← <head> + OG + Twitter Cards + JSON-LD + consent-gated GA4 script
    ├── components/
    │   ├── layout/
    │   │   ├── Header.astro  ← Logo + phone CTA, sticky
    │   │   └── Footer.astro  ← LGPD legal disclosure (Razão Social + MEI + address) · manage-cookies link
    │   ├── ui/
    │   │   ├── Button.astro       ← primary / secondary / ghost variants
    │   │   ├── Placeholder.astro  ← Visible missing-asset slot (TECH.md §Image-extraction)
    │   │   ├── ShareButton.astro  ← WhatsApp + Instagram (copy-fallback) + Copy-link
    │   │   └── CookieBanner.astro ← LGPD-aligned consent banner ("Reject all" parity)
    │   └── sections/
    │       ├── Hero.astro      ← Two-column · headline + tagline + Trinks CTA + WhatsApp · placeholder photo
    │       ├── Services.astro  ← 4-service card grid · service_viewed events fire on viewport
    │       ├── About.astro     ← Founder narrative · placeholder portrait
    │       ├── Gallery.astro   ← 6 placeholder tiles · gallery_viewed event on 50% viewport
    │       ├── Reviews.astro   ← Featured quote · aggregateRating gated on owner approval
    │       └── Visit.astro     ← Address + hours table + CTA buttons + share row + map link
    └── pages/
        ├── index.astro                  ← Home (Hero → Services → About → Gallery → Reviews → Visit)
        ├── politica-de-privacidade.astro ← LGPD 7-section structure (per LEGAL.md §BR)
        ├── 404.astro
        └── 500.astro
```

---

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # full type-check + Astro build
pnpm lint         # Biome lint
pnpm validate     # lint + build
```

---

## Rollback drill

(To be executed once before first production deploy — log the result here.)

5-minute restore from Vercel rollback:
1. Vercel dashboard → reference-solo-barber → Deployments
2. Find last known-good deployment (green checkmark + production tag)
3. Click `⋯` → Promote to Production
4. Verify production URL serves the rolled-back version

**Drill log:**
- [ ] First drill not yet executed — run before initial production cutover.

---

## DRAFT items — owner-confirm before production launch

These items have placeholder values. Replace them with owner-confirmed real data before flipping `noindex` off.

- [ ] Razão Social + MEI/CNPJ (currently `XX.XXX.XXX/0001-XX`)
- [ ] Data Controller email (`contato@barbearia-tio-edu.com.br` — placeholder)
- [ ] Phone + WhatsApp number (`+55 11 99999-9999` — placeholder)
- [ ] Address — full street number + postal code
- [ ] Geo coordinates — verify against Google Maps pin
- [ ] Real Trinks deep-link slug (`trinks.com/barbearia-tio-edu` — placeholder)
- [ ] All service prices marked `confirmed: false`
- [ ] Real photos in 1 Hero + 1 About + 6 Gallery slots (currently `<Placeholder>`)
- [ ] Review approval (`approvedForDisplay: false` until owner approves)
- [ ] Real Instagram handle
- [ ] Real Sentry DSN + project + auth token in Vercel env
- [ ] Real GA4 measurement ID (`G-XXXXXX` placeholder in BaseLayout.astro)
- [ ] Real domain (`barbearia-tio-edu.com.br` — placeholder)

---

## What's wired vs deferred

| Layer | Status |
|---|---|
| Tailwind v4 via `@tailwindcss/vite` + tokens in `@theme {}` | ✅ |
| LGPD-aligned consent banner | ✅ |
| Consent-gated KPI events | ✅ |
| Política de Privacidade (LGPD 7-section) | ✅ |
| Razão Social + MEI footer disclosure | ✅ (placeholders) |
| Sentry server-side | ✅ (env stubs in `.env.example`) |
| OG + Twitter Cards | ✅ |
| ShareButton (WhatsApp + IG + Copy) | ✅ |
| BarberShop JSON-LD | ✅ |
| Trinks deep-link | ✅ (placeholder URL) |
| 404 + 500 branded pages | ✅ |
| `vercel.json` 6 security headers | ✅ |
| GitHub Actions CI | ✅ |
| `robots.txt` Disallow: / (demo) | ✅ |
| Real photos | ❌ — placeholder slots |
| Real legal IDs / phone / email | ❌ — placeholders |
| Visual / browser verification | ❌ — deferred to human reviewer |
| `pnpm install` + `pnpm build` execution | ❌ — not run yet; agency reviewer to verify first |
