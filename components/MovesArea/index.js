import React from 'react';

import {Platform, TextInput, ImageBackground} from 'react-native';
//Styles
import {
  Wrapper,
  ListItem,
  BackButton,
  ListHeader,
  MoveImage,
  MoveImageContainer,
} from './MovesArea.styles';

//Components
import {MyAppText} from '../MyAppText/MyAppText';

export const MovesArea = ({handleBackPress, moveInfo}) => {
  return (
    <Wrapper style={{}}>
      {moveInfo.map(({name, id, image, difficulty}) => {
        return (
          <ListItem key={id}>
            <ListHeader>
              <MyAppText
                style={{
                  fontStyle: 'italic',
                }}>{`${name} ${difficulty}`}</MyAppText>
            </ListHeader>
            <MoveImageContainer>
              <MoveImage source={{uri: image}} resizeMode="cover" />
            </MoveImageContainer>
          </ListItem>
        );
      })}
      <BackButton onPress={() => handleBackPress()}>
        <MyAppText>Valmis!</MyAppText>
      </BackButton>
    </Wrapper>
  );
};
