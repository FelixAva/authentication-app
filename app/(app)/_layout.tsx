import { Redirect, Stack } from 'expo-router';
import React, { useState, useEffect } from 'react';

import { ScreenLoading } from '../../components';

import useUserStore from '../../store/useStore';

export default function AppLayout() {

  const [isLoading, setIsLoading] = useState<boolean>( false );

  const token = useUserStore( state => state.token );

  useEffect(() => {
    setIsLoading( true );

    setTimeout(() => {
      setIsLoading( false );
    }, 1000 );
  }, [])

  if ( isLoading ) return <ScreenLoading />;

  if ( !token ) return <Redirect href='/(auth)/' />

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
