/**
 * Database schema — Drizzle ORM.
 *
 * trial_signups: own DB-backed trial-class booking (Tier 3 / Type 3
 * demonstration — not a Mindbody pass-through).
 *
 * PII handling: customer name + email stored server-side for the trial
 * booking flow. Per LEGAL.md §DE: legal basis is Art. 6(1)(b) DSGVO
 * (Vertragserfüllung / contract execution). Per INTEGRATIONS.md §Neon:
 * sensitive columns should be encrypted at rest in production — agency
 * canonical pattern uses pgcrypto, see migration notes.
 */

import { pgTable, uuid, text, timestamp, integer, boolean } from 'drizzle-orm/pg-core';

export const trialSignups = pgTable('trial_signups', {
  id: uuid('id').primaryKey().defaultRandom(),

  // Identifiers — server-side only, never in analytics events
  firstName: text('first_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone'), // optional

  // Booking selection
  classSlug: text('class_slug').notNull(), // matches SITE.classes[].slug
  preferredDate: text('preferred_date'), // ISO date string, owner contacts to confirm
  experienceBand: text('experience_band'), // 'never' | 'occasional' | 'regular' — never the actual level

  // Operational
  status: text('status').notNull().default('pending'),
  // 'pending' | 'confirmed' | 'attended' | 'no_show' | 'cancelled'
  consentToContact: boolean('consent_to_contact').notNull().default(true),

  // Audit
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),

  // Hashed IP for rate-limit correlation (NOT for identification)
  ipHash: text('ip_hash'),
});

export type TrialSignup = typeof trialSignups.$inferSelect;
export type NewTrialSignup = typeof trialSignups.$inferInsert;

// Future: classes, bookings, members tables when own booking system fully replaces Mindbody.
// The reference impl ships trial_signups as the demonstrable DB-backed flow.
