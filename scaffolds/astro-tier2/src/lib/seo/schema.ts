/**
 * Schema.org JSON-LD generator — minimal LocalBusiness placeholder.
 *
 * **Replace at scaffold time:** swap `LocalBusiness` for the most-specific
 * Schema.org subtype matching the client's vertical (BarberShop / Restaurant /
 * HairSalon / Dentist / SportsActivityLocation / LegalService / VeterinaryCare /
 * AutoRepair / MusicSchool / Hotel / Florist / JewelryStore — see
 * `docs/design/templates/[vertical].md` §11.8 for paste-ready @graph blocks).
 *
 * Pattern: `@graph`-rooted with 3 nodes per `SEO.md` §5 canonical:
 *  1. LocalBusiness (or subtype) — the business entity
 *  2. Person (the owner / solo operator — optional but recommended for solo)
 *  3. WebSite — entity-graph cross-link to the site itself
 *
 * **NO `aggregateRating` on LocalBusiness** — self-serving rating on own
 * LocalBusiness is policy-banned per Google's review-snippet guidelines
 * (see `SEO.md` §5.3). SERP stars come from the GBP listing, not on-site schema.
 *
 * Reference implementations: see `docs/design/_impl/lib/seo/schema.astro.ts`
 * (BarberShop @graph for solo-operator beauty) and `docs/design/_impl/lib/seo/
 * schema.nextjs.ts` (SportsActivityLocation @graph for studio).
 */

import { SITE } from '../site';

function dayMap(day: string): string {
  return (
    {
      Sun: 'Sunday',
      Mon: 'Monday',
      Tue: 'Tuesday',
      Wed: 'Wednesday',
      Thu: 'Thursday',
      Fri: 'Friday',
      Sat: 'Saturday',
    }[day] ?? day
  );
}

export function businessSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const websiteId = `${SITE.url}/#website`;

  const openingHours = SITE.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const business: Record<string, unknown> = {
    '@type': 'LocalBusiness', // TODO: replace with most-specific subtype per templates/[vertical].md §11.8
    '@id': businessId,
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/og-default.jpg`,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: openingHours,
    sameAs: [SITE.social.instagram].filter(Boolean),
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    publisher: { '@id': businessId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, website],
  };
}
