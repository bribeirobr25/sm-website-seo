# Cross-Tree Audit — 2026-05-25

Subagent-driven findings synthesis. 5 parallel auditors covered:
1. Rules consistency (`docs/design/*.md` + root `CLAUDE.md`)
2. Component spec ↔ impl parity (`docs/design/components/`)
3. Scaffolds completeness (`scaffolds/`)
4. Per-client docs (`docs/clients/demo-*`)
5. Live demo compliance (`clients/demo-*`)

Each auditor ran fresh-context (no conversation history). Findings de-duplicated and ranked below.

---

## 🔴 Blockers — production bugs or correctness violations

### B1. OG image path mismatch in BOTH scaffolds
**Files:** `scaffolds/astro-tier2/src/layouts/BaseLayout.astro:17` · `scaffolds/astro-tier2/src/lib/seo/schema.ts:59` · `scaffolds/nextjs-tier3/src/app/layout.tsx:26,37` · `scaffolds/nextjs-tier3/src/lib/seo/schema.ts:53`
**Issue:** Meta tags reference `${SITE.url}/og-default.jpg` but actual file lives at `public/img/og-default.png`. Every new client scaffolded from these will have a broken OG share preview at production cutover.
**Fix:** change all 4 refs to `/img/og-default.png` (or duplicate file to root + .jpg).

