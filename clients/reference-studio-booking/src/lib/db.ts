/**
 * Neon serverless Postgres — per INTEGRATIONS.md §Neon.
 * HTTP driver (not pg-direct) for serverless connection management.
 */

import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is required');
}

const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
