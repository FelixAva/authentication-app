import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Link,
  InputText,
  FormContainer,
  Button,
  ContentSafeArea
} from '../../../components';

import { signin } from '../../../api/authService';

import { User, UserDBResponse as UserDB } from '../../../interfaces/user';
import { ActivityIndicator } from 'react-native';

export default function SignIn() {

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      password: "",
    }
  });

  const onSubmit = ( data: User ): void => {
    signin( data )
      .then( ( res: UserDB ) => console.log(res.token))
      .catch( ({ response }) => console.log(response.data.detail) );
  };

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
              error={ errors.userName?.message }
            />
          )}
          name='userName'
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

        {
          false
          ? <ActivityIndicator size='small' />
          : (
            <Button
              title='Sign In'
              action={
                handleSubmit( ( data: User ) => onSubmit( data ) )
              }
              customStyles={{ width: 350 }}
            />
          )
        }

      </FormContainer>

      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </ContentSafeArea>
  );
}
