# REDESIGN-ROLLOUT-PLAN-AUDIT-2026-06-13.md
## Audit of REDESIGN-ROLLOUT-PLAN-2026-06-13.md

**Auditor:** Claude (independent review session)
**Date:** 2026-06-13
**Plan reviewed:** `docs/audit/REDESIGN-ROLLOUT-PLAN-2026-06-13.md` (Claude Code planning session)
**Review mandate:** Confirm the plan is a re-skin / UI-UX-only change that breaks no SEO, accessibility, performance, analytics, security, or data/form integration; confirm conformance to project principles, code standards, and guides.
**Files verified against the plan's claims:** `BaseLayout.astro` (full) · `Button.astro` (full) · `CookieBanner.astro` (full) · `Header.astro` (full, prior read) · `tokens.css` (full, prior read) · `global.css` (full, prior read).

---

## 0. Verdict

**The plan is sound, conformant, and safe to execute as written, after four small corrections below.** It correctly identifies the integration boundary (presentation vs. logic) and stays on the presentation side of it. The keystone decision — a scoped `.theme-night` override rather than a hard token flip — is the right call and dissolves the legal-page-contrast risk cleanly.

Crucially, **every code-level claim I spot-checked against the actual source is accurate.** This is not a plan written from assumptions; the "verified current-state facts" (§3) and the specific breakage points (§5 Phase 1) match the real files. That materially raises my confidence.

- **Integrations preserved:** ✅ SEO, hreflang, schema, analytics consent-gating, security headers, form endpoints, Sentry — all correctly scoped as untouched or class-only.
- **Re-skin discipline:** ✅ Token-first, `BaseLayout` extended not rewritten, no route/content changes, `noindex` held.
- **Accessibility:** ⚠️ The plan caught the two non-obvious AA traps itself (accent-text vs CTA-hover token split, skip-link `text-bg`). Both confirmed real. Four further items below.

**Severity of findings:** zero High, four Medium/Low. None block approval; all can fold into the existing phases.

---

## 1. Verification of the plan's factual claims (the part that matters most)

A plan that misreads the code produces confident, wrong instructions. I spot-checked the plan's specific claims against the actual files:

| Plan claim | Verified against code | Result |
|---|---|---|
| CookieBanner accept button is `bg-text text-white` → invisible (white-on-near-white) on night | `CookieBanner.astro` line: `bg-text text-white hover:bg-accent-deep` | ✅ **Accurate.** Real bug on dark. Fix is class-only; consent logic (`decide`/`applyConsent`/`writeConsent`) is in the `<script>` and untouched by a class change. |
| `Button.astro` primary is `bg-accent text-bg` → dark-on-blue on night | `Button.astro`: `primary: 'bg-accent text-bg hover:bg-accent-deep'` | ✅ **Accurate.** `text-bg`→`text-white` is a genuine no-op on light (bg≈white) and a real fix on dark. |
| Skip link is `focus:bg-accent focus:text-bg` → fails on night | `BaseLayout.astro`: `focus:bg-accent focus:text-bg focus:px-4…` | ✅ **Accurate.** `text-bg`→`text-white` is surgical + additive. |
| `<body>` has no theme hook; a `theme` prop is needed and would be additive | `BaseLayout.astro`: `<body>` has no class attribute | ✅ **Accurate.** Adding `class:list` to `<body>` is purely additive; touches none of the head emissions. |
| `Button.astro` carries `data-event` / `data-source-section` (analytics hooks to preserve) | `Button.astro`: both props rendered as `data-event` / `data-source-section` | ✅ **Accurate.** Confirms the §10 promise to preserve analytics hooks is grounded in the real component. |
| COLOR.md darken-on-hover; `accent-deep` = `#0058b8` | `Button.astro` JSDoc cites the rule verbatim; `tokens.css` defines `--color-accent-deep:#0058b8` | ✅ **Accurate.** The accent-text/CTA-hover split reasoning is correct. |
| Header already contains `/tools` (2nd nav item) | `Header.astro`: `{ href: `${prefix}/tools`, label: TOOLS[locale].hub.eyebrow }` | ✅ **Accurate.** No add needed; "confirm it survives" is the right framing. |
| `BaseLayout` is consent-gated GA4 via `type="text/plain"` + `data-cookie-category` | `BaseLayout.astro`: both gtag scripts are `type="text/plain" data-cookie-category="analytics"` | ✅ **Accurate.** |

