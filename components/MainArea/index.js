import React, {useEffect} from 'react';

import {Platform, TextInput} from 'react-native';
//Styles
import {
  Wrapper,
  ListItem,
  StyledPressable,
  ProgressText,
} from './MainArea.styles';

//Components
import {MyAppText} from '../MyAppText/MyAppText';
import {useGlobalContext} from '../context';

export const MainArea = ({
  handlePress,
  difficultyLevels,
  height,
  width,
  headerHeight,
  buttons,
}) => {
  console.log('rendered');
  return (
    <Wrapper
      style={{
        height: height - 100 - headerHeight,
      }}>
      {difficultyLevels.map(({name, id}) => {
        return (
          <ListItem key={id}>
            <StyledPressable
              android_ripple={{color: 'lightslategray', radius: 10}}
              onPress={() => handlePress(id)}
              style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
              <MyAppText>{name}</MyAppText>
            </StyledPressable>
            <ProgressText>{`completed: ${buttons[id]}`}</ProgressText>
          </ListItem>
        );
      })}
    </Wrapper>
  );
};
