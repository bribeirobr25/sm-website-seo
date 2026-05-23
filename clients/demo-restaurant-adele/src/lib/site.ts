/**
 * Site-wide constants for Adèle (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional fine-dining restaurant in Mitte.
 * Bilingual labels DE / EN.
 */

export const SITE = {
  // Brand
  name: 'Adèle',
  shortName: 'Adèle',
  founder: 'Adèle Voss',
  operatorToday: 'Adèle Voss, Chef de Cuisine',
  foundedYear: 2017,

  // Domain + URLs
  url: 'https://demo-adele.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+493020457800',
  phoneDisplay: '+49 30 2045 7800',
  whatsapp: '493020457800',
  email: 'reservierung@adele-berlin.de',

  // Address (Berlin Mitte)
  address: {
    street: 'Behrenstraße 47',
    neighborhood: 'Mitte',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10117',
    country: 'DE',
  },
  geo: {
    lat: 52.515,
    lng: 13.388,
  },

  // Hours — dinner only, closed Sun/Mon
  hours: {
    summer: {
      label: { de: 'Restaurant — Dinner', en: 'Restaurant — Dinner' },
      days: [
        { day: 'Mon', open: null, close: null },
        { day: 'Tue', open: '18:00', close: '23:00' },
        { day: 'Wed', open: '18:00', close: '23:00' },
        { day: 'Thu', open: '18:00', close: '23:00' },
        { day: 'Fri', open: '18:00', close: '24:00' },
        { day: 'Sat', open: '18:00', close: '24:00' },
        { day: 'Sun', open: null, close: null },
      ],
    },
    winter: {
      label: { de: 'Bar — Aperitif & Digestif', en: 'Bar — Aperitif & Digestif' },
      days: [
        { day: 'Mon', open: null, close: null },
        { day: 'Tue', open: '17:00', close: '01:00' },
        { day: 'Wed', open: '17:00', close: '01:00' },
        { day: 'Thu', open: '17:00', close: '01:00' },
        { day: 'Fri', open: '17:00', close: '02:00' },
        { day: 'Sat', open: '17:00', close: '02:00' },
        { day: 'Sun', open: null, close: null },
      ],
    },
  },

  // Translations
  i18n: {
    de: {
      tagline: 'Fünf Gänge. Eine Saison. Eine Karte, die jede Woche neu geschrieben wird.',
      shortTagline: 'Fünf Gänge. Eine Saison.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Kein echtes Geschäft.',
      hoursLabel: {
        summer: 'RESTAURANT · Di–Do 18–23 · Fr/Sa 18–24',
        winter: 'BAR · Di–Do 17–01 · Fr/Sa 17–02',
      },
      nav: { home: 'Startseite', menu: 'Karte', about: 'Konzept', visit: 'Reservieren' },
      cta: {
        viewMenu: 'Karte ansehen.',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Tisch reservieren.',
      },
      footer: {
        legal: 'Rechtliches',
        visit: 'Reservieren',
        impressum: 'Impressum',
        privacy: 'Datenschutzerklärung',
        cookieSettings: 'Cookie-Einstellungen verwalten',
        rights: 'Alle Rechte vorbehalten.',
      },
      consent: {
        title: 'Cookies — eine kurze Information.',
        bodyBefore: 'Wir verwenden essentielle Cookies, damit die Seite funktioniert. Mit Ihrer Zustimmung auch anonymisierte Analyse-Cookies, um die Nutzung zu verstehen. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      sections: {
        pricing: { eyebrow: 'Preise', heading: 'Was kostet ein Abend bei uns.' },
        team: { eyebrow: 'Das Team', heading: 'Vier Personen, eine Karte.' },
        faq: { eyebrow: 'Häufig gefragt', heading: 'Was Sie wissen sollten, bevor Sie reservieren.' },
        map: { eyebrow: 'Anfahrt', heading: 'Behrenstraße 47 — drei Minuten von Unter den Linden.' },
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline: 'Five courses. One season. A menu rewritten every week.',
      shortTagline: 'Five courses. One season.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional business.',
      hoursLabel: {
        summer: 'RESTAURANT · Tue–Thu 18–23 · Fri/Sat 18–24',
        winter: 'BAR · Tue–Thu 17–01 · Fri/Sat 17–02',
      },
      nav: { home: 'Home', menu: 'Menu', about: 'Concept', visit: 'Reserve' },
      cta: {
        viewMenu: 'See the menu.',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Reserve a table.',
      },
      footer: {
        legal: 'Legal',
        visit: 'Reserve',
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookieSettings: 'Manage cookie settings',
        rights: 'All rights reserved.',
      },
      consent: {
        title: 'Cookies — a brief note.',
        bodyBefore: 'We use essential cookies so the site works. With your consent we also use anonymised analytics to understand how the site is used. More in our ',
        privacyLinkLabel: 'privacy policy (German)',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
      },
      sections: {
        pricing: { eyebrow: 'Pricing', heading: 'What an evening with us costs.' },
        team: { eyebrow: 'The team', heading: 'Four people, one menu.' },
        faq: { eyebrow: 'Frequently asked', heading: 'What to know before you reserve.' },
        map: { eyebrow: 'Find us', heading: 'Behrenstraße 47 — three minutes from Unter den Linden.' },
      },
      languageLabel: 'Language',
    },
  },

  // Featured courses (Home page menu preview section) — current 3-course menu
  featured: [
    {
      slug: 'amuse-betterave',
      name: { de: 'Rote Bete · Krenwurzel', en: 'Beetroot · Horseradish' },
      description: {
        de: 'Geröstete Bete von Hof Marquardt, frischer Kren, Schwarzbrotcrumble, Crème fraîche aus Brandenburg.',
        en: 'Roasted beetroot from Hof Marquardt, fresh horseradish, dark-bread crumble, Brandenburg crème fraîche.',
      },
      imageSrc: '/img/dish-appetizer.jpg',
      imageAlt: {
        de: 'Vorspeise mit roter Bete und Krenwurzel auf einem dunklen Teller',
        en: 'Beetroot and horseradish appetizer plated on dark ceramic',
      },
    },
    {
      slug: 'main-zander',
      name: { de: 'Zander · Verjus · Bärlauch', en: 'Pike-perch · Verjus · Wild garlic' },
      description: {
        de: 'Zander aus dem Müggelsee, Beurre blanc mit Verjus, Bärlauchöl, Kohlrabi in zwei Texturen.',
        en: 'Müggelsee pike-perch, verjus beurre blanc, wild-garlic oil, kohlrabi two ways.',
      },
      imageSrc: '/img/dish-main.jpg',
      imageAlt: {
        de: 'Hauptgang Zanderfilet mit Beurre blanc',
        en: 'Pike-perch main course with beurre blanc sauce',
      },
    },
    {
      slug: 'dessert-rhabarber',
      name: { de: 'Rhabarber · Joghurt · Estragon', en: 'Rhubarb · Yoghurt · Tarragon' },
      description: {
        de: 'Pochierter Rhabarber, Joghurt-Sorbet, Estragon, Crumble aus brauner Butter.',
        en: 'Poached rhubarb, yoghurt sorbet, tarragon, brown-butter crumble.',
      },
      imageSrc: '/img/dish-dessert.jpg',
      imageAlt: {
        de: 'Dessertteller mit Rhabarber und Joghurt-Sorbet',
        en: 'Dessert plate with rhubarb and yoghurt sorbet',
      },
    },
  ],

  // Full menu (Menu page) — weekly tasting + wine pairing
  menu: {
    tasting: {
      label: { de: 'MENÜ DER WOCHE', en: "THIS WEEK'S MENU" },
      count: 5,
      intro: {
        de: 'Fünf Gänge, eine Saison. Die Karte wechselt jeden Mittwoch und folgt dem Brandenburg-Brandenburg-Sachsen-Anhalt-Liefer-Kreis. Vegetarische Variante auf Wunsch.',
        en: 'Five courses, one season. The menu rotates every Wednesday and follows the Brandenburg–Saxony-Anhalt supply circle. Vegetarian variation on request.',
      },
      items: [
        {
          de: { name: 'Amuse · Rote Bete & Krenwurzel', desc: 'Hof Marquardt, Brandenburg. Geröstet, gepickelt, fermentiert.' },
          en: { name: 'Amuse · Beetroot & horseradish', desc: 'Hof Marquardt, Brandenburg. Roasted, pickled, fermented.' },
        },
        {
          de: { name: '1. Gang · Spargel, Bottarga, Zitronenmelisse', desc: 'Beelitz, gerade aus der Erde. Mit gehobelter Sardischer Bottarga.' },
          en: { name: 'Course 1 · Asparagus, bottarga, lemon balm', desc: 'Beelitz, freshly lifted. With shaved Sardinian bottarga.' },
        },
        {
          de: { name: '2. Gang · Zander, Verjus, Bärlauch', desc: 'Müggelsee, am Morgen gefangen. Beurre blanc mit Verjus.' },
          en: { name: 'Course 2 · Pike-perch, verjus, wild garlic', desc: 'Müggelsee, line-caught at dawn. Beurre blanc with verjus.' },
        },
        {
          de: { name: '3. Gang · Reh, Rote Johannisbeere, Wacholder', desc: 'Wildbret aus dem Spreewald. Reduziertes Eigenjus, eingelegte Johannisbeere.' },
          en: { name: 'Course 3 · Venison, redcurrant, juniper', desc: 'Spreewald venison. Reduced jus, pickled redcurrant.' },
        },
        {
          de: { name: 'Dessert · Rhabarber, Joghurt, Estragon', desc: 'Pochierter Rhabarber, Joghurt-Sorbet, brauner Butter-Crumble.' },
          en: { name: 'Dessert · Rhubarb, yoghurt, tarragon', desc: 'Poached rhubarb, yoghurt sorbet, brown-butter crumble.' },
        },
      ],
    },
    wine: {
      label: { de: 'WEINBEGLEITUNG', en: 'WINE PAIRING' },
      count: 5,
      intro: {
        de: 'Fünf Gläser, von Sommelière Theresa Köhler ausgewählt. Schwerpunkt: deutsche Naturweine, Mosel-Riesling, Rheingau, eine Flasche aus Frankreich pro Menü.',
        en: 'Five glasses, curated by sommelière Theresa Köhler. Focus: German natural wines, Mosel Riesling, Rheingau, one French bottle per menu.',
      },
      items: [
        {
          de: { name: 'Apéritif · Sekt brut nature', desc: 'Schloss Vaux, Rheingau. Flaschengärung, ohne Dosage.' },
          en: { name: 'Apéritif · Sekt brut nature', desc: 'Schloss Vaux, Rheingau. Méthode traditionnelle, no dosage.' },
        },
        {
          de: { name: '1. Gang · Riesling trocken', desc: 'Weingut Keller, Rheinhessen 2022. Mineralisch, klar.' },
          en: { name: 'Course 1 · Dry Riesling', desc: 'Weingut Keller, Rheinhessen 2022. Mineral, precise.' },
        },
        {
          de: { name: '2. Gang · Chenin Blanc', desc: 'Domaine Huet, Vouvray 2020. Sec tendre, ein Schluck Frankreich.' },
          en: { name: 'Course 2 · Chenin Blanc', desc: 'Domaine Huet, Vouvray 2020. Sec tendre — one sip of France per menu.' },
        },
        {
          de: { name: '3. Gang · Spätburgunder', desc: 'Weingut Becker, Pfalz 2019. Burgund-Stil, leicht im Holz.' },
          en: { name: 'Course 3 · Pinot Noir', desc: 'Weingut Becker, Pfalz 2019. Burgundian-style, light oak.' },
        },
        {
          de: { name: 'Dessert · Auslese', desc: 'Egon Müller-Scharzhof, Saar 2018. Süß, säurebetont.' },
          en: { name: 'Dessert · Auslese', desc: 'Egon Müller-Scharzhof, Saar 2018. Sweet, acid-driven.' },
        },
      ],
    },
  },

  // Stats for StatCallouts (About section)
  stats: [
    {
      number: '2017',
      label: { de: 'in der Behrenstraße', en: 'on Behrenstraße' },
      ariaLabel: {
        de: 'In der Behrenstraße seit 2017',
        en: 'On Behrenstraße since 2017',
      },
    },
    {
      number: 'jeden Mi',
      label: { de: 'wechselt die Karte', en: 'menu changes' },
      ariaLabel: {
        de: 'Jeden Mittwoch wechselt die Karte',
        en: 'The menu changes every Wednesday',
      },
    },
    {
      number: '22',
      label: { de: 'Plätze, eine Sitzung', en: 'seats, one seating' },
      ariaLabel: {
        de: 'Zweiundzwanzig Plätze in einer Sitzung am Abend',
        en: 'Twenty-two seats in a single evening seating',
      },
    },
  ],

  // Legal — DE jurisdiction
  legal: {
    legalEntity: 'Adèle Restaurant Berlin GmbH',
    legalEntityForm: 'GmbH',
    representedBy: 'Adèle Voss, Geschäftsführerin',
    register: { court: 'Amtsgericht Charlottenburg', number: 'HRB 345678 B' },
    ustId: 'DE345678901',
    dataControllerEmail: 'datenschutz@adele-berlin.de',
    dataControllerPhone: '+49 30 2045 7800',
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
    instagram: 'https://www.instagram.com/adele.berlin',
    facebook: null,
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
