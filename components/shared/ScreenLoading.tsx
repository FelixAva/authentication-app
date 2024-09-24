import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function ScreenLoading() {
  return (
    <View style={ styles.container }>
      <Text style={ styles.loading }>Loading...</Text>

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
