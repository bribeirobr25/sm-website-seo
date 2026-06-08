/**
 * Contract template strings, locale-aware service scopes + clause text.
 *
 * Used by `src/pages/contract.astro` (EN) + `src/pages/de/contract.astro` (DE).
 *
 * **LEGAL CAVEAT, NOT lawyer-reviewed.** Monthly-subscription model ("Website-Abo"):
 * § 3 = monthly fee + optional one-time buy-out (no build fee); § 4 = cancellation
 * takes the site offline (only content/data/domain handed over, not the build); § 5
 * = the website is LICENSED for the subscription term, not transferred. Rewritten in
 * plain language 2026-06-08 (statutes kept, moved into parentheses) plus a top-of-
 * document "In plain words" summary; legal substance unchanged. The page renders
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

  /** Plain-language summary shown above the formal clauses. */
  plainSummaryLabel: string;
  plainSummary: string;

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
      '⚠ Draft, not yet lawyer-reviewed. This subscription agreement was prepared by the agency and should be checked by a Berlin-licensed lawyer before signing. Until then, please do not treat it as final. (This note prints on every copy.)',
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

    plainSummaryLabel: 'In plain words',
    plainSummary:
      'You pay one monthly fee; we design, build, host, and look after your website and the services in § 2. You own your content, your data, and your domain. Either of us can stop with 14 days’ notice to the end of a month. If you ever want to own the website outright, there is an optional one-time buy-out (§ 3). The formal terms below say all of this precisely; if anything reads unclear, ask before signing.',

    s1Heading: '§ 1   Subject of the Agreement',
    s1Body:
      'The Agency builds, hosts, maintains, and supports the Client’s website, plus any other services selected in § 2, as an ongoing monthly subscription. The Client owns its content, data, and domain. The website itself, its code, design, and hosting, is licensed for as long as the subscription runs and is not transferred to the Client (see § 5; an optional one-time buy-out is in § 3). The Agency keeps the rights to its reusable design patterns and know-how. If the Client is a consumer (§ 13 BGB), statutory consumer rights, including the right of withdrawal, apply and prevail.',

    s2Heading: '§ 2   Services',
    s2Intro: 'The Client is hiring the Agency for:',
    s2NoServicesSelected:
      '⚠ No services selected, return to the form and tick at least one service.',
    s2ScopeIntroLabel: 'Scope:',

    s3Heading: '§ 3   Compensation and Payment Terms',
    s3BuildFeeLine:
      'Optional one-time buy-out: {eur} net. None is owed unless separately agreed. Once it is paid, the Agency transfers to the Client the rights to the delivered website set out in § 5.',
    s3BuildFeeSplit:
      'Any buy-out is invoiced separately, due within 14 days; the § 5 rights pass only once it is paid in full.',
    s3RetainerLine:
      'Monthly fee: {eur} net, billed in advance on the 1st of each month, due within 14 days by SEPA transfer. It covers the § 2 services plus hosting, maintenance, security updates, and support, for as long as the subscription runs. There is no separate set-up or build fee.',
    s3PaymentTerms:
      'Late payment carries statutory interest (§ 288 BGB) plus a € 40 fee. The Agency may pause services on any invoice unpaid 14 days past its due date, until it is settled (see § 4).',
    s3PaymentDefault: 'Late payment: statutory interest (§ 288 BGB) + € 40 fee.',
    s3VatKleinLine:
      'As a small business under § 19 UStG, the Agency charges no VAT. The amounts above are final.',
    s3VatRegularLine:
      'Per month: {net} net + 19 % VAT {vat} = {gross} gross. VAT is shown separately on each invoice; any buy-out (§ 3) is invoiced with VAT separately.',

    s4Heading: '§ 4   Term and Termination',
    s4Start: 'This Agreement starts on {date}.',
    s4MinimumTerm:
      'The subscription is monthly, with no minimum term. Either Party may cancel in text form (§ 126b BGB) with 14 days’ notice to the end of any calendar month.',
    s4Notice:
      'Notice must be in text form (§ 126b BGB); email is enough, sent to the email on the cover page.',
    s4ImmediateTermination:
      'Either Party may end the Agreement immediately for good cause, for example an uncured material breach after 14 days’ written notice, or an invoice more than 14 days overdue. The Agency may pause services during any cure period.',
    s4HandoverObligation:
      'When the Agreement ends, within 30 days the Agency hands over a full export of the Client’s content and data and releases the domain (registered in the Client’s name). The Client’s licence to use the website (§ 5) then ends and the website goes offline. Code, design, and hosting are not transferred unless the one-time buy-out (§ 3) has been paid. Where SEO or Google Business Profile were included, the Agency also releases the related access held in the Client’s name.',

    s5Heading: '§ 5   Intellectual Property',
    s5ClientOwns:
      'The Client owns, and may export at any time: its content, text, photos, and logos; its own data (e.g. contact-form submissions); its domain, registered in the Client’s name; and, where set up, its Google Business Profile listing. While the subscription runs, the Client has a non-exclusive, non-transferable licence to use the website the Agency builds and hosts; this licence ends when the Agreement ends. The website’s code, design, and templates stay the Agency’s property and are not transferred, unless the Client pays the one-time buy-out (§ 3), which grants the Client a perpetual, worldwide licence to (or, if separately agreed, assignment of) the delivered website.',
    s5AgencyKeeps:
      'The Agency keeps all rights to its reusable patterns, component library, and general know-how not specific to the Client’s business, and may build similar work for other clients. Absent a buy-out (§ 3), the website is licensed, not sold.',

    s6Heading: '§ 6   Liability',
    s6LiabilityCap:
      'The Agency’s total liability under this Agreement is capped at the fees the Client actually paid in the 12 months before the event giving rise to the claim, whether the claim is in contract, tort, or otherwise.',
    s6LiabilityExclusions:
      'This cap does not apply to intent or gross negligence by the Agency, personal injury or death, liability under the Produkthaftungsgesetz, or anything that cannot be limited under mandatory German law (§ 309 BGB).',
    s6Indemnification:
      'The Client confirms it owns or is properly licensed to use all content, photos, trademarks, and copy it provides, and covers the Agency against third-party claims arising from that content.',

    s7Heading: '§ 7   Data Protection and Confidentiality',
    s7DataAvv:
      'Where the Agency processes personal data for the Client (e.g. contact-form submissions, analytics events), the Parties sign a separate data-processing agreement (Auftragsverarbeitungsvertrag, AVV) under Art. 28 GDPR, available on request, which becomes part of this Agreement once signed.',
    s7Confidentiality:
      'Each Party keeps the other’s non-public business information confidential, for 24 months after the Agreement ends. The Agency may name the Client in its portfolio unless the Client opts out in writing.',

    s8Heading: '§ 8   Final Provisions',
    s8Jurisdiction:
      'Place of jurisdiction is Berlin. German law applies, excluding the UN Sales Convention (CISG).',
    s8WrittenForm:
      'Changes to this Agreement need text form (§ 126b BGB). There are no side agreements.',
    s8Severability:
      'If a clause is invalid, the rest stays in force and is replaced by one closest to its intent (salvatorische Klausel).',
    s8LanguageBindingDe:
      'This Agreement is made in German; the German version is binding. Any English translation is for convenience only.',
    s8LanguageBindingEn:
      'This Agreement is made in English; the English version is binding. Any German translation is for convenience only.',

    signaturesHeading: 'Signatures',
    signaturePlace: 'Place',
    signatureDateLabel: 'Date',
    signatureLineLabel: 'Signature',

    footerNote: 'Website Subscription Agreement, draft (not lawyer-reviewed) · Page',
  },
  de: {
    draftBanner:
      '⚠ Entwurf, noch nicht anwaltlich geprüft. Dieser Abo-Vertrag wurde von der Agentur erstellt und sollte vor der Unterzeichnung von einer Berliner Anwaltskanzlei geprüft werden. Bitte bis dahin nicht als endgültig betrachten. (Dieser Hinweis wird auf jeder Kopie gedruckt.)',
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

    plainSummaryLabel: 'In einfachen Worten',
    plainSummary:
      'Du zahlst eine monatliche Gebühr; wir gestalten, bauen, hosten und betreuen deine Website und die Leistungen aus § 2. Deine Inhalte, deine Daten und deine Domain gehören dir. Beide Seiten können mit 14 Tagen Frist zum Monatsende kündigen. Wenn du die Website irgendwann ganz besitzen möchtest, gibt es eine optionale einmalige Ablöse (§ 3). Die formalen Klauseln unten regeln all das genau; wenn etwas unklar ist, frag vor der Unterschrift nach.',

    s1Heading: '§ 1   Vertragsgegenstand',
    s1Body:
      'Die Agentur erstellt, hostet, pflegt und betreut die Website des Mandanten sowie etwaige weitere in § 2 ausgewählte Leistungen als laufendes Monats-Abo. Dem Mandanten gehören seine Inhalte, seine Daten und seine Domain. Die Website selbst, Quellcode, Design und Hosting, wird für die Dauer des Abos lizenziert und nicht auf den Mandanten übertragen (siehe § 5; eine optionale einmalige Ablöse ist in § 3 geregelt). Die Agentur behält die Rechte an ihren wiederverwendbaren Design-Mustern und ihrem Know-how. Ist der Mandant Verbraucher (§ 13 BGB), gelten zwingende verbraucherschützende Vorschriften einschließlich des Widerrufsrechts und gehen vor.',

    s2Heading: '§ 2   Leistungen',
    s2Intro: 'Der Mandant beauftragt die Agentur mit:',
    s2NoServicesSelected:
      '⚠ Keine Leistung ausgewählt, bitte im Formular oben mindestens eine ankreuzen.',
    s2ScopeIntroLabel: 'Leistungsumfang:',

    s3Heading: '§ 3   Vergütung und Zahlungsbedingungen',
    s3BuildFeeLine:
      'Optionale einmalige Ablöse: {eur} netto. Geschuldet nur, wenn gesondert vereinbart. Nach Zahlung überträgt die Agentur dem Mandanten die in § 5 genannten Rechte an der bereitgestellten Website.',
    s3BuildFeeSplit:
      'Eine Ablöse wird gesondert in Rechnung gestellt, zahlbar innerhalb von 14 Tagen; die Rechte nach § 5 gehen erst mit vollständiger Zahlung über.',
    s3RetainerLine:
      'Monatliche Gebühr: {eur} netto, im Voraus zum 1. jedes Monats abgerechnet, zahlbar innerhalb von 14 Tagen per SEPA-Überweisung. Sie deckt die Leistungen aus § 2 sowie Hosting, Pflege, Sicherheits-Updates und Support für die Laufzeit des Abos. Es fällt keine gesonderte Einrichtungs- oder Aufbaugebühr an.',
    s3PaymentTerms:
      'Bei Zahlungsverzug fallen gesetzliche Verzugszinsen (§ 288 BGB) sowie eine Mahnpauschale von € 40 an. Die Agentur darf ihre Leistungen aussetzen, wenn eine Rechnung mehr als 14 Tage nach Fälligkeit unbezahlt bleibt, bis zur Begleichung (siehe § 4).',
    s3PaymentDefault: 'Verzug: gesetzliche Zinsen (§ 288 BGB) + € 40 Mahnpauschale.',
    s3VatKleinLine:
      'Als Kleinunternehmer nach § 19 UStG berechnet die Agentur keine Umsatzsteuer. Die oben genannten Beträge sind endgültig.',
    s3VatRegularLine:
      'Pro Monat: {net} netto + 19 % USt {vat} = {gross} brutto. Die USt wird auf jeder Rechnung separat ausgewiesen; eine etwaige Ablöse (§ 3) wird mit USt gesondert berechnet.',

    s4Heading: '§ 4   Laufzeit und Kündigung',
    s4Start: 'Dieser Vertrag beginnt am {date}.',
    s4MinimumTerm:
      'Das Abo läuft monatlich, ohne Mindestlaufzeit. Beide Parteien können in Textform (§ 126b BGB) mit einer Frist von 14 Tagen zum Ende eines jeden Kalendermonats kündigen.',
    s4Notice:
      'Die Kündigung erfolgt in Textform (§ 126b BGB); E-Mail genügt, an die auf der Titelseite genannte Adresse.',
    s4ImmediateTermination:
      'Beide Parteien können den Vertrag aus wichtigem Grund fristlos kündigen, etwa bei einer nicht behobenen wesentlichen Pflichtverletzung nach 14 Tagen schriftlicher Frist oder bei einer mehr als 14 Tage überfälligen Rechnung. Während einer Heilungsfrist darf die Agentur ihre Leistungen aussetzen.',
    s4HandoverObligation:
      'Nach Vertragsende stellt die Agentur binnen 30 Tagen einen vollständigen Export der Inhalte und Daten des Mandanten bereit und gibt die Domain frei (auf den Namen des Mandanten registriert). Das Nutzungsrecht an der Website (§ 5) endet und die Website geht offline. Quellcode, Design und Hosting werden nicht übertragen, sofern nicht die einmalige Ablöse (§ 3) gezahlt wurde. Bei gebuchtem SEO oder Google Business Profile gibt die Agentur zusätzlich die zugehörigen, auf den Namen des Mandanten geführten Zugänge frei.',

    s5Heading: '§ 5   Geistiges Eigentum',
    s5ClientOwns:
      'Dem Mandanten gehören, jederzeit exportierbar: seine Inhalte, Texte, Fotos und Logos; seine eigenen Daten (z. B. Kontaktformular-Einsendungen); seine auf seinen Namen registrierte Domain; und, sofern eingerichtet, sein Google-Business-Profile-Eintrag. Für die Dauer des Abos räumt die Agentur dem Mandanten ein einfaches, nicht übertragbares Nutzungsrecht an der bereitgestellten Website ein; dieses endet mit Vertragsende. Quellcode, Design und Templates bleiben Eigentum der Agentur und werden nicht übertragen, es sei denn, der Mandant zahlt die einmalige Ablöse (§ 3); in diesem Fall räumt die Agentur ihm ein unbeschränktes, räumlich unbegrenztes Nutzungsrecht ein (oder überträgt das Werk, sofern gesondert vereinbart).',
    s5AgencyKeeps:
      'Die Agentur behält alle Rechte an ihren wiederverwendbaren Mustern, ihrer Komponenten-Bibliothek und ihrem allgemeinen, nicht mandantenspezifischen Know-how und darf ähnliche Werke für andere Mandanten erstellen. Ohne Ablöse (§ 3) wird die Website lizenziert, nicht verkauft.',

    s6Heading: '§ 6   Haftung',
    s6LiabilityCap:
      'Die Gesamthaftung der Agentur ist auf die Gebühren begrenzt, die der Mandant in den 12 Monaten vor dem haftungsbegründenden Ereignis tatsächlich gezahlt hat, unabhängig davon, ob der Anspruch vertraglich, deliktisch oder anderweitig besteht.',
    s6LiabilityExclusions:
      'Die Begrenzung gilt nicht bei Vorsatz oder grober Fahrlässigkeit der Agentur, bei Verletzung von Leben, Körper oder Gesundheit, bei Ansprüchen aus dem Produkthaftungsgesetz oder bei sonstiger zwingender, nicht abdingbarer Haftung (§ 309 BGB).',
    s6Indemnification:
      'Der Mandant versichert, dass alle überlassenen Inhalte, Fotos, Marken und Texte ihm gehören oder ordnungsgemäß lizenziert sind, und stellt die Agentur von Ansprüchen Dritter wegen dieser Inhalte frei.',

    s7Heading: '§ 7   Datenschutz und Vertraulichkeit',
    s7DataAvv:
      'Soweit die Agentur personenbezogene Daten im Auftrag des Mandanten verarbeitet (z. B. Kontaktformular-Einsendungen, Analytics-Events), schließen die Parteien einen separaten Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO, auf Anfrage erhältlich, der mit Unterzeichnung Bestandteil dieses Vertrages wird.',
    s7Confidentiality:
      'Jede Partei behandelt nicht-öffentliche Geschäftsinformationen der anderen vertraulich, für 24 Monate über das Vertragsende hinaus. Die Agentur darf den Mandanten in ihrem Portfolio nennen, sofern der Mandant dem nicht in Textform widerspricht.',

    s8Heading: '§ 8   Schlussbestimmungen',
    s8Jurisdiction:
      'Gerichtsstand ist Berlin. Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts (CISG).',
    s8WrittenForm:
      'Änderungen dieses Vertrages bedürfen der Textform (§ 126b BGB). Nebenabreden bestehen nicht.',
    s8Severability:
      'Ist eine Klausel unwirksam, bleiben die übrigen wirksam und werden durch eine ersetzt, die ihrem Zweck am nächsten kommt (salvatorische Klausel).',
    s8LanguageBindingDe:
      'Dieser Vertrag wird in deutscher Sprache geschlossen; die deutsche Fassung ist maßgeblich. Eine englische Übersetzung dient nur der Gefälligkeit.',
    s8LanguageBindingEn:
      'Dieser Vertrag wird in englischer Sprache geschlossen; die englische Fassung ist maßgeblich. Eine deutsche Übersetzung dient nur der Gefälligkeit.',

    signaturesHeading: 'Unterschriften',
    signaturePlace: 'Ort',
    signatureDateLabel: 'Datum',
    signatureLineLabel: 'Unterschrift',

    footerNote: 'Website-Abo-Vertrag, Entwurf (nicht anwaltlich geprüft) · Seite',
  },
};
