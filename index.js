import 'expo-router/entry';

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

import AppProvider from '@/contexts/AppProvider';

export function App() {
  //@ts-ignore
  const ctx = require.context('./src/app');
  return (
    <AppProvider>
      <ExpoRoot context={ctx} />
    </AppProvider>
  );
}

registerRootComponent(App);
