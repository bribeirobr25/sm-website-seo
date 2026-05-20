import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page max-w-xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-accent-deep font-medium">
            Fehler 404
          </p>
          <h1 className="mt-4 font-display text-4xl md:text-5xl text-text">
            Diese Seite konnten wir nicht finden.
          </h1>
          <p className="mt-5 text-text-muted leading-relaxed">
            Vielleicht hast du dich vertippt, oder wir haben die Seite verschoben. Hier sind ein
            paar Anlaufpunkte.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-base font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors"
            >
              Zur Startseite
            </Link>
            <Link
              href="/kurse"
              className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-base font-medium rounded-md bg-surface text-text border border-border hover:bg-surface-elev transition-colors"
            >
              Kurse ansehen
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
