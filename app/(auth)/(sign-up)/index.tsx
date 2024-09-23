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

  const [isKbordActive, setIsKbordActive] = useState( false );

  Keyboard.addListener('keyboardDidShow', () => setIsKbordActive( true ) );
  Keyboard.addListener('keyboardDidHide', () => setIsKbordActive( false ) );

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={ styles.container }
    >
      <TouchableWithoutFeedback
        onPress={ Platform.OS === 'web' ? null : Keyboard.dismiss }
      >
        <ScrollView
          contentContainerStyle={[ styles.content, isKbordActive ? { flex: 0 } : { flex: 1 } ]}
        >
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
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