**Every claim checks out.** No misreads found. The plan's self-corrections in §5/§9 (the two AA traps) are real issues the plan caught and resolved before execution — exactly what a good plan does.

---

## 2. Strengths worth preserving

1. **The `.theme-night` scope is the correct architecture.** A hard token flip would force legal pages to re-light every token and would make the shared Header/Footer ambiguous. The scope makes legal-page lightness the *default* (absence of class), which is the safest possible failure mode — if a new legal page is added later and someone forgets the prop, it stays light, not broken-dark. Good defensive design.
2. **Token-first delivery** means ~94% of the re-skin is carried by Phase 0 with zero markup edits — which is also what protects the integrations (no per-page churn = no accidental logic edits).
3. **The accent-text vs CTA-hover-fill token split** (`--color-accent-on-surface`) is a subtle, correct call. Most re-skins miss this and ship either failing eyebrows or failing button hovers. Catching it at plan time is strong.
4. **§10 "do-not-break" list** is the right instrument and is accurate. The framing "presentation only; these are verified-untouched or class-only" is exactly the discipline a re-skin needs.
5. **GSAP via pnpm (not CDN)** is correctly identified as the *security-correct* choice — it means no `vercel.json` CSP change, which is itself a class of risk avoided.

---

## 3. Findings — corrections to fold into the plan

### Finding 1 — `default theme='night'` makes legal-page lightness opt-OUT; invert the safer default OR add a guard 🟠

**Severity:** Medium. This is the one architectural choice I'd push back on.

**What the plan says (§2, §5 Phase 0):** `theme?: 'light' | 'night'` on `BaseLayout`, **default `'night'`**, and the ~4 legal templates pass `theme="light"`.

**The risk:** defaulting to `night` means every *future* page is dark unless the author remembers to opt out. For legal/print-sensitive pages that's the dangerous direction — a forgotten prop yields a dark, print-hostile legal page (the exact thing the carve-out exists to prevent). The plan's own §2 praises the scope approach because "a forgotten class stays light" — but defaulting the prop to `night` **reintroduces** the forgot-to-opt-out failure for legal pages, contradicting that very safety argument.

**Resolution (pick one):**
- **(a) Keep default `night` but add a hard guard:** a short allow-list of legal route patterns (`/privacy`, `/imprint`, `/contract`, `datenschutz`, `impressum`) that forces `theme="light"` regardless of prop, with a build-time or runtime assertion. Belt-and-suspenders.
- **(b) Make `theme` a required prop** (no default) so every page must declare intent — slightly more verbose but removes the silent-default class of bug entirely.
- **(c) Accept default `night`** but add a one-line note to `CLAUDE.md`'s "new page" checklist: "legal/print pages must pass `theme='light'`." Weakest mitigation.

I'd take (a). It keeps the ergonomic default (most pages are marketing) while making the legal carve-out structurally impossible to forget.

### Finding 2 — `prefers-reduced-motion` must also gate the WebGL shader's *render loop*, not just the entrance animations 🟠

**Severity:** Medium. Accessibility + battery/INP.

**What the plan says:** "reduced-motion → static, counters show finals, shader off."

**What to verify in execution:** "shader off" must mean the `requestAnimationFrame` loop never starts (or halts immediately) under `prefers-reduced-motion`, not merely that the entrance tween is skipped. A continuously animating aurora is itself motion that the user asked to not see, and an always-running rAF loop on a backgrounded/over-scrolled hero is an INP/battery cost. The v1 prototype gates the loop correctly; the plan inherits that — but the audit checklist should state it explicitly so it isn't lost in the port.

**Resolution:** In Phase 3 + the Phase 6 gate, add: "Under `prefers-reduced-motion: reduce`, the shader rAF loop does not run at all (static gradient shown); confirmed by checking no rAF activity in the reduced-motion profile." The plan already has the IntersectionObserver gate for off-screen; this adds the reduced-motion gate for the loop itself.

### Finding 3 — confirm the LCP element doesn't regress when the photo sits behind the aurora 🟠

**Severity:** Medium. Performance (PERFORMANCE.md LCP budget).

**What the plan says (D1, Phase 3):** heroes keep the current photo (with veil) *behind* the v1 aurora canvas, and the photo is "the no-WebGL fallback" and keeps `loading=eager fetchpriority=high`.

**The risk:** layering a full-bleed `<canvas>` over the LCP `<img>` can change what the browser reports as LCP — if the canvas paints first/larger, LCP may shift from the (optimized, prioritized) photo to the canvas, or the veil + canvas stacking may delay the photo's paint. The plan notes "the canvas must not become LCP" but doesn't say how it's ensured.

