import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  ScrollView
} from 'react-native';

import { globalStyles } from '../../../constants';
import { Button, FormContainer, InputText, Link } from '../../../components';

export default function SignUp() {

  const [key, setKey] = useState( false );

  Keyboard.addListener('keyboardDidShow', () => setKey(true) );
  Keyboard.addListener('keyboardDidHide', () => setKey(false) );

  return (
    <KeyboardAvoidingView style={ styles.container }
      behavior='position'
    >
      <TouchableWithoutFeedback onPress={ Platform.OS === 'web' ? null : Keyboard.dismiss } style={ [styles.content] }>
        <ScrollView contentContainerStyle={[ styles.content, key ? { flex: 0 } : { flex: 1 } ]}>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
