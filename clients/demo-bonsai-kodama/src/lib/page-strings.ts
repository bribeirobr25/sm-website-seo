/**
 * Per-locale chrome prose for the bonsai demo's pages.
 *
 * Why this file exists: the per-page hero copy + section copy is too prose-rich
 * to live inline in each `[locale]/*.astro` template — keeping it here lets a
 * single Astro template render all 4 locales via dynamic params.
 *
 * Translation register decisions (per CLAUDE.md):
 *  - DE: "du" (informal)  · EN: "you" (American)  · ES: "tú" (peninsular)  · pt-BR: "você"
 *  - Climate: season names (no months) — Berlin Zone 7b reference universal.
 *
 * For tree-database content, see `src/lib/trees.ts` + `src/lib/translations/*.ts`.
 * For privacy + imprint legal-page bodies, see `src/lib/translations/*.ts` exports
 * (e.g. `EN_PRIVACY`, `ES_IMPRINT`).
 */

import type { Locale } from './site';

export interface PageStrings {
  home: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroTitleLine3: string;
    heroBody: string;
    searchCta: string;
    stat_species: string;
    stat_indoor: string;
    stat_outdoor: string;
    pathsEyebrow: string;
    pathsHeading: string;
    pathBeginnersTitle: string;
    pathBeginnersBody: string;
    pathBeginnersCta: string;
    pathIndoorTitle: string;
    pathIndoorBody: string;
    pathIndoorCta: (n: number) => string;
    pathOutdoorTitle: string;
    pathOutdoorBody: string;
    pathOutdoorCta: (n: number) => string;
    beginnersEyebrow: string;
    beginnersHeading: string;
    beginnersBody: string;
    beginnersAllLink: string;
    philosophyEyebrow: string;
    philosophyHeading: string;
    philosophyBody: string[];
    philosophyQuote: string;
    featuredEyebrow: string;
    featuredHeading: string;
    featuredAllLink: string;
  };
  beginners: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
  };
  indoor: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    importantPrefix: string;
    importantBody: string;
  };
  outdoor: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    importantPrefix: string;
    importantBody: string;
  };
  search: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string;
    placeholder: string;
    inputLabel: string;
    filterIndoor: (n: number) => string;
    filterOutdoor: (n: number) => string;
    filterBeginner: string;
    filterClear: string;
    totalLabel: string;
    noResults: string;
    hitsLabel: (n: number, q: string) => string;
    zeroHits: string;
  };
  workshop: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody: string[];
    mapsCta: string;
    hoursLabel: string;
    closedLabel: string;
    hoursNote: string;
  };
  treesIndex: {
    title: string;
    description: string;
    heroEyebrow: string;
    heroTitle: string;
    heroBody_before: string;
    heroBody_link: string;
    heroBody_after: string;
    backToOverview: string;
  };
  treeDetail: {
    backLink: string;
    placementLabel: string;
    beginnerBadge: string;
    familyLabel: string;
    originLabel: string;
    propagationLabel: string;
    careHeading: string;
    careSubheading: string;
    careSection: {
      sun: string;
      soil: string;
      watering: string;
      fertilizing: string;
      temperature: string;
      pruning: string;
    };
    stylesEyebrow: string;
    stylesHeading: string;
    techniquesEyebrow: string;
    techniquesHeading: string;
    techniquesBody: string;
    techniquesPeriodLabel: string;
    techniquesMinAgeLabel: string;
    propagationEyebrow: string;
    propagationHeading: string;
    propagationMethodLabel: string;
    propagationPeriodLabel: string;
    propagationPostCareLabel: string;
    relatedHeading: string;
    photoStockNote: string;
  };
  day: {
    Mon: string;
    Tue: string;
    Wed: string;
    Thu: string;
    Fri: string;
    Sat: string;
    Sun: string;
  };
}

