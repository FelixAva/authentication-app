import React from 'react';

import {
  Button,
  ContentSafeArea,
  FormContainer,
  InputText,
  Link
} from '../../../components';

export default function SignUp() {
  return (
    <ContentSafeArea>
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
    </ContentSafeArea>
  );
}
