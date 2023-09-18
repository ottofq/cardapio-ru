import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Image, View } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import * as z from 'zod';

import Logo from '@/assets/images/icon.png';
import { ControlledInput } from '@/components/Input';
import useAuth from '@/hooks/useAuth';

const schema = z.object({
  email: z
    .string({
      required_error: 'Email é obrigatório',
    })
    .email('Digite um email válido'),
  password: z.string({
    required_error: 'A senha é obrigatória',
  }),
});

export type FormType = z.infer<typeof schema>;

export type LoginFormProps = {
  //onSubmit?: SubmitHandler<FormType>;
};

const LoginForm = ({}: LoginFormProps) => {
  const { handleSubmit, control } = useForm<FormType>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();
  const { loading, error, singIn, token } = useAuth();
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  // if (token) {
  //   return <Redirect href="(tabs)" />;
  // }

  const onSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      await singIn({ email, password });
      router.push('(tabs)');
    } catch (e) {
      onToggleSnackBar();
    }
  };

  return (
    <View className="w-full flex-1 items-center justify-center px-4">
      <Image source={Logo} className="mt-10 h-40 w-40 self-center rounded" />

      <View className="w-full gap-4 py-10">
        <ControlledInput
          mode="outlined"
          control={control}
          name="email"
          label="Email"
        />

        <ControlledInput
          mode="outlined"
          control={control}
          name="password"
          label="Senha"
          secureTextEntry
          textContentType="password"
        />

        <Button
          loading={loading}
          disabled={loading}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          LOGIN
        </Button>

        <Link href="forms" asChild>
          <Button mode="outlined">CADASTRAR</Button>
        </Link>

        <Link href="(tabs)" asChild>
          <Button mode="text">VER CARDÁPIO</Button>
        </Link>
      </View>
      <Snackbar
        className="bg-red-500"
        visible={visible}
        onDismiss={onDismissSnackBar}
      >
        {error}
      </Snackbar>
    </View>
  );
};

export default LoginForm;
