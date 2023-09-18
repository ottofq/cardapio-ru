import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { z } from 'zod';

import { RadioButtonItem } from '@/components/RadioButton';

const schema = z.object({
  bolsista: z.string({
    required_error: '* Campo obrigatório',
  }),
  frequencia_RU: z.string({
    required_error: '* Campo obrigatório',
  }),
  tipo_refeicao_RU: z.string({
    required_error: '* Campo obrigatório',
  }),
  nivel_fisico: z.string({
    required_error: '* Campo obrigatório',
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

  const onSubmit = (data) => {
    console.log(data);
    router.push('forms/step-3');
  };

  return (
    <View className="flex-1 gap-2 bg-white p-4">
      <Controller
        render={({ field: { onChange, value } }) => (
          <RadioButton.Group
            value={value}
            onValueChange={(text) => onChange(text)}
          >
            <View className="gap-1">
              <View className="flex-row">
                <Text className="text-lg font-bold">
                  Você é Bolsista do RU ?
                </Text>
                {errors?.bolsista && (
                  <HelperText type="error">
                    {errors.bolsista.message}
                  </HelperText>
                )}
              </View>
              <RadioButtonItem
                label="Não sou bolsista"
                value="Não sou bolsista"
                status={value === 'Não sou bolsista' ? 'checked' : 'unchecked'}
                onPress={() => setValue('bolsista', 'Não sou bolsista')}
              />

              <RadioButtonItem
                label="Bolsa Parcial"
                value="Bolsa parcial"
                status={value === 'Bolsa parcial' ? 'checked' : 'unchecked'}
                onPress={() => setValue('bolsista', 'Bolsa parcial')}
              />
              <RadioButtonItem
                label="Bolsa Integral"
                value="Bolsa integral"
                status={value === 'Bolsa integral' ? 'checked' : 'unchecked'}
                onPress={() => setValue('bolsista', 'Bolsa integral')}
              />
            </View>
          </RadioButton.Group>
        )}
        name="bolsista"
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
                  Com qual frequência você realiza suas refeições no RU ?{' '}
                </Text>
                {errors?.frequencia_RU && (
                  <HelperText type="error">
                    {errors.frequencia_RU.message}
                  </HelperText>
                )}
              </View>
              <RadioButtonItem
                label="Todos os dias"
                value="Todos os dias"
                status={value === 'Todos os dias' ? 'checked' : 'unchecked'}
                onPress={() => setValue('frequencia_RU', 'Todos os dias')}
              />

              <RadioButtonItem
                label="Pelo menos 3 vezes na semana"
                value="Pelo menos 3 vezes na semana"
                status={
                  value === 'Pelo menos 3 vezes na semana'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  setValue('frequencia_RU', 'Pelo menos 3 vezes na semana')
                }
              />

              <RadioButtonItem
                label="Pelo menos 1 vez na semana"
                value="Pelo menos 1 vez na semana"
                status={
                  value === 'Pelo menos 1 vez na semana'
                    ? 'checked'
                    : 'unchecked'
                }
                onPress={() =>
                  setValue('frequencia_RU', 'Pelo menos 1 vez na semana')
                }
              />

              <RadioButtonItem
                label="Raramente"
                value="Raramente"
                status={value === 'Raramente' ? 'checked' : 'unchecked'}
                onPress={() => setValue('frequencia_RU', 'Raramente')}
              />
            </View>
          </RadioButton.Group>
        )}
        name="frequencia_RU"
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
                  Qual tipo de refeição você costuma realizar no RU?
                </Text>
                {errors?.tipo_refeicao_RU && (
                  <HelperText type="error">
                    {errors.tipo_refeicao_RU.message}
                  </HelperText>
                )}
              </View>
              <RadioButtonItem
                label="Almoço"
                value="Almoço"
                status={value === 'Almoço' ? 'checked' : 'unchecked'}
                onPress={() => setValue('tipo_refeicao_RU', 'Almoço')}
              />

              <RadioButtonItem
                label="Jantar"
                value="Jantar"
                status={value === 'Jantar' ? 'checked' : 'unchecked'}
                onPress={() => setValue('tipo_refeicao_RU', 'Jantar')}
              />

              <RadioButtonItem
                label="Almoço e Jantar"
                value="Almoço e Jantar"
                status={value === 'Almoço e Jantar' ? 'checked' : 'unchecked'}
                onPress={() => setValue('tipo_refeicao_RU', 'Almoço e Jantar')}
              />
            </View>
          </RadioButton.Group>
        )}
        name="tipo_refeicao_RU"
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
                  Como você se considera de acordo com o seu nível de atividade
                  física?
                </Text>
                {errors?.nivel_fisico && (
                  <HelperText type="error">
                    {errors.nivel_fisico.message}
                  </HelperText>
                )}
              </View>
              <RadioButtonItem
                label="Sedentário"
                value="Sedentário"
                status={value === 'Sedentário' ? 'checked' : 'unchecked'}
                onPress={() => setValue('nivel_fisico', 'Sedentário')}
              />

              <RadioButtonItem
                label="Leve"
                value="Leve"
                status={value === 'Leve' ? 'checked' : 'unchecked'}
                onPress={() => setValue('nivel_fisico', 'Leve')}
              />

              <RadioButtonItem
                label="Moderado"
                value="Moderado"
                status={value === 'Moderado' ? 'checked' : 'unchecked'}
                onPress={() => setValue('nivel_fisico', 'Moderado')}
              />

              <RadioButtonItem
                label="Ativo"
                value="Ativo"
                status={value === 'Ativo' ? 'checked' : 'unchecked'}
                onPress={() => setValue('nivel_fisico', 'Ativo')}
              />
            </View>
          </RadioButton.Group>
        )}
        name="nivel_fisico"
        control={control}
        rules={{ required: true }}
      />

      <View className="mt-auto flex-1 flex-row justify-between">
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
