'use client';

/**
 * ShareButton — per SOCIAL-SHARING.md §Share-button component — spec.
 * Studio vertical default per SOCIAL-SHARING.md §Per-vertical share strategy:
 * WhatsApp + Instagram + Copy. No third-party SDK, no tracking pixel.
 */

import { useState } from 'react';
import { track } from '@/lib/analytics';
import { SITE } from '@/lib/site';

interface Props {
  url?: string;
  title?: string;
  source: string;
}

export function ShareButton({ url = SITE.url, title = SITE.name, source }: Props) {
  const [copied, setCopied] = useState<'instagram' | 'copy_link' | null>(null);
  const encUrl = encodeURIComponent(url);
  const encTitle = encodeURIComponent(title);

  function handleCopy(target: 'instagram' | 'copy_link') {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(target);
        setTimeout(() => setCopied(null), 1500);
      })
      .catch(() => {});
    track('share_click', { share_target: target, source_section: source });
  }

  function handleWhatsApp() {
    track('share_click', { share_target: 'whatsapp', source_section: source });
  }

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-text-muted">Teilen:</span>

      <a
        href={`https://wa.me/?text=${encTitle}%20${encUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Auf WhatsApp teilen"
        onClick={handleWhatsApp}
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface hover:bg-surface-elev text-text-muted hover:text-accent transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.296-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
        </svg>
      </a>

      <button
        type="button"
        aria-label={copied === 'instagram' ? 'Kopiert!' : 'Link für Instagram kopieren'}
        onClick={() => handleCopy('instagram')}
        className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface hover:bg-surface-elev transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          copied === 'instagram' ? 'text-accent' : 'text-text-muted hover:text-accent'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      </button>

      <button
        type="button"
        aria-label={copied === 'copy_link' ? 'Kopiert!' : 'Link kopieren'}
        onClick={() => handleCopy('copy_link')}
        className={`inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface hover:bg-surface-elev transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
          copied === 'copy_link' ? 'text-accent' : 'text-text-muted hover:text-accent'
        }`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </svg>
      </button>
    </div>
  );
}
