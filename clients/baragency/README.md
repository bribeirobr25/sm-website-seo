# baragency — the agency's own marketing site

**This is a live client build, not a scaffold.** It's the agency's own studio website (display brand **BAR Agency**; folder/package slug `baragency`, URL `bar-agency.vercel.app`, email `hello@bar-agency.com`), built from `scaffolds/astro-tier2/`. Tier 2 · Astro 6 + Tailwind v4 + Sentry · trilingual EN/DE/pt-BR · dark **"Berlin night"** register (re-skinned 2026-06-13 from the original Apple-inspired light register; legal pages stay light — see `docs/clients/baragency/design.md` § "Berlin night").

**Live (noindex):** https://bar-agency.vercel.app — the Berlin-night redesign. Single GitHub-connected Vercel project `bar-agency` (auto-deploys `main`; Root Directory = `clients/baragency`); the previous Vercel project was deleted 2026-06-14.

## Run locally

```bash
pnpm install
cp .env.example .env.local        # optional — see env note below
pnpm dev                          # http://localhost:4321
pnpm validate                     # lint + translation parity + build
```

Requires Node ≥ 22.12 and pnpm. The two free-tool endpoints + the contact form are SSR (`prerender = false`); they run in `pnpm dev`.

**Env vars:** none are set, and **none are planned for now** (permanent noindex demo). The website-scan tool works with no keys (Google PSI runs keyless). The contact + gbp-check forms render + validate but return a friendly 503 on submit (no `RESEND_API_KEY` / `RESEND_FROM` / `NOTIFICATION_EMAIL`). Full inventory in `.env.example`.

## Routes

- **Marketing core** (×3 locales — EN at root, `/de`, `/pt-br`): `/` · `/services` (4-offering overview) + `/services/[slug]` (detail pages for Web Design + SEO only) · `/portfolio` + `/portfolio/[slug]` · `/about` · `/contact` · `/privacy` · `/imprint` · `/contract` (internal, unlinked + noindex)
- **Inbound funnel** (added 2026-06-04 — see `docs/benchmark/_analysis.md`): `/pricing` · `/website-check` · `/tools` + `/tools/website-scan` + `/tools/gbp-check` (×3 locales)
- **Local-SEO pages** (German only): `/webdesign-berlin` + 24 `/webdesign-berlin/[slug]` (4 verticals × 6 Bezirke)
- **SSR endpoints:** `/api/contact` · `/api/site-scan` · `/api/gbp-check`

## Documentation

The real per-client docs (NOT this code-folder README) are the source of truth:

- **`docs/clients/baragency/CLAUDE.md`** — stack, page tree, config-as-code, imported components, DRAFT items, the dated change sections (2026-06-04 inbound-funnel · 2026-06-09→12 rebrand + pricing/contract overhaul). **Read this first.**
- **`docs/clients/baragency/BRIEF.md`** — positioning, open questions (incl. funnel DRAFTs #7–#13), decisions log
- **`docs/clients/baragency/design.md`** — palette, typography, composition
- **`docs/clients/baragency/PRODUCTION-CUTOVER.md`** — the go-live checklist (SEO gates, keyword audit, schema)
- **`docs/benchmark/_analysis.md`** — the inbound-funnel rationale + roadmap (F1–F9)

## Status

**Permanent noindex demo** at `bar-agency.vercel.app` — no custom domain, real email, or env vars for now (see BRIEF.md). Per root `CLAUDE.md` demo discipline, never flip indexing without owner confirmation.
