import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export default function Intro() {
  const router = useRouter();

  const navigate = () => {
    router.push('forms/step-1');
  };

  return (
    <View className="flex-1 bg-white p-4">
      <Text>Bem Vindo</Text>
      <Text>
        Antes de exibir o cardápio, precisamos que responda um questionário para
        o setor de nutrição do RU CCA UFES.
      </Text>

      <View className="mt-auto pt-4">
        <Button className="mt-auto" mode="contained" onPress={navigate}>
          PRÓXIMO
        </Button>
      </View>
    </View>
  );
}
