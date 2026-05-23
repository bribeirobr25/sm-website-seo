# Press / awards row

**Source:** Adèle V5 build (2026-05-22). Inspired by Maison Premiere, Cookies Cream, vintage-grand-hotel press strips. Promoted 2026-05-23.
**Implementation:** `docs/design/components/_impl/Press.astro`.

## 1. Purpose + when to use

A 3-column centered row of press mentions / awards / critic quotes. Each column: rating/award marker (★★★★ · Bib Gourmand · Award name) + outlet attribution + italic quote. Editorial / magazine register — fine-dining and luxury convention.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Gastronomy — fine-dining / Michelin-aspirant | ✅ Highly recommended | Press credibility is the conversion driver |
| Beauty — premium spa | ✅ Recommended | Magazine features / awards are the trust signal |
| Health — clinic, surgical practice | ✅ Recommended | Replace "press" with "credentials" (board certifications, publications) |
| Professional services — lawyer, architect | ✅ Recommended | Award + publication mentions |
| Events-hospitality — venue | ✅ Recommended | Press features replace user reviews |
| Gastronomy — casual / family-pub | ❌ Wrong register | Reads pretentious; use customer testimonial instead |
| Trades, pets, automotive | ❌ Wrong register | Use trust-badge row (insurance, Innung, Handwerkskammer) instead |

**Mandatory:** never invent press mentions. Every entry must be a real, verified piece of coverage. The Adèle demo is explicitly labelled MOCKUP with a disclaimer because no real outlet has covered a fictional restaurant.

## 2. HTML / accessibility structure

```html
<section>
  <p class="eyebrow">Press</p>
  <ul>
    <li>
      <p class="rating">★★★★</p>
      <p class="outlet">Der Tagesspiegel · March 2025</p>
      <blockquote>"…"</blockquote>
    </li>
    …
  </ul>
</section>
```

**Accessibility:**
- Semantic `<blockquote>` per quote; `<cite>` or attribution paragraph for outlet.
- ★ characters are decorative; provide aria-label fallback `aria-label="Four stars"` if the rating semantic matters for screen readers.
- Centered text alignment.

## 3. CSS spec

- Grid: `md:grid-cols-3 gap-x-8 gap-y-12 max-w-5xl mx-auto`
- Rating: `font-display text-2xl text-accent leading-none`
- Outlet attribution: `text-[11px] tracking-[0.25em] uppercase text-text-muted`
- Quote: `font-display text-lg italic text-text-muted leading-relaxed max-w-xs mx-auto`
- Section padding: generous `py-20 sm:py-24`

## 4. Props (frozen)

- `locale: Locale` — for i18n lookup
- Inline data: each item `{ rating, outlet, date, quote }`
- For canonical adoption beyond a single brand, accept `items: PressItem[]` prop directly.

## 5. Performance constraints

- Pure text + CSS. No images required. Optional: greyscale outlet logos as `<img>` in the rating slot (lazy-load).

## 6. Variants

- **Press quotes** (current): outlet + critic-style quote — for gastronomy / beauty / hospitality
- **Awards / credentials**: outlet replaced with award body (Michelin, JD Power, Chambers Global, RYA) + year — for health / professional services
- **Logo wall**: 3-6 outlet logos in greyscale-to-color hover, no quote — for high-volume press portfolio (use sparingly; loses signal past 6)

## 7. Anti-patterns

- Inventing press to fill the section (use TrustBadgeRow or skip the section)
- Generic stock outlet logos with no quote (reads SEO-spam)
- More than 5 quotes (becomes a feed; loses curation)

## 8. Implementation pointer

Used by Adèle V5 home. For real clients: confirm press coverage with the client at scaffold time. If they have <2 verified mentions, omit the section.
