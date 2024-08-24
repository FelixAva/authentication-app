import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import type { RootStackParams } from '../../navigator/Navigator';
import { colors, globlaStyles } from '../../../config/theme/app-theme';
import { TextInputComponent } from '../../components';


const SignInScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ globlaStyles.container }>
      <Text style={ globlaStyles.header }>Sign In</Text>

      <TextInputComponent label='First name' placeholder='Type your name' />
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    width: 120,
    padding: 10,
    backgroundColor: colors.color3,
    color: colors.white,
    borderRadius: 10,

    alignItems: 'center',
  },
  input: {
    width: '60%',
    borderBottomWidth: 1,
  }
});

export default SignInScreen;
