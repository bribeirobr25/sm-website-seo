# Course list (Roman-numeral centered tasting menu)

**Source:** Adèle V5 build (2026-05-22). Inspired by Frenchie Paris, NOMA, and Berlin fine-dining tasting cards. Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/CourseList.astro`.

## 1. Purpose + when to use

A centered editorial list with Roman-numeral course markers (I-V or I-VII). Replaces card-grid menu previews when the brand register is fine-dining / tasting-menu / editorial — the linear numbered progression itself signals "this is a sequence, not à la carte."

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — fine-dining / Michelin-aspirant | ✅ Highly recommended | Tasting-menu structure is the product; numbering reinforces it |
| Gastronomy — weekly / chef's-menu rotation | ✅ Recommended | Adèle pattern: "5 courses · rotates Wednesday" |
| Events-hospitality — multi-course dinner events | ✅ Recommended | Single evening = single menu = numbered progression |
| Gastronomy — casual / à la carte | ❌ Wrong register | Use `MenuCard` grid instead |
| Beauty — treatment packages with sequence (facial steps) | 🟡 Conditional | Works only if the package IS sequential; otherwise reads pretentious |

**When NOT to use:** sites with more than ~7 items (the Roman numeral gimmick collapses past VII); à la carte menus; sites without a clear progression story.

## 2. HTML / accessibility structure

```html
<section>
  <header><p class="eyebrow">…</p><h2>…</h2><p>…</p></header>
  <ol>
    <li>
      <span class="course-numeral" aria-hidden="true">I</span>
      <div>
        <h3>Course name</h3>
        <p>Course description</p>
      </div>
    </li>
    …
  </ol>
  <a href="/menu">See the full menu</a>
</section>
```

**Accessibility:**
- Use semantic `<ol>` — the numbering matters; screen reader announces "1, 2, 3…" implicitly.
- Roman numeral is `aria-hidden="true"` (decorative duplicate of the ordered-list number).
- `<h3>` semantic level — H2 is the section header.
- Centered text alignment + generous spacing — works for screen reader linear flow.

## 3. CSS spec

- Container: `max-w-2xl mx-auto` — narrow column reinforces magazine-tasting-card aesthetic
- Per row: `grid grid-cols-[48px_1fr] gap-6` — fixed numeral gutter
- Numeral: `font-display text-2xl text-accent` — brand accent color, display serif
- Course name: `font-display text-xl sm:text-2xl text-text leading-tight`
- Spacing: `space-y-10` between courses; each row's `<div>` has `pb-8 border-b border-border` (last child overrides)

## 4. Props (frozen)

- `locale: Locale` — for i18n lookup
- Implicit: reads `SITE.menu.tasting.items` (each `{ de: { name, desc }, en: { name, desc } }`)
- Could be parameterized to accept `items` directly if used outside a SITE-config-driven client.

## 5. Performance constraints

- Pure text + CSS. No images. No JS. Zero perf cost.

## 6. Reference sites

- Adèle V5 home (`https://demo-restaurant-adele.vercel.app/`)
- Frenchie Paris menu treatment
- NOMA / Geranium tasting-menu PDF aesthetic

## 7. Implementation pointer

Used by Adèle Tier-2 home page. For real clients: typically appears once on the home page as a teaser, with the full menu (this + wine pairing + prix-fixe pricing) on `/karte` or `/menu` route.

---

## Hardcoded content warning (2026-05-23 portfolio audit)

The canonical implementation at `_impl/course-list.astro` (matching CamelCase filename) carries hard-coded content from the demo where this component was first promoted — specifically: Adèle restaurant — 5-course Roman-numeral tasting menu reading from SITE.menu.tasting.

**When using this component in a new demo or client build, do one of two paths:**

1. **Copy + customize** — `cp _impl/[Component].astro clients/[slug]/src/components/sections/` then edit the items/quotes/images array inline per the client's vertical. This is what the 2026-05-23 3-new-demos rebuild did for the Press component (lawyer Chambers/JUVE/WirtschaftsWoche items replaced Adèle's restaurant items). See `docs/audit/2026-05-23-portfolio-rebuild-audit.md` §2 architecture gap.
2. **Parameterize the canonical (recommended next time anyone touches this file)** — accept `items` / `quotes` / `images` as a required prop with no hard-coded fallback. Update `§3 Props` above to match. Closes audit backlog item #2 in `docs/audit/PENDING.md` §2026-05-23 portfolio-rebuild backlog.

**Why this matters:** the audit found that 6 of the 32 canonical `_impl/` components carry single-demo content (Press · BookingMock · NewsletterMock · CourseList · PhotoGrid · MenuCard). The 2026-05-23 yoga + barber demos had to *delete* most of these copies + inline equivalent markup because the hard-coded content was vertical-wrong. Parameterizing avoids that inline-rewrite cost for the next client.
