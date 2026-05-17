'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SITE } from '@/lib/site';
import { track, EVENTS } from '@/lib/analytics';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function TrialPage() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('submitting');
    setError(null);
    track(EVENTS.TRIAL_SIGNUP_STARTED, { source_section: 'trial_form' });

    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get('firstName'),
      email: formData.get('email'),
      phone: formData.get('phone') || null,
      classSlug: formData.get('classSlug'),
      preferredDate: formData.get('preferredDate') || null,
      experienceBand: formData.get('experienceBand'),
      consentToContact: formData.get('consentToContact') === 'on',
      // Honeypot
      website: formData.get('website'),
    };

    try {
      const res = await fetch('/api/trial', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? 'Bitte versuche es später erneut.');
      }
      setState('success');
      track(EVENTS.TRIAL_SIGNUP_COMPLETED, {
        source_section: 'trial_form',
        class_slug: String(payload.classSlug ?? ''),
      });
    } catch (err) {
      setState('error');
      setError(err instanceof Error ? err.message : 'Bitte versuche es später erneut.');
      track(EVENTS.TRIAL_SIGNUP_FAILED, { source_section: 'trial_form' });
    }
  }

  return (
    <>
      <Header />
      <main id="main" className="section">
        <div className="container-page max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl text-text">Probestunde sichern</h1>
          <p className="mt-4 text-text-muted leading-relaxed">
            12 € · 60 – 75 Minuten · inklusive Matte. {SITE.trial.cooloff}
          </p>

          {state === 'success' ? (
            <div
              role="status"
              className="mt-10 p-6 rounded-lg bg-surface border border-accent"
            >
              <h2 className="font-display text-2xl text-text">Vielen Dank!</h2>
              <p className="mt-3 text-text-muted leading-relaxed">
                Wir haben deine Anfrage erhalten und melden uns innerhalb von 24 Stunden mit der
                Bestätigung. Schau in dein Postfach (auch im Spam-Ordner).
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
              {/* Honeypot — versteckt für Menschen, sichtbar für Bots */}
              <div className="absolute -left-[9999px]" aria-hidden="true">
                <label>
                  Website (bitte leer lassen)
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text">
                  Vorname *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="given-name"
                  className="mt-2 w-full px-4 py-3 min-h-[48px] rounded-md bg-surface border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text">
                  E-Mail *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  className="mt-2 w-full px-4 py-3 min-h-[48px] rounded-md bg-surface border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text">
                  Telefon (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={30}
                  autoComplete="tel"
                  className="mt-2 w-full px-4 py-3 min-h-[48px] rounded-md bg-surface border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>

              <div>
                <label htmlFor="classSlug" className="block text-sm font-medium text-text">
                  Wunschklasse *
                </label>
                <select
                  id="classSlug"
                  name="classSlug"
                  required
                  defaultValue=""
                  className="mt-2 w-full px-4 py-3 min-h-[48px] rounded-md bg-surface border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <option value="" disabled>
                    Bitte wählen
                  </option>
                  {SITE.classes.map((c) => (
                    <option key={c.slug} value={c.slug}>
                      {c.name} — {c.level}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-text">
                  Wunschtermin (optional)
                </label>
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  className="mt-2 w-full px-4 py-3 min-h-[48px] rounded-md bg-surface border border-border text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                />
              </div>

              <fieldset>
                <legend className="block text-sm font-medium text-text">Yoga-Erfahrung *</legend>
                <div className="mt-2 space-y-2">
                  {[
                    { value: 'never', label: 'Noch nie praktiziert' },
                    { value: 'occasional', label: 'Gelegentlich (≤ 1× / Monat)' },
                    { value: 'regular', label: 'Regelmäßig (≥ 1× / Woche)' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className="flex items-center gap-3 p-3 min-h-[44px] rounded-md bg-surface border border-border hover:border-accent cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="experienceBand"
                        value={opt.value}
                        required
                        className="accent-accent"
                      />
                      <span className="text-sm text-text">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="flex items-start gap-3 p-3 rounded-md cursor-pointer">
                <input
                  type="checkbox"
                  name="consentToContact"
                  required
                  defaultChecked
                  className="mt-1 accent-accent"
                />
                <span className="text-sm text-text-muted leading-relaxed">
                  Ich willige ein, dass mich Studio Sereno per E-Mail oder Telefon kontaktiert, um
                  meine Probestunde zu bestätigen. Die Verarbeitung erfolgt auf Grundlage von
                  Art. 6 Abs. 1 lit. b DSGVO. Mehr Informationen in der{' '}
                  <a href="/datenschutz" className="underline hover:text-accent">
                    Datenschutzerklärung
                  </a>
                  .
                </span>
              </label>

              {error && (
                <p role="alert" className="text-sm text-warning">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={state === 'submitting'}
                className="w-full inline-flex items-center justify-center px-6 py-4 min-h-[52px] text-base font-medium rounded-md bg-accent text-bg hover:bg-accent-deep transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60 disabled:pointer-events-none"
              >
                {state === 'submitting' ? 'Wird gesendet …' : 'Probestunde anfragen'}
              </button>

              <p className="text-xs text-text-muted text-center">
                Wir kontaktieren dich innerhalb von 24 Stunden für die Terminbestätigung.
              </p>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
