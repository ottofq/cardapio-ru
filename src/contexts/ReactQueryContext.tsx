import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';

import { queryClient } from '@/lib/react-query';

type ReactQueryProviderProps = {
  children: ReactNode;
};

if (__DEV__) {
  // @ts-ignore
  import('react-query-native-devtools').then(({ addPlugin }) => {
    // @ts-ignore
    addPlugin({ queryClient });
  });
}
export function ReactQueryContext({ children }: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
