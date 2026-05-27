# SALES.md — agency sales workflow (public stub)

**This document is the public stub.** The full internal playbook — with objection-handling scripts, cold-call openings, retainer-tier negotiation terms, payment-terms language, and tactical specifics — lives at `docs/design/private/SALES.md` and is intentionally gitignored.

**Why a public stub?** Several docs cross-reference `SALES.md` (template playbooks, CITATIONS.md, KPI.md, CLAUDE.md). This stub absorbs those references for external readers. Internal contributors see the full version locally.

## What's public about the agency's sales approach

The methodology is "**demo-first cold outreach**" — explained at length in root `CLAUDE.md` §"How clients are acquired":

1. Find a small Berlin local business with a weak or missing web presence
2. Build a demo site first using publicly-available info
3. Deploy to Vercel under a `vercel.app` subdomain with `noindex`
4. Call the owner, show them the demo URL, schedule a meeting if interested
5. If they commit, sign a simple agreement, get real content/photos, move to production

The agency runs three core services + one optional: **Website · SEO · Google Business Profile · Social media** (optional). Pricing is published in root `CLAUDE.md` §"Pricing model" as an indicative-range matrix:

- Type 1 single-page: €500–800 one-time + €150–300/mo retainer
- Type 1 multi-page: €800–1.500 one-time + €150–300/mo
- Type 2 + contact form: €1.200–2.000 + €200–400/mo
- Type 3 + booking system: €2.500–5.000 + €300–600/mo
- Type 4 transactional: €4.000–8.000 + €400–800/mo
- Type 5 application: quote per project

**Always sell a retainer alongside the one-time build.** Without ongoing maintenance, a site decays.

## What lives in the internal playbook

The private version covers, with worked examples:

- Per-vertical pitch openings (gastronomy, beauty, professional services, etc.)
- Objection-handling scripts (price, timeline, "we already have a website", "we use Wix")
- Retainer-tier disambiguation (when to recommend basic, growth, premium)
- Contract + payment-terms boilerplate
- Pitch-call agenda + qualification questions
- Handoff checklist when a prospect signs

## Cross-references in committed docs

When a doc says "see `SALES.md` §The pitch call" or similar, external readers see this stub. Internal contributors have the full version cloned locally. References are intentionally preserved both ways.

---

*Stub created 2026-05-27 per the doc-security audit recommendation to keep tactical sales content private while leaving the agency's methodology publicly observable.*
