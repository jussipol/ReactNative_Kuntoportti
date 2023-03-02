import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  /* background-color: rgba(121, 125, 152, 0.3); */ //dim the background image
  align-items: center;
`;

export const ListItem = styled.View`
  flex: 1;
  border-radius: 20px;
  margin: 7px;
  padding: 5px;
  /* background-color: darkgrey; */
  width: 90%;
  /* justify-content: center; */
`;

export const ListHeader = styled.View`
  padding-bottom: 10px;
  align-items: center;
`;

export const MoveImageContainer = styled.View`
  overflow: hidden;
  border-radius: 60px;
  /* padding-top: 10px; */
`;

export const MoveImage = styled.Image`
  /* border-radius: 20px; */
  /* overflow: hidden; // put image in container */
  /* justify-content: center;
  align-items: center; */
  /* height: 200px;
  width: 200px; */
`;

export const MoveItem = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  /* background-color: #778899; */
  opacity: 0.9;
  /* height: 100%;
  width: 100%; */
`;

export const BackButton = styled.Pressable`
  align-items: center;
  margin: 5px;
  background-color: green;
  border-radius: 10px;
  padding: 5px;
`;
