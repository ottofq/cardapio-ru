import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Box from '@/components/Box';
import { Empty } from '@/components/Empty';
import { Error } from '@/components/Error';
import { useListNews } from '@/hooks/news';
import type { NewsItemData } from '@/services/newsServices';
import { formatDate } from '@/utils/dateFormat';

import NewsDetailsModal from './NewsDetailsModal';
import NewsSkeleton from './Skeleton';

export default function News() {
  const { data, isError, isLoading, fetchNextPage, hasNextPage, refetch } =
    useListNews();
  const [newsId, setNewsId] = React.useState('');

  const modalRef = React.useRef();

  if (isLoading) {
    return <NewsSkeleton />;
  }

  if (isError) {
    return (
      <Error
        title="Erro no carregamento"
        description="Desculpe, ocorreu um problema ao carregar os dados. Tente novamente mais tarde."
        onPress={refetch}
      />
    );
  }

  if (!data) {
    return <Empty />;
  }

  function loadMore() {
    if (hasNextPage) {
      fetchNextPage();
    }
  }

  function openModal(id: string) {
    setNewsId(id);
    modalRef?.current?.showModal();
  }

  function renderItem({ item }: { item: NewsItemData }) {
    return (
      <Pressable onPress={() => openModal(item._id)}>
        <Box>
          <Text className="text-base font-bold">{item.titulo}</Text>
          <Text className="mt-1 text-slate-400">{formatDate(item.data)}</Text>
        </Box>
      </Pressable>
    );
  }

  return (
    <React.Fragment>
      <FlatList
        className="flex-1 p-4"
        contentContainerStyle={styles.gap}
        keyExtractor={(item) => item._id}
        data={data.pages.map((page) => page.news).flat()}
        renderItem={renderItem}
        onEndReached={loadMore}
      />
      <NewsDetailsModal ref={modalRef} id={newsId} />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  gap: {
    rowGap: 12,
  },
});
