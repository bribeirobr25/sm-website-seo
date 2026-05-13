# Porto dos Ribeiros — website

Brazilian restaurant on Rua da Constituição 982, Porto, Portugal.
Bilingual (PT-BR voice / EN). Astro 6 + Tailwind v4. Hosted on Vercel (deploys handled manually).

This is a client project of the **sm-website-seo** agency. All standards are inherited from the repo root.

## Where the canonical docs live

| Want to know… | Read… |
|---|---|
| What the agency is and how this client fits | `../../CLAUDE.md` (repo root) |
| Per-client commands, structure, validation flow | `docs/clients/porto-dos-ribeiros/CLAUDE.md` |
| Business context, contacts, scope, open questions | `docs/clients/porto-dos-ribeiros/BRIEF.md` |
| Aesthetic direction, palette, copy, voice | `docs/clients/porto-dos-ribeiros/design.md` |
| Stack-wide design + tech + SEO + i18n + checklist standards | `docs/design/*.md` |

## Quick start

```bash
nvm use            # → 22.22.2 (via .nvmrc)
pnpm install
pnpm dev           # http://localhost:4321
pnpm dev:host      # 0.0.0.0 for Docker MCP browser at host.docker.internal
pnpm build         # Static output → dist/
pnpm validate      # lint + build + visual-review reminder (run before declaring done)
```

## What this project is right now

Demo phase — `noindex` on every page, deployed only to a `*.vercel.app` preview. Owner contact hasn't happened yet. See `docs/clients/porto-dos-ribeiros/BRIEF.md` for the cold-call talking points and the list of items still to confirm with the owner.

The structure is production-ready (image pipeline wired, schema valid, mobile parity, etc.). What's missing is **content the owner has to give us**: real photos, confirmed menu + prices, confirmed hours, NIF + CAE, permission to display review quotes. See the "Production gates (still open)" list in `docs/clients/porto-dos-ribeiros/CLAUDE.md`.

## Working rules

- No auto-commits, no auto-pushes, no auto-deploys. Git and Vercel are handled manually.
- `pnpm` only — never `npm`, never `yarn`.
- Never invent client content. Anything unconfirmed gets a DRAFT tag.
- See the inherited `docs/design/DESIGN-BEST-PRACTICES.md` (anti-slop checklist / AI-template tells) and `docs/design/CHECKLIST.md` before signing off any change.
