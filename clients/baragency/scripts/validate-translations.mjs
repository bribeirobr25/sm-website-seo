#!/usr/bin/env node
/**
 * Translation parity validator — per I18N.md §5.
 * Reference: EN. Asserts every locale block in SITE.i18n + PAGE_STRINGS has the same
 * key paths as EN. Portfolio + service translation parity (the `imageAlt` /
 * `shortDescription` / `longDescription` records) is enforced by the TypeScript
 * `Record<Locale, string>` shape at compile time.
 */
import { SITE } from '../src/lib/site.ts';
import { PAGE_STRINGS } from '../src/lib/page-strings.ts';

const REFERENCE = 'en';
const LOCALES = ['en', 'de', 'pt-br'];

function flattenKeys(obj, prefix = '') {
  const out = [];
  for (const [k, v] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${k}` : k;
    if (v !== null && typeof v === 'object' && !Array.isArray(v) && typeof v !== 'function') {
      out.push(...flattenKeys(v, path));
    } else {
      out.push(path);
    }
  }
  return out;
}

function diff(reference, other) {
  const a = new Set(reference);
  const b = new Set(other);
  return {
    missing: [...a].filter((k) => !b.has(k)),
    extra: [...b].filter((k) => !a.has(k)),
  };
}

let failures = 0;

function check(name, refBlock, otherBlock, locale) {
  const refKeys = flattenKeys(refBlock);
  const otherKeys = flattenKeys(otherBlock);
  const { missing, extra } = diff(refKeys, otherKeys);
  if (missing.length === 0 && extra.length === 0) {
    console.log(`✓ ${name}.${locale}: ${refKeys.length} keys parity with ${REFERENCE}`);
  } else {
    failures += missing.length + extra.length;
    console.error(`✗ ${name}.${locale}:`);
    if (missing.length) console.error(`    missing: ${missing.join(', ')}`);
    if (extra.length) console.error(`    extra:   ${extra.join(', ')}`);
  }
}

console.log('Validating SITE.i18n parity...');
const refI18n = SITE.i18n[REFERENCE];
for (const locale of LOCALES) {
  if (locale === REFERENCE) continue;
  check('SITE.i18n', refI18n, SITE.i18n[locale], locale);
}

console.log('\nValidating PAGE_STRINGS parity...');
const refPages = PAGE_STRINGS[REFERENCE];
for (const locale of LOCALES) {
  if (locale === REFERENCE) continue;
  check('PAGE_STRINGS', refPages, PAGE_STRINGS[locale], locale);
}

console.log();
if (failures > 0) {
  console.error(`Translation parity check FAILED — ${failures} key mismatches`);
  process.exit(1);
}
console.log('Translation parity check PASSED');
