import { z } from 'zod';

import { api } from '@/lib/axios';

const authSchema = z.object({
  token: z.string(),
});

const loginSchema = z.object({
  auth: authSchema,
});

type LoginProps = {
  email: string;
  password: string;
};

export type loginData = z.infer<typeof loginSchema>;

export async function login({ email, password }: LoginProps) {
  return api.post('/loginApp', { email, password });
  // return loginSchema.parse(data);
}
