import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../store/actionTypes'
import { Difficulty, Time } from '../enums/enums'

function StartScreen() {

    const dispatch = useDispatch();

    const morePayload: MenuPayload[] = [
        { display: 'HOW TO PLAY', action: () => dispatch({ type: actions.OPEN_TUTORIAL }) },
        { display: 'VIEW ON GITHUB', action: () => window.open('https://github.com/jerryHolurantie/wamble', '_blank') },
        { display: 'SUPPORT ME', action: () => window.open('https://www.paypal.me/alpha9931', '_blank') }
    ];

    const difficultyPayload: MenuPayload[] = [
      { display: 'EASY', action: () => changeDifficulty(Difficulty.EASY) },
      { display: 'MEDIUM', action: () => changeDifficulty(Difficulty.MEDIUM) },
      { display: 'HARD', action: () => changeDifficulty(Difficulty.HARD) }
    ];

    const timePayload: MenuPayload[] = [
      { display: '10s', action: () => changeTime(Time.TEN) },
      { display: '20s', action: () => changeTime(Time.TWENTY) },
      { display: '30s', action: () => changeTime(Time.THIRTY) },
      { display: '60s', action: () => changeTime(Time.SIXTY) },
      { display: '120s', action: () => changeTime(Time.ONE_TWENTY) }
    ];

    const { gameData } = useSelector((state:any) => state.gameReducer);

    function changeDifficulty(value: Difficulty): void {
      dispatch({ type: actions.UPDATE_DATA, gameData: {...gameData, level: value } })
      return;
    }

    function changeTime(value: Time): void {
      dispatch({ type: actions.UPDATE_DATA, gameData: {...gameData, duration: value } })
      return;
    }

    function showMenu(menu: string): void {

      switch (menu) {
        case 'difficulty':
          dispatch({ type: actions.OPEN_MENU , payload: difficultyPayload });
          break;
        case 'time':
           dispatch({ type: actions.OPEN_MENU, payload: timePayload });
          break;
        default: 
           dispatch({ type: actions.OPEN_MENU, payload: morePayload });
          break;
        }

    }

    function getLevelColor(gameData: GameData<Difficulty, Time>): string {

      if (!gameData?.level || gameData?.level === undefined) return 'rgb(42, 229, 26)'
      switch(gameData.level) {
        case Difficulty.MEDIUM:
          return 'rgb(243, 150, 50)'
        case Difficulty.HARD:
          return 'rgb(255, 51, 51)'
        default:
          return 'rgb(42, 229, 26)'
      }
    }

    function getLevelDisplay(gameData: GameData<Difficulty, Time>): string {

      if (!gameData?.level || gameData?.level === undefined) return 'EASY'
      switch(gameData.level) {
        case Difficulty.MEDIUM:
          return 'MEDUIM'
        case Difficulty.HARD:
          return 'HARD'
        default:
          return 'EASY'
      }
    }

    return (
      <div className="start-screen">
        <div className="start-screen-header">
          <h1>wamble!</h1>
        </div>
        <div className="start-screen-score">
          <div className="start-screen-score-heading">
            <h2>BEST SCORE</h2>
            <span style={{ backgroundColor: getLevelColor(gameData) }}>{ getLevelDisplay(gameData) }</span>
          </div>
          <div className="start-screen-score-value">{ gameData?.highScore }</div>
        </div>

        <div className="start-screen-actions">
          <button className="start-screen-button" onClick={ () => {dispatch({ type: actions.START_GAME })}}>START GAME</button>
          <button
            className="start-screen-button"
            onClick={() => showMenu("difficulty")}
          >
            CHANGE DIFFICULTY
          </button>
        </div>

        <div className="start-screen-footer">
          <button
            className="start-screen-footer-button"
            onClick={() => showMenu("more")}
          >
            <i className="ri-menu-line"></i>
          </button>
          <button
            className="start-screen-footer-button"
            onClick={() => showMenu("time")}
          >
            <i className="ri-timer-line"></i>
          </button>
        </div>
      </div>
    );
}

export default StartScreen
