import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';

interface Props {
  label: string;
  placeholder: string;

  error?: string;
  required?: boolean;

  inputProps: TextInputProps;
}

export default function InputText( {
  label,
  placeholder,
  error,
  required,
  inputProps
}: Props ) {
  return (
    <View>
      <Text>{ label } { required && '*'  }</Text>

      <TextInput
        { ...inputProps }
        placeholder={ placeholder }
      />

      <Text>{ error }</Text>
    </View>
  );
}
