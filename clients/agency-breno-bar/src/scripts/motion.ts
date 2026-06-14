/**
 * Motion island — "Berlin night" hero aurora (raw WebGL) + tasteful GSAP
 * micro-interactions. Loaded once via BaseLayout; a no-op on pages without
 * a hero aurora or magnetic targets.
 *
 * Everything is an enhancement, never a requirement:
 *   - prefers-reduced-motion → no shader, no GSAP (content fully visible; the
 *     CSS `.hero-aurora` gradient fallback remains, the canvas stays hidden).
 *   - no WebGL → canvas hidden, CSS gradient fallback remains.
 *   - GSAP is dynamically imported ONLY on pages that have `[data-magnetic]`
 *     targets, so legal pages never pay for it.
 *   - Existing CSS `animation-timeline: view()` reveals are untouched.
 */

const reduced =
  typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------------------------------------------------------------------------
 * WebGL aurora — custom fragment shader (~3 KB), far lighter than three.js.
 * Ported from redesign/index.html (v1 prototype). Painted onto each
 * `.hero-aurora__gl` canvas; fades the canvas in on the first frame.
 * ------------------------------------------------------------------------- */
function initAurora(canvas: HTMLCanvasElement): void {
  if (reduced) return;
  const gl = canvas.getContext('webgl', {
    alpha: true,
    antialias: false,
    powerPreference: 'low-power',
  });
  if (!gl) {
    canvas.style.display = 'none';
    return;
  }
  // Non-null binding so the render closures below don't trip TS's narrowing reset.
  const glc: WebGLRenderingContext = gl;

  const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const fs = [
    'precision mediump float;',
    'uniform vec2 r;uniform float t;uniform vec2 m;',
    'float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}',
    'float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);',
    ' return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}',
    'float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<4;i++){v+=a*n(p);p*=2.05;a*=.5;}return v;}',
    'void main(){',
    ' vec2 uv=gl_FragCoord.xy/r; vec2 q=uv; q.x*=r.x/r.y;',
    ' float T=t*.045;',
    ' vec2 drift=vec2(T*.6+m.x*.18, -T*.35+m.y*.12);',
    ' float f=fbm(q*1.6+drift);',
    ' float f2=fbm(q*3.2-drift*1.4+f);',
    ' float glow=smoothstep(.35,.95,f*.65+f2*.5);',
    ' float band=smoothstep(.85,.1,abs(uv.y-.32-f*.22));',
    ' vec3 deep=vec3(.024,.043,.078);',
    ' vec3 navy=vec3(.047,.102,.169);',
    ' vec3 blue=vec3(0.,.443,.890);',
    ' vec3 ice =vec3(.486,.753,1.);',
    ' vec3 col=mix(deep,navy,glow);',
    ' col=mix(col,blue,band*glow*.55);',
    ' col=mix(col,ice,pow(band*glow,3.)*.35);',
    ' float vig=smoothstep(1.25,.35,length(uv-vec2(.5,.42)));',
    ' col*=mix(.75,1.,vig);',
    ' gl_FragColor=vec4(col,1.);',
    '}',
  ].join('\n');

  function sh(type: number, src: string): WebGLShader | null {
    const s = glc.createShader(type);
    if (!s) return null;
    glc.shaderSource(s, src);
    glc.compileShader(s);
    if (!glc.getShaderParameter(s, glc.COMPILE_STATUS)) {
      canvas.style.display = 'none';
      return null;
    }
    return s;
  }
  const v = sh(glc.VERTEX_SHADER, vs);
  const f = sh(glc.FRAGMENT_SHADER, fs);
  if (!v || !f) return;
  const prog = glc.createProgram();
  if (!prog) return;
  glc.attachShader(prog, v);
  glc.attachShader(prog, f);
  glc.linkProgram(prog);
  if (!glc.getProgramParameter(prog, glc.LINK_STATUS)) {
    canvas.style.display = 'none';
    return;
  }
  glc.useProgram(prog);

  const buf = glc.createBuffer();
  glc.bindBuffer(glc.ARRAY_BUFFER, buf);
  glc.bufferData(glc.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), glc.STATIC_DRAW);
  const loc = glc.getAttribLocation(prog, 'p');
  glc.enableVertexAttribArray(loc);
  glc.vertexAttribPointer(loc, 2, glc.FLOAT, false, 0, 0);
  const uR = glc.getUniformLocation(prog, 'r');
  const uT = glc.getUniformLocation(prog, 't');
  const uM = glc.getUniformLocation(prog, 'm');

  let mx = 0;
  let my = 0;
  let tmx = 0;
  let tmy = 0;
  addEventListener(
    'pointermove',
    (e) => {
      tmx = e.clientX / innerWidth - 0.5;
      tmy = e.clientY / innerHeight - 0.5;
    },
    { passive: true },
  );

  function resize(): void {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    const w = canvas.clientWidth;
    const hh = canvas.clientHeight;
    if (canvas.width !== w * dpr || canvas.height !== hh * dpr) {
      canvas.width = w * dpr;
      canvas.height = hh * dpr;
      glc.viewport(0, 0, canvas.width, canvas.height);
    }
  }
  addEventListener('resize', resize, { passive: true });

  // Only run the loop while the hero is on-screen (perf / battery / INP).
  let visible = true;
  new IntersectionObserver((en) => {
    visible = en[0].isIntersecting;
  }).observe(canvas);

  const t0 = performance.now();
  let painted = false;
  (function frame(now: number) {
    requestAnimationFrame(frame);
    if (!visible) return;
    resize();
    mx += (tmx - mx) * 0.04;
    my += (tmy - my) * 0.04;
    glc.uniform2f(uR, canvas.width, canvas.height);
    glc.uniform1f(uT, (now - t0) / 1000);
    glc.uniform2f(uM, mx, my);
    glc.drawArrays(glc.TRIANGLES, 0, 3);
    if (!painted) {
      painted = true;
      canvas.classList.add('is-painted');
    }
  })(t0);
}

