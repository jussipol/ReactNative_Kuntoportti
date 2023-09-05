import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  /* align-items: center; */
  /* background-color: rgba(121, 125, 152, 0.3); // dim the background image */
`;

export const ButtonWrapper = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  /* background-color: rgba(121, 125, 152, 0.3); // dim the background image */
`;

export const ListItem = styled.View`
  flex: 3;
  border-radius: 20px;
  margin: 7px;
  padding: 10px;
  background-color: rgba(121, 115, 132, 0.2);
  width: 90%;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ListItem2 = styled.View`
  flex: 4;
  border-radius: 20px;
  margin: 7px;
  padding: 10px;
  /* background-color: darkgrey; */
  width: 90%;
  align-self: center;
  align-items: center;
  /* flex-direction: row; */
  justify-content: space-between;
`;

export const ListItem3 = styled.View`
  flex: 10;
  border-radius: 20px;
  margin: 7px;
  padding: 10px;
  background-color: rgba(121, 115, 132, 0.2);
  width: 90%;
  align-self: center;
  align-items: center;
  /* justify-content: center; */
`;

export const NumField = styled.TextInput`
  width: 40%;
  background-color: rgba(255, 255, 255, 0.8);
  color: darkslategrey;
  font-size: 22px;
  margin-top: 10px;
`;

export const NumField2 = styled.TextInput`
  width: 80%;
  background-color: rgba(255, 255, 255, 0.8);
  color: darkslategrey;
  font-size: 20px;
  margin-top: 10px;
`;

export const StyledPressable = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(215, 255, 211, 0.95);
  opacity: 0.9;
  /* height: 13%; */
  padding: 5px;
  width: 35%;
`;

export const StyledPressable2 = styled.Pressable`
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background-color: rgba(215, 255, 211, 0.95);
  opacity: 0.9;
  padding: 5px;
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
