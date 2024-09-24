import React, { ReactNode } from 'react';
import { View } from 'react-native';
import ScreenLoading from './ScreenLoading';

interface Props {
  isLoading?: boolean;
  condition: boolean;

  render1: ReactNode;
  render2: ReactNode
}

export default function ConditionalContentRender({
  isLoading,
  condition,
  render1,
  render2
}: Props) {

  if ( isLoading ) return <ScreenLoading />

  return (
    <View>
      {
        condition
          ? (
            render1
          )
          : (
            render2
          )
      }
    </View>
  );
}
