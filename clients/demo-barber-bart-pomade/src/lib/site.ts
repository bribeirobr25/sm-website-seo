/**
 * Site-wide constants for Bart & Pomade Barbershop (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional Berlin Friedrichshain heritage
 * barber. See `docs/clients/demo-barber-bart-pomade/BRIEF.md`. Bilingual
 * labels live below as `de` / `en` objects.
 *
 * Shape preserved from the agency Tier-2 scaffold so Header/Footer/Impressum/
 * Datenschutz read SITE.* fields without code changes. `hours.summer/winter`
 * repurposed as "Werktags" (weekday hours) + "Wochenende" (Sat hours).
 */

export const SITE = {
  // Brand
  name: 'Bart & Pomade Barbershop',
  shortName: 'Bart & Pomade',
  founder: 'Erik Lundström & Pavel Markovic',
  operatorToday: 'Erik Lundström, geschäftsführender Gesellschafter',
  foundedYear: 2016,

  // Domain + URLs
  url: 'https://demo-barber-bart-pomade.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+4930000000001',
  phoneDisplay: '+49 30 0000 00001',
  whatsapp: '493029007311',
  email: 'shop@bart-pomade.de',

  // Address (Friedrichshain, Boxhagener Straße)
  address: {
    street: 'Boxhagener Straße 73',
    neighborhood: 'Friedrichshain',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10245',
    country: 'DE',
  },
  geo: {
    lat: 52.512,
    lng: 13.464,
  },

  // Hours — Werktags + Wochenende
  hours: {
    summer: {
      label: { de: 'Werktags', en: 'Weekdays' },
      days: [
        { day: 'Mon', open: null, close: null },
        { day: 'Tue', open: '10:00', close: '20:00' },
        { day: 'Wed', open: '10:00', close: '20:00' },
        { day: 'Thu', open: '10:00', close: '21:00' },
        { day: 'Fri', open: '10:00', close: '21:00' },
        { day: 'Sat', open: null, close: null },
        { day: 'Sun', open: null, close: null },
      ],
    },
    winter: {
      label: { de: 'Wochenende', en: 'Weekend' },
      days: [
        { day: 'Mon', open: null, close: null },
        { day: 'Tue', open: null, close: null },
        { day: 'Wed', open: null, close: null },
        { day: 'Thu', open: null, close: null },
        { day: 'Fri', open: null, close: null },
        { day: 'Sat', open: '09:00', close: '18:00' },
        { day: 'Sun', open: null, close: null },
      ],
    },
  },

  i18n: {
    de: {
      tagline: 'Klassischer Männerschnitt + Heißhandtuch-Rasur in Friedrichshain — seit 2016.',
      shortTagline: 'Klassischer Schnitt. Heißhandtuch-Rasur. Friedrichshain.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Kein echter Barbershop.',
      hoursLabel: {
        summer: 'WERKTAGS · Di–Mi  10:00–20:00  ·  Do–Fr  10:00–21:00',
        winter: 'WOCHENENDE · Sa  09:00–18:00  ·  So + Mo  Ruhetag',
      },
      nav: { home: 'Startseite', menu: 'Preise', about: 'Werkstatt', visit: 'Termin' },
      cta: {
        viewMenu: 'Preise ansehen',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Termin buchen',
      },
      footer: {
        legal: 'Rechtliches',
        visit: 'Werkstatt',
        impressum: 'Impressum',
        privacy: 'Datenschutzerklärung',
        cookieSettings: 'Cookie-Einstellungen verwalten',
        rights: 'Alle Rechte vorbehalten.',
      },
      consent: {
        title: 'Cookies — wie hättest du sie gern?',
        bodyBefore:
          'Essentielle Cookies, damit die Seite funktioniert. Mit deiner Zustimmung anonymisierte Analyse-Cookies. Details in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      sections: {
        timeline: {
          eyebrow: 'Ablauf',
          heading: 'Vom Türklingeln bis zum Heißhandtuch.',
          intro: 'Vier Schritte — verbindlich, pünktlich, ohne Hektik.',
        },
        gallery: {
          eyebrow: 'Arbeit',
          heading: 'Schnitte aus der Werkstatt.',
          intro: 'Acht Bilder vor + nach — vom klassischen Side-Part zum modernen Crop.',
        },
        testimonialEyebrow: 'Stammkunde',
        faq: { eyebrow: 'Häufig gefragt', heading: 'Was wir am Stuhl immer wieder klären.' },
        map: { eyebrow: 'Anfahrt', heading: 'Boxhagener Straße 73 — direkt am Boxhagener Platz.' },
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline: "Classic men's cut + hot-towel shave in Friedrichshain — since 2016.",
      shortTagline: 'Classic cuts. Hot-towel shaves. Friedrichshain.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional barbershop.',
      hoursLabel: {
        summer: 'WEEKDAYS · Tue–Wed  10:00–20:00  ·  Thu–Fri  10:00–21:00',
        winter: 'WEEKEND · Sat  09:00–18:00  ·  Sun + Mon  closed',
      },
      nav: { home: 'Home', menu: 'Prices', about: 'Shop', visit: 'Book' },
      cta: {
        viewMenu: 'See prices',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Book an appointment',
      },
      footer: {
        legal: 'Legal',
        visit: 'Shop',
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookieSettings: 'Manage cookie settings',
        rights: 'All rights reserved.',
      },
      consent: {
        title: 'Cookies — how do you want them?',
        bodyBefore:
          'Essential cookies so the site works. With your consent anonymised analytics. Details in our ',
        privacyLinkLabel: 'privacy policy (German)',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
      },
      sections: {
        timeline: {
          eyebrow: 'How it works',
          heading: 'From the door to the hot towel.',
          intro: 'Four steps — committed, on-time, no rush.',
        },
        gallery: {
          eyebrow: 'Work',
          heading: 'Cuts from the chair.',
          intro: 'Eight before-after frames — from classic side-part to modern crop.',
        },
        testimonialEyebrow: 'Regular',
        faq: { eyebrow: 'Frequently asked', heading: 'What we clear up at the chair.' },
        map: { eyebrow: 'Find us', heading: 'Boxhagener Straße 73 — right on Boxhagener Platz.' },
      },
      languageLabel: 'Language',
    },
  },

  featured: [
    {
      slug: 'classic-cut',
      name: { de: 'Klassischer Männerschnitt', en: "Classic men's cut" },
      description: {
        de: 'Sauberer Schnitt mit Schere + Kamm, kein Maschinen-Crash-Through. 45 Minuten am Stuhl.',
        en: 'Clean scissor-and-comb cut, no clipper-rush. 45 minutes in the chair.',
      },
      imageSrc: '/img/service-cut.jpg',
      imageAlt: { de: 'Klassischer Männerschnitt', en: "Classic men's cut" },
    },
    {
      slug: 'hot-towel-shave',
      name: { de: 'Heißhandtuch-Rasur', en: 'Hot-towel shave' },
      description: {
        de: 'Traditionelle Nassrasur mit Klinge, Heißhandtuch, kaltem Tonic. 30 Minuten.',
        en: 'Traditional wet shave with blade, hot towel, cold tonic. 30 minutes.',
      },
      imageSrc: '/img/service-shave.jpg',
      imageAlt: { de: 'Heißhandtuch-Rasur', en: 'Hot-towel shave' },
    },
    {
      slug: 'beard-trim',
      name: { de: 'Bartpflege + Formung', en: 'Beard trim + shaping' },
      description: {
        de: 'Bart in Form, Konturen mit Klinge, mit eigener Pomade gepflegt. 30 Minuten.',
        en: 'Beard shape, blade contouring, finished with our own pomade. 30 minutes.',
      },
      imageSrc: '/img/service-beard.jpg',
      imageAlt: { de: 'Bartpflege + Formung', en: 'Beard trim + shaping' },
    },
  ],

  menu: {
    creme: {
      label: { de: 'SCHNITTE', en: 'CUTS' },
      count: 5,
      intro: {
        de: 'Schere zuerst, Maschine zweitens. Kein Termin unter 30 Minuten — saubere Arbeit braucht Zeit.',
        en: 'Scissors first, clippers second. No appointment under 30 min — clean work takes time.',
      },
      items: [
        {
          de: {
            name: 'Klassischer Schnitt (45 Min) — 38 €',
            desc: 'Schere + Kamm, klassischer Side-Part oder moderner Crop.',
          },
          en: {
            name: 'Classic cut (45 min) — €38',
            desc: 'Scissors + comb, classic side-part or modern crop.',
          },
        },
        {
          de: {
            name: 'Skin-Fade (50 Min) — 42 €',
            desc: 'Maschinenarbeit am Übergang, Schere oben. Sauber abgesetzt.',
          },
          en: {
            name: 'Skin fade (50 min) — €42',
            desc: 'Clipper work at the transition, scissors on top. Clean fade.',
          },
        },
        {
          de: {
            name: 'Buzz-Cut (20 Min) — 22 €',
            desc: 'Eine Länge, sauber, schnell. Inklusive Konturen mit Klinge.',
          },
          en: {
            name: 'Buzz cut (20 min) — €22',
            desc: 'One length, clean, fast. Includes blade-edged contours.',
          },
        },
        {
          de: {
            name: 'Kinderschnitt bis 12 (30 Min) — 22 €',
            desc: 'Geduldig, mit Trick-Box neben dem Stuhl.',
          },
          en: {
            name: 'Kids cut up to 12 (30 min) — €22',
            desc: 'Patient, with a toy box beside the chair.',
          },
        },
        {
          de: {
            name: 'Schnitt + Bart (75 Min) — 60 €',
            desc: 'Klassischer Schnitt + Bartformung in einem Termin. Empfohlen.',
          },
          en: {
            name: 'Cut + beard (75 min) — €60',
            desc: 'Classic cut + beard shaping in one slot. Recommended.',
          },
        },
      ],
    },
    sorbetti: {
      label: { de: 'BART + RASUR', en: 'BEARD + SHAVE' },
      count: 4,
      intro: {
        de: 'Klingenarbeit von Pavel — Schwarzmeer-Tradition, fünfzehn Jahre Übung.',
        en: "Pavel's blade work — Black-Sea tradition, fifteen years of practice.",
      },
      items: [
        {
          de: {
            name: 'Heißhandtuch-Rasur (30 Min) — 32 €',
            desc: 'Klinge, Heißhandtuch, kaltes Tonic. Pre- + Aftershave.',
          },
          en: {
            name: 'Hot-towel shave (30 min) — €32',
            desc: 'Blade, hot towel, cold tonic. Pre + aftershave.',
          },
        },
        {
          de: {
            name: 'Royal Shave (60 Min) — 55 €',
            desc: 'Doppelt rasiert (mit + gegen die Wuchsrichtung), Gesichtsmaske, Augenkompresse.',
          },
          en: {
            name: 'Royal shave (60 min) — €55',
            desc: 'Double pass (with + against grain), face mask, eye compress.',
          },
        },
        {
          de: {
            name: 'Bartformung (30 Min) — 26 €',
            desc: 'Bart in Form, Konturen mit Klinge, eigene Pomade.',
          },
          en: {
            name: 'Beard shaping (30 min) — €26',
            desc: 'Beard shape, blade contours, our own pomade.',
          },
        },
        {
          de: {
            name: 'Bart-Färbung (45 Min) — 38 €',
            desc: 'Pflanzliche Farbe (Henna-Basis) für grauen Bart. Vegan.',
          },
          en: {
            name: 'Beard colouring (45 min) — €38',
            desc: 'Plant-based dye (henna base) for grey beards. Vegan.',
          },
        },
      ],
    },
    spezialitaeten: {
      label: { de: 'EXTRAS', en: 'EXTRAS' },
      count: 3,
      intro: {
        de: 'Was sonst noch geht — meist als Add-on zum Hauptkurs.',
        en: 'What else is possible — usually as an add-on to a main service.',
      },
      items: [
        {
          de: {
            name: 'Augenbrauen + Ohren + Nase (10 Min) — 8 €',
            desc: 'Add-on bei jedem Schnitt. Saubere Sache.',
          },
          en: {
            name: 'Brows + ears + nose (10 min) — €8',
            desc: 'Add-on with any cut. Clean job.',
          },
        },
        {
          de: {
            name: 'Kopfmassage (15 Min) — 15 €',
            desc: 'Vor dem Schnitt oder nach der Rasur. Mit warmem Öl.',
          },
          en: {
            name: 'Scalp massage (15 min) — €15',
            desc: 'Before the cut or after the shave. Warm oil.',
          },
        },
        {
          de: {
            name: 'Junggesellen-Paket (90 Min) — 95 €',
            desc: 'Schnitt + Royal Shave + Pomade + Whisky. Termin außer der Reihe möglich.',
          },
          en: {
            name: 'Bachelor package (90 min) — €95',
            desc: 'Cut + royal shave + pomade + whisky. Off-hours slot possible.',
          },
        },
      ],
    },
  },

  stats: [
    {
      number: 'seit 2016',
      label: { de: 'in der Boxhagener', en: 'on Boxhagener' },
      ariaLabel: {
        de: 'In der Boxhagener Straße seit 2016',
        en: 'On Boxhagener Straße since 2016',
      },
    },
    {
      number: '12',
      label: { de: 'Leistungen', en: 'services' },
      ariaLabel: { de: 'Zwölf Leistungen', en: 'Twelve services' },
    },
    {
      number: '4',
      label: { de: 'Barber im Team', en: 'barbers on the team' },
      ariaLabel: { de: 'Vier Barber im Team', en: 'Four barbers on the team' },
    },
  ],

  legal: {
    legalEntity: 'Bart & Pomade Lundström-Markovic UG (haftungsbeschränkt)',
    legalEntityForm: 'Unternehmergesellschaft (UG)',
    representedBy: 'Erik Lundström, Pavel Markovic (Geschäftsführer)',
    register: { court: 'Amtsgericht Charlottenburg', number: 'HRB 187654 B' },
    ustId: 'DE412987345',
    dataControllerEmail: 'datenschutz@bart-pomade.de',
    dataControllerPhone: '+4930000000001',
    processors: [
      { name: 'Vercel', purpose: 'Hosting (CDN, EU region routing)', location: 'EU + US' },
      {
        name: 'Sentry',
        purpose: 'Fehlerprotokollierung (server-seitig, sendDefaultPii: false)',
        location: 'EU',
      },
    ],
  },

  social: {
    instagram: 'https://www.instagram.com/bart.pomade.berlin',
    facebook: null,
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
