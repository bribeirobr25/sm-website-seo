# PLAN — Contract add-ons, monthly/yearly billing & pre-signed signature

**Author:** Claude (planning session)
**Date:** 2026-06-16
**For:** Owner review → then Claude Code execution (Option B). Owner decisions in §7 are RESOLVED.
**Mode:** Plan-only. No source edited yet.
**Files read in full before planning:** `src/lib/funnel.ts` · `src/lib/contract-strings.ts` · `src/pages/contract.astro` (EN; DE twin at `src/pages/de/contract.astro`).

---

## 0. What's requested

1. The contract **formular** (and its PDF/print render) must reflect the **add-on options** — extra languages (+€36/mo), extra mailboxes (+€12/mo), social media (Start +€95, Growth +€129, additional channel +€75; included in Complete) — and **auto-update the price and the §2 service list** as the user selects them, **without breaking the layout**.
2. A **monthly vs. yearly** billing choice that applies the **15% yearly discount**, reflected **both in the contract and on the pricing page**.
3. The contract must end with a **pre-filled agency-side signature**: place ("Berlin"), the date, and a **simulated handwritten "BAR" signature**.

---

## 0.5 — Audit addendum & corrections (reviewer, 2026-06-16)

Audited against the **live code** (committed `825d15e`). The plan is sound and the six decisions are internally coherent. Five corrections follow — **A1 and A2 are must-fix before execution** (as written they'd build against something that no longer exists, or produce an internally inconsistent contract); A3–A5 are clarifications. These **amend** the sections noted and take precedence where they conflict.

**A1 (must-fix · amends §1, §3.2, §3.3) — the pricing page moved on; the social *table* is gone.** The `socialAddon` section was slimmed to an **explainer** (heading "How social media works" · channel chips · +€75 line · fine print — **no per-plan price rows**). The per-plan social price + "Total with social" now live **inside the plan cards** (the in-card "Add social media" toggle). Therefore:
- §3.3's "discount the socialAddon prices on the pricing page ×0.85" now targets the **card** prices: the headline, the `+€129/mo` add-on figure, and the "Total with social" line.
- §3.2's billing toggle must **compose with the existing per-card social toggle** — up to **4 SSR-rendered states per card** (monthly/yearly × social off/on), visibility-switched, no client math.

**A2 (must-fix · amends §4.2, supersedes §7.1 caveat b) — one canonical `monthlyTotal` must feed ID + buy-out + VAT + yearly.** In the live code these already **diverge**: `contractId()` encodes **`plan.priceNum`** (catalog price), while buy-out (`retainer × 18`) and VAT read the **editable `price_retainer`** field. Decision #5 (ID = full monthly total) only holds if all four read the *same* computed `monthlyTotal`:
- point `contractId()` at `monthlyTotal` (not `plan.priceNum`);
- make `price_retainer` a **derived / read-only** mirror of `monthlyTotal` (recommended) — or, if kept editable as an override, the edited value becomes the single source for **all** of {ID, buy-out, VAT, yearly}. The goal is to **eliminate** today's divergence, not preserve it.

**A3 (decision #2 display · amends §3.3) — per-item ×0.85 produces ugly numbers.** `+€129/mo × 0.85 = €109.65`. Decision #2 ("15% on everything") is fully honored by discounting the **aggregate** (`monthlyTotal × 12 × 0.85`). Recommend keeping per-item add-on figures **monthly** ("+€129/mo") and applying the 15% to the **displayed total** only (with a note) rather than printing `€109.65`-style per-item prices. Owner confirms the *display*; the math is identical either way.

**A4 (clarify · §4.3) — §2 line-items stay monthly even under yearly.** §2 shows **monthly** per-unit prices (€36/mo each); §3 shows the single **yearly** aggregate. State this so a monthly line-item beside a yearly total doesn't read as an error.

**A5 (strengthen · §5.2, §9) — the simulated signature is a legal-representation risk, not just a render detail.** A pre-printed agency "signature" can make the document look **pre-executed by the agency**. Keep it visibly the agency's **specimen / mark** (the adjacent printed "BAR / {SITE.founder}" helps), and have the lawyer rule on **whether a simulated signature is acceptable at all** — co-#1 lawyer item alongside the yearly term, not merely its wording.

*Minor:* preserve the no-plan placeholder ID (`BAR-____-…`) when total = 0; migrate the card's existing `onlyDigits(socialRow.price)` string-parse onto the new numeric `addons.*` source (§2.1) so the number lives in one place. **Verified OK:** yearly rounding (2 234 / 3 978 / 5 814 ✓), contract en+de vs pricing en+de+pt-br parity (✓ handled), `s3ReferenceNote` (good call ✓).

---

## 1. Current-state facts this plan is built on (verified)

- **§2 + §3 already render at runtime** in `contract.astro` from the selected `/pricing` plan via the inlined `plans` array (built from `FUNNEL[locale].pricing.tiers`). Single source of truth — **must be preserved**; add-ons extend it.
- **Add-ons today are not structured data.** In `funnel.ts`, language/mailbox add-ons exist only as tooltip `note` strings (e.g. `'More languages … €36/mo each.'`). Social is a `socialAddon` block with prices as display strings (`'+€95/mo'`, `'+€129/mo'`, `'Included'`, `'…+€75/month'`). **No numeric add-on prices a calculator can read.** This is the root change.
- **Contract pricing (Step 3)** is one manual `price_retainer` number + VAT radio. Selecting a plan calls `applyPlan()` → writes the plan's `priceNum`. Buy-out (`retainer × 18`), VAT, and the contract ID all derive from that one number.
- **Signatures** currently render **empty** lines for **both** parties. No agency pre-fill.
- **Print CSS** mature: `.no-print` hides chrome; `@page A4`; clause `break-inside: avoid`. New UI must be `.no-print`; new contract content must live in `.contract-doc` and respect page breaks.
- **localStorage auto-save** persists every named field. New inputs need `name`s.
- **Parity:** contract EN (`/contract`) + DE (`/de/contract`), `CONTRACT_STRINGS: Record<'en'|'de',…>`. funnel.ts EN/DE/PT-BR, parity enforced at compile time by the `Record<Locale,…>` type. New strings go in every relevant locale (contract en+de; pricing en+de+pt-br).
- **Pricing page is now card-based (post-slim, committed `825d15e`).** The `socialAddon` section is a slim **explainer** (chips + +€75 + fine print, **no price rows**); per-plan social price + "total with social" live **in the plan cards** via the in-card toggle. → **Audit addendum A1.**

---

## 2. Foundational change: make add-on prices structured data

Everything depends on this. A calculator can't read "€36" from prose. **Add a typed numeric add-on model to `funnel.ts`** consumed by both the pricing page and the contract.

### 2.1 New types

```ts
export interface AddonPricing {
  language: number;        // 36  (per extra language, /mo)
  mailbox: number;         // 12  (per extra mailbox, /mo)
  socialFirstChannel: Record<'start' | 'growth' | 'complete', number>; // 95 / 129 / 0 (Complete includes 1)
  socialAdditionalChannel: number; // 75  (any plan, per extra channel, /mo)
}
export interface BillingPricing {
  yearlyDiscount: number;  // 0.15
}
```

Add `addons: AddonPricing` and `billing: BillingPricing` to `PricingContent` (or a shared `commerce` block on `FunnelContent`). Fill identically across all three locales (numbers, not copy, but the type requires each locale).

**Why structured, not parsed:** never regex "€36" out of a tooltip at runtime — brittle, breaks when copy changes. The number is the source.

### 2.2 Keep display strings, link them to the numbers

The existing tooltip `note`s and `socialAddon.rows[].price` stay for display; add a code comment tying each to the numeric source so they can't silently drift. (Deriving the strings from the numbers is a future refactor — out of scope; leave the hook.)

---

## 3. Pricing page: monthly/yearly toggle + 15% discount

### 3.1 Data
- `billing.yearlyDiscount = 0.15`.
- Billing UI copy (new `billing` copy block in `PricingContent`):
  - toggle — EN "Monthly" / "Yearly (save 15%)" · DE "Monatlich" / "Jährlich (15% sparen)" · PT-BR "Mensal" / "Anual (economize 15%)"
  - yearly suffix — EN "/yr" · DE "/Jahr" · PT-BR "/ano"
  - note — EN "Pay 12 months up front, save 15% (≈ 1.8 months free)." · DE "Zahle 12 Monate im Voraus, spare 15% (≈ 1,8 Monate gratis)." · PT-BR "Pague 12 meses adiantado, economize 15% (≈ 1,8 mês grátis)."

### 3.2 Behaviour
- Segmented toggle switches all tier prices monthly↔yearly.
- Yearly = `Math.round(priceNum × 12 × 0.85)` → **€2,234 / €3,978 / €5,814** (whole euro — decision #4).
- Suffix swaps to yearly; `priceNote` may show per-month-equivalent for honesty.
- **No-JS / SSR-safe (preferred):** compute BOTH price strings in Astro frontmatter, render both, toggle visibility — no client math, no flash, no-JS shows monthly.
- A11y: keyboard-operable, `aria-pressed`/`aria-checked` correct.

### 3.3 Add-on display under yearly — RESOLVED (decision #2)
> ⚠ **Amended by Audit addendum A1 + A3.** Those "socialAddon prices on the pricing page" now live **in the cards** (the section is a rows-free explainer). And per-item ×0.85 prints `€109.65`-style figures — prefer discounting the **aggregate/total** (math unchanged). Confirm the display with the owner.

Apply 15% uniformly: the `socialAddon` prices shown on the pricing page also display ×0.85 when yearly is active. Whole yearly experience is uniformly discounted.

---

## 4. Contract: add-on selection + billing toggle + auto price/services

The contract already derives everything from one retainer number; the change builds that number from **plan + add-ons + billing** and injects add-on lines into §2.

### 4.1 New form controls (new "Add-ons" step before pricing, or inside Step 3)
All `.no-print`, all named (localStorage), all ≥44px (ACCESSIBILITY.md §6):
1. **Billing cycle** radio: `billing_cycle` = `monthly` | `yearly`, default `monthly`.
2. **Extra languages** stepper: `addon_languages` ≥ 0, each +€36/mo.
3. **Extra mailboxes** stepper: `addon_mailboxes` ≥ 0, each +€12/mo.
4. **Social media:** `addon_social_enabled` checkbox (Start/Growth; for Complete show pre-checked + locked "included"); `addon_social_extra_channels` stepper ≥ 0 at +€75/mo each (any plan).
First-channel price is plan-derived from `addons.socialFirstChannel[planId]` (Start 95 / Growth 129 / Complete 0).

### 4.2 Price math
```
monthlyBase   = plan.priceNum
languagesCost = addon_languages × 36
mailboxCost   = addon_mailboxes × 12
socialFirst   = social_enabled ? socialFirstChannel[plan] : 0   // 0 for Complete (included)
socialExtra   = addon_social_extra_channels × 75
monthlyTotal  = monthlyBase + languagesCost + mailboxCost + socialFirst + socialExtra

billed / label:
  monthly → billedAmount = monthlyTotal,                    "/mo"
  yearly  → billedAmount = Math.round(monthlyTotal × 12 × 0.85), "/yr"  (+ per-month-equivalent note)
```
- **Buy-out = `monthlyTotal × 18`** — on the full monthly total INCLUDING add-ons, always the monthly total regardless of billing cycle (decision #3).
- **VAT** runs on `billedAmount` (the §3 regular-VAT line already does net/vat/gross; feed it the right base).
- **Contract ID** encodes the full monthly total — see §7.1 (decision #5).
- Keep the manual `price_retainer` field as an override/fallback, but drive it from the computed total. → **Audit addendum A2: ID + buy-out + VAT + yearly must all read the SAME `monthlyTotal`; today they diverge (ID reads `plan.priceNum`, buy-out/VAT read the `price_retainer` field). Eliminate that divergence — prefer a derived read-only `price_retainer`.**

### 4.3 §2 services — inject add-on lines
After the plan's own feature list (still from the source of truth), append `.feat-item` `<li>`s for selections — e.g. "+ 2 additional languages (€36/mo each)", "+ Social media: 1 channel (€95/mo)" or for Complete "Social media: 1 channel (included)", "+ 2 additional channels (€75/mo each)". New `CONTRACT_STRINGS` templates (en+de): `s2AddonLanguage`, `s2AddonMailbox`, `s2AddonSocialFirst`, `s2AddonSocialIncluded`, `s2AddonSocialExtra` with `{count}`/`{price}` placeholders. Same `<li>` mechanism → inherits print/layout behaviour.

### 4.4 §3 pricing — reflect cycle + itemize
- Yearly-aware retainer line `s3RetainerLineYearly` (en+de): states yearly amount, 15% discount, per-month equivalent, billed 12 months up front.
- §2 itemizes services with per-item prices; §3 states the single billed amount + cycle + VAT (clean, auditable).
- Explicit yearly-discount line `s3YearlyDiscountLine` (en+de): "Yearly prepayment: 15% discount applied; €X net billed once for 12 months."
- **§4 yearly term variant (decision #1):** prepaid yearly term runs 12 months; cancellation effective at term end; **no refund of prepaid months on early cancellation except statutory Widerrufsrecht**. This is the #1 lawyer-review item (§9).

### 4.5 Layout safety
New controls are `.no-print` (never in PDF). New contract content uses existing classes (`.contract-list`, `.feat-item`, `.contract-p`) → inherits A4 sizing + `break-inside: avoid`. Verification (§8) prints at 0 and many add-ons, monthly + yearly, to confirm no overflow.

---

## 5. Contract: pre-filled agency signature ("BAR", Berlin, date)

### 5.1 What renders (agency column, left)
- **"Berlin, {signature date}"** — reuse the existing `date_signature` field; place is always Berlin (`SITE.address.city`).
- A **simulated handwritten "BAR"** above the signature line.

### 5.2 Format — inline SVG path (decision #6)
Inline SVG `<path>`, not an image, not plain text. Vector → crisp in A4 PDF (raster pixelates); no asset/HTTP/consent concerns; inherits `currentColor`, prints black. Lives as a constant in `contract-strings.ts` (language-neutral) or a small `signature.ts`. `<svg viewBox ~160×64>`, `aria-hidden="true"`, with an adjacent printed "BAR / {SITE.founder}" for clarity. Stroke: `fill:none; stroke:currentColor; stroke-width:~2.5; stroke-linecap/linejoin:round`. Placed just above the agency signature line.

It is a **simulated** signature on a template the owner personally reviews before sending — not represented as a legally-executed autograph; the client still counter-signs and the owner's real signature/QES applies at actual execution.

### 5.3 Print
SVG is in `.contract-doc` → prints. Verify black, not clipped by the signature block's `break-inside: avoid`.

### 5.4 Client side stays blank
Client signature column (place/date/line) remains empty for the client to fill.

---

## 6. Where new data lives
- Numeric `addons` + `billing` → `funnel.ts` (commerce source of truth; contract already imports `FUNNEL`).
- New clause templates (add-on §2 lines, yearly §3/§4 variants, signature labels, `s3ReferenceNote`) → `contract-strings.ts` (en+de).
- Signature SVG path → constant in `contract-strings.ts` or `signature.ts`.
- **Risk:** language/mailbox tooltip strings now duplicate the numeric source — comment-link them; ideally derive text from the number in the component. Don't let "€36" live in two places that can disagree.

---

## 7. Owner decisions — RESOLVED 2026-06-16

All six confirmed. Binding. These **supersede** the "recommend/confirm" notes that previously sat inline.

1. **Yearly = 12-month commitment. ✅** 12 months up front = fixed 12-month term. **No refund on early cancellation except statutory Widerrufsrecht.** §4 yearly variant states term, prepayment, no-refund, Widerrufsrecht carve-out. → #1 lawyer-review item.
2. **15% applies to EVERYTHING. ✅** Base plan AND all add-ons. Yearly invoice = `monthlyTotal × 12 × 0.85`. Pricing-page add-on prices also show ×0.85 when yearly.
3. **Buy-out = 18 × FULL monthly total incl. add-ons. ✅** Always on the monthly total, independent of cycle.
4. **Yearly rounding = whole euro. ✅** `Math.round()` after discount. €219→€2,234 · €390→€3,978 · €570→€5,814.
5. **Contract ID encodes the FULL computed monthly total. ✅ (CHANGED from current plan-base behaviour.)** See §7.1.
6. **Signature = inline SVG hand-drawn "BAR". ✅** Vector, not image/text. Crisp in PDF, black via `currentColor`.

### 7.1 Contract-ID scheme change (decision #5) — spec + caveat
**Current:** `BAR-{planCode}{basePlanPrice}-{CLIENT4}-{YYMMDD}` → `BAR-G390-CAFE-260612`.
**New:** encode full **monthly** total (plan + add-ons): `BAR-{planCode}{monthlyTotal}-{CLIENT4}-{YYMMDD}`. E.g. Growth €390 + 1 language €36 + social first €129 = €555 → `BAR-G555-CAFE-260612`.
Rules: encode the **monthly** total (not yearly) so the ID is stable across cycle and stays short; integer whole-euro; keep the S/G/C `planCode` prefix.
**⚠️ Caveat (Phase 4):** the ID is also the payment reference (`s3PaymentReference`). Encoding the total means the reference changes with add-ons — correct, but: (a) `contractId()` must recompute live on the total (it already recomputes on base price — extend it); (b) header "Contract no." and §3 reference both read `.out-contract-no` from the same `contractId()` — update that one function, verify both show identical values; (c) the encoded number is the **monthly** total even under yearly billing, so a yearly client pays €3,978 while the reference says `555` — add a one-line clarifier (`s3ReferenceNote`, en+de) that the reference is the plan identifier, not the amount due.

---

## 8. Execution phases (plan-only until approved)

**Phase 1 — Data (funnel.ts).** Add `AddonPricing` + `BillingPricing` types; fill `addons` (lang 36, mailbox 12, social 95/129/0, additional 75) + `billing` (0.15) for all 3 locales; comment-link tooltip strings. `astro check` green. No visual change.

**Phase 2 — Pricing toggle.** SSR-render both monthly + yearly prices; segmented toggle (a11y, no-JS show/hide); 15% uniform incl. add-on prices. Verify 3 locales mobile/desktop, no layout shift, no-JS shows monthly.

**Phase 3 — Contract data + controls.** New `CONTRACT_STRINGS` templates (en+de): add-on §2 lines, `s3RetainerLineYearly`, `s3YearlyDiscountLine`, §4 yearly variant, `s3ReferenceNote`, signature labels. Add the add-ons step + billing radio (named, 44px, localStorage). No math yet — inputs persist.

**Phase 4 — Contract math + §2/§3 render.** Wire add-ons + billing into `monthlyTotal`; inject §2 add-on `<li>`s; yearly-aware §3 lines + §4 yearly term; buy-out = monthlyTotal×18; contract-ID = full monthly total per §7.1 (verify header + reference in sync); `s3ReferenceNote` shown. Verify print at 0 and many add-ons, monthly + yearly.

**Phase 5 — Agency signature.** "BAR" SVG + "Berlin, {date}" in the agency column; client side blank. Verify print: vector crisp, black, not clipped, 2-page layout intact.

**Phase 6 — Verify + docs.** `pnpm validate` (lint + translations + astro check + build). Print-to-PDF both locales × several selection combos; confirm A4 unbroken, totals/VAT/yearly correct, contract-ID = reference everywhere. Update per-client `CLAUDE.md` / contract notes. Keep `noindex` + `Disallow: /contract`. Re-state the 🔴 lawyer gate.

---

## 9. Non-negotiables
- `BaseLayout.astro` not rewritten; extend via props.
- Trilingual where applicable; parity green.
- No change to SSR endpoints, schema, analytics, security, consent.
- Contract stays `noindex` + robots-disallowed.
- A4 print/PDF unbroken — verified, not assumed.
- Atomic commits, owner sign-off, no auto-commit.
- 🔴 The contract remains **not lawyer-reviewed**. The yearly 12-month term (decision #1) and the pre-printed signature both **raise** the importance of the Berlin-Rechtsanwalt review already gating this file. Do not use to charge a real client before that review. Specific lawyer items: yearly-term + no-refund + Widerrufsrecht interaction; §305c/§307 AGB control on the term; the simulated-signature representation.

## 10. Acceptance checklist
- [ ] funnel.ts numeric `addons` (36/12/95-129-0/75) + `billing.yearlyDiscount 0.15`, all locales, parity green.
- [ ] Pricing: monthly/yearly toggle, 15% uniform incl. add-ons, SSR-safe, 3 locales, no-JS monthly, no layout shift.
- [ ] Contract form: add-on steppers + billing radio, persist to localStorage, ≥44px.
- [ ] Contract math: monthlyTotal = plan + add-ons; yearly = round(×12×0.85); buy-out = ×18 of monthlyTotal; VAT on billed amount.
- [ ] Contract ID = full monthly total (`BAR-G555-…`); header + payment reference identical; `s3ReferenceNote` present.
- [ ] §2 lists add-ons as line items; §3 shows billed amount + cycle + yearly-discount line; §4 yearly 12-month term + no-refund + Widerrufsrecht.
- [ ] Agency signature: "Berlin, {date}" + simulated "BAR" SVG; client side blank; prints crisp/black; A4 intact.
- [ ] Print verified 0 + many add-ons, monthly + yearly, both locales — no overflow, totals correct.
- [ ] `pnpm validate` green; `noindex` + robots disallow intact.
- [ ] 🔴 lawyer-review gate re-stated in handover.
