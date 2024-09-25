import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components';

import { useAuth } from '../../hooks';
import useUserStore from '../../store/useStore';
import { globalStyles } from '../../constants/global-styles';
import { capitalize } from '../../helpers/capitalize';

export default function Home() {

  const { loading, signOut } = useAuth();
  const token = useUserStore( state => state.token );
  const user = useUserStore( state => state.user );
  const deleteUser = useUserStore( state => state.deleteUser );

  const onSignOut = () => {
    signOut( token );
    deleteUser();
  }

  return (
    <View style={ styles.container }>
      <Text style={ styles.helloMessage }>Welcome { capitalize( user.username ) }</Text>
      <Button
        title='Sign Out'
        action={ () => onSignOut() }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,

    alignItems: 'center',
    justifyContent: 'center'
  },
  helloMessage: {
    fontSize: 30,
    marginBottom: 25
  }
});
