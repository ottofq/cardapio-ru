import { View } from 'react-native';
import { Text } from 'react-native-paper';

export function Empty() {
  return (
    <View className="flex-1 items-center justify-center gap-1 px-8">
      <Text className="text-center text-xl font-bold">
        Sem Conteúdo Disponível
      </Text>
      <Text className="mb-2 text-center text-base">
        Desculpe, não há conteúdo disponível para exibição neste momento.
      </Text>
    </View>
  );
}
