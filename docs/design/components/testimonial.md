# Testimonial card

**Source:** Research-driven (2026-05-23). Cites [Digital Applied 2,000-page conversion study](https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026): +34% conversion with testimonial section, +22% additional lift for named + photographed vs anonymous walls.
**Implementation:** `docs/design/components/_impl/Testimonial.astro`.

## 1. Purpose + when to use

A single trust-signal card: optional star rating + quote + named attribution (name + role) + optional photo + optional source link.

**Mandatory rules** (these are conversion drivers, not preferences):

1. **Named.** No "M. Schmidt aus Berlin" — full first name + last initial minimum, full name preferred. Anonymous testimonials read as fake.
2. **Photographed.** Headshot or candid. +22% lift over name-only. If client refuses to use photos, swap for a verifiable source link (Google review URL).
3. **Verifiable.** Link to the original review source (Google review, Trustpilot, LinkedIn recommendation) when possible. Massively increases credibility.
4. **Specific.** Generic "Best in Berlin!" testimonials are skip-able. The good ones say something like "Took me three sessions but my color is finally exactly what I asked for after years of orange."

**For 2-3 testimonials in a row:** use multiple `<Testimonial>` instances inside a parent `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`. Do NOT build a carousel — per research, carousels register <1% past-slide-1 interaction.

## 2. HTML / accessibility structure

```html
<figure class="testimonial" itemscope itemtype="https://schema.org/Review">
  <p class="rating" aria-label="Rating: 5 out of 5 stars">★★★★★</p>
  <blockquote itemprop="reviewBody">
    <p>"Took me three sessions but my color is finally exactly what I asked for after years of orange."</p>
  </blockquote>
  <figcaption itemprop="author" itemscope itemtype="https://schema.org/Person">
    <img src="/img/anna.jpg" alt="Anna Klein" loading="lazy" width="64" height="64" />
    <div>
      <p itemprop="name">Anna Klein</p>
      <p>Stammkundin seit 2019</p>
      <p>
        <time itemprop="datePublished" datetime="2025-08-12">August 2025</time> ·
        <a href="https://g.page/r/CmZ…" target="_blank" rel="noopener noreferrer nofollow">Google review ↗</a>
      </p>
    </div>
  </figcaption>
</figure>
```

**Accessibility:**
- `<figure>` + `<figcaption>` semantic
- `<blockquote>` for the quote
- Star rating has `aria-label` describing the value
- Photo has descriptive alt
- Source link has `rel="noopener noreferrer nofollow"` (nofollow because review sources are user-generated content per Google's link-rel guidance)
- `itemscope` + Schema.org `Review` markup for AI extraction + Knowledge Graph

## 3. Props (frozen)

- `quote: string` (required)
- `name: string` (required)
- `role?: string` — qualifier (location, customer-since, job title)
- `photoSrc?: string` + `photoAlt?: string` — headshot
- `sourceHref?: string` + `sourceLabel?: string` — verifiability link
- `rating?: 1 | 2 | 3 | 4 | 5`
- `dateGiven?: string` — ISO date
- `showStars?: boolean` (default `true`)
- `variant?: 'card' | 'flush'` (default `'card'`)

## 4. Schema notes

- Component emits `Review` microdata via `itemscope` — no separate JSON-LD needed in most cases
- Do NOT emit `AggregateRating` on the own LocalBusiness (Google policy ban per `SEO.md §5.3`)
- For 3+ testimonials in one page, parent should set `itemscope itemtype="https://schema.org/Organization"` and the agency does not aggregate them as an `AggregateRating`

## 5. Performance constraints

- Photo: 64×64 served at 128×128 for retina (`width="64" height="64"` HTML attribute, double-resolution source)
- `loading="lazy"` — testimonials typically below the fold
- One card: <20KB total weight including photo

## 6. Anti-patterns

- Anonymous walls of generic praise
- Stock photography as "customers"
- AggregateRating on own LocalBusiness (Google review-snippet policy violation)
- More than 3-4 cards in a row (becomes noise)
- Carousel rotation (kills past-slide-1 interaction)
- Hiding the source link in tiny grey text — verifiability is the point; surface it

## 7. Reference

- [Digital Applied 2,000-page conversion study](https://www.digitalapplied.com/blog/landing-page-conversion-study-2000-pages-tested-2026)
- Google review-snippet policy (`SEO.md §5.3`)
