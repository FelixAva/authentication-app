import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { globalStyles } from '../../../constants';
import { Link, InputText, FormContainer } from '../../../components';

export default function SignIn() {
  return (
    <View style={ styles.container }>

      <FormContainer>
        <InputText
          label='User'
          inputProps={{
            placeholder: 'Type your user name'
          }}
        />

        <InputText
          label='Password'
          inputProps={{
            placeholder: 'Type your password'
          }}
        />
      </FormContainer>

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
