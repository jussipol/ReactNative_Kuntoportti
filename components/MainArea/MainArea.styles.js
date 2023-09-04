import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  /* align-items: center; */
  /* background-color: rgba(121, 125, 152, 0.3); */ // dim the background image
`;

export const ListItem = styled.View`
  flex: 1;
  border-radius: 20px;
  margin: 7px;
  padding: 10px;
  /* background-color: darkgrey; */
  width: 70%;
  align-self: center;
  align-items: center;
  /* justify-content: center; */
`;

export const NumField = styled.TextInput`
  width: 80%;
  background-color: white;
  margin-top: 10px;
`;

export const StyledPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: #607f91;
  opacity: 0.9;
  height: 13%;
  margin-top: 15px;
  width: 75%;
`;

export const ProgressText = styled.Text`
  padding-top: 10px;
  font-size: 16px;
  font-style: italic;
  color: rgba(18, 15, 11, 0.8);
  align-self: center;
`;