### B2. Event-naming convention split-brain
**Files:** `docs/design/KPI.md:200-220` ↔ `docs/design/ANALYTICS.md:81-119, 422-446`
**Issue:** KPI.md uses present-tense (`phone_click`, `nav_link_click`, `contact_form_completed`, `share_click`). ANALYTICS.md uses past-tense (`phone_link_clicked`, `nav_link_clicked`, `contact_form_submitted`, `share_completed`). At least 5 high-traffic event names disagree. Both docs claim authority. Every template's §11 measurement + every retainer report will pick a different convention.
**Fix:** pick one canonical (recommend ANALYTICS.md past-tense — it's more declarative-event-semantic). Reduce the other to a pointer. Update per-vertical template §11 blocks if they cite either.

### B3. Root CLAUDE.md legal cross-reference is stale
**File:** `CLAUDE.md:231`
**Issue:** Says "German → `SECURITY.md §6` · Brazilian → §6.5". Those are now stubs that redirect to LEGAL.md. Should read "German → `LEGAL.md §DE` · Brazilian → `LEGAL.md §BR` · Portuguese → `LEGAL.md §PT`".
**Fix:** one-line edit.

### B4. Two demo URLs use shortened hostnames not matching slugs
**Files:** `clients/demo-coffee-saltlines/src/lib/site.ts:17` + `astro.config.ts:7` → `demo-saltlines.vercel.app` · `clients/demo-restaurant-adele/src/lib/site.ts:17` + `astro.config.ts:7` → `demo-adele.vercel.app`
**Issue:** Same class of bug the lawyer/yoga/barber demos had pre-2026-05-23. OG image URLs and canonical refs may resolve to a different deploy than the actual one. The 3 new demos got fixed; these 2 were missed.
**Fix:** verify against Vercel project names, then update both files in each demo. Rebuild + redeploy.

### B5. Scaffold-purity violations — client data leaked into scaffold .env + CI
**Files:**
- `scaffolds/astro-tier2/.env.example` — `PUBLIC_SITE_URL=https://barbearia-tio-edu.com.br`
- `scaffolds/nextjs-tier3/.env.example` — `NEXT_PUBLIC_SITE_URL=https://studio-sereno-yoga.de` + `RESEND_FROM_EMAIL=hallo@studio-sereno-yoga.de`
- `scaffolds/nextjs-tier3/.github/workflows/ci.yml` — `NEXT_PUBLIC_SITE_URL: https://studio-sereno-yoga.de` env stub
- `scaffolds/nextjs-tier3/src/lib/resend.ts` — hardcoded default `'hallo@studio-sereno-yoga.de'`
**Issue:** Violates scaffolds/README.md §R17 scaffold-purity rule. Every new client cloned from these inherits prior-client identifiers.
**Fix:** replace with `https://example.com` / `hello@example.com` placeholders.

### B6. Sentry env-name mismatch in Astro scaffold
**Files:** `scaffolds/astro-tier2/sentry.client.config.mjs:4` reads `PUBLIC_SENTRY_DSN` · `scaffolds/astro-tier2/.env.example` only lists `SENTRY_DSN`
**Issue:** Client SDK will silently no-op in production because the env var the docs tell you to set isn't the one it reads.
**Fix:** add `PUBLIC_SENTRY_DSN` to `.env.example` (or rename in config).

---

## 🟡 Important — drift / staleness that misleads users

### I1. `CHECKLIST.md §3` cited from 3 docs for content that lives in §1.5
**Files:** `docs/design/SEO.md:811` · `docs/design/LEGAL.md:178,185` · `docs/design/TECH.md` (multiple)
**Issue:** §3 is Schema policy regression guards. §1.5 is Operational tests (review generation, legal pages, Sentry, etc.). 3 docs cite §3 when they mean §1.5.

### I2. Root CLAUDE.md anti-pattern count stale
**File:** `CLAUDE.md:85`
**Issue:** Says "10 anti-patterns" — actual COLOR.md count is 12 (items #11, #12 added 2026-05-23).

### I3. Cream-default scope contradiction across 3 docs
**Files:** `docs/design/DESIGN-BEST-PRACTICES.md:346` vs `CLAUDE.md:246` vs `docs/design/COLOR.md:121`
**Issue:** DBP §5 says default cream for "gastronomy, beauty, artisan, and any solo-practitioner portfolio". Root CLAUDE.md and COLOR.md §6 anti-pattern #11 narrow it to "gastronomy-heritage, fine-dining, boutique-salon-editorial, artisan" (excludes beauty broadly + solo-practitioner). DBP §5 was not updated when the narrower 2026-05-23 rule shipped.
**Fix:** reconcile DBP §5 to match the narrower scope.

### I4. TECH.md §3 structure diagram references defunct directories
**File:** `docs/design/TECH.md:240-249`
**Issue:** Lists `shared/templates/` and `shared/components/`. Both were replaced by `scaffolds/` + `docs/design/components/_impl/` on 2026-05-19.

### I5. TECH.md:144 declares encryption-at-rest behavior with no spec
**File:** `docs/design/TECH.md:144`
**Issue:** Row reads "Encryption at rest (AES-256-GCM) + HMAC blind index — `SECURITY.md` (referenced; not yet detailed)". SECURITY.md has zero content on this.
**Fix:** either write the SECURITY.md section or remove the row pending first Type 3+ client with stored PII.

### I6. SECURITY.md TOC omits §6.5 Brazilian
**File:** `docs/design/SECURITY.md:31-43`
**Issue:** Body has §6 + §6.5 but TOC only lists §6.

### I7. CHECKLIST.md demo-phase exemption cites SECURITY.md for legal pages
**File:** `docs/design/CHECKLIST.md:29`
**Issue:** Same drift as B3 — should cite LEGAL.md.

### I8. `_impl/README.md` is stale
**File:** `docs/design/components/_impl/README.md:3,24,26`
**Issue:** Title says "8 components in the agency's UI/UX library". Library has been 32 + 6 since 2026-05-23.

### I9. Hardcoded-content warning lowercase-path typo across all 6 specs
**Files:** `press.md:83` · `course-list.md:79` · `newsletter-mock.md:94` · `photo-grid.md:118` · `booking-mock.md:103` · `menu-card.md:186`
**Issue:** Each warning says `_impl/press.astro` etc. (lowercase) but actual files are CamelCase `_impl/Press.astro`. Identical wording across all 6 — looks like copy-paste propagation.

### I10. Both scaffolds' favicon.ico are renamed PNGs, not actual ICO
**Files:** `scaffolds/astro-tier2/public/favicon.ico` · `scaffolds/nextjs-tier3/public/favicon.ico`
**Issue:** Modern browsers tolerate it but breaks the "32×32 PNG fallback" convention. Old browsers + some scrapers expect real ICO. The 5 deployed demos likely have the same issue (not spot-checked).

### I11. Next.js scaffold CookieBanner ships German copy
**File:** `scaffolds/nextjs-tier3/src/components/ui/CookieBanner.tsx`
**Issue:** "Deine Privatsphäre", "Alle ablehnen", "Alle akzeptieren". Astro scaffold ships English. Either both English or both locale-neutral with TODO markers.

### I12. CSP gaps in scaffolds
- **Astro:** `connect-src` omits `api.resend.com` — would block any form upgraded to call Resend
- **Next.js:** `'unsafe-eval'` allowed (PostHog requirement) — flag for security review at any client cutover

### I13. All 5 stated per-client docs diverge from canonical templates
**Files:** all 5 `docs/clients/demo-*/{CLAUDE,design,BRIEF}.md`
**Issue:** None follow `TECH.md §20` (CLAUDE.md template) / `DESIGN-BEST-PRACTICES.md §17` (design.md template) / `KPI.md §KPI contract` (BRIEF.md KPI block) literally. They use compact ad-hoc structures instead. Only the unstated 6th demo `demo-eiscafe-bellini` follows the canonical CLAUDE.md template.
**Decision needed:** either (a) update the 5 to match templates, or (b) update the templates to acknowledge the compact form as canonical.

### I14. Saltlines + Adèle BRIEFs predate the 2026-05-23 fuller-doc shape
**Files:** `docs/clients/demo-coffee-saltlines/BRIEF.md` · `docs/clients/demo-restaurant-adele/BRIEF.md`
**Issue:** Skeletal (~72 lines) vs lawyer/yoga/barber (~85-107 lines). Missing Register / USt-ID lines and detailed Open Questions structure. NAP blocks have `[TBD]` placeholders.

### I15. Adèle Health KPI not measurable with documented stack
**File:** `docs/clients/demo-restaurant-adele/BRIEF.md:51`
**Issue:** "Press-mention sentiment + GBP rating ≥ 4.6★". Sentiment isn't in Tier-2 stack (GA4 + GSC + Clarity). Either remove or extend KPI.md to define a Press-mention KPI.

### I16. Contrast spot-check — 3 demos have accent-on-bg ratios <4.5:1
- **Lawyer:** `--color-accent #9b8055` on `#ffffff` ≈ 3.3:1 — body-text use would fail AA. Restricted to large text / non-text UI? Needs usage audit.
- **Yoga:** `--color-accent #d87c5a` on `#ede7f0` ≈ 3:1 — same concern.
- **Coffee:** `--color-accent-secondary #e25c3e` on `#f7fafb` ≈ 3.5:1 — same concern.
**Fix:** verify usage is restricted to ≥18px regular / ≥14px bold per WCAG AA, OR introduce a `--color-accent-deep` variant for body text.

### I17. UI_REVIEW.md cited as enforceable audit gate but is a historical artifact
**File:** `docs/design/COLOR.md:107`
**Issue:** "UI_REVIEW.md flags any of these" — UI_REVIEW.md is a 2026-05-12 one-off review of a deleted client demo. Not an enforceable gate.
**Fix:** point at `CHECKLIST.md §Design and UX` or per-client `design.md §2.5`.

---

## 🟢 Cosmetic

- **C1.** `COLOR.md` has no TOC (every other rule doc does)
- **C2.** `ACCESSIBILITY.md:33` TOC §4 "Keyboard navigation" — body covers more (focus trap + reduced motion)
- **C3.** `RELIABILITY.md:38` TOC §2 missing ", offline" from body title
- **C4.** `COLOR.md:4` "Owns" line missing "split-complementary" from harmony list
- **C5.** `DESIGN-BEST-PRACTICES.md:313,346` uses bare "TECH.md §7" instead of heading-based reference (per CLAUDE.md:113 convention)
- **C6.** `COLOR.md:96,283` cite "ACCESSIBILITY.md §contrast" — informal section name
- **C7.** Saltlines + Adèle CLAUDE.md use 2-column "Imported canonical components" table; lawyer/yoga/barber use 3-column. Should unify.
- **C8.** README "Buy don't build" rendered as bullets, root CLAUDE.md claims it's a table

---

## Areas the audit surfaced unexpectedly

### S1. There is a 6th demo nobody mentioned: `demo-eiscafe-bellini`
Present at both `docs/clients/demo-eiscafe-bellini/` and `clients/demo-eiscafe-bellini/`. Has extra docs the others don't (COPY-DE.md, COPY-EN.md, CREDITS.md, VISUAL-VALIDATION.md). PENDING.md confirms it's in-scope. Live-demo auditor skipped it per spec — needs same compliance check as the other 5.

### S2. Bellini is the only client doc following TECH.md §20 literally
All 5 others diverged. Bellini's CLAUDE.md template-compliance is a useful reference for either rewriting the 5 or for amending §20 itself.

---

## What the audits did NOT cover

- **Vercel deployment health** — the 5 demos may have URL bugs (B4) or OG bugs but no auditor connected to Vercel to confirm actual deploy state.
- **Sub-pages of demos** — only home + impressum/datenschutz spot-checked. `/leistungen`, `/kanzlei`, `/preise`, `/werkstatt`, etc. token compliance + composition variation not verified.
- **Per-vertical templates §13** — root CLAUDE.md claims all 12 templates have it post-2026-05-23. Not verified by these 5 auditors.
- **`docs/audit/PENDING.md` currency vs everything found above** — needs a refresh pass.
- **5 large historical audit files** at `docs/audit/` (PORTFOLIO-BUILD-RUNBOOK 53KB, etc.) — archive decision still pending.
- **6 `dist/` directories** in `clients/demo-*` — `.gitignore` exclusion not verified.
- **Bellini live-demo compliance** — skipped per spec.

---

## Recommended fix batches

**Batch 1 (Blockers — small, surgical, no design judgment):** B1, B3, B4, B5, B6 — about 10 file edits + rebuild/redeploy 2 demos. Should be one commit per batch member.

**Batch 2 (Event naming — needs decision):** B2 — pick canonical convention, update non-canonical doc to be a pointer, audit per-vertical template §11 blocks.

**Batch 3 (Doc drift cleanup):** I1, I2, I3, I4, I6, I7, I8 — pure documentation edits, no code.

**Batch 4 (Component spec cleanup):** I9 (6-spec lowercase typo) — one find/replace.

**Batch 5 (Scaffold polish):** I10, I11, I12, I5 — real ICO regen, CookieBanner copy unification, CSP additions.

**Batch 6 (Per-client doc decision):** I13 (5 docs vs canonical templates) — needs your input. Either rewrite 5 docs OR rewrite §20 + §17 + KPI contract templates to acknowledge the compact form.

**Batch 7 (Per-client doc fill-in):** I14, I15 — Saltlines/Adèle thickening + Adèle KPI fix.

**Batch 8 (Contrast verification):** I16 — usage audit + introduce `--color-accent-deep` body variants if needed.

**Batch 9 (Cosmetic):** I17 + all C-items.

**Batch 10 (Coverage gaps):** Bellini compliance audit (S1), sub-page tokens, templates §13 verification, PENDING.md refresh, archive decision on 5 historical files, `.gitignore` verification.
