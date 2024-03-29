import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, View } from 'react-native';
import { Button, HelperText, RadioButton, Text } from 'react-native-paper';
import { z } from 'zod';

import { ControlledInput } from '@/components/Input';
import { RadioButtonItem } from '@/components/RadioButton';
import { useFormsActions } from '@/store/useForms/useForms';

const isStringNumber = (value: unknown): value is string => {
  if (typeof value !== 'string') {
    return false;
  }

  return /^[0-9]+$/.test(value);
};

const schema = z.object({
  nome: z.string({
    required_error: 'Digite seu nome',
  }),
  email: z
    .string({
      required_error: 'Digite seu email',
    })
    .trim()
    .email('Digite um email válido'),
  password: z.string({
    required_error: 'Digite sua senha',
  }),
  sexo: z.string({
    required_error: 'Selecione o sexo',
  }),
  // data_nascimento: z.string({
  //   required_error: 'Digite a data de nascimento',
  // }),
  matricula: z
    .string({
      required_error: 'Digite sua matricula',
    })
    .length(10, 'Digite os 10 números de sua matricula')
    .refine((data) => isStringNumber(data), {
      message: 'Digite somente números',
    }),
  curso: z.string({
    required_error: 'Digite seu curso',
  }),
  ano_ingresso: z
    .string({
      required_error: 'Digite seu ano de ingresso',
    })
    .length(4, 'Digite o ano corretamente com 4 digitos. Ex: 2023')
    .refine((data) => isStringNumber(data), {
      message: 'Digite somente números',
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
    addStepData(data);
    router.push('forms/step-2');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <ScrollView className="flex-1 gap-1 ">
        <ControlledInput
          mode="outlined"
          control={control}
          name="nome"
          label="Nome"
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="email"
          label="Email"
          keyboardType="email-address"
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
          textContentType="password"
        />

        {/* <ControlledInput
          mode="outlined"
          control={control}
          name="data_nascimento"
          label="Data de Nascimento"
        /> */}

        <ControlledInput
          mode="outlined"
          control={control}
          name="curso"
          label="Curso"
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="matricula"
          label="Matricula"
          keyboardType="numeric"
          maxLength={10}
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="ano_ingresso"
          label="Ano de ingresso"
          keyboardType="number-pad"
          maxLength={4}
        />

        <Controller
          render={({ field: { onChange, value } }) => (
            <RadioButton.Group
              value={value}
              onValueChange={(text) => onChange(text)}
            >
              <View className="gap-1">
                <View className="flex-row">
                  <Text className="text-base">Sexo: </Text>
                  {errors?.sexo && (
                    <HelperText type="error">{errors.sexo.message}</HelperText>
                  )}
                </View>
                <RadioButtonItem
                  label="Masculino"
                  value="masculino"
                  status={value === 'masculino' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('sexo', 'masculino')}
                />

                <RadioButtonItem
                  label="Feminino"
                  value="feminino"
                  status={value === 'feminino' ? 'checked' : 'unchecked'}
                  onPress={() => setValue('sexo', 'feminino')}
                />
              </View>
            </RadioButton.Group>
          )}
          name="sexo"
          control={control}
          rules={{ required: true }}
          //defaultValue={user.sexo}
        />
      </ScrollView>
      <View className="mt-auto pt-4">
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
