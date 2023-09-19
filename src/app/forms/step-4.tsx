import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { z } from 'zod';

import { RadioButtonItem } from '@/components/RadioButton';
import { useFormsActions } from '@/store/useForms/useForms';
import { strToBoolean } from '@/utils/strToBoolean';

const schema = z.object({
  adiciona_sal: z.string({
    required_error: '* Campo obrigatório',
  }),
  utiliza_oleo_composto: z.string({
    required_error: '* Campo obrigatório',
  }),
  consome_bebida_alcoolica: z.string({
    required_error: '* Campo obrigatório',
  }),
  tabagista: z.string({
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

  const { addStepData } = useFormsActions();

  const onSubmit = (data: FormType) => {
    const newData = strToBoolean(data);
    addStepData(newData);
    router.push('forms/step-5');
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
                    Costuma adicionar sal nos alimentos prontos e saladas (você
                    faz uso do saleiro à mesa)?
                  </Text>
                  {errors?.adiciona_sal && (
                    <HelperText type="error">
                      {errors.adiciona_sal.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Sim"
                  value="sim"
                  status={value === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('adiciona_sal', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  status={value === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('adiciona_sal', 'nao')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="adiciona_sal"
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
                    Você utiliza o óleo composto que fica no balcão de
                    distribuição de refeições?
                  </Text>
                  {errors?.utiliza_oleo_composto && (
                    <HelperText type="error">
                      {errors.utiliza_oleo_composto.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Sim"
                  value="sim"
                  status={value === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('utiliza_oleo_composto', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  status={value === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('utiliza_oleo_composto', 'nao')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="utiliza_oleo_composto"
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
                    Você consome bebidas alcoólicas?
                  </Text>
                  {errors?.consome_bebida_alcoolica && (
                    <HelperText type="error">
                      {errors.consome_bebida_alcoolica.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Sim, Diariamente"
                  value="Diariamente"
                  status={value === 'Diariamente' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('consome_bebida_alcoolica', 'Diariamente')
                  }
                />

                <RadioButtonItem
                  label="Sim, de 3-6 vezes na semana"
                  value="de 3-6 vezes na semana"
                  status={
                    value === 'de 3-6 vezes na semana' ? 'checked' : 'unchecked'
                  }
                  onPress={() =>
                    setValue(
                      'consome_bebida_alcoolica',
                      'de 3-6 vezes na semana'
                    )
                  }
                />

                <RadioButtonItem
                  label="Sim, de 1-2 vezes na semana"
                  value="de 1-2 vezes na semana"
                  status={
                    value === 'de 1-2 vezes na semana' ? 'checked' : 'unchecked'
                  }
                  onPress={() =>
                    setValue(
                      'consome_bebida_alcoolica',
                      'de 1-2 vezes na semana'
                    )
                  }
                />

                <RadioButtonItem
                  label="Sim, Raramente"
                  value="Raramente"
                  status={value === 'Raramente' ? 'checked' : 'unchecked'}
                  onPress={() =>
                    setValue('consome_bebida_alcoolica', 'Raramente')
                  }
                />

                <RadioButtonItem
                  label="Não Consumo"
                  value="Não consumo bebidas alcoólicas"
                  status={
                    value === 'Não consumo bebidas alcoólicas'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    setValue(
                      'consome_bebida_alcoolica',
                      'Não consumo bebidas alcoólicas'
                    )
                  }
                />
              </View>
            </RadioButton.Group>
          )}
          name="consome_bebida_alcoolica"
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
                  <Text className="text-lg font-bold">Você é tabagista?</Text>
                  {errors?.tabagista && (
                    <HelperText type="error">
                      {errors.tabagista.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Sim"
                  value="sim"
                  status={value === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('tabagista', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  status={value === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('tabagista', 'nao')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="tabagista"
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
