import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import type { RadioButtonProps } from 'react-native-paper';
import { RadioButton, Text } from 'react-native-paper';

type RadioButtonItemProps = RadioButtonProps & {
  value: string;
  onPress: () => void;
  label: string;
};

export function RadioButtonItem({
  value,
  onPress,
  label,
}: RadioButtonItemProps) {
  return (
    <TouchableOpacity className="flex-row items-center" onPress={onPress}>
      <RadioButton.Android value={value} />
      <Text className="text-base">{label}</Text>
    </TouchableOpacity>
  );
}
