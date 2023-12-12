import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';

export type ErrorProps = {
  title: string;
  description: string;
  onPress: () => {};
};

export function Error({ title, description, onPress }: ErrorProps) {
  return (
    <View className="flex-1 items-center justify-center gap-1 px-8">
      <Text className="text-center text-xl font-bold">{title}</Text>
      <Text className="mb-2 text-center text-base">{description}</Text>
      <Button mode="contained" onPress={onPress}>
        Tentar Novamente
      </Button>
    </View>
  );
}
