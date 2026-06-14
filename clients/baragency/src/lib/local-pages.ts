/**
 * Local landing pages (F1, icreateyoursite benchmark borrow).
 *
 * Vertical × Berlin-Bezirk programmatic pages, e.g. "Friseur-Website in Kreuzberg".
 *
 * GERMAN ONLY by design: these target German local-search intent ("Friseur
 * Website Kreuzberg"). They are NOT part of the trilingual EN/DE/PT-BR page set,
 * so they live in their own data module + route group and are excluded from the
 * i18n parity validator. The site's main marketing pages stay trilingual.
 *
 * ANTI-SLOP (per DESIGN-BEST-PRACTICES.md §6.5 + CLAUDE.md portfolio-diversity):
 * iCreate's location pages are find-and-replace clones, a thin-content risk we
 * must NOT copy. Differentiation here comes from TWO axes of genuinely distinct
 * prose: every Bezirk has a unique `intro` + `localPara` (real neighbourhood
 * character), and every vertical has a unique `lead` + `body` + `faq`. Each of
 * the 24 pages is a unique (vertical × Bezirk) combination of real copy, never a
 * templated city-name swap.
 *
 * Content status: agency-authored marketing copy (no invented client facts).
 * Prices/claims reference the published pricing ranges; nothing here is a
 * per-client commitment.
 */

export interface Bezirk {
  slug: string;
  name: string;
  /** Unique neighbourhood character, 1–2 sentences, no two alike. */
  intro: string;
  /** Why local search matters specifically here, 1–2 sentences. */
  localPara: string;
}

export interface Vertical {
  slug: string;
  /** German display noun, e.g. 'Friseur'. */
  name: string;
  /** Headline noun phrase, e.g. 'Friseur- & Salon-Website'. */
  pageNoun: string;
  /** schema.org serviceType string. */
  serviceType: string;
  /** Vertical pain / hook, unique per vertical. */
  lead: string;
  /** 6 concrete deliverables for this vertical. */
  services: string[];
  /** 2–3 body paragraphs explaining the work for this vertical. */
  body: string[];
  faq: { q: string; a: string }[];
}

export interface LocalPage {
  slug: string;
  vertical: Vertical;
  bezirk: Bezirk;
}

export const BEZIRKE: Bezirk[] = [
  {
    slug: 'mitte',
    name: 'Mitte',
    intro:
      'Mitte ist Schaufenster und Durchgangsort zugleich: Tourist:innen, Büros, Behörden und Anwohner:innen teilen sich dieselben Straßen rund um Hackescher Markt und Rosenthaler Platz.',
    localPara:
      'In einem Bezirk, in dem die Konkurrenz nur eine Suchanfrage entfernt ist, entscheiden die ersten Google-Treffer über Laufkundschaft. Wir sorgen dafür, dass dein Eintrag auf der Karte und in der lokalen Suche sichtbar bleibt.',
  },
  {
    slug: 'kreuzberg',
    name: 'Kreuzberg',
    intro:
      'Kreuzberg lebt von Charakter: zwischen Bergmannkiez und Görli treffen alteingesessene Betriebe auf eine junge, kritische Kundschaft, die Authentizität sofort erkennt.',
    localPara:
      'Hier funktioniert keine Hochglanz-Schablone. Eine Website, die nach Kreuzberg klingt und in der lokalen Suche auftaucht, bringt genau die Nachbar:innen, die wiederkommen.',
  },
  {
    slug: 'neukoelln',
    name: 'Neukölln',
    intro:
      'Neukölln ist vielfältig und im Wandel: vom Reuterkiez bis zur Sonnenallee mischen sich Sprachen, Generationen und Gründer:innen, die gerade ihren ersten Laden eröffnen.',
    localPara:
      'Mehrsprachige Inhalte und ein sauberer Google-Eintrag sind hier kein Extra, sondern Pflicht, so erreichst du die ganze Nachbarschaft, nicht nur die Hälfte.',
  },
  {
    slug: 'prenzlauer-berg',
    name: 'Prenzlauer Berg',
    intro:
      'Prenzlauer Berg ist Altbau, Kollwitzplatz und eine Kundschaft, die Qualität schätzt und bereit ist, dafür zu zahlen, aber vorher gründlich vergleicht.',
    localPara:
      'Wer hier gefunden werden will, braucht mehr als einen Eintrag: Bewertungen, klare Leistungen und eine Seite, die das Versprechen einlöst, das die Bewertungen geben.',
  },
  {
    slug: 'friedrichshain',
    name: 'Friedrichshain',
    intro:
      'Friedrichshain ist jung, digital und schnell: rund um Boxhagener Platz und RAW-Gelände wird zuerst auf dem Handy gesucht und dann entschieden.',
    localPara:
      'Eine mobil-first gebaute, schnelle Seite ist hier kein Bonus, sie ist der Unterschied zwischen einem Klick und einem Absprung zur Konkurrenz im selben Block.',
  },
  {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    intro:
      'Charlottenburg ist gesetzter und kaufkräftig: zwischen Ku’damm und Stuttgarter Platz erwarten Kund:innen Seriosität, Verlässlichkeit und einen professionellen ersten Eindruck.',
    localPara:
      'Hier zahlt eine ruhige, professionelle Website direkt auf Vertrauen ein, und ein gepflegtes Google-Profil entscheidet, wer den Termin bekommt.',
  },
];

