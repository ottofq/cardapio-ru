import { api } from '@/lib/axios';

import storage from '../storage';

export type RatingData = {
  entrada: number;
  prato_proteico: number;
  opcao: number;
  acompanhamento: number;
  guarnicao: number;
  sobremesa: number;
  comentario?: string;
};

export async function ratingMenu(menuId: string, ratingData: RatingData) {
  const id = storage.getItem('id');
  const { data } = await api.post(`/cardapio/avaliar/${menuId}`, {
    student_id: id,
    avaliacao: {
      entrada: ratingData.entrada,
      prato_proteico: ratingData.prato_proteico,
      opcao: ratingData.opcao,
      acompanhamento: ratingData.acompanhamento,
      guarnicao: ratingData.guarnicao,
      sobremesa: ratingData.sobremesa,
    },
    comentario: ratingData.comentario,
  });
  return data;
}
