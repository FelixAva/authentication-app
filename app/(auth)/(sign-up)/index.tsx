import React from 'react';
import { View, Text } from 'react-native';
import { Link } from '../../../components';

export default function SignUp() {
  return (
    <View>
      <Text>SignUp</Text>
      <Link
        label="Do you have an account?"
        route='sign-in'
      />
    </View>
  );
}
