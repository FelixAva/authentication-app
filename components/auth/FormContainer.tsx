import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

interface Props {
  children: ReactNode;
}

export default function FormContainer( { children }: Props ) {
  return (
    <View style={ styles.container }>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',

    paddingBottom: 40,
    gap: 30,
    borderBottomWidth: 1
  }
});
