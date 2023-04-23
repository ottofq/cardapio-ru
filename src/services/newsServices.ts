import { z } from 'zod';

import { api } from '@/lib/axios';

const newsSchema = z.object({
  total_news: z.number(),
  news: z.array(
    z.object({
      _id: z.string(),
      titulo: z.string(),
      descricao: z.string(),
      data: z.string(),
    })
  ),
});

export type NewsData = z.infer<typeof newsSchema>;

const newsItemSchema = z.object({
  _id: z.string(),
  titulo: z.string(),
  descricao: z.string(),
  data: z.string(),
});

export type NewsItemData = z.infer<typeof newsItemSchema>;

export async function listNews(page = 1) {
  const { data } = await api.get('/noticias', { params: { page } });
  return newsSchema.parse(data);
}

export async function getNewsDetails(id: string) {
  const { data } = await api.get(`/noticias/${id}`);
  return newsItemSchema.parse(data);
}
