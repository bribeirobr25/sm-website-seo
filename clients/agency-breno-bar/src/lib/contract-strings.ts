/**
 * Contract template strings, locale-aware service scopes + clause text.
 *
 * Used by `src/pages/contract.astro` (EN) + `src/pages/[locale]/contract.astro` (DE).
 *
 * **LEGAL CAVEAT, NOT lawyer-reviewed.** v2.0-DRAFT, reworked 2026-06-06 by an
 * LLM for the agency's monthly-subscription model ("Website-Abo"): § 3 = monthly
 * fee + optional one-time buy-out (no build fee); § 4 = cancellation takes the
 * site offline (only content/data/domain handed over, not the build); § 5 = the
 * website is LICENSED for the subscription term, not transferred. The page renders
 * `draftBanner` as a printed red warning. Before ANY use, a Berlin-licensed
 * Rechtsanwalt must finalize the German text: legal classification (Dienst-/
 * Mietvertrag), § 307 BGB AGB-Kontrolle, Widerrufsrecht for consumers, the § 5
 * licence + buy-out mechanics, and the AVV (Art. 28 GDPR) cross-reference.
 */

export type LocaleEnDe = 'en' | 'de';

export interface ServiceScope {
  slug: 'website' | 'seo' | 'ecommerce' | 'ai';
  name: string;
  defaultScope: string;
}

