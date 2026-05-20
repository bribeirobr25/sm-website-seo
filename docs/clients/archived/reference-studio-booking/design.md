> **Status:** Archived 2026-05-19. Original code at `clients/reference-studio-booking/` was distilled into `docs/design/components/_impl/` + `docs/design/_impl/` + `scaffolds/nextjs-tier3/`. Retained as the canonical worked example of a Tier-3 / DE-DSGVO `design.md` shape. Read-only — do not edit.

# design.md — Reference: Studio (Booking)

Per-client design decisions for `clients/reference-studio-booking/`. Anchors back to `docs/design/templates/studio.md`.

---

## 1. Archetype + sub-archetype

**Category:** Studio (yoga / pilates / barre / boutique fitness)
**Sub-archetype:** **Boutique sensory** — per `templates/studio.md` §Archetypes.

The fictional studio is a quiet Berlin Mitte yoga studio with two instructors and 4 class lines (Hatha, Vinyasa Flow, Yin, Pranayama & Meditation). The vibe is calm, warm-toned, unhurried — not the boutique-fitness-loud-cycling-studio direction (templates/studio.md §3 calls that the "high-energy boutique" sub-archetype) and not the "minimalist clinical wellness" direction either.

---

## 2. Color tokens

Per `templates/studio.md` §Color archetypes + §Default palette per sub-archetype.

| Token | Value | Use |
|---|---|---|
| `--color-bg` | `#f7f3ec` | Warm cream — page background |
| `--color-surface` | `#ffffff` | Cards, banner, header backdrop |
| `--color-surface-elev` | `#ebe5d6` | Sand — footer, hover states |
| `--color-text` | `#2d2823` | Body text, near-black |
| `--color-text-muted` | `#6b5e52` | Secondary text, captions |
| `--color-accent` | `#7a9171` | Soft sage — primary action |
| `--color-accent-deep` | `#5a7251` | Sage darken — hover state (not lighter — per DESIGN-BEST-PRACTICES.md §Hover state contrast) |
| `--color-border` | `#e5dccd` | Card + table borders |
| `--color-success` | `#5a7251` | Form success states (reuses accent-deep) |
| `--color-warning` | `#b86d3a` | Error states — terracotta warm |

**Contrast check (WCAG 2.2 AA):**
- `text` on `bg` = 12.8:1 — passes AA-large + AA-normal
- `text-muted` on `bg` = 6.2:1 — passes AA-normal
- `accent` (sage) on `bg` (cream) = 3.0:1 — passes AA-large only; use `accent-deep` for body-text-on-bg
- White on `accent-deep` (button text) = 5.9:1 — passes AA-normal
- White on `accent` (button text) = 3.6:1 — passes AA-large only ⚠️ **Primary buttons use `bg-accent text-bg` (cream on sage = 4.3:1) instead — passes AA-normal**

**WCAG verification was performed for token combinations; production photo overlays still need to be re-verified once real imagery lands** (anything text-on-image must meet 4.5:1 against the *darkest* pixel range).

---

## 3. Typography

Per `templates/studio.md` §Typography pairings.

| Token | Value | Use |
|---|---|---|
| `--font-display` | `Cormorant Garamond, Georgia, serif` | H1, H2, H3, large pricing numbers — quiet, classical |
| `--font-body` | `Inter, system-ui, sans-serif` | Body, nav, forms, buttons — neutral, legible |
| `--font-mono` | `JetBrains Mono` | Numbers needing tabular alignment (times, prices) |

Headings: `font-weight: 500` (medium), `letter-spacing: -0.01em`, `line-height: 1.15`. Body: `line-height: 1.6`.

Tabular numbers (hours, prices) get `font-variant-numeric: tabular-nums` via the `.tabular` utility class.

**Self-hosting:** In production, both Cormorant Garamond + Inter must be self-hosted (per `PERFORMANCE.md` §Font self-hosting). The reference impl skips this step — fonts fall back to `Georgia` / `system-ui` until production-cutover.

