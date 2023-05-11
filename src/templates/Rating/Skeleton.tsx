import { View } from 'react-native';

import Skeleton from '@/components/Skeleton';
import WIDTH_SCREEN_WITH_PADDING from '@/utils/widthScreen';

export default function RatingSkeleton() {
  return (
    <View className="flex-1 items-center gap-4 p-4">
      <Skeleton width={200} height={20} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
      <Skeleton width={WIDTH_SCREEN_WITH_PADDING} height={150} />
    </View>
  );
}
