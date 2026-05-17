# LEGAL.md — Legal Compliance Standards
## Small Business Website + SEO + Google Business Agency

**Applies to:** All product types (1–5). Every production site enforces one or more jurisdictions per the per-client mapping rule in §Per-client market → jurisdiction mapping.

This is the agency-wide source of truth for legal compliance — Privacy Policy, Terms of Use, cookie consent, footer disclosure, and per-jurisdiction operational requirements. It supersedes the per-jurisdiction sections previously embedded in `SECURITY.md` (§6 / §6.5) and `CHECKLIST.md` (§5 / §5.5 / §5.6); those now stub to this doc.

**This doc is engineering-implementation guidance, not legal advice.** Claude is not a lawyer. The rules below are derived from the published regulatory texts (DSGVO, LGPD, RGPD, CCPA/CPRA, COPPA, and US-state statutes) and reflect agency practice. **Real legal review is required before any production launch** — the agency's job is to ship a site that will pass a lawyer audit, not to be the lawyer.

---

## Rules at a glance

- **All four jurisdictions are encoded at the rule + template level.** Per-client enforcement is determined by the client's business location at scaffold time (§Per-client market → jurisdiction mapping).
- **No tracking script loads before explicit consent** (DE / BR / PT) or before an "opt-out" mechanism is exposed (US-CCPA). "Consent-first" is the default agency posture across all jurisdictions — it satisfies the strictest framework and works under the others.
- **No PII in error tracking.** Sentry runs everywhere with `send_default_pii: false`. Form payloads, query parameters, and headers are scrubbed before they leave the runtime. See `INFRASTRUCTURE.md` §Error tracking.
- **Cookie banner is required only when non-essential cookies are dropped.** Strictly technical / functional cookies do not require a banner. The threshold is identical across DE / BR / PT; the US (CCPA) is opt-out, not opt-in.
- **Cookie consent storage ≤ 6 months.** Re-prompt after expiry. No cookie longer than 6 months without re-consent.
- **"Reject all" parity.** The "Reject all" button must be **visible, equally prominent, and require the same number of clicks** as "Accept all." Dark-pattern violations are the #1 cited cookie-banner finding in enforcement actions.
- **Per-jurisdiction legal pages are NEVER `noindex`.** Privacy Policy, Impressum, Política de Privacidade, Terms of Use must be crawlable and discoverable.
- **Footer disclosure on every page.** Per-jurisdiction content (Impressum link / Razão Social+CNPJ / NIF+CAE / "Your Privacy Choices") — see per-jurisdiction sections.
- **Live owner-confirmed business data.** Never invent: legal name, tax IDs (CNPJ/MEI/NIF/USt-IdNr/EIN), addresses, registration numbers. Mark as DRAFT until owner provides.

---

## Table of contents

- Per-client market → jurisdiction mapping
- Comparison matrix — DE / BR / PT / US side-by-side
- DE — Germany (DSGVO + Impressum)
- BR — Brazil (LGPD)
- PT — Portugal (RGPD + national)
- US — United States (CCPA/CPRA + state baselines + COPPA)
- Cookie consent banner — universal spec
- Terms of Use spec — universal baseline
- Privacy Policy — common cross-jurisdiction structure
- Disclaimer + when to escalate to a real lawyer

---

## Per-client market → jurisdiction mapping

The client's **business location** determines which jurisdiction's full enforcement applies. The client's **audience location** can layer additional jurisdictions on top.

| Client business location | Primary jurisdiction(s) enforced | Optional add-on if audience extends |
|---|---|---|
| Germany (Berlin, anywhere DE) | DSGVO + DE-Impressum | EU-wide GDPR (already covered) · CCPA if marketing to US-California audience |
| Brazil (Rio, São Paulo, anywhere BR) | LGPD + BR commercial disclosure | CCPA if shipping/selling to US-California |
| Portugal (Lisbon, Porto, anywhere PT) | RGPD + PT-national (NIF/CAE/Livro de Reclamações) | EU-wide GDPR (already covered) · CCPA if shipping/selling to US-California |
| United States (any state) | CCPA/CPRA (California baseline) + applicable state laws (VCDPA / CPA / CTDPA / UCPA) + COPPA if audience includes < 13s | GDPR if any EU visitors (most US small businesses can ignore unless explicitly targeting EU) |
| Multi-jurisdiction (EU + US client, BR + US client, etc.) | Apply each jurisdiction in parallel — strictest rule wins per topic | — |

**Scaffold rule:** at the per-client `BRIEF.md` stage, record the business location AND the explicit jurisdiction set under a "Legal jurisdictions" heading. Every subsequent decision (Privacy Policy text, banner copy, footer content) flows from this list.

**Audience-extension rule:** if a client based in (say) Berlin actively markets a service to US-California residents, the CCPA's "Your Privacy Choices" footer link is added on top of the DE Impressum. The agency does not "guess" — only encoded when the client explicitly confirms US-market activity.

**Reasonable threshold for "marketing to" a jurisdiction:** the site has localized content for that market (US currency, US shipping page, English-only with US-specific CTAs), OR the client runs ads targeted at that region, OR the client has a registered business entity there. Passive accessibility from anywhere on the public internet does not trigger jurisdiction by itself — but a contact form that captures California-resident PII technically does. When in doubt, layer the rules.

---

## Comparison matrix — DE / BR / PT / US side-by-side

