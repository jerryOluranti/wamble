import * as actions from './actionTypes';

export function menuAction(payload: MenuPayload[]): MenuAction {
    return {
        type: actions.OPEN_MENU,
        payload
    }
}