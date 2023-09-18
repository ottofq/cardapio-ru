import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { z } from 'zod';

import { CheckboxItem } from '@/components/Checkbox';
import { ControlledInput } from '@/components/Input';

const schema = z.object({
  patologias_familia: z.object({
    doenca_cardiovascular: z.boolean().default(false),
    hipertensao_arterial: z.boolean().default(false),
    obesidade: z.boolean().default(false),
    dislipidemias: z.boolean().default(false),
    diabetes: z.boolean().default(false),
    doenca_arterial_coronariana: z.boolean().default(false),
    patologias_familia_outras: z.string().optional().default(''),
  }),
  medicamento_continuo: z.string().optional().default(''),
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
    router.push('forms/step-7');
  };

  return (
    <View className="flex-1 gap-2 bg-white p-4">
      <ScrollView className="flex-1 gap-2">
        <Text className="text-lg font-bold">
          Há histórico de presença, de alguma das patologias abaixo, na sua
          família? Se sim, quais?
        </Text>

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Doença cardiovascular"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias_familia.doenca_cardiovascular', !value)
              }
            />
          )}
          name="patologias_familia.doenca_cardiovascular"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Hipertensão arterial"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias_familia.hipertensao_arterial', !value)
              }
            />
          )}
          name="patologias_familia.hipertensao_arterial"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Obesidade"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias_familia.obesidade', !value)}
            />
          )}
          name="patologias_familia.obesidade"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Dislipidemias"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue('patologias_familia.dislipidemias', !value)
              }
            />
          )}
          name="patologias_familia.dislipidemias"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Diabetes"
              status={handleCheckboxStatus(value)}
              onPress={() => setValue('patologias_familia.diabetes', !value)}
            />
          )}
          name="patologias_familia.diabetes"
          control={control}
        />

        <Controller
          render={({ field: { value } }) => (
            <CheckboxItem
              label="Doença Arterial Coronariana"
              status={handleCheckboxStatus(value)}
              onPress={() =>
                setValue(
                  'patologias_familia.doenca_arterial_coronariana',
                  !value
                )
              }
            />
          )}
          name="patologias_familia.doenca_arterial_coronariana"
          control={control}
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="patologias_familia.patologias_familia_outras"
          label="Outras"
        />

        <Text className="text-lg font-bold">
          Faz uso contínuo de algum medicamento? Se sim qual?
        </Text>
        <ControlledInput
          mode="outlined"
          control={control}
          name="patologias_familia.patologias_familia_outras"
          label="Medicametos"
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
