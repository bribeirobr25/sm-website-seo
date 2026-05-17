# BRIEF.md — Reference: Studio (Booking)

Per-client brief for `clients/reference-studio-booking/`. The studio is fictional — all data is illustrative.

---

## 1. Business

| Field | Value |
|---|---|
| Name | Studio Sereno Yoga |
| Owner | Anna Hartmann |
| Year founded | 2017 |
| Type of business | Sole proprietorship (Einzelunternehmerin) |
| Market | Germany — Berlin Mitte |
| Languages | DE (PT-BR + EN deferred to expansion phase) |
| Approximate weekly classes | ~15 across 4 class lines (Hatha · Vinyasa · Yin · Pranayama) |
| Approximate active members | 80 (DRAFT — used only for sizing the trial-conversion funnel) |
| Instructor count | 2 (Anna + Jonas) |

---

## 2. Scope of engagement

Build a website (Type 3 — Info + booking) with **own** trial-class signup flow, deep-linking to **Mindbody** for all paid class bookings.

The trial flow is the only DB-backed feature on the site. Everything else is informational + external deep-link.

### Pages

- `/` — Home (Hero + Classes + About + Pricing + Instructors + Visit)
- `/kurse` — Class catalog + pricing
- `/stundenplan` — Weekly schedule grid (data hardcoded in reference impl; production should sync from Mindbody)
- `/trial` — Probestunden-Anfrage form
- `/impressum` — DSGVO TMG §5 Impressum
- `/datenschutz` — DSGVO Datenschutzerklärung
- `404` + `500` — branded error pages

### Integrations

- **Mindbody** — external booking platform (paid classes — deep-link out)
- **Neon** (EU region) — Postgres for trial_signups table
- **Upstash Redis** (EU-West) — rate-limit on /api/trial
- **Resend** — trial-confirmation transactional email
- **Sentry** — error tracking, EU region, `sendDefaultPii: false`
- **GA4 + Clarity + PostHog** — 4-stream analytics (consent-gated)

---

## 3. Open questions (DRAFT items requiring owner confirmation)

| # | Item | Blocker for |
|---|---|---|
| 1 | Legal name + USt-IdNr | `/impressum` indexable launch |
| 2 | Berufshaftpflicht (insurance) — name + address + Geltungsbereich | `/impressum` §4 |
| 3 | Real business email + phone + WhatsApp | All `tel:` / `mailto:` links + Footer |
| 4 | Exact street address + postal code + verified geo | Schema.org JSON-LD + Visit section + Google Maps deep-link + GBP sync |
| 5 | Real Mindbody studio ID URL | All "Klasse buchen" CTAs |
| 6 | Final class prices (Drop-in / 10er / Monatsmitgliedschaft) | Pricing section |
| 7 | Instructor portraits (Anna + Jonas) + final bio copy | Instructors section |
| 8 | Studio photography (1 Hero + 4 Class + 2 About) | All `<Placeholder>` slots |
| 9 | Mindbody → Stundenplan sync approach (manual paste / iframe / API) | `/stundenplan` data source |
| 10 | DPA signing — confirm Auftragsverarbeitungs­verträge signed with all processors | Production cutover (DSGVO Art. 28) |
| 11 | IP_HASH_SALT generation + storage + rotation cadence | `/api/trial` rate-limit hygiene |
| 12 | Final domain choice (DE TLD vs `.com`) | DNS + Vercel domain attach + Search Console |
| 13 | Newsletter consent flow — out of scope or add Mailchimp/Brevo | Scope expansion |
| 14 | First-month membership-cohort baseline for retention KPI | Retainer KPI dashboard |

---

## 4. KPI contract

Per `docs/design/KPI.md` §KPI contract + per-vertical defaults from `docs/design/templates/studio.md` §Measurement.

| KPI | Bucket | Target | Source | Owner-confirmed |
|---|---|---|---|---|
| Trial → paid conversion | Conversion | ≥ 40% within 30 days | PostHog funnel (`trial_signup_completed` → first paid Mindbody booking, manually correlated) | ⬜ |
| Class-fill rate | Conversion | ≥ 75% prime time · ≥ 50% off-peak | Mindbody report (monthly retainer review) | ⬜ |
| Member retention (active MoM) | Retention | ≥ 85% for cohorts past month 3 | PostHog cohort + Mindbody membership status | ⬜ |
| Mindbody handoff rate | Conversion | ≥ 6% of sessions reach `booking_started` | GA4 + PostHog (consent-gated) | ⬜ |

**Verification at production cutover:**
- All 4 events fire correctly with consent granted (manual QA)
- All 4 events suppress correctly with consent revoked
- PostHog opt-out + GA4 absence on first paint without consent verified

---

## 5. Timeline (illustrative)

| Phase | Window | Status |
|---|---|---|
| Demo build (this scaffold) | T+0 → T+5 days | ✅ Done as reference impl |
| Owner discovery call + DRAFT items captured | T+6 → T+10 days | Not started — this is a reference, not a real client |
| Real-data swap (photos, copy, legal IDs) | T+11 → T+18 days | — |
| Production cutover gate (CHECKLIST.md) | T+19 → T+22 days | — |
| Soft launch + first 30 days retainer review | T+23 → T+53 days | — |

---

## 6. Contacts (placeholder)

| Role | Name | Channel |
|---|---|---|
| Owner | Anna Hartmann (placeholder) | `hallo@studio-sereno-yoga.de` (placeholder) |
| Co-instructor | Jonas Becker (placeholder) | — |
| Agency lead | Breno Ribeiro | — |

---

## 7. Risk register

| Risk | Likelihood | Mitigation |
|---|---|---|
| Mindbody iframe blocked by consent before grant | Medium | Mindbody is a deep-link, not iframe — no third-party JS on the site itself |
| Trial spam via /api/trial endpoint | Medium | Upstash 5/min IP-hash rate-limit + honeypot + Zod validation + Sentry alert on > 100 failed/day |
| Missed Probestunde no-shows hurt class-fill KPI | Medium | trial_signups.status enum supports `no_show` — track to evaluate friction. Future: 24h SMS reminder via Twilio (out of scope for reference) |
| DSGVO complaint on Sentry server-side error capture | Low | `sendDefaultPii: false` non-negotiable in all 3 Sentry configs (verified at scaffold) |
| GA4 + Clarity firing without consent | Low | type="text/plain" pattern + applyConsent() upgrade verified in reference impl; CHECKLIST.md §1.5 operational tests catch regressions |
| Mindbody API change breaks /stundenplan sync | Low | Reference impl uses hardcoded data; production should pin to Mindbody public iframe widget or manual-paste flow (no live API integration in retainer scope unless explicitly added) |