export const PAGE_STRINGS: Record<Locale, PageStrings> = {
  de: {
    home: {
      title: 'Kodama Bonsai — eine Berliner Werkstatt für Bonsai-Wissen.',
      description:
        '24 Bonsai-Arten mit ausführlichen Pflegehinweisen, Stilen, Techniken und Vermehrung. Eine Berliner Werkstatt für Bonsai-Wissen.',
      heroEyebrow: 'BERLIN · PRENZLAUER BERG · SEIT 2019',
      heroTitleLine1: 'Vierundzwanzig Bäume.',
      heroTitleLine2: 'Ein Jahreskalender.',
      heroTitleLine3: 'Eine Werkstatt.',
      heroBody:
        'Kodama ist eine kleine Werkstatt in Berlin Prenzlauer Berg — keine Verkaufsstelle, sondern eine Wissenssammlung. 24 sorgfältig ausgewählte Bonsai-Arten, jede mit ausführlichen Pflegehinweisen, Stilen, Techniken und Zeitpunkten. Für Einsteiger und für die, die schon ein paar Bäume verloren haben.',
      searchCta: 'Baum suchen →',
      stat_species: 'Arten',
      stat_indoor: 'Indoor',
      stat_outdoor: 'Outdoor',
      pathsEyebrow: 'Drei Einstiege',
      pathsHeading: 'Wo möchtest du anfangen?',
      pathBeginnersTitle: 'Einsteiger',
      pathBeginnersBody: '8 Bäume, die Pflegefehler verzeihen. Ideal für den ersten Bonsai.',
      pathBeginnersCta: 'Auswahl ansehen →',
      pathIndoorTitle: 'Indoor',
      pathIndoorBody:
        'Tropische und subtropische Arten für die Wohnung. Heller Standort, ganzjährig drinnen.',
      pathIndoorCta: (n) => `${n} Arten →`,
      pathOutdoorTitle: 'Outdoor',
      pathOutdoorBody:
        'Heimische und winterharte Arten — Koniferen, Laub, Blüten. Ganzjährig im Freien.',
      pathOutdoorCta: (n) => `${n} Arten →`,
      beginnersEyebrow: 'Für den Anfang',
      beginnersHeading: 'Vier Bäume, die dir Zeit zum Lernen geben.',
      beginnersBody:
        'Robust, schnittverträglich, fehlerverzeihend. Wenn dein erster Bonsai überleben soll, fang mit einem dieser vier an.',
      beginnersAllLink: 'Alle 8 Einsteiger-Bäume ansehen →',
      philosophyEyebrow: 'Über Kodama',
      philosophyHeading: 'Eine Werkstatt, kein Geschäft.',
      philosophyBody: [
        'Bonsai ist langsam. Das macht ihn nicht schwierig, sondern unverwechselbar — eine Praxis, in der zwei Jahre eine kurze Zeit sind. Kodama existiert, weil wir glauben, dass das deutschsprachige Internet zu wenig saubere, präzise und unaufgeregte Bonsai-Information bietet.',
        'Wir verkaufen keine Bäume. Wir dokumentieren 24 Arten so gut wir können — mit Pflege-Daten, Stilen, Techniken und einem Jahreskalender für jede Tätigkeit. Plus alle 14 Tage einen Brief aus der Werkstatt.',
      ],
      philosophyQuote:
        '"Der beste Zeitpunkt, einen Baum zu pflanzen, war vor zwanzig Jahren. Der zweitbeste Zeitpunkt ist jetzt." — chinesisches Sprichwort',
      featuredEyebrow: 'Ein erster Blick',
      featuredHeading: 'Sechs Bäume aus der Sammlung.',
      featuredAllLink: 'Alle 24 Bäume →',
    },
    beginners: {
      title: 'Für Einsteiger',
      description:
        '8 Bonsai-Arten, die Pflegefehler verzeihen. Der beste Start in die Bonsai-Praxis.',
      heroEyebrow: 'Für den ersten Baum',
      heroTitle: 'Acht Bäume, die Fehler verzeihen.',
      heroBody:
        'Diese acht Arten haben drei Dinge gemein: sie sind robust, sie sind schnittverträglich, und sie überleben den typischen Anfängerfehler — zu viel oder zu wenig Wasser, falsche Erde, falscher Standort. Wenn dein erster Bonsai überleben soll, fang mit einem dieser acht an.',
    },
    indoor: {
      title: 'Indoor-Bonsai',
      description:
        'Tropische und subtropische Bonsai-Arten für die Wohnung. 10 Arten mit Pflegehinweisen für drinnen.',
      heroEyebrow: 'Drinnen — ganzjährig',
      heroTitle: 'Bäume für die Wohnung.',
      heroBody:
        'Indoor-Bonsai sind in der Regel tropische oder subtropische Arten, die in Berlin draußen erfrieren würden. Sie brauchen einen hellen Standort (am besten Süd- oder Ostfenster), gleichmäßige Temperatur (15–25 °C ganzjährig) und im Winter wegen Heizungsluft erhöhte Luftfeuchtigkeit.',
      importantPrefix: 'Wichtig:',
      importantBody:
        '"Indoor" heißt nicht "irgendwo im Wohnzimmer". Ein dunkler Korridor tötet jeden Bonsai in 6–12 Monaten. Wenn dein Fensterplatz im Sommer unbenutzbar wird, ist es ein guter Standort für tropische Bäume.',
    },
    outdoor: {
      title: 'Outdoor-Bonsai',
      description:
        'Heimische und winterharte Bonsai-Arten für Balkon und Garten. 14 Arten — Koniferen, Laubbäume und blühende Sorten.',
      heroEyebrow: 'Draußen — ganzjährig',
      heroTitle: 'Bäume für Balkon und Garten.',
      heroBody:
        '14 Arten, die in Berlin (Klimazone 7b) ganzjährig draußen gehalten werden — Koniferen, Laubbäume und blühende Sorten. Drei Gruppen: japanische Klassiker (Kiefern, Ahorne, Lärche, Hinoki, Ume), europäische heimische (Buche, Waldkiefer, Zierquitte) und mediterrane Spezies (Olive — braucht frostfreies Winterquartier).',
      importantPrefix: 'Outdoor heißt outdoor.',
      importantBody:
        'Diese Bäume brauchen Wechsel der Jahreszeiten. Wer einen Wacholder oder eine Buche ins Wohnzimmer stellt, tötet ihn in einer Saison. Im Winter kommen sie an einen geschützten Platz im Freien, mit Wurzelballenschutz, aber NICHT ins Warme.',
    },
    search: {
      title: 'Suche',
      description:
        'Bonsai-Baum suchen — nach Trivialname, wissenschaftlichem Namen, Familie oder Herkunft.',
      heroEyebrow: 'Suche',
      heroTitle: 'Welchen Baum suchst du?',
      heroBody:
        'Tippe einen deutschen oder englischen Namen, einen wissenschaftlichen Namen (Ficus retusa, Pinus thunbergii), eine botanische Familie (Pinaceae, Rosaceae) oder eine Herkunftsregion (Japan, Mediterranean).',
      placeholder: 'Ficus, Pinus, Acer, Rosaceae, …',
      inputLabel: 'Bonsai-Baum suchen',
      filterIndoor: (n) => `Nur Indoor (${n})`,
      filterOutdoor: (n) => `Nur Outdoor (${n})`,
      filterBeginner: 'Nur Einsteiger-Bäume',
      filterClear: 'Filter zurücksetzen',
      totalLabel: '24 Bäume insgesamt.',
      noResults:
        'Keine Treffer — versuche es mit einem anderen Suchbegriff oder setze die Filter zurück.',
      hitsLabel: (n, q) => `${n} Treffer${q ? ` für "${q}"` : ''}`,
      zeroHits: '0 Treffer',
    },
    workshop: {
      title: 'Werkstatt',
      description:
        'Kodama Bonsai — eine kleine Werkstatt in Berlin Prenzlauer Berg. Kollwitzstraße 76, Kollwitzplatz.',
      heroEyebrow: 'Über die Werkstatt',
      heroTitle: 'Vier Wände, vier Regale, 80 Bäume.',
      heroBody: [
        'Kodama Bonsai ist eine kleine Werkstatt im Erdgeschoss eines Altbaus an der Kollwitzstraße in Prenzlauer Berg. Hannes Wakabayashi (Bonsai-Meister-Ausbildung Saitama 2014–2018) und Marlene Reuter (Forstwissenschaft TU Berlin) haben sie 2019 eröffnet — als Werkstatt, nicht als Verkaufsstelle.',
        'Was wir tun: 80 Bäume pflegen, davon 24 in der öffentlichen Sammlung dokumentiert. Workshops für Anfänger (jeden zweiten Samstag), individuelle Werkstatt-Stunden für Fortgeschrittene (nach Vereinbarung). Plus alle 14 Tage einen Brief — Saison-Kalender, Detail-Fotos, was wir gerade machen.',
        'Was wir nicht tun: Bäume verkaufen. Wer einen Baum sucht, schickt eine Mail — wir vermitteln zu unserer kleinen Liste an Züchtern in Sachsen-Anhalt, Bayern und Norditalien, denen wir vertrauen.',
      ],
      mapsCta: 'In Google Maps öffnen',
      hoursLabel: 'Werkstatt-Öffnungszeiten',
      closedLabel: 'geschlossen',
      hoursNote: 'Werkstatt-Stunden nur nach Vereinbarung per E-Mail.',
    },
    treesIndex: {
      title: '24 Bonsai-Arten',
      description:
        'Die vollständige Sammlung: 10 Indoor- und 14 Outdoor-Arten mit Pflegehinweisen, Stilen, Techniken und Vermehrung.',
      heroEyebrow: 'Die Sammlung',
      heroTitle: 'Vierundzwanzig Arten.',
      heroBody_before:
        'Alphabetisch geordnet. Filter nach Standort und Einsteiger-Eignung über die Pfeil-Tasten am Kopf jeder Karte. Volltext-Suche unter ',
      heroBody_link: 'Suche',
      heroBody_after: '.',
      backToOverview: '← Zurück zur Übersicht',
    },
    treeDetail: {
      backLink: '← Zurück zur Übersicht',
      placementLabel: 'Standort',
      beginnerBadge: 'Einsteiger',
      familyLabel: 'Familie',
      originLabel: 'Herkunft',
      propagationLabel: 'Vermehrung',
      careHeading: 'Wie er gepflegt wird.',
      careSubheading: 'Pflege',
      careSection: {
        sun: 'Licht',
        soil: 'Substrat',
        watering: 'Gießen',
        fertilizing: 'Düngen',
        temperature: 'Temperatur',
        pruning: 'Schnitt',
      },
      stylesEyebrow: 'Gestaltung',
      stylesHeading: 'Häufige Stile.',
      techniquesEyebrow: 'Werkstatt-Kalender',
      techniquesHeading: 'Wichtige Techniken.',
      techniquesBody:
        'Zeitpunkt und Mindestalter sind verbindlich. Wer zur falschen Jahreszeit drahtet oder ohne Mindestalter umtopft, riskiert den Baum.',
      techniquesPeriodLabel: 'Zeitpunkt:',
      techniquesMinAgeLabel: 'Mindestalter:',
      propagationEyebrow: 'Vermehrung',
      propagationHeading: 'Wie ein neuer Baum entsteht.',
      propagationMethodLabel: 'Methode',
      propagationPeriodLabel: 'Zeitpunkt',
      propagationPostCareLabel: 'Nachpflege',
      relatedHeading: 'Weiter erkunden.',
      photoStockNote:
        '⚠ Stockfotografie (Unsplash CC0). Echtes art-spezifisches Fotomaterial folgt mit der Werkstatt-Dokumentation.',
    },
    day: { Mon: 'Mo', Tue: 'Di', Wed: 'Mi', Thu: 'Do', Fri: 'Fr', Sat: 'Sa', Sun: 'So' },
  },
  en: {
    home: {
      title: 'Kodama Bonsai — a Berlin workshop for bonsai knowledge.',
      description:
        '24 bonsai species with detailed care notes, styles, techniques, and propagation. A Berlin workshop for bonsai knowledge.',
      heroEyebrow: 'BERLIN · PRENZLAUER BERG · SINCE 2019',
      heroTitleLine1: 'Twenty-four trees.',
      heroTitleLine2: 'One yearly calendar.',
      heroTitleLine3: 'One workshop.',
      heroBody:
        'Kodama is a small workshop in Berlin Prenzlauer Berg — not a sales floor, but a knowledge garden. 24 carefully chosen bonsai species, each with detailed care notes, styles, techniques, and timing. For beginners and for those who have already lost a few trees.',
      searchCta: 'Search a tree →',
      stat_species: 'Species',
      stat_indoor: 'Indoor',
      stat_outdoor: 'Outdoor',
      pathsEyebrow: 'Three entry points',
      pathsHeading: 'Where would you like to begin?',
      pathBeginnersTitle: 'Beginner',
      pathBeginnersBody: '8 trees that forgive care mistakes. The ideal first bonsai.',
      pathBeginnersCta: 'See the selection →',
      pathIndoorTitle: 'Indoor',
      pathIndoorBody:
        'Tropical and subtropical species for an apartment. Bright spot, indoors year-round.',
      pathIndoorCta: (n) => `${n} species →`,
      pathOutdoorTitle: 'Outdoor',
      pathOutdoorBody:
        'Native and cold-hardy species — conifers, broadleaf, flowering. Outdoors year-round.',
      pathOutdoorCta: (n) => `${n} species →`,
      beginnersEyebrow: 'To start with',
      beginnersHeading: 'Four trees that give you time to learn.',
      beginnersBody:
        'Tough, pruning-tolerant, forgiving. If your first bonsai is going to survive, start with one of these four.',
      beginnersAllLink: 'See all 8 beginner trees →',
      philosophyEyebrow: 'About Kodama',
      philosophyHeading: 'A workshop, not a shop.',
      philosophyBody: [
        "Bonsai is slow. That doesn't make it difficult — it makes it distinctive. A practice in which two years counts as a short time. Kodama exists because we believe the European bonsai web offers too little clean, precise, unfussy information in English.",
        "We don't sell trees. We document 24 species as best we can — with care data, styles, techniques, and a yearly calendar for every operation. Plus a fortnightly letter from the workshop.",
      ],
      philosophyQuote:
        '"The best time to plant a tree was twenty years ago. The second-best time is now." — Chinese proverb',
      featuredEyebrow: 'A first look',
      featuredHeading: 'Six trees from the collection.',
      featuredAllLink: 'All 24 trees →',
    },
    beginners: {
      title: 'For beginners',
      description:
        '8 bonsai species that forgive care mistakes. The best entry into bonsai practice.',
      heroEyebrow: 'For your first tree',
      heroTitle: 'Eight trees that forgive mistakes.',
      heroBody:
        "These eight species share three things: they're tough, they tolerate pruning, and they survive the typical beginner mistakes — too much or too little water, the wrong substrate, the wrong spot. If your first bonsai is going to survive, start with one of these eight.",
    },
    indoor: {
      title: 'Indoor bonsai',
      description:
        'Tropical and subtropical bonsai species for indoor keeping. 10 species with care notes for life indoors.',
      heroEyebrow: 'Indoors — year-round',
      heroTitle: 'Trees for an apartment.',
      heroBody:
        'Indoor bonsai are usually tropical or subtropical species that would freeze if left outside in Berlin. They need a bright spot (south or east window is ideal), a steady temperature (15–25 °C year-round), and added humidity in winter to counter dry heated air.',
      importantPrefix: 'Important:',
      importantBody:
        '"Indoor" doesn\'t mean "anywhere in the living room." A dark hallway kills any bonsai within 6–12 months. If your windowsill becomes too hot to use in summer, that\'s a good spot for a tropical tree.',
    },
    outdoor: {
      title: 'Outdoor bonsai',
      description:
        'Native and cold-hardy bonsai species for balcony and garden. 14 species — conifers, deciduous trees, and flowering varieties.',
      heroEyebrow: 'Outdoors — year-round',
      heroTitle: 'Trees for balcony and garden.',
      heroBody:
        '14 species kept outdoors year-round in Berlin (Hardiness Zone 7b) — conifers, broadleaf, and flowering trees. Three groups: Japanese classics (pines, maples, larch, hinoki, ume), European natives (beech, Scots pine, flowering quince), and Mediterranean species (olive — needs a frost-free winter shelter).',
      importantPrefix: 'Outdoor means outdoor.',
      importantBody:
        'These trees need the cycle of seasons. Putting a juniper or a beech in your living room kills it within one season. In winter they move to a sheltered outdoor spot with root-ball protection — but NOT into warmth.',
    },
    search: {
      title: 'Search',
      description:
        'Search the bonsai collection — by common name, scientific name, family, or origin.',
      heroEyebrow: 'Search',
      heroTitle: 'Which tree are you looking for?',
      heroBody:
        'Type a common name in English or German, a scientific name (Ficus retusa, Pinus thunbergii), a botanical family (Pinaceae, Rosaceae), or a region of origin (Japan, Mediterranean).',
      placeholder: 'Ficus, Pinus, Acer, Rosaceae, …',
      inputLabel: 'Search a bonsai tree',
      filterIndoor: (n) => `Indoor only (${n})`,
      filterOutdoor: (n) => `Outdoor only (${n})`,
      filterBeginner: 'Beginner-friendly only',
      filterClear: 'Reset filters',
      totalLabel: '24 trees in all.',
      noResults: 'No matches — try a different search term or clear the filters.',
      hitsLabel: (n, q) => `${n} ${n === 1 ? 'result' : 'results'}${q ? ` for "${q}"` : ''}`,
      zeroHits: '0 results',
    },
    workshop: {
      title: 'Workshop',
      description:
        'Kodama Bonsai — a small workshop in Berlin Prenzlauer Berg. Kollwitzstraße 76, Kollwitzplatz.',
      heroEyebrow: 'About the workshop',
      heroTitle: 'Four walls, four shelves, 80 trees.',
      heroBody: [
        'Kodama Bonsai is a small workshop on the ground floor of a turn-of-the-century building on Kollwitzstraße in Prenzlauer Berg. Hannes Wakabayashi (bonsai master training in Saitama, 2014–2018) and Marlene Reuter (forestry, TU Berlin) opened it in 2019 — as a workshop, not a shop.',
        "What we do: care for 80 trees, 24 of them documented in the public collection. Workshops for beginners (every other Saturday) and individual workshop sessions for advanced practitioners (by appointment). Plus a fortnightly letter — seasonal calendar, detail photos, what we're working on.",
        "What we don't do: sell trees. If you're looking for a tree, send a note — we connect you with our short list of trusted growers in Saxony-Anhalt, Bavaria, and northern Italy.",
      ],
      mapsCta: 'Open in Google Maps',
      hoursLabel: 'Workshop hours',
      closedLabel: 'closed',
      hoursNote: 'Workshop sessions by email appointment only.',
    },
    treesIndex: {
      title: '24 bonsai species',
      description:
        'The full collection: 10 indoor and 14 outdoor species with care notes, styles, techniques, and propagation.',
      heroEyebrow: 'The collection',
      heroTitle: 'Twenty-four species.',
      heroBody_before:
        'Alphabetically ordered. Filter by placement and beginner suitability via the chips at the top of each card. Full-text search via ',
      heroBody_link: 'Search',
      heroBody_after: '.',
      backToOverview: '← Back to overview',
    },
    treeDetail: {
      backLink: '← Back to overview',
      placementLabel: 'Placement',
      beginnerBadge: 'Beginner',
      familyLabel: 'Family',
      originLabel: 'Origin',
      propagationLabel: 'Propagation',
      careHeading: "How it's cared for.",
      careSubheading: 'Care',
      careSection: {
        sun: 'Light',
        soil: 'Substrate',
        watering: 'Watering',
        fertilizing: 'Fertilizing',
        temperature: 'Temperature',
        pruning: 'Pruning',
      },
      stylesEyebrow: 'Styling',
      stylesHeading: 'Common styles.',
      techniquesEyebrow: 'Workshop calendar',
      techniquesHeading: 'Key techniques.',
      techniquesBody:
        'Timing and minimum age are binding. Wiring in the wrong season or repotting before the minimum age risks the tree.',
      techniquesPeriodLabel: 'Timing:',
      techniquesMinAgeLabel: 'Minimum age:',
      propagationEyebrow: 'Propagation',
      propagationHeading: 'How a new tree begins.',
      propagationMethodLabel: 'Method',
      propagationPeriodLabel: 'Timing',
      propagationPostCareLabel: 'Post-care',
      relatedHeading: 'Keep exploring.',
      photoStockNote:
        '⚠ Stock photography (Unsplash CC0). Species-specific photos to follow with workshop documentation.',
    },
    day: { Mon: 'Mon', Tue: 'Tue', Wed: 'Wed', Thu: 'Thu', Fri: 'Fri', Sat: 'Sat', Sun: 'Sun' },
  },
  es: {
    home: {
      title: 'Kodama Bonsai — un taller berlinés para el saber del bonsái.',
      description:
        '24 especies de bonsái con notas de cuidado, estilos, técnicas y propagación. Un taller berlinés para el saber del bonsái.',
      heroEyebrow: 'BERLÍN · PRENZLAUER BERG · DESDE 2019',
      heroTitleLine1: 'Veinticuatro árboles.',
      heroTitleLine2: 'Un calendario anual.',
      heroTitleLine3: 'Un taller.',
      heroBody:
        'Kodama es un pequeño taller en Berlín, Prenzlauer Berg — no un punto de venta, sino un jardín del saber. 24 especies de bonsái cuidadosamente escogidas, cada una con notas detalladas de cuidado, estilos, técnicas y momentos. Para quienes empiezan y para quienes ya han perdido algún que otro árbol.',
      searchCta: 'Buscar un árbol →',
      stat_species: 'Especies',
      stat_indoor: 'Interior',
      stat_outdoor: 'Exterior',
      pathsEyebrow: 'Tres puntos de entrada',
      pathsHeading: '¿Por dónde te apetece empezar?',
      pathBeginnersTitle: 'Principiante',
      pathBeginnersBody: '8 árboles que perdonan los descuidos. Ideales como primer bonsái.',
      pathBeginnersCta: 'Ver la selección →',
      pathIndoorTitle: 'Interior',
      pathIndoorBody:
        'Especies tropicales y subtropicales para piso. Lugar luminoso, dentro todo el año.',
      pathIndoorCta: (n) => `${n} especies →`,
      pathOutdoorTitle: 'Exterior',
      pathOutdoorBody:
        'Especies autóctonas y resistentes al frío — coníferas, frondosas, floración. Fuera todo el año.',
      pathOutdoorCta: (n) => `${n} especies →`,
      beginnersEyebrow: 'Para empezar',
      beginnersHeading: 'Cuatro árboles que te dan tiempo para aprender.',
      beginnersBody:
        'Robustos, soportan bien la poda y perdonan los descuidos. Si tu primer bonsái va a sobrevivir, empieza con uno de estos cuatro.',
      beginnersAllLink: 'Ver los 8 árboles para principiantes →',
      philosophyEyebrow: 'Sobre Kodama',
      philosophyHeading: 'Un taller, no una tienda.',
      philosophyBody: [
        'El bonsái es lento. Eso no lo hace difícil: lo hace inconfundible — una práctica en la que dos años son un periodo breve. Kodama existe porque creemos que la web bonsái en español ofrece todavía poca información limpia, precisa y sin estridencias.',
        'No vendemos árboles. Documentamos 24 especies lo mejor que sabemos: con datos de cuidado, estilos, técnicas y un calendario anual para cada labor. Y, cada quince días, una carta desde el taller.',
      ],
      philosophyQuote:
        '"El mejor momento para plantar un árbol fue hace veinte años. El segundo mejor momento es ahora." — proverbio chino',
      featuredEyebrow: 'Un primer vistazo',
      featuredHeading: 'Seis árboles de la colección.',
      featuredAllLink: 'Los 24 árboles →',
    },
    beginners: {
      title: 'Para principiantes',
      description:
        '8 especies de bonsái que perdonan los descuidos. El mejor comienzo en la práctica del bonsái.',
      heroEyebrow: 'Para tu primer árbol',
      heroTitle: 'Ocho árboles que perdonan los errores.',
      heroBody:
        'Estas ocho especies comparten tres cosas: son robustas, toleran bien la poda y sobreviven a los descuidos típicos del principio — exceso o falta de riego, sustrato equivocado, ubicación equivocada. Si tu primer bonsái va a sobrevivir, empieza con uno de estos ocho.',
    },
    indoor: {
      title: 'Bonsái de interior',
      description:
        'Especies tropicales y subtropicales para casa. 10 especies con notas de cuidado para interior.',
      heroEyebrow: 'En interior — todo el año',
      heroTitle: 'Árboles para casa.',
      heroBody:
        'Los bonsáis de interior son, por lo general, especies tropicales o subtropicales que en Berlín no resistirían el invierno fuera. Necesitan un lugar luminoso (mejor ventana orientada al sur o al este), temperatura constante (15–25 °C todo el año) y, en invierno, mayor humedad ambiental para compensar la calefacción.',
      importantPrefix: 'Importante:',
      importantBody:
        '"Interior" no significa "en cualquier rincón del salón". Un pasillo oscuro mata cualquier bonsái en 6–12 meses. Si tu repisa de ventana se hace inhabitable en verano, ese es un buen lugar para un árbol tropical.',
    },
    outdoor: {
      title: 'Bonsái de exterior',
      description:
        'Especies autóctonas y resistentes al frío para balcón y jardín. 14 especies — coníferas, frondosas y variedades en flor.',
      heroEyebrow: 'En exterior — todo el año',
      heroTitle: 'Árboles para balcón y jardín.',
      heroBody:
        '14 especies que se mantienen al exterior todo el año en Berlín (zona de rusticidad 7b) — coníferas, frondosas y variedades en flor. Tres grupos: clásicos japoneses (pinos, arces, alerce, hinoki, ume), autóctonas europeas (haya, pino silvestre, membrillero japonés) y especies mediterráneas (olivo — necesita un invernadero sin heladas).',
      importantPrefix: 'Exterior significa exterior.',
      importantBody:
        'Estos árboles necesitan el cambio de estaciones. Meter un enebro o un haya en el salón los mata en una temporada. En invierno se llevan a un lugar al aire libre resguardado, con protección del cepellón, pero NO al interior caliente.',
    },
    search: {
      title: 'Buscar',
      description: 'Buscar un bonsái — por nombre común, nombre científico, familia o procedencia.',
      heroEyebrow: 'Búsqueda',
      heroTitle: '¿Qué árbol estás buscando?',
      heroBody:
        'Escribe un nombre común en español, alemán o inglés, un nombre científico (Ficus retusa, Pinus thunbergii), una familia botánica (Pinaceae, Rosaceae) o una región de origen (Japón, Mediterráneo).',
      placeholder: 'Ficus, Pinus, Acer, Rosaceae, …',
      inputLabel: 'Buscar un bonsái',
      filterIndoor: (n) => `Solo interior (${n})`,
      filterOutdoor: (n) => `Solo exterior (${n})`,
      filterBeginner: 'Solo árboles para principiantes',
      filterClear: 'Quitar filtros',
      totalLabel: '24 árboles en total.',
      noResults: 'Sin resultados — prueba con otro término o quita los filtros.',
      hitsLabel: (n, q) => `${n} ${n === 1 ? 'resultado' : 'resultados'}${q ? ` para "${q}"` : ''}`,
      zeroHits: '0 resultados',
    },
    workshop: {
      title: 'Taller',
      description:
        'Kodama Bonsai — un pequeño taller en Berlín, Prenzlauer Berg. Kollwitzstraße 76, Kollwitzplatz.',
      heroEyebrow: 'Sobre el taller',
      heroTitle: 'Cuatro paredes, cuatro estanterías, 80 árboles.',
      heroBody: [
        'Kodama Bonsai es un pequeño taller en la planta baja de un edificio de finales del siglo XIX, en la Kollwitzstraße, Prenzlauer Berg. Hannes Wakabayashi (formación como maestro bonsái en Saitama, 2014–2018) y Marlene Reuter (Ciencias Forestales, TU Berlín) lo abrieron en 2019 — como taller, no como tienda.',
        'Qué hacemos: cuidar 80 árboles, 24 de ellos documentados en la colección pública. Talleres para principiantes (cada dos sábados) y sesiones individuales de taller para gente avanzada (con cita previa). Más una carta cada quince días — calendario estacional, fotos de detalle, en qué estamos trabajando.',
        'Qué no hacemos: vender árboles. Si buscas un árbol, escríbenos un correo — te ponemos en contacto con nuestra corta lista de cultivadores de confianza en Sajonia-Anhalt, Baviera y el norte de Italia.',
      ],
      mapsCta: 'Abrir en Google Maps',
      hoursLabel: 'Horario del taller',
      closedLabel: 'cerrado',
      hoursNote: 'Sesiones de taller solo con cita previa por correo.',
    },
    treesIndex: {
      title: '24 especies de bonsái',
      description:
        'La colección completa: 10 especies de interior y 14 de exterior con notas de cuidado, estilos, técnicas y propagación.',
      heroEyebrow: 'La colección',
      heroTitle: 'Veinticuatro especies.',
      heroBody_before:
        'Por orden alfabético. Filtra por ubicación y aptitud para principiantes desde las pestañas en la parte superior de cada tarjeta. Búsqueda de texto completo en ',
      heroBody_link: 'Buscar',
      heroBody_after: '.',
      backToOverview: '← Volver al índice',
    },
    treeDetail: {
      backLink: '← Volver al índice',
      placementLabel: 'Ubicación',
      beginnerBadge: 'Principiante',
      familyLabel: 'Familia',
      originLabel: 'Origen',
      propagationLabel: 'Propagación',
      careHeading: 'Cómo se cuida.',
      careSubheading: 'Cuidado',
      careSection: {
        sun: 'Luz',
        soil: 'Sustrato',
        watering: 'Riego',
        fertilizing: 'Abonado',
        temperature: 'Temperatura',
        pruning: 'Poda',
      },
      stylesEyebrow: 'Estilo',
      stylesHeading: 'Estilos habituales.',
      techniquesEyebrow: 'Calendario del taller',
      techniquesHeading: 'Técnicas clave.',
      techniquesBody:
        'La época y la edad mínima son inamovibles. Alambrar en la estación equivocada o trasplantar antes de la edad mínima pone al árbol en riesgo.',
      techniquesPeriodLabel: 'Época:',
      techniquesMinAgeLabel: 'Edad mínima:',
      propagationEyebrow: 'Propagación',
      propagationHeading: 'Cómo nace un nuevo árbol.',
      propagationMethodLabel: 'Método',
      propagationPeriodLabel: 'Época',
      propagationPostCareLabel: 'Cuidados posteriores',
      relatedHeading: 'Seguir explorando.',
      photoStockNote:
        '⚠ Fotografía de stock (Unsplash CC0). Las fotos específicas por especie llegarán con la documentación del taller.',
    },
    day: { Mon: 'Lun', Tue: 'Mar', Wed: 'Mié', Thu: 'Jue', Fri: 'Vie', Sat: 'Sáb', Sun: 'Dom' },
  },
  'pt-br': {
    home: {
      title: 'Kodama Bonsai — um ateliê berlinense dedicado ao saber do bonsai.',
      description:
        '24 espécies de bonsai com notas detalhadas de cuidado, estilos, técnicas e propagação. Um ateliê berlinense dedicado ao saber do bonsai.',
      heroEyebrow: 'BERLIM · PRENZLAUER BERG · DESDE 2019',
      heroTitleLine1: 'Vinte e quatro árvores.',
      heroTitleLine2: 'Um calendário anual.',
      heroTitleLine3: 'Um ateliê.',
      heroBody:
        'A Kodama é um pequeno ateliê em Berlim, no bairro Prenzlauer Berg — não é loja, é um acervo de conhecimento. 24 espécies de bonsai cuidadosamente escolhidas, cada uma com notas detalhadas de cuidado, estilos, técnicas e momentos. Para quem está começando e para quem já perdeu alguma árvore pelo caminho.',
      searchCta: 'Buscar uma árvore →',
      stat_species: 'Espécies',
      stat_indoor: 'Interno',
      stat_outdoor: 'Externo',
      pathsEyebrow: 'Três pontos de entrada',
      pathsHeading: 'Por onde você quer começar?',
      pathBeginnersTitle: 'Iniciante',
      pathBeginnersBody: '8 árvores que toleram os erros de cuidado. Ideais como primeiro bonsai.',
      pathBeginnersCta: 'Ver a seleção →',
      pathIndoorTitle: 'Interno',
      pathIndoorBody:
        'Espécies tropicais e subtropicais para o ambiente interno. Lugar claro, dentro de casa o ano todo.',
      pathIndoorCta: (n) => `${n} espécies →`,
      pathOutdoorTitle: 'Externo',
      pathOutdoorBody:
        'Espécies nativas e resistentes ao frio — coníferas, folhosas e floríferas. Fora o ano todo.',
      pathOutdoorCta: (n) => `${n} espécies →`,
      beginnersEyebrow: 'Para começar',
      beginnersHeading: 'Quatro árvores que dão tempo para você aprender.',
      beginnersBody:
        'Robustas, suportam bem a poda e perdoam os descuidos. Se o seu primeiro bonsai vai sobreviver, comece por uma destas quatro.',
      beginnersAllLink: 'Ver os 8 bonsais para iniciantes →',
      philosophyEyebrow: 'Sobre a Kodama',
      philosophyHeading: 'Um ateliê, não uma loja.',
      philosophyBody: [
        'O bonsai é lento. Isso não o torna difícil — torna-o inconfundível. Uma prática em que dois anos é pouco tempo. A Kodama existe porque acreditamos que a web de bonsai em português ainda oferece pouca informação limpa, precisa e sem alardes.',
        'A gente não vende árvores. Documenta 24 espécies o melhor que sabe — com dados de cuidado, estilos, técnicas e um calendário anual para cada operação. Mais, a cada quinze dias, uma carta do ateliê.',
      ],
      philosophyQuote:
        '"A melhor hora para plantar uma árvore foi há vinte anos. A segunda melhor hora é agora." — provérbio chinês',
      featuredEyebrow: 'Um primeiro olhar',
      featuredHeading: 'Seis árvores da coleção.',
      featuredAllLink: 'Todas as 24 árvores →',
    },
    beginners: {
      title: 'Para iniciantes',
      description:
        '8 espécies de bonsai que toleram os erros de cuidado. O melhor começo na prática do bonsai.',
      heroEyebrow: 'Para a primeira árvore',
      heroTitle: 'Oito árvores que perdoam os erros.',
      heroBody:
        'Estas oito espécies têm três coisas em comum: são robustas, suportam bem a poda e sobrevivem aos descuidos típicos do começo — rega em excesso ou em falta, substrato errado, lugar errado. Se o seu primeiro bonsai vai sobreviver, comece por uma destas oito.',
    },
    indoor: {
      title: 'Bonsai de interior',
      description:
        'Espécies tropicais e subtropicais para ambiente interno. 10 espécies com notas de cuidado para dentro de casa.',
      heroEyebrow: 'Interno — o ano todo',
      heroTitle: 'Árvores para dentro de casa.',
      heroBody:
        'Bonsais de interior costumam ser espécies tropicais ou subtropicais que, em Berlim, não sobreviveriam ao inverno do lado de fora. Precisam de um lugar claro (de preferência janela voltada para o sul ou o leste), temperatura constante (15–25 °C o ano todo) e, no inverno, umidade ambiente reforçada para compensar o ar seco da calefação.',
      importantPrefix: 'Importante:',
      importantBody:
        '"Interno" não quer dizer "em qualquer canto da sala". Um corredor escuro mata qualquer bonsai em 6–12 meses. Se o peitoril da sua janela ficar intolerável de calor no verão, esse é um bom lugar para uma espécie tropical.',
    },
    outdoor: {
      title: 'Bonsai de exterior',
      description:
        'Espécies nativas e resistentes ao frio para varanda e jardim. 14 espécies — coníferas, folhosas e floríferas.',
      heroEyebrow: 'Externo — o ano todo',
      heroTitle: 'Árvores para varanda e jardim.',
      heroBody:
        '14 espécies mantidas ao ar livre o ano todo em Berlim (zona de rusticidade 7b) — coníferas, folhosas e floríferas. Três grupos: clássicos japoneses (pinheiros, bordos, lariço, hinoki, ume), nativas europeias (faia, pinheiro-silvestre, marmeleiro-do-japão) e espécies mediterrâneas (oliveira — precisa de um abrigo de inverno sem geadas).',
      importantPrefix: 'Externo é externo.',
      importantBody:
        'Estas árvores precisam da virada das estações. Pôr um zimbro ou uma faia na sala de estar mata a árvore em uma temporada. No inverno, ficam num lugar abrigado ao ar livre, com proteção do torrão de raízes — mas NÃO em ambiente aquecido.',
    },
    search: {
      title: 'Busca',
      description: 'Busca no acervo de bonsai — por nome popular, científico, família ou origem.',
      heroEyebrow: 'Busca',
      heroTitle: 'Qual árvore você procura?',
      heroBody:
        'Digite um nome popular em português, alemão ou inglês, um nome científico (Ficus retusa, Pinus thunbergii), uma família botânica (Pinaceae, Rosaceae) ou uma região de origem (Japão, Mediterrâneo).',
      placeholder: 'Ficus, Pinus, Acer, Rosaceae, …',
      inputLabel: 'Buscar um bonsai',
      filterIndoor: (n) => `Só internos (${n})`,
      filterOutdoor: (n) => `Só externos (${n})`,
      filterBeginner: 'Só árvores para iniciantes',
      filterClear: 'Limpar filtros',
      totalLabel: '24 árvores no total.',
      noResults: 'Sem resultados — tente outro termo de busca ou limpe os filtros.',
      hitsLabel: (n, q) => `${n} ${n === 1 ? 'resultado' : 'resultados'}${q ? ` para "${q}"` : ''}`,
      zeroHits: '0 resultados',
    },
    workshop: {
      title: 'Ateliê',
      description:
        'Kodama Bonsai — um pequeno ateliê em Berlim, Prenzlauer Berg. Kollwitzstraße 76, Kollwitzplatz.',
      heroEyebrow: 'Sobre o ateliê',
      heroTitle: 'Quatro paredes, quatro prateleiras, 80 árvores.',
      heroBody: [
        'A Kodama Bonsai é um pequeno ateliê no térreo de um prédio antigo na Kollwitzstraße, em Prenzlauer Berg. Hannes Wakabayashi (formação como mestre de bonsai em Saitama, 2014–2018) e Marlene Reuter (Ciências Florestais, TU Berlin) abriram o ateliê em 2019 — como ateliê, não como loja.',
        'O que a gente faz: cuida de 80 árvores, 24 delas documentadas no acervo público. Workshops para iniciantes (a cada dois sábados) e sessões individuais de ateliê para quem está mais avançado (com agendamento). Mais uma carta a cada quinze dias — calendário sazonal, fotos de detalhe, o que estamos trabalhando.',
        'O que a gente não faz: vender árvores. Quem busca uma árvore manda um e-mail — a gente conecta com a nossa pequena lista de cultivadores de confiança na Saxônia-Anhalt, na Baviera e no norte da Itália.',
      ],
      mapsCta: 'Abrir no Google Maps',
      hoursLabel: 'Horário do ateliê',
      closedLabel: 'fechado',
      hoursNote: 'Sessões de ateliê apenas com agendamento por e-mail.',
    },
    treesIndex: {
      title: '24 espécies de bonsai',
      description:
        'O acervo completo: 10 espécies de interior e 14 de exterior com notas de cuidado, estilos, técnicas e propagação.',
      heroEyebrow: 'O acervo',
      heroTitle: 'Vinte e quatro espécies.',
      heroBody_before:
        'Em ordem alfabética. Filtre por localização e adequação para iniciantes pelas abas no topo de cada card. Busca em texto cheio em ',
      heroBody_link: 'Buscar',
      heroBody_after: '.',
      backToOverview: '← Voltar à lista',
    },
    treeDetail: {
      backLink: '← Voltar à lista',
      placementLabel: 'Localização',
      beginnerBadge: 'Iniciante',
      familyLabel: 'Família',
      originLabel: 'Origem',
      propagationLabel: 'Propagação',
      careHeading: 'Como se cuida.',
      careSubheading: 'Cuidado',
      careSection: {
        sun: 'Luz',
        soil: 'Substrato',
        watering: 'Rega',
        fertilizing: 'Adubação',
        temperature: 'Temperatura',
        pruning: 'Poda',
      },
      stylesEyebrow: 'Estilo',
      stylesHeading: 'Estilos comuns.',
      techniquesEyebrow: 'Calendário do ateliê',
      techniquesHeading: 'Técnicas principais.',
      techniquesBody:
        'A época e a idade mínima são inegociáveis. Aramar na estação errada ou transplantar antes da idade mínima coloca a árvore em risco.',
      techniquesPeriodLabel: 'Época:',
      techniquesMinAgeLabel: 'Idade mínima:',
      propagationEyebrow: 'Propagação',
      propagationHeading: 'Como nasce uma nova árvore.',
      propagationMethodLabel: 'Método',
      propagationPeriodLabel: 'Época',
      propagationPostCareLabel: 'Pós-cuidado',
      relatedHeading: 'Continuar explorando.',
      photoStockNote:
        '⚠ Fotos do banco Unsplash (CC0). Imagens específicas por espécie virão com a documentação do ateliê.',
    },
    day: { Mon: 'Seg', Tue: 'Ter', Wed: 'Qua', Thu: 'Qui', Fri: 'Sex', Sat: 'Sáb', Sun: 'Dom' },
  },
};
