import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { getNewsDetails, listNews } from '@/services/newsServices';
import { QueryKeys } from '@/utils/queryKeys';

export function useListNews() {
  return useInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => listNews(pageParam),
    queryKey: [QueryKeys.news],
  });
}

export function useNewsDetails(id: string | null) {
  return useQuery({
    queryFn: () => getNewsDetails(id),
    queryKey: [QueryKeys.news, id],
    initialData: () => {
      return { _id: '0', titulo: '', descricao: '' };
    },
    enabled: !!id,
  });
}
