/**
 * Contract template strings — locale-aware service scopes + clause text.
 *
 * Used by `src/pages/contract.astro` (EN) + `src/pages/[locale]/contract.astro` (DE).
 *
 * **LEGAL CAVEAT:** This template is a STARTING POINT drafted by an LLM with B2B
 * service-agreement conventions in mind. It is NOT lawyer-reviewed. Before
 * material use, have a Berlin-licensed Rechtsanwalt review the German text for
 * § 307 BGB AGB-Kontrolle, AVV cross-references, and jurisdiction-specific
 * protections. Cost of one review: ~€150–400. Worth it before client #3.
 */

export type LocaleEnDe = 'en' | 'de';

export interface ServiceScope {
  slug: 'website' | 'seo' | 'gbp' | 'social';
  name: string;
  defaultScope: string;
}

export const SERVICE_SCOPES: Record<LocaleEnDe, ServiceScope[]> = {
  en: [
    {
      slug: 'website',
      name: 'Website creation',
      defaultScope:
        "Multi-page marketing website on Astro 6 or Next.js. Up to 12 pages. Multilingual (DE + EN by default; additional locales priced separately). Deployment on Vercel under the Client's account, with the domain in the Client's name and the codebase on the Client's GitHub. Includes cookie banner, privacy policy, and imprint pages drafted to the Client's business. WCAG 2.2 AA, mobile-first, Lighthouse > 90 mobile/desktop at launch.",
    },
    {
      slug: 'seo',
      name: 'Search-engine optimisation',
      defaultScope:
        "On-page SEO + schema.org markup + Google Search Console and Bing Webmaster Tools setup under the Client's account. Initial audit with prioritised fix list. Monthly retainer includes: monthly report (impressions, position, conversions) with concrete next-step recommendations; quarterly keyword review; technical-SEO maintenance. No backlink purchases. No black-hat tactics.",
    },
    {
      slug: 'gbp',
      name: 'Google Business Profile',
      defaultScope:
        'Setup, verification, and category/sub-category fit of the GBP listing. Service-area calibration, attributes, opening hours including holidays, geo-tagged photo uploads. Monthly retainer includes: 2 posts/month, all reviews responded to within 48 h, photo refresh, Q&A maintenance, quarterly insights review. Vanity review redirect (/review on Client domain) configured.',
    },
    {
      slug: 'social',
      name: 'Social media management',
      defaultScope:
        'Two posts per week on Instagram + Facebook, drafted from Client-provided photos and milestones, reviewed by Client before publish. DM and comment monitoring on weekdays. Monthly report with engagement metrics and next-month plan. No follower purchasing, no automated cross-posting tools.',
    },
  ],
  de: [
    {
      slug: 'website',
      name: 'Website-Erstellung',
      defaultScope:
        'Mehrseitige Marketing-Website auf Astro 6 oder Next.js. Bis zu 12 Seiten. Mehrsprachig (DE + EN als Standard; weitere Sprachen separat berechnet). Deployment auf Vercel unter dem Konto des Auftraggebers, mit der Domain auf den Namen des Auftraggebers und der Codebasis auf dem GitHub-Konto des Auftraggebers. Inklusive Cookie-Banner, Datenschutzerklärung und Impressum, jeweils auf das Unternehmen des Auftraggebers angepasst. WCAG 2.2 AA, Mobile-First, Lighthouse > 90 Mobile/Desktop bei Launch.',
    },
    {
      slug: 'seo',
      name: 'Suchmaschinen-Optimierung',
      defaultScope:
        'On-Page-SEO + Schema.org-Markup + Einrichtung der Google Search Console und Bing Webmaster Tools unter dem Konto des Auftraggebers. Initial-Audit mit priorisierter Fix-Liste. Monatlicher Retainer enthält: monatlichen Report (Impressionen, Position, Conversions) mit konkreten nächsten Schritten; quartalsweise Keyword-Review; technische SEO-Pflege. Keine Backlink-Käufe. Keine Black-Hat-Taktiken.',
    },
    {
      slug: 'gbp',
      name: 'Google Business Profile',
      defaultScope:
        'Einrichtung, Verifizierung und passende Kategorie-Auswahl des GBP-Eintrags. Service-Area-Kalibrierung, Attribute, Öffnungszeiten inkl. Feiertage, geo-getaggte Foto-Uploads. Monatlicher Retainer enthält: 2 Beiträge/Monat, jede Bewertung innerhalb 48 h beantwortet, Foto-Aktualisierung, Q&A-Pflege, quartalsweise Insights-Review. Vanity-Bewertungs-Link (/bewertung auf Auftraggeber-Domain) eingerichtet.',
    },
    {
      slug: 'social',
      name: 'Social-Media-Pflege',
      defaultScope:
        'Zwei Beiträge pro Woche auf Instagram + Facebook, entworfen aus vom Auftraggeber bereitgestellten Fotos und Meilensteinen, vor Veröffentlichung vom Auftraggeber geprüft. DM- und Kommentar-Monitoring werktags. Monatlicher Report mit Engagement-Metriken und Plan für den Folgemonat. Keine gekauften Follower, keine automatisierten Cross-Posting-Tools.',
    },
  ],
};

