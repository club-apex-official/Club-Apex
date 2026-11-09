import { z } from 'zod';

export const loginSchema = z
  .object({
    email: z.string().trim().email('Email must be valid').max(254).transform((value) => value.toLowerCase()),
    password: z.string().min(1, 'Password is required').max(72, 'Password must be at most 72 characters'),
  })
  .strict();
