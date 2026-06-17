/**
 * Contract template strings, locale-aware clause text (EN + DE).
 *
 * Used by `src/pages/contract.astro` (EN) + `src/pages/de/contract.astro` (DE).
 * § 2 (services) is filled at runtime from the selected /pricing plan's feature
 * list (FUNNEL pricing tiers) — the single source of truth — so the contract can
 * never drift from the pricing page.
 * Add-ons + billing (2026-06-16): the form has steppers for extra languages /
 * mailboxes / social channels + a social checkbox + a monthly/yearly radio. They
 * fold into ONE canonical monthlyTotal (numbers from FUNNEL.pricing.addons) that
 * drives the § 2 add-on line items, the buy-out (18× total), VAT, the yearly
 * figure, AND the auto-generated contract number (BAR-<planCode><monthlyTotal>-
 * <client>-<YYMMDD>) — header "Contract no." + the payment reference. Yearly =
 * round(monthlyTotal × 12 × 0.85), a fixed 12-month prepaid term. The agency
 * signature column carries a simulated "BAR" mark (signature.ts). All client-side.
 *
 * **LEGAL CAVEAT, NOT lawyer-reviewed.** Monthly-subscription model ("Website-Abo"):
 * § 3 = monthly fee (or yearly prepaid) + optional one-time buy-out (no build fee);
 * § 4 = monthly cancellation OR a fixed 12-month yearly term (no refund except
 * Widerrufsrecht); § 5 = the website is LICENSED for the term, not transferred.
 * Plain-language clauses (statutes in parentheses) + a top "In plain words" summary.
 * Before ANY use, a Berlin-licensed Rechtsanwalt must finalize the German text:
 * legal classification (Dienst-/Mietvertrag), § 305c/§ 307 BGB AGB-Kontrolle
 * (incl. the yearly fixed term + no-refund), Widerrufsrecht for consumers, the § 5
 * licence + buy-out mechanics, the AVV (Art. 28 GDPR) cross-reference, AND whether
 * the pre-printed simulated signature is acceptable at all.
 */

export type LocaleEnDe = 'en' | 'de';

export interface ContractStrings {
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

  pricingLabel: string;
  retainerFee: string;
  /** Hint under the monthly-fee field; `{eur}` is replaced with the derived 18-month buy-out. */
  retainerFeeHint: string;
  vatLabel: string;
  vatKleinunternehmer: string;
  vatRegular: string;

  datesLabel: string;
  signatureDate: string;
  startDate: string;

  // Contract body
  contractTitleH1: string;
  contractSubtitle: string;
  /** Label for the auto-generated contract number, e.g. "Contract no." */
  contractNoLabel: string;
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
  /** Template, replace `{plan}` / `{price}` with the selected plan name + price. */
  s2PlanLine: string;

  s3Heading: string;
  /** Template, replace `{eur}` with the formatted amount at render time. */
  s3BuildFeeLine: string;
  /** Template, replace `{eur}` with the formatted retainer amount. */
  s3RetainerLine: string;
  s3PaymentTerms: string;
  // Payment-details block (values come from SITE.payment).
  s3PaymentHeading: string;
  s3PaymentReceiver: string;
  s3PaymentBank: string;
  /** "Pay by ONE of the following" header above the bank/PayPal options. */
  s3PayChooseOne: string;
  /** Divider between the bank and PayPal options. */
  s3PayOr: string;
  /** Label for the payment reference (the contract ID) the client must quote. */
  s3PaymentReference: string;
  /** Label advising the client which name to send the payment under. */
  s3PaymentSender: string;
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

  // Add-ons + billing — form controls
  billingLabel: string;
  billingMonthly: string;
  billingYearly: string;
  addonLanguages: string;
  addonMailboxes: string;
  addonSocial: string;
  addonSocialChannels: string;
  addonsLabel: string;
  // §2 add-on line templates ({count}/{price})
  s2AddonLanguage: string;
  s2AddonMailbox: string;
  s2AddonSocialFirst: string;
  s2AddonSocialExtra: string;
  // §3 yearly + payment reference
  s3RetainerLineYearly: string;
  s3YearlyDiscountLine: string;
  s3ReferenceNote: string;
  // §4 yearly fixed-term variant
  s4MinimumTermYearly: string;
  // pre-printed agency signature
  signatureSpecimenNote: string;
  footerNote: string;
}

