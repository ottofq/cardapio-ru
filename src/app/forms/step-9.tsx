import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { z } from 'zod';

import { CheckboxItem } from '@/components/Checkbox';
import { ControlledInput } from '@/components/Input';
import { RadioButtonItem } from '@/components/RadioButton';
import { useFormsActions } from '@/store/useForms/useForms';
import { handleCheckboxStatus } from '@/utils/handleCheckboxStatus';

const schema = z.object({
  avaliacao_RU: z.object({
    avaliacao_geral: z.string({
      required_error: '* Campo obrigatório',
    }),
  }),
  melhorias_RU: z.object({
    cardapio: z.boolean().default(false),
    melhoria_sabor_preparacao: z.boolean().default(false),
    opcao_vegetariana: z.boolean().default(false),
    estrutura_fisica: z.boolean().default(false),
    tempo_fila: z.boolean().default(false),
    preco_ticket: z.boolean().default(false),
    melhoria_outros: z.string().optional().default(''),
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

  const { addAvaliacaoData } = useFormsActions();

  const onSubmit = (data: FormType) => {
    addAvaliacaoData(data);
    router.push('forms/submit');
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
                    De modo geral, como você avalia o cardápio do RU?
                  </Text>
                  {errors?.avaliacao_RU?.avaliacao_geral && (
                    <HelperText type="error">
                      {errors.avaliacao_RU.avaliacao_geral?.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Muito ruim"
                  value="Muito ruim"
                  status={value === 'Muito ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Muito ruim')
                  }
                />

                <RadioButtonItem
                  label="Ruim"
                  value="Ruim"
                  status={value === 'Ruim' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Ruim')
                  }
                />

                <RadioButtonItem
                  label="Regular"
                  value="Regular"
                  status={value === 'Regular' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Regular')
                  }
                />

                <RadioButtonItem
                  label="Bom"
                  value="Bom"
                  status={value === 'Bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Bom')
                  }
                />

                <RadioButtonItem
                  label="Muito bom"
                  value="Muito bom"
                  status={value === 'Muito bom' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('avaliacao_RU.avaliacao_geral', 'Muito bom')
                  }
                />
              </View>
            </RadioButton.Group>
          )}
          name="avaliacao_RU.avaliacao_geral"
          control={control}
          rules={{ required: true }}
        />

        <Text className="text-lg font-bold">
          O que você acha que deveria ser melhorado no RU?
        </Text>

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Cardápio"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('melhorias_RU.cardapio', !value)}
            />
          )}
          name="melhorias_RU.cardapio"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Sabor das preparações"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('melhorias_RU.melhoria_sabor_preparacao', !value)
              }
            />
          )}
          name="melhorias_RU.melhoria_sabor_preparacao"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Mais opções veganas"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('melhorias_RU.opcao_vegetariana', !value)}
            />
          )}
          name="melhorias_RU.opcao_vegetariana"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Estrutura física"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('melhorias_RU.estrutura_fisica', !value)}
            />
          )}
          name="melhorias_RU.estrutura_fisica"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Tempo de espera na fila"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('melhorias_RU.tempo_fila', !value)}
            />
          )}
          name="melhorias_RU.tempo_fila"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Preço do ticket"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('melhorias_RU.preco_ticket', !value)}
            />
          )}
          name="melhorias_RU.preco_ticket"
          control={control}
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="melhorias_RU.melhoria_outros"
          label="Outras"
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
          ENVIAR
        </Button>
      </View>
    </View>
  );
}
