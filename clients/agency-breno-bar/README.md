# agency-breno-bar — the agency's own marketing site

**This is a live client build, not a scaffold.** It's the agency's own studio website (display brand **BAR Agency**; the folder slug, Vercel URL, and email keep the `breno-bar` form), built from `scaffolds/astro-tier2/`. Tier 2 · Astro 6 + Tailwind v4 + Sentry · trilingual EN/DE/pt-BR · dark **"Berlin night"** register (re-skinned 2026-06-13 from the original Apple-inspired light register; legal pages stay light — see `docs/clients/agency-breno-bar/design.md` § "Berlin night").

**Live (noindex):** https://agency-breno-bar.vercel.app — the **deployed** site still shows the Apple-light register; the Berlin-night redesign is in the working tree, **not yet committed/deployed**.

## Run locally

```bash
pnpm install
cp .env.example .env.local        # optional — see env note below
pnpm dev                          # http://localhost:4321
pnpm validate                     # lint + translation parity + build
```

Requires Node ≥ 22.12 and pnpm. The two free-tool endpoints + the contact form are SSR (`prerender = false`); they run in `pnpm dev`.

**Env vars:** the website-scan tool works with no keys (Google PSI runs keyless; `PAGESPEED_API_KEY` only raises quota). The contact + gbp-check forms return a friendly 503 until `RESEND_API_KEY` + `RESEND_FROM` + `NOTIFICATION_EMAIL` are set — the forms still render and validate. Full inventory in `.env.example`.

## Routes

- **Marketing core** (×3 locales — EN at root, `/de`, `/pt-br`): `/` · `/services` (4-offering overview) + `/services/[slug]` (detail pages for Web Design + SEO only) · `/portfolio` + `/portfolio/[slug]` · `/about` · `/contact` · `/privacy` · `/imprint` · `/contract` (internal, unlinked + noindex)
- **Inbound funnel** (added 2026-06-04 — see `docs/benchmark/_analysis.md`): `/pricing` · `/website-check` · `/tools` + `/tools/website-scan` + `/tools/gbp-check` (×3 locales)
- **Local-SEO pages** (German only): `/webdesign-berlin` + 24 `/webdesign-berlin/[slug]` (4 verticals × 6 Bezirke)
- **SSR endpoints:** `/api/contact` · `/api/site-scan` · `/api/gbp-check`

## Documentation

The real per-client docs (NOT this code-folder README) are the source of truth:

- **`docs/clients/agency-breno-bar/CLAUDE.md`** — stack, page tree, config-as-code, imported components, DRAFT items, the dated change sections (2026-06-04 inbound-funnel · 2026-06-09→12 rebrand + pricing/contract overhaul). **Read this first.**
- **`docs/clients/agency-breno-bar/BRIEF.md`** — positioning, open questions (incl. funnel DRAFTs #7–#13), decisions log
- **`docs/clients/agency-breno-bar/design.md`** — palette, typography, composition
- **`docs/clients/agency-breno-bar/PRODUCTION-CUTOVER.md`** — the go-live checklist (SEO gates, keyword audit, schema)
- **`docs/benchmark/_analysis.md`** — the inbound-funnel rationale + roadmap (F1–F9)

## Status

`noindex` until DRAFT items resolve (legal + domain + Resend, plus funnel DRAFTs — see BRIEF.md). Per root `CLAUDE.md` demo discipline, never flip indexing without owner confirmation.
