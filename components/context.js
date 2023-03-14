import React, {useState, useContext, useReducer, useEffect} from 'react';
import {openDatabase, enablePromise, DEBUG} from 'react-native-sqlite-storage';
import moveItems from '../data';
import reducer from './reducer';

const AppContext = React.createContext();

enablePromise(true);

// Amount of moves in data per category, update if moves added
const moveCategories = {
  low: 13,
  mid: 14,
  upper: 14,
};

const initialState = {
  database: null,
  moves: moveItems,
  buttons: {
    helppo: 0,
    haastava: 0,
    pro: 0,
    extreme: 0,
  },
  showIntro: true,
  loading: false,
  stateMoveCategories: moveCategories,
  randomMoves: [
    Math.floor(Math.random() * moveCategories.low),
    Math.floor(Math.random() * moveCategories.mid) + moveCategories.low,
    Math.floor(Math.random() * moveCategories.upper) +
      moveCategories.low +
      moveCategories.mid,
  ],
  currentDifficulty: 'helppo',
};

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadDbAndFetchMoves = () => {
    dispatch({type: 'LOADING', payload: true});
    openDatabase('user_db')
      .then(DB => {
        dispatch({type: 'DBCONNECT', payload: DB});
        createTables(DB);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const createTables = db => {
    db.transaction(addTable).then(result => {
      db.transaction(getUsedMoves).then(result => {
        dispatch({type: 'LOADING', payload: false});
      });
    });
  };

  const addTable = tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS usedmoves (id INTEGER PRIMARY KEY AUTOINCREMENT, moveid VARCHAR(20))`,
    ).catch(error => {
      console.log(error);
    });
  };

  const getUsedMoves = tx => {
    tx.executeSql(`SELECT moveid FROM usedmoves`)
      .then(([tx, results]) => {
        let tempButtons = initialState.buttons;
        let resultArray = results.rows.raw();
        for (let i in tempButtons) {
          tempButtons[i] = resultArray.reduce((a, b) => {
            if (b['moveid'] == i) {
              return a + 1;
            } else {
              return a;
            }
          }, 0);
        }
        state.buttons = tempButtons;
      })
      .catch(error => console.log(error));
  };

  const addMoveToDb = id => {
    // dispatch({type: 'LOADING', payload: id});
    state.database.transaction(tx => {
      tx.executeSql(`INSERT INTO usedmoves (moveid) VALUES (?)`, [id]).then(
        result => {
          state.database.transaction(getUsedMoves).then(() => {
            dispatch({type: 'LOADING', payload: false});
          });
        },
      );
    });
  };

  const randomizeMoves = () => {
    dispatch({type: 'RANDOMIZE'});
  };

  const setDifficulty = id => {
    dispatch({type: 'DIFFICULTY', payload: id});
  };

  const setShowIntro = () => {
    dispatch({type: 'INTRO'});
  };

  useEffect(() => {
    loadDbAndFetchMoves();
    setTimeout(() => {
      setShowIntro();
    }, 5000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        addMoveToDb,
        getUsedMoves,
        randomizeMoves,
        setDifficulty,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export {AppContext, AppProvider};
