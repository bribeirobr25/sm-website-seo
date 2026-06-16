# HANDOVER — Add Social Media to the pricing plans (funnel.ts)

**For:** Claude Code
**From:** pricing strategy session (2026-06-16)
**Project:** `clients/baragency/` (BAR Agency — the agency's own marketing site)
**Mode:** **PLAN-ONLY / Option B.** Produce a written plan, get owner approval, THEN execute. No source edits before approval. Atomic commits, owner sign-off, no auto-commit.
**Scope:** Pricing/funnel content only + the `/pricing` page render. **No** logic, route, schema, SEO, analytics, security, or form-integration changes.

---

## 1. What we're doing

Adding a **Social Media** service to the plans in a **hybrid model**:
- **Complete:** social media **included** (1 channel, 8 posts/month).
- **Start & Growth:** social media is an **optional paid add-on**.
- **Any plan:** an **additional channel** can be added for **+€75/mo**.

This rewards the upgrade to Complete and makes every hour of social-media work explicitly paid (never bundled free into Start/Growth).

---

## 2. Where everything lives (verified 2026-06-16)

- Single source of truth for pricing: **`clients/baragency/src/lib/funnel.ts`** → `FUNNEL: Record<Locale, FunnelContent>` with `en` / `de` / `pt-br` (Locale type from `./site`).
- Plans are `FUNNEL[locale].pricing.tiers: PackageTier[]`. The `PackageTier` type already supports add-on-style bullets: each `features` entry is **either** a plain `string` **or** `{ label: string; note: string }` (the `note` renders as an ⓘ tooltip — this is how the existing "More languages +€36/mo" and "Extra mailboxes +€12/mo" notes are done). Reuse that pattern; **do not invent a new mechanism.**
- Parity is enforced at **compile time by the `Record<Locale, …>` type**, NOT by `scripts/validate-translations.mjs` (funnel.ts is deliberately outside the runtime i18n validator — see the file's top doc comment). So all three locales must be filled or `astro check` fails.
- The `/pricing` page (+ `/de/pricing`, `/pt-br/pricing`) consumes this module. Section components live under `src/components/sections/` (e.g. `PricingTiers.astro`).

---

## 3. Inviolable rule — plan names are NOT translated

In **all three locales** the plans are named exactly: **Start**, **Growth**, **Complete**.

⚠️ The current DE content translates them ("Wachstum", "Komplett"). **Change the DE `name` fields back to `Growth` and `Complete`** so all locales match. **This is the only rename permitted in this handover** — do not retranslate or rename anything else.

*(Watch-item for the plan: confirm nothing downstream keys off the DE display names "Wachstum"/"Komplett" — e.g. the contract page `/de/contract`, the funnel `ui.pricingNav`, or any hard-coded reference. If something does, update it to the canonical name in the same commit.)*

---

## 4. Change 1 — Complete gains an included social-media bullet

Add one new bullet to the **Complete** tier's `features`, in all 3 locales. Position it right after the Google-Business-Profile-management bullet and before the analytics-dashboard bullet.

- **en:** `Social media included: 1 channel, 8 posts / month (3 short videos + 5 image/text) — 2 posts/week`
- **de:** `Social Media inklusive: 1 Kanal, 8 Beiträge / Monat (3 Kurzvideos + 5 Bild/Text) — 2 Beiträge/Woche`
- **pt-br:** `Mídia social incluída: 1 canal, 8 posts / mês (3 vídeos curtos + 5 imagem/texto) — 2 posts/semana`

No price change to any tier. €219 / €390 / €570 stay exactly as they are.

---

## 5. Change 2 — New "Add social media" section below the three tiers

Add a new typed content block to `PricingContent` (extend the interface) — e.g. a `socialAddon` object — filled for all 3 locales, and render it on `/pricing` directly below the tier cards. Suggested shape (adapt to match the file's existing conventions):

```ts
socialAddon: {
  eyebrow: string;       // section kicker
  heading: string;
  subtitle: string;
  rows: Array<{ plan: string; price: string; posts: string }>;
  additionalNote: string; // the +€75 additional-channel line
  fineprint: string;      // honest "fine print" paragraph
}
```

### Copy — section header

| Field | EN | DE | PT-BR |
|---|---|---|---|
| heading | Add social media | Social Media dazubuchen | Adicionar mídia social |
| subtitle | Regular posts that reach your customers — planned, designed and published by us. | Regelmäßige Beiträge, die deine Kundschaft erreichen — von uns geplant, gestaltet und veröffentlicht. | Posts regulares que alcançam seus clientes — planejados, criados e publicados por nós. |

### Copy — rows (prices identical across locales; only the labels translate)

| Plan | Price field (all locales) | Posts — EN | Posts — DE | Posts — PT-BR |
|---|---|---|---|---|
| Start | `+€95/mo` | 4 posts/month (1 short video + 3 image/text) | 4 Beiträge/Monat (1 Kurzvideo + 3 Bild/Text) | 4 posts/mês (1 vídeo curto + 3 imagem/texto) |
| Growth | `+€129/mo` | 5 posts/month (2 short videos + 3 image/text) | 5 Beiträge/Monat (2 Kurzvideos + 3 Bild/Text) | 5 posts/mês (2 vídeos curtos + 3 imagem/texto) |
| Complete | EN `Included` · DE `Inklusive` · PT-BR `Incluído` | 8 posts/month (3 short videos + 5 image/text) | 8 Beiträge/Monat (3 Kurzvideos + 5 Bild/Text) | 8 posts/mês (3 vídeos curtos + 5 imagem/texto) |

### Copy — additional-channel note

- **en:** `Each additional channel, same post count: +€75/month`
- **de:** `Jeder weitere Kanal mit gleicher Beitragsanzahl: +75 €/Monat`
- **pt-br:** `Cada canal adicional, mesma quantidade de posts: +75 €/mês`

### Copy — fine print (match the page's existing honest "fine print" tone)

- **en:** `Social media, honestly priced. We plan, design and publish your posts — short videos and image/text — on a channel of your choice (Instagram, Facebook, LinkedIn or TikTok). Complete includes one channel; on Start and Growth you add social media optionally. Each additional channel is €75/month. Cancel monthly, like everything we do.`
- **de:** `Social Media, ehrlich gerechnet. Wir planen, gestalten und veröffentlichen deine Beiträge — Kurzvideos und Bild/Text — auf einem Kanal deiner Wahl (Instagram, Facebook, LinkedIn oder TikTok). Beim Complete-Paket ist ein Kanal bereits enthalten; bei Start und Growth buchst du Social Media optional dazu. Jeder weitere Kanal kostet 75 €/Monat. Monatlich kündbar, wie alles bei uns.`
- **pt-br:** `Mídia social, com preço honesto. Nós planejamos, criamos e publicamos seus posts — vídeos curtos e imagem/texto — em um canal à sua escolha (Instagram, Facebook, LinkedIn ou TikTok). O Complete já inclui um canal; no Start e no Growth você adiciona mídia social opcionalmente. Cada canal adicional custa 75 €/mês. Cancele mensalmente, como tudo o que fazemos.`

---

## 6. Currency formatting

Match whatever the file already uses for the tier prices (the existing tiers use a `€`-prefixed style, e.g. `€219`). Keep the add-on prices consistent with that existing convention (e.g. `+€95/mo`, not `95 €` — unless the file's house style is `95 €`, in which case follow the file). The German fine-print prose may use the German `75 €` convention inside sentences; the structured price fields should match the tier-price style for visual consistency in the cards. **Follow the file, don't introduce a second style.**

---

## 7. Constraints (re-skin/content discipline)

- All new strings in EN + DE + PT-BR; `astro check` (compile-time parity) green.
- No tier price changes. No other feature edits except the Complete social bullet + the DE plan-name fix.
- Do not touch `BaseLayout`, schema, SSR endpoints, analytics, security headers, consent.
- Keep `noindex`.
- `pnpm validate` (lint + translations + astro check + build) passes before done.
- Atomic commits; owner sign-off; no auto-commit.

---

## 8. Acceptance checklist

- [ ] Plans are **Start / Growth / Complete** in EN, DE, PT-BR (DE no longer "Wachstum"/"Komplett"); any downstream reference to the old DE names updated.
- [ ] Complete tier has the included-social bullet in all 3 locales, correctly positioned.
- [ ] New "Add social media" section renders below the tiers on `/pricing`, `/de/pricing`, `/pt-br/pricing`.
- [ ] Add-on prices: Start **+€95/mo**, Growth **+€129/mo**, additional channel **+€75/mo** (any plan), Complete shows **Included/Inklusive/Incluído**.
- [ ] Channels listed include Instagram, Facebook, LinkedIn, TikTok.
- [ ] No tier price changed; no unrelated feature changed; `noindex` intact.
- [ ] `pnpm validate` green; `/pricing` visually verified at mobile + desktop in all 3 locales.

---

## 9. Reference

- `clients/baragency/src/lib/funnel.ts` — the file to edit (PackageTier type + the `{label, note}` tooltip pattern already there).
- `clients/baragency/src/components/sections/PricingTiers.astro` (and siblings) — the render layer.
- Current confirmed prices: Start €219 · Growth €390 · Complete €570 (pure-monthly, no setup fee — unchanged by this handover).

**First action:** read `funnel.ts` end-to-end, confirm the `socialAddon` shape against the file's real conventions, then present the plan for approval. Do not edit source until approved.
