import React, {useEffect} from 'react';

import {Platform, TextInput} from 'react-native';
//Styles
import {
  Wrapper,
  ListItem,
  StyledPressable,
  ProgressText,
  NumField,
} from './MainArea.styles';

//Components
import {MyAppText} from '../MyAppText/MyAppText';
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
}) => {
  return (
    <Wrapper
      style={{
        height: height - 100 - headerHeight,
      }}>
      <ListItem>
        <SelectDropdown
          data={Object.keys(buttons)}
          defaultValueByIndex={1} // use default value by index or default value
          defaultValue={'Canada'} // use default value by index or default value
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            changeSelectedFood(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <StyledPressable
          android_ripple={{color: 'lightslategray', radius: 10}}
          onPress={addSelectionCalories}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Submit</MyAppText>
        </StyledPressable>
        <NumField editable onChangeText={id => changeCalories(id)}></NumField>
        <StyledPressable
          android_ripple={{color: 'lightslategray', radius: 10}}
          onPress={addCalories}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Submit</MyAppText>
        </StyledPressable>
        <MyAppText>{calories}</MyAppText>
        <StyledPressable
          android_ripple={{color: 'lightslategray', radius: 10}}
          onPress={resetCalories}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Reset</MyAppText>
        </StyledPressable>
      </ListItem>
      <ListItem>
        <MyAppText>Name</MyAppText>
        <NumField
          editable
          maxLength={39}
          onChangeText={id => changeFoodName(id)}></NumField>
        <MyAppText>Calories</MyAppText>
        <NumField
          editable
          onChangeText={id => changeFoodCalories(id)}></NumField>
        <StyledPressable
          android_ripple={{color: 'lightslategray', radius: 10}}
          onPress={handlePress}
          style={[Platform.OS === 'android' ? {elevation: 50} : {}]}>
          <MyAppText>Submit</MyAppText>
        </StyledPressable>
      </ListItem>
    </Wrapper>
  );
};
