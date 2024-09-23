import { router } from 'expo-router';
import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text
} from 'react-native';
import { Colors } from '../../constants';

interface Props {
  label: string;
  route: 'sign-in' | 'sign-up';
}

export default function Link( { label, route }: Props ) {
  return (
    <Pressable onPress={ () => router.replace(`/(${ route })`) }>

      <Text style={ styles.link }>
        { label } <Text style={ styles.route }>{ route === 'sign-in' ? 'Sign In' : 'Sign Up' }</Text>
      </Text>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 22,
    color: Colors.black
  },
  route: {
    color: 'blue',
    fontStyle: 'italic',
    textTransform: 'uppercase'
  }
});
