import { Redirect, Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';

import { ScreenLoading } from '../../components';

import useUserStore from '../../store/useStore';

export default function AuthLayout() {

  const [isLoading, setIsLoading] = useState<boolean>( false );

  const token = useUserStore( state => state.token );

  useEffect(() => {
    setIsLoading( true );

    setTimeout(() => {
      setIsLoading( false );
    }, 1000 );
  }, [])

  if ( isLoading ) return <ScreenLoading />;

  if ( token ) return <Redirect href='/(app)/' />

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center'
      }}
    >
      <Stack.Screen name='(sign-in)' options={{ title: 'Sign In' }} />
      <Stack.Screen name='(sign-up)' options={{ title: 'Sign Up' }} />
    </Stack>
  );
}