export const VERTICALS: Vertical[] = [
  {
    slug: 'gastronomie',
    name: 'Gastronomie',
    pageNoun: 'Restaurant- & Café-Website',
    serviceType: 'Webdesign für Gastronomie',
    lead: 'Gäste entscheiden in Sekunden, meist auf dem Handy, oft hungrig. Deine Seite muss Speisekarte, Öffnungszeiten und den Weg zu dir sofort zeigen.',
    services: [
      'Speisekarte, die auf dem Handy sofort lesbar ist',
      'Öffnungszeiten, Reservierung & Anfahrt prominent',
      'Foto-Galerie, die Appetit macht',
      'Google-Unternehmensprofil mit Karten-Pin',
      'Schema-Markup für Restaurant + Speisekarte',
      'Mehrsprachig (DE/EN) für Gäste aus aller Welt',
    ],
    body: [
      'Die meisten Gäste schauen sich eine Speisekarte heute auf dem Handy an, bevor sie kommen. Wenn deine Karte ein PDF ist, das erst geladen und gezoomt werden muss, sind sie schon weg. Wir bauen Karten, die direkt lesbar sind, schnell, klar, ohne Download.',
      'Genauso wichtig: Öffnungszeiten, Reservierung und Anfahrt. Diese drei Dinge gehören nach oben, nicht ins Kleingedruckte. Und dein Google-Eintrag muss dieselben Informationen zeigen, denn die Hälfte der Gäste landet zuerst auf der Karte, nicht auf der Website.',
      'Dazu kommen Fotos, die den Ort verkaufen, und Schema-Markup, das Google deine Gerichte und Zeiten verstehen lässt. So tauchst du auf, wenn jemand in der Nähe „essen gehen“ sucht.',
    ],
    faq: [
      {
        q: 'Können Gäste online einen Tisch reservieren?',
        a: 'Ja. Für viele Betriebe reicht ein einfaches Anfrage-Formular oder ein WhatsApp-Link; bei höherem Volumen binden wir ein Reservierungssystem ein. Wir empfehlen die schlankste Lösung, die für deinen Laden funktioniert.',
      },
      {
        q: 'Aktualisiert ihr auch die Speisekarte?',
        a: 'Mit dem optionalen Pflegeplan ja, du schickst Änderungen, wir setzen sie zeitnah um. Alternativ bauen wir die Karte so, dass du sie selbst pflegen kannst.',
      },
      {
        q: 'Bekomme ich auch ein Google-Unternehmensprofil?',
        a: 'Ja. Gerade in der Gastronomie kommt ein großer Teil der Gäste über Google Maps. Wir richten das Profil ein oder optimieren es und verbinden es mit der Website.',
      },
      {
        q: 'Geht das auch zweisprachig?',
        a: 'Ja, DE und EN sind in der Gastronomie fast immer sinnvoll. Übersetzungen schreiben wir selbst, nicht maschinell.',
      },
    ],
  },
  {
    slug: 'friseur',
    name: 'Friseur',
    pageNoun: 'Friseur- & Salon-Website',
    serviceType: 'Webdesign für Friseure und Salons',
    lead: 'Im Salongeschäft zählt der erste Eindruck, online wie im Stuhl. Deine Seite soll Stil zeigen und das Buchen so einfach wie möglich machen.',
    services: [
      'Online-Terminbuchung oder Buchungs-Link',
      'Leistungen & Preise klar dargestellt',
      'Portfolio-Galerie deiner Arbeiten',
      'Team-Vorstellung, die Vertrauen schafft',
      'Google-Profil mit Bewertungen im Blick',
      'Mobil-first, weil hier fast alle vom Handy buchen',
    ],
    body: [
      'Ein Salon verkauft Stil, und die Website ist das erste Stück davon, das Kund:innen sehen. Wir bauen Seiten, die deine Handschrift zeigen: ruhige Typografie, gute Fotos deiner Arbeiten, und ein Look, der zu deinem Salon passt statt zu einer Vorlage.',
      'Der wichtigste Knopf ist „Termin buchen“. Ob über ein eigenes Buchungssystem oder einen Link zu Treatwell oder Booksy, wir machen das Buchen auf dem Handy so leicht wie möglich, denn genau dort entscheiden sich die meisten.',
      'Bewertungen und ein gepflegtes Google-Profil runden das Bild ab: Sie sind im Salongeschäft oft der Grund, warum jemand bei dir bucht und nicht beim Laden zwei Straßen weiter.',
    ],
    faq: [
      {
        q: 'Können Kund:innen direkt online buchen?',
        a: 'Ja. Wir binden dein bestehendes Buchungssystem ein (z. B. Treatwell, Booksy) oder richten eine einfache Terminanfrage ein, wenn du noch keins nutzt.',
      },
      {
        q: 'Kann ich meine Preise selbst ändern?',
        a: 'Ja. Wir bauen die Leistungs- und Preisliste so, dass du sie selbst pflegen kannst, oder wir übernehmen das im Pflegeplan.',
      },
      {
        q: 'Zeigt ihr meine Arbeiten?',
        a: 'Unbedingt. Eine Galerie deiner besten Schnitte und Farben ist im Salongeschäft eines der stärksten Verkaufsargumente. Du lieferst die Fotos, wir setzen sie in Szene.',
      },
      {
        q: 'Hilft mir das, bei Google gefunden zu werden?',
        a: 'Ja. Wir optimieren dein Google-Unternehmensprofil und die lokale Suche, damit „Friseur in deiner Nähe“ bei dir landet.',
      },
    ],
  },
  {
    slug: 'praxis',
    name: 'Praxis',
    pageNoun: 'Praxis-Website',
    serviceType: 'Webdesign für Praxen und Gesundheitsberufe',
    lead: 'Patient:innen suchen nach Vertrauen, bevor sie anrufen. Deine Praxis-Website muss seriös wirken, klar informieren und Barrierefreiheit ernst nehmen.',
    services: [
      'Leistungen & Schwerpunkte verständlich erklärt',
      'Sprechzeiten, Anfahrt & Kontakt sofort sichtbar',
      'Online-Terminanfrage oder Doctolib-Anbindung',
      'Barrierefreiheit nach WCAG 2.2 AA',
      'DSGVO-konform mit sauberen Rechtstexten',
      'Google-Profil & lokale Auffindbarkeit',
    ],
    body: [
      'Bei Gesundheitsthemen entscheidet Vertrauen. Eine Praxis-Website muss in den ersten Sekunden seriös und ruhig wirken, kein Marktgeschrei, sondern Klarheit: Was bietet ihr an, wann habt ihr offen, wie kommt man zu euch und wie vereinbart man einen Termin.',
      'Wir nehmen Barrierefreiheit ernst (WCAG 2.2 AA), weil eure Patient:innen jedes Alter und jede Fähigkeit haben. Und wir bauen DSGVO-konform, Cookie-Banner, Datenschutzerklärung und Formulare, die Patientendaten respektvoll behandeln.',
      'Terminbuchung lösen wir passend zu eurer Praxis: ein schlankes Anfrage-Formular oder die Anbindung an Doctolib, wenn ihr es schon nutzt. Dazu ein gepflegtes Google-Profil, damit ihr in der lokalen Suche auftaucht.',
    ],
    faq: [
      {
        q: 'Ist die Seite DSGVO-konform?',
        a: 'Ja, von Grund auf. Consent-first Cookie-Banner, Datenschutzerklärung, Impressum und Formulare, die Daten sparsam und sicher verarbeiten, das ist bei uns Standard, kein Aufpreis.',
      },
      {
        q: 'Können Patient:innen online einen Termin anfragen?',
        a: 'Ja. Wir binden Doctolib ein, wenn ihr es nutzt, oder richten eine sichere Terminanfrage per Formular ein.',
      },
      {
        q: 'Ist die Seite barrierefrei?',
        a: 'Ja. Wir bauen nach WCAG 2.2 AA, gute Kontraste, Tastatur-Bedienung, lesbare Schriftgrößen. Gerade im Gesundheitsbereich ist das wichtig.',
      },
      {
        q: 'Könnt ihr eine bestehende Praxis-Website modernisieren?',
        a: 'Ja. Wir prüfen die alte Seite, übernehmen Inhalte und Rankings und bauen sie moderner, schneller und rechtssicher neu auf.',
      },
    ],
  },
  {
    slug: 'handwerk',
    name: 'Handwerk',
    pageNoun: 'Handwerker-Website',
    serviceType: 'Webdesign für Handwerksbetriebe',
    lead: 'Aufträge kommen heute über Google, nicht über die Gelben Seiten. Deine Seite muss zeigen, was du kannst, und das Anfragen kinderleicht machen.',
    services: [
      'Leistungen & Einsatzgebiet klar benannt',
      'Referenzen mit Vorher-Nachher-Fotos',
      'Anfrage-Formular & Klick-zum-Anrufen',
      'Lokales SEO fürs Einsatzgebiet',
      'Google-Profil mit Bewertungen',
      'Schnell und mobil, auch auf der Baustelle',
    ],
    body: [
      'Wer einen Handwerker sucht, sucht heute bei Google, und ruft den an, der zuerst auftaucht und vertrauenswürdig wirkt. Eine klare Seite mit deinen Leistungen, deinem Einsatzgebiet und echten Referenzen macht genau diesen Unterschied.',
      'Vorher-Nachher-Fotos sind dein stärkstes Argument. Wir setzen sie in Szene und machen das Anfragen einfach: ein kurzes Formular und ein „Jetzt anrufen“-Button, der auf dem Handy direkt wählt.',
      'Dazu lokales SEO für dein Einsatzgebiet und ein gepflegtes Google-Profil mit Bewertungen, damit du in deinem Kiez und den Nachbarbezirken gefunden wirst, wenn jemand dringend Hilfe braucht.',
    ],
    faq: [
      {
        q: 'Bekomme ich Anfragen direkt aufs Handy?',
        a: 'Ja. Das Anfrage-Formular schickt dir Nachrichten direkt ins Postfach, und der „Anrufen“-Button wählt auf dem Handy mit einem Tipp deine Nummer.',
      },
      {
        q: 'Könnt ihr meine Referenzen zeigen?',
        a: 'Ja, am besten als Vorher-Nachher-Galerie. Das ist im Handwerk das überzeugendste Verkaufsargument. Du lieferst Fotos, wir bauen die Galerie.',
      },
      {
        q: 'Werde ich in meinem Einsatzgebiet gefunden?',
        a: 'Dafür ist die Seite gemacht. Wir optimieren lokales SEO und dein Google-Profil auf dein Einsatzgebiet, also die Bezirke, in denen du arbeitest.',
      },
      {
        q: 'Was kostet so eine Seite?',
        a: 'Für die meisten Handwerksbetriebe reicht ein kompaktes Paket. Richtwerte findest du auf unserer Preisseite; ein Festpreis-Angebot bekommst du vorab.',
      },
    ],
  },
];

