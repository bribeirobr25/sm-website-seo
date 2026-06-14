#!/usr/bin/env node
/**
 * Optimize portfolio thumbnails — thum.io returns 1200×1200 squares of the
 * page hero. We crop the bottom of each to a clean 16:10 landscape (1600×1000),
 * then encode as WebP at budget (≤ 250 KB per PERFORMANCE.md §5).
 *
 * Single asset per portfolio entry — front-end uses `aspect-[16/10]` +
 * `object-cover` for responsive cropping at display time.
 */
import sharp from 'sharp';
import { readdir, stat, unlink, rename } from 'node:fs/promises';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIR = join(ROOT, 'public/img/portfolio');

async function main() {
  const files = (await readdir(DIR)).filter((f) => f.endsWith('.jpg') && !f.endsWith('.tmp.jpg'));
  let totalBefore = 0, totalAfter = 0;

  for (const file of files) {
    const src = join(DIR, file);
    const out = src.replace(/\.jpg$/, '.webp');
    const meta = await sharp(src).metadata();
    const cropH = Math.min(meta.height, Math.round(meta.width * 0.625)); // 16:10 from top

    const bs = await stat(src);
    await sharp(src)
      .extract({ left: 0, top: 0, width: meta.width, height: cropH })
      .resize({ width: 1600, height: 1000, fit: 'cover', position: 'top' })
      .webp({ quality: 78, effort: 6 })
      .toFile(out);
    await unlink(src);
    const as = await stat(out);

    totalBefore += bs.size;
    totalAfter += as.size;
    const ok = as.size <= 250 * 1024 ? '✓' : '⚠';
    console.log(`${ok} ${file.padEnd(36)} ${(bs.size / 1024).toFixed(0).padStart(5)} KB → ${(as.size / 1024).toFixed(0).padStart(4)} KB`);
  }

  console.log('\n' + '─'.repeat(60));
  console.log(`${files.length} files: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024).toFixed(0)} KB`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
