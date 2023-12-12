import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

import { queryClient } from '@/lib/react-query';
import type { RatingData } from '@/services/ratingService';
import { ratingMenu } from '@/services/ratingService';
import { QueryKeys } from '@/utils/queryKeys';

type useUpdateRatingProps = {
  menuId: string;
  onSuccess: Function;
};

export const useUpdateRating = ({ menuId, onSuccess }: useUpdateRatingProps) =>
  useMutation({
    mutationFn: (ratingData: RatingData) => ratingMenu(menuId, ratingData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.rating, menuId] });
      onSuccess();
    },
    onError: () => {
      Alert.alert(
        'Error',
        'Não foi possivel enviar a avaliação, tente novamente!'
      );
    },
  });
