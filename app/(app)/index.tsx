import React from 'react';
import { View, Text } from 'react-native';

import { Button } from '../../components';

import { useAuth } from '../../hooks';
import useUserStore from '../../store/useStore';

export default function Home() {

  const { loading, signOut } = useAuth();
  const token = useUserStore( state => state.token );
  const deleteUser = useUserStore( state => state.deleteUser );

  const onSignOut = () => {
    signOut( token );
    deleteUser();
  }

  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Sign Out'
        action={ () => onSignOut() }
      />
    </View>
  );
}
