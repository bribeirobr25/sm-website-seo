/**
 * Schema.org JSON-LD generators — per templates/beauty.md §11.8.
 * Use BarberShop subtype (most specific for a single-operator barber).
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

export function barberShopSchema(): Record<string, unknown> {
  const openingHours = SITE.hours
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BarberShop',
    name: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    image: `${SITE.url}/og-default.jpg`,
    telephone: SITE.phone,
    priceRange: 'R$$',
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
    potentialAction: {
      '@type': 'ReserveAction',
      target: SITE.booking.url,
    },
    sameAs: [SITE.social.instagram].filter(Boolean),
  };

  // aggregateRating deliberately omitted — self-serving on own LocalBusiness
  // (BarberShop is a LocalBusiness subtype) is policy-banned per Google's
  // review-snippet guidelines. SERP stars come from the GBP listing, not from
  // on-site schema. See SEO.md §5.3.

  return schema;
}
