import { MaterialIcons } from '@expo/vector-icons';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native';
import { Text } from 'react-native-paper';
import RenderHTML from 'react-native-render-html';

import LoadingView from '@/components/Loading';
import { useNewsDetails } from '@/hooks/news';
import colors from '@/styles/colors';

type NewsDetailsModalProps = {
  id?: string;
};

export type NewsDetailsModalMethods = {
  showModal: () => void;
};

const NewsDetailsModal = React.forwardRef(function NewsDetailsModal(
  { id = '0' }: NewsDetailsModalProps,
  ref
) {
  const { data: news, isLoading, error } = useNewsDetails(id);

  const { width } = useWindowDimensions();

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  React.useImperativeHandle(
    ref,
    () => {
      return {
        showModal,
      };
    },
    []
  );

  const renderBackdrop = React.useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  function showModal() {
    bottomSheetModalRef.current?.present();
  }

  function closeModal() {
    bottomSheetModalRef.current?.dismiss();
  }

  const render = () => {
    if (isLoading) {
      return <LoadingView />;
    }

    if (error) {
      return <Text>error</Text>;
    }

    if (!news) {
      return <Text>Vazio</Text>;
    }

    return (
      <React.Fragment>
        <View className="flex-row items-center justify-between border-b-2 border-b-slate-100 p-4">
          <Text className="w-[85%] font-semibold" variant="titleSmall">
            {news.titulo}
          </Text>
          <Pressable
            onPress={closeModal}
            className=" rounded-full bg-slate-50 p-2 shadow"
          >
            <MaterialIcons name="close" size={24} color={colors.primary} />
          </Pressable>
        </View>

        <BottomSheetScrollView contentContainerStyle={styles.scrollview}>
          <RenderHTML contentWidth={width} source={{ html: news.descricao }} />
        </BottomSheetScrollView>
      </React.Fragment>
    );
  };

  return (
    <BottomSheetModal
      backdropComponent={renderBackdrop}
      style={styles.container}
      index={0}
      ref={bottomSheetModalRef}
      snapPoints={['60%', '90%']}
    >
      {render()}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    elevation: 20,
    borderRadius: 20,
  },
  scrollview: {
    padding: 16,
    rowGap: 12,
  },
});

export default NewsDetailsModal;
