import React from 'react';
import IonIcons from '@expo/vector-icons/Ionicons'; // Icon library import. IONICONS
import { View, Text } from 'react-native';

interface Props {
  name: any;
  size?: number;
  color?: string;
}

export default function ComponentScreen({
  name,
  size = 24,
  color = 'black'
}: Props ) {
  return (
      <IonIcons
        style={{ width: size }}
        name={ name }
        size={ size }
        color={ color }
      />
  );
}
