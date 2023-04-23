import type { ReactNode } from 'react';

import BottomSheetContext from '@/contexts/BottomSheetContext';
import PaperContext from '@/contexts/PaperContext';
import { ReactQueryContext } from '@/contexts/ReactQueryContext';

type AppProviderProps = {
  children: ReactNode;
};
export default function AppProvider({ children }: AppProviderProps) {
  return (
    <ReactQueryContext>
      <PaperContext>
        <BottomSheetContext>{children}</BottomSheetContext>
      </PaperContext>
    </ReactQueryContext>
  );
}