/* ---------------------------------------------------------------------------
 * GSAP magnetic buttons — fine-pointer only, dynamically imported so it never
 * loads on pages without `[data-magnetic]` targets (e.g. legal pages).
 * ------------------------------------------------------------------------- */
async function initMagnetic(): Promise<void> {
  if (reduced) return;
  if (typeof matchMedia === 'undefined' || !matchMedia('(pointer:fine)').matches) return;
  // Explicit opt-ins + every pill CTA inside a hero (so all hero CTAs are magnetic
  // without per-page attributes). Deduped via Set.
  const targets = Array.from(
    new Set<HTMLElement>([
      ...document.querySelectorAll<HTMLElement>('[data-magnetic]'),
      ...document.querySelectorAll<HTMLElement>('.hero-dark a.rounded-full'),
    ]),
  );
  if (!targets.length) return;

  const { gsap } = await import('gsap');
  document.documentElement.classList.add('motion');

  for (const btn of targets) {
    const qx = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'power3' });
    const qy = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'power3' });
    btn.addEventListener('pointermove', (e) => {
      const b = btn.getBoundingClientRect();
      qx((e.clientX - b.left - b.width / 2) * 0.25);
      qy((e.clientY - b.top - b.height / 2) * 0.25);
    });
    btn.addEventListener('pointerleave', () => {
      qx(0);
      qy(0);
    });
  }
}

/* ---------------------------------------------------------------------------
 * Hero word-split entrance (v1) — vanilla, CSS-driven (no GSAP). Wraps each
 * marketing-hero headline word in `.hero-word` with a staggered delay. Scoped
 * to heroes that have an aurora (so legal heroes are untouched). Skipped under
 * prefers-reduced-motion; no-JS leaves the headline as plain visible text.
 * ------------------------------------------------------------------------- */
function initHeroSplit(): void {
  if (reduced) return;
  for (const aurora of Array.from(document.querySelectorAll('.hero-aurora'))) {
    const h1 = aurora.closest('.hero-dark')?.querySelector('h1');
    if (!h1) continue;
    const lines = h1.querySelectorAll(':scope > span');
    const segments: Element[] = lines.length ? Array.from(lines) : [h1];
    let idx = 0;
    for (const seg of segments) {
      // Only split plain-text segments (don't clobber any inline markup).
      if (Array.from(seg.childNodes).some((n) => n.nodeType !== Node.TEXT_NODE)) continue;
      seg.classList.remove('reveal-rise'); // hand off from the CSS reveal
      const words = (seg.textContent ?? '').trim().split(/\s+/);
      const frag = document.createDocumentFragment();
      words.forEach((w, i) => {
        const span = document.createElement('span');
        span.className = 'hero-word';
        span.style.setProperty('--hw-delay', `${idx * 55}ms`);
        span.textContent = w;
        idx += 1;
        frag.appendChild(span);
        if (i < words.length - 1) frag.appendChild(document.createTextNode(' '));
      });
      seg.textContent = '';
      seg.appendChild(frag);
    }
  }
}

/* ---------------------------------------------------------------------------
 * Count-up numbers (v1) — vanilla rAF, fired on scroll-into-view. Preserves any
 * prefix/suffix ("< 24h", "20+"); restores the exact original string at the end.
 * Skipped under prefers-reduced-motion (the final value is already in the DOM).
 * ------------------------------------------------------------------------- */
function countUp(el: HTMLElement): void {
  const original = el.textContent ?? '';
  const m = original.match(/\d[\d.,]*/);
  if (!m || m.index === undefined) return;
  const target = Number.parseInt(m[0].replace(/[.,]/g, ''), 10);
  if (!Number.isFinite(target)) return;
  const prefix = original.slice(0, m.index);
  const suffix = original.slice(m.index + m[0].length);
  const dur = 1300;
  const t0 = performance.now();
  function tick(now: number): void {
    const p = Math.min((now - t0) / dur, 1);
    const eased = 1 - (1 - p) ** 3;
    if (p < 1) {
      el.textContent = prefix + Math.round(eased * target) + suffix;
      requestAnimationFrame(tick);
    } else {
      el.textContent = original; // restore exact formatting
    }
  }
  requestAnimationFrame(tick);
}

function initCounters(): void {
  if (reduced) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count-up]'));
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        countUp(e.target as HTMLElement);
      }
    },
    { threshold: 0.4 },
  );
  for (const el of els) io.observe(el);
}

/* ---------------------------------------------------------------------------
 * Service-card cursor glow (v1) — vanilla, fine-pointer only. Sets the --mx/--my
 * CSS vars the `.svc-card-photo__glow` radial reads. Skipped under reduced-motion.
 * ------------------------------------------------------------------------- */
function initServiceGlow(): void {
  if (reduced) return;
  if (typeof matchMedia === 'undefined' || !matchMedia('(pointer:fine)').matches) return;
  for (const card of Array.from(document.querySelectorAll<HTMLElement>('.svc-card-photo'))) {
    card.addEventListener(
      'pointermove',
      (e) => {
        const b = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${((e.clientX - b.left) / b.width) * 100}%`);
        card.style.setProperty('--my', `${((e.clientY - b.top) / b.height) * 100}%`);
      },
      { passive: true },
    );
  }
}

function start(): void {
  for (const c of Array.from(document.querySelectorAll<HTMLCanvasElement>('.hero-aurora__gl'))) {
    initAurora(c);
  }
  initHeroSplit();
  initCounters();
  initServiceGlow();
  void initMagnetic();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', start);
} else {
  start();
}
