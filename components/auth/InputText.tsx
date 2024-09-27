import React from 'react';
import { View, Text, TextInput, TextInputProps, StyleSheet } from 'react-native';

import { Colors } from '../../constants';
import { capitalize } from '../../helpers/capitalize';

interface Props {
  label: string;
  error?: string;
  required?: boolean;
  isPasswordInput?: boolean;

  inputProps: TextInputProps;
}

export default function InputText( {
  label,
  error,
  required,
  isPasswordInput,

  inputProps
}: Props ) {

  return (
    <View style={{ gap: 10 }}>
      <Text
        style={ styles.label }
      >
        { label } { required && '*'  }
      </Text>

      <TextInput
        { ...inputProps }
        style={ styles.input }
        secureTextEntry={ isPasswordInput }
      />

      {
        error &&
        <Text style={ styles.error }>
          { capitalize( error ) }
        </Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 22,
    color: Colors.black
  },
  input: {
    width: 350,
    height: 50,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 5,
    borderWidth: 1,

    color: '#4f4f4f'
  },
  error: {
    fontSize: 16,
    color: Colors.warning
  }
});
