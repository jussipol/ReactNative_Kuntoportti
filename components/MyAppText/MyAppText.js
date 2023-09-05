import React from 'react';
import {Text, Platform} from 'react-native';

// Default text in the app that can be imported anywhere
export const MyAppText = ({children}) => {
  return (
    <Text
      style={[
        Platform.OS === 'android'
          ? {
              fontSize: 22,
              fontFamily: 'monospace',
              color: '#0d030ce6',
              textShadowRadius: 3,
              textShadowColor: 'white',
            }
          : {
              fontSize: 22,
              fontFamily: 'arial',
              color: '#0d030ce6',
            },
      ]}>
      {children}
    </Text>
  );
};

export const MyAppText2 = ({children}) => {
  return (
    <Text
      style={[
        Platform.OS === 'android'
          ? {
              fontSize: 24,
              fontFamily: 'monospace',
              fontWeight: '600',
              textShadowRadius: 6,
              textShadowColor: 'white',
              color: '#1D1D19',
            }
          : {
              fontSize: 22,
              fontFamily: 'arial',
              color: '#071E18',
            },
      ]}>
      {children}
    </Text>
  );
};

export const MyAppText3 = ({children}) => {
  return (
    <Text
      style={[
        Platform.OS === 'android'
          ? {
              fontSize: 24,
              fontFamily: 'monospace',
              fontWeight: '700',
              textShadowRadius: 6,
              textShadowColor: 'white',
              color: '#1D1D19',
            }
          : {
              fontSize: 22,
              fontFamily: 'arial',
              color: '#071E18',
            },
      ]}>
      {children}
    </Text>
  );
};
