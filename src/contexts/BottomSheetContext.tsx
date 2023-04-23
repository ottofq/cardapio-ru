import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import type { ReactNode } from 'react';

export type BottomSheetContextProps = {
  children: ReactNode;
};

export default function BottomSheetContext({
  children,
}: BottomSheetContextProps) {
  return <BottomSheetModalProvider>{children}</BottomSheetModalProvider>;
}
