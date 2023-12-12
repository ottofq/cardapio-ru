import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import { Empty } from '@/components/Empty';
import { Error } from '@/components/Error';
import { useMenu, useRating } from '@/hooks/menu';
import useAuth from '@/hooks/useAuth';

import RatingItem from './RatingItem';
import type { RatingModalMethods } from './RatingModal';
import RatingModal from './RatingModal';
import RatingSkeleton from './Skeleton';

export default function Rating() {
  const {
    data: menu,
    isError: isErrorMenu,
    isLoading: isLoadingMenu,
  } = useMenu();
  const { token } = useAuth();
  const menuId = menu?.id ?? '';

  const { data: rating, isLoading, isError, refetch } = useRating(menuId);

  const ratingModaRef = React.useRef<RatingModalMethods>(null);

  function showModal() {
    ratingModaRef.current?.showModal();
  }

  if (isLoading || isLoadingMenu) {
    return <RatingSkeleton />;
  }

  if (isError || isErrorMenu) {
    return (
      <Error
        title="Erro no carregamento"
        description="Desculpe, ocorreu um problema ao carregar os dados. Tente novamente mais tarde."
        onPress={refetch}
      />
    );
  }

  if (!rating) {
    return <Empty />;
  }

  if (!menu) {
    return <Empty />;
  }

  return (
    <ScrollView className="relative flex-1 bg-white ">
      {!token ? (
        <View className="absolute inset-0 z-20 h-full w-full items-center justify-center">
          <View className="absolute inset-0 z-10 h-full w-full bg-black opacity-70" />
          <View className="z-20 mx-4 items-center rounded bg-white px-4 py-10">
            <Text className="text-sm font-bold">
              CADASTRE-SE OU EFETUE O LOGIN PARA AVALIAR O CARDÁPIO
            </Text>
          </View>
        </View>
      ) : null}
      <View style={styles.gap} className="mb-10 p-4">
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
