import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '../../../components';

export default function SignIn() {
  return (
    <View>
      <Text>SignIn</Text>
      <Link
        label="Don't you have an account?"
        route='sign-up'
      />
    </View>
  );
}
