import { z } from 'zod';

export const ContactSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export type ContactFormData = z.infer<typeof ContactSchema>;