---

## 4. Copy voice

Per `templates/studio.md` §Copy voice.

- **Quiet, present-tense, German.** Short sentences. No exclamation marks. No motivational language ("Unleash your inner …", "Transform your life") — the boutique-sensory voice is the opposite of that.
- **Concrete details:** "kleine Gruppen", "Hatha, Vinyasa, Yin und Pranayama", "Holzboden". Specifics build trust faster than adjectives.
- **No marketing-speak:** Avoid "premium", "exclusive", "revolutionary", "next-level".
- **Direct verbs for CTAs:** "Probestunde sichern", "Klasse buchen" — not "Get started" / "Sign up now".

---

## 5. Layout decisions

- **Container:** `max-width: 1280px`, padding-inline 1.5rem mobile / 2rem desktop.
- **Section padding:** 3rem mobile / 6rem desktop top + bottom — generous whitespace per the sensory archetype.
- **Asymmetric two-column grids** in Hero, About, Visit — never centered hero text (centered is the gym/yoga-app aesthetic, not boutique).
- **Class cards:** 2-column grid on desktop, 1-column on mobile — large photos top, headline + level + body underneath. Per templates §IA "studios always need to enumerate class lines, never collapse them into a 'see schedule' link".
- **Pricing cards:** 3-column on desktop, 1-column stacked on mobile — featured tier (10er Karte) elevated with `accent` border + shadow + "Beliebt" badge.

---

## 6. Photography rules

Per `templates/studio.md` §Photography rules.

- **Warm natural light, never flash.** Morning light through window is the canonical reference.
- **Real practitioners, not stock models.** Bodies in real postures with real anatomy. No identical-looking fit-model rows.
- **Show the room.** At least one full-room shot — wooden floor, props, plants, the actual studio.
- **Avoid:** competition-cycling, sweat-streaked-faces, "extreme-pose" Instagram-bait, color-graded teal+orange.
- **Aspect ratios used:** Hero `4 / 3`, Class cards `3 / 2`, About `4 / 3`, Instructor portraits `1 / 1`.
- **Reference impl placeholders:** 9 `<Placeholder>` slots total — replace with real photos at production cutover.

---

## 7. Anti-patterns (do not adopt)

Per `templates/studio.md` §Anti-patterns.

- ❌ Gradient hero overlays in saturated brand colors
- ❌ "BOOK NOW" all-caps shouty CTAs
- ❌ Floating chat bubbles offering 24/7 support
- ❌ Animated count-up stats ("4,328 classes taught!")
- ❌ Sticky "limited time" pricing banners
- ❌ Generic Unsplash yoga stock (lavender field, woman in white doing crow pose)

---

## 8. Component overrides vs template

The reference impl follows `templates/studio.md` exactly. Notable specifics for this client:

- **No featured-instructor hero** — the studio is positioned as instructor-equal, not founder-led. Anna's name appears in the About + Footer but not in the Hero.
- **Class cards include duration in minutes** — `templates/studio.md` §IA suggests duration is optional; we include it because owner research suggests prospects often filter by "do I have 60 min or 75 min".
- **Mindbody is the booking source-of-truth.** Trial bookings are the only DB-backed flow; everything else deep-links out. This demonstrates the agency stack for a "system-light" studio that doesn't want a full custom backend.

---

## 9. Decision matrix linkage

Per `templates/studio.md` §Decision matrix:

| Question | Choice | Rationale |
|---|---|---|
| Booking platform | Mindbody (external) | Owner already uses it; no reason to rebuild |
| DB-backed flow | Trial signups only | Lowest-friction conversion lever; converts cold leads to paid |
| Featured imagery | Calm boutique | Sub-archetype is sensory, not high-energy |
| Color depth | Light + warm | Studio lighting + cream walls in person |
| Type pairing | Serif display + neutral sans | Classical, quiet |