export interface ContractStrings {
  draftBanner: string;
  pageTitle: string;
  pageSubtitle: string;
  printButton: string;
  printHint: string;
  formIntro: string;

  // Form labels
  partiesLabel: string;
  clientLegalForm: string;
  clientBusinessName: string;
  clientRepresentative: string;
  clientRepresentativeRole: string;
  clientStreet: string;
  clientPostalCode: string;
  clientCity: string;
  clientEmail: string;
  clientUstId: string;
  clientUstHint: string;

  servicesLabel: string;
  servicesHint: string;
  scopeEditableLabel: string;

  pricingLabel: string;
  buildFee: string;
  retainerFee: string;
  retainerFeeHint: string;
  vatLabel: string;
  vatKleinunternehmer: string;
  vatRegular: string;

  datesLabel: string;
  signatureDate: string;
  startDate: string;
  goLiveDate: string;
  goLiveHint: string;

  // Contract body
  contractTitleH1: string;
  contractSubtitle: string;
  agencyHeading: string;
  clientHeading: string;
  agencyAddress: string; // Composite string built at render
  representedBy: string;

  s1Heading: string;
  s1Body: string;

  s2Heading: string;
  s2Intro: string;
  s2NoServicesSelected: string;
  s2ScopeIntroLabel: string;

  s3Heading: string;
  /** Template — replace `{eur}` with the formatted amount at render time. */
  s3BuildFeeLine: string;
  s3BuildFeeSplit: string;
  /** Template — replace `{eur}` with the formatted retainer amount. */
  s3RetainerLine: string;
  s3PaymentTerms: string;
  s3PaymentDefault: string;
  s3VatKleinLine: string;
  /** Template — replace `{net}` / `{vat}` / `{gross}` with formatted amounts. */
  s3VatRegularLine: string;

  s4Heading: string;
  /** Template — replace `{date}` with the formatted start date. */
  s4Start: string;
  s4MinimumTerm: string;
  s4Notice: string;
  s4ImmediateTermination: string;
  s4HandoverObligation: string;

  s5Heading: string;
  s5ClientOwns: string;
  s5AgencyKeeps: string;

  s6Heading: string;
  s6LiabilityCap: string;
  s6LiabilityExclusions: string;
  s6Indemnification: string;

  s7Heading: string;
  s7DataAvv: string;
  s7Confidentiality: string;

  s8Heading: string;
  s8Jurisdiction: string;
  s8WrittenForm: string;
  s8Severability: string;
  s8LanguageBindingDe: string;
  s8LanguageBindingEn: string;

  signaturesHeading: string;
  signaturePlace: string;
  signatureDateLabel: string;
  signatureLineLabel: string;

  footerNote: string;
}

