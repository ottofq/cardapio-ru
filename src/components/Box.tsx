import type { ViewProps } from 'react-native';
import { View } from 'react-native';

type Box = {
  children: React.ReactNode;
  className?: string;
};

type BoxProps = Box & ViewProps;

export default function Box({ children, className, ...rest }: BoxProps) {
  return (
    <View
      className={`rounded  border border-gray-200 bg-tertiary p-3 shadow ${className}`}
      {...rest}
    >
      {children}
    </View>
  );
}
