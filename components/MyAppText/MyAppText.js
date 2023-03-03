import React from 'react';
import {Text, Platform} from 'react-native';

export const MyAppText = ({children}) => {
  return (
    <Text
      style={[
        Platform.OS === 'android'
          ? {
              fontSize: 24,
              fontFamily: 'monospace',
              color: '#0d030ce6',
            }
          : {
              fontSize: 24,
              fontFamily: 'arial',
              color: '#0d030ce6',
            },
      ]}>
      {children}
    </Text>
  );
};
