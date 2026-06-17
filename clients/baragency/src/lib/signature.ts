/**
 * Simulated handwritten "BAR" agency mark for the contract signature block.
 *
 * Inline SVG (vector → crisp in the A4 PDF, no raster pixelation), no asset /
 * HTTP / consent concerns, inherits `currentColor` so it prints black. Stroke
 * outlines (`fill:none`) so weight stays consistent at any size.
 *
 * **Not a legally-executed autograph.** It is the agency's *specimen* mark on a
 * template the owner reviews before sending; the binding signature is applied at
 * actual execution and the client still counter-signs. See contract § 5 and the
 * 🔴 Berlin-Rechtsanwalt review gate (the simulated signature is a co-#1 item).
 */
export const SIGNATURE_SVG = `<svg viewBox="0 0 210 72" role="img" aria-label="BAR" style="width:132px;height:auto;color:#111;display:block;" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
  <path d="M24 56 C 19 36, 21 16, 30 18 C 41 20, 36 33, 23 34 C 41 35, 43 55, 22 54" />
  <path d="M52 55 C 61 31, 68 15, 74 19 C 78 22, 80 40, 82 55 M 58 43 C 68 41, 76 42, 80 44" />
  <path d="M99 55 C 96 37, 99 17, 107 18 C 119 19, 116 35, 100 35 C 111 37, 112 46, 124 55" />
  <path d="M16 62 C 64 71, 128 69, 168 57 C 176 54, 178 50, 172 50" stroke-width="2" />
</svg>`;
