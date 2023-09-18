import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppProvider from '@/contexts/AppProvider';

export default function HomeLayout() {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar style="dark" />
      <AppProvider>
        <Stack
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="login" />
          <Stack.Screen name="forms" />
          <Stack.Screen name="(tabs)" />
        </Stack>
      </AppProvider>
    </SafeAreaView>
  );
}
