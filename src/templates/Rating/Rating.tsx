import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { useMenu, useRating } from '@/hooks/menu';

import RatingItem from './RatingItem';
import type { RatingModalMethods } from './RatingModal';
import RatingModal from './RatingModal';
import RatingSkeleton from './Skeleton';

export default function Rating() {
  const { data: menu } = useMenu();
  const menuId = menu?.id ?? '';

  const { data: rating, isLoading, error } = useRating(menuId);

  const ratingModaRef = React.useRef<RatingModalMethods>(null);

  function showModal() {
    ratingModaRef.current?.showModal();
  }

  if (isLoading) {
    return <RatingSkeleton />;
  }

  if (error) {
    return <Text>error</Text>;
  }

  if (!rating) {
    return <Text>Vazio</Text>;
  }

  if (!menu) {
    return <Text>Vazio</Text>;
  }

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <View style={styles.gap} className="mb-10">
        <Text className="text-center text-xl font-bold shadow-2xl">
          Total avaliações:{rating.total_avaliacoes}
        </Text>
        <RatingItem
          title={menu.pratoProteico}
          stars={rating.avaliacao.entrada}
          readonly
        />
        <RatingItem
          title={menu.entrada}
          stars={rating.avaliacao.prato_proteico}
          readonly
        />
        <RatingItem
          title={menu.opcao}
          stars={rating.avaliacao.opcao}
          readonly
        />
        <RatingItem
          title={menu.acompanhamento}
          stars={rating.avaliacao.acompanhamento}
          readonly
        />
        <RatingItem
          title={menu.guarnicao}
          stars={rating.avaliacao.guarnicao}
          readonly
        />
        <RatingItem
          title={menu.sobremesa}
          stars={rating.avaliacao.sobremesa}
          readonly
        />
        <Button onPress={showModal} mode="contained">
          Avaliar
        </Button>
        <RatingModal ref={ratingModaRef} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gap: {
    rowGap: 8,
  },
});
