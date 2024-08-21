import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { View, Text } from 'react-native';

import { SignInScreen, SignUpScreen } from '../screens';


const Stack = createStackNavigator();


const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={ SignInScreen } />
      <Stack.Screen name="SignUp" component={ SignUpScreen } />
    </Stack.Navigator>
  );
}

export default Navigator;
