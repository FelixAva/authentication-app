import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Button,
  ContentSafeArea,
  FormContainer,
  InputText,
  Link
} from '../../../components';

import { useAuth } from '../../../hooks';

import { User, UserDBResponse as UserDB } from '../../../interfaces/user';
import { ActivityIndicator } from 'react-native';

export default function SignUp() {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      userName: '',
      password: '',
      confirmPassword: '',
    }
  });

  const {
    // Properties
    loading: authLoading,
    data,
    error,

    // Methods
    signUp
  } = useAuth();

  const onSubmit = async ( data: User ) => {
    const res = signUp( data );

    res && console.log(res);
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
                placeholder: 'Type an user name',
                onChange: onChange,
                onBlur: onBlur,
                value: value
              }}
              error={errors.userName?.message}
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
                onChange: onChange,
                onBlur: onBlur,
                value: value
              }}
              error={errors.password?.message}
            />
          )}
          name='password'
        />

        <Controller
          control={ control }
          rules={{
            validate: (val: string) => {
              if (watch('password') != val) {
                return 'The passwords do not match'
              }
            }
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label='Confirm password'
              inputProps={{
                placeholder: 'Type your password again',
                onChange: onChange,
                onBlur: onBlur,
                value: value
              }}
              error={errors.confirmPassword?.message}
            />
          )}
          name='confirmPassword'
        />

        {
          authLoading
            ? <ActivityIndicator size='small' />
            : <Button
              title='Sign Up'
              action={
                handleSubmit( ( data: User ) => onSubmit( data ))
              }
              customStyles={{ width: 350 }}
            />
        }


      </FormContainer>

      <Link
        label="Do you have an account?"
        route='sign-in'
      />
    </ContentSafeArea>
  );
}
