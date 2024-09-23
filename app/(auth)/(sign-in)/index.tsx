import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Link,
  InputText,
  FormContainer,
  Button,
  ContentSafeArea
} from '../../../components';

export default function SignIn() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    }
  });

  const onSubmit = ( data ) => console.log(data);

  return (
    <ContentSafeArea>
      <FormContainer>
        <Controller
          control={ control }
          rules={{
            required: {
              value: true,
              message: 'This field is required'
            },
            maxLength: {
              value: 12,
              message: 'Max length is 12'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label='User'
              inputProps={{
                placeholder: 'Type your user name',
                onBlur: onBlur,
                onChange: onChange,
                value: value
              }}
              error={ errors.user?.message }
            />
          )}
          name='user'
        />

        <Controller
          control={ control }
          rules={{
            required: {
              value: true,
              message: 'This field is required'
            },
            minLength: {
              value: 4,
              message: 'Min length is 4'
            },
            maxLength: {
              value: 12,
              message: 'Max length is 12'
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label='Password'
              inputProps={{
                placeholder: 'Type your password',
                onBlur: onBlur,
                onChange: onChange,
                value: value
              }}
              error={ errors.password?.message }
            />
          )}
          name='password'
        />

        <Button
          title='Sign In'
          action={ handleSubmit( onSubmit ) }
          customStyles={{ width: 350 }}
        />
      </FormContainer>

      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </ContentSafeArea>
  );
}
