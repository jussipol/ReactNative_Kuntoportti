import React from 'react';
import {Text} from 'react-native';

export const MyAppText = ({children}) => {
  return (
    <Text
      style={{
        fontSize: 22,
        fontFamily: 'monospace',
        color: '#f0f8ff',
      }}>
      {children}
    </Text>
  );
};
