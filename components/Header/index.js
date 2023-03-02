import React from 'react';
import {Platform} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
//Styles
import {Wrapper, StyledImage, LogoText} from './Header.styles';

export const Header = () => (
  <Wrapper
    style={{
      flex: 0,
    }}>
    {/* <StyledImage source={require('../../images/tiny_logo.png')}></StyledImage> */}
    <LogoText>Kuntokapseli</LogoText>
    {/* {Platform.OS === 'windows' ? (
      <LogoText>Menu</LogoText>
    ) : (
      <Entypo name="menu" style={{fontSize: 45}}></Entypo>
    )} */}
  </Wrapper>
);
