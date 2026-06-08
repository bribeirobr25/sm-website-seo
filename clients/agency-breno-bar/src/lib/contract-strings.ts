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
        "A custom, multi-page website built around the Client's brand, hosted and kept up to date by the Agency as part of the subscription. Up to 12 pages, in German and English (more languages on request). The domain is registered in the Client's name. Includes the cookie banner and the legal pages every site needs, written for the Client's business. Fast on mobile, accessible, and built to be found and to convert.",
    },
    {
      slug: 'seo',
      name: 'SEO and Local Listing',
      defaultScope:
        'Getting the Client found on Google, Google Maps, Apple Maps and the directories that matter, with the right keywords for the business and its neighbourhood. Includes setup, a clear monthly report with concrete next steps, a regular keyword review, and ongoing upkeep of listings and reviews. No bought links, no tricks.',
    },
    {
      slug: 'ecommerce',
      name: 'E-Commerce and Business Email',
      defaultScope:
        "An online store to sell the Client's products or services around the clock, with secure checkout, easy product management, and order notifications, plus a professional email address on the Client's own domain. The subscription covers hosting, security, and upkeep; payment-provider and mailbox fees are billed at cost or paid by the Client directly.",
    },
    {
      slug: 'ai',
      name: 'AI Solutions, Booking System and More',
      defaultScope:
        "Practical AI and automation fitted to the Client's business: a website chatbot, an online booking or appointment system, and time-saving automations, each agreed with the Client before it is built. The subscription covers hosting and upkeep; any third-party AI usage above the included allowance is billed at cost.",
    },
  ],
  de: [
    {
      slug: 'website',
      name: 'Website-Abo',
      defaultScope:
        'Eine individuelle, mehrseitige Website rund um die Marke des Auftraggebers, von der Agentur im Rahmen des Abos gehostet und aktuell gehalten. Bis zu 12 Seiten, auf Deutsch und Englisch (weitere Sprachen auf Anfrage). Die Domain wird auf den Namen des Auftraggebers registriert. Inklusive Cookie-Banner und der rechtlichen Pflichtseiten, auf das Unternehmen des Auftraggebers zugeschnitten. Schnell auf dem Handy, barrierearm und auf Sichtbarkeit ausgelegt.',
    },
    {
      slug: 'seo',
      name: 'SEO und lokale Einträge',
      defaultScope:
        'Der Auftraggeber wird auf Google, Google Maps, Apple Maps und in den relevanten Verzeichnissen gefunden, mit den passenden Suchbegriffen für das Geschäft und seinen Kiez. Inklusive Einrichtung, monatlichem Report mit konkreten nächsten Schritten, regelmäßiger Keyword-Review und laufender Pflege von Einträgen und Bewertungen. Keine gekauften Links, keine Tricks.',
    },
    {
      slug: 'ecommerce',
      name: 'Online-Shop und Business-E-Mail',
      defaultScope:
        'Ein Online-Shop, der die Produkte oder Leistungen des Auftraggebers rund um die Uhr verkauft, mit sicherem Checkout, einfacher Produktverwaltung und Bestellbenachrichtigungen, dazu eine professionelle E-Mail-Adresse auf der eigenen Domain. Das Abo deckt Hosting, Sicherheit und Pflege; Gebühren des Zahlungsanbieters und für das Postfach werden zum Selbstkostenpreis berechnet oder direkt vom Auftraggeber getragen.',
    },
    {
      slug: 'ai',
      name: 'KI-Lösungen, Buchungssystem und mehr',
      defaultScope:
        'Praktische KI und Automatisierung, passend zum Geschäft des Auftraggebers: ein Website-Chatbot, ein Online-Buchungs- bzw. Terminsystem und zeitsparende Automatisierungen, jeweils vor dem Bau mit dem Auftraggeber abgestimmt. Das Abo deckt Hosting und Pflege; Drittanbieter-KI-Nutzung über dem enthaltenen Kontingent wird zum Selbstkostenpreis berechnet.',
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
  clientPhone: string;
  clientUstId: string;
  clientUstHint: string;

  planLabel: string;
  planHint: string;

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
  /** Template, replace `{plan}` / `{price}` with the selected plan name + price. */
  s2PlanLine: string;

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
  s4StartNote: string;
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
    clientPhone: 'Phone',
    clientUstId: 'VAT ID (USt-IdNr)',
    clientUstHint:
      'Leave blank if the client is Kleinunternehmer under § 19 UStG and has no VAT ID.',

    planLabel: 'Plan',
    planHint:
      'Pick a plan. It ticks the included services and fills the monthly price and buy-out below; you can still adjust them.',

    servicesLabel: 'Services',
    servicesHint:
      'Picked automatically from the plan. Tick or untick to adjust; the scope text under each is editable per deal.',
    scopeEditableLabel: 'Scope (editable per deal):',

    pricingLabel: 'Pricing',
    buildFee: 'One-time buy-out (≈ 18 months of the plan)',
    retainerFee: 'Monthly subscription fee',
    retainerFeeHint:
      'Filled automatically from the selected plan (€219 / €390 / €570). Covers the § 2 services plus hosting, maintenance, updates, and support.',
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
      'The Agency builds, hosts, maintains, and supports the Client’s website, plus any other services selected in § 2, as an ongoing monthly subscription. The Client owns its content, data, and domain. The website itself, its code, design, and hosting, is licensed for as long as the subscription runs and is not transferred to the Client (see § 5; an optional one-time buy-out, equivalent to 18 months of the monthly fee, is in § 3). The Agency keeps the rights to its reusable design patterns and know-how. If the Client is a consumer (§ 13 BGB), statutory consumer rights, including the right of withdrawal, apply and prevail.',

    s2Heading: '§ 2   Services',
    s2Intro: 'The Client is hiring the Agency for:',
    s2NoServicesSelected: '⚠ No plan selected. Return to the form and choose a plan.',
    s2ScopeIntroLabel: 'Scope:',
    s2PlanLine: 'Selected plan: {plan} ({price}), included services:',

    s3Heading: '§ 3   Compensation and Payment Terms',
    s3BuildFeeLine:
      'Optional one-time buy-out: {eur} net, equivalent to 18 months of the monthly fee. It is owed only if the Client chooses to take the website outright. Once it is paid, the Agency transfers to the Client the rights to the delivered website set out in § 5.',
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
    s4StartNote: 'Your project will be started within 3 business days.',
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
    clientPhone: 'Telefon',
    clientUstId: 'USt-IdNr',
    clientUstHint:
      'Leer lassen, wenn der Mandant Kleinunternehmer nach § 19 UStG ist und keine USt-IdNr hat.',

    planLabel: 'Plan',
    planHint:
      'Plan wählen. Er kreuzt die enthaltenen Leistungen an und füllt Monatspreis und Ablöse unten aus; anpassen ist weiterhin möglich.',

    servicesLabel: 'Leistungen',
    servicesHint:
      'Automatisch aus dem Plan gewählt. Zum Anpassen an- oder abwählen; der Leistungsumfang darunter ist pro Mandat bearbeitbar.',
    scopeEditableLabel: 'Leistungsumfang (pro Mandat bearbeitbar):',

    pricingLabel: 'Vergütung',
    buildFee: 'Einmalige Ablöse (≈ 18 Monate des Plans)',
    retainerFee: 'Monatliche Abo-Gebühr',
    retainerFeeHint:
      'Automatisch aus dem gewählten Plan gefüllt (219 / 390 / 570 €). Deckt die Leistungen aus § 2 plus Hosting, Pflege, Updates und Support.',
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
      'Die Agentur erstellt, hostet, pflegt und betreut die Website des Mandanten sowie etwaige weitere in § 2 ausgewählte Leistungen als laufendes Monats-Abo. Dem Mandanten gehören seine Inhalte, seine Daten und seine Domain. Die Website selbst, Quellcode, Design und Hosting, wird für die Dauer des Abos lizenziert und nicht auf den Mandanten übertragen (siehe § 5; eine optionale einmalige Ablöse in Höhe von 18 Monaten der Monatsgebühr ist in § 3 geregelt). Die Agentur behält die Rechte an ihren wiederverwendbaren Design-Mustern und ihrem Know-how. Ist der Mandant Verbraucher (§ 13 BGB), gelten zwingende verbraucherschützende Vorschriften einschließlich des Widerrufsrechts und gehen vor.',

    s2Heading: '§ 2   Leistungen',
    s2Intro: 'Der Mandant beauftragt die Agentur mit:',
    s2NoServicesSelected: '⚠ Kein Plan ausgewählt. Bitte oben im Formular einen Plan wählen.',
    s2ScopeIntroLabel: 'Leistungsumfang:',
    s2PlanLine: 'Gewählter Plan: {plan} ({price}), enthaltene Leistungen:',

    s3Heading: '§ 3   Vergütung und Zahlungsbedingungen',
    s3BuildFeeLine:
      'Optionale einmalige Ablöse: {eur} netto, entspricht 18 Monaten der Monatsgebühr. Nur geschuldet, wenn der Mandant die Website vollständig übernehmen möchte. Nach Zahlung überträgt die Agentur dem Mandanten die in § 5 genannten Rechte an der bereitgestellten Website.',
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
    s4StartNote: 'Dein Projekt startet innerhalb von 3 Werktagen.',
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
