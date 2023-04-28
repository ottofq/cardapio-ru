import { MaterialIcons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

export default function Header() {
  return (
    <View className="flex-row items-center bg-primary p-4">
      <MaterialIcons name="menu" size={24} color="white" />
      <Text className="flex-1 text-center text-white" variant="titleLarge">
        CARDÁPIO RU
      </Text>
    </View>
  );
}
