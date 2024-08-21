import '../gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import { View, Text } from 'react-native';

import Navigator from './presentation/navigator/Navigator';

const AuthenticationApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}

export default AuthenticationApp;
