// import * as actions from './actionTypes';
import { Difficulty, Time } from '../enums/enums'

// export function menuAction(payload: MenuPayload[]): GameAction {
//     return {
//         type: actions.OPEN_MENU,
//         payload
//     }
// }

export function loadGameData (): GameData<Difficulty, Time> {
    const gameData: GameData<Difficulty, Time> | any = JSON.parse(localStorage.getItem('game-data') as string);
    return {
        highScore: gameData?.highScore ? gameData?.highScore as number : 0,
        level: gameData?.level ? gameData?.level  : Difficulty.EASY,
        duration: gameData?.duration ? gameData?.duration as number : Time.THIRTY,
        // history: gameData?.history ? gameData.history : []
    }
}

export function saveGameData(gameData: GameData<Difficulty, Time>, currentHighScore: null | number = null): GameData<Difficulty, Time> {
    localStorage.setItem('game-data', JSON.stringify({ ...gameData, highScore: currentHighScore }));
    return gameData;
}