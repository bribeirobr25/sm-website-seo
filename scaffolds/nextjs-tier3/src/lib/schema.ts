/**
 * Database schema — Drizzle ORM.
 *
 * **Setup steps for new client:**
 * 1. Replace `example_contacts` below with the table(s) your client actually needs
 *    (booking_signups, orders, inquiries, etc.). The shape below is illustrative —
 *    a minimal contact-form intake demonstrating the Drizzle + Neon + lazy-init pattern.
 * 2. Run `pnpm db:generate` to produce migrations, then `pnpm db:push` (dev) or
 *    `pnpm db:migrate` (production).
 * 3. PII handling: per `LEGAL.md`, store only what's necessary for the legal basis you
 *    declare. Per `INTEGRATIONS.md` §Neon: encrypt sensitive columns at rest in
 *    production (pgcrypto pattern — see migration notes).
 *
 * Worked example (Tier 3 booking flow): `docs/design/_impl/lib/schema.ts` —
 * the archived studio-booking impl's `trial_signups` table with full PII discipline,
 * status state machine, and rate-limit IP hashing.
 */

import { pgTable, uuid, text, timestamp, boolean } from 'drizzle-orm/pg-core';

export const exampleContacts = pgTable('example_contacts', {
  id: uuid('id').primaryKey().defaultRandom(),

  // Identifiers — server-side only, never in analytics events
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'), // optional

  // Free-text message from the form
  message: text('message'),

  // Operational
  status: text('status').notNull().default('pending'),
  // 'pending' | 'responded' | 'closed' — adapt per client workflow
  consentToContact: boolean('consent_to_contact').notNull().default(true),

  // Audit
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),

  // Hashed IP for rate-limit correlation (NOT for identification)
  ipHash: text('ip_hash'),
});

export type ExampleContact = typeof exampleContacts.$inferSelect;
export type NewExampleContact = typeof exampleContacts.$inferInsert;
