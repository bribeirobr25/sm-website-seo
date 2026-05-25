/**
 * Schema.org JSON-LD generator for Bart & Pomade Barbershop.
 *
 * Per `docs/design/SEO.md` §5 + `docs/design/templates/beauty.md` §11.8 —
 * @graph with 3 nodes:
 *  1. BarberShop (most-specific Schema.org subtype)
 *  2. Person (Erik Lundström — founder + lead barber)
 *  3. WebSite
 *
 * NO `aggregateRating` per `SEO.md` §5.3.
 * `hasOfferCatalog` enumerates services + prices for the Google knowledge
 * panel pricing surface — beauty.md §12 rule 5 (prices upfront).
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

export function barberShopSchema(): Record<string, unknown> {
  const businessId = `${SITE.url}/#business`;
  const operatorId = `${SITE.url}/#owner`;
  const websiteId = `${SITE.url}/#website`;

  const weekdayHours = SITE.hours.summer.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const weekendHours = SITE.hours.winter.days
    .filter((h) => h.open && h.close)
    .map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: dayMap(h.day),
      opens: h.open,
      closes: h.close,
    }));

  const business: Record<string, unknown> = {
    '@type': 'BarberShop',
    '@id': businessId,
    name: SITE.name,
    description: SITE.i18n.de.tagline,
    url: SITE.url,
    image: `${SITE.url}/img/og-default.png`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '€€',
    foundingDate: String(SITE.foundedYear),
    founder: { '@type': 'Person', name: SITE.founder },
    keywords: [
      'Barbershop',
      'Männerschnitt',
      'Heißhandtuch-Rasur',
      'Bartpflege',
      'Berlin Friedrichshain',
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    openingHoursSpecification: [...weekdayHours, ...weekendHours],
    sameAs: [SITE.social.instagram].filter(Boolean),
    employee: { '@id': operatorId },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen',
      itemListElement: [
        ...SITE.menu.creme.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
        })),
        ...SITE.menu.sorbetti.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
        })),
        ...SITE.menu.spezialitaeten.items.map((item) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: item.de.name, description: item.de.desc },
        })),
      ],
    },
  };

  const operator: Record<string, unknown> = {
    '@type': 'Person',
    '@id': operatorId,
    name: 'Erik Lundström',
    jobTitle: 'Geschäftsführer · Master Barber',
    knowsAbout: ['Klassischer Männerschnitt', 'Skin Fade', 'Bartpflege'],
    worksFor: { '@id': businessId },
  };

  const website: Record<string, unknown> = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE.url,
    name: SITE.name,
    inLanguage: ['de-DE', 'en-US'],
    publisher: { '@id': businessId },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [business, operator, website],
  };
}

export const restaurantSchema = barberShopSchema;
