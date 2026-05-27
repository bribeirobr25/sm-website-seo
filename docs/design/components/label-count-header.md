# `LABEL (N)` monospace section header

**Source:** `docs/audit/ui-ux-reference-study.md` §9 (Mily Group, `PRODUCTS (5)`) and §19 (T11, `PORTFOLIO [21]`). Confirmed independently by three sites in the study (third: §8 Hubtown, loaded mono font).
**Implementation:** `docs/design/components/_impl/LabelCountHeader.astro` (Phase 3b — complete 2026-05-19; relocated from `clients/reference-solo-barber/`).

## 1. Purpose + when to use

A small uppercase section header in a **monospace** typeface, formatted as `LABEL (N)` or `LABEL [N]` where N is the count of items in the section below. The mono signals "this is a directory / curated index / system reference" — the visual vocabulary of catalogs, not narratives.

**Per-vertical surfaces:**

| Vertical | Section name pattern | Example |
|---|---|---|
| gastronomy | `MENÜ (12)`, `WEINE (8)`, `DESSERTS (4)` | menu sections grouped by category |
| beauty | `BEHANDLUNGEN (15)`, `STYLING (6)` | treatment categories |
| trades | `LEISTUNGEN (8)`, `PROJEKTE (24)` | service catalog, project portfolio |
| professional-services | `LEISTUNGEN (5)`, `BRANCHEN (12)` | service areas, industries served |
| pets | `PRODUKTE (5)`, `RASSEN (18)` | product catalog, breed-specific content |
| artisan | `KOLLEKTIONEN (3)`, `WERKSTÜCKE (24)` | curated maker collections |

**When NOT to use:**
- For sections with a single item (the count is misleading — `PHILOSOPHIE (1)` reads as a system error).
- For narrative sections (story / about / how-it-works) — the mono signals "data," not "voice."
- More than 3-4 times per page — the pattern loses its "this is curated" weight if every section uses it.

## 2. HTML / accessibility structure

```html
<h2 class="lch-header">
  <span class="lch-label">MENÜ</span>
  <span class="lch-count" aria-label="12 items">(12)</span>
</h2>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`<h2>` is the correct semantic level** when this header introduces a major page section. Use `<h3>` for nested sub-sections.
- **`aria-label` on the count** — screen readers otherwise read `"(12)"` as `"open-paren twelve close-paren"`, which is awkward. `aria-label="12 items"` (or the localized equivalent) is read cleanly.
- **Color contrast** must pass WCAG AA against the section background. At small sizes (15-16px), the AA floor is 4.5:1.
- **Uppercase + tracked spacing** affects readability for users with dyslexia. Limit the label to 1-3 words; never exceed 14 characters total.

## 3. CSS spec (measured from Mily §9 and T11 §19)

```css
.lch-header {
  font-family: var(--font-mono);
  font-size: 15.9px;              /* Mily measured value */
  font-weight: 600;
  line-height: 24.3px;
  letter-spacing: 0.4px;          /* positive tracking on uppercase mono */
  text-transform: uppercase;
  color: var(--color-text-warm);  /* or --color-text per brand */
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}
.lch-count {
  font-weight: 400;
  opacity: 0.7;
}
```

**Why these specific values:**
- **font-size 15.9-16px** is the studied "directory label" scale. Larger reads as a normal headline; smaller reads as a footer tag.
- **font-weight 600 on the label, 400 on the count** = the label leads visually; the count is metadata.
- **letter-spacing +0.4px** on uppercase mono is the measured Mily/T11 value. Mono is naturally narrow; positive tracking opens it just enough.
- **opacity 0.7 on the count** = the count is informative but not the heading. The transparent reduction inherits the label's color cleanly across themes.

## 4. Required CSS custom properties

```css
:root {
  --font-mono: 'IBM Plex Mono', 'JetBrains Mono', 'Geist Mono', monospace;
  --color-text-warm: #2B1A12;     /* or --color-text per brand */
}
```

**Drop-in minimal CSS for a non-agency scaffold:**

```css
.lch-header {
  --font-mono: ui-monospace, 'SF Mono', Menlo, monospace;
  font-family: var(--font-mono);
  /* …then the rules from §3 above */
}
```

The fallback `ui-monospace, 'SF Mono', Menlo, monospace` is the OS-native mono stack — works without any custom font load if a Tier-1 client wants to skip the IBM Plex Mono fetch.

## 5. Performance constraints

- **Mono font load:** if not already in the project's font set, loading IBM Plex Mono adds ~30-40 KB (woff2, 1 weight, latin subset). Acceptable for any Tier 2+ project; for Tier-1 single-page builds, use the OS-native mono stack instead.
- **`font-display: swap`** on the `@font-face` declaration so the mono font doesn't block render — the fallback mono will display first and re-flow when the custom mono arrives.

## 6. Reference sites

| Site | Study § | Mono font used |
|---|---|---|
| Mily Group | §9 | IBM Plex Mono |
| T11 | §19 | Monument Grotesk Mono |
| Hubtown | §8 (loaded, not visibly used) | Commit Mono |

**Pattern confirmed across 3 independent sites** in the study — the strongest single signal that "mono = catalog label" is a 2026 convention worth codifying.

## 7. archived UI review at `docs/audit/archived/2026-05-12-porto-dos-ribeiros-uiux-review.md` cross-link

When auditing a client's existing site with a generic-looking menu / portfolio section header (e.g., styled the same as a hero headline), reference this component:

> *"Issue #N — menu sections styled as narrative headlines: adopt the `LABEL (N)` monospace section header per `docs/design/components/label-count-header.md` for catalog-style sections. Distinguishes 'directory' from 'story' visually."*

## 8. Implementation pointer

**Phase 3b deliverable (shipped 2026-05-19):** `docs/design/components/_impl/LabelCountHeader.astro`

Props (planned):
- `label: string` (required) — the label text (will be uppercased)
- `count: number` (required) — the item count
- `level?: 2 | 3` (default `2`) — the heading level

The `_demo/label-count-header.astro` companion page will render 3-4 examples across vertical contexts (`MENÜ (12)`, `LEISTUNGEN (8)`, `PROJEKTE (24)`).
