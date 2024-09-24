import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ScreenLoading } from '../../../components';

export default function SignInLayout() {

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
        headerShown: false
      }}
    >
      <Stack.Screen name='index' />
    </Stack>
  );
}
