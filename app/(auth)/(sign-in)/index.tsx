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
import useUserStore from '../../../store/useStore';

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
      username: "",
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

  const updateToken = useUserStore( state => state.updateToken );
  const updateUser = useUserStore( state => state.updateUser );

  const storeUserData = ( user: UserDB ) => {
    updateToken( user.token );
    updateUser( user.user );

    console.log(user.token);
    console.log(user.user);
  }

  const onSubmit = async ( user: User ): Promise<void> => {
    const res: UserDB = await signIn( user );

    if ( res ) {
      storeUserData( res );
    }
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
                placeholder: 'Type your user name',
                onBlur: onBlur,
                onChangeText: onChange,
              }}
              error={ errors.username?.message }
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
          render={({ field: { onChange, onBlur, value } }) => (
            <InputText
              label='Password'
              inputProps={{
                placeholder: 'Type your password',
                onBlur: onBlur,
                onChangeText: onChange,
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
          error && <Text style={{ color: Colors.warning, fontSize: 16 }}>Error: { error }</Text>
        }
        {
          data && <Text style={{ color: Colors.success, fontSize: 16 }}>Sign In successfull!</Text>
        }

      </FormContainer>

      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </ContentSafeArea>
  );
}
