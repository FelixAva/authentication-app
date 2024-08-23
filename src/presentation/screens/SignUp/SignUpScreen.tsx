import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { RootStackParams } from '../../navigator/Navigator';


const SignUpScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={ styles.container }>
      <Text>SignUpScreen</Text>

      <Pressable
        onPress={ () => navigation.goBack() }
        style={ styles.button }
      >
        <Text style={{ color: 'white' }}>Sign In</Text>
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

export default SignUpScreen;
