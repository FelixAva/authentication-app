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
          contentContainerStyle={[ isKbordActive ? styles.content_keyboardOn : styles.content_keyboardOff, Platform.OS === 'web' && { gap: 40 } ]}
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
  content_keyboardOff: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  content_keyboardOn: {
    flex: 0,
    alignItems: 'center',
    gap: 40
  }
});
