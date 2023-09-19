import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { z } from 'zod';

import { CheckboxItem } from '@/components/Checkbox';
import { ControlledInput } from '@/components/Input';
import { useFormsActions } from '@/store/useForms/useForms';
import { handleCheckboxStatus } from '@/utils/handleCheckboxStatus';
import { strToBoolean } from '@/utils/strToBoolean';

const schema = z.object({
  patologias: z.object({
    doenca_cardiovascular: z.boolean().default(false),
    hipertensao_arterial: z.boolean().default(false),
    obesidade: z.boolean().default(false),
    dislipidemias: z.boolean().default(false),
    diabetes: z.boolean().default(false),
    doenca_arterial_coronariana: z.boolean().default(false),
    outras_patologias: z.string().optional().default(''),
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
    router.push('forms/step-6');
  };

  return (
    <View className="flex-1 gap-2 bg-white p-4">
      <ScrollView className="flex-1 gap-2">
        <Text className="text-lg font-bold">
          Você apresenta ou já apresentou alguma das patologias abaixo? Se sim,
          quais?
        </Text>

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Doença cardiovascular"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias.doenca_cardiovascular', !value)
              }
            />
          )}
          name="patologias.doenca_cardiovascular"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Hipertensão arterial"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias.hipertensao_arterial', !value)
              }
            />
          )}
          name="patologias.hipertensao_arterial"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Obesidade"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.obesidade', !value)}
            />
          )}
          name="patologias.obesidade"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Dislipidemias"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.dislipidemias', !value)}
            />
          )}
          name="patologias.dislipidemias"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Diabetes"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias.diabetes', !value)}
            />
          )}
          name="patologias.diabetes"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Doença Arterial Coronariana"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias.doenca_arterial_coronariana', !value)
              }
            />
          )}
          name="patologias.doenca_arterial_coronariana"
          control={control}
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="patologias.outras_patologias"
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
          PRÓXIMO
        </Button>
      </View>
    </View>
  );
}
