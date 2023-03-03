import React, {useState, useEffect} from 'react';
import {
  View,
  Dimensions,
  ImageBackground,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
import data from '../data';

//Components
import {Header} from './Header';
import {MovesArea} from './MovesArea';
import {useGlobalContext} from './context';

const Moves = ({navigation, route}) => {
  const {randomMoves, randomizeMoves, currentDifficulty, setDifficulty} =
    useGlobalContext();

  const isDarkMode = useColorScheme() === 'dark';

  const {deviceHeight, deviceWidth} = Dimensions.get('window');

  const headerHeight = useHeaderHeight();

  const handleBackPress = () => {
    randomizeMoves();
    Platform.OS === 'windows'
      ? navigation.push('Home')
      : navigation.navigate('Home');
    console.log(route);
  };
  console.log(currentDifficulty);

  const moveInfo = [
    {
      name: data[randomMoves[0]].name,
      id: 1,
      image: data[randomMoves[0]].image,
      difficulty:
        data[randomMoves[0]].difficulty[currentDifficulty][
          Math.floor(
            Math.random() *
              data[randomMoves[0]].difficulty[currentDifficulty].length,
          )
        ],
    },
    {
      name: data[randomMoves[1]].name,
      id: 2,
      image: data[randomMoves[1]].image,
      difficulty:
        data[randomMoves[1]].difficulty[currentDifficulty][
          Math.floor(
            Math.random() *
              data[randomMoves[1]].difficulty[currentDifficulty].length,
          )
        ],
    },
    {
      name: data[randomMoves[2]].name,
      id: 3,
      image: data[randomMoves[2]].image,
      difficulty:
        data[randomMoves[2]].difficulty[currentDifficulty][
          Math.floor(
            Math.random() *
              data[randomMoves[2]].difficulty[currentDifficulty].length,
          )
        ],
    },
  ];

  return (
    <ScrollView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <View style={{flex: 1}}>
        {/* <Header /> */}
        <ImageBackground
          source={require('../images/background_less.png')}
          resizeMode="cover">
          <MovesArea
            handleBackPress={handleBackPress}
            moveInfo={moveInfo}
            deviceHeight={deviceHeight}
            deviceWidth={deviceWidth}
            headerHeight={headerHeight}
          />
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Moves;
