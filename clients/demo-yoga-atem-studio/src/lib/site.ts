/**
 * Site-wide constants for Atem Studio (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional Berlin Kreuzberg boutique yoga
 * studio. See `docs/clients/demo-yoga-atem-studio/BRIEF.md`. Bilingual
 * labels live below as `de` / `en` objects accessed via locale lookups.
 *
 * Shape preserved from the agency Tier-2 scaffold so Header/Footer/Impressum/
 * Datenschutz read SITE.* fields without code changes. `hours.summer/winter`
 * repurposed as "Werktags" (weekday rhythm) + "Wochenende" (weekend rhythm).
 */

export const SITE = {
  // Brand
  name: 'Atem Studio',
  shortName: 'Atem',
  founder: 'Lara Brückner & Felix Holm',
  operatorToday: 'Lara Brückner, Gründerin + Lehrerin',
  foundedYear: 2018,

  // Domain + URLs
  url: 'https://demo-yoga-atem-studio.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+4930000000007',
  phoneDisplay: '+49 30 0000 00007',
  whatsapp: '493061102018',
  email: 'hallo@atem-studio.de',

  // Address (Kreuzberg, Bergmannstraße)
  address: {
    street: 'Bergmannstraße 67',
    neighborhood: 'Kreuzberg',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10961',
    country: 'DE',
  },
  geo: {
    lat: 52.4885,
    lng: 13.396,
  },

  // Hours — repurposed: Werktags (weekday rhythm) + Wochenende (weekend rhythm)
  hours: {
    summer: {
      label: { de: 'Werktags', en: 'Weekdays' },
      days: [
        { day: 'Mon', open: '07:00', close: '21:00' },
        { day: 'Tue', open: '07:00', close: '21:00' },
        { day: 'Wed', open: '07:00', close: '21:00' },
        { day: 'Thu', open: '07:00', close: '21:00' },
        { day: 'Fri', open: '07:00', close: '20:00' },
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
        { day: 'Sat', open: '08:30', close: '18:00' },
        { day: 'Sun', open: '09:00', close: '17:00' },
      ],
    },
  },

  i18n: {
    de: {
      tagline:
        'Boutique-Yoga in Bergmannkiez — Hatha, Vinyasa, Yin und Prenatal in kleinen Klassen.',
      shortTagline: 'Boutique-Yoga am Bergmannkiez. Erste Stunde gratis.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Kein echtes Studio.',
      hoursLabel: {
        summer: 'WERKTAGS · Mo–Do  07:00–21:00  ·  Fr  07:00–20:00',
        winter: 'WOCHENENDE · Sa  08:30–18:00  ·  So  09:00–17:00',
      },
      nav: { home: 'Startseite', menu: 'Kurse', about: 'Studio', visit: 'Besuchen' },
      cta: {
        viewMenu: 'Kursplan ansehen',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Probestunde buchen',
      },
      footer: {
        legal: 'Rechtliches',
        visit: 'Studio',
        impressum: 'Impressum',
        privacy: 'Datenschutzerklärung',
        cookieSettings: 'Cookie-Einstellungen verwalten',
        rights: 'Alle Rechte vorbehalten.',
      },
      consent: {
        title: 'Cookies — wie hättest du es gern?',
        bodyBefore:
          'Wir verwenden essentielle Cookies, damit die Seite überhaupt funktioniert. Mit deiner Zustimmung auch anonymisierte Analyse-Cookies, damit wir wissen, was gelesen wird. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      sections: {
        timeline: {
          eyebrow: 'Wochenrhythmus',
          heading: 'Vier Klassen am Tag — finde deinen Rhythmus.',
          intro:
            'Morgens vor der Arbeit, mittags zum Durchatmen, abends zum Loslassen — sieben Tage die Woche.',
        },
        gallery: {
          eyebrow: 'Studio',
          heading: 'Räume in der Bergmannstraße.',
          intro: 'Acht Eindrücke aus den zwei Räumen, der Bibliothek und dem Tee-Eck.',
        },
        testimonialEyebrow: 'Schülerinnenstimme',
        faq: { eyebrow: 'Häufig gefragt', heading: 'Was wir vor der ersten Stunde erklären.' },
        map: {
          eyebrow: 'Anfahrt',
          heading: 'Bergmannstraße 67 — drei Minuten vom Marheineke-Markt.',
        },
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline:
        'Boutique yoga in Bergmannkiez — Hatha, Vinyasa, Yin, and prenatal in small classes.',
      shortTagline: 'Boutique yoga in Bergmannkiez. First class free.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional studio.',
      hoursLabel: {
        summer: 'WEEKDAYS · Mon–Thu  07:00–21:00  ·  Fri  07:00–20:00',
        winter: 'WEEKEND · Sat  08:30–18:00  ·  Sun  09:00–17:00',
      },
      nav: { home: 'Home', menu: 'Classes', about: 'Studio', visit: 'Visit' },
      cta: {
        viewMenu: 'See the class schedule',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Book first class',
      },
      footer: {
        legal: 'Legal',
        visit: 'Studio',
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookieSettings: 'Manage cookie settings',
        rights: 'All rights reserved.',
      },
      consent: {
        title: 'Cookies — how would you like them?',
        bodyBefore:
          'We use essential cookies so the site works. With your consent we also use anonymised analytics so we know what gets read. More in our ',
        privacyLinkLabel: 'privacy policy (German)',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Accept all',
        reject: 'Reject all',
      },
      sections: {
        timeline: {
          eyebrow: 'Weekly rhythm',
          heading: 'Four classes a day — find your rhythm.',
          intro:
            'Mornings before work, mid-day to breathe, evenings to let go — open seven days a week.',
        },
        gallery: {
          eyebrow: 'Studio',
          heading: 'Inside Bergmannstraße 67.',
          intro: 'Eight glimpses of the two practice rooms, library, and tea corner.',
        },
        testimonialEyebrow: 'Student voice',
        faq: { eyebrow: 'Frequently asked', heading: 'What we explain before your first class.' },
        map: {
          eyebrow: 'Find us',
          heading: 'Bergmannstraße 67 — three minutes from Marheineke market.',
        },
      },
      languageLabel: 'Language',
    },
  },

  featured: [
    {
      slug: 'vinyasa',
      name: { de: 'Vinyasa Flow', en: 'Vinyasa Flow' },
      description: {
        de: 'Fließende Sequenzen, Atem-geführt. Für alle, die Bewegung als Meditation suchen.',
        en: 'Flowing sequences, breath-led. For everyone who wants meditation in movement.',
      },
      imageSrc: '/img/class-vinyasa.jpg',
      imageAlt: { de: 'Vinyasa-Stunde im Studio', en: 'Vinyasa class in the studio' },
    },
    {
      slug: 'yin',
      name: { de: 'Yin Yoga', en: 'Yin Yoga' },
      description: {
        de: 'Lange gehaltene Positionen am Boden. Tief in die Faszien, langsam aus dem Kopf.',
        en: 'Long-held floor postures. Deep into fascia, slow out of the head.',
      },
      imageSrc: '/img/class-yin.jpg',
      imageAlt: { de: 'Yin-Yoga im Studio', en: 'Yin yoga in the studio' },
    },
    {
      slug: 'prenatal',
      name: { de: 'Prenatal', en: 'Prenatal' },
      description: {
        de: 'Sanfte Übungen für die Schwangerschaft, ab der 13. Woche. Mit Hebamme als Co-Lehrerin.',
        en: 'Gentle practice for pregnancy, from week 13. Co-taught with a midwife.',
      },
      imageSrc: '/img/class-prenatal.jpg',
      imageAlt: { de: 'Prenatal-Klasse', en: 'Prenatal class' },
    },
  ],

  menu: {
    creme: {
      label: { de: 'BEWEGUNG', en: 'MOVEMENT' },
      count: 4,
      intro: {
        de: 'Dynamische Klassen — bringen Wärme in den Körper, bevor wir in die Stille gehen.',
        en: 'Dynamic classes — warming the body before stillness.',
      },
      items: [
        {
          de: {
            name: 'Vinyasa Flow (60/90 Min)',
            desc: 'Fließend, atem-geführt, alle Level. Mo · Mi · Fr morgens, Di · Do abends.',
          },
          en: {
            name: 'Vinyasa Flow (60/90 min)',
            desc: 'Flowing, breath-led, all levels. Mon · Wed · Fri mornings, Tue · Thu evenings.',
          },
        },
        {
          de: {
            name: 'Hatha Klassisch (75 Min)',
            desc: 'Sorgfältig, längere Haltungen, ohne Drama. Mi · Fr morgens.',
          },
          en: {
            name: 'Hatha Classic (75 min)',
            desc: 'Careful, longer holds, no drama. Wed · Fri mornings.',
          },
        },
        {
          de: {
            name: 'Power Vinyasa (60 Min)',
            desc: 'Schneller, schweißtreibend — empfohlen mit Erfahrung. Di · Do morgens.',
          },
          en: {
            name: 'Power Vinyasa (60 min)',
            desc: 'Faster, sweat-inducing — recommended with experience. Tue · Thu mornings.',
          },
        },
        {
          de: {
            name: 'Slow Flow (75 Min)',
            desc: 'Langsame Vinyasa-Variante, ideal für Einsteigerinnen. Sa morgens.',
          },
          en: {
            name: 'Slow Flow (75 min)',
            desc: 'Slower Vinyasa variant, ideal for newcomers. Sat mornings.',
          },
        },
      ],
    },
    sorbetti: {
      label: { de: 'STILLE', en: 'STILLNESS' },
      count: 3,
      intro: {
        de: 'Tiefer in den Körper, langsamer aus dem Kopf — ohne Anstrengung, mit Aufmerksamkeit.',
        en: 'Deeper into the body, slower out of the head — without effort, with attention.',
      },
      items: [
        {
          de: {
            name: 'Yin Yoga (75 Min)',
            desc: 'Boden-Positionen, 3–5 Min gehalten. Mit Faszien-Fokus. Mo · Mi abends, So vormittags.',
          },
          en: {
            name: 'Yin Yoga (75 min)',
            desc: 'Floor postures, 3–5 min holds. Fascia focus. Mon · Wed evenings, Sun mornings.',
          },
        },
        {
          de: {
            name: 'Restorative (60 Min)',
            desc: 'Mit Bolstern, Decken, Augenkissen. Komplette Entlastung. Fr abends.',
          },
          en: {
            name: 'Restorative (60 min)',
            desc: 'With bolsters, blankets, eye pillows. Full release. Fri evenings.',
          },
        },
        {
          de: {
            name: 'Meditation (30 Min)',
            desc: 'Sitzpraxis mit Anleitung. Atem · Geräusch · stille Beobachtung. Täglich 07:00 + 19:30.',
          },
          en: {
            name: 'Meditation (30 min)',
            desc: 'Seated practice with guidance. Breath · sound · silent witnessing. Daily 07:00 + 19:30.',
          },
        },
      ],
    },
    spezialitaeten: {
      label: { de: 'SPEZIALPROGRAMME', en: 'SPECIAL PROGRAMMES' },
      count: 4,
      intro: {
        de: 'Längere Formate für bestimmte Lebensphasen oder Themen — meist saisonal, Anmeldung erforderlich.',
        en: 'Longer formats for specific life phases or themes — usually seasonal, registration required.',
      },
      items: [
        {
          de: {
            name: 'Prenatal (60 Min)',
            desc: 'Ab der 13. Schwangerschaftswoche, mit Hebamme. Di · Do nachmittags.',
          },
          en: {
            name: 'Prenatal (60 min)',
            desc: 'From pregnancy week 13, co-taught with a midwife. Tue · Thu afternoons.',
          },
        },
        {
          de: {
            name: 'Postnatal mit Baby (60 Min)',
            desc: 'Babys ab 6 Wochen willkommen. Stillpausen jederzeit. Mi vormittags.',
          },
          en: {
            name: 'Postnatal with baby (60 min)',
            desc: 'Babies welcome from 6 weeks. Nursing breaks anytime. Wed mornings.',
          },
        },
        {
          de: {
            name: 'Yoga + Coaching (90 Min)',
            desc: 'Praxis + 30-Min-Reflexionsgespräch. Einzel oder Kleingruppe, Termin nach Vereinbarung.',
          },
          en: {
            name: 'Yoga + coaching (90 min)',
            desc: 'Practice + 30-min reflection. 1:1 or small group, by appointment.',
          },
        },
        {
          de: {
            name: 'Workshop-Wochenende',
            desc: 'Quartalsweise Sa–So zu einem Thema (Atem, Rückenarbeit, Inversionen). Termine im Newsletter.',
          },
          en: {
            name: 'Workshop weekend',
            desc: 'Quarterly Sat–Sun on a theme (breath, back work, inversions). Dates in the newsletter.',
          },
        },
      ],
    },
  },

  stats: [
    {
      number: 'seit 2018',
      label: { de: 'an der Bergmannstraße', en: 'on Bergmannstraße' },
      ariaLabel: { de: 'An der Bergmannstraße seit 2018', en: 'On Bergmannstraße since 2018' },
    },
    {
      number: '5',
      label: { de: 'Stilrichtungen', en: 'styles' },
      ariaLabel: { de: 'Fünf Stilrichtungen', en: 'Five styles' },
    },
    {
      number: 'kostenlos',
      label: { de: 'erste Stunde', en: 'first class' },
      ariaLabel: { de: 'Erste Stunde kostenlos', en: 'First class free' },
    },
  ],

  legal: {
    legalEntity: 'Atem Studio Brückner & Holm GbR',
    legalEntityForm: 'Gesellschaft bürgerlichen Rechts (GbR)',
    representedBy: 'Lara Brückner, Felix Holm (Gesellschafter:innen)',
    register: { court: 'n/a', number: 'GbR (nicht registerpflichtig)' },
    ustId: 'DE321987456',
    dataControllerEmail: 'datenschutz@atem-studio.de',
    dataControllerPhone: '+4930000000007',
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
    instagram: 'https://www.instagram.com/atem.studio.berlin',
    facebook: null,
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
