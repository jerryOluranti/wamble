import * as actions from './actionTypes';

export function menuAction(payload: MenuPayload[]): GameAction {
    return {
        type: actions.OPEN_MENU,
        payload
    }
}