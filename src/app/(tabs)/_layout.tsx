import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import Header from '@/components/Header';
import colors from '@/styles/colors';

export default function HomeLayout() {
  return (
    <View className="flex-1">
      <Header />
      <Tabs
        initialRouteName="index"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.tertiary,
          tabBarActiveBackgroundColor: colors.primary,
          tabBarInactiveBackgroundColor: colors.primary,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Cardápio',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="restaurant-menu" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="rating"
          options={{
            title: 'Avaliar',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="star" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: 'Notícias',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="newspaper-variant-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="info"
          options={{
            title: 'Info',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons
                name="information-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
