import React from 'react';
import { Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';

import {
  Link,
  InputText,
  FormContainer,
  Button,
  ContentSafeArea
} from '../../../components';

import { useAuth } from '../../../hooks';
import {
  User,
  UserDBResponse as UserDB
} from '../../../interfaces/user';

import { Colors } from '../../../constants';

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

  const {
    // Properties
    loading: authLoading,
    error,
    data,

    // Methods
    signIn
  } = useAuth();

  const onSubmit = async ( user: User ): Promise<void> => {
    const res = await signIn( user );

    res && console.log('Logged in User:', res);
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
          authLoading
            ? <ActivityIndicator size='small' />
            : <Button
              title='Sign In'
              action={
                handleSubmit( ( data: User ) => onSubmit( data ) )
              }
              customStyles={{ width: 350 }}
            />
        }
        {
          error && <Text style={{ color: Colors.warning, fontSize: 18 }}>Error: { error }</Text>
        }
        {
          data && <Text style={{ color: Colors.success, fontSize: 18 }}>Sign In successfull!</Text>
        }

      </FormContainer>

      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </ContentSafeArea>
  );
}
