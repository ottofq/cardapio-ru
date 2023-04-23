import { useQuery } from '@tanstack/react-query';
import React from 'react';

import type { MenuData } from '@/services/menuService';
import { getLastMenu, getMenuRating } from '@/services/menuService';
import { QueryKeys } from '@/utils/queryKeys';

type MenuDataDTO = MenuData & {
  id: string;
  pratoProteico: string;
};
export function useMenu() {
  return useQuery({
    queryKey: [QueryKeys.lastMenu],
    queryFn: getLastMenu,
    select: React.useCallback(
      (menuData: MenuData): MenuDataDTO => ({
        ...menuData,
        id: menuData._id,
        pratoProteico: menuData.prato_proteico,
      }),
      []
    ),
  });
}

export function useRating(id: string) {
  return useQuery({
    queryKey: [QueryKeys.rating, id],
    queryFn: () => getMenuRating(id),
    enabled: !!id,
  });
}
