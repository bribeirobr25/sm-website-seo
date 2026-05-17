/**
 * Upstash rate-limit — per INTEGRATIONS.md §Upstash.
 * IP hashed with rotating salt; raw IPs never written to Redis keys.
 */

import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import crypto from 'node:crypto';

const redis = Redis.fromEnv();

export const trialSignupLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s'),
  analytics: true,
  prefix: 'rl:trial',
});

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? 'unset-rotate-quarterly';
  return crypto
    .createHash('sha256')
    .update(ip + salt)
    .digest('hex')
    .slice(0, 16);
}
