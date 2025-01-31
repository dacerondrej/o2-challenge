import { z } from 'zod';

export const userSchema = z.object({
  address: z.object({
    city: z.string(),
    geo: z.object({
      lat: z.string(),
      lng: z.string(),
    }),
    street: z.string(),
    suite: z.string(),
    zipcode: z.string(),
  }),
  company: z.object({
    bs: z.string(),
    catchPhrase: z.string(),
    name: z.string(),
  }),
  email: z.string(),
  id: z.number(),
  name: z.string(),
  phone: z.string(),
  username: z.string(),
  website: z.string(),
});

export type User = z.infer<typeof userSchema>;
