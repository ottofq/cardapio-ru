import { Link } from 'expo-router';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-paper';

import useAuth from '@/hooks/useAuth';

export default function Header() {
  const { signOut, token } = useAuth();

  return (
    <View className="flex-row items-center bg-primary p-4">
      <Text className="flex-1 text-center text-white" variant="titleLarge">
        CARDÁPIO RU
      </Text>

      {token ? (
        <Pressable onPress={signOut}>
          <Text className="text-white">LOGOUT</Text>
        </Pressable>
      ) : (
        <Link href="/login" asChild>
          <Pressable>
            <Text className="text-white">LOGIN</Text>
          </Pressable>
        </Link>
      )}
    </View>
  );
}
