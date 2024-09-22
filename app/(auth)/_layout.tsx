import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function AuthLayout() {
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
