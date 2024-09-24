import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

interface Props {
  screenName: string
}

export default function ScreenLoading( { screenName }: Props ) {
  return (
    <View style={ styles.container }>
      <Text style={ styles.loading }>Loading { screenName }...</Text>

      <ActivityIndicator size={ 80 } style={{ marginTop: 20 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    fontSize: 26
  }
});
