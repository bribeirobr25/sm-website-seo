# Astro Tier 2 scaffold

**Agency canonical starter — Tier 2 (Astro 6 + Tailwind v4 + Sentry).**

Use this scaffold when starting a new Type 1 info-site or Type 2 info-plus-contact-form client per the decision matrix at `docs/design/TECH.md` §1.

## How to use this scaffold

```bash
cp -r scaffolds/astro-tier2 clients/[client-slug]
cd clients/[client-slug]
pnpm install
cp .env.example .env.local                  # populate with real keys later
pnpm dev                                    # http://localhost:4321
```

Then per root `CLAUDE.md` Step 3 follow-ups:
1. Rename `package.json` `"name"` field → `[client-slug]`
2. Populate `src/lib/site.ts` from `src/lib/site.example.ts` (rename the file, fill TODO markers, mark each field `confirmed: true` only after owner confirmation)
3. Override `src/styles/tokens.css` palette per the matching `docs/design/templates/[vertical].md` archetype
4. Declare any canonical components imported from `docs/design/components/_impl/` in the client's `docs/clients/[slug]/CLAUDE.md` per `TECH.md` §20

## What's pre-wired

- **Astro 6 + Tailwind v4** with `@theme {}` token block (no `tailwind.config.ts`)
- **Sentry** server-only init (`@sentry/astro` v8) — `send_default_pii: false` is non-negotiable per `LEGAL.md`
- **Canonical agency tokens** in `src/styles/tokens.css`: motion (×5) · easing (×4) · tracking (×3) · radii (×5) · neutral default palette
- **Consent layer** (`src/lib/consent.ts` + `CookieBanner.astro`) — DSGVO/LGPD universal; opt-in, "Reject all" parity per `LEGAL.md` §Cookie consent banner
- **Analytics** (`src/lib/analytics.ts`) — `window.track()` exposed; consent-gated GA4 script upgrade pattern
- **Required public files** — `favicon.svg`, `robots.txt` (set to `Disallow: /` for demo phase; flip at production cutover)
- **Universal Button + Placeholder + CookieBanner** primitives in `src/components/ui/`
- **Content-neutral Header + Footer + BaseLayout** ready to receive client identity
- **`vercel.json`** with 6 security headers + cache rules per `INFRASTRUCTURE.md`
- **`.github/workflows/ci.yml`** with `pnpm validate` gate

## What must NOT be in this scaffold

> Per the 2026-05-19 restructure R17 (scaffold purity):

- **No client-specific copy** — every page is a placeholder until you swap in real content
- **No client-specific palette values** — `tokens.css` ships a neutral starting palette; override per the vertical template
- **No client photos** — `Placeholder.astro` slots only; real assets land in `public/` per client
- **No client domain** — `astro.config.ts` uses `https://example.com`; replace before production cutover

If you find yourself adding any of the above directly to the scaffold (rather than to a `clients/[slug]/` derivative), you're degrading the scaffold for every future client. The scaffold-purity audit (PENDING.md, quarterly 2026-08-19) catches this drift.

## After copying — pre-flight setup

See `docs/design/CHECKLIST.md` §0 Pre-flight for the per-client setup steps before going live: real `SITE` data, real legal compliance, real `noindex` flip, real domain, real sitemap submission, real GBP wiring.

## Canonical components — opt-in imports

The **32 canonical components + 6 universal primitives** live at `docs/design/components/_impl/`. The authoritative tiered index, build-dependency graph, and per-vertical applicability are in `docs/design/components/README.md` — import only what the client's vertical calls for per each `docs/design/components/[component].md` §1.

## Tier 2 isn't enough?

If the client needs dynamic features (booking DB, transactional flows, multi-role auth), use `scaffolds/nextjs-tier3/` instead. The decision tree is in `docs/design/TECH.md` §1.
