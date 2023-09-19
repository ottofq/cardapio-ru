import { useRouter } from 'expo-router';
import { Image, View } from 'react-native';
import { Button, Text } from 'react-native-paper';

import Logo from '@/assets/images/icon.png';

export default function Intro() {
  const router = useRouter();

  const navigate = () => {
    router.push('forms/step-1');
  };

  return (
    <View className="flex-1  bg-white p-4">
      <View className="flex-1 items-center justify-center gap-1 p-4">
        <Image source={Logo} className="mb-10 h-40 w-40 self-center rounded" />
        <Text className="text-xl font-bold">Bem Vindo</Text>
        <Text className=" text-center text-lg">
          Antes de exibir o cardápio, preencha seus dados e responda um
          questionário para o setor de nutrição do RU CCA UFES.
        </Text>
      </View>

      <View className="mt-auto pt-4">
        <Button className="mt-auto" mode="contained" onPress={navigate}>
          CADASTRAR
        </Button>
      </View>
    </View>
  );
}