**Resolution:** In Phase 3, specify the stacking + sizing so the photo remains the LCP candidate: canvas is `position:absolute` over the photo with the photo still a real, eager, high-priority `<img>` in normal flow; verify in Phase 6 with a Lighthouse/CWV trace per breakpoint that LCP resolves to the image, not the canvas, and that LCP time hasn't regressed vs. the current `.hero-dark`. If the canvas does steal LCP, set the canvas to paint after the image's LCP via the existing `.motion`/load gate.

### Finding 4 — `astro check` single-`h1` and the ShaderHero `h1` ownership needs an explicit per-page audit 🟡

**Severity:** Low (but easy to regress across ~12 marketing routes × 2 copies).

**What the plan says (§9 SEO row):** "`ShaderHero` renders the page's one `<h1>`; pages must not keep a second."

**The risk:** the current pages already have their own `<h1>` inside the `.hero-dark` block being replaced. When swapping to `<ShaderHero>`, the old `<h1>` must be removed in the same edit, in **both** copies, for **every** marketing route. Miss one and that page has two `h1`s (SEO + a11y heading-order regression) — and this won't fail the build (`astro check` type-checks; it doesn't enforce single-h1).

**Resolution:** Add to the Phase 5 per-page checklist an explicit "exactly one `<h1>`, and it is the ShaderHero's" verification per route, in both copies. Optionally add a tiny dev-only assertion or a grep step in Phase 6 (`grep -c '<h1' ` per built page) since the type-checker won't catch it.

---

## 4. Minor notes (no action required, just flagging)

- **`ContactBar.astro` WhatsApp is `visible:false` today.** The plan correctly notes it and fixes the color "for correctness." Fine — just don't let restyling a hidden component consume review time; it's not on a live surface yet.
- **404/500 dark by default:** the plan defers the decision but leans dark. Since they're token-driven and not legal pages, dark is consistent. Agreed; no issue.
- **Inter weight:** the prototype uses display weights up to ~860. The existing `@layer base` uses 600 for headings (an intentional Apple-register choice documented in global.css). Going heavier is a deliberate visual change — fine for the new register, but make sure the heading weight change is applied via tokens/global, not per-page inline, so it doesn't fragment. (The plan's token-first principle already covers this; just confirm in Phase 0/2.)
- **`COLOR.md` portfolio-diversity gate:** the plan flags updating the "Apple-inspired near-white" note. Worth confirming the new dark-blue base is ΔE-distinct from the existing dark demos (bellini/barber) *if* that gate is applied to the agency's own site — the plan raises this as a question in §9. Recommend: resolve it explicitly (the agency site isn't a client demo, so the diversity gate may not even apply — state which).

---

## 5. Integration-by-integration confirmation

I independently confirm the plan's §9/§10 conclusions against the verified code:

| Integration | Plan's claim | My confirmation |
|---|---|---|
| **SEO / schema** | Untouched beyond additive `theme` prop | ✅ All emission is in `BaseLayout` head + `schema.ts`; a `<body>` class + CSS cannot affect it. Single-h1 is the one watch-item (Finding 4). |
| **hreflang / canonical / OG / sitemap / noindex** | Unchanged | ✅ All computed in `BaseLayout` from `localePath`/`LOCALES`; presentation changes don't reach them. |
| **Analytics (GA4 consent-gated)** | Class-only on banner; `data-event` preserved | ✅ gtag scripts are `type="text/plain" data-cookie-category="analytics"`; `Button.astro` carries `data-event`/`data-source-section`. Restyle = class-only. **Watch:** preserve those data-attrs when restyling any CTA that uses raw `<a>` instead of `<Button>`. |
| **Security headers / CSP** | No change (GSAP bundled, no new origin) | ✅ Correct — and the *reason* (pnpm not CDN) is the right one. No `connect-src`/`script-src` additions. WebGL needs no header. |
| **Consent / DSGVO** | Banner logic untouched; GSAP/WebGL set no cookies | ✅ `CookieBanner` logic is in its `<script>`; color classes are independent. WebGL/GSAP are first-party, no storage, no network → no consent surface. |
| **Forms (`/api/contact`, site-scan, gbp-check)** | SSR endpoints untouched; restyle = class-only; field names/honeypot/rate-limit intact | ✅ Endpoints are in `pages/api/*` (not touched by a re-skin). **Watch:** when restyling `SiteScanTool`/`GbpCheckTool`/contact form markup, preserve every `name`, the honeypot field, and the min-fill/rate-limit wiring — the plan says this; Phase 6 must actually submit each form to confirm. |
| **Sentry** | Untouched | ✅ Config files not in scope. |
| **Reliability (no-JS / fallback)** | All four fallbacks retained | ✅ Existing CSS `animation-timeline` reveals are no-JS-safe and kept; GSAP/shader gated behind `.motion` + guards. |

