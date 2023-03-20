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

// The state used in all functions before there's any data
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

// Provides the functions for all the components inside the app
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadDbAndFetchMoves = () => {
    // Set loading, create the initial database if it doesn't exist, open and connect to the db
    // Add a table if it doesn't exist, and fetch the information from the table
    // All in that order, after the previous one completes
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

  // When first loaded, run the function to fetch/ create all the db data,
  // and let the intro run. After 5 seconds, close the intro screen and show the loaded app
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
