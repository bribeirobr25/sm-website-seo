# PENDING.md — agency-level backlog aggregator (public stub)

**This document is the public stub.** The full internal aggregator — with prospect status, postmortem language, per-incident "recently resolved" log, and trigger-gated follow-ups — lives at `docs/audit/private/PENDING.md` and is intentionally gitignored.

**Why a public stub?** Many docs cross-reference `PENDING.md` (component spec sheets, template playbooks, etc.). This stub absorbs those references and tells external readers where to look. Internal contributors with the repo cloned see the full version locally.

## What lives in the private aggregator

The internal version is the **single source of truth for unresolved work across all clients + active prospects + open agency-template work**. It's structured as four blocks:

1. **Agency state at a glance** — current client list, scaffold status, deployed surfaces
2. **Trigger-gated items** — work that activates when a specific condition is met (e.g. "first health client engages" → activate Phase 1d audit)
3. **Open backlog** — DRAFT items from per-client BRIEFs, agency-template gaps, security findings not yet addressed
4. **Recently resolved** (rolling log) — closure narratives for the last ~60 days of work, used to learn lessons + cross-reference what shipped

## Maintenance discipline (still applies)

Every time a per-client `BRIEF.md` DRAFT item gets resolved, mark it ✅ in the internal aggregator. Every time a new DRAFT or open finding surfaces in a session, add it. Refresh the "Last updated" date.

## Public-facing summary

The agency's current state (publicly observable):

- **Live builds:** 7 portfolio demos (`clients/demo-*`) + 1 agency-self build (`clients/agency-breno-bar`) — all `noindex`
- **Two install-ready scaffolds:** `scaffolds/astro-tier2/` (Tier 2) + `scaffolds/nextjs-tier3/` (Tier 3)
- **Rule library:** feature-complete for the agency's typical client. See `docs/design/` for the canonical rule docs
- **Prospect pipeline + sales activity:** intentionally not enumerated here; the internal version tracks this

## Cross-references in committed docs

When a component spec sheet, template doc, or per-client doc says "see `PENDING.md` §X", read it as "see the internal aggregator for the current state of §X." If you don't have repo access, this stub is what you'd see — and that's by design.

---

*Stub created 2026-05-27 per the doc-security audit recommendation to keep internal backlog content private.*
