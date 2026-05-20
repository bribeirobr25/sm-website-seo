# Big-number stat callouts

**Source:** `docs/audit/ui-ux-reference-study.md` §10 (Horeca-Social, live-measured: h2-as-statistic at `15+`, `400+`, `150+`).
**Implementation:** `docs/design/components/_impl/StatCallouts.astro` (Phase 3b — complete 2026-05-19; relocated from `clients/reference-solo-barber/` per CLIENTS-RESTRUCTURE-PLAN-2026-05-19).

## 1. Purpose + when to use

A row of 2-4 large numeric callouts — each a single oversized digit/number-string followed by a short label — used as social proof for service businesses. Translates *"we have N years of experience / served N clients / delivered N projects"* into a scannable visual moment.

**Per-vertical surfaces:**

| Vertical | Example callouts |
|---|---|
| trades | `15+ Jahre` · `200+ Kunden` · `1.500+ Projekte` |
| professional-services | `12 Jahre · 350+ Mandate · 6 Sprachen` |
| agency-self | `8 Jahre · 40+ Kunden · 95 Lighthouse Mobile` |
| beauty (premium) | `25 Stylists · 18 Treatments · 4.8★ Rating` |
| health | `15 Jahre · 12.000+ Behandlungen · 4 Standorte` |
| studio | `200 Trainer · 14 Studios · 50.000+ Mitglieder` |

**When NOT to use:**
- For brand-new businesses (< 1 year, < 50 clients). Stat callouts that read `1+ Year` or `< 10 Clients` are weaker than no stats at all — they actively undermine the trust they're trying to build.
- For artisan / maker / boutique clients where the volume signal is *anti*-brand (the appeal is rarity, not scale).
- More than 4 in a row — at 5+ the row becomes a stat soup that the eye can't parse.

**Honesty rule (per `DESIGN-BEST-PRACTICES.md` §11):** never invent the number. If the client isn't sure, omit the callout rather than guess.

## 2. HTML / accessibility structure

```html
<section class="sco-section" aria-label="Statistics">
  <ul class="sco-list">
    <li class="sco-item">
      <span class="sco-number" aria-label="More than 15 years">15+</span>
      <span class="sco-label">Jahre Erfahrung</span>
    </li>
    <li class="sco-item">
      <span class="sco-number" aria-label="More than 400 clients">400+</span>
      <span class="sco-label">Kunden</span>
    </li>
    <li class="sco-item">
      <span class="sco-number" aria-label="More than 150 projects">150+</span>
      <span class="sco-label">Projekte</span>
    </li>
  </ul>
</section>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`aria-label` on each number** — screen readers otherwise read `"15+"` as `"fifteen plus"` (acceptable in English) but in German read it awkwardly. The `aria-label="Mehr als 15"` is clearer.
- **Use `<ul>` for the row** — it IS a list of items, even when displayed horizontally. Aids screen-reader navigation.
- **`tabular-nums` is mandatory** on the number spans — the digits must line up visually across callouts (a `200+` should sit on the same baseline as `15+`).
- **Contrast** at large display size, the AA floor is 3:1 (large text). At ≥ 48px / weight ≥ 700 the bar is even lower; verify ≥ 3:1 in practice.

## 3. CSS spec (measured from Horeca §10 + agency adaptation)

```css
.sco-section {
  padding-block: clamp(4rem, 8vw, 8rem);
}

.sco-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: clamp(2rem, 5vw, 4rem);
  list-style: none;
  padding: 0;
  margin: 0;
}

.sco-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;     /* not centered — left-aligns to the section's reading flow */
}

.sco-number {
  font-family: var(--font-display);
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 600;
  line-height: 0.95;
  letter-spacing: var(--tracking-display-sans);
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}

.sco-label {
  font-family: var(--font-body);
  font-size: clamp(14px, 1.5vw, 16px);
  font-weight: 400;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--color-text);
}
```

**Why these values:**
- **`clamp(48px, 8vw, 96px)` on the number** — fluid scale from mobile (48px) to large desktop (96px). The 8vw factor produces a smooth scaling curve without explicit breakpoints.
- **`line-height: 0.95`** — slightly tighter than the digit's natural box. Lets the number sit visually larger than its computed height; works because numerals have no descenders.
- **`color: var(--color-accent)`** for the number — the accent color is reserved for CTAs per `DESIGN-BEST-PRACTICES.md` §5, but stat numbers are a *conversion-adjacent trust signal* and qualify for the accent treatment. The label stays in `--color-text` so the section doesn't become a wall of brand color.
- **Left-aligned, not centered** — measured pattern. Centered stat rows feel like infographics; left-aligned stats read as in-line with the surrounding copy.

## 4. Required CSS custom properties

```css
:root {
  --font-display: 'Inter', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, sans-serif;
  --color-accent: #C1643B;
  --color-text: #2B1A12;
  --tracking-display-sans: -0.022em;
}
```

## 5. Performance constraints

- **No JS required.** Pure CSS.
- **No images, no icons.** The number IS the visual element.
- **Optional: count-up animation on scroll** — if added, must respect `prefers-reduced-motion` and complete in ≤ 1500ms. Anti-pattern: numbers that count up over 3+ seconds (annoying and delays comprehension). Default recommendation: no animation. The static stat is enough.

## 6. Reference sites

| Site | Study § | Notes |
|---|---|---|
| Horeca-Social | §10 | `15+`, `400+`, `150+` as h2 elements; brand-pink accent on the numbers |

Only one site in the study uses this exact pattern, but the move is widely used across service-business landings — the codification here gives our agency a single canonical implementation.

## 7. UI_REVIEW.md cross-link

When auditing a service-business client whose trust signals are buried in prose:

> *"Issue #N — credentials/experience claims are buried in paragraph copy (e.g., '15 years of experience' in the about section): adopt the big-number stat callouts per `docs/design/components/stat-callouts.md`. 3 callouts in a row above the team section is the canonical placement."*

## 8. Implementation pointer

**Phase 3b deliverable (shipped 2026-05-19):** `docs/design/components/_impl/StatCallouts.astro`

Props (planned):
- `stats: Array<{ number: string; label: string; ariaLabel: string }>` (required, length 2-4) — the number is a string (so `15+`, `4.8★`, `5/5` all work)
- `align?: 'left' | 'center'` (default `'left'`)

The `_demo/stat-callouts.astro` page will render examples for trades (`15+ Jahre / 200+ Kunden / 1500+ Projekte`), professional-services (`12 Jahre / 350+ Mandate / 6 Sprachen`), and agency-self.
