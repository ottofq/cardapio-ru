import * as React from 'react';
import type {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { useController } from 'react-hook-form';
import { View } from 'react-native';
import type { TextInputProps } from 'react-native-paper';
import { HelperText, TextInput } from 'react-native-paper';

type TRule = Omit<
  RegisterOptions,
  'valueAsNumber' | 'valueAsDate' | 'setValueAs'
>;

export type RuleType<T> = { [name in keyof T]: TRule };
export type InputControllerType<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?: TRule;
};

interface ControlledInputProps<T extends FieldValues>
  extends TextInputProps,
    InputControllerType<T> {}

// only used with react-hook-form
export function ControlledInput<T extends FieldValues>(
  props: ControlledInputProps<T>
) {
  const { name, control, rules, ...inputProps } = props;

  const { field, fieldState } = useController({ control, name, rules });
  return (
    <View>
      <TextInput
        ref={field.ref}
        autoCapitalize="none"
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value as string}
        {...inputProps}
      />
      {fieldState.error?.message && (
        <HelperText type="error">{fieldState.error?.message}</HelperText>
      )}
    </View>
  );
}
