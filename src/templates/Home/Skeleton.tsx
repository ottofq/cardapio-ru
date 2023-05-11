import { PixelRatio, useWindowDimensions, View } from 'react-native';

import Skeleton from '@/components/Skeleton';

export default function HomeSkeleton() {
  const width = useWindowDimensions().width;

  const PADDING_HORIZONTAL_SCREEN = PixelRatio.roundToNearestPixel(32);

  const WIDTH_SKELETON = width - PADDING_HORIZONTAL_SCREEN;

  return (
    <View className="flex-1 items-center gap-4 p-4">
      <Skeleton width={200} height={20} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
      <Skeleton width={WIDTH_SKELETON} height={60} />
    </View>
  );
}
