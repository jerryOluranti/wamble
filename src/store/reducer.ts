import * as actions from './actionTypes';

const initialState: GameState = {
    payload: [],
    isOpen: false
}


export function gameReducer  ( state: GameState = initialState, action: GameAction ): GameState {
  switch (action.type) {
    case actions.OPEN_MENU:
      return {
        ...state,
        payload: action.payload,
        isOpen: true
      };
    case actions.CLOSE_MENU:
        return {
            ...state,
            isOpen: false,
            payload: initialState.payload
        }
    case actions.OPEN_TUTORIAL:
      return {
        ...state,
        isTutorialOpen: true
      };
    case actions.CLOSE_TUTORIAL:
        return {
            ...state,
            isTutorialOpen: false
        };
    case actions.START_GAME:
        return {
            ...state,
            gameStarted: true
        };
    case actions.END_GAME:
        return {
            ...state,
            gameStarted: false
        };
  }
  return state;
};
