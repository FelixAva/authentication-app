import React from 'react';
import { View, StyleSheet } from 'react-native';

import { globalStyles } from '../../../constants';
import { Button, FormContainer, InputText, Link } from '../../../components';

export default function SignUp() {
  return (
    <View style={ styles.container } collapsable>

      <FormContainer>
        <InputText
          label='First name'
          inputProps={{
            placeholder: 'Type your first name'
          }}
        />

        <InputText
          label='Second name'
          inputProps={{
            placeholder: 'Type your second name'
          }}
        />

        <InputText
          label='Password'
          inputProps={{
            placeholder: 'Type your password'
          }}
        />

        <InputText
          label='Confirm password'
          inputProps={{
            placeholder: 'Type your password again'
          }}
        />

        <Button
          title='Sign Up'
          action={ () => console.log('Sign Up') }
          customStyles={{ width: 350 }}
        />
      </FormContainer>

      <Link
        label="Do you have an account?"
        route='sign-in'
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
