import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import AppProvider from '@/contexts/AppProvider';
import colors from '@/styles/colors';
export default function HomeLayout() {
  return (
    <AppProvider>
      <StatusBar backgroundColor={colors.primary} />
      <Tabs
        initialRouteName="home"
        screenOptions={{
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
    </AppProvider>
  );
}
