import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';

import { SignInScreen, SignUpScreen } from '../screens';


export type RootStackParams = {
  SignIn: undefined,
  SignUp: undefined,
}

const Stack = createStackNavigator<RootStackParams>();


const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName='SignIn'>
      <Stack.Screen name="SignIn" component={ SignInScreen } options={{
        headerShown: false
      }}/>
      <Stack.Screen name="SignUp" component={ SignUpScreen } options={{
        headerShown: false
      }} />
    </Stack.Navigator>
  );
}

export default Navigator;
