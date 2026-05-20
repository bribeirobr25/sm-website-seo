/**
 * Neon serverless Postgres — per INTEGRATIONS.md §Neon.
 * HTTP driver (not pg-direct) for serverless connection management.
 *
 * Lazy-initialized so importing this module is a no-op until first use —
 * required for Next.js "Collecting page data" build step + preview/CI
 * builds where DATABASE_URL may legitimately be absent.
 */

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

let _db: ReturnType<typeof createDb> | undefined;

function createDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is required');
  }
  const sql = neon(process.env.DATABASE_URL);
  return drizzle(sql, { schema });
}

export function getDb() {
  if (!_db) _db = createDb();
  return _db;
}
