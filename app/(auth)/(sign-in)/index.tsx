import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from '../../../components';
import { globalStyles } from '../../../constants';

export default function SignIn() {
  return (
    <View style={ styles.container }>
      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  }
});
