import { api } from '@/lib/axios';
import type { Form } from '@/store/useForms/formTypes';

export type RatingData = {
  entrada: number;
  prato_proteico: number;
  opcao: number;
  acompanhamento: number;
  guarnicao: number;
  sobremesa: number;
  comentario?: string;
};

export async function saveStudent(student: Form) {
  const { data } = await api.post('alunos', student);
  return data;
}
