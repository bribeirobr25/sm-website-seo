import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl text-text">Datenschutzerklärung</h1>
          <p className="mt-4 text-sm text-text-muted">
            Stand: {new Date().toLocaleDateString('de-DE')}. Diese Erklärung beschreibt, welche
            Daten wir verarbeiten und warum, gemäß Art. 13 DSGVO.
          </p>

          <div className="mt-10 space-y-10 text-text">
            <section>
              <h2 className="font-display text-xl text-text">1. Verantwortlicher</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Verantwortlich für die Verarbeitung personenbezogener Daten auf dieser Website ist:
                <br />
                {SITE.legal.legalName}
                <br />
                {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}
                <br />
                E-Mail:{' '}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-accent">
                  {SITE.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">2. Rechtsgrundlagen</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir verarbeiten personenbezogene Daten auf folgenden Rechtsgrundlagen:
              </p>
              <ul className="mt-3 space-y-2 text-text-muted leading-relaxed list-disc pl-5">
                <li>
                  <span className="text-text">Art. 6 Abs. 1 lit. a DSGVO</span> — Einwilligung (z. B.
                  Cookie-Banner, Analytics).
                </li>
                <li>
                  <span className="text-text">Art. 6 Abs. 1 lit. b DSGVO</span> —
                  Vertragserfüllung (z. B. Buchung einer Probestunde).
                </li>
                <li>
                  <span className="text-text">Art. 6 Abs. 1 lit. f DSGVO</span> — Berechtigtes
                  Interesse (z. B. Server-Logs, Schutz vor Missbrauch).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">3. Server-Logs</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Beim Aufruf dieser Website werden technisch notwendige Daten verarbeitet (IP-Adresse,
                Datum, Browser-Typ, aufgerufene Seite). Diese Daten werden ausschließlich zur
                Sicherstellung des Betriebs verwendet und nach 14 Tagen gelöscht. Rechtsgrundlage:
                Art. 6 Abs. 1 lit. f DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">4. Cookies und ähnliche Technologien</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir setzen Cookies und vergleichbare Technologien ein. Essenzielle Cookies (z. B.
                zur Speicherung deiner Einwilligungs-Entscheidung) werden ohne Einwilligung
                gespeichert. Analyse-, Marketing- und Personalisierungs-Cookies werden erst nach
                deiner Einwilligung über den Cookie-Banner gesetzt. Deine Wahl kannst du jederzeit
                über den Link „Cookie-Einstellungen ändern" im Footer ändern. Rechtsgrundlage:
                § 25 Abs. 1 TTDSG i. V. m. Art. 6 Abs. 1 lit. a DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">5. Eingebundene Drittdienste</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir verwenden folgende Drittdienste. Alle nicht-essenziellen Dienste werden erst
                nach deiner Einwilligung aktiv.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-left">
                      <th className="py-2 pr-3 font-medium text-text">Dienst</th>
                      <th className="py-2 pr-3 font-medium text-text">Zweck</th>
                      <th className="py-2 font-medium text-text">Verarbeitungsort</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SITE.legal.processors.map((p) => (
                      <tr key={p.name} className="border-b border-border">
                        <td className="py-2 pr-3 text-text">{p.name}</td>
                        <td className="py-2 pr-3 text-text-muted">{p.purpose}</td>
                        <td className="py-2 text-text-muted">{p.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-text-muted leading-relaxed">
                Bei Übermittlungen in die USA stützen wir uns auf Standardvertragsklauseln (SCC)
                gemäß Art. 46 Abs. 2 lit. c DSGVO.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">
                6. Buchung der Probestunde (Vertragserfüllung)
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wenn du eine Probestunde buchst, verarbeiten wir deinen Vornamen, deine
                E-Mail-Adresse und — falls angegeben — deine Telefonnummer, um dich kontaktieren
                und den Termin bestätigen zu können. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
                (Vertragserfüllung). Daten zu nicht eingelösten Probestunden werden nach 90 Tagen
                gelöscht; Daten zu eingelösten Probestunden werden nach Ende des Geschäftsjahres
                gemäß steuerrechtlichen Aufbewahrungspflichten verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">7. Externe Buchungsplattform</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Reguläre Klassenbuchungen erfolgen auf der externen Plattform{' '}
                <a
                  href={SITE.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  Mindbody
                </a>
                . Beim Klick auf einen Buchungslink verlässt du diese Website. Es gelten dann die
                Datenschutzbestimmungen von Mindbody. Wir haben mit Mindbody einen Vertrag zur
                Auftragsverarbeitung gemäß Art. 28 DSGVO abgeschlossen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">8. Deine Rechte</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Du hast jederzeit das Recht auf:
              </p>
              <ul className="mt-3 space-y-2 text-text-muted leading-relaxed list-disc pl-5">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruch (Art. 21 DSGVO)</li>
                <li>Widerruf einer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wende dich für die Ausübung deiner Rechte an{' '}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-accent">
                  {SITE.email}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">9. Beschwerderecht</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Du hast das Recht, dich bei einer Aufsichtsbehörde zu beschweren. Die für uns
                zuständige Behörde ist die Berliner Beauftragte für Datenschutz und Informations­freiheit,
                Friedrichstr. 219, 10969 Berlin.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">10. Änderungen dieser Erklärung</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir behalten uns vor, diese Erklärung an geänderte Rechtslage oder bei Änderungen
                des Dienstes anzupassen. Die jeweils aktuelle Fassung gilt ab Veröffentlichung auf
                dieser Seite.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
