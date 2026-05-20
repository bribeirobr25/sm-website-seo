# Alternating-section-background rhythm

**Source:** `docs/audit/ui-ux-reference-study.md` §1 (Apple iPhone — alternating `#fff` ↔ `rgb(245, 245, 247)` across 14 sections).
**Implementation:** `docs/design/components/_impl/Section.astro` (Phase 3b — complete 2026-05-19; relocated from `clients/reference-solo-barber/` per CLIENTS-RESTRUCTURE-PLAN-2026-05-19).

## 1. Purpose + when to use

The lowest-effort way to make a long scroll feel structured: alternate the section background between two near-neutral values — typically pure (or near-pure) `--color-bg` and a faintly tinted `--color-bg-alt`. Each section's background contrasts subtly with its neighbors, chunking the scroll into perceptual blocks.

**Apple's example:** primary bg `#fff`, alt bg `#f5f5f7` (RGB 245, 245, 247 — a 1-2 % darker grey on the red and green channels, blue stays flat). The alt is *just* perceptible at desktop brightness — visitors register the rhythm without noticing the trick.

**Per-vertical surfaces:**

| Surface | When to reach for it |
|---|---|
| Any landing > 5 sections | The pattern earns its weight once the page has ≥ 5 sections (otherwise the rhythm doesn't register) |
| Apple-style product / service catalog | Lineup → guided tour → why-buy-from-us → upgrade trade-in → features → privacy → essentials. Each section gets its own ambient block. |
| Long-scroll agency-self | About → services → approach → work → testimonials → news → closing CTA |

**When NOT to use:**
- For sites with < 4 sections — the alternation pattern needs repetition to read.
- For sites with strong per-section *content* contrast (e.g., a dark theatrical section followed by a bright photo section) — the bg alternation becomes noise on top of the content.
- For sites with cream `#F9F4EE`-style hospitality bg — cream already does the warming work; alternating into `#FFFAF7` is imperceptible. Use the pattern for `#fff` / `#f5f5f7` neutral palettes, not for cream/cream-alt.

## 2. HTML / accessibility structure

```html
<section class="ssn-section ssn-section--primary" aria-labelledby="section-1-heading">
  <h2 id="section-1-heading">Switch to iPhone.</h2>
  <!-- … -->
</section>
<section class="ssn-section ssn-section--alt" aria-labelledby="section-2-heading">
  <h2 id="section-2-heading">Explore the lineup.</h2>
  <!-- … -->
</section>
<section class="ssn-section ssn-section--primary" aria-labelledby="section-3-heading">
  <h2 id="section-3-heading">Take a closer look.</h2>
  <!-- … -->
</section>
```

**Accessibility requirements (see `ACCESSIBILITY.md` §WCAG 2.2 AA):**

- **The background alternation MUST NOT be the only signal** that a new section begins — semantic `<section>` landmarks + `aria-labelledby` give screen-reader users their own rhythm. Visual visitors get the bg shift; screen-reader users get the landmark.
- **Contrast** of body text on *both* bg values must pass AA. `#fff` and `#f5f5f7` are close enough that any text passing on one passes on the other; verify on a calibrated display.
- **Reduced contrast preference:** users with `prefers-contrast: more` may benefit from a stronger alternation. Optionally add a `@media (prefers-contrast: more) { .ssn-section--alt { background: #eeeeee; } }` override.

## 3. CSS spec (measured from Apple §1 + agency adaptation)

```css
.ssn-section {
  padding-block: clamp(4rem, 8vw, 8rem);
  padding-inline: clamp(1rem, 5vw, 3rem);
}

.ssn-section--primary {
  background-color: var(--color-bg);          /* e.g. #fff or cream */
}

.ssn-section--alt {
  background-color: var(--color-bg-alt);      /* e.g. #f5f5f7 — 1-2 % darker than primary */
}
```

**Why these values:**
- The alt should be **1-3 % darker** than the primary on each channel. Apple's `#f5f5f7` is `(245, 245, 247)` — 4 / 10 = ~1.6 % darker red and green, blue *up* by 7 (this slight blue lift counteracts the eye's tendency to read pure grey as warm).
- Avoid alts darker than 5 %. The rhythm becomes a visible stripe pattern instead of an ambient signal.
- **Section heights should vary** independently of the bg alternation. Apple's 14 sections have heights: 385 / 957 / 700 / 789 / 930 / 875 / 1116 / 723. Variation prevents the rhythm from becoming mechanical.

### Per-vertical primary/alt pairings (recommended starting points)

| Bg-primary | Bg-alt | Vertical context |
|---|---|---|
| `#fff` | `#f5f5f7` | tech / agency-self / professional-services (Apple's measured pair) |
| `#FBF8F3` (cream) | `#F5F0E7` (cream-shaded) | gastronomy / beauty / artisan — *if* the client wants the rhythm despite cream. Often optional in cream palettes. |
| `#1D1D1D` (charcoal) | `#252525` | dark-themed portfolio / agency-self / urban barber |
| `#EBEBEB` | `#E0E0E0` | architectural studio (Lesse-derived) — already a grey palette, slightly darker alt |

## 4. Required CSS custom properties

```css
:root {
  --color-bg: #ffffff;
  --color-bg-alt: #f5f5f7;
}
```

## 5. Performance constraints

- **No JS required.** Pure CSS.
- **No additional bytes:** the alternation reuses existing tokens.
- **No `box-shadow` between sections** to mark the transition — the bg shift IS the marker. Adding shadows on top creates visual noise + GPU compositor cost.

## 6. Reference sites

| Site | Study § | Notes |
|---|---|---|
| Apple iPhone | §1 | The canonical 14-section alternation, primary `#fff` / alt `#f5f5f7` |

The pattern is used across Apple's product line and broadly across tech / consumer-product landings — but Apple's discipline (consistent ~2 % shift, never noisier) is what we're codifying.

## 7. UI_REVIEW.md cross-link

When auditing a long-scroll client whose page reads as one undifferentiated stack:

> *"Issue #N — page lacks scroll rhythm; sections blur together: adopt the alternating-section-bg pattern per `docs/design/components/alternating-section-bg.md`. Pair primary `#fff` (or cream) with alt 1-2 % darker. Apply across every section landmark for visitor parsing."*

## 8. Implementation pointer

**Phase 3b deliverable (shipped 2026-05-19):** `docs/design/components/_impl/Section.astro` (extends the existing Section primitive)

Props (planned):
- `variant?: 'primary' | 'alt'` (default `'primary'`)
- `ariaLabelledBy?: string` — heading id for screen-reader labeling

Usage pattern in pages:
```astro
<Section variant="primary">…</Section>
<Section variant="alt">…</Section>
<Section variant="primary">…</Section>
```

The dev does the alternation explicitly via prop, not implicitly via index. Explicit is clearer and survives reordering.

The `_demo/alternating-bg.astro` page will render 6-8 sections in the solo-barber identity AND in the apple-light identity to demonstrate both palettes.
