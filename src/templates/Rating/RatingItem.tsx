import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import Box from '../../components/Box';

type RatingItemPropsBase = {
  title: string;
  stars?: number;
  readonly?: boolean;
};

type RatingItemPropsWritable = {
  readonly?: false;
  onFinishRating: (value: number) => void;
};

type RatingItemProps = RatingItemPropsBase &
  (RatingItemPropsWritable | { readonly: true; onFinishRating?: never });

const reviews = ['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom'];
export default function RatingItem({
  title,
  stars = 3,
  readonly,
  onFinishRating,
}: RatingItemProps) {
  const ratingRounded = Math.round(stars);

  const [reviewText, setReviewText] = React.useState<string>(
    reviews[ratingRounded - 1]
  );

  function _onFinishRating(rating: number) {
    setReviewText(reviews[rating - 1]);

    if (!readonly) {
      onFinishRating(rating);
    }
  }

  return (
    <Box style={styles.gap} className="items-center">
      <Text className="text-lg font-semibold">{title}</Text>
      <AirbnbRating
        reviews={reviews}
        isDisabled={readonly}
        defaultRating={ratingRounded}
        onFinishRating={_onFinishRating}
        showRating={false}
        count={5}
        size={readonly ? 24 : 34}
      />
      <Text className="text-sm">{reviewText}</Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  gap: {
    rowGap: 4,
  },
});
