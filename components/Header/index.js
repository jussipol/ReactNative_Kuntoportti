import React from 'react';

//Styles
import {Wrapper, StyledImage, LogoText} from './Header.styles';

export const Header = () => (
  <Wrapper
    style={{
      flex: 0,
    }}>
    <LogoText>CalorieCounter</LogoText>
  </Wrapper>
);