| Concern | DE (DSGVO) | BR (LGPD) | PT (RGPD + national) | US (CCPA + state baseline) |
|---|---|---|---|---|
| Privacy policy doc | Datenschutzerklärung | Política de Privacidade | Política de Privacidade | Privacy Policy (Notice at Collection + Full Policy) |
| Required footer artifact | Impressum (full legal disclosure) | Razão Social + CNPJ/MEI + address | NIF + CAE + address + Livro de Reclamações link | "Your Privacy Choices" link (CCPA) — Impressum-equivalent **not** required |
| Tax ID format | USt-IdNr (`DE` + 9 digits) | CNPJ (`XX.XXX.XXX/XXXX-XX`) or MEI (`XX.XXX.XXX/0001-XX`) | NIF (9 digits) | EIN (`XX-XXXXXXX`) for entities; SSN never on public pages |
| Legal basis for processing | Art. 6 DSGVO (consent / contract / legitimate interest) | Art. 7 LGPD (mirrors DSGVO 10 bases) | Art. 6 RGPD (identical to DSGVO) | Notice + opt-out (CCPA) — no "consent before" requirement for most processing |
| Cookie banner posture | Opt-in (consent before fire) | Opt-in (consent before fire) | Opt-in (consent before fire) | Opt-out ("Do Not Sell or Share My Personal Information") |
| Cookie banner threshold | Non-essential cookies only | Non-essential cookies only | Non-essential cookies only | "Sale" or "share" of personal info → opt-out link required |
| Data subject rights | Access / rectify / delete / port / restrict / object | Art. 18 — confirmation / access / correction / deletion / portability / revocation | Identical to DSGVO (RGPD-aligned) | Know / delete / correct / opt-out of sale / limit sensitive PI use / no retaliation |
| Penalty ceiling | Up to 4 % global revenue OR €20M | Up to 2 % BR revenue, capped R$ 50M/infraction | Identical to DSGVO via RGPD | $7,500 per intentional violation (CCPA) + private right of action for breaches |
| Enforcer | EU/national DPAs (BfDI in DE) | ANPD (Autoridade Nacional de Proteção de Dados) | CNPD (Comissão Nacional de Proteção de Dados) | California AG + private litigants + state AGs (VCDPA / CPA / CTDPA / UCPA) |
| Minors threshold | < 16 (default; member states may lower to 13) | < 12 (separate parental consent rules) | < 16 | < 13 federal (COPPA) — strict opt-in parental consent |
| Mandatory DPO threshold | Core activity = large-scale monitoring OR public authority | Same risk-based test — most small businesses are exempt | Same | Not federally mandated; some state laws require contact person |
| Site can launch without lawyer review? | Strongly discouraged for forms / payments | Strongly discouraged | Strongly discouraged | Acceptable for static info site with no PII collection; mandatory if PI is collected |

**Pattern:** EU-aligned jurisdictions (DE / PT) and BR are all opt-in / consent-first / similar penalty severity. The US (CCPA) is the outlier — opt-out, with notice rather than consent. **The agency default is consent-first across all four**, because consent-first satisfies the EU/BR/PT requirements AND is permissible under CCPA (opt-out is a floor, not a ceiling).

---

## DE — Germany (DSGVO + Impressum)

Mandatory for any client whose business operates from a German address, or who markets primarily to a DE audience.

### Required pages

| Page | Required? | Purpose |
|---|---|---|
| Impressum | **Always** (TMG § 5 + MStV) | Full legal disclosure of business identity |
| Datenschutzerklärung | **Always** if any data is collected (includes IP logs, GA4, forms) | DSGVO-compliant privacy policy |
| Cookie Banner | Only if non-essential cookies are used | Consent gate for tracking |
| Terms of Use (AGB) | Optional for info sites; **required** for Type 3+ (booking, transactional, app) | Contractual terms between client and visitor |

### Impressum — required structure

Per TMG § 5 + MStV § 18. Missing any of these fields is the #1 reason German small-business sites get cease-and-desist letters from competitor lawyers (Abmahnung industry).

1. **Full legal name** of the responsible party (Inhaber/Inhaberin for sole proprietorship; full company name + legal form for Gmbh / UG / etc.)
2. **Street address** — physical, not a P.O. Box. Coworking-space address acceptable if it's the registered business address.
3. **Contact:** email **and** phone (both required — phone alone is insufficient; email alone is risky)
4. **Handelsregister (HRB) entry** — register court + entry number — for any Gmbh / UG / AG / KG / oHG. Sole proprietors are exempt.
5. **USt-IdNr** (VAT ID) — required if the business is VAT-registered. Format: `DE` + 9 digits.
6. **Aufsichtsbehörde** (regulatory authority) — required for regulated trades (Ärztekammer for doctors, Rechtsanwaltskammer for lawyers, IHK for many trades). Look up via the relevant Kammer's directory.
7. **Berufsbezeichnung + verleihender Staat** — for regulated professions (e.g. "Rechtsanwalt — verliehen in der Bundesrepublik Deutschland")
8. **Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV** — content responsibility statement: name + address (usually same as 1+2 for solo operators)

**Reachability rule:** Impressum link must be reachable within 2 clicks from every page — standard practice is a fixed footer link labeled exactly "Impressum" (do not creative-rename — Abmahnung lawyers literally search for the exact word).

### Datenschutzerklärung — required structure

Per DSGVO Art. 13 + Art. 14. The minimum acceptable structure:

1. **Verantwortlicher** — controller identity (mirrors Impressum §1 + §2 + §3)
2. **Datenverarbeitung beim Besuch der Website** — server log data (IP, user agent, referer, timestamp) — legal basis Art. 6 (1) f
3. **Cookies** — categorization (essential / functional / analytics / marketing) + opt-in/opt-out mechanism
4. **Kontaktaufnahme** — what happens when visitor uses the contact form (data fields, retention period, recipients)
5. **Eingebundene Drittdienste** — every third-party processor named: Vercel (hosting), GA4 (if used), Microsoft Clarity (if used), Resend (if forms), Sentry (if used), Google Maps embed (if used), Calendly/Doctolib/Trinks (if used), etc.
6. **Rechte der Betroffenen** — Art. 15-22 rights enumerated: Auskunft / Berichtigung / Löschung / Einschränkung / Datenübertragbarkeit / Widerspruch
7. **Beschwerderecht** — supervisory authority (default: state DPA where business is registered)
8. **Speicherdauer** — retention periods per data category
9. **Datensicherheit** — TLS + access-control statement
10. **Aktualisierung dieser Erklärung** — last-updated date + amendment notice

### Cookie banner threshold

Identical structure to BR/PT — see §Cookie consent banner — universal spec. DE-specific notes:

- "ePrivacy guidance" from the BfDI (DSK Orientierungshilfe) clarifies that even **functional** cookies that go beyond strict necessity may require consent. When in doubt, banner.
- The 2022 telecommunications-telemedia data protection law (TTDSG / TDDDG) made consent mandatory for non-essential cookies regardless of personal-data status. Pre-TTDSG ambiguity is gone.

### Generator / template resources

| Resource | Use for | Cost |
|---|---|---|
| **eRecht24** | Impressum + Datenschutzerklärung generator (German legal practice standard) | Freemium — paid tier required for commercial use |
| **Anwalt.de Impressum-Generator** | Alternative free generator | Free |
| **iubenda** | Multi-jurisdiction policy + cookie banner | Freemium |
| **BfDI Orientierungshilfen** | https://www.bfdi.bund.de | Free — regulator's official guidance |

**Rule:** Generator output is a **starting point**, never a final document. Owner must read every section and confirm: legal name, address, registered tax IDs, list of third-party processors. Agencies have been fined for incorrect Impressum content on client sites — the agency's job is to ensure the form is correct, the owner's job is to confirm the facts.

### Pre-launch checklist for DE-market sites

(Captured in `CHECKLIST.md` §Legal — German market — mandatory; mirrored here for completeness.)

- [ ] Impressum page exists at `/impressum` (or footer-linked equivalent), reachable from every page
- [ ] Impressum contains all 8 fields (legal name, address, email+phone, HRB if applicable, USt-IdNr if applicable, Aufsichtsbehörde for regulated trades, Berufsbezeichnung for regulated professions, MStV §18 statement)
- [ ] Impressum reviewed and confirmed by client owner
- [ ] Datenschutzerklärung exists at `/datenschutz` (or equivalent), all 10 required sections present
- [ ] Datenschutzerklärung lists every third-party processor by name (Vercel, GA4, Resend, etc.)
- [ ] Cookie banner shipped if any non-essential cookie is dropped — consent-first, "Reject all" parity
- [ ] All legal pages are **not** set to `noindex`
- [ ] Footer link to Impressum uses the exact word "Impressum" (no creative rename)

---

## BR — Brazil (LGPD)

Brazilian-market sites operate under the **LGPD — Lei Geral de Proteção de Dados** (Lei nº 13.709/2018). Penalties for non-compliance reach 2 % of revenue capped at R$ 50M per infraction, plus daily fines. Treat with the same seriousness as DSGVO.

**Required for any site that collects any data** — and "any data" includes IP addresses logged by Vercel, GA4 events, contact-form submissions, and even WhatsApp click-tracking via analytics. The threshold is essentially "is a public-facing site" → yes → LGPD applies.

### Required components

| Component | What it covers | Where it lives |
|---|---|---|
| **Política de Privacidade** | All seven LGPD-mandated topics (see structure below) | Dedicated page at `/politica-de-privacidade` |
| **Razão Social + MEI/CNPJ disclosure** | Legal business name + tax registration number | Site footer, every page |
| **Data Controller contact** | Email for data subject requests under Art. 18 LGPD | Política de Privacidade + footer |
| **Cookie banner** | Only if non-essential cookies are used | Conditional — see threshold below |
| **Brazilian commercial registration** | Razão Social = legal name on Receita Federal records | Owner-supplied; required for footer |

### Política de Privacidade — required structure (7 sections)

The Brazilian-market equivalent of the German Datenschutzerklärung. Use this structure verbatim — these seven sections are the minimum that satisfies LGPD inspection:

1. **Quem somos** — Controller identity: legal name (Razão Social) + CNPJ/MEI + address
2. **Quais dados coletamos** — categorized list (navigation data, direct contact data, payment data if applicable)
3. **Base legal** — which LGPD Article 7 basis applies (typically legitimate interest for site maintenance + consent for analytics)
4. **Compartilhamento** — who data is shared with (analytics providers, payment processors, booking platforms)
5. **Seus direitos (Art. 18 da LGPD)** — confirmation of processing, access, correction, deletion, portability, revocation
6. **Cookies** — categorization (strictly technical vs functional vs analytics); the analytics tier requires explicit banner consent
7. **Contato do Controlador** — email + phone for data subject requests

### Footer disclosure requirements

Every page footer must show:
- **Razão Social** (legal business name as registered)
- **CNPJ** (regular company, format `XX.XXX.XXX/XXXX-XX`) **or MEI** (single-operator, format `XX.XXX.XXX/0001-XX`)
- **Operating address** (matches Razão Social registration)
- **Link to** `/politica-de-privacidade`

