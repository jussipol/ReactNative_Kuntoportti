const reducer = (state, action) => {
  switch (action.type) {
    case 'INTRO': {
      return {...state, showIntro: false};
    }

    case 'LOADING': {
      return {...state, loading: action.payload};
    }

    case 'DBCONNECT': {
      return {...state, database: action.payload};
    }

    case 'RANDOMIZE': {
      const randomMovesTemp = [];
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
      return {...state, randomMoves: randomMovesTemp};
    }

    case 'DIFFICULTY': {
      return {...state, currentDifficulty: action.payload};
    }
  }
};

export default reducer;
