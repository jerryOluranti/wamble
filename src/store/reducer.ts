import * as actions from "./actionTypes";
import { loadGameData } from "./action";
import { combineReducers } from "redux";

const initialState: GameState = {
  payload: [],
  isOpen: false,
  gameData: loadGameData(),
};

const initialValuesState: GameValuesState = {
  score: 0,
  game: {},
  currentDisplay: [],
  currentInput: [],
  currentWord: "",
  wordArray: [],
  userInput: "",
  isCorrect: false
};

function gameReducer(
  state: GameState = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case actions.LOAD_GAME:
      return {
        ...state,
        gameData: loadGameData(),
      };
    case actions.EXIT_GAME:
      return {
        ...state,
        ...initialState,
      };
    case actions.OPEN_MENU:
      return {
        ...state,
        payload: action.payload,
        isOpen: true,
      };
    case actions.CLOSE_MENU:
      return {
        ...state,
        isOpen: false,
        payload: initialState.payload,
      };
    case actions.OPEN_TUTORIAL:
      return {
        ...state,
        isTutorialOpen: true,
      };
    case actions.CLOSE_TUTORIAL:
      return {
        ...state,
        isTutorialOpen: false,
      };
    case actions.START_GAME:
      // console.log('Here => gameReducer > START_GAME');
      return {
        ...state,
        gameStarted: true,
      };
    case actions.END_GAME:
      // console.log('Here => reducer > END_GAME: newScore = ', action.gameData.highScore, ' | old = ', state.gameData.highScore)
      return {
        ...state,
        gameStarted: false,
        gameData: action.gameData
      };
    case actions.UPDATE_DATA:
      return {
        ...state,
        gameData: action.gameData,
        isOpen: false
      };
  }
  return state;
}

function valuesReducer(
  state: GameValuesState = initialValuesState,
  action: GameValuesAction
): GameValuesState {
  switch (action.type) {
    case actions.START_NEW_GAME:
      // console.log('Game Values', action.payload);
      return {
        ...state,
        ...action.payload,
      };
    case actions.UNDO:
       const newCI = state.currentInput.map((input) => { return { ...input, isUsed: false } });

      return {
        ...state,
        currentInput: newCI,
        userInput: ''
      };
    case actions.SYNC_USER_INPUT:
      let newScore: number = state.score;
      let isCorrect: boolean = false;
      const newUserInput = state.userInput + action.payload.inputUpdate?.char;
      const newCurrentInput = state.currentInput.map((input) => {
        if (input.index === action.payload.inputUpdate?.index) {
          return { ...input, isUsed: true };
        } else {
          return { ...input };
        }
      });

      if (state.currentWord.length === newUserInput.length) {
        newScore = state.game.isCorrect(newUserInput) ? state.score + (state.game.isHintUsed ? 5 : 10) : state.score;
        isCorrect = state.game.isCorrect(newUserInput);
      }
      return {
        ...state,
        userInput: newUserInput,
        currentInput: newCurrentInput,
        score: newScore,
        isCorrect
      };
    case actions.NEXT_WORD:
      return {
        ...state,
        ...initialState,
        ...action.payload,
        userInput: ''
      };
    case actions.SET_HINT:
      return {
        ...state,
        currentDisplay: state.game.getHint()
      };
    case actions.STOP_THIS_GAME:
      return {
        ...state,
        ...initialValuesState
      }
  }

  return state;
}

export const reducers = combineReducers({
  gameReducer,
  valuesReducer,
});
