'use client';

/**
 * Per Next.js convention — error.tsx is a nested error boundary inside
 * the root layout. It does NOT render <html>/<body> (that's global-error.tsx).
 * Sentry capture is explicit here in addition to the withSentryConfig wiring.
 */

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main id="main" className="section">
      <div className="container-page max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-warning font-medium">Fehler 500</p>
        <h1 className="mt-4 font-display text-4xl md:text-5xl text-text">
          Etwas ist schiefgelaufen.
        </h1>
        <p className="mt-5 text-text-muted leading-relaxed">
          Wir haben den Fehler erfasst und schauen uns das an. Probiere es bitte gleich noch einmal,
          oder ruf uns an, wenn es nicht klappt.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-base font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 min-h-[48px] text-base font-medium rounded-md bg-surface text-text border border-border hover:bg-surface-elev transition-colors"
          >
            Zur Startseite
          </Link>
        </div>

        {error.digest && (
          <p className="mt-8 text-xs text-text-muted tabular">Referenz: {error.digest}</p>
        )}
      </div>
    </main>
  );
}
