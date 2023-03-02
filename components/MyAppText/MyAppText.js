import React from 'react';
import {Text, Platform} from 'react-native';

export const MyAppText = ({children}) => {
  return (
    <Text
      style={[
        Platform.OS === 'android'
          ? {
              fontSize: 22,
              fontFamily: 'monospace',
              color: '#f0f8ff',
            }
          : {
              fontSize: 22,
              fontFamily: 'arial',
            },
      ]}>
      {children}
    </Text>
  );
};
