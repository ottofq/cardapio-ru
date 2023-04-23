import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date: string) {
  const parsedDate = new Date(date);
  return format(parsedDate, 'EEEE, dd/MM/yyyy', { locale: ptBR });
}
