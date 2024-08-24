import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { colors } from '../../../config/theme/app-theme';


interface Props {
  label: string;
  placeholder: string;
}


const TextInputComponent = ( { label, placeholder }: Props ) => {

  const [isValid, setIsValid] = useState<boolean>(false);

  return (
    <>
      <Text style={ styles.label }>{ label }</Text>

      <TextInput
        onChangeText={ () => setIsValid(true) }
        placeholder={ placeholder }
        placeholderTextColor={ colors.color5 }
        style={ styles.input }
      />
      { isValid && <Text style={ styles.warning }>Warning</Text> }
    </>
  );
}


const styles = StyleSheet.create({
  input: {
    borderBottomColor: colors.color3,
    borderBottomWidth: 1,

    width: '80%',
    fontSize: 20,
  },
  label: {
    fontSize: 20,
    color: colors.color3,
  },
  warning: {
    marginTop: 5,
    color: colors.warning
  }
});

export default TextInputComponent;
