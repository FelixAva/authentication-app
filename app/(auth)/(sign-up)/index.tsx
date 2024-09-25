import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Text, ActivityIndicator } from 'react-native';

import {
  Button,
  ContentSafeArea,
  FormContainer,
  InputText,
  Link
} from '../../../components';

import { useAuth } from '../../../hooks';

import { User, UserDBResponse as UserDB } from '../../../interfaces/user';
import { Colors } from '../../../constants/app-theme';

export default function SignUp() {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
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

  const onSubmit = async ( user: User ): Promise<void> => {
    signUp( user );
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
          render={({ field: { onChange, onBlur } }) => (
            <InputText
              label='User'
              inputProps={{
                placeholder: 'Type an user name',
                onChangeText: onChange,
                onBlur: onBlur,
              }}
              error={errors.username?.message}
            />
          )}
          name='username'
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
          render={({ field: { onChange, onBlur } }) => (
            <InputText
              label='Password'
              inputProps={{
                placeholder: 'Type your password',
                onChangeText: onChange,
                onBlur: onBlur,
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
          render={({ field: { onChange, onBlur } }) => (
            <InputText
              label='Confirm password'
              inputProps={{
                placeholder: 'Type your password again',
                onChangeText: onChange,
                onBlur: onBlur,
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

        {
          error && <Text style={{ color: Colors.warning, fontSize: 16 }}> Error: { error }</Text>
        }
        {
          data && <Text style={{ color: Colors.success, fontSize: 18 }}>Sign Up successfull!</Text>
        }

      </FormContainer>

      <Link
        label="Do you have an account?"
        route='sign-in'
      />
    </ContentSafeArea>
  );
}
