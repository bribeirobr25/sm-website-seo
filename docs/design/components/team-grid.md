# Team / staff grid

**Source:** Research-driven (2026-05-23). Cites salon/clinic teardowns from [Colorlib](https://colorlib.com/wp/hair-salon-websites-design/) + [Eleken healthcare UI study](https://www.eleken.co/blog-posts/user-interface-design-for-healthcare-applications): 72% of salon clients want stylist evidence before booking.
**Implementation:** `docs/design/components/_impl/TeamGrid.astro`.

## 1. Purpose + when to use

Responsive grid of staff portraits with name + role + optional specialty / pronouns / bio / credentials. #2 trust signal for beauty + health verticals after gallery work.

**Per-vertical surfaces:**

| Vertical | Use | Why |
|---|---|---|
| Beauty — salon / barber / spa | ✅ Critical | 72% of clients want stylist evidence; specialty (color / cuts / treatments) drives matching |
| Health — clinic, dental, derm | ✅ Critical | Provider credentials are the trust signal — board certifications belong here |
| Professional services — lawyers, architects, consultants | ✅ Recommended | Lead-attorney profiles, founder bios |
| Education — tutoring, language school | ✅ Recommended | Teacher backgrounds drive parent / student matching |
| Gastronomy — fine-dining | 🟡 Conditional | Chef + sommelier profile only (not entire kitchen); per Adèle precedent |
| Trades | ❌ Skip usually | Single-owner businesses don't need a grid; use a single inline portrait in the About section |
| Studio — fitness, yoga, dance | ✅ Recommended | Instructor profiles + class-specialty matching |
| Pets — vet, grooming | ✅ Recommended | Vet credentials + groomer specialty (breed expertise) |

**When NOT to use:** solo businesses (use a single portrait in the About); high-turnover businesses where the grid would constantly drift out of date; clients without quality professional headshots (skip the section rather than ship with iPhone selfies).

## 2. HTML / accessibility structure

```html
<section aria-labelledby="team-heading">
  <header>
    <p class="eyebrow">Das Team</p>
    <h2 id="team-heading">Wer dich behandelt</h2>
  </header>
  <ul class="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
    <li>
      <a href="/team/anna-klein">
        <div class="photo-wrap aspect-[3/4]">
          <img src="/img/team/anna.jpg" alt="Anna Klein" loading="lazy" />
        </div>
        <div itemscope itemtype="https://schema.org/Person">
          <p itemprop="name">Anna Klein</p>
          <p itemprop="jobTitle">Senior Stylistin</p>
          <p class="specialty">Farbe + Balayage</p>
          <p class="pronouns">she/her</p>
          <ul>
            <li itemprop="hasCredential">Meisterin HWK Berlin</li>
            <li itemprop="hasCredential">L'Oréal Color Specialist 2022</li>
          </ul>
        </div>
      </a>
    </li>
    <!-- more members -->
  </ul>
</section>
```

**Accessibility:**
- Semantic `<ul>` of team members
- Each card's link wraps the whole card so the entire portrait + bio is one focusable target (with focus ring on the wrapper)
- Photos have descriptive alt (the person's name minimum)
- Pronouns rendered as small text below role (optional, opt-in per team member)
- Schema.org `Person` markup per card for AI extraction

## 3. Props (frozen)

- `members: TeamMember[]` (required)
  - `name: string` (required)
  - `role: string` (required)
  - `photoSrc: string` (required) — portrait
  - `photoAlt?: string` (defaults to name)
  - `specialty?: string` — caps-tracked accent label
  - `pronouns?: string`
  - `bio?: string`
  - `href?: string` — link to staff detail page
  - `credentials?: string[]`
- `heading?: string`
- `eyebrow?: string`
- `intro?: string`
- `columns?: 2 | 3 | 4` (default `3`)
- `aspect?: 'portrait' | 'square' | 'editorial'` (default `'portrait'` 3:4)

## 4. Content guidelines

- Consistent photo register across all team members (same crop, same lighting, same background)
- Pronouns: per-member opt-in; do NOT add for some and not others
- Specialties: actionable / matchable (NOT generic "passionate about hair"); good: "Curly hair specialist", "Endodontics"
- Credentials: real, verifiable, dated where possible (e.g., "Meisterin HWK Berlin 2018")
- 4-12 members ideal; >12 = split by team / department

## 5. Photography guidelines

- Professional headshots — no iPhone selfies
- Same background color + lighting across all team members (matters more than perfect individual shots)
- Hair / face fully visible — no hats / hands covering for the lead portrait
- Square crop (1:1) for square aspect; head + shoulders for portrait/editorial
- Photo source: 600×800 (portrait) or 800×800 (square); double-res for retina

## 6. Performance constraints

- All photos `loading="lazy"` (team grids are below the fold typically)
- ~30-60KB per photo (AVIF/WebP at 600×800)
- Total weight: 12 members × 50KB ≈ 600KB — acceptable
- **`<picture>` + WebP companion pattern (auto-applied, added 2026-05-23).** Same pattern as `FullBleedHero` — the component auto-derives `.webp` from each member's `photoSrc` and renders `<picture><source srcset="…webp" type="image/webp"><img src="…jpg"></picture>`. Generate via `npx sharp-cli -i portrait.jpg -o portrait.webp -f webp -q 80 resize 800` (q80 for portraits — face-quality matters more than file size). Adèle team portraits: 60-96 KB JPEG → 22-63 KB WebP each.

## 7. Anti-patterns

- Cartoon avatars / illustrations replacing real photos (kills the trust-signal purpose)
- "Coming soon" placeholders for team members not yet photographed
- Listing the receptionist with no specialty when they don't see clients
- More than 12 cards in a grid (overwhelming + drives out-of-date risk)

## 8. Schema notes

- `Person` markup per card — feeds Knowledge Graph + AI extraction
- For health clinics: add `hasCredential` items (board certifications)
- For professional services: add `worksFor` linking to the LocalBusiness `@id`
