import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function ScreenLoading() {
  return (
    <View style={ styles.container }>
      <Text>Loading...</Text>

      <ActivityIndicator size='large' style={{ marginTop: 15 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
