import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import type { CheckboxProps } from 'react-native-paper';
import { Checkbox, Text } from 'react-native-paper';

type CheckboxItemProps = CheckboxProps & {
  label: string;
};

export function CheckboxItem({ onPress, label, status }: CheckboxItemProps) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View className="flex-row items-center">
        <Checkbox.Android status={status} onPress={onPress} />
        <Text className="text-base">{label}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}
