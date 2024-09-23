import React from 'react';
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import { Colors } from '../../constants';

interface Props {
  title: string;
  customStyles?: StyleProp<ViewStyle>;
  action: () => void;
}

export default function Button( { title, customStyles ,action }: Props ) {
  return (
    <Pressable
      onPress={ action }
      style={[ styles.button, customStyles ]}
    >
      <Text style={ styles.title } >{ title }</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 10,
    borderRadius: 10,

    alignItems: 'center',

    backgroundColor: Colors.accent
  },
  title: {
    fontSize: 18
  }
});