---

## 6. Recommendation

**Approve the plan with the four corrections folded in:**

1. **Finding 1 (🟠):** change the legal-page safety model — prefer a forced light-theme guard for legal routes over a silent `default='night'` (or make the prop required).
2. **Finding 2 (🟠):** explicitly gate the shader's rAF loop under `prefers-reduced-motion`, not just entrance tweens.
3. **Finding 3 (🟠):** specify hero stacking so the photo stays the LCP element; verify LCP per breakpoint in Phase 6.
4. **Finding 4 (🟡):** per-route single-`h1` verification in both copies during Phase 5 + a grep gate in Phase 6.

None require re-architecting the plan. The keystone strategy, phase order, integration analysis, and (verified) factual grounding are all correct. After these four, this is a low-risk, standards-conformant re-skin.

---

## 7. Summary scorecard

| Dimension | Score | Note |
|---|---|---|
| Factual accuracy vs. code | ✅ Verified | Every spot-checked claim matches the real source files |
| Re-skin discipline (no logic/route/content change) | ✅ Strong | Token-first; BaseLayout extended not rewritten |
| SEO preservation | ✅ (1 watch) | Single-h1 per route is the only watch-item (Finding 4) |
| Accessibility | ⚠️→✅ | Two AA traps caught by the plan; +2 from this audit (reduced-motion loop, legal default) |
| Performance | ✅ (1 watch) | LCP-stays-the-photo needs explicit enforcement (Finding 3) |
| Analytics | ✅ | Consent-gating + data-event hooks preserved |
| Security / CSP | ✅ | No new origin; bundled GSAP is the correct choice |
| Forms / data | ✅ | Endpoints untouched; class-only restyle; submit-test in Phase 6 |
| Legal / DSGVO | ✅ (1 design note) | Scope keeps legal light; Finding 1 hardens the default |
| Docs / governance | ✅ | design.md + CLAUDE.md + COLOR.md updates scheduled |

*Audit complete. The plan is approved-with-corrections. Its single greatest strength is that its code claims are real — the breakage points it promises to fix are genuinely the breakage points that exist. Fold in the four findings and proceed phase by phase with the screenshot + form-submit gates as written.*

---

## 8. Page-level scan (added 2026-06-13, post-verdict) — the "~94% token-driven" claim audited directly

The original audit verified the **shared/central** files (BaseLayout, Button, CookieBanner, Header, the stylesheets) but took the plan's "~94% token-driven" figure on trust. I then read the per-page `.astro` files to find the other ~6% — the hardcoded color utilities the `.theme-night` token flip will **NOT** catch. Files read: `index.astro`, `services.astro`, `contact.astro` (+ confirmed the `[locale]/` duplication exists with `about/contact/imprint/index/portfolio/pricing/privacy/services/website-check` + `tools/` + `portfolio/` subdirs; **no `[locale]/contract`** — matches the plan).

### Verdict on the scan: the plan's strategy holds, but Phase 1's scope is bigger than written — and one new live bug surfaced.

The token flip carries the *structural* colors (`bg-bg`, `text-text`, `text-text-muted`, `bg-surface`, `bg-inverted-*`) correctly — that part of the 94% claim is real. But the pages contain three categories of **raw, non-token color utilities** that will survive the flip unchanged and must be handled as explicit Phase 1 line-items:

