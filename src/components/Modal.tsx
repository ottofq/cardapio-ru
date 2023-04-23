import { MaterialIcons } from '@expo/vector-icons';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import colors from '@/styles/colors';

export default function Modal() {
  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  function showModal() {
    bottomSheetModalRef.current?.present();
  }

  function closeModal() {
    bottomSheetModalRef.current?.dismiss();
  }

  const renderBackdrop = React.useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text>Modal</Text>
      <Text>Modal</Text>
      <Text>Modal</Text>
      <Button onPress={showModal} mode="contained">
        Avaliar
      </Button>

      <BottomSheetModal
        style={{ elevation: 20, borderRadius: 20 }}
        index={0}
        backdropComponent={renderBackdrop}
        ref={bottomSheetModalRef}
        snapPoints={['60%', '85%']}
      >
        <View className="flex-row items-center justify-between p-4">
          <Text className="semibold" variant="headlineSmall">
            Avalie o cardápio do dia
          </Text>
          <Pressable
            onPress={closeModal}
            className="rounded-full bg-slate-50 p-2 shadow"
          >
            <MaterialIcons name="close" size={24} color={colors.primary} />
          </Pressable>
        </View>
        <BottomSheetScrollView
          contentContainerStyle={{ padding: 16, rowGap: 12 }}
        >
          <Button mode="contained" onPress={closeModal}>
            Enviar Avaliação
          </Button>
        </BottomSheetScrollView>
      </BottomSheetModal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  gap: {
    rowGap: 12,
  },
});
