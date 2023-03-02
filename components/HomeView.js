import {NavigationRouteContext} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  useColorScheme,
  Platform,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

//Components
import {Header} from './Header';
import {MainArea} from './MainArea';
import {useGlobalContext} from './context';

const difficultyLevels = [
  {name: 'Helppo', id: 'helppo'},
  {name: 'Haastava', id: 'haastava'},
  {name: 'Pro', id: 'pro'},
  {name: 'Extreme', id: 'extreme'},
];

const HomeView = ({navigation, route}) => {
  const {addMoveToDb, buttons, loading, setDifficulty} = useGlobalContext();

  const isDarkMode = useColorScheme() === 'dark';

  const {height, width} = Dimensions.get('window');

  const headerHeight = useHeaderHeight();

  const handlePress = id => {
    setDifficulty(id);
    addMoveToDb(id);

    Platform.OS === 'windows'
      ? navigation.push('Moves')
      : navigation.navigate(`Moves`);
    console.log(route);
    console.log(`buttons in homeview ${buttons}`);
  };

  return (
    <ScrollView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../images/fire.jpg')}
          resizeMode="cover">
          <Header />
          {loading ? (
            <></>
          ) : (
            <MainArea
              buttons={buttons}
              handlePress={handlePress}
              difficultyLevels={difficultyLevels}
              height={height}
              width={width}
              headerHeight={headerHeight}
            />
          )}
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default HomeView;
