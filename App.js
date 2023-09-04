/**
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';

// Components
import HomeView from './components/HomeView.js';
import Moves from './components/Moves.js';
import {AppProvider} from './components/context.js';

// Create Navigation elements
const Stack = createNativeStackNavigator();

const App = () => {
  // Render after all components are loaded and intro animation is done
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 200);
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            // Create the actual screen with their options
            name="Home"
            component={HomeView}
            options={{
              title: 'Koti',
              headerStyle: {backgroundColor: '#607f91'},
              headerTintColor: '#f5f6f7',
              headerShown: false,
            }}
          />
          {/* <Stack.Screen
            name="Moves"
            component={Moves}
            options={{
              title: 'Liikkeet',
              headerStyle: {backgroundColor: '#607f91'},
              headerTintColor: '#f5f6f7',
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
