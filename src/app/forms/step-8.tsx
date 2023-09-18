import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { z } from 'zod';

import { RadioButtonItem } from '@/components/RadioButton';

const schema = z.object({
  avaliacao_RU: z.object({
    textura_preparacao: z.string({
      required_error: '* Campo obrigatório',
    }),
    sabor_preparacao: z.string({
      required_error: '* Campo obrigatório',
    }),
  }),
});

export type FormType = z.infer<typeof schema>;

export default function Form() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const handleCheckboxStatus = (value: boolean) => {
    if (value) return 'checked';

    return 'unchecked';
  };

  const onSubmit = (data) => {
    console.log(data);
    router.push('forms/step-9');
  };

  return (
    <View className="flex-1 gap-2 bg-white p-4">
      <ScrollView className="flex-1 gap-2">
        <Controller
          render={({ field: { onChange, value } }) => (
            <RadioButton.Group
              value={value}
              onValueChange={(text) => onChange(text)}
            >
              <View className="gap-1">
                <View className="flex-row flex-wrap">
                  <Text className="text-lg font-bold">
                    Como você avalia a refeição servida no RU, quanto a textura
                    das preparações?
                  </Text>
                  {errors?.avaliacao_RU?.textura_preparacao && (
                    <HelperText type="error">
                      {errors.avaliacao_RU.textura_preparacao?.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Muito ruim"
                  value="Muito ruim"
                  status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.textura_preparacao', 'Muito ruim')
                  }
                />

                <RadioButtonItem
                  label="Ruim"
                  value="Ruim"
                  status={value === 'Ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.textura_preparacao', 'Ruim')
                  }
                />

                <RadioButtonItem
                  label="Regular"
                  value="Regular"
                  status={value === 'Regular' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.textura_preparacao', 'Regular')
                  }
                />

                <RadioButtonItem
                  label="Bom"
                  value="Bom"
                  status={value === 'Bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.textura_preparacao', 'Bom')
                  }
                />

                <RadioButtonItem
                  label="Muito bom"
                  value="Muito bom"
                  status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.textura_preparacao', 'Muito bom')
                  }
                />
              </View>
            </RadioButton.Group>
          )}
          name="avaliacao_RU.textura_preparacao"
          control={control}
          rules={{ required: true }}
        />

        <Controller
          render={({ field: { onChange, value } }) => (
            <RadioButton.Group
              value={value}
              onValueChange={(text) => onChange(text)}
            >
              <View className="gap-1">
                <View className="flex-row flex-wrap">
                  <Text className="text-lg font-bold">
                    Como você avalia a refeição servida no RU, quanto ao sabor
                    das preparações
                  </Text>
                  {errors?.avaliacao_RU?.sabor_preparacao && (
                    <HelperText type="error">
                      {errors.avaliacao_RU?.sabor_preparacao.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Muito ruim"
                  value="Muito ruim"
                  status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.sabor_preparacao', 'Muito ruim')
                  }
                />

                <RadioButtonItem
                  label="Ruim"
                  value="Ruim"
                  status={value === 'Ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.sabor_preparacao', 'Ruim')
                  }
                />

                <RadioButtonItem
                  label="Regular"
                  value="Regular"
                  status={value === 'Regular' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.sabor_preparacao', 'Regular')
                  }
                />

                <RadioButtonItem
                  label="Bom"
                  value="Bom"
                  status={value === 'Bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.sabor_preparacao', 'Bom')
                  }
                />

                <RadioButtonItem
                  label="Muito bom"
                  value="Muito bom"
                  status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.sabor_preparacao', 'Muito bom')
                  }
                />
              </View>
            </RadioButton.Group>
          )}
          name="avaliacao_RU.sabor_preparacao"
          control={control}
          rules={{ required: true }}
        />
      </ScrollView>
      <View className="mt-auto  flex-row justify-between">
        <Button className="mt-auto" mode="contained" onPress={router.back}>
          ANTERIOR
        </Button>

        <Button
          className="mt-auto"
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          PRÓXIMO
        </Button>
      </View>
    </View>
  );
}
