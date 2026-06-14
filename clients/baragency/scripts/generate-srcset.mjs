#!/usr/bin/env node
/**
 * Generate mobile (768w) and tablet (1280w) WebP variants alongside the existing
 * desktop (1920w) source. Output naming: `name.webp` (existing) stays as-is at
 * 1920w; `name-768.webp` (mobile) + `name-1280.webp` (tablet) are produced fresh.
 *
 * Also: resize portfolio thumbnails in-place to 800w (they were 1600w which
 * Lighthouse flagged as oversized for the 634px display).
 *
 * Run after `scripts/compress-photos.mjs` (or any time the source photos change).
 */
import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const HERO_ROOTS = [
  'public/img/home',
  'public/img/about',
  'public/img/services/website',
  'public/img/services/seo',
  'public/img/services/google-business',
  'public/img/services/social-media',
];
const THUMB_ROOTS = ['public/img/portfolio'];

const HERO_WIDTHS = [768, 1280];
const THUMB_TARGET_WIDTH = 800;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && entry.name.endsWith('.webp') && !/-(?:768|1280)\.webp$/.test(entry.name))
      yield full;
  }
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

console.log('--- Hero variants (768w + 1280w) ---');
for (const root of HERO_ROOTS) {
  try {
    for await (const src of walk(root)) {
      for (const w of HERO_WIDTHS) {
        const dest = src.replace('.webp', `-${w}.webp`);
        await sharp(src)
          .resize({ width: w, withoutEnlargement: true })
          .webp({ quality: 75, effort: 6 })
          .toFile(dest);
        const size = (await stat(dest)).size;
        console.log(`${dest}: ${fmt(size)}`);
      }
    }
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
}

console.log('\n--- Portfolio thumbs (resize in-place to 800w) ---');
for (const root of THUMB_ROOTS) {
  try {
    for await (const src of walk(root)) {
      const beforeSize = (await stat(src)).size;
      const tmp = src.replace('.webp', '.tmp.webp');
      await sharp(src)
        .resize({ width: THUMB_TARGET_WIDTH, withoutEnlargement: true })
        .webp({ quality: 75, effort: 6 })
        .toFile(tmp);
      const { rename } = await import('node:fs/promises');
      await rename(tmp, src);
      const afterSize = (await stat(src)).size;
      console.log(`${src}: ${fmt(beforeSize)} -> ${fmt(afterSize)}`);
    }
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
}

console.log('\nDone.');
