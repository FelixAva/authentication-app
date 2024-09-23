import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import {
  Button,
  ContentSafeArea,
  FormContainer,
  InputText,
  Link
} from '../../../components';

export default function SignUp() {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      secondName: '',
      password: '',
      confirmPassword: '',
    }
  });

  const onSubmit = (data) => console.log(data);

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
              label='First name'
              inputProps={{
                placeholder: 'Type your first name',
                onChange: onChange,
                onBlur: onBlur,
                value: value
              }}
              error={ errors.firstName?.message }
            />
          )}
          name='firstName'
        />

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
              label='Second name'
              inputProps={{
                placeholder: 'Type your second name',
                onChange: onChange,
                onBlur: onBlur,
                value: value
              }}
              error={ errors.secondName?.message }
            />
          )}
          name='secondName'
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
              error={ errors.password?.message }
            />
          )}
          name='password'
        />

        <Controller
          control={ control }
          rules={{
            validate: ( val: string ) => {
              if ( watch('password') != val ) {
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
              error={ errors.confirmPassword?.message }
            />
          )}
          name='confirmPassword'
        />

        <Button
          title='Sign Up'
          action={ handleSubmit( onSubmit ) }
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
