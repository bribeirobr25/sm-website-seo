/**
 * Site-wide constants for Eiscafé Bellini (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional business; data is invented per
 * `docs/clients/demo-eiscafe-bellini/BRIEF.md`. Bilingual labels live below
 * as `de` / `en` objects accessed via locale lookups in components.
 */

export const SITE = {
  // Brand
  name: 'Eiscafé Bellini',
  shortName: 'Bellini',
  founder: 'Tommaso & Rosa Bellini',
  operatorToday: 'Giulia Bellini',
  foundedYear: 1987,

  // Domain + URLs
  url: 'https://demo-gastronomy.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+493044001987',
  phoneDisplay: '+49 30 4400 1987',
  whatsapp: '493044001987',
  email: 'hallo@eiscafe-bellini.de',

  // Address (Berlin Prenzlauer Berg)
  address: {
    street: 'Husemannstraße 28',
    neighborhood: 'Prenzlauer Berg',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10435',
    country: 'DE',
  },
  geo: {
    lat: 52.5365,
    lng: 13.418,
  },

  // Hours — seasonal split
  hours: {
    summer: {
      label: { de: 'Sommer (April–September)', en: 'Summer (April–September)' },
      days: [
        { day: 'Mon', open: '11:00', close: '22:00' },
        { day: 'Tue', open: '11:00', close: '22:00' },
        { day: 'Wed', open: '11:00', close: '22:00' },
        { day: 'Thu', open: '11:00', close: '22:00' },
        { day: 'Fri', open: '11:00', close: '22:00' },
        { day: 'Sat', open: '11:00', close: '22:00' },
        { day: 'Sun', open: '11:00', close: '22:00' },
      ],
    },
    winter: {
      label: { de: 'Winter (Oktober–März)', en: 'Winter (October–March)' },
      days: [
        { day: 'Mon', open: null, close: null },
        { day: 'Tue', open: '12:00', close: '19:00' },
        { day: 'Wed', open: '12:00', close: '19:00' },
        { day: 'Thu', open: '12:00', close: '19:00' },
        { day: 'Fri', open: '12:00', close: '19:00' },
        { day: 'Sat', open: '12:00', close: '19:00' },
        { day: 'Sun', open: '12:00', close: '19:00' },
      ],
    },
  },

  // Translations
  i18n: {
    de: {
      tagline: 'Bronte-Pistazie. Modica-Schokolade. Aus benannten Quellen, seit 1987.',
      shortTagline: 'Bronte-Pistazie. Modica-Schokolade.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Kein echtes Geschäft.',
      hoursLabel: {
        summer: 'SOMMER · Mo–So  11:00–22:00',
        winter: 'WINTER · Di–So  12:00–19:00 (Mo Ruhetag)',
      },
      nav: { home: 'Startseite', menu: 'Karte', about: 'Über uns', visit: 'Besuchen' },
      cta: {
        viewMenu: 'Karte ansehen.',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Reservieren',
      },
      footer: {
        legal: 'Rechtliches',
        visit: 'Besuchen',
        impressum: 'Impressum',
        privacy: 'Datenschutzerklärung',
        cookieSettings: 'Cookie-Einstellungen verwalten',
        rights: 'Alle Rechte vorbehalten.',
      },
      consent: {
        title: 'Cookies — wie hättet Ihr es gern?',
        bodyBefore: 'Wir verwenden essentielle Cookies, um die Seite überhaupt anzuzeigen. Mit eurer Zustimmung auch Analyse-Cookies (anonymisiert), damit wir wissen, was funktioniert. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline: 'Bronte pistachio. Modica chocolate. Named-source gelato, since 1987.',
      shortTagline: 'Bronte pistachio. Modica chocolate.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional business.',
      hoursLabel: {
        summer: 'SUMMER · Mon–Sun  11:00–22:00',
        winter: 'WINTER · Tue–Sun  12:00–19:00  (closed Mondays)',
      },
      nav: { home: 'Home', menu: 'Menu', about: 'About', visit: 'Visit' },
      cta: {
        viewMenu: 'See the menu.',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Book a table',
      },
      footer: {
        legal: 'Legal',
        visit: 'Visit',
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookieSettings: 'Manage cookie settings',
        rights: 'All rights reserved.',
      },
      consent: {
        title: 'Cookies — how would you like them?',
        bodyBefore: 'We use essential cookies to render the page. With your consent we also use anonymised analytics so we know what works. More in our ',
        privacyLinkLabel: 'privacy policy (German)',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
      },
      languageLabel: 'Language',
    },
  },

  // Featured gelato preview (Home page Menu preview section)
  featured: [
    {
      slug: 'bronte-pistazie',
      name: { de: 'Bronte-Pistazie', en: 'Bronte Pistachio' },
      description: {
        de: 'Pistazien aus Bronte am Ätna. Geröstet in Catania, püriert in Berlin. Tiefes Aroma, leuchtendes Grün.',
        en: 'Pistachios from Bronte on Mount Etna. Roasted in Catania, pressed in Berlin. Deep flavor, bright green.',
      },
      // CREDITS.md → Siena / Unsplash. DRAFT — replace with per-flavor photo once client provides.
      imageSrc: '/img/gelato-counter-alt.jpg',
      imageAlt: {
        de: 'Vitrine mit grünem Pistazien-Gelato',
        en: 'Display case with green pistachio gelato',
      },
    },
    {
      slug: 'crema-bellini',
      name: { de: 'Crema Bellini', en: 'Crema Bellini' },
      description: {
        de: 'Unsere Hauseigene seit 1987. Bourbonvanille, ein Hauch Mandel, ein Löffel Familiengeheimnis.',
        en: 'Our house flavor since 1987. Bourbon vanilla, a hint of almond, one spoonful of family secret.',
      },
      // CREDITS.md → tommao wang / Unsplash. DRAFT — replace with per-flavor photo once client provides.
      imageSrc: '/img/gelato-counter-alt2.jpg',
      imageAlt: {
        de: 'Cremiges Vanille-Gelato in der Vitrine',
        en: 'Creamy vanilla gelato in the display case',
      },
    },
    {
      slug: 'schokolade-piemonte',
      name: { de: 'Schokolade Piemonte', en: 'Piemonte Chocolate' },
      description: {
        de: 'Tonda-Gentile-Haselnüsse aus Piemont, dunkle Schokolade aus Modica.',
        en: 'Tonda Gentile hazelnuts from Piemonte, dark chocolate from Modica.',
      },
      // CREDITS.md → Elijah Pilchard / Unsplash. DRAFT — replace with per-flavor photo once client provides.
      imageSrc: '/img/hero-gelato-counter.jpg',
      imageAlt: {
        de: 'Vitrine mit dunklem Schokoladen-Gelato',
        en: 'Display case with dark chocolate gelato',
      },
    },
  ],

  // Full menu (Gelato page)
  menu: {
    creme: {
      label: { de: 'LE CREME', en: 'LE CREME' },
      count: 12,
      intro: {
        de: 'Klassische Cremes auf Milchbasis. Bio-Milch aus Brandenburg, italienische Zutaten.',
        en: 'Milk-based classics. Organic milk from Brandenburg, ingredients from Italy.',
      },
      items: [
        {
          de: {
            name: 'Bronte-Pistazie',
            desc: 'Pistazien aus Bronte am Ätna, geröstet in Catania.',
          },
          en: {
            name: 'Bronte Pistachio',
            desc: 'Pistachios from Bronte on Mount Etna, roasted in Catania.',
          },
        },
        {
          de: {
            name: 'Crema Bellini',
            desc: 'Bourbonvanille, ein Hauch Mandel. Unsere Hauseigene seit 1987.',
          },
          en: {
            name: 'Crema Bellini',
            desc: 'Bourbon vanilla, a hint of almond. Our house flavor since 1987.',
          },
        },
        {
          de: {
            name: 'Schokolade Piemonte',
            desc: 'Tonda-Gentile-Haselnüsse aus Piemont, dunkle Schokolade aus Modica.',
          },
          en: {
            name: 'Piemonte Chocolate',
            desc: 'Tonda Gentile hazelnuts from Piemonte, dark chocolate from Modica.',
          },
        },
        {
          de: { name: 'Vanille Bourbon', desc: 'Bourbon-Vanilleschoten aus Madagaskar.' },
          en: { name: 'Bourbon Vanilla', desc: 'Madagascar Bourbon vanilla pods.' },
        },
        {
          de: {
            name: 'Stracciatella',
            desc: 'Sahne-Eis mit dunkler Schokolade von Hand eingerührt.',
          },
          en: { name: 'Stracciatella', desc: 'Cream with dark chocolate folded in by hand.' },
        },
        {
          de: { name: 'Tiramisu', desc: 'Mascarpone, Espresso, Cocao. Wie zu Hause.' },
          en: { name: 'Tiramisu', desc: 'Mascarpone, espresso, cocoa. Like home.' },
        },
        {
          de: { name: 'Bacio', desc: 'Haselnuss-Schokolade nach klassischem Perugia-Rezept.' },
          en: { name: 'Bacio', desc: 'Hazelnut-chocolate, classic Perugia recipe.' },
        },
        {
          de: {
            name: 'Zabaione',
            desc: 'Marsala-Wein-Crema mit Eigelb. Die Älteste auf der Karte.',
          },
          en: {
            name: 'Zabaione',
            desc: 'Marsala wine custard with egg yolk. The oldest one on the menu.',
          },
        },
        {
          de: {
            name: 'Joghurt-Honig',
            desc: 'Griechischer Joghurt mit Akazienhonig aus Brandenburg.',
          },
          en: { name: 'Yogurt Honey', desc: 'Greek yogurt with acacia honey from Brandenburg.' },
        },
        {
          de: { name: 'Ricotta-Feige', desc: 'Ricotta aus Apulien, Feigen aus Sizilien.' },
          en: { name: 'Ricotta Fig', desc: 'Ricotta from Puglia, figs from Sicily.' },
        },
        {
          de: { name: 'Caramel Salato', desc: 'Karamell mit Maldon-Salzkristallen.' },
          en: { name: 'Salted Caramel', desc: 'Caramel with Maldon salt flakes.' },
        },
        {
          de: { name: 'Cookie', desc: 'Vanille-Crema mit gebrochenen Schokokeksen.' },
          en: { name: 'Cookie', desc: 'Vanilla cream with broken chocolate cookies.' },
        },
      ],
    },
    sorbetti: {
      label: { de: 'SORBETTI', en: 'SORBETTI' },
      count: 8,
      intro: {
        de: 'Auf Fruchtbasis. Wasser, Frucht, Zucker — sonst nichts. Alle vegan.',
        en: 'Fruit-based. Water, fruit, sugar — nothing else. All vegan.',
      },
      items: [
        {
          de: { name: 'Limone di Amalfi', desc: 'Zitronen von der Amalfiküste.' },
          en: { name: 'Amalfi Lemon', desc: 'Lemons from the Amalfi coast.' },
        },
        {
          de: { name: 'Mango', desc: 'Alphonso-Mango aus Indien, mit Limettenschale.' },
          en: { name: 'Mango', desc: 'Alphonso mango from India, with lime zest.' },
        },
        {
          de: {
            name: 'Erdbeere',
            desc: 'Saisonal, mit Erdbeeren aus Brandenburg (April–September).',
          },
          en: {
            name: 'Strawberry',
            desc: 'Seasonal, with Brandenburg strawberries (April–September).',
          },
        },
        {
          de: { name: 'Himbeere', desc: 'Wildhimbeeren aus dem Spreewald.' },
          en: { name: 'Raspberry', desc: 'Wild raspberries from the Spreewald.' },
        },
        {
          de: {
            name: 'Birne-Williams',
            desc: 'Williams-Birne mit einem Schuss Birnen-Brand. Enthält Alkohol.',
          },
          en: {
            name: 'Williams Pear',
            desc: 'Williams pear with a splash of pear brandy. Contains alcohol.',
          },
        },
        {
          de: { name: 'Passionsfrucht', desc: 'Aus Peru. Spitz, hell, frisch.' },
          en: { name: 'Passion Fruit', desc: 'From Peru. Sharp, bright, fresh.' },
        },
        {
          de: { name: 'Cassis', desc: 'Schwarze Johannisbeere mit ein bisschen Limette.' },
          en: { name: 'Cassis', desc: 'Black currant with a touch of lime.' },
        },
        {
          de: { name: 'Granatapfel', desc: 'Aus Apulien, mit Rosenwasser.' },
          en: { name: 'Pomegranate', desc: 'From Puglia, with a drop of rose water.' },
        },
      ],
    },
    spezialitaeten: {
      label: { de: 'SPEZIALITÄTEN', en: 'SPECIALTIES' },
      count: 4,
      intro: {
        de: 'Klassiker, die seit 1987 auf der Karte stehen. Auf Bestellung.',
        en: 'Classics that have been on the menu since 1987. To order at the counter.',
      },
      items: [
        {
          de: {
            name: 'Affogato',
            desc: 'Eine Kugel Crema Bellini, ertränkt in einem frischen Espresso.',
          },
          en: {
            name: 'Affogato',
            desc: 'One scoop of Crema Bellini, drowned in a fresh espresso.',
          },
        },
        {
          de: {
            name: 'Coppa Bellini',
            desc: 'Drei Kugeln deiner Wahl, Sahne, Espresso-Kakao, ein Stück Mürbeteig.',
          },
          en: {
            name: 'Coppa Bellini',
            desc: 'Three scoops of your choice, cream, espresso cocoa, a piece of shortbread.',
          },
        },
        {
          de: {
            name: 'Coppa Bambini',
            desc: 'Zwei Kugeln, Sahne, bunte Streusel. Für Kinder bis 10.',
          },
          en: {
            name: 'Coppa Bambini',
            desc: 'Two scoops, cream, colorful sprinkles. For kids up to 10.',
          },
        },
        {
          de: { name: 'Cassata Siciliana', desc: 'Auf Vorbestellung. Drei Tage Vorlauf. Anrufen.' },
          en: {
            name: 'Cassata Siciliana',
            desc: 'Pre-order only. Three days lead time. Give us a call.',
          },
        },
      ],
    },
  },

  // Statistics for StatCallouts (About section)
  // Ingredient-sourcing register per design.md §1.5 (2026-05-22 reposition)
  stats: [
    {
      number: 'seit 1987',
      label: { de: 'an der Husemannstraße', en: 'on Husemannstraße' },
      ariaLabel: { de: 'An der Husemannstraße seit 1987', en: 'On Husemannstraße since 1987' },
    },
    {
      number: '7',
      label: { de: 'benannte Produzenten', en: 'named producers' },
      ariaLabel: { de: 'Sieben benannte Produzenten', en: 'Seven named producers' },
    },
    {
      number: '100%',
      label: { de: 'Bronte-Pistazie D.O.P.', en: 'Bronte pistachio D.O.P.' },
      ariaLabel: {
        de: 'Hundert Prozent Bronte-Pistazie mit Herkunftsschutz D.O.P.',
        en: 'One hundred percent Bronte pistachio with D.O.P. designation',
      },
    },
  ],

  // Legal — DE jurisdiction
  legal: {
    legalEntity: 'Bellini Eiscafé GmbH',
    legalEntityForm: 'GmbH',
    representedBy: 'Giulia Bellini, Geschäftsführerin',
    register: { court: 'Amtsgericht Charlottenburg', number: 'HRB 123456 B' },
    ustId: 'DE123456789',
    dataControllerEmail: 'datenschutz@eiscafe-bellini.de',
    dataControllerPhone: '+49 30 4400 1987',
    processors: [
      { name: 'Vercel', purpose: 'Hosting (CDN, EU region routing)', location: 'EU + US' },
      {
        name: 'Sentry',
        purpose: 'Fehlerprotokollierung (server-seitig, sendDefaultPii: false)',
        location: 'EU',
      },
    ],
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/eiscafe.bellini',
    facebook: null,
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

// Get the right text for the current locale, defaulting to DE.
export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
