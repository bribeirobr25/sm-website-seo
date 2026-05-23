/**
 * Site-wide constants for Saltlines (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional business; surf-coffee escape in
 * Friedrichshain. Bilingual labels DE / EN.
 */

export const SITE = {
  // Brand
  name: 'Saltlines',
  shortName: 'Saltlines',
  founder: 'Mia Halvorsen & Jonas Kruse',
  operatorToday: 'Mia Halvorsen',
  foundedYear: 2019,

  // Domain + URLs
  url: 'https://demo-saltlines.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+493078000419',
  phoneDisplay: '+49 30 7800 0419',
  whatsapp: '493078000419',
  email: 'hallo@saltlines.berlin',

  // Address (Berlin Friedrichshain — Holzmarkt area, river-adjacent)
  address: {
    street: 'Holzmarktstraße 25',
    neighborhood: 'Friedrichshain',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10243',
    country: 'DE',
  },
  geo: {
    lat: 52.512,
    lng: 13.422,
  },

  // Hours — café register, year-round
  hours: {
    summer: {
      label: { de: 'Sommer (Mai–September)', en: 'Summer (May–September)' },
      days: [
        { day: 'Mon', open: '07:00', close: '20:00' },
        { day: 'Tue', open: '07:00', close: '20:00' },
        { day: 'Wed', open: '07:00', close: '20:00' },
        { day: 'Thu', open: '07:00', close: '20:00' },
        { day: 'Fri', open: '07:00', close: '22:00' },
        { day: 'Sat', open: '08:00', close: '22:00' },
        { day: 'Sun', open: '08:00', close: '20:00' },
      ],
    },
    winter: {
      label: { de: 'Winter (Oktober–April)', en: 'Winter (October–April)' },
      days: [
        { day: 'Mon', open: '07:30', close: '18:00' },
        { day: 'Tue', open: '07:30', close: '18:00' },
        { day: 'Wed', open: '07:30', close: '18:00' },
        { day: 'Thu', open: '07:30', close: '18:00' },
        { day: 'Fri', open: '07:30', close: '20:00' },
        { day: 'Sat', open: '08:30', close: '20:00' },
        { day: 'Sun', open: '08:30', close: '18:00' },
      ],
    },
  },

  // Translations
  i18n: {
    de: {
      tagline: 'Eine Welle Pause. Mitten in Berlin.',
      shortTagline: 'Eine Welle Pause.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Kein echtes Geschäft.',
      hoursLabel: {
        summer: 'SOMMER · Mo–Do 07–20 · Fr/Sa 07–22 · So 08–20',
        winter: 'WINTER · Mo–Do 07:30–18 · Fr/Sa 07:30–20 · So 08:30–18',
      },
      nav: { home: 'Startseite', menu: 'Drinks', about: 'Story', visit: 'Besuchen' },
      cta: {
        viewMenu: 'Drinks ansehen.',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Reservieren',
        subscribe: 'Wellenbericht abonnieren.',
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
        title: 'Cookies — wie hättest du es gern?',
        bodyBefore: 'Wir verwenden essentielle Cookies, um die Seite überhaupt anzuzeigen. Mit deiner Zustimmung auch Analyse-Cookies (anonymisiert), damit wir wissen, was funktioniert. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      sections: {
        roasteries: { eyebrow: 'Bohnen von', heading: 'Drei Röstereien rotieren bei uns durch.' },
        film: { eyebrow: 'Film', heading: 'Sonntagmorgen 06:30, August 2025.', intro: 'Drei Minuten an der Spree, gefilmt von Mia. Kein Marketing — nur was da war.' },
        faq: { eyebrow: 'Häufig gefragt', heading: 'Was wir am Tresen immer wieder erklären.' },
        map: { eyebrow: 'Anfahrt', heading: 'Holzmarktstraße 25 — direkt am Spree-Knick.' },
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline: 'One wave of quiet. Right in the middle of Berlin.',
      shortTagline: 'One wave of quiet.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional business.',
      hoursLabel: {
        summer: 'SUMMER · Mon–Thu 07–20 · Fri/Sat 07–22 · Sun 08–20',
        winter: 'WINTER · Mon–Thu 07:30–18 · Fri/Sat 07:30–20 · Sun 08:30–18',
      },
      nav: { home: 'Home', menu: 'Drinks', about: 'Story', visit: 'Visit' },
      cta: {
        viewMenu: 'See the drinks.',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Reserve',
        subscribe: 'Subscribe to the wave report.',
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
      sections: {
        roasteries: { eyebrow: 'Beans by', heading: 'Three roasteries rotate through.' },
        film: { eyebrow: 'Film', heading: 'Sunday morning 06:30, August 2025.', intro: 'Three minutes on the Spree, shot by Mia. No marketing — just what was there.' },
        faq: { eyebrow: 'Frequently asked', heading: 'What we explain at the counter every day.' },
        map: { eyebrow: 'Find us', heading: 'Holzmarktstraße 25 — right at the Spree bend.' },
      },
      languageLabel: 'Language',
    },
  },

  // Featured drinks (Home page menu preview section)
  featured: [
    {
      slug: 'cold-brew-baltic',
      name: { de: 'Baltic Cold Brew', en: 'Baltic Cold Brew' },
      description: {
        de: '18 Stunden in der Ostsee-Salzbrise gereift. Espressohaus-Bohnen, eiskalt durch Edelstahlfilter gezogen. Mit einem Schuss Meersalz vor dem Servieren.',
        en: '18 hours cold-extracted with a pinch of sea salt before serving. Espressohaus beans, stainless-steel filter, no shortcuts.',
      },
      imageSrc: '/img/drink-cold-brew.jpg',
      imageAlt: {
        de: 'Glas Cold Brew Kaffee mit Eiswürfeln',
        en: 'Glass of cold brew coffee with ice cubes',
      },
    },
    {
      slug: 'matcha-strand',
      name: { de: 'Strand Matcha', en: 'Beach Matcha' },
      description: {
        de: 'Ceremonial-Grade Matcha aus Uji, Kyoto. Mit Hafermilch aus Brandenburg aufgeschäumt. Ein Hauch Vanille.',
        en: 'Ceremonial-grade matcha from Uji, Kyoto. Steamed with Brandenburg oat milk. A whisper of vanilla.',
      },
      imageSrc: '/img/drink-matcha.jpg',
      imageAlt: {
        de: 'Tasse heiße Matcha Latte mit Schaum',
        en: 'Cup of hot matcha latte with foam',
      },
    },
    {
      slug: 'filter-sunrise',
      name: { de: 'Sunrise Filter', en: 'Sunrise Filter' },
      description: {
        de: 'V60-Filter aus äthiopischen Yirgacheffe-Bohnen. Helle Säure, Pfirsichnote, klarer Abgang. Für die ruhigen Morgen.',
        en: 'V60 pour-over with Ethiopian Yirgacheffe beans. Bright acidity, peach notes, clean finish. For the quiet mornings.',
      },
      imageSrc: '/img/drink-filter.jpg',
      imageAlt: {
        de: 'V60-Filterkaffee wird in eine Tasse gegossen',
        en: 'V60 pour-over coffee being poured into a cup',
      },
    },
  ],

  // Full drinks menu
  menu: {
    coffee: {
      label: { de: 'KAFFEE', en: 'COFFEE' },
      count: 8,
      intro: {
        de: 'Bohnen von kleinen Röstereien — derzeit Espressohaus Hamburg, Bonanza Berlin, Five Elephant.',
        en: 'Beans from small roasters — currently Espressohaus Hamburg, Bonanza Berlin, Five Elephant.',
      },
      items: [
        {
          de: { name: 'Espresso', desc: 'Single shot, 21 g, double-ristretto-style.' },
          en: { name: 'Espresso', desc: 'Single shot, 21 g, double-ristretto-style.' },
        },
        {
          de: { name: 'Flat White', desc: 'Doppelter Espresso, samtiger Mikroschaum.' },
          en: { name: 'Flat White', desc: 'Double shot, velvet microfoam.' },
        },
        {
          de: { name: 'Cappuccino', desc: 'Doppelter Espresso, dichter Schaum, klassisch.' },
          en: { name: 'Cappuccino', desc: 'Double shot, dense foam, classic.' },
        },
        {
          de: { name: 'V60 Filter', desc: 'Sunrise: Äthiopien Yirgacheffe. Wechselt monatlich.' },
          en: { name: 'V60 Pour-over', desc: 'Sunrise: Ethiopian Yirgacheffe. Changes monthly.' },
        },
        {
          de: { name: 'AeroPress', desc: 'Inverted method, single origin. Frag uns nach den Bohnen.' },
          en: { name: 'AeroPress', desc: 'Inverted method, single origin. Ask us about the beans.' },
        },
        {
          de: { name: 'Cold Brew', desc: 'Baltic: 18-Stunden, kalt extrahiert, mit Meersalz.' },
          en: { name: 'Cold Brew', desc: 'Baltic: 18-hour cold extraction with sea salt.' },
        },
        {
          de: { name: 'Espresso Tonic', desc: 'Doppelter Shot über Thomas Henry Mediterranean.' },
          en: { name: 'Espresso Tonic', desc: 'Double shot over Thomas Henry Mediterranean.' },
        },
        {
          de: { name: 'Affogato', desc: 'Espresso über Bio-Vanilleeis von Eis Christina.' },
          en: { name: 'Affogato', desc: 'Espresso over organic vanilla ice cream from Eis Christina.' },
        },
      ],
    },
    other: {
      label: { de: 'NICHT-KAFFEE', en: 'NOT-COFFEE' },
      count: 6,
      intro: {
        de: 'Für alle, die zur Pause gekommen sind, aber kein Koffein wollen.',
        en: "For everyone here for the pause, but not the caffeine.",
      },
      items: [
        {
          de: { name: 'Strand Matcha', desc: 'Uji-Matcha, Hafermilch, ein Hauch Vanille.' },
          en: { name: 'Beach Matcha', desc: 'Uji matcha, oat milk, whisper of vanilla.' },
        },
        {
          de: { name: 'Chai Latte', desc: 'Hausgemachte Gewürzmischung, Honig optional.' },
          en: { name: 'Chai Latte', desc: 'House-blended spices, honey optional.' },
        },
        {
          de: { name: 'Heiße Schokolade', desc: 'Modica-Schokolade, geschmolzen in heißer Milch.' },
          en: { name: 'Hot Chocolate', desc: 'Modica chocolate melted into hot milk.' },
        },
        {
          de: { name: 'Frische Limonade', desc: 'Zitrone, Minze, ein Stück Ingwer. Saisonal.' },
          en: { name: 'Fresh Lemonade', desc: 'Lemon, mint, a slice of ginger. Seasonal.' },
        },
        {
          de: { name: 'Kombucha vom Fass', desc: 'Wechselt wöchentlich — Hibiskus, Ingwer, Bergamotte.' },
          en: { name: 'Kombucha on tap', desc: 'Rotates weekly — hibiscus, ginger, bergamot.' },
        },
        {
          de: { name: 'Sparkling Water', desc: 'Berliner Pilsner Brunnen, kalt, kostenlos zum Wasser.' },
          en: { name: 'Sparkling Water', desc: 'Berliner Pilsner Brunnen, cold, complimentary on request.' },
        },
      ],
    },
  },

  // Stats for StatCallouts (About section)
  stats: [
    {
      number: 'seit 2019',
      label: { de: 'an der Spree', en: 'on the Spree' },
      ariaLabel: { de: 'An der Spree seit 2019', en: 'On the Spree since 2019' },
    },
    {
      number: '3',
      label: { de: 'rotierende Röstereien', en: 'rotating roasteries' },
      ariaLabel: {
        de: 'Drei rotierende Röstereien im Programm',
        en: 'Three rotating roasteries in the rotation',
      },
    },
    {
      number: '04:47',
      label: { de: 'Sonnenaufgang heute', en: 'sunrise today' },
      ariaLabel: {
        de: 'Sonnenaufgang heute in Berlin um vier Uhr siebenundvierzig',
        en: 'Sunrise today in Berlin at four forty-seven',
      },
    },
  ],

  // Legal — DE jurisdiction
  legal: {
    legalEntity: 'Saltlines Berlin UG (haftungsbeschränkt)',
    legalEntityForm: 'UG (haftungsbeschränkt)',
    representedBy: 'Mia Halvorsen, Geschäftsführerin',
    register: { court: 'Amtsgericht Charlottenburg', number: 'HRB 234567 B' },
    ustId: 'DE234567890',
    dataControllerEmail: 'datenschutz@saltlines.berlin',
    dataControllerPhone: '+49 30 7800 0419',
    processors: [
      { name: 'Vercel', purpose: 'Hosting (CDN, EU region routing)', location: 'EU + US' },
      {
        name: 'Sentry',
        purpose: 'Fehlerprotokollierung (server-seitig, sendDefaultPii: false)',
        location: 'EU',
      },
      {
        name: 'Resend',
        purpose: 'Newsletter-Versand (E-Mail-Adresse + Bestätigungslink)',
        location: 'EU',
      },
    ],
  },

  // Social
  social: {
    instagram: 'https://www.instagram.com/saltlines.berlin',
    facebook: null,
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

// Get the right text for the current locale, defaulting to DE.
export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
