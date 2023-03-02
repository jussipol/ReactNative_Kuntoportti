import {LogBox} from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE': {
      console.log('UPDATE called');
      return {...state, buttons: action.payload, loading: false};
    }

    case 'LOADING': {
      console.log('LOADING called');
      return {...state, loading: action.payload};
    }

    case 'DBCONNECT': {
      console.log('DBCONNECT called');
      return {...state, database: action.payload};
    }

    case 'RANDOMIZE': {
      console.log('RANDOMIZE called');
      const randomMovesTemp = [];
      // for (let i = 0; i < 3; i++) {
      randomMovesTemp.push(
        Math.floor(Math.random() * state.stateMoveCategories.low),
      );
      randomMovesTemp.push(
        Math.floor(Math.random() * state.stateMoveCategories.mid) +
          state.stateMoveCategories.low,
      );
      randomMovesTemp.push(
        Math.floor(Math.random() * state.stateMoveCategories.upper) +
          state.stateMoveCategories.low +
          state.stateMoveCategories.mid,
      );
      // }
      console.log(randomMovesTemp);
      return {...state, randomMoves: randomMovesTemp};
    }

    case 'DIFFICULTY': {
      console.log('DIFFICULTY called');
      return {...state, currentDifficulty: action.payload};
    }
  }
};

export default reducer;
