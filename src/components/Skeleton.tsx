import { LinearGradient } from 'expo-linear-gradient';
import type { ShimmerPlaceholderProps } from 'react-native-shimmer-placeholder';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function Skeleton(props: ShimmerPlaceholderProps) {
  return <ShimmerPlaceholder {...props} />;
}
