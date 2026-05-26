#!/usr/bin/env node
/**
 * Re-encode all tree photos in public/img/trees/*.webp to budget per PERFORMANCE.md §5.
 *
 *  - photo-1 (hero on /trees/[slug]):  target ≤ 250 KB, max width 1920, q=62
 *  - photo-2/-3 (gallery + card):       target ≤ 120 KB, max width 1280, q=70
 *
 *  Originals are moved to public/img/trees/_original/ before encoding for
 *  forensics. Re-runnable: detects already-encoded targets and skips.
 *
 *  Invoked via:  node scripts/reencode-tree-photos.mjs
 */
import sharp from 'sharp';
import { readdir, mkdir, rename, stat, access } from 'node:fs/promises';
import { constants } from 'node:fs';
import { join, basename } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const SRC = join(ROOT, 'public/img/trees');
const ORIG = join(SRC, '_original');

const HERO = { width: 1600, quality: 55 };
const CARD = { width: 900, quality: 60 };

async function exists(p) {
  try {
    await access(p, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await exists(ORIG))) await mkdir(ORIG, { recursive: true });

  const entries = (await readdir(SRC)).filter((f) => f.endsWith('.webp'));
  let heroCount = 0, cardCount = 0;
  let totalBefore = 0, totalAfter = 0;

  for (const file of entries) {
    const src = join(SRC, file);
    const origPath = join(ORIG, file);

    // Move original to _original/ if not already there
    if (!(await exists(origPath))) {
      await rename(src, origPath);
    }

    const isHero = /-1\.webp$/.test(file);
    const opts = isHero ? HERO : CARD;

    const beforeStat = await stat(origPath);
    await sharp(origPath)
      .resize({ width: opts.width, withoutEnlargement: true })
      .webp({ quality: opts.quality, effort: 6 })
      .toFile(src);
    const afterStat = await stat(src);

    totalBefore += beforeStat.size;
    totalAfter += afterStat.size;

    const bf = (beforeStat.size / 1024).toFixed(0);
    const af = (afterStat.size / 1024).toFixed(0);
    const arrow = afterStat.size <= (isHero ? 250 : 120) * 1024 ? '✓' : '⚠';
    console.log(`${arrow} ${isHero ? 'HERO' : 'CARD'}  ${file.padEnd(40)} ${bf.padStart(4)} KB → ${af.padStart(4)} KB`);

    if (isHero) heroCount++;
    else cardCount++;
  }

  const savedKb = ((totalBefore - totalAfter) / 1024).toFixed(0);
  const savedPct = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log('\n' + '─'.repeat(70));
  console.log(`Re-encoded ${heroCount} hero + ${cardCount} card images`);
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB (saved ${savedKb} KB, ${savedPct}%)`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
