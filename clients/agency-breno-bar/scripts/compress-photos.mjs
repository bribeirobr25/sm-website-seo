#!/usr/bin/env node
/**
 * One-shot photo compression: walks public/img/{home,about,services}, resizes
 * to 1920px max-width, encodes WebP q80 alongside the source, deletes the
 * original .jpg. Run after sourcing fresh Unsplash photos.
 *
 * Usage: pnpm node scripts/compress-photos.mjs
 */
import sharp from 'sharp';
import { readdir, stat, unlink } from 'node:fs/promises';
import { extname, join } from 'node:path';

const ROOTS = [
  'public/img/home',
  'public/img/about',
  'public/img/services/website',
  'public/img/services/seo',
  'public/img/services/google-business',
  'public/img/services/social-media',
];

const MAX_WIDTH = 1920;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile() && /\.(jpg|jpeg|png)$/i.test(entry.name)) yield full;
  }
}

function fmt(bytes) {
  if (bytes > 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  return `${(bytes / 1024).toFixed(0)} KB`;
}

const results = [];

for (const root of ROOTS) {
  try {
    for await (const src of walk(root)) {
      const ext = extname(src);
      const dest = src.replace(ext, '.webp');
      const before = (await stat(src)).size;
      await sharp(src)
        .resize({ width: MAX_WIDTH, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(dest);
      const after = (await stat(dest)).size;
      await unlink(src);
      results.push({ src, dest, before, after });
      console.log(
        `${src}: ${fmt(before)} -> ${fmt(after)} (${Math.round((1 - after / before) * 100)}% smaller)`,
      );
    }
  } catch (e) {
    if (e.code !== 'ENOENT') throw e;
  }
}

const totalBefore = results.reduce((s, r) => s + r.before, 0);
const totalAfter = results.reduce((s, r) => s + r.after, 0);
console.log(
  `\nTotal: ${fmt(totalBefore)} -> ${fmt(totalAfter)} (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller across ${results.length} files)`,
);
