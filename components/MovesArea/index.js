import React from 'react';
MoveItem;
import {Platform, TextInput, ImageBackground} from 'react-native';
//Styles
import {
  Wrapper,
  ListItem,
  MoveItem,
  BackButton,
  ListHeader,
  MoveImage,
  MoveImageContainer,
} from './MovesArea.styles';

//Components
import {MyAppText} from '../MyAppText/MyAppText';

export const MovesArea = ({
  handleBackPress,
  moveInfo,
  deviceHeight,
  deviceWidth,
  headerHeight,
}) => {
  return (
    <Wrapper
      style={
        {
          // height: height - headerHeight
        }
      }>
      {/* <TextInput style={{flex: 0, width: '50%'}} placeholder="type here" /> */}
      {moveInfo.map(({name, id, image, difficulty}) => {
        return (
          <ListItem key={id}>
            <ListHeader>
              <MyAppText>{`${name} ${difficulty}`}</MyAppText>
            </ListHeader>
            <MoveImageContainer>
              <MoveImage
                source={{uri: image}}
                resizeMode="cover"
                style={{width: deviceWidth, aspectRatio: 1}}
              />
            </MoveImageContainer>
          </ListItem>
        );
      })}
      <BackButton onPress={() => handleBackPress()}>
        <MyAppText>Done!</MyAppText>
      </BackButton>
    </Wrapper>
  );
};