export const CONTRACT_STRINGS: Record<LocaleEnDe, ContractStrings> = {
  en: {
    draftBanner:
      'DRAFT — this template has not been reviewed by a Rechtsanwalt. Before using for client #3 or any contract value above €5,000, have a Berlin-licensed lawyer review the DE version. This banner is hidden when printed.',
    pageTitle: 'Service Agreement — fill, print, sign',
    pageSubtitle:
      "Type in the client details below. Output renders inline. Then Cmd/Ctrl+P → Save as PDF, or print A4 directly. Two pages, B2B service agreement with the agency's standard terms.",
    printButton: 'Print / Save as PDF',
    printHint:
      'Tip: in the print dialog, set margins to "Default" and disable headers/footers for a clean A4. Both pages should fit without scaling.',
    formIntro: "Editable fields. Defaults are pre-filled where they don't change per client.",

    partiesLabel: 'Client business details',
    clientLegalForm: 'Legal form',
    clientBusinessName: 'Business name',
    clientRepresentative: 'Representative (full name)',
    clientRepresentativeRole: 'Role',
    clientStreet: 'Street + house number',
    clientPostalCode: 'PLZ',
    clientCity: 'City',
    clientEmail: 'Email',
    clientUstId: 'VAT ID (USt-IdNr)',
    clientUstHint:
      'Leave blank if the client is Kleinunternehmer under § 19 UStG and has no VAT ID.',

    servicesLabel: 'Services',
    servicesHint:
      "Tick what the client is hiring. Scope text below each pre-fills with the agency's default but is editable for client-specific overrides.",
    scopeEditableLabel: 'Scope (editable per deal):',

    pricingLabel: 'Pricing',
    buildFee: 'One-time build fee',
    retainerFee: 'Monthly retainer',
    retainerFeeHint:
      'If multiple services have monthly retainers, enter the combined total here. Per-service breakdown shows in the agreement.',
    vatLabel: 'VAT handling',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG) — no VAT charged',
    vatRegular: 'Regular VAT — 19 % MwSt added to every line',

    datesLabel: 'Dates',
    signatureDate: 'Signature date',
    startDate: 'Project start',
    goLiveDate: 'Expected go-live',
    goLiveHint:
      'For Website service only. SEO/GBP/Social do not have a "go-live" — the retainer starts on the start date.',

    contractTitleH1: 'Service Agreement',
    contractSubtitle: 'between Agency and Client — for the services listed in § 2',

    agencyHeading: 'Agency',
    clientHeading: 'Client',
    agencyAddress: '', // composed at render
    representedBy: 'Represented by',

    s1Heading: '§ 1   Subject of the Agreement',
    s1Body:
      'The Agency provides the Client with the services selected in § 2. The Client retains ownership of all content, domain, and resulting deployed work product. The Agency retains rights to its reusable design patterns, components, and accumulated agency know-how. Both Parties are merchants under §§ 14, 343 ff. HGB; consumer-protection rules do not apply.',

    s2Heading: '§ 2   Services',
    s2Intro: 'The following services are included in this Agreement:',
    s2NoServicesSelected:
      '⚠ No services selected — return to the form and tick at least one service.',
    s2ScopeIntroLabel: 'Scope:',

    s3Heading: '§ 3   Compensation and Payment Terms',
    s3BuildFeeLine:
      'One-time build fee: {eur} net. Payable in two instalments: 50 % within 14 days of signature; 50 % within 14 days of project go-live (website only) or first calendar month of service delivery (SEO, GBP, Social).',
    s3BuildFeeSplit:
      'The Agency issues separate invoices for each instalment, each due net 14 days.',
    s3RetainerLine:
      'Monthly retainer: {eur} net per month, invoiced on the 1st of each calendar month and due net 14 days. First retainer invoice issued on the project start date (§ 4) regardless of whether services have begun on that date.',
    s3PaymentTerms:
      "Payment is due by SEPA bank transfer to the Agency's account stated on each invoice. Late payment triggers statutory interest under § 288 BGB plus a € 40 reminder fee per § 288 (5) BGB. The Agency may suspend services if any invoice remains unpaid for 14 days after due date, until paid in full (§ 4 Termination).",
    s3PaymentDefault: 'Late payment: § 288 BGB statutory interest + € 40 reminder fee.',
    s3VatKleinLine:
      'Pursuant to § 19 UStG, the Agency does not charge VAT (Umsatzsteuer). All amounts above are final.',
    s3VatRegularLine:
      'Net total: {net}. VAT 19 %: {vat}. Gross total: {gross}. VAT is added to each invoice. The Client confirms it is entitled to deduct input VAT (Vorsteuerabzug).',

    s4Heading: '§ 4   Term and Termination',
    s4Start: 'This Agreement begins on {date} ("Start Date").',
    s4MinimumTerm:
      "If a monthly retainer is included in § 3, the minimum retainer term is three (3) calendar months from the Start Date. After the minimum term, the retainer continues month-to-month and may be terminated by either Party with thirty (30) days' written notice to the end of any calendar month.",
    s4Notice:
      'Notice of termination must be delivered in text form (§ 126b BGB) — email is sufficient. The address for notice is the email on the cover page of this Agreement.',
    s4ImmediateTermination:
      'Either Party may terminate this Agreement for cause without notice if (a) the other Party is in material breach and fails to cure within 14 days of written demand, or (b) the Client is more than 14 days late on any invoice. The Agency may suspend services during any cure period.',
    s4HandoverObligation:
      'Upon termination for any reason, the Agency hands over to the Client: domain ownership transfer, GitHub repo ownership transfer, Vercel project transfer, GBP listing transfer, Search Console verification transfer. Handover obligations survive termination by 30 days.',

    s5Heading: '§ 5   Intellectual Property',
    s5ClientOwns:
      'The Client owns: (a) the deployed website and all content provided by the Client; (b) the GitHub repository created for the Client; (c) the registered domain; (d) the Google Business Profile listing; (e) any photographs, copy, or logos provided to the Agency. The Client receives a perpetual, worldwide, transferable licence to the deployed work product.',
    s5AgencyKeeps:
      "The Agency retains all rights to its reusable design patterns, component library, code scaffolds, documentation system, and any general agency know-how not specific to the Client's business. The Client gains no rights to these underlying patterns; the Agency may continue to build similar work for other clients in similar or different verticals.",

    s6Heading: '§ 6   Liability',
    s6LiabilityCap:
      "The Agency's aggregate liability under this Agreement is limited to the total fees actually paid by the Client to the Agency in the twelve (12) months immediately preceding the event giving rise to the claim. This cap applies whether the claim is in contract, tort, or otherwise.",
    s6LiabilityExclusions:
      'The liability cap does not apply to: (a) damages caused by gross negligence (grobe Fahrlässigkeit) or intent (Vorsatz) by the Agency; (b) personal injury or death; (c) any liability under the Produkthaftungsgesetz; (d) any other liability that cannot be limited under mandatory German law (§ 309 BGB).',
    s6Indemnification:
      'The Client warrants that all content, photographs, trademarks, and copy provided to the Agency are owned by the Client or properly licensed. The Client indemnifies the Agency against any third-party claims arising from Client-provided content.',

    s7Heading: '§ 7   Data Protection and Confidentiality',
    s7DataAvv:
      'Where the Agency processes personal data on behalf of the Client (e.g. contact-form submissions, analytics events), the Parties enter a separate data-processing agreement (Auftragsverarbeitungsvertrag, AVV) per Art. 28 GDPR. The current AVV template is available on request and forms part of this Agreement once signed.',
    s7Confidentiality:
      "Each Party treats the other's non-public business information as confidential. This survives termination by 24 months. The Agency may name the Client in its portfolio and reference the engagement publicly unless the Client opts out in writing.",

    s8Heading: '§ 8   Final Provisions',
    s8Jurisdiction:
      'Place of jurisdiction is Berlin, Germany. German law applies, excluding the UN Convention on Contracts for the International Sale of Goods (CISG).',
    s8WrittenForm:
      'Amendments to this Agreement require text form (§ 126b BGB), including any amendment to this written-form requirement. Side agreements have not been made.',
    s8Severability:
      'If any provision is held invalid, the remainder remains in force. Parties agree to replace any invalid provision with one that approximates the economic intent of the invalid provision (severability / salvatorische Klausel).',
    s8LanguageBindingDe:
      'This Agreement is executed in German. The German version is binding. An English translation is available for convenience only; in case of conflict, the German version prevails.',
    s8LanguageBindingEn:
      'This Agreement is executed in English. The English version is binding. A German translation is available for convenience only; in case of conflict, the English version prevails.',

    signaturesHeading: 'Signatures',
    signaturePlace: 'Place',
    signatureDateLabel: 'Date',
    signatureLineLabel: 'Signature',

    footerNote: 'Service Agreement v1.0 · Generated from agency template · Page',
  },
  de: {
    draftBanner:
      'ENTWURF — diese Vorlage wurde noch nicht von einem Rechtsanwalt geprüft. Vor Verwendung für den dritten Kunden oder bei Vertragswerten über € 5.000 sollte die deutsche Version von einer Berliner Anwaltskanzlei geprüft werden. Dieser Hinweis wird beim Druck ausgeblendet.',
    pageTitle: 'Dienstleistungsvertrag — ausfüllen, drucken, unterschreiben',
    pageSubtitle:
      'Mandantendaten unten eintragen. Die Ausgabe rendert sofort. Dann Cmd/Strg+P → als PDF speichern oder direkt A4 drucken. Zwei Seiten, B2B-Dienstleistungsvertrag mit den Standardbedingungen der Agentur.',
    printButton: 'Drucken / Als PDF speichern',
    printHint:
      'Tipp: im Druckdialog Ränder auf "Standard" stellen und Kopf-/Fußzeilen ausblenden für sauberes A4. Beide Seiten passen ohne Skalierung.',
    formIntro:
      'Bearbeitbare Felder. Standardwerte sind dort vorausgefüllt, wo sie sich nicht pro Mandat ändern.',

    partiesLabel: 'Mandantendaten',
    clientLegalForm: 'Rechtsform',
    clientBusinessName: 'Firmenname',
    clientRepresentative: 'Vertreten durch (vollständiger Name)',
    clientRepresentativeRole: 'Funktion',
    clientStreet: 'Straße + Hausnummer',
    clientPostalCode: 'PLZ',
    clientCity: 'Stadt',
    clientEmail: 'E-Mail',
    clientUstId: 'USt-IdNr',
    clientUstHint:
      'Leer lassen, wenn der Mandant Kleinunternehmer nach § 19 UStG ist und keine USt-IdNr hat.',

    servicesLabel: 'Leistungen',
    servicesHint:
      'Ankreuzen, was der Mandant bucht. Der Leistungsumfang darunter ist mit der Standard-Beschreibung der Agentur vorbelegt und für mandanten-spezifische Anpassungen bearbeitbar.',
    scopeEditableLabel: 'Leistungsumfang (pro Mandat bearbeitbar):',

    pricingLabel: 'Vergütung',
    buildFee: 'Einmalige Aufbaugebühr',
    retainerFee: 'Monatlicher Retainer',
    retainerFeeHint:
      'Wenn mehrere Leistungen Retainer haben, hier den Gesamtbetrag eintragen. Die Aufschlüsselung erscheint im Vertrag.',
    vatLabel: 'Umsatzsteuer-Regelung',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG) — keine Umsatzsteuer',
    vatRegular: 'Regelbesteuerung — 19 % MwSt auf jede Position',

    datesLabel: 'Termine',
    signatureDate: 'Unterzeichnungsdatum',
    startDate: 'Projektbeginn',
    goLiveDate: 'Geplanter Go-Live',
    goLiveHint:
      'Nur für Website-Leistung. SEO/GBP/Social haben keinen "Go-Live" — der Retainer beginnt am Projektbeginn.',

    contractTitleH1: 'Dienstleistungsvertrag',
    contractSubtitle: 'zwischen Agentur und Mandant — für die in § 2 aufgeführten Leistungen',

    agencyHeading: 'Agentur',
    clientHeading: 'Mandant',
    agencyAddress: '',
    representedBy: 'Vertreten durch',

    s1Heading: '§ 1   Vertragsgegenstand',
    s1Body:
      'Die Agentur erbringt für den Mandanten die in § 2 ausgewählten Leistungen. Der Mandant behält das Eigentum an allen Inhalten, der Domain und am hergestellten Werk. Die Agentur behält die Rechte an ihren wiederverwendbaren Design-Mustern, Komponenten und allgemeinem Agentur-Know-how. Beide Parteien sind Kaufleute im Sinne der §§ 14, 343 ff. HGB; verbraucherschützende Vorschriften finden keine Anwendung.',

    s2Heading: '§ 2   Leistungen',
    s2Intro: 'Folgende Leistungen sind Gegenstand dieses Vertrages:',
    s2NoServicesSelected:
      '⚠ Keine Leistung ausgewählt — bitte im Formular oben mindestens eine ankreuzen.',
    s2ScopeIntroLabel: 'Leistungsumfang:',

    s3Heading: '§ 3   Vergütung und Zahlungsbedingungen',
    s3BuildFeeLine:
      'Einmalige Aufbaugebühr: {eur} netto. Zahlbar in zwei Raten: 50 % binnen 14 Tagen nach Unterzeichnung; 50 % binnen 14 Tagen nach Projekt-Go-Live (nur Website) bzw. nach Beginn des ersten Leistungsmonats (SEO, GBP, Social).',
    s3BuildFeeSplit:
      'Die Agentur stellt jede Rate als separate Rechnung mit Zahlungsziel netto 14 Tage.',
    s3RetainerLine:
      'Monatlicher Retainer: {eur} netto pro Monat, abgerechnet zum 1. jedes Kalendermonats mit Zahlungsziel netto 14 Tage. Die erste Retainer-Rechnung wird zum Projektbeginn (§ 4) gestellt, unabhängig davon, ob die Leistungserbringung zu diesem Datum bereits aufgenommen wurde.',
    s3PaymentTerms:
      'Zahlungen erfolgen per SEPA-Überweisung auf das auf der jeweiligen Rechnung angegebene Konto der Agentur. Bei Zahlungsverzug fallen die gesetzlichen Verzugszinsen nach § 288 BGB sowie eine Mahnpauschale von € 40 nach § 288 Abs. 5 BGB an. Die Agentur ist berechtigt, ihre Leistungen auszusetzen, wenn eine Rechnung mehr als 14 Tage nach Fälligkeit unbezahlt bleibt, bis zur vollständigen Begleichung (siehe § 4 Kündigung).',
    s3PaymentDefault: 'Verzug: Zinsen nach § 288 BGB + € 40 Mahnpauschale.',
    s3VatKleinLine:
      'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. Sämtliche oben genannten Beträge sind endgültig.',
    s3VatRegularLine:
      'Nettosumme: {net}. USt 19 %: {vat}. Bruttosumme: {gross}. Die Umsatzsteuer wird auf jeder Rechnung separat ausgewiesen. Der Mandant bestätigt, zum Vorsteuerabzug berechtigt zu sein.',

    s4Heading: '§ 4   Laufzeit und Kündigung',
    s4Start: 'Dieser Vertrag beginnt am {date} („Vertragsbeginn").',
    s4MinimumTerm:
      'Sofern ein monatlicher Retainer nach § 3 vereinbart ist, beträgt die Mindestlaufzeit drei (3) Kalendermonate ab Vertragsbeginn. Nach Ablauf der Mindestlaufzeit verlängert sich der Retainer monatlich und kann von beiden Parteien mit einer Frist von dreißig (30) Tagen zum Ende eines jeden Kalendermonats in Textform gekündigt werden.',
    s4Notice:
      'Die Kündigung erfolgt in Textform (§ 126b BGB) — E-Mail genügt. Maßgeblich ist die auf der Titelseite dieses Vertrages genannte E-Mail-Adresse.',
    s4ImmediateTermination:
      'Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen, wenn (a) die andere Partei eine wesentliche Pflicht verletzt und diese trotz Aufforderung mit einer Frist von 14 Tagen nicht behebt, oder (b) der Mandant mit einer Rechnungsforderung mehr als 14 Tage in Verzug ist. Während der Heilungsfrist darf die Agentur ihre Leistungen aussetzen.',
    s4HandoverObligation:
      'Nach Vertragsende übergibt die Agentur dem Mandanten: Domain-Inhaberschaft, GitHub-Repo-Inhaberschaft, Vercel-Projekt-Übergabe, GBP-Listing-Übergabe, Search-Console-Verifizierung. Übergabepflichten gelten 30 Tage über das Vertragsende hinaus.',

    s5Heading: '§ 5   Geistiges Eigentum',
    s5ClientOwns:
      'Der Mandant ist Inhaber von: (a) der bereitgestellten Website und allen vom Mandanten beigesteuerten Inhalten; (b) dem für den Mandanten angelegten GitHub-Repository; (c) der registrierten Domain; (d) dem Google-Business-Profile-Eintrag; (e) allen vom Mandanten zur Verfügung gestellten Fotos, Texten oder Logos. Der Mandant erhält eine zeitlich, räumlich und inhaltlich unbeschränkte, übertragbare Lizenz an dem hergestellten Werk.',
    s5AgencyKeeps:
      'Die Agentur behält alle Rechte an ihren wiederverwendbaren Design-Mustern, ihrer Komponenten-Bibliothek, ihren Code-Scaffolds, ihrem Dokumentationssystem und allem allgemeinen Agentur-Know-how, das nicht spezifisch für das Geschäft des Mandanten ist. Der Mandant erwirbt keine Rechte an diesen zugrundeliegenden Mustern; die Agentur darf ähnliche Werke für andere Mandanten in gleichen oder anderen Branchen erstellen.',

    s6Heading: '§ 6   Haftung',
    s6LiabilityCap:
      'Die Gesamthaftung der Agentur aus diesem Vertrag ist auf die Summe der Gebühren begrenzt, die der Mandant in den zwölf (12) Monaten vor dem haftungsbegründenden Ereignis tatsächlich an die Agentur gezahlt hat. Diese Begrenzung gilt für vertragliche, deliktische und jede andere Art von Anspruch.',
    s6LiabilityExclusions:
      'Die Haftungsbegrenzung gilt nicht für: (a) Schäden, die auf Vorsatz oder grober Fahrlässigkeit der Agentur beruhen; (b) Verletzung von Leben, Körper oder Gesundheit; (c) Ansprüche aus dem Produkthaftungsgesetz; (d) sonstige zwingende gesetzliche Haftungstatbestände, die nicht abdingbar sind (§ 309 BGB).',
    s6Indemnification:
      'Der Mandant versichert, dass alle der Agentur überlassenen Inhalte, Fotos, Marken und Texte in seinem Eigentum stehen oder ordnungsgemäß lizenziert sind. Der Mandant stellt die Agentur von Ansprüchen Dritter wegen mandantenseitig bereitgestellter Inhalte frei.',

    s7Heading: '§ 7   Datenschutz und Vertraulichkeit',
    s7DataAvv:
      'Soweit die Agentur personenbezogene Daten im Auftrag des Mandanten verarbeitet (z. B. Kontaktformular-Einsendungen, Analytics-Events), schließen die Parteien einen separaten Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO. Die aktuelle AVV-Vorlage ist auf Anfrage erhältlich und wird mit Unterzeichnung Bestandteil dieses Vertrages.',
    s7Confidentiality:
      'Jede Partei behandelt nicht-öffentliche Geschäftsinformationen der anderen vertraulich. Diese Pflicht gilt 24 Monate über das Vertragsende hinaus. Die Agentur darf den Mandanten in ihrem Portfolio nennen und das Mandat öffentlich referenzieren, sofern der Mandant dem nicht in Textform widerspricht.',

    s8Heading: '§ 8   Schlussbestimmungen',
    s8Jurisdiction:
      'Gerichtsstand ist Berlin, Deutschland. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).',
    s8WrittenForm:
      'Änderungen dieses Vertrages bedürfen der Textform (§ 126b BGB), einschließlich Änderungen an dieser Textformklausel selbst. Nebenabreden bestehen nicht.',
    s8Severability:
      'Sollte eine Bestimmung dieses Vertrages unwirksam sein, bleiben die übrigen Bestimmungen wirksam. Die Parteien verpflichten sich, eine unwirksame Bestimmung durch eine wirksame zu ersetzen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung möglichst nahekommt (salvatorische Klausel).',
    s8LanguageBindingDe:
      'Dieser Vertrag wird in deutscher Sprache geschlossen. Die deutsche Fassung ist maßgeblich. Eine englische Übersetzung steht aus Gefälligkeit zur Verfügung; im Konfliktfall geht die deutsche Fassung vor.',
    s8LanguageBindingEn:
      'Dieser Vertrag wird in englischer Sprache geschlossen. Die englische Fassung ist maßgeblich. Eine deutsche Übersetzung steht aus Gefälligkeit zur Verfügung; im Konfliktfall geht die englische Fassung vor.',

    signaturesHeading: 'Unterschriften',
    signaturePlace: 'Ort',
    signatureDateLabel: 'Datum',
    signatureLineLabel: 'Unterschrift',

    footerNote: 'Dienstleistungsvertrag v1.0 · Erstellt aus Agentur-Vorlage · Seite',
  },
};
