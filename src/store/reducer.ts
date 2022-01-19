import * as actions from './actionTypes';

const initialState: MenuState = {
    payload: [],
    isOpen: false
}


export function menuReducer  ( state: MenuState = initialState, action: MenuAction ): MenuState {
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
            isTutorialOpen: false,
            payload: initialState.payload
        }
  }
  return state;
};
