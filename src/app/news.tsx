import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import LoadingView from '@/components/Loading';
import NewsDetailsModal from '@/components/NewsDetailsModal';
import { useListNews } from '@/hooks/news';
import type { NewsItemData } from '@/services/newsServices';
import { formatDate } from '@/utils/dateFormat';

export default function News() {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useListNews();
  const [newsId, setNewsId] = React.useState('');

  const modalRef = React.useRef();

  const router = useRouter();

  if (isLoading) {
    return <LoadingView />;
  }

  if (error) {
    return <Text>error</Text>;
  }

  if (!data) {
    return <Text>Vazio</Text>;
  }

  function loadMore() {
    if (hasNextPage) {
      fetchNextPage();
    }
  }

  function navigateToDetail(id) {
    //router.push(`news/${id}`);
    setNewsId(id);
    modalRef?.current.showModal();
  }

  function renderItem({ item }: { item: NewsItemData }) {
    return (
      <Pressable
        onPress={() => navigateToDetail(item._id)}
        className="flex-col rounded border bg-tertiary p-4 shadow"
      >
        <Text className=" text-base font-bold">{item.titulo}</Text>
        <Text className="mt-1 text-slate-400">{formatDate(item.data)}</Text>
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
