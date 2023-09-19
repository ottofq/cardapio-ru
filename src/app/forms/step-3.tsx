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
import { strToBoolean } from '@/utils/strToBoolean';

const schema = z.object({
  peso_ideal: z.string({
    required_error: '* Campo obrigatório',
  }),
  vegano_vegetariano: z.string({
    required_error: '* Campo obrigatório',
  }),
  alergias: z.object({
    alergia_gluten: z.boolean().default(false),
    intolerancia_lactose: z.boolean().default(false),
    proteina_leite_vaca: z.boolean().default(false),
    outras_alergias: z.string().optional().default(''),
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
  const { addStepData } = useFormsActions();

  const onSubmit = (data: FormType) => {
    const newData = strToBoolean(data);
    addStepData(newData);
    router.push('forms/step-4');
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
                    Você se considera dentro do peso ideal para a sua idade e
                    sexo?
                  </Text>
                  {errors?.peso_ideal && (
                    <HelperText type="error">
                      {errors.peso_ideal.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Sim"
                  value="sim"
                  status={value === 'sim' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('peso_ideal', 'sim')}
                />

                <RadioButtonItem
                  label="Não"
                  value="nao"
                  status={value === 'nao' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('peso_ideal', 'nao')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="peso_ideal"
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
                    Você é vegetariano ou vegano?{' '}
                  </Text>
                  {errors?.vegano_vegetariano && (
                    <HelperText type="error">
                      {errors.vegano_vegetariano.message}
                    </HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Não sou vegano ou vegetariano"
                  value="Não sou vegano/vegetariano"
                  status={
                    value === 'Não sou vegano/vegetariano'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    setValue('vegano_vegetariano', 'Não sou vegano/vegetariano')
                  }
                />

                <RadioButtonItem
                  label="Ovolactovegetariano"
                  value="ovolactovegetariano"
                  status={
                    value === 'ovolactovegetariano' ? 'checked' : 'unchecked'
                  }
                  onPress={() =>
                    setValue('vegano_vegetariano', 'ovolactovegetariano')
                  }
                />

                <RadioButtonItem
                  label="Vegetariano restrito – alimentação"
                  value="Vegetariano restrito – alimentação"
                  status={
                    value === 'Vegetariano restrito – alimentação'
                      ? 'checked'
                      : 'unchecked'
                  }
                  onPress={() =>
                    setValue(
                      'vegano_vegetariano',
                      'Vegetariano restrito – alimentação'
                    )
                  }
                />

                <RadioButtonItem
                  label="Vegano"
                  value="Vegano"
                  status={value === 'Vegano' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('vegano_vegetariano', 'Vegano')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="vegano_vegetariano"
          control={control}
          rules={{ required: true }}
        />

        <Text className="text-lg font-bold">
          Você possui algum tipo de alergia ou intolerância alimentar? Se sim
          quais?
        </Text>

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Alergia ao glúten"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.alergia_gluten', !value)}
            />
          )}
          name="alergias.alergia_gluten"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Intolerância a lactose"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.intolerancia_lactose', !value)}
            />
          )}
          name="alergias.intolerancia_lactose"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Alergia à proteína do leite de vaca"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('alergias.proteina_leite_vaca', !value)}
            />
          )}
          name="alergias.proteina_leite_vaca"
          control={control}
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="alergias.outras_alergias"
          label="Outros"
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
