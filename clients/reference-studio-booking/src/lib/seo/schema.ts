/**
 * Schema.org JSON-LD — SportsActivityLocation variant per templates/studio.md §11.8.
 * schema.org has no `YogaStudio` type (verified 2026-05-18). The correct pick
 * for a yoga-focused studio is `SportsActivityLocation` with a descriptive
 * `name` and `keywords`. See SEO.md §5.
 */

import { SITE } from '../site';

function dayMap(day: string): string {
  return {
    Sun: 'Sunday',
    Mon: 'Monday',
    Tue: 'Tuesday',
    Wed: 'Wednesday',
    Thu: 'Thursday',
    Fri: 'Friday',
    Sat: 'Saturday',
  }[day] ?? day;
}

export function sportsActivityLocationSchema(): Record<string, unknown> {
  const openingHours = SITE.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    telephone: SITE.phone,
    image: `${SITE.url}/og-default.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: openingHours,
    potentialAction: {
      '@type': 'ReserveAction',
      target: SITE.booking.url,
    },
    amenityFeature: [
      { '@type': 'LocationFeatureSpecification', name: 'Umkleiden' },
      { '@type': 'LocationFeatureSpecification', name: 'Duschen' },
      { '@type': 'LocationFeatureSpecification', name: 'Matten verfügbar' },
    ],
    sameAs: [SITE.social.instagram].filter(Boolean),
  };
}
