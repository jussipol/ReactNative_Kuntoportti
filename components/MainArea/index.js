import React, {useEffect} from 'react';

import {Platform, TextInput} from 'react-native';
//Styles
import {
  Wrapper,
  ListItem,
  ListItem2,
  ListItem3,
  StyledPressable,
  StyledPressable2,
  ProgressText,
  NumField,
  NumField2,
  ButtonWrapper,
} from './MainArea.styles';

//Components
import {MyAppText, MyAppText2, MyAppText3} from '../MyAppText/MyAppText';
import SelectDropdown from 'react-native-select-dropdown';

export const MainArea = ({
  handlePress,
  difficultyLevels,
  height,
  width,
  headerHeight,
  buttons,
  selectOptions,
  calories,
  addedCalories,
  addCalories,
  changeCalories,
  changeFoodName,
  changeFoodCalories,
  changeSelectedFood,
  addSelectionCalories,
  resetCalories,
  cancelCalories,
}) => {
  return (
    <Wrapper
      style={{
        height: height - 100 - headerHeight,
      }}>
      <ListItem>
        <SelectDropdown
          data={Object.keys(buttons)}
          defaultValueByIndex={0} // use default value by index or default value
          onSelect={(selectedItem, index) => {
            changeSelectedFood(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
          buttonStyle={{
            width: '55%',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        />
        <StyledPressable
          android_ripple={{color: 'black', radius: 5}}
          onPress={addSelectionCalories}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Select</MyAppText>
        </StyledPressable>
      </ListItem>
      <ListItem>
        <NumField editable onChangeText={id => changeCalories(id)}></NumField>
        <StyledPressable
          android_ripple={{color: 'black', radius: 5}}
          onPress={addCalories}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Add</MyAppText>
        </StyledPressable>
      </ListItem>
      <ListItem2>
        <MyAppText3>{`Today's calories: ${calories}`}</MyAppText3>
        <ButtonWrapper>
          <StyledPressable
            android_ripple={{color: 'black', radius: 5}}
            onPress={resetCalories}
            style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
            <MyAppText>Reset</MyAppText>
          </StyledPressable>
          <StyledPressable
            android_ripple={{color: 'black', radius: 5}}
            onPress={cancelCalories}
            style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
            <MyAppText>Cancel</MyAppText>
          </StyledPressable>
        </ButtonWrapper>
      </ListItem2>
      <ListItem3>
        <MyAppText2>Name</MyAppText2>
        <NumField2
          editable
          maxLength={39}
          onChangeText={id => changeFoodName(id)}></NumField2>
        <MyAppText2>Calories</MyAppText2>
        <NumField2
          editable
          onChangeText={id => changeFoodCalories(id)}></NumField2>
        <StyledPressable2
          android_ripple={{color: 'black', radius: 5}}
          onPress={handlePress}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Save food</MyAppText>
        </StyledPressable2>
      </ListItem3>
    </Wrapper>
  );
};
