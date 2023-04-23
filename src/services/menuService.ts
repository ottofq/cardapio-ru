import { z } from 'zod';

import { api } from '@/lib/axios';

const menuSchema = z.object({
  _id: z.string(),
  data: z.string(),
  tipo: z.string(),
  entrada: z.string(),
  prato_proteico: z.string(),
  opcao: z.string(),
  acompanhamento: z.string(),
  guarnicao: z.string(),
  sobremesa: z.string(),
});

const ratingSchema = z.object({
  _id: z.string(),
  total_avaliacoes: z.number(),
  avaliacao: z.object({
    entrada: z.number(),
    prato_proteico: z.number(),
    opcao: z.number(),
    acompanhamento: z.number(),
    guarnicao: z.number(),
    sobremesa: z.number(),
  }),
});

export type MenuData = z.infer<typeof menuSchema>;
export type RatingData = z.infer<typeof ratingSchema>;

export async function getLastMenu() {
  const { data } = await api.get('/cardapio/last');
  return menuSchema.parse(data);
}

export async function getMenuRating(id: string) {
  const { data } = await api.get(`/cardapio/avg/${id}`);
  return ratingSchema.parse(data);
}