Solo operators are almost always MEI (Microempreendedor Individual). Multi-employee businesses are usually LTDA or SA (CNPJ).

### Cookie banner threshold under LGPD

LGPD requires banner consent only for **non-essential** cookies. Categories:

| Cookie type | Banner required? | Examples |
|---|---|---|
| Strictly technical / functional | ❌ No banner needed | Session cookies, CSRF tokens |
| Analytics with IP anonymization + no profile linking | 🟡 Strongly recommended, technically debatable | GA4 with `anonymize_ip: true`, Microsoft Clarity in privacy-first mode |
| Analytics with user profiling | ✅ Banner required, opt-in before fire | Standard GA4, Meta Pixel, TikTok Pixel |
| Advertising / remarketing | ✅ Banner required, opt-in before fire | Google Ads conversion, Facebook Pixel |

**Agency default:** Microsoft Clarity configured in privacy-first mode (no session recording of forms, IP anonymization). This avoids the cookie banner for most Type 1–2 client sites. Verify Clarity settings per project before launch.

### Pix payment trust signal

Pix (Brazil's instant payment system per Banco Central do Brasil) is a **trust signal** worth surfacing for any Brazilian-market site that takes payments — even indirectly via booking platforms. Visible "Aceita Pix" badge in checkout, contact, or pricing sections reads as "real Brazilian business, modern payment." Note: this is brand/conversion, not legal — but it's a market-specific pattern worth documenting alongside LGPD.

### Generator / template resources

| Resource | Use for | Cost |
|---|---|---|
| **iubenda** | LGPD-compliant policy generator + cookie banner | Freemium |
| **CookieYes** | Cookie banner with LGPD pre-set | Freemium |
| **ANPD official guidance** | https://www.gov.br/anpd/pt-br | Free |
| **Banco Central — Pix** | https://www.bcb.gov.br/en/financialstability/pix_en | Free (for trust-signal context) |

### Pre-launch checklist for BR-market sites

(Captured in `CHECKLIST.md` §Legal — Brazilian market — mandatory; mirrored here.)

- [ ] `/politica-de-privacidade` exists with all 7 sections
- [ ] Footer shows Razão Social + CNPJ/MEI + operating address on every page
- [ ] Data Controller email is real and monitored
- [ ] Cookie banner shipped *only if* non-essential cookies are used (per threshold table)
- [ ] All third-party integrations (analytics, booking, payments) named in §4 Compartilhamento
- [ ] Política updated whenever a new third-party tool is added
- [ ] Owner-confirmed Razão Social and CNPJ/MEI before launch — never invented
- [ ] Política de Privacidade is **not** set to `noindex`

---

## PT — Portugal (RGPD + national)

Portuguese-market sites operate under the **RGPD — Regulamento Geral de Proteção de Dados** (the Portuguese implementation of EU GDPR, Lei nº 58/2019) plus national consumer-protection requirements unique to Portugal.

**Important:** RGPD is GDPR — there is no Portugal-specific privacy framework distinct from EU law. The differences from DE are at the **national-disclosure** layer (NIF / CAE / Livro de Reclamações), not at the privacy-policy layer.

### Required pages

| Page | Required? | Purpose |
|---|---|---|
| Política de Privacidade | **Always** if any data is collected | RGPD-compliant privacy policy (effectively identical to DSGVO Datenschutzerklärung in scope) |
| Cookie Banner | Only if non-essential cookies are used | Consent gate (CNPD Deliberação 2022/622 is the operative guidance) |
| Termos e Condições | Optional for info sites; **required** for transactional (Type 3+) | Contractual terms |
| Livro de Reclamações link | **Required** for any business providing services or goods to consumers | National consumer-rights regime — DL 156/2005 |

### Footer disclosure requirements

Portuguese national law requires a "ficha técnica"-style block in the footer:

- **Razão social** (legal company name) or sole-trader name
- **NIF** (Número de Identificação Fiscal — 9 digits)
- **CAE** (Classificação Portuguesa das Atividades Económicas) — the primary CAE code identifies the business activity
- **Sede / morada** (registered head-office address)
- **Capital social** (registered share capital) — required for sociedades; not for sole-trader / empresário em nome individual
- **Conservatória do Registo Comercial + número de matrícula** — required for sociedades; not for sole-trader
- **Livro de Reclamações Eletrónico link** — `https://www.livroreclamacoes.pt/inicio` (universal URL — no per-business token)

The Livro de Reclamações link is a **legal obligation** for any business providing services or goods to the public, including online. Missing it is a documented violation under DL 74-A/2017.

### Política de Privacidade — required structure

RGPD-aligned. Use the same 10-section structure as DE's Datenschutzerklärung (§Datenschutzerklärung — required structure above), translated to Portuguese. PT-specific notes:

- Section §Verantwortlicher → "**Responsável pelo tratamento**" (name + NIF + address + email)
- Section §Beschwerderecht → "**Direito a apresentar reclamação**" — explicitly name CNPD (Comissão Nacional de Proteção de Dados) as the supervisory authority, with link to https://www.cnpd.pt
- Section §Eingebundene Drittdienste → "**Subcontratantes / parceiros**" — list every third-party processor

### Cookie banner threshold

Identical to DE/BR — consent required for non-essential cookies. PT-specific notes:

- The CNPD Deliberação 2022/622 explicitly requires equal prominence of "Accept" and "Reject" buttons. The agency's "Reject all parity" rule (see §Cookie consent banner — universal spec) is the rule that satisfies this.
- Cookie banner copy should be in Portuguese (PT-PT, not PT-BR) — minor terminology differences (e.g. "consentimento" vs "consentimento", "rejeitar" vs "rejeitar" — these align; but "ecrã" PT vs "tela" BR differs).

### Livro de Reclamações Eletrónico

Required component — not negotiable. Implementation:

```html
<a href="https://www.livroreclamacoes.pt/inicio"
   target="_blank"
   rel="noopener"
   aria-label="Livro de Reclamações (abre em nova janela)">
  Livro de Reclamações
</a>
```

Place in the footer alongside the legal disclosure block. Do not gate behind cookies / login / banners.

### Generator / template resources

| Resource | Use for | Cost |
|---|---|---|
| **CNPD official guidance** | https://www.cnpd.pt | Free |
| **Portal das Finanças (NIF lookup)** | NIF format verification | Free |
| **Livro de Reclamações** | https://www.livroreclamacoes.pt/inicio | Free (mandatory link) |
| **iubenda** | RGPD-compliant policy generator | Freemium |

### Pre-launch checklist for PT-market sites

(Captured in `CHECKLIST.md` §Legal — Portuguese market — mandatory.)

- [ ] Footer block contains: Razão social + NIF (9 digits) + CAE + sede/morada
- [ ] If sociedade: footer also has capital social + Conservatória + número de matrícula
- [ ] Livro de Reclamações link present in footer (`https://www.livroreclamacoes.pt/inicio`)
- [ ] `/politica-de-privacidade` exists with RGPD-aligned 10 sections (PT-PT translation)
- [ ] CNPD named as supervisory authority in the rights section
- [ ] All third-party processors named in subcontratantes section
- [ ] Cookie banner shipped if non-essential cookies used (CNPD 2022/622 parity)
- [ ] Owner-confirmed NIF and CAE — never invented
- [ ] Privacy + Termos pages are **not** set to `noindex`

---

## US — United States (CCPA/CPRA + state baselines + COPPA)

**Per-client activation rule:** US legal applies only when a client has explicit US-market exposure — physical US presence, registered US entity, or active marketing/sales targeting US residents. Passive accessibility from the US does not trigger US legal by itself (though it can — see CCPA private right of action for breaches).

When activated, the agency applies the **California baseline** (CCPA/CPRA — strictest US state framework) plus COPPA if the client's audience includes under-13s. Other state laws (VCDPA / CPA / CTDPA / UCPA) are largely covered by satisfying CCPA — the agency does not separately implement each state's rules.

### Activation criteria — when US legal kicks in

| Trigger | US legal activated? |
|---|---|
| Client is a registered US entity (LLC, Inc., DBA in any state) | ✅ Yes |
| Client has a US-based physical address that appears on the site | ✅ Yes |
| Client runs paid ads targeted at US residents | ✅ Yes |
| Site has US-currency pricing, US-shipping page, or US-only CTAs | ✅ Yes |
| Site has any contact form that can be reached from the public internet | 🟡 Recommended — implement Notice at Collection minimum |
| Client serves > 100K California consumers' PI annually | ✅ Yes — also CPRA business threshold |
| Client has no US presence and explicitly does not market to US | ❌ No (but global Privacy Policy practice still wise) |

When **any** of the first 5 rows is true, ship US legal in production.

### CCPA / CPRA (California — strictest US state framework)

The California Consumer Privacy Act (CCPA, 2020) as amended by the California Privacy Rights Act (CPRA, 2023) sets the strictest US-state baseline. Most agency clients with US exposure satisfy CCPA and call it done.

#### Privacy Policy — required structure under CCPA

The Privacy Policy must include, at minimum:

1. **Notice at Collection** — what categories of personal information are collected; the purposes; whether sold or shared. Must be linked directly from the form / point of collection.
2. **Categories of personal information collected** — use the CPRA's 9 enumerated categories (identifiers, customer records, characteristics, commercial info, biometric, internet activity, geolocation, sensory, professional/employment, education, inferences).
3. **Categories of sources** — where the PI comes from (directly from consumer, from cookies, from third parties)
4. **Business / commercial purposes** for collection
5. **Categories of third parties** with whom PI is shared
6. **Consumer rights** — Right to Know, Delete, Correct, Opt-Out of Sale/Sharing, Limit Use of Sensitive Personal Information, Non-Retaliation
7. **How to exercise rights** — must include a "Do Not Sell or Share My Personal Information" link if any "sale" or "share" occurs (broadly defined — includes most ad-tech sharing)
8. **Retention periods** per category of PI
9. **Notice for minors** under 16 (opt-in to sale required) and under 13 (verifiable parental consent under COPPA)
10. **Effective date** + amendment history

#### Footer disclosure — CCPA

- **"Your Privacy Choices"** link (or "Do Not Sell or Share My Personal Information" — both accepted, with the [official icon](https://privacyrights.us/) preferred)
- Link to the full Privacy Policy
- Effective date of the current policy version

CCPA does **not** require an Impressum-equivalent. The agency does not ship US-only sites with a full business-identity footer disclosure unless the client has a separate brand-trust reason to.

#### Cookie consent — CCPA posture is OPT-OUT, not opt-in

This is the critical US/EU difference. CCPA does **not** require pre-consent before cookies fire. Instead it requires:

1. **Notice at Collection** at or before the point cookies fire (typically a small banner, or a clear link in the footer)
2. **A working opt-out mechanism** — "Your Privacy Choices" link must lead to a form/toggle that disables sale/share of PI
3. **GPC (Global Privacy Control) signal honored** — if the browser sends `Sec-GPC: 1`, treat it as a valid opt-out for that user. Per CalAG enforcement actions, ignoring GPC is the #1 cited CCPA violation in 2024-2025.

**Agency default:** ship the same consent-first banner the EU/BR sites use, with the "Reject all" path mapped to CCPA opt-out semantics. This satisfies both EU and US requirements with a single banner. The banner copy may need a US-specific phrasing — see §Cookie consent banner — universal spec for the universal copy template.

### State-law baseline rollup (VCDPA / CPA / CTDPA / UCPA)

The Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), and Utah (UCPA) consumer privacy laws all came into effect in 2023-2024. They share a common core that is **less strict than CCPA**. Agency rule: **if you satisfy CCPA, you satisfy these four**. The only state-specific addition worth surfacing:

- **Colorado (CPA)** requires honoring a universal opt-out signal — same as CCPA's GPC requirement. Same code path satisfies both.

The agency does not maintain separate state-by-state privacy pages; one CCPA-aligned Privacy Policy serves all five states.

### COPPA — under-13 audience

The Children's Online Privacy Protection Act (COPPA, 1998, updated 2024) is **federal** US law and applies regardless of state. Triggers:

- Site is "directed to" children under 13 (Education-vertical sites are high-risk here)
- Operator has actual knowledge that it collects PI from a user under 13

When COPPA applies:

1. **Verifiable Parental Consent** required before collecting any PI from a child
2. **Privacy Policy section** specifically addressing children's data
3. **No behavioral advertising** to verified-under-13 users
4. **Penalties up to $51,744 per violation** (FTC enforcement)

**Agency activation rule:** COPPA flagged automatically for the **education vertical** (per the per-vertical layer relevance matrix). For other verticals, COPPA only applies if the client explicitly markets to under-13s.

### Generator / template resources

| Resource | Use for | Cost |
|---|---|---|
| **California AG CCPA portal** | https://oag.ca.gov/privacy/ccpa | Free — enforcement source |
| **iubenda** | CCPA-compliant policy generator | Freemium |
| **Termly** | CCPA + multi-state + COPPA | Freemium |
| **GPC official site** | https://globalprivacycontrol.org/ | Free — for implementation testing |
| **PrivacyRights.us icon** | "Your Privacy Choices" icon asset | Free |

### Pre-launch checklist for US-market sites

- [ ] Privacy Policy includes all 10 CCPA-required sections
- [ ] "Notice at Collection" available at every form / point of PI collection
- [ ] "Your Privacy Choices" link present in footer (with official icon)
- [ ] Working opt-out mechanism (toggle / form that actually disables sale/share cookies)
- [ ] GPC signal honored — test by sending `Sec-GPC: 1` header
- [ ] Privacy Policy is **not** set to `noindex`
- [ ] If education vertical or under-13 audience: COPPA section added + parental consent flow shipped
- [ ] Effective date + amendment history maintained
- [ ] Owner-confirmed business identity (LLC name, EIN if relevant)

---

## Cookie consent banner — universal spec

Applies across all 4 jurisdictions. The banner is the same UI; the per-jurisdiction differences are in **copy** and **default state** (opt-in for EU/BR/PT, opt-out for US), not in component structure.

**Scope of this spec:** the rule + the test. **The actual reference component ships in Batch 3** of the expansion plan as part of `INTEGRATIONS.md` / reference implementations. Until then, every production build must satisfy the rules below with custom code or a vetted third-party widget (iubenda, CookieYes, Cookiebot).

### Consent-first script-blocking rule

**No tracking script may load before consent.** "Tracking script" = any third-party script that drops a non-essential cookie or makes a request to a third-party domain for behavior measurement.

```html
<!-- WRONG — script fires on page load regardless of consent -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXX"></script>

<!-- CORRECT — script tag is inert until consent fires -->
<script type="text/plain"
        data-cookie-category="analytics"
        data-src="https://www.googletagmanager.com/gtag/js?id=G-XXX">
</script>
```

Consent-handler JS upgrades `type="text/plain"` to `type="text/javascript"` (or injects the script tag for real) only after the user opts in to the matching category.

**Why this matters:** "lazy-loading" or "on-consent injection" is the only DSGVO/LGPD-compliant pattern. A script that fires on `DOMContentLoaded` and "checks consent itself" before sending data is non-compliant — the script *itself* loading from the third-party domain already constitutes a data transmission.

### Required UI components

| Component | What it does | Required? |
|---|---|---|
| **Banner appears on first visit** | Shown before any non-essential cookie fires | Always (EU/BR/PT) · Conditional on detected jurisdiction (US — Notice at Collection only) |
| **"Accept all" button** | Grants consent to all categories | Always |
| **"Reject all" button** | Refuses all non-essential cookies; site still functions | Always — equal prominence + same click depth as Accept all |
| **"Customize" / "Manage preferences" link** | Opens per-category toggles | Always |
| **Per-category toggles** (Essential / Functional / Analytics / Marketing) | User selects categories | Always when "Customize" is opened |
| **"Save preferences" button** | Persists selection | Always |
| **Cookie policy link** | Links to /privacy or /datenschutz | Always |
| **Footer link "Manage cookie preferences"** | Always-available re-open of the banner | Always — non-negotiable per DSGVO/LGPD/CNPD |

### Category-segmented model

Every cookie / tracker is tagged into one of four categories:

| Category | What goes here | Default state |
|---|---|---|
| **Essential** | Strictly necessary cookies (session, CSRF, language preference, consent record itself) | Always on, no toggle |
| **Functional** | Cookies that enhance UX but aren't essential (e.g. embedded video preference, accessibility settings) | Off by default; user can opt in |
| **Analytics** | GA4, Microsoft Clarity, PostHog, Sentry user session correlation | Off by default; user opts in |
| **Marketing** | Meta Pixel, Google Ads, TikTok Pixel, retargeting | Off by default; user opts in |

**Granularity rule:** never bundle "Analytics + Marketing" as a single toggle. They are separate categories with separate consent.

### Cookie duration ≤ 6 months

- **The consent-record cookie itself** stores the user's choice. It must expire in **≤ 180 days**. Re-prompt after expiry.
- **Any cookie set under a granted consent** must also expire ≤ 180 days unless the user has been told otherwise in the cookie policy.
- **Session cookies** (no `Expires` / `Max-Age`) are unaffected — they expire when the tab closes.

### "Reject all" parity requirement

Per the CNIL (FR), the BfDI (DE), the CNPD (PT), and the CalAG (US), the "Reject all" button MUST:

1. **Be visible on the first banner view** — no "tap Manage preferences first to find Reject" maze.
2. **Be equally prominent** — same size, contrast, position weight as "Accept all". Same button-style class.
3. **Require no more clicks** than "Accept all" to fully reject.
4. **Use clear language** — "Reject all", "Refuse all", "Recusar todos", "Alle ablehnen" — NOT "Continue without accepting", NOT "Only essential" (acceptable as a label only when paired with a visible primary "Reject all" of equal weight).

The #1 enforcement finding across DE / FR / PT / BR is dark-pattern "Reject all" hidden behind a Customize click. The agency does not ship banners with this pattern.

### Re-consent flow

Re-prompt for consent when:
- The consent record cookie has expired (≤ 6 months since last prompt)
- New tracking categories or new third-party processors are added to the site (consent applies to a specific declared set)
- The Privacy Policy changes materially (e.g., new data category collected)

Implementation: on policy/processor changes, bump a `consentVersion` integer. If the user's stored consent has `version < currentVersion`, treat as expired and re-prompt.

### Audit log / consent record

Every consent action (Accept all / Reject all / per-category Save) must be loggable for **6 years** (DSGVO retention guidance for proof of consent). The agency default: a `consent_log` row written to either:

- Vercel KV (free tier) — `{ userId: anonymous-session-uuid, timestamp, categories: { analytics: true/false, ... }, ipHash, userAgent }`
- A self-hosted endpoint that ships consent records to Better Stack / Logtail / similar

The consent record itself must **not** include PII beyond what's necessary. IP hashes (SHA-256 with a rotating salt) are acceptable; raw IPs are not.

### US-CCPA exception — opt-out posture

For US-only sites (no EU/BR/PT exposure):

- Banner is replaced with a smaller **Notice at Collection** strip (1-2 lines) explaining what cookies fire and linking to the Privacy Policy
- "Your Privacy Choices" link in the footer leads to a toggle page (or modal) where the user opts **out** of sale/share
- All cookies may fire on first load (opt-out, not opt-in) — but **GPC signal** must be honored from request 1

**Multi-jurisdiction sites** (EU+US, BR+US, etc.) ship the consent-first banner — it satisfies all jurisdictions.

### Reference snippet — script-blocking pattern

```html
<!-- In the document <head>, BEFORE any tracking script -->
<script>
  // Tiny consent shim — runs synchronously, blocks until consent decision
  (function() {
    const STORAGE_KEY = 'consent_v1';
    const stored = localStorage.getItem(STORAGE_KEY);
    window.__consent = stored ? JSON.parse(stored) : null;

    // Upgrade type="text/plain" scripts on consent
    window.__applyConsent = function(consent) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: 1,
        timestamp: Date.now(),
        categories: consent,
      }));
      document.querySelectorAll('script[type="text/plain"][data-cookie-category]')
        .forEach(function(s) {
          var cat = s.getAttribute('data-cookie-category');
          if (consent[cat]) {
            var fresh = document.createElement('script');
            fresh.async = s.async;
            fresh.src = s.getAttribute('data-src');
            if (s.textContent) fresh.textContent = s.textContent;
            s.parentNode.replaceChild(fresh, s);
          }
        });
    };
  })();
</script>

<!-- Then any third-party tracking script -->
<script type="text/plain"
        data-cookie-category="analytics"
        data-src="https://www.googletagmanager.com/gtag/js?id=G-XXX"
        async></script>
```

The banner UI calls `window.__applyConsent({ analytics: true, marketing: false, functional: true })` on Save. The full banner UI ships in Batch 3.

---

## Terms of Use spec — universal baseline

Terms of Use (also "Terms of Service", "Termos e Condições", "AGB" in DE) are **optional** for info-only sites (Type 1 with no forms) and **mandatory** for any site that creates a contractual relationship with the visitor:

- Type 2+ with contact forms that imply a service offer
- Type 3+ booking / appointment scheduling
- Type 4+ transactional (any payment)
- Type 5 application (any account creation)

### Required sections (minimum)

1. **Identification of the operator** — references Impressum / Footer disclosure
2. **Scope and acceptance** — what the terms cover, how acceptance occurs (browse, register, transact)
3. **Description of the service** — what the site does
4. **User obligations** — acceptable use, prohibited conduct
5. **Intellectual property** — ownership of site content, license to user
6. **Limitation of liability** — disclaimers within jurisdiction limits (note: DSGVO + LGPD + CCPA all limit how far liability can be disclaimed)
7. **Payments** (Type 4+) — pricing, billing, refunds, taxes
8. **Cancellation / refund** (Type 3+ booking, Type 4+ transactional)
9. **Termination** — under what conditions the operator can suspend access
10. **Governing law + jurisdiction** — which courts/laws apply (typically the operator's country)
11. **Changes to terms** — how amendments are communicated
12. **Contact** — email + reference to Privacy Policy

### Per-jurisdiction additions

| Jurisdiction | Required addition |
|---|---|
| DE | German consumer-protection cooling-off period (14 days for distance contracts under BGB § 312 ff) |
| BR | Código de Defesa do Consumidor — 7-day cooling-off for distance contracts (Art. 49 CDC) |
| PT | DL 24/2014 — 14-day cooling-off for distance contracts |
| US | State-level — varies. California-only: clear "automatic renewal" disclosures per CA Auto Renewal Law if subscriptions exist |

### Generator / template resources

| Resource | Use for | Cost |
|---|---|---|
| **iubenda** | Multi-jurisdiction Terms generator | Freemium |
| **Termly** | US-focused | Freemium |
| **eRecht24 AGB generator** | DE-focused | Paid |

**Rule:** Terms of Use require client-confirmed business terms (refund policy, pricing, jurisdiction). Generator output is a starting point, never final. For Type 4+ (transactional) builds, **mandatory** real legal review before launch.

---

## Privacy Policy — common cross-jurisdiction structure

A single Privacy Policy can serve multiple jurisdictions if it is structured to address each. Pattern: cross-reference rather than duplicate.

**Top-of-document framing:**

```
This Privacy Policy applies to [SITE_DOMAIN].
For EU/EEA visitors: this notice constitutes the information required under Articles 13 and 14 GDPR.
For Brazilian residents: this notice constitutes the disclosure required under LGPD Art. 9.
For California residents: this notice constitutes the Notice at Collection required under CCPA.
For UK visitors: this notice serves the requirements of the UK GDPR.
```

**Common sections that work across all four jurisdictions:**

1. **Who we are** — controller identity (legal name + tax ID + address + contact email)
2. **What we collect** — categorized data fields (use the CCPA 9 categories — they fit DSGVO/LGPD too)
3. **Why we collect it** — purpose per category (use both DSGVO Art. 6 legal bases AND CCPA business purposes — they overlap)
4. **Who we share with** — every third-party processor named
5. **How long we keep it** — retention per category
6. **How we protect it** — TLS, access control, encryption at rest if applicable
7. **Your rights** — enumerated for each jurisdiction (DSGVO Art. 15-22 / LGPD Art. 18 / CCPA Right to Know-Delete-Correct-Opt-Out + Limit / RGPD identical to DSGVO)
8. **How to exercise rights** — email address + response timeline (DSGVO: 30 days; LGPD: 15 days; CCPA: 45 days). Default to the shortest applicable.
9. **Cookies** — link to detailed cookie list + banner re-open
10. **Children** — COPPA (US) + DSGVO minor consent (under-16) + LGPD minor consent (under-12)
11. **Supervisory authority** — per-jurisdiction body named (BfDI / ANPD / CNPD / California AG)
12. **Updates** — effective date + amendment history

**Default agency approach:** ship a **single multi-jurisdiction Privacy Policy** for any site with mixed audience. For single-market sites (DE-only, BR-only), trim to that jurisdiction's exact requirements.

---

## Disclaimer + when to escalate to a real lawyer

This doc encodes engineering-implementation patterns. It does not encode legal advice. Specific situations that **always** require a real lawyer (not just generator output + agency review):

| Situation | Why escalate |
|---|---|
| Any payment processing (Type 4+) | Refund law / consumer-protection / tax compliance varies materially per jurisdiction |
| Health / medical data (vertical: health) | Specialized PII handling under DSGVO Art. 9 / LGPD Art. 11 / HIPAA-adjacent state laws |
| Education vertical with under-13 audience | COPPA + state-specific student privacy laws (e.g. California's SOPIPA) |
| Multi-employee businesses with own data handling | Internal data-handling agreements (Auftragsverarbeitung in DE, equivalent in BR/PT) |
| Cross-border data transfer | Standard Contractual Clauses or equivalent — generator output is insufficient |
| Any client request that "we don't need [X]" | Document the client's position; do not ship the bypass unless legal review confirms |

**The agency's job:** ship a site that will pass a lawyer audit. Owner-confirmed business facts (legal name, tax ID, third-party processor list, retention periods) are an input. Real legal review is an output validation, not a substitute for getting the implementation right.

---

## Cross-references

- `SECURITY.md` §German legal requirements + §Brazilian legal requirements (LGPD) — these now stub to this doc; full content lives here
- `CHECKLIST.md` §Legal (German market — mandatory) + §Legal (Brazilian market — mandatory) + §Legal (Portuguese market — mandatory) — pre-launch checklist items mirror the per-section pre-launch checklists here
- `CHECKLIST.md` §Operational tests — covers consent-banner-blocks-scripts, no-PII-in-Sentry, GPC-respected
- `INFRASTRUCTURE.md` §Error tracking — Sentry recipe with `send_default_pii: false` (the in-code enforcement of the no-PII rule)
- `ANALYTICS.md` §Consent gating — implementation pattern for the consent-first script-blocking rule documented here
- `FORMS.md` — contact form data collection feeds Privacy Policy §What we collect
- Per-vertical templates (Batch 2/3) — vertical-specific legal callouts (Education COPPA, Health DSGVO Art. 9, Pro Services confidentiality)
