import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import type { RootStackParams } from '../../navigator/Navigator';


const SignInScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ styles.container }>
      <Text>SignInScreen</Text>

      <Pressable
        onPress={ () => navigation.navigate('SignUp') }
        style={ styles.button }
      >
        <Text style={{ color: 'white' }}>Sign Up</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  button: {
    marginTop: 10,
    width: 80,
    padding: 10,
    backgroundColor: 'gray',
    borderRadius: 10,

    alignItems: 'center',
  }
});

export default SignInScreen;
