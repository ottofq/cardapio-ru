import { Dimensions, PixelRatio } from 'react-native';

const width = Dimensions.get('screen').width;

const PADDING_HORIZONTAL_SCREEN = PixelRatio.roundToNearestPixel(32);

const WIDTH_SCREEN_WITH_PADDING = width - PADDING_HORIZONTAL_SCREEN;

export default WIDTH_SCREEN_WITH_PADDING;