export const LOCAL_PAGES: LocalPage[] = VERTICALS.flatMap((vertical) =>
  BEZIRKE.map((bezirk) => ({
    slug: `${vertical.slug}-${bezirk.slug}`,
    vertical,
    bezirk,
  })),
);

export function getLocalPage(slug: string): LocalPage | undefined {
  return LOCAL_PAGES.find((p) => p.slug === slug);
}

/** Hub-page copy (German). */
export const LOCAL_HUB = {
  metaTitle: 'Webdesign in Berlin, nach Branche & Bezirk',
  metaDescription:
    'Webdesign, lokales SEO und Google-Unternehmensprofil für Berliner Betriebe, nach Branche und Bezirk. Gastronomie, Friseur, Praxis und Handwerk in Mitte, Kreuzberg, Neukölln und mehr.',
  heroEyebrow: 'Webdesign Berlin',
  heroTitle: 'Websites für Berliner Betriebe, in deinem Kiez.',
  heroSubtitle:
    'Wir bauen schnelle, mehrsprachige Websites und kümmern uns um lokales SEO und dein Google-Profil. Such dir deine Branche und deinen Bezirk.',
  verticalsHeading: 'Branchen',
  bezirkeLabel: 'Bezirke',
  ctaButton: 'Kontakt aufnehmen',
};
