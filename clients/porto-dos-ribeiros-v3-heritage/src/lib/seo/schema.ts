import { SITE } from '../site';

type SchemaValue = string | number | boolean | null | SchemaObject | SchemaValue[];
type SchemaObject = { [key: string]: SchemaValue };

export function buildRestaurantSchema(localeUrl: string, imageUrl: string): SchemaObject {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE.url}/#restaurant`,
    name: SITE.legalName,
    url: localeUrl,
    telephone: SITE.phone,
    priceRange: '€',
    servesCuisine: 'Brazilian',
    image: imageUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      postalCode: SITE.address.postal,
      addressLocality: SITE.address.city,
      addressCountry: SITE.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: SITE.hours.map((window) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [...window.days],
      opens: window.open,
      closes: window.close,
    })),
    sameAs: [SITE.socials.instagram, SITE.socials.facebook],
  };
}
