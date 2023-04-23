import { api } from '@/lib/axios';

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
  const { data } = await api.post(`/cardapio/avaliar/${menuId}`, {
    student_id: '643f206b4ca93400538b5770',
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
