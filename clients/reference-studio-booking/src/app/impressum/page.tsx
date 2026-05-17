import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Angaben gemäß § 5 TMG.',
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl text-text">Impressum</h1>
          <p className="mt-4 text-sm text-text-muted">
            Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV.
          </p>

          <div className="prose-content mt-10 space-y-8 text-text">
            <section>
              <h2 className="font-display text-xl text-text">1. Anbieter</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                {SITE.legal.legalName} (Einzelunternehmerin)
                <br />
                {SITE.address.street}
                <br />
                {SITE.address.postalCode} {SITE.address.city}
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">2. Kontakt</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Telefon: {SITE.phoneDisplay}
                <br />
                E-Mail:{' '}
                <a href={`mailto:${SITE.email}`} className="underline hover:text-accent">
                  {SITE.email}
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">
                3. Umsatzsteuer-Identifikationsnummer
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                USt-IdNr. gemäß § 27 a Umsatzsteuergesetz: {SITE.legal.ustIdNr}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">4. Berufshaftpflichtversicherung</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                <span className="font-medium">DRAFT — vom Inhaber zu bestätigen.</span> Name und
                Sitz der Versicherung, geografischer Geltungsbereich.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">
                5. Inhaltlich verantwortlich nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                {SITE.legal.contentResponsiblePerson}
                <br />
                {SITE.legal.contentResponsibleAddress}
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">6. EU-Streitschlichtung</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
                bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse findest du oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">
                7. Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl text-text">8. Haftung für Inhalte und Links</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
                Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte
                fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
                rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-3 text-text-muted leading-relaxed">
                Für die Inhalte externer Links übernehmen wir keine Haftung. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
