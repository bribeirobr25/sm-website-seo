# Hours-in-nav

**Source:** `docs/audit/ui-ux-reference-study.md` §15 (Haven Annecy, live-measured).
**Implementation:** `clients/reference-solo-barber/src/components/layout/HoursInNav.astro` (Phase 3b — pending).

## 1. Purpose + when to use

Top-nav items rendered as a two-line stack: a service / day label on the first line, the corresponding opening hours on the second. Example:

```
COFFEE          BRUNCH
8:00 – 16:00    9:00 – 14:00
```

For a hospitality / health / beauty business, **opening hours are the most-checked piece of information** on the page. Putting them *into the nav* — not buried in a footer — makes them visible before the visitor even reaches the hero.

**Per-vertical surfaces:**

| Vertical | Recommended nav pattern |
|---|---|
| gastronomy | `KÜCHE / 12:00 – 22:00`, `BAR / 18:00 – 02:00` — by service area |
| beauty | `SALON / MO-FR 9-19`, `WALK-IN / SAT 10-16` — by day grouping |
| health | `SPRECHSTUNDE / MO-FR 8-12, 14-18`, `NOTFALL / 24h` — by mode |
| studio | `PRÄSENZ / MO-FR 7-22`, `STREAMING / 24h` — by access |

**When NOT to use:**
- For businesses with simple "Mo-Fr 9-17" hours — surfacing them in the nav makes the nav feel cluttered without adding value (the footer is enough).
- For trades / professional-services where the visitor expects to book / contact rather than walk in (the question isn't "are you open?" but "can you fit me in?").
- For businesses with seasonal or variable hours that change weekly — the static nav can't keep up; use a "current hours" widget instead.

## 2. HTML / accessibility structure

```html
<nav aria-label="Primary">
  <ul class="hin-list">
    <li class="hin-item">
      <a href="#coffee">
        <span class="hin-label">COFFEE</span>
        <span class="hin-hours" aria-label="Open 8:00 to 16:00">8:00 – 16:00</span>
      </a>
    </li>
    <li class="hin-item">
      <a href="#brunch">
        <span class="hin-label">BRUNCH</span>
        <span class="hin-hours" aria-label="Open 9:00 to 14:00">9:00 – 14:00</span>
      </a>
    </li>
  </ul>
</nav>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`aria-label` on the hours span** — screen readers should announce `"Open 8:00 to 16:00"` rather than `"8 colon 00 dash 16 colon 00"`. Localize per `I18N.md` rules: `"Geöffnet 8 bis 16 Uhr"` in German.
- **`<nav aria-label="Primary">`** — required for sites with multiple nav landmarks (header + footer + mobile).
- **`tabular-nums` on the hours span** — per `DESIGN-BEST-PRACTICES.md` §4 Typography rules. Without this, the digits in `8:00 – 16:00` vs. `9:00 – 14:00` won't align across nav items.
- **Mobile collapse:** in a hamburger menu, the two-line stack survives; the items become a vertical list with the hours still on the second line. Verify at 375px viewport.

## 3. CSS spec (measured from Haven §15)

```css
.hin-list {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
}
.hin-item a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: var(--color-text-warm);
  transition: color var(--motion-warm) ease;
}
.hin-item a:hover { color: var(--color-accent); }
.hin-label {
  font-size: 14.4px;
  font-weight: 300;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  line-height: 1.2;
}
.hin-hours {
  font-size: 12px;
  font-weight: 300;
  font-variant-numeric: tabular-nums;
  line-height: 1.2;
  margin-top: 2px;
  opacity: 0.75;
}
```

**Why these specific values:**
- **Two-line stack, 2px margin between** — Haven's measured spacing. Tight enough that label + hours read as one unit; loose enough that each is independently scannable.
- **Light weight (300) throughout** — works on the cream Haven bg `#FFFAF7` with `#2B1A12` text at high contrast. Light weight + warm cream is the hospitality signature. On pure-white bg, the 300 weight would feel thin; bump to 400.
- **`opacity: 0.75` on the hours** = hours are informative but the *service category* (`COFFEE`, `BRUNCH`) is what the visitor clicks. Color hierarchy through opacity, not separate tokens.

## 4. Required CSS custom properties

```css
:root {
  --color-text-warm: #2B1A12;
  --color-accent: #C1643B;
  --motion-warm: 500ms;
}
```

**Drop-in minimal CSS:** the component requires no exotic tokens — adapts to any color scheme that defines a body text color + an accent.

## 5. Performance constraints

- **No JS required.** Pure HTML + CSS.
- The hours are static text in the DOM. **Do NOT fetch hours dynamically from Google Business Profile via JS** — the data is part of the page's content for SEO purposes (Google Maps + structured data both crawl the static text). If the client's hours change, update the source code; this is a once-a-year action for most local businesses.
- Pair with the `OpeningHoursSpecification` Schema.org structured data in `SEO.md` §5 so the hours appear in rich results too.

## 6. Reference sites

| Site | Study § | Implementation |
|---|---|---|
| Haven Annecy | §15 | Two-line `COFFEE / 8:00-4:00` + `BRUNCH / 9:00-2:00` in the top nav |

Only one site in the study uses this exact pattern, but it's a strong-enough hospitality signal (and the audit-verified mobile behavior survives the hamburger collapse) that it's worth codifying for our agency template.

## 7. UI_REVIEW.md cross-link

When auditing a client whose hours are buried in the footer or behind a "Contact" page, reference this component:

> *"Issue #N — opening hours not surfaced above the fold: adopt the hours-in-nav pattern per `docs/design/components/hours-in-nav.md`. Single most-checked piece of information for hospitality / beauty / health clients."*

## 8. Implementation pointer

**Phase 3b deliverable:** `clients/reference-solo-barber/src/components/layout/HoursInNav.astro`

Props (planned):
- `items: Array<{ label: string; hours: string; ariaLabel: string; href?: string }>` (required)
- `variant?: 'desktop' | 'mobile-list'` (default `'desktop'`)

The `_demo/hours-in-nav.astro` page will render 3 examples: a 2-item gastronomy version (`COFFEE` / `BRUNCH`), a 3-item beauty version (`SALON` / `WALK-IN` / `EVENT`), and the mobile hamburger collapse.
