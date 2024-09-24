import { Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';

import { ScreenLoading } from '../../components';

export default function AuthLayout() {

  const [isLoading, setIsLoading] = useState<boolean>( false );

  useEffect(() => {
    setIsLoading( true );

    setTimeout(() => {
      setIsLoading( false );
    }, 1000 );
  }, [])

  if ( isLoading ) return <ScreenLoading />;

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
