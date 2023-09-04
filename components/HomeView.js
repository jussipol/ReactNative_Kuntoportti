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
  Image,
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';

//Components
import {Header} from './Header';
import {MainArea} from './MainArea';
import {useGlobalContext} from './context';

// Set a list to map through during rendering, names for the categories

const HomeView = ({navigation, route}) => {
  const {
    addMoveToDb,
    buttons,
    loading,
    setDifficulty,
    showIntro,
    selectOptions,
    calories,
    addedCalories,
    changeCalories,
    addCalories,
    changeFoodName,
    changeFoodCalories,
    foodName,
    foodCalories,
  } = useGlobalContext();

  const isDarkMode = useColorScheme() === 'dark';

  const {height, width} = Dimensions.get('window');

  const headerHeight = useHeaderHeight();

  const handlePress = () => {
    console.log('handlePress called');
    // Handle difficulty choice, pick amount of moves and store into db
    // setDifficulty(id);

    console.log(foodName, foodCalories);
    addMoveToDb(foodName, foodCalories);

    // Platform.OS === 'windows'
    //   ? navigation.push('Moves')
    //   : navigation.navigate(`Moves`);
  };

  return (
    <>
      {showIntro ? ( // When loading for the first time, show the intro
        <View style={{flex: 1}}>
          <Image
            source={require('../images/intro130.gif')}
            resizeMode="cover"
            style={{width: width, height: height}}
          />
        </View>
      ) : (
        <ScrollView>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

          <View style={{flex: 1}}>
            <ImageBackground
              source={require('../images/background_kunto.png')}
              resizeMode="cover"
              style={[Platform.OS === 'ios' ? {paddingTop: 30} : {}]}>
              <Header />
              {loading ? (
                <></>
              ) : (
                <MainArea
                  changeFoodName={changeFoodName}
                  changeFoodCalories={changeFoodCalories}
                  changeCalories={changeCalories}
                  addCalories={addCalories}
                  addedCalories={addedCalories}
                  calories={calories}
                  selectOptions={selectOptions}
                  buttons={buttons}
                  handlePress={handlePress}
                  height={height}
                  width={width}
                  headerHeight={headerHeight}
                />
              )}
            </ImageBackground>
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeView;