export const SERVICE_SCOPES: Record<LocaleEnDe, ServiceScope[]> = {
  en: [
    {
      slug: 'website',
      name: 'Website subscription',
      defaultScope:
        "Multi-page marketing website on Astro 6 or Next.js, built, hosted, and maintained by the Agency as part of the monthly subscription. Up to 12 pages. Multilingual (DE + EN by default; additional locales priced separately). The domain is registered in the Client's name. The website is deployed on the Agency's infrastructure; its source code and design remain the Agency's intellectual property and are licensed to the Client for the duration of the subscription (see § 5; an optional one-time buy-out is available). Includes cookie banner, privacy policy, and imprint pages drafted to the Client's business. WCAG 2.2 AA, mobile-first, Lighthouse > 90 mobile/desktop at launch.",
    },
    {
      slug: 'seo',
      name: 'SEO and Local Listing',
      defaultScope:
        "On-page SEO + schema.org markup + Google Search Console setup under the Client's account, plus local listings on Google Business Profile, Apple Maps, Bing Places and the relevant directories so the Client is found first. Initial audit with prioritised fix list. The monthly subscription includes: monthly report (impressions, position, conversions) with concrete next-step recommendations; quarterly keyword review; technical-SEO maintenance; listing accuracy + review monitoring. No backlink purchases. No black-hat tactics.",
    },
    {
      slug: 'ecommerce',
      name: 'E-Commerce and Business Email',
      defaultScope:
        "An online store selling the Client's products or services with secure checkout (Stripe or equivalent), product/catalogue management, and order notifications. Professional email on the Client's own domain (mailbox setup + SPF/DKIM/DMARC). The monthly subscription includes hosting, security updates, and checkout/email maintenance. Payment-processor fees, transaction fees, and mailbox licence costs are billed to the Client at cost or paid directly by the Client.",
    },
    {
      slug: 'ai',
      name: 'AI Solutions, Booking System and More',
      defaultScope:
        "AI and automation tools fitted to the Client's business: website chatbot, booking/appointment system, and task automation. Scope agreed per use case before build. The monthly subscription includes hosting, monitoring, and maintenance of the agreed tools. Third-party AI/API usage fees above the included allowance are billed to the Client at cost.",
    },
  ],
  de: [
    {
      slug: 'website',
      name: 'Website-Abo',
      defaultScope:
        'Mehrseitige Marketing-Website auf Astro 6 oder Next.js, von der Agentur im Rahmen des Monats-Abos erstellt, gehostet und gepflegt. Bis zu 12 Seiten. Mehrsprachig (DE + EN als Standard; weitere Sprachen separat berechnet). Die Domain wird auf den Namen des Auftraggebers registriert. Die Website wird auf der Infrastruktur der Agentur betrieben; Quellcode und Design bleiben geistiges Eigentum der Agentur und werden dem Auftraggeber für die Dauer des Abos lizenziert (siehe § 5; optionale einmalige Ablöse verfügbar). Inklusive Cookie-Banner, Datenschutzerklärung und Impressum, jeweils auf das Unternehmen des Auftraggebers angepasst. WCAG 2.2 AA, Mobile-First, Lighthouse > 90 Mobile/Desktop bei Launch.',
    },
    {
      slug: 'seo',
      name: 'SEO und lokale Einträge',
      defaultScope:
        'On-Page-SEO + Schema.org-Markup + Einrichtung der Google Search Console unter dem Konto des Auftraggebers, dazu lokale Einträge bei Google Unternehmensprofil, Apple Maps, Bing Places und den relevanten Verzeichnissen, damit der Auftraggeber zuerst gefunden wird. Initial-Audit mit priorisierter Fix-Liste. Das monatliche Abo enthält: monatlichen Report (Impressionen, Position, Conversions) mit konkreten nächsten Schritten; quartalsweise Keyword-Review; technische SEO-Pflege; Pflege der Einträge + Bewertungs-Monitoring. Keine Backlink-Käufe. Keine Black-Hat-Taktiken.',
    },
    {
      slug: 'ecommerce',
      name: 'Online-Shop und Business-E-Mail',
      defaultScope:
        'Ein Online-Shop, der die Produkte oder Leistungen des Auftraggebers mit sicherem Checkout (Stripe oder gleichwertig) verkauft, inkl. Produkt-/Katalog-Verwaltung und Bestellbenachrichtigungen. Professionelle E-Mail auf der eigenen Domain des Auftraggebers (Postfach-Einrichtung + SPF/DKIM/DMARC). Das monatliche Abo enthält Hosting, Sicherheitsupdates sowie Checkout- und E-Mail-Pflege. Gebühren des Zahlungsdienstleisters, Transaktionsgebühren und Postfach-Lizenzkosten werden dem Auftraggeber zum Selbstkostenpreis berechnet oder direkt vom Auftraggeber getragen.',
    },
    {
      slug: 'ai',
      name: 'KI-Lösungen, Buchungssystem und mehr',
      defaultScope:
        'KI- und Automatisierungstools, passend zum Geschäft des Auftraggebers: Website-Chatbot, Buchungs-/Terminsystem und Aufgaben-Automatisierung. Umfang je Anwendungsfall vor dem Bau vereinbart. Das monatliche Abo enthält Hosting, Monitoring und Pflege der vereinbarten Tools. Drittanbieter-KI-/API-Gebühren über dem enthaltenen Kontingent werden dem Auftraggeber zum Selbstkostenpreis berechnet.',
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
  /** Template, replace `{eur}` with the formatted amount at render time. */
  s3BuildFeeLine: string;
  s3BuildFeeSplit: string;
  /** Template, replace `{eur}` with the formatted retainer amount. */
  s3RetainerLine: string;
  s3PaymentTerms: string;
  s3PaymentDefault: string;
  s3VatKleinLine: string;
  /** Template, replace `{net}` / `{vat}` / `{gross}` with formatted amounts. */
  s3VatRegularLine: string;

  s4Heading: string;
  /** Template, replace `{date}` with the formatted start date. */
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
      '⚠ DRAFT, NOT LAWYER-REVIEWED. Reworked 2026-06-06 for the agency’s monthly-subscription model ("Website-Abo", €219/€390/€570/mo, no setup) by an automated tool, not a Rechtsanwalt. The subscription clauses, § 3 (monthly fee + optional one-time buy-out), § 4 (cancellation → site offline), § 5 (the website is LICENSED for the subscription term, not transferred), must be reviewed and finalised by a Berlin-licensed lawyer before any signing: legal classification (Dienst-/Mietvertrag), § 307 BGB AGB-Kontrolle, Widerrufsrecht where the Client is a consumer, the IP-licence + buy-out mechanics, and the AVV cross-reference. Do not sign as-is. (This DRAFT warning is shown on screen and on every printed copy.)',
    pageTitle: 'Website Subscription Agreement, fill, print, sign',
    pageSubtitle:
      "Type in the client details below. Output renders inline. Then Cmd/Ctrl+P → Save as PDF, or print A4 directly. A B2B website-subscription agreement (Website-Abo) with the agency's standard terms.",
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
    buildFee: 'Optional one-time buy-out fee (Ablöse)',
    retainerFee: 'Monthly subscription fee',
    retainerFeeHint:
      'The plan price (e.g. €219 / €390 / €570). Covers the § 2 services plus hosting, maintenance, updates, and support. Leave the buy-out blank unless a buy-out is agreed.',
    vatLabel: 'VAT handling',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG), no VAT charged',
    vatRegular: 'Regular VAT, 19 % MwSt added to every line',

    datesLabel: 'Dates',
    signatureDate: 'Signature date',
    startDate: 'Project start',
    goLiveDate: 'Expected go-live',
    goLiveHint:
      'For Website service only. SEO/GBP/Social do not have a "go-live", the retainer starts on the start date.',

    contractTitleH1: 'Website Subscription Agreement',
    contractSubtitle:
      'between Agency and Client, a monthly subscription for the services listed in § 2',

    agencyHeading: 'Agency',
    clientHeading: 'Client',
    agencyAddress: '', // composed at render
    representedBy: 'Represented by',

    s1Heading: '§ 1   Subject of the Agreement',
    s1Body:
      'The Agency builds, hosts, maintains, and supports the website and any further services selected in § 2 for the Client, as an ongoing monthly subscription (Dauerschuldverhältnis). The Client owns its content, its data, and its domain. The website itself, its source code, design, and hosting, is provided as a licensed service for the duration of the subscription and is NOT transferred to the Client on a one-time basis (see § 5; an optional one-time buy-out is available under § 3). The Agency retains the rights to its reusable design patterns, components, and accumulated know-how. The Parties act as merchants under §§ 14, 343 ff. HGB; where the Client is a consumer (§ 13 BGB), mandatory consumer-protection rules, including the right of withdrawal (Widerrufsrecht), apply and prevail. [Counsel to confirm the legal classification and the consumer carve-outs.]',

    s2Heading: '§ 2   Services',
    s2Intro: 'The following services are included in this Agreement:',
    s2NoServicesSelected:
      '⚠ No services selected, return to the form and tick at least one service.',
    s2ScopeIntroLabel: 'Scope:',

    s3Heading: '§ 3   Compensation and Payment Terms',
    s3BuildFeeLine:
      'Optional one-time buy-out (Ablöse): {eur} net. No buy-out fee is owed unless separately agreed. If the Client wishes to take over the website to host and run it independently, then upon payment of the buy-out fee the Agency grants the Client the rights to the deployed work product set out in § 5.',
    s3BuildFeeSplit:
      'Any agreed buy-out fee is invoiced separately and due net 14 days; until it is paid in full, the rights under § 5 do not pass.',
    s3RetainerLine:
      'Monthly subscription fee: {eur} net per month, billed in advance on the 1st of each calendar month and due net 14 days by SEPA transfer. The fee covers the § 2 services plus hosting, maintenance, security updates, and support for as long as the subscription runs. There is no separate set-up or build fee.',
    s3PaymentTerms:
      "Payment is due by SEPA bank transfer to the Agency's account stated on each invoice. Late payment triggers statutory interest under § 288 BGB plus a € 40 reminder fee per § 288 (5) BGB. The Agency may suspend services if any invoice remains unpaid for 14 days after due date, until paid in full (§ 4 Termination).",
    s3PaymentDefault: 'Late payment: § 288 BGB statutory interest + € 40 reminder fee.',
    s3VatKleinLine:
      'Pursuant to § 19 UStG, the Agency does not charge VAT (Umsatzsteuer). All amounts above are final.',
    s3VatRegularLine:
      'Per month: net {net} + 19 % VAT {vat} = {gross} gross. VAT is shown separately on each monthly invoice; any one-time buy-out (§ 3) is invoiced with VAT separately. The Client confirms it is entitled to deduct input VAT (Vorsteuerabzug).',

    s4Heading: '§ 4   Term and Termination',
    s4Start: 'This Agreement begins on {date} ("Start Date").',
    s4MinimumTerm:
      "The subscription runs on a monthly basis with no minimum term. Either Party may terminate it in text form (§ 126b BGB) with fourteen (14) days' notice to the end of any calendar month. [Counsel to confirm whether a minimum term or a different notice period is desired.]",
    s4Notice:
      'Notice of termination must be delivered in text form (§ 126b BGB), email is sufficient. The address for notice is the email on the cover page of this Agreement.',
    s4ImmediateTermination:
      'Either Party may terminate this Agreement for cause without notice if (a) the other Party is in material breach and fails to cure within 14 days of written demand, or (b) the Client is more than 14 days late on any invoice. The Agency may suspend services during any cure period.',
    s4HandoverObligation:
      "Upon termination for any reason, the Agency provides the Client within thirty (30) days: (a) a full export of the Client's content and data, and (b) transfer or release of the domain, which is registered in the Client's name. The Client's licence to use the website (§ 5) then ends and the managed website is taken offline. The Agency does NOT transfer the source code, design, hosting, or any repository unless the Client has paid the one-time buy-out (§ 3, § 5). Where the Client subscribed to SEO or Google Business Profile, the Agency also releases the Search Console / Google Business Profile access held in the Client's name.",

    s5Heading: '§ 5   Intellectual Property',
    s5ClientOwns:
      "The Client owns, and may export at any time: (a) all content, text, photographs, and logos the Client provides; (b) the Client's own data (e.g. contact-form submissions); (c) the domain, registered in the Client's name; (d) where applicable, the Google Business Profile listing held in the Client's name. For the duration of the subscription the Agency grants the Client a non-exclusive, non-transferable licence to use the deployed website. This licence ends automatically on termination. The deployed website, its source code, design, and templates, is and remains the Agency's intellectual property and is NOT transferred to the Client, unless the Client purchases the one-time buy-out under § 3, upon which the Agency grants the Client a perpetual, worldwide licence to, or, as separately agreed, assignment of, the deployed work product.",
    s5AgencyKeeps:
      "The Agency retains all rights to its reusable design patterns, component library, code scaffolds, documentation system, and any general agency know-how not specific to the Client's business. The website delivered under the subscription is licensed, not sold; absent a buy-out (§ 3), title to the underlying code and design does not pass to the Client. The Agency may continue to build similar work for other clients in similar or different verticals.",

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

    footerNote: 'Website Subscription Agreement v2.0-DRAFT (not lawyer-reviewed) · Page',
  },
  de: {
    draftBanner:
      '⚠ ENTWURF, NICHT ANWALTLICH GEPRÜFT. Am 06.06.2026 für das Monats-Abo-Modell der Agentur überarbeitet ("Website-Abo", 219/390/570 €/Monat, keine Einrichtung), durch ein automatisiertes Tool, nicht durch einen Rechtsanwalt. Die Abo-Klauseln, § 3 (Monatsgebühr + optionale Ablöse), § 4 (Kündigung → Seite offline), § 5 (die Website wird für die Abo-Laufzeit LIZENZIERT, nicht übertragen), müssen vor jeder Unterzeichnung von einer Berliner Anwaltskanzlei geprüft und finalisiert werden: rechtliche Einordnung (Dienst-/Mietvertrag), AGB-Kontrolle nach § 307 BGB, Widerrufsrecht bei Verbrauchern, die Lizenz- und Ablöse-Mechanik sowie der AVV-Verweis. Nicht in dieser Form unterzeichnen. (Dieser ENTWURF-Hinweis erscheint am Bildschirm und auf jeder gedruckten Kopie.)',
    pageTitle: 'Website-Abo-Vertrag, ausfüllen, drucken, unterschreiben',
    pageSubtitle:
      'Mandantendaten unten eintragen. Die Ausgabe rendert sofort. Dann Cmd/Strg+P → als PDF speichern oder direkt A4 drucken. Ein B2B-Website-Abo-Vertrag mit den Standardbedingungen der Agentur.',
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
    buildFee: 'Optionale einmalige Ablöse',
    retainerFee: 'Monatliche Abo-Gebühr',
    retainerFeeHint:
      'Der Plan-Preis (z. B. 219 / 390 / 570 €). Deckt die Leistungen aus § 2 plus Hosting, Pflege, Updates und Support. Ablöse leer lassen, sofern keine Ablöse vereinbart ist.',
    vatLabel: 'Umsatzsteuer-Regelung',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG), keine Umsatzsteuer',
    vatRegular: 'Regelbesteuerung, 19 % MwSt auf jede Position',

    datesLabel: 'Termine',
    signatureDate: 'Unterzeichnungsdatum',
    startDate: 'Projektbeginn',
    goLiveDate: 'Geplanter Go-Live',
    goLiveHint:
      'Nur für Website-Leistung. SEO/GBP/Social haben keinen "Go-Live", der Retainer beginnt am Projektbeginn.',

    contractTitleH1: 'Website-Abo-Vertrag',
    contractSubtitle:
      'zwischen Agentur und Mandant, ein Monats-Abo für die in § 2 aufgeführten Leistungen',

    agencyHeading: 'Agentur',
    clientHeading: 'Mandant',
    agencyAddress: '',
    representedBy: 'Vertreten durch',

    s1Heading: '§ 1   Vertragsgegenstand',
    s1Body:
      'Die Agentur erstellt, hostet, pflegt und betreut die Website sowie etwaige weitere in § 2 ausgewählte Leistungen für den Mandanten als laufendes Monats-Abo (Dauerschuldverhältnis). Dem Mandanten gehören seine Inhalte, seine Daten und seine Domain. Die Website selbst, Quellcode, Design und Hosting, wird als lizenzierte Leistung für die Dauer des Abos bereitgestellt und NICHT einmalig auf den Mandanten übertragen (siehe § 5; eine optionale einmalige Ablöse ist nach § 3 verfügbar). Die Agentur behält die Rechte an ihren wiederverwendbaren Design-Mustern, Komponenten und allgemeinem Know-how. Die Parteien handeln als Kaufleute im Sinne der §§ 14, 343 ff. HGB; soweit der Mandant Verbraucher (§ 13 BGB) ist, gelten zwingende verbraucherschützende Vorschriften, einschließlich des Widerrufsrechts, und gehen vor. [Einordnung und Verbraucher-Ausnahmen anwaltlich zu bestätigen.]',

    s2Heading: '§ 2   Leistungen',
    s2Intro: 'Folgende Leistungen sind Gegenstand dieses Vertrages:',
    s2NoServicesSelected:
      '⚠ Keine Leistung ausgewählt, bitte im Formular oben mindestens eine ankreuzen.',
    s2ScopeIntroLabel: 'Leistungsumfang:',

    s3Heading: '§ 3   Vergütung und Zahlungsbedingungen',
    s3BuildFeeLine:
      'Optionale einmalige Ablöse: {eur} netto. Eine Ablöse ist nur geschuldet, wenn sie gesondert vereinbart wird. Möchte der Mandant die Website übernehmen, um sie eigenständig zu betreiben, räumt die Agentur dem Mandanten nach Zahlung der Ablöse die in § 5 genannten Rechte am hergestellten Werk ein.',
    s3BuildFeeSplit:
      'Eine vereinbarte Ablöse wird gesondert in Rechnung gestellt, zahlbar netto 14 Tage; bis zur vollständigen Zahlung gehen die Rechte nach § 5 nicht über.',
    s3RetainerLine:
      'Monatliche Abo-Gebühr: {eur} netto pro Monat, im Voraus zum 1. jedes Kalendermonats abgerechnet, zahlbar netto 14 Tage per SEPA-Überweisung. Die Gebühr deckt die Leistungen aus § 2 sowie Hosting, Pflege, Sicherheits-Updates und Support für die gesamte Laufzeit des Abos. Es fällt keine gesonderte Einrichtungs- oder Aufbaugebühr an.',
    s3PaymentTerms:
      'Zahlungen erfolgen per SEPA-Überweisung auf das auf der jeweiligen Rechnung angegebene Konto der Agentur. Bei Zahlungsverzug fallen die gesetzlichen Verzugszinsen nach § 288 BGB sowie eine Mahnpauschale von € 40 nach § 288 Abs. 5 BGB an. Die Agentur ist berechtigt, ihre Leistungen auszusetzen, wenn eine Rechnung mehr als 14 Tage nach Fälligkeit unbezahlt bleibt, bis zur vollständigen Begleichung (siehe § 4 Kündigung).',
    s3PaymentDefault: 'Verzug: Zinsen nach § 288 BGB + € 40 Mahnpauschale.',
    s3VatKleinLine:
      'Gemäß § 19 UStG wird keine Umsatzsteuer berechnet. Sämtliche oben genannten Beträge sind endgültig.',
    s3VatRegularLine:
      'Pro Monat: netto {net} + 19 % USt {vat} = {gross} brutto. Die USt wird auf jeder monatlichen Rechnung separat ausgewiesen; eine etwaige einmalige Ablöse (§ 3) wird mit USt gesondert berechnet. Der Mandant bestätigt, zum Vorsteuerabzug berechtigt zu sein.',

    s4Heading: '§ 4   Laufzeit und Kündigung',
    s4Start: 'Dieser Vertrag beginnt am {date} („Vertragsbeginn").',
    s4MinimumTerm:
      'Das Abo läuft monatlich ohne Mindestlaufzeit. Beide Parteien können es in Textform (§ 126b BGB) mit einer Frist von vierzehn (14) Tagen zum Ende eines jeden Kalendermonats kündigen. [Ob eine Mindestlaufzeit oder eine andere Frist gewünscht ist, anwaltlich zu bestätigen.]',
    s4Notice:
      'Die Kündigung erfolgt in Textform (§ 126b BGB), E-Mail genügt. Maßgeblich ist die auf der Titelseite dieses Vertrages genannte E-Mail-Adresse.',
    s4ImmediateTermination:
      'Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen, wenn (a) die andere Partei eine wesentliche Pflicht verletzt und diese trotz Aufforderung mit einer Frist von 14 Tagen nicht behebt, oder (b) der Mandant mit einer Rechnungsforderung mehr als 14 Tage in Verzug ist. Während der Heilungsfrist darf die Agentur ihre Leistungen aussetzen.',
    s4HandoverObligation:
      'Nach Vertragsende stellt die Agentur dem Mandanten binnen dreißig (30) Tagen bereit: (a) einen vollständigen Export der Inhalte und Daten des Mandanten sowie (b) die Übertragung bzw. Freigabe der Domain, die auf den Namen des Mandanten registriert ist. Das Nutzungsrecht des Mandanten an der Website (§ 5) endet sodann und die betreute Website geht offline. Die Agentur überträgt Quellcode, Design, Hosting oder ein Repository NICHT, es sei denn, der Mandant hat die einmalige Ablöse (§ 3, § 5) gezahlt. Hat der Mandant SEO oder Google Business Profile abonniert, gibt die Agentur zusätzlich die auf den Namen des Mandanten geführten Search-Console-/Google-Business-Profile-Zugänge frei.',

    s5Heading: '§ 5   Geistiges Eigentum',
    s5ClientOwns:
      'Dem Mandanten gehören, jederzeit exportierbar: (a) alle von ihm bereitgestellten Inhalte, Texte, Fotos und Logos; (b) die eigenen Daten des Mandanten (z. B. Kontaktformular-Einsendungen); (c) die auf seinen Namen registrierte Domain; (d) ggf. der auf seinen Namen geführte Google-Business-Profile-Eintrag. Für die Dauer des Abos räumt die Agentur dem Mandanten ein einfaches, nicht übertragbares Nutzungsrecht an der bereitgestellten Website ein. Dieses Nutzungsrecht endet automatisch mit Vertragsende. Die bereitgestellte Website, Quellcode, Design und Templates, ist und bleibt geistiges Eigentum der Agentur und wird NICHT auf den Mandanten übertragen, es sei denn, der Mandant erwirbt die einmalige Ablöse nach § 3; in diesem Fall räumt die Agentur dem Mandanten ein unbeschränktes, räumlich unbegrenztes Nutzungsrecht am hergestellten Werk ein, bzw., sofern gesondert vereinbart, überträgt sie es.',
    s5AgencyKeeps:
      'Die Agentur behält alle Rechte an ihren wiederverwendbaren Design-Mustern, ihrer Komponenten-Bibliothek, ihren Code-Scaffolds, ihrem Dokumentationssystem und allem allgemeinen Agentur-Know-how, das nicht spezifisch für das Geschäft des Mandanten ist. Die im Abo bereitgestellte Website wird lizenziert, nicht verkauft; ohne Ablöse (§ 3) geht das Eigentum an zugrundeliegendem Code und Design nicht auf den Mandanten über. Die Agentur darf ähnliche Werke für andere Mandanten in gleichen oder anderen Branchen erstellen.',

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

    footerNote: 'Website-Abo-Vertrag v2.0-ENTWURF (nicht anwaltlich geprüft) · Seite',
  },
};
