const reducer = (state, action) => {
  switch (action.type) {
    case 'INTRO': {
      // Stop showing the intro
      return {...state, showIntro: false};
    }

    case 'LOADING': {
      // Set loading to false/true, specified in function call
      return {...state, loading: action.payload};
    }

    case 'DBCONNECT': {
      // Connect to the db after it's created / opened
      return {...state, database: action.payload};
    }

    // case 'RANDOMIZE': {
    //   // Select a move from each category to be shown at random
    //   const randomMovesTemp = [];
    //   randomMovesTemp.push(
    //     Math.floor(Math.random() * state.stateMoveCategories.low),
    //   );
    //   randomMovesTemp.push(
    //     Math.floor(Math.random() * state.stateMoveCategories.mid) +
    //       state.stateMoveCategories.low,
    //   );
    //   randomMovesTemp.push(
    //     Math.floor(Math.random() * state.stateMoveCategories.upper) +
    //       state.stateMoveCategories.low +
    //       state.stateMoveCategories.mid,
    //   );
    //   // }
    //   return {...state, randomMoves: randomMovesTemp};
    // }

    case 'DIFFICULTY': {
      // Set the chosen difficulty level in the state variable
      return {...state, currentDifficulty: action.payload};
    }

    case 'ADDCALORIES': {
      let tempCalories, previousCalories;
      previousCalories = state.calories;
      tempCalories = +state.calories + +state.addedCalories;
      return {...state, calories: tempCalories, lastCalories: previousCalories};
    }

    case 'CANCELCALORIES': {
      let tempCalories;
      tempCalories = state.lastCalories;
      return {...state, calories: tempCalories};
    }

    case 'RESETCALORIES': {
      return {...state, calories: 0};
    }

    case 'ADDSELECTIONCALORIES': {
      let tempCalories, previousCalories;
      previousCalories = state.calories;
      tempCalories = +state.calories + +state.buttons[state.selectedFood];
      if (tempCalories) {
        return {
          ...state,
          calories: tempCalories,
          lastCalories: previousCalories,
        };
      } else {
        return {...state};
      }
    }

    case 'CHANGEINPUT': {
      return {...state, addedCalories: action.payload};
    }

    case 'CHANGEFOODNAME': {
      return {...state, foodName: action.payload};
    }

    case 'CHANGEFOODCALORIES': {
      return {...state, foodCalories: action.payload};
    }

    case 'CHANGESELECTEDFOOD': {
      return {...state, selectedFood: action.payload};
    }
  }
};

export default reducer;