#### Category A — `text-bg` on a filled CTA = invisible-on-dark (NEW live bug, not in the plan) 🔴
**`contact.astro` submit button:** `class="… bg-text text-bg hover:bg-accent-deep …"`. This is the **same invisible-on-dark failure as the CookieBanner**, on the **primary submit of the contact form** — the single most conversion-critical control on the site. On `.theme-night`, `bg-text` is near-white and `text-bg` is near-dark → the *hover* state (`bg-accent-deep`, white-less) and base state both fail. The plan enumerates the CookieBanner and the home inverted-CTA but **does not list the contact submit button**. It is a direct analog and must join the Phase 1 fix list: `bg-text text-bg` → `bg-accent text-white` (or the `<Button>` primary, once that's fixed). **This is the highest-value find of the whole scan** — a real, user-facing, conversion-path bug the plan would have shipped.

*Action:* grep **both copies** of every page for `text-bg` paired with a non-light `bg-*`. Confirmed instances so far: `contact.astro` submit (×2 copies). The home inverted CTA (`bg-bg text-text…hover:text-bg`) is already on the plan's list.

#### Category B — `text-accent-deep` as eyebrow/link text (the accent-on-dark trap, wider than stated) 🟠
The plan's `--color-accent-on-surface` migration is correct, but the scan shows the footprint is **larger and partly inline on the pages**, not only in `sections/*`:
- `index.astro`: `text-accent-deep` on the **services eyebrow, portfolio eyebrow, about eyebrow**, plus `hover:text-accent-deep` on the about "read more" link and (in `contact.astro`) the alternatives heading + email/LinkedIn/X links.
- `services.astro`, `contact.astro`: same `text-accent-deep` eyebrow pattern.
- These are **inline in the page bodies**, so each must be migrated in **both** locale copies. This is exactly the kind of per-page, ×2 edit the plan's own risk register warns about — but the plan files it under "single-source in `sections/*`" which **understates** it: a meaningful share is inline on the pages.

*Action:* the accent-text migration in Phase 1 must explicitly include the page-level inline eyebrows/links (index ×3 eyebrows, contact links, services eyebrow), in both copies — not just the `sections/*` components.

#### Category C — `text-white` / `text-white/85` / `border-white/30` inside `.hero-dark` blocks (CORRECT — leave alone) ✅
The heroes use raw `text-white`, `text-white/85`, `border-white/30`, `border-white/70`. These are **intentional and correct** — `.hero-dark` is dark on *both* themes (it's near-black via `--color-inverted-bg` on light pages too), so white text is right regardless. **These must NOT be "fixed" to tokens.** Flagging them so the executor doesn't over-correct: when these hero blocks become `<ShaderHero>` (Phase 3), the white-on-dark treatment carries over unchanged. The only watch-item is the stats strip / CTA tiles that use `text-inverted-text` (token-driven — fine) sitting adjacent to raw-white heroes; visually consistent, no action.

### Net effect on the audit
- **Finding 1–4 stand unchanged.**
- **New Finding 5 (🔴, was hidden inside the "94%"):** the **contact-form submit button** carries the invisible-on-dark `text-bg` bug and is **not** on the plan's Phase 1 fix list. Add it. Because it's the contact conversion path, I'd rate it the most important single line-item in Phase 1 — above even the CookieBanner (which the plan already has).
- **Finding 2's analog (Category B) is wider than the plan states:** accent-text migration is partly inline on pages (×2 copies), not only in `sections/*`. Scope Phase 1 accordingly.
- **The 94% figure is directionally right** but the remaining ~6% is concentrated in exactly the high-visibility spots (hero CTAs, form submit, eyebrows) where a miss is most visible. The token flip does **not** make the pages safe on its own; Phase 1's surgical list is load-bearing and must be treated as comprehensive, not illustrative.

### Concrete pre-execution gate to add
Before Phase 1 closes, run across **`src/pages/**/*.astro` + `src/components/**/*.astro`** (both locale copies):
1. grep `text-bg` → every hit that sits on a filled/colored background is a dark-mode failure candidate; convert to `text-white` or token. (Catches the contact submit + any sibling.)
2. grep `text-accent-deep` and `hover:text-accent-deep` → every hit used as **text/icon** color migrates to `text-accent-on-surface`; every hit used as **`bg-accent-deep`** (CTA hover fill) stays. (Disambiguate by prefix: `text-` vs `bg-`.)
3. grep `text-white`, `border-white`, `/85`, `/30`, `/70` → confirm each is inside a `.hero-dark`/photo-veil context (legitimate) and not on a now-dark page surface (would be wrong). Leave the legitimate ones.
4. grep `text-[#`, `bg-[#`, `border-[#` → any arbitrary-hex utility is outside the token system and must be justified or tokenized. (None found in the three pages read; confirm across the rest.)

This four-line grep is the 10-minute step that converts the "~94%" assertion into a verified, enumerated list — and it already surfaced one real conversion-path bug (contact submit) that the plan would otherwise have shipped.

*Scan complete. Plan remains approved-with-corrections; Finding 5 (contact-submit `text-bg`) is added to the Phase 1 must-fix list and should be treated as the top item there.*
