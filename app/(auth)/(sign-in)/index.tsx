import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { globalStyles } from '../../../constants';
import { Link, InputText } from '../../../components';

export default function SignIn() {
  return (
    <View style={ styles.container }>
      <InputText
        label='First name'
        inputProps={{
          placeholder: 'Type your first name'
        }}
      />

      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
