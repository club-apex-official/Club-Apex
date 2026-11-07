import { z } from 'zod';

export const registerStudentSchema = z
  .object({
    fullName: z.string().trim().min(2, 'Full name must be at least 2 characters').max(100, 'Full name must be at most 100 characters'),
    prn: z.string().trim().regex(/^[a-zA-Z0-9]{5,20}$/, 'PRN must be 5-20 alphanumeric characters').transform((value) => value.toUpperCase()),
    email: z.string().trim().email('Email must be valid').transform((value) => value.toLowerCase()),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(72, 'Password must be at most 72 characters')
      .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
      .regex(/\d/, 'Password must contain at least one number'),
  })
  .strict();
