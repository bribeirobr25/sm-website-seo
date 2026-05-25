/**
 * Site-wide constants for Sander & Voss Rechtsanwälte (demo).
 *
 * **STATUS: PORTFOLIO DEMO** — fictional Berlin Mitte boutique commercial-law
 * firm. See `docs/clients/demo-lawyer-sander-voss/BRIEF.md`. Bilingual labels
 * live below as `de` / `en` objects accessed via locale lookups in components.
 *
 * Shape preserved from the agency Tier-2 scaffold so Header/Footer/Impressum/
 * Datenschutz read SITE.* fields without code changes. `hours.summer/winter`
 * blocks are repurposed as `Sprechzeiten` (consultation hours) and `Nach
 * Vereinbarung` (by appointment), since law firms don't have seasonal hours.
 */

export const SITE = {
  // Brand
  name: 'Sander & Voss Rechtsanwälte',
  shortName: 'Sander & Voss',
  founder: 'Dr. Katrin Sander & Lukas Voss',
  operatorToday: 'Dr. Katrin Sander, geschäftsführende Partnerin',
  foundedYear: 2014,

  // Domain + URLs
  url: 'https://demo-lawyer-sander-voss.vercel.app',
  defaultLocale: 'de' as const,
  locales: ['de', 'en'] as const,

  // Contact
  phone: '+493055552014',
  phoneDisplay: '+49 30 5555 2014',
  whatsapp: '493055552014',
  email: 'kanzlei@sander-voss.de',

  // Address (Berlin Mitte, Friedrichstraße)
  address: {
    street: 'Friedrichstraße 95',
    neighborhood: 'Mitte',
    city: 'Berlin',
    state: 'Berlin',
    postalCode: '10117',
    country: 'DE',
  },
  geo: {
    lat: 52.5215,
    lng: 13.388,
  },

  // Hours — repurposed: Sprechzeiten (in-person consultation) + Nach Vereinbarung (by appointment)
  hours: {
    summer: {
      label: { de: 'Sprechzeiten', en: 'Consultation hours' },
      days: [
        { day: 'Mon', open: '09:00', close: '18:30' },
        { day: 'Tue', open: '09:00', close: '18:30' },
        { day: 'Wed', open: '09:00', close: '18:30' },
        { day: 'Thu', open: '09:00', close: '18:30' },
        { day: 'Fri', open: '09:00', close: '17:00' },
        { day: 'Sat', open: null, close: null },
        { day: 'Sun', open: null, close: null },
      ],
    },
    winter: {
      label: { de: 'Termine nach Vereinbarung', en: 'By appointment' },
      days: [
        { day: 'Mon', open: '08:00', close: '20:00' },
        { day: 'Tue', open: '08:00', close: '20:00' },
        { day: 'Wed', open: '08:00', close: '20:00' },
        { day: 'Thu', open: '08:00', close: '20:00' },
        { day: 'Fri', open: '08:00', close: '20:00' },
        { day: 'Sat', open: '10:00', close: '14:00' },
        { day: 'Sun', open: null, close: null },
      ],
    },
  },

  // Translations
  i18n: {
    de: {
      tagline:
        'Wirtschaftsrecht in Berlin Mitte — Gesellschaftsrecht, Steuerrecht, Arbeitsrecht, Datenschutz.',
      shortTagline: 'Wirtschaftsrecht für Berliner Mittelstand und Start-ups.',
      demoBanner: 'BEISPIEL — Demo-Website von sm-website-seo. Keine echte Kanzlei.',
      hoursLabel: {
        summer: 'SPRECHZEITEN · Mo–Do  09:00–18:30  ·  Fr  09:00–17:00',
        winter: 'NACH VEREINBARUNG · Mo–Fr  08:00–20:00  ·  Sa  10:00–14:00',
      },
      nav: { home: 'Startseite', menu: 'Leistungen', about: 'Kanzlei', visit: 'Kontakt' },
      cta: {
        viewMenu: 'Leistungen ansehen.',
        callUs: 'Anrufen',
        openMaps: 'In Google Maps öffnen.',
        bookTable: 'Beratungstermin',
      },
      footer: {
        legal: 'Rechtliches',
        visit: 'Kontakt',
        impressum: 'Impressum',
        privacy: 'Datenschutzerklärung',
        cookieSettings: 'Cookie-Einstellungen verwalten',
        rights: 'Alle Rechte vorbehalten.',
      },
      consent: {
        title: 'Cookies — bitte um Ihre Zustimmung.',
        bodyBefore:
          'Wir verwenden essentielle Cookies, damit die Seite funktioniert. Mit Ihrer Zustimmung auch anonymisierte Analyse-Cookies, damit wir wissen, was gelesen wird. Mehr in unserer ',
        privacyLinkLabel: 'Datenschutzerklärung',
        privacyLinkHref: '/datenschutz',
        bodyAfter: '.',
        accept: 'Alle akzeptieren',
        reject: 'Alle ablehnen',
      },
      sections: {
        timeline: {
          eyebrow: 'Wie wir arbeiten',
          heading: 'Vom ersten Gespräch bis zum unterschriebenen Vertrag.',
          intro:
            'Vier Schritte — transparent, planbar, ohne überraschende Posten auf der Rechnung.',
        },
        gallery: {
          eyebrow: 'Kanzlei',
          heading: 'Räume in der Friedrichstraße.',
          intro: 'Acht Eindrücke aus den Kanzleiräumen, vom Empfang bis zur Bibliothek.',
        },
        testimonialEyebrow: 'Mandantenstimme',
        faq: {
          eyebrow: 'Häufig gefragt',
          heading: 'Was Mandanten beim Erstgespräch wissen wollen.',
        },
        map: {
          eyebrow: 'Anfahrt',
          heading: 'Friedrichstraße 95 — zwischen Stadtmitte und Französischer Straße.',
        },
      },
      languageLabel: 'Sprache',
    },
    en: {
      tagline: 'Commercial law in Berlin Mitte — corporate, tax, employment, and data protection.',
      shortTagline: 'Commercial law for Berlin SMBs and start-ups.',
      demoBanner: 'DEMO — A portfolio sample by sm-website-seo. Fictional firm.',
      hoursLabel: {
        summer: 'CONSULTATION · Mon–Thu  09:00–18:30  ·  Fri  09:00–17:00',
        winter: 'BY APPOINTMENT · Mon–Fri  08:00–20:00  ·  Sat  10:00–14:00',
      },
      nav: { home: 'Home', menu: 'Practice', about: 'Firm', visit: 'Contact' },
      cta: {
        viewMenu: 'View practice areas.',
        callUs: 'Call us',
        openMaps: 'Open in Google Maps.',
        bookTable: 'Book a consultation',
      },
      footer: {
        legal: 'Legal',
        visit: 'Contact',
        impressum: 'Impressum',
        privacy: 'Privacy',
        cookieSettings: 'Manage cookie settings',
        rights: 'All rights reserved.',
      },
      consent: {
        title: 'Cookies — please confirm your preference.',
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
          eyebrow: 'How we work',
          heading: 'From first call to signed agreement.',
          intro: 'Four steps — transparent, planned, no surprise items on the invoice.',
        },
        gallery: {
          eyebrow: 'Offices',
          heading: 'Inside Friedrichstraße 95.',
          intro: 'Eight views of the offices, from reception to the library.',
        },
        testimonialEyebrow: 'Client voice',
        faq: { eyebrow: 'Frequently asked', heading: 'What clients ask at the first meeting.' },
        map: {
          eyebrow: 'Directions',
          heading: 'Friedrichstraße 95 — between Stadtmitte and Französische Straße.',
        },
      },
      languageLabel: 'Language',
    },
  },

  // Featured practice areas (Home preview — three highlights of the four)
  featured: [
    {
      slug: 'gesellschaftsrecht',
      name: { de: 'Gesellschaftsrecht', en: 'Corporate law' },
      description: {
        de: 'Gründung, Beteiligungen, Gesellschaftervereinbarungen, M&A für Berliner Mittelstand und Start-ups.',
        en: 'Formation, equity, shareholder agreements, M&A for Berlin SMBs and start-ups.',
      },
      imageSrc: '/img/practice-corporate.jpg',
      imageAlt: {
        de: 'Konferenztisch mit Verträgen und Notar-Siegel',
        en: 'Conference table with contracts and a notary seal',
      },
    },
    {
      slug: 'steuerrecht',
      name: { de: 'Steuerrecht', en: 'Tax law' },
      description: {
        de: 'Steuerliche Gestaltung, Betriebsprüfungen, Einspruchsverfahren — von der GmbH bis zum Holding-Modell.',
        en: 'Tax planning, audits, appeals — from the operating GmbH to holding structures.',
      },
      imageSrc: '/img/practice-tax.jpg',
      imageAlt: {
        de: 'Steuerbescheid und juristisches Fachbuch auf dunklem Schreibtisch',
        en: 'Tax notice and law treatise on a dark desk',
      },
    },
    {
      slug: 'datenschutz',
      name: { de: 'Datenschutz · DSGVO', en: 'Data protection · GDPR' },
      description: {
        de: 'DSGVO-Compliance, Auftragsverarbeitung, Datenschutz-Folgenabschätzung, Konfliktfälle mit der Aufsichtsbehörde.',
        en: 'GDPR compliance, data-processing agreements, DPIAs, contested matters with the supervisory authority.',
      },
      imageSrc: '/img/practice-privacy.jpg',
      imageAlt: {
        de: 'Schloss-Symbol vor einer Reihe juristischer Bücher',
        en: 'Lock icon in front of a row of law treatises',
      },
    },
  ],

  // Full practice catalog (Practice page)
  menu: {
    creme: {
      label: { de: 'GESELLSCHAFTSRECHT', en: 'CORPORATE' },
      count: 6,
      intro: {
        de: 'Strukturen, die mit Ihrem Unternehmen mitwachsen. Vom Einzelunternehmer zur Holding.',
        en: 'Structures that grow with your business. From sole trader to holding.',
      },
      items: [
        {
          de: {
            name: 'Gründung GmbH / UG',
            desc: 'Gesellschaftervertrag, Anmeldung Handelsregister, Notartermin.',
          },
          en: {
            name: 'GmbH / UG formation',
            desc: 'Articles of association, registry filing, notary appointment.',
          },
        },
        {
          de: {
            name: 'Beteiligungsverträge',
            desc: 'Cap-Table, ESOP, Wandeldarlehen, SAFE — alles auf Deutsch.',
          },
          en: {
            name: 'Equity agreements',
            desc: 'Cap-table, ESOP, convertibles, SAFE — drafted under German law.',
          },
        },
        {
          de: {
            name: 'M&A — Verkauf und Erwerb',
            desc: 'Due-Diligence, SPA-Verhandlung, Closing-Begleitung.',
          },
          en: {
            name: 'M&A — sale and acquisition',
            desc: 'Due diligence, SPA negotiation, closing support.',
          },
        },
        {
          de: {
            name: 'Gesellschafterstreit',
            desc: 'Mediation, Anteilskauf, gerichtliche Auseinandersetzung wenn nötig.',
          },
          en: {
            name: 'Shareholder disputes',
            desc: 'Mediation, share buy-out, litigation when necessary.',
          },
        },
        {
          de: {
            name: 'Umwandlungen',
            desc: 'Verschmelzung, Spaltung, Formwechsel — UmwG-konform.',
          },
          en: {
            name: 'Transformations',
            desc: 'Mergers, spin-offs, conversions — compliant with the UmwG.',
          },
        },
        {
          de: {
            name: 'Liquidation',
            desc: 'Geordnete Abwicklung, Gläubigerverhandlung, Schlussbilanz.',
          },
          en: {
            name: 'Liquidation',
            desc: 'Orderly wind-down, creditor negotiation, final balance sheet.',
          },
        },
      ],
    },
    sorbetti: {
      label: { de: 'STEUERRECHT', en: 'TAX' },
      count: 5,
      intro: {
        de: 'Steuerliche Beratung, die rechnet — vor Gründung und vor der Betriebsprüfung.',
        en: 'Tax advice that adds up — before formation and before the audit.',
      },
      items: [
        {
          de: {
            name: 'Steuerliche Gestaltung',
            desc: 'Holding-Struktur, gewerbliche Prägung, Beteiligungsmodelle.',
          },
          en: {
            name: 'Tax structuring',
            desc: 'Holding setups, trade-tax framing, equity-participation models.',
          },
        },
        {
          de: {
            name: 'Betriebsprüfung',
            desc: 'Vorbereitung, Begleitung, Abstimmung mit dem Prüfer.',
          },
          en: { name: 'Tax audit', desc: 'Preparation, defense, coordination with the auditor.' },
        },
        {
          de: {
            name: 'Einspruch · Klage',
            desc: 'Einspruchsverfahren, Finanzgerichtsverfahren bis zum BFH.',
          },
          en: {
            name: 'Appeals · litigation',
            desc: 'Tax-office appeals, fiscal-court proceedings up to the BFH.',
          },
        },
        {
          de: {
            name: 'Umsatzsteuer',
            desc: 'EU-Reverse-Charge, OSS, innergemeinschaftliche Lieferung.',
          },
          en: { name: 'VAT', desc: 'EU reverse charge, OSS scheme, intra-community supply.' },
        },
        {
          de: {
            name: 'Erbschaft · Schenkung',
            desc: 'Steueroptimierte Nachfolgeregelung für Familienunternehmen.',
          },
          en: {
            name: 'Estate · gift tax',
            desc: 'Tax-optimized succession planning for family businesses.',
          },
        },
      ],
    },
    spezialitaeten: {
      label: { de: 'ARBEITSRECHT · DATENSCHUTZ', en: 'EMPLOYMENT · PRIVACY' },
      count: 6,
      intro: {
        de: 'Arbeitsrecht für Arbeitgeber, Datenschutz für alle. Zwei Bereiche, ein Team.',
        en: 'Employment law for employers, privacy for everyone. Two areas, one team.',
      },
      items: [
        {
          de: {
            name: 'Arbeitsverträge · AGB',
            desc: 'Aufsetzen, Verhandeln, Anpassen an neue Rechtslage.',
          },
          en: {
            name: 'Employment contracts · standard terms',
            desc: 'Drafting, negotiating, updating for new case law.',
          },
        },
        {
          de: {
            name: 'Kündigung · Aufhebungsvertrag',
            desc: 'Kündigungsschutz, Abfindung, Sozialplan, Massenentlassung.',
          },
          en: {
            name: 'Termination · settlement',
            desc: 'Unfair dismissal, severance, social plan, mass redundancy.',
          },
        },
        {
          de: {
            name: 'Betriebsverfassung',
            desc: 'Verhandlungen mit Betriebsrat, Betriebsvereinbarungen.',
          },
          en: {
            name: 'Works-council relations',
            desc: 'Negotiations with works councils, framework agreements.',
          },
        },
        {
          de: {
            name: 'DSGVO-Compliance',
            desc: 'Verzeichnis der Verarbeitungstätigkeiten, AV-Verträge, TOMs.',
          },
          en: {
            name: 'GDPR compliance',
            desc: 'Records of processing, processor agreements, technical/org measures.',
          },
        },
        {
          de: {
            name: 'Datenschutz-Folgenabschätzung',
            desc: 'Für Hochrisiko-Verarbeitungen, KI-Systeme, Tracking-Stacks.',
          },
          en: {
            name: 'Data-protection impact assessment',
            desc: 'For high-risk processing, AI systems, tracking stacks.',
          },
        },
        {
          de: {
            name: 'Aufsichtsbehörden-Verfahren',
            desc: 'Bußgeldbescheide, Anhörungen, Vergleichsverhandlungen.',
          },
          en: { name: 'Regulator proceedings', desc: 'Fines, hearings, settlement negotiations.' },
        },
      ],
    },
  },

  // Numerics strip (StatCallouts) — gravitas-builder per professional-services.md §12 rule 4
  stats: [
    {
      number: 'seit 2014',
      label: { de: 'an der Friedrichstraße', en: 'on Friedrichstraße' },
      ariaLabel: { de: 'An der Friedrichstraße seit 2014', en: 'On Friedrichstraße since 2014' },
    },
    {
      number: '4',
      label: { de: 'Rechtsgebiete', en: 'practice areas' },
      ariaLabel: { de: 'Vier Rechtsgebiete', en: 'Four practice areas' },
    },
    {
      number: '120+',
      label: { de: 'laufende Mandate', en: 'active matters' },
      ariaLabel: { de: 'Über 120 laufende Mandate', en: 'Over 120 active matters' },
    },
  ],

  // Legal — DE jurisdiction (PartG mbB is the common form for German law firms)
  legal: {
    legalEntity: 'Sander & Voss Rechtsanwälte Partnerschaft mbB',
    legalEntityForm: 'Partnerschaftsgesellschaft mbB',
    representedBy: 'Dr. Katrin Sander, Lukas Voss (Partner)',
    register: { court: 'Amtsgericht Charlottenburg', number: 'PR 1234 B' },
    ustId: 'DE298765432',
    dataControllerEmail: 'datenschutz@sander-voss.de',
    dataControllerPhone: '+49 30 5555 2014',
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
    instagram: null,
    facebook: null,
    linkedin: 'https://www.linkedin.com/company/sander-voss-rechtsanwaelte',
  },
} as const;

export type Site = typeof SITE;
export type Locale = (typeof SITE.locales)[number];

// Get the right text for the current locale, defaulting to DE.
export function t(locale: Locale, key: keyof (typeof SITE.i18n)['de']): unknown {
  return SITE.i18n[locale][key];
}
