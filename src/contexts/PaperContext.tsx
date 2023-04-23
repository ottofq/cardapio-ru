import type { ReactNode } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import { paperTheme } from '@/styles/theme';

type PaperProviderProps = {
  children: ReactNode;
};
export default function PaperContext({ children }: PaperProviderProps) {
  return <PaperProvider theme={paperTheme}>{children}</PaperProvider>;
}
