import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  Pressable
} from 'react-native';

import { Colors } from '../../constants';
import { capitalize } from '../../helpers/capitalize';
import { Icon } from '..';

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

  const [isPwdHidden, setIsPwdHidden] = useState<boolean>( true );

  return (
    <View style={{ gap: 10 }}>
      <Text
        style={ styles.label }
      >
        { label } { required && '*'  }
      </Text>

      <View style={ isPasswordInput && styles.inputGroup }>
        <TextInput
          { ...inputProps }
          style={ styles.input }
          secureTextEntry={ isPwdHidden && isPasswordInput }
        />

        {
          isPasswordInput &&
            <Pressable
              onPress={ () => setIsPwdHidden( !isPwdHidden ) }
              style={ styles.icon }
            >
              <Icon name={ isPwdHidden ? 'eye' : 'eye-off'} />
            </Pressable>
        }
      </View>

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
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row'
  },
  icon: {
    width: 25,
    right: 15,

    position: 'absolute',
    alignSelf: 'center'
  }
});
