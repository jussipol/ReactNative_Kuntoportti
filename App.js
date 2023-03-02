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

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
      console.log('timedin');
    }, 200);
    console.log('timedout');
  }, []);
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeView}
            options={{title: 'Koti'}}
          />
          <Stack.Screen
            name="Moves"
            component={Moves}
            options={{title: 'Liikkeet'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
