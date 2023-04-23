import { MaterialIcons } from '@expo/vector-icons';
import type { BottomSheetBackdropProps } from '@gorhom/bottom-sheet';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, StyleSheet, View } from 'react-native';
import { Button, HelperText, Text, TextInput } from 'react-native-paper';

import LoadingView from '@/components/Loading';
import RatingItem from '@/components/RatingItem';
import { useMenu, useRating } from '@/hooks/menu';
import { useUpdateRating } from '@/hooks/rating';
import type { RatingData } from '@/services/ratingService';
import colors from '@/styles/colors';

const DEFAULT_RATING = 3;

type RatingModalProps = {};

export type RatingModalMethods = {
  showModal: () => void;
};

const RatingModal = React.forwardRef<RatingModalProps, RatingModalMethods>(
  function RatingModal(_, ref) {
    const { data: menu } = useMenu();
    const menuId = menu?.id ?? '';

    const { data: rating, isLoading, error } = useRating(menuId);

    const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

    const { mutate, isLoading: isLoadingUpdateRating } = useUpdateRating({
      menuId,
      onSuccess,
    });

    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<RatingData>({
      defaultValues: {
        entrada: DEFAULT_RATING,
        prato_proteico: DEFAULT_RATING,
        opcao: DEFAULT_RATING,
        acompanhamento: DEFAULT_RATING,
        guarnicao: DEFAULT_RATING,
        sobremesa: DEFAULT_RATING,
        comentario: '',
      },
    });

    React.useImperativeHandle(
      ref,
      () => {
        return {
          showModal,
        };
      },
      []
    );

    function showModal() {
      bottomSheetModalRef.current?.present();
    }

    function closeModal() {
      bottomSheetModalRef.current?.dismiss();
    }

    function onSuccess() {
      reset();
      closeModal();
    }

    const onSubmit = handleSubmit((data) => {
      mutate(data);
    });

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

    if (isLoading) {
      return <LoadingView />;
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
      <BottomSheetModal
        backdropComponent={renderBackdrop}
        style={styles.container}
        index={0}
        ref={bottomSheetModalRef}
        snapPoints={['60%', '90%']}
      >
        <View className="flex-row items-center justify-between p-4">
          <Text className="font-semibold" variant="headlineSmall">
            Avalie o cardápio do dia
          </Text>
          <Pressable
            onPress={closeModal}
            className="rounded-full bg-slate-50 p-2 shadow"
          >
            <MaterialIcons name="close" size={24} color={colors.primary} />
          </Pressable>
        </View>
        <BottomSheetScrollView contentContainerStyle={styles.scrollview}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem title={menu.entrada} onFinishRating={onChange} />
            )}
            name="entrada"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem
                title={menu.prato_proteico}
                onFinishRating={onChange}
              />
            )}
            name="prato_proteico"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem title={menu.opcao} onFinishRating={onChange} />
            )}
            name="opcao"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem
                title={menu.acompanhamento}
                onFinishRating={onChange}
              />
            )}
            name="acompanhamento"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem title={menu.guarnicao} onFinishRating={onChange} />
            )}
            name="guarnicao"
          />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange } }) => (
              <RatingItem title={menu.sobremesa} onFinishRating={onChange} />
            )}
            name="sobremesa"
          />

          <Controller
            control={control}
            rules={{ required: 'É necessário deixar um comentário' }}
            render={({ field: { onChange, value } }) => (
              <React.Fragment>
                <TextInput
                  mode="outlined"
                  placeholder="Deixe um comentário"
                  numberOfLines={5}
                  multiline
                  className="h-40"
                  error={!!errors.comentario}
                  onChangeText={onChange}
                  value={value}
                />
                <HelperText type="error" visible={!!errors.comentario}>
                  {errors.comentario?.message}
                </HelperText>
              </React.Fragment>
            )}
            name="comentario"
          />

          <Button
            loading={isLoadingUpdateRating}
            disabled={isLoading}
            mode="contained"
            onPress={onSubmit}
          >
            Enviar Avaliação
          </Button>
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);

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

export default RatingModal;
