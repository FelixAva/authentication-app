import React, { ReactNode, useState } from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  StyleSheet
} from 'react-native';

import { globalStyles } from '../../constants';

interface Props {
  children: ReactNode;
}

export default function ContentSafeArea( { children }: Props ) {

  const [isKbordActive, setIsKbordActive] = useState( false );

  Keyboard.addListener('keyboardDidShow', () => setIsKbordActive( true ) );
  Keyboard.addListener('keyboardDidHide', () => setIsKbordActive( false ) );

  return (
    <KeyboardAvoidingView
      behavior='position'
      style={ styles.container }
    >
      <TouchableWithoutFeedback
        onPress={ Platform.OS === 'web' ? null : Keyboard.dismiss }
      >
        <ScrollView
          contentContainerStyle={[ styles.content, isKbordActive ? { flex: 0 } : { flex: 1 } ]}
        >
          {
            children
          }
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});
