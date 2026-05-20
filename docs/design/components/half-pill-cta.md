# Half-pill sticky-edge CTA

**Source:** `docs/audit/ui-ux-reference-study.md` §15 (Haven Annecy, live-measured + Phase 1b motion read).
**Implementation:** `docs/design/components/_impl/HalfPillCTA.astro` (Phase 3b — complete 2026-05-19; relocated from `clients/reference-solo-barber/` per CLIENTS-RESTRUCTURE-PLAN-2026-05-19).

## 1. Purpose + when to use

A high-emphasis reservation / booking / quote CTA rendered as a **half-pill** — rounded on the left side, square on the right — sitting in the top-right of the nav row. The visual reads as "a tab sticking in from the right edge of the viewport."

**The trick (corrected Phase 1b read):** Haven's button is **NOT `position: fixed`**. It's `position: static` in the nav row's right cell. The `border-radius: 30px 0 0 30px` does *all* the work — the optical illusion of "edge tab" comes from the radius alone.

**Per-vertical surfaces:**

| Vertical | CTA label (DE primary / EN secondary) | Action target |
|---|---|---|
| gastronomy | `RESERVIEREN` / `RESERVE` | OpenTable / SevenRooms / TheFork link, or `tel:` |
| beauty | `TERMIN` / `BOOK` | Treatwell / Booksy / `tel:` |
| health | `TERMIN` / `APPOINTMENT` | Doctolib link or `mailto:` form |
| studio | `KURSPLAN` / `JOIN` | class-schedule anchor or Mindbody |
| trades | `KOSTENVORANSCHLAG` / `QUOTE` | contact form or `tel:` |

**When NOT to use:**
- For Tier-1 single-page info sites where there is no reservation flow (the page's primary CTA is `tel:` or maps — the half-pill is overkill).
- For clients with very short nav bars (< 3 items) — the half-pill needs nav context to read as a "tab"; in isolation it looks orphaned.

## 2. HTML / accessibility structure

```html
<a
  href="https://booking.example.com"
  class="hpc-cta"
  aria-label="Reserve a table"
>
  RESERVE
</a>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **`aria-label` is mandatory** when the visible label is shortened (`RESERVE`) and a screen-reader user needs context. The label should describe the action + the *what*: `"Reserve a table"`, `"Book an appointment"`, not just `"Reserve"`.
- **Tap-target ≥ 44 × 44 px on mobile** (per `CHECKLIST.md` §2 Mobile). The recommended padding (`13.5px 27px` per the Haven measurement) plus a 14.4px font yields ~49 × 118 px — comfortably above the floor.
- **Contrast ≥ 4.5:1** between `--color-accent` (background) and the text color. White on Haven's terracotta `#C1643B` = 4.55:1 → passes AA; verify per-client before shipping.
- **Focus ring required** — use `focus-visible:ring-2 focus-visible:ring-[--color-accent] focus-visible:ring-offset-2` per the agency's standard focus-ring pattern (`DESIGN-BEST-PRACTICES.md` §7).
- **Hover state via background-color, not transform.** Avoid `transform: scale()` on the CTA — it triggers layout instability on touch tap (visible flicker on iOS Safari).

## 3. CSS spec (measured from Haven §15)

```css
.hpc-cta {
  background-color: var(--color-accent);
  color: var(--color-bg-cream);              /* or white per brand */
  border-radius: var(--radius-pill-half);    /* 30px 0 0 30px */
  padding: 13.5px 27px;
  font-size: 14.4px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: background-color var(--motion-warm) ease;
}
.hpc-cta:hover {
  background-color: var(--color-accent-deep);
}
.hpc-cta:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Why these specific values** (all measured from Haven, not invented):
- `13.5px 27px` padding = the hospitality "substantial-not-precise" feel; compare Apple's clipped `11px 21px` button.
- `letter-spacing: 0.5px` on the uppercase label = the calm hospitality tracking. Looser would feel signage-y; tighter would feel tech.
- `transition: background-color 0.5s ease` = the warm-register motion unit. **No transform, no scale, no shadow change** — Haven's restraint is what makes the hover feel hospitable rather than reactive.

## 4. Required CSS custom properties (component is scaffold-portable when these are defined)

```css
:root {
  --color-accent: #C1643B;        /* per-client; example = Haven terracotta */
  --color-accent-deep: #A24D27;   /* darker for hover; per-client */
  --color-bg-cream: #FBF8F3;      /* or white per brand */
  --radius-pill-half: 30px 0 0 30px;
  --motion-warm: 500ms;
}
```

**Drop-in minimal CSS** for a scaffold that doesn't already have these tokens (use as a one-time bootstrap when copying the component into a non-agency-canonical project):

```css
.hpc-cta {
  --color-accent: #C1643B;
  --color-accent-deep: #A24D27;
  --radius-pill-half: 30px 0 0 30px;
  --motion-warm: 500ms;
  /* …then the rules from §3 above */
}
```

## 5. Performance constraints

- **No JS required.** The component is pure CSS — adds 0 bytes to the JS bundle.
- The button itself does not load any external resources beyond what its containing nav already loads.
- **Avoid `box-shadow` on the rest state.** Shadows trigger compositor work that, while minor on one button, adds up on pages with many "premium-feel" elements. Haven uses zero shadow on this CTA.

## 6. Reference sites

| Site | Study § | Notes |
|---|---|---|
| Haven Annecy | `ui-ux-reference-study.md` §15 | Canonical reference. Measured 2026-05-18, motion specs 2026-05-19. |

**Related but different patterns:**
- Full pill (rounded both sides) — see `DESIGN-BEST-PRACTICES.md` §7 Primary CTA button using `var(--radius-full)`. Use the full pill when the CTA is *centered* in the layout, not edge-anchored.
- Fixed-position floating action button (mobile) — see `DESIGN-BEST-PRACTICES.md` §7 "Sticky service-CTA bubble (mobile)". The half-pill is NOT a mobile FAB; on small viewports it stays in the nav row.

## 7. UI_REVIEW.md cross-link

When auditing a client's existing site and a missing reservation/booking CTA is the finding, reference this component:

> *"Issue #N — no prominent reservation CTA: adopt the half-pill sticky-edge CTA per `docs/design/components/half-pill-cta.md`. Per-vertical label and target documented in §1."*

## 8. Implementation pointer

**Phase 3b deliverable (shipped 2026-05-19):** `docs/design/components/_impl/HalfPillCTA.astro`

Props (planned):
- `href: string` (required)
- `label: string` (required) — the visible button text
- `ariaLabel: string` (required when label is shortened) — screen-reader description
- `variant?: 'primary' | 'subtle'` (default `'primary'`)

The `_demo/half-pill-cta.astro` companion page will render the component in solo-barber's dark+amber identity AND show inline-commented token swaps for gastronomy (cream + terracotta) and beauty (cream + peach).
