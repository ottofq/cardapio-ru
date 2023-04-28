import 'expo-router/entry';

import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';

import BottomSheetContext from '@/contexts/BottomSheetContext';

export function App() {
  //@ts-ignore
  const ctx = require.context('./src/app');
  return (
    <BottomSheetContext>
      <ExpoRoot context={ctx} />
    </BottomSheetContext>
  );
}

registerRootComponent(App);
