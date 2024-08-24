import React from 'react';
import { Text, Pressable } from 'react-native';

const ButtonComponent = () => {
  return (
    <Pressable
      onPress={ () => console.log('Press') }
    >
      <Text>ButtonComponent</Text>
    </Pressable>
  );
}

export default ButtonComponent;