export const CONTRACT_STRINGS: Record<LocaleEnDe, ContractStrings> = {
  en: {
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
      'Pick a plan. It fills the monthly fee below, and § 2 lists exactly what that plan includes (straight from the pricing page).',

    pricingLabel: 'Pricing',
    retainerFee: 'Monthly subscription fee',
    retainerFeeHint:
      'Auto-filled from the selected plan. Optional one-time buy-out to own the site outright: {eur} (≈ 18 months of the plan).',
    vatLabel: 'VAT handling',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG), no VAT charged',
    vatRegular: 'Regular VAT, 19 % MwSt added to every line',

    datesLabel: 'Dates',
    signatureDate: 'Signature date',
    startDate: 'Project start',

    contractTitleH1: 'Website Subscription Agreement',
    contractSubtitle:
      'between Agency and Client, a monthly subscription for the services listed in § 2',
    contractNoLabel: 'Contract no.',

    agencyHeading: 'Agency',
    clientHeading: 'Client',
    agencyAddress: '', // composed at render
    representedBy: 'Represented by',

    plainSummaryLabel: 'In plain words',
    plainSummary:
      'You pay one monthly fee; we design, build, host, and look after your website and the services in § 2. You own your content, your data, and your domain. Your billing month runs from your start date (not a fixed calendar date), and either of us can stop with 14 days’ notice to the end of a billing month. If you ever want to own the website outright, there is an optional one-time buy-out (§ 3). The formal terms below say all of this precisely; if anything reads unclear, ask before signing.',

    s1Heading: '§ 1   Subject of the Agreement',
    s1Body:
      'The Agency builds, hosts, maintains, and supports the Client’s website, plus any other services selected in § 2, as an ongoing monthly subscription. The Client owns its content, data, and domain. The website itself, its code, design, and hosting, is licensed for as long as the subscription runs and is not transferred to the Client (see § 5; an optional one-time buy-out, equivalent to 18 months of the monthly fee, is in § 3). The Agency keeps the rights to its reusable design patterns and know-how. If the Client is a consumer (§ 13 BGB), statutory consumer rights, including the right of withdrawal, apply and prevail.',

    s2Heading: '§ 2   Services',
    s2Intro: 'The Client is hiring the Agency for:',
    s2NoServicesSelected: '⚠ No plan selected. Return to the form and choose a plan.',
    s2PlanLine: 'Selected plan: {plan} ({price}). The subscription includes:',

    s3Heading: '§ 3   Compensation and Payment Terms',
    s3BuildFeeLine:
      'Optional one-time buy-out: {eur} net, equivalent to 18 months of the monthly fee. It is owed only if the Client chooses to take the website outright. Once it is paid, the Agency transfers to the Client the rights to the delivered website set out in § 5.',
    s3RetainerLine:
      'Monthly fee: {eur} net, billed one month in advance, the first on the start date (§ 4) and then on the same day of each following month (or the last day of the month where that day does not exist), due within 14 days by bank transfer or PayPal. It covers the § 2 services plus hosting, maintenance, security updates, and support, for as long as the subscription runs. There is no separate set-up or build fee.',
    s3PaymentTerms:
      'Late payment carries statutory interest (§ 288 BGB) plus a € 40 fee. The Agency may pause services on any invoice unpaid 14 days past its due date, until it is settled (see § 4).',
    s3PaymentHeading: 'Payment to:',
    s3PaymentReceiver: 'Receiver',
    s3PaymentBank: 'Bank transfer',
    s3PayChooseOne: 'Pay by ONE of the following (you only need one):',
    s3PayOr: '— or —',
    s3PaymentReference: 'Reference (please include on your payment)',
    s3PaymentSender: 'Sender (please pay as)',
    s3VatKleinLine:
      'As a small business under § 19 UStG, the Agency charges no VAT. The amounts above are final.',
    s3VatRegularLine:
      'Per month: {net} net + 19 % VAT {vat} = {gross} gross. VAT is shown separately on each invoice; any buy-out (§ 3) is invoiced with VAT separately.',

    s4Heading: '§ 4   Term and Termination',
    s4Start: 'This Agreement starts on {date} (the start date).',
    s4StartNote: 'Your project will be started within 3 business days.',
    s4MinimumTerm:
      'The subscription has no minimum term and runs in billing months anchored to the start date above (so the billing day matches the start date, not a fixed calendar date). Either Party may cancel in text form (§ 126b BGB) with 14 days’ notice to the end of a billing month.',
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

    billingLabel: 'Billing cycle',
    billingMonthly: 'Monthly',
    billingYearly: 'Yearly — 12-month term, save 15%',
    addonLanguages: 'Extra languages (beyond German + English)',
    addonMailboxes: 'Extra mailboxes',
    addonSocial: 'Add social media (1 channel)',
    addonSocialChannels: 'Extra social channels',
    addonsLabel: 'Add-ons',
    s2AddonLanguage: '+ {count} additional language(s), {price}/mo each',
    s2AddonMailbox: '+ {count} additional mailbox(es), {price}/mo each',
    s2AddonSocialFirst: '+ Social media: 1 channel, {price}/mo',
    s2AddonSocialExtra: '+ {count} additional social channel(s), {price}/mo each',
    s3RetainerLineYearly:
      'Yearly fee: {eur} net, billed once, in advance, for a fixed 12-month term, due within 14 days by bank transfer or PayPal. It covers the § 2 services plus hosting, maintenance, security updates, and support for the term. The 15 % yearly discount is already included. There is no separate set-up or build fee.',
    s3YearlyDiscountLine:
      'Yearly prepayment: a 15 % discount is applied to the full monthly total (plan and add-ons); {eur} net is billed once, in advance, for the 12-month term.',
    s3ReferenceNote: 'This reference identifies your contract and plan — it is not the amount due.',
    s4MinimumTermYearly:
      'With yearly prepayment the subscription runs as a fixed 12-month term beginning on the start date above, paid in advance. It does not cancel monthly: either Party may give notice in text form (§ 126b BGB) to the end of the 12-month term; absent notice it renews for a further 12 months. Prepaid months are not refunded on early cancellation, except where a statutory right of withdrawal (Widerrufsrecht) applies.',
    signatureSpecimenNote:
      'Specimen of the agency’s signature; the binding signature is applied when the Agreement is executed.',
    footerNote: 'Website Subscription Agreement, draft (not lawyer-reviewed) · Page',
  },
  de: {
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
      'Plan wählen. Er füllt die Monatsgebühr unten, und § 2 listet genau das auf, was der Plan enthält (direkt von der Preisseite).',

    pricingLabel: 'Vergütung',
    retainerFee: 'Monatliche Abo-Gebühr',
    retainerFeeHint:
      'Automatisch aus dem gewählten Plan. Optionale einmalige Ablöse, um die Website ganz zu übernehmen: {eur} (≈ 18 Monate des Plans).',
    vatLabel: 'Umsatzsteuer-Regelung',
    vatKleinunternehmer: 'Kleinunternehmer (§ 19 UStG), keine Umsatzsteuer',
    vatRegular: 'Regelbesteuerung, 19 % MwSt auf jede Position',

    datesLabel: 'Termine',
    signatureDate: 'Unterzeichnungsdatum',
    startDate: 'Projektbeginn',

    contractTitleH1: 'Website-Abo-Vertrag',
    contractSubtitle:
      'zwischen Agentur und Mandant, ein Monats-Abo für die in § 2 aufgeführten Leistungen',
    contractNoLabel: 'Vertrags-Nr.',

    agencyHeading: 'Agentur',
    clientHeading: 'Mandant',
    agencyAddress: '',
    representedBy: 'Vertreten durch',

    plainSummaryLabel: 'In einfachen Worten',
    plainSummary:
      'Du zahlst eine monatliche Gebühr; wir gestalten, bauen, hosten und betreuen deine Website und die Leistungen aus § 2. Deine Inhalte, deine Daten und deine Domain gehören dir. Dein Abrechnungsmonat richtet sich nach deinem Projektbeginn (nicht nach einem festen Kalendertag), und beide Seiten können mit 14 Tagen Frist zum Ende eines Abrechnungsmonats kündigen. Wenn du die Website irgendwann ganz besitzen möchtest, gibt es eine optionale einmalige Ablöse (§ 3). Die formalen Klauseln unten regeln all das genau; wenn etwas unklar ist, frag vor der Unterschrift nach.',

    s1Heading: '§ 1   Vertragsgegenstand',
    s1Body:
      'Die Agentur erstellt, hostet, pflegt und betreut die Website des Mandanten sowie etwaige weitere in § 2 ausgewählte Leistungen als laufendes Monats-Abo. Dem Mandanten gehören seine Inhalte, seine Daten und seine Domain. Die Website selbst, Quellcode, Design und Hosting, wird für die Dauer des Abos lizenziert und nicht auf den Mandanten übertragen (siehe § 5; eine optionale einmalige Ablöse in Höhe von 18 Monaten der Monatsgebühr ist in § 3 geregelt). Die Agentur behält die Rechte an ihren wiederverwendbaren Design-Mustern und ihrem Know-how. Ist der Mandant Verbraucher (§ 13 BGB), gelten zwingende verbraucherschützende Vorschriften einschließlich des Widerrufsrechts und gehen vor.',

    s2Heading: '§ 2   Leistungen',
    s2Intro: 'Der Mandant beauftragt die Agentur mit:',
    s2NoServicesSelected: '⚠ Kein Plan ausgewählt. Bitte oben im Formular einen Plan wählen.',
    s2PlanLine: 'Gewählter Plan: {plan} ({price}). Das Abo umfasst:',

    s3Heading: '§ 3   Vergütung und Zahlungsbedingungen',
    s3BuildFeeLine:
      'Optionale einmalige Ablöse: {eur} netto, entspricht 18 Monaten der Monatsgebühr. Nur geschuldet, wenn der Mandant die Website vollständig übernehmen möchte. Nach Zahlung überträgt die Agentur dem Mandanten die in § 5 genannten Rechte an der bereitgestellten Website.',
    s3RetainerLine:
      'Monatliche Gebühr: {eur} netto, einen Monat im Voraus abgerechnet, erstmals zum Projektbeginn (§ 4) und danach jeweils am selben Tag jedes Folgemonats (bzw. am letzten Tag des Monats, falls dieser Tag fehlt), zahlbar innerhalb von 14 Tagen per Banküberweisung oder PayPal. Sie deckt die Leistungen aus § 2 sowie Hosting, Pflege, Sicherheits-Updates und Support für die Laufzeit des Abos. Es fällt keine gesonderte Einrichtungs- oder Aufbaugebühr an.',
    s3PaymentTerms:
      'Bei Zahlungsverzug fallen gesetzliche Verzugszinsen (§ 288 BGB) sowie eine Mahnpauschale von € 40 an. Die Agentur darf ihre Leistungen aussetzen, wenn eine Rechnung mehr als 14 Tage nach Fälligkeit unbezahlt bleibt, bis zur Begleichung (siehe § 4).',
    s3PaymentHeading: 'Zahlung an:',
    s3PaymentReceiver: 'Empfänger',
    s3PaymentBank: 'Banküberweisung',
    s3PayChooseOne: 'Zahlung über EINEN der folgenden Wege (nur einer nötig):',
    s3PayOr: '— oder —',
    s3PaymentReference: 'Verwendungszweck (bitte bei der Zahlung angeben)',
    s3PaymentSender: 'Absender (bitte zahlen als)',
    s3VatKleinLine:
      'Als Kleinunternehmer nach § 19 UStG berechnet die Agentur keine Umsatzsteuer. Die oben genannten Beträge sind endgültig.',
    s3VatRegularLine:
      'Pro Monat: {net} netto + 19 % USt {vat} = {gross} brutto. Die USt wird auf jeder Rechnung separat ausgewiesen; eine etwaige Ablöse (§ 3) wird mit USt gesondert berechnet.',

    s4Heading: '§ 4   Laufzeit und Kündigung',
    s4Start: 'Dieser Vertrag beginnt am {date} (der Projektbeginn).',
    s4StartNote: 'Dein Projekt startet innerhalb von 3 Werktagen.',
    s4MinimumTerm:
      'Das Abo hat keine Mindestlaufzeit und läuft in Abrechnungsmonaten, die am oben genannten Projektbeginn ausgerichtet sind (der Abrechnungstag entspricht also dem Projektbeginn, nicht einem festen Kalendertag). Beide Parteien können in Textform (§ 126b BGB) mit einer Frist von 14 Tagen zum Ende eines Abrechnungsmonats kündigen.',
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

    billingLabel: 'Abrechnungszeitraum',
    billingMonthly: 'Monatlich',
    billingYearly: 'Jährlich — 12 Monate Laufzeit, 15 % sparen',
    addonLanguages: 'Zusätzliche Sprachen (über Deutsch + Englisch hinaus)',
    addonMailboxes: 'Zusätzliche Postfächer',
    addonSocial: 'Social Media dazubuchen (1 Kanal)',
    addonSocialChannels: 'Zusätzliche Social-Media-Kanäle',
    addonsLabel: 'Zusatzleistungen',
    s2AddonLanguage: '+ {count} zusätzliche Sprache(n), je {price}/Mon.',
    s2AddonMailbox: '+ {count} zusätzliche(s) Postfach/Postfächer, je {price}/Mon.',
    s2AddonSocialFirst: '+ Social Media: 1 Kanal, {price}/Mon.',
    s2AddonSocialExtra: '+ {count} zusätzliche(r) Social-Media-Kanal/Kanäle, je {price}/Mon.',
    s3RetainerLineYearly:
      'Jahresgebühr: {eur} netto, einmalig im Voraus für eine feste Laufzeit von 12 Monaten abgerechnet, zahlbar innerhalb von 14 Tagen per Banküberweisung oder PayPal. Sie deckt die Leistungen aus § 2 sowie Hosting, Pflege, Sicherheits-Updates und Support für die Laufzeit. Der jährliche Rabatt von 15 % ist bereits enthalten. Es fällt keine gesonderte Einrichtungs- oder Aufbaugebühr an.',
    s3YearlyDiscountLine:
      'Jahresvorauszahlung: Auf den vollen Monatsbetrag (Plan und Zusatzleistungen) wird ein Rabatt von 15 % gewährt; {eur} netto werden einmalig im Voraus für die 12-monatige Laufzeit berechnet.',
    s3ReferenceNote:
      'Dieser Verwendungszweck identifiziert deinen Vertrag und Plan — er ist nicht der fällige Betrag.',
    s4MinimumTermYearly:
      'Bei Jahresvorauszahlung läuft das Abo als feste Laufzeit von 12 Monaten ab dem oben genannten Projektbeginn, im Voraus bezahlt. Es ist nicht monatlich kündbar: Beide Parteien können in Textform (§ 126b BGB) zum Ende der 12-Monats-Laufzeit kündigen; ohne Kündigung verlängert es sich um weitere 12 Monate. Vorausbezahlte Monate werden bei vorzeitiger Kündigung nicht erstattet, außer wenn ein gesetzliches Widerrufsrecht besteht.',
    signatureSpecimenNote:
      'Musterunterschrift der Agentur; die verbindliche Unterschrift wird bei Vertragsschluss geleistet.',
    footerNote: 'Website-Abo-Vertrag, Entwurf (nicht anwaltlich geprüft) · Seite',
  },
};
