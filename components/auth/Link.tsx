import { Router } from 'expo-router';
import React from 'react';
import {
  Pressable,
  Text
} from 'react-native';

interface Props {
  label: string;
  screen: string;
}

export default function Link( {label, screen }: Props ) {
  return (
    <Pressable onPress={ () => { console.log('Go to ' + screen) } }>
      <Text>
        { label } <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>{ screen }</Text>
      </Text>
    </Pressable>
  );
}
