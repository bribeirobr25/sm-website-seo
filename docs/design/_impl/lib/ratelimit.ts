/**
 * Upstash rate-limit — per INTEGRATIONS.md §Upstash.
 * IP hashed with rotating salt; raw IPs never written to Redis keys.
 *
 * Lazy-initialized — `Redis.fromEnv()` throws if env vars are missing,
 * which would fire during Next.js page-data collection + CI builds.
 */

import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import crypto from 'node:crypto';

let _trialSignupLimit: Ratelimit | undefined;

export function getTrialSignupLimit(): Ratelimit {
  if (!_trialSignupLimit) {
    _trialSignupLimit = new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(5, '60 s'),
      analytics: true,
      prefix: 'rl:trial',
    });
  }
  return _trialSignupLimit;
}

export function hashIp(ip: string): string {
  const salt = process.env.IP_HASH_SALT ?? 'unset-rotate-quarterly';
  return crypto
    .createHash('sha256')
    .update(ip + salt)
    .digest('hex')
    .slice(0, 16);
}
