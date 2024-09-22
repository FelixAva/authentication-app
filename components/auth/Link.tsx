import { router } from 'expo-router';
import React from 'react';
import {
  Pressable,
  Text
} from 'react-native';

interface Props {
  label: string;
  route: 'sign-in' | 'sign-up';
}

export default function Link( {label, route }: Props ) {
  return (
    <Pressable onPress={ () => router.replace(`/(${ route })`) }>
      <Text>
        { label } <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{ route === 'sign-in' ? 'Sign In' : 'Sign Up' }</Text>
      </Text>
    </Pressable>
  );
}
