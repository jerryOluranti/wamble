import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Game from "../logic/Game";
import { Difficulty, Time } from "../enums/enums";
import { saveGameData } from "../store/action";
import * as actions from "../store/actionTypes";

import Character from "./Character";
import Input from "./Input";

const wordFile = require('../words.txt');


function GameScreen() {

  const dispatch = useDispatch();
  const { gameData } = useSelector((state: any) => state.gameReducer);
  const { game, score, currentDisplay, currentInput, userInput, isCorrect, wordArray } = useSelector((state: any) => state.valuesReducer);

   function getLevelColor(gameData: GameData<Difficulty, Time>): string {
     if (!gameData?.level || gameData?.level === undefined)
       return "rgb(42, 229, 26)";
     switch (gameData.level) {
       case Difficulty.MEDIUM:
         return "rgb(243, 150, 50)";
       case Difficulty.HARD:
         return "rgb(255, 51, 51)";
       default:
         return "rgb(42, 229, 26)";
     }
   }

   function getLevelDisplay(gameData: GameData<Difficulty, Time>): string {
     if (!gameData?.level || gameData?.level === undefined) return "EASY";
     switch (gameData.level) {
       case Difficulty.MEDIUM:
         return "MEDUIM";
       case Difficulty.HARD:
         return "HARD";
       default:
         return "EASY";
     }
   }



  React.useEffect(() => {
    fetch(wordFile)
      .then((res) => res.text())
      .then((res) => {
        const wordArray = res.split("\n").map((word) => word.trim());
        const newGame: Game = new Game(wordArray, gameData.level, gameData.duration);
        // console.log('Here => GameScreen > useEffect', newGame.getCurrentScrambledWordDisplay());
        const payload: GameValuesPayload = {
          game: newGame,
          currentWord: newGame.getWord() as string,
          currentDisplay: newGame.getCurrentScrambledWordDisplay(),
          currentInput: newGame.getCurrentScrambledWordDisplay().map((each, index) => {
            return {
              char: each.char,
              index,
              handleClick: (each) => {
                dispatch({ type: actions.SYNC_USER_INPUT, payload: { inputUpdate: each } })
              },
              isUsed: false
            }
          }),
          wordArray

        }
        dispatch({ type: actions.START_NEW_GAME, payload } );
      });


  }, []);

  function compareScore(_new: number, old: number): number {
    return Math.max(_new, old);
  }

  function next(): void {
    saveGameData(gameData, compareScore(score, gameData.highScore));

    const newGame: Game = new Game(
      wordArray,
      gameData.level,
      gameData.duration
    );
    // console.log('Here => GameScreen > useEffect', newGame.getCurrentScrambledWordDisplay());
    const payload: GameValuesPayload = {
      game: newGame,
      currentWord: newGame.getWord() as string,
      currentDisplay: newGame.getCurrentScrambledWordDisplay(),
      currentInput: newGame
        .getCurrentScrambledWordDisplay()
        .map((each, index) => {
          return {
            char: each.char,
            index,
            handleClick: (each) => {
              dispatch({
                type: actions.SYNC_USER_INPUT,
                payload: { inputUpdate: each },
              });
            },
            isUsed: false,
          };
        }),
      wordArray,
      score: score,
      isCorrect: false
    };
    dispatch({ type: actions.NEXT_WORD, payload });
  }

  function undo(): void {
    dispatch({ type: actions.UNDO });
  }

  function hint(): void {
    if (!game.isHintUsed) dispatch({ type: actions.SET_HINT });
  }

  function stop(_new: number, old: number): void {
    //  console.log("Here => GameScreen > END_GAME ", _new, ' ---- ', old);
     dispatch({
       type: actions.END_GAME,
       gameData: {
         ...gameData,
         highScore: compareScore(_new, old),
         // history: gameData.history.push({score, level: gameData.level, time: gameData.duration })
       },
     });

     dispatch({ type: actions.STOP_THIS_GAME });
  }

  return (
    <div className="game-screen">
      <div className="game-top-bar">
        <button
          className="game-button"
          onClick={() => stop(score, gameData.highScore)}
        >
          <i className="ri-arrow-left-s-line"></i>
        </button>
        <div className="game-score-container">
          <div className="game-score-label">SCORE</div>
          <div className="game-score-value">{score}</div>
        </div>
        <span style={{ backgroundColor: getLevelColor(gameData) }}>
          {getLevelDisplay(gameData)}
        </span>
      </div>
      {isCorrect && <div style={{ display: 'none', visibility: 'hidden' }}>{ setTimeout(() => next(), 2000) }</div>}
      <div className="game-scattered-container">
        {currentDisplay &&
          currentDisplay.map((each: Display, index: number) => (
            <Character key={index} char={each.char} isHint={each.isHint} />
          ))}
      </div>
      <div className="game-controls-container">
        <progress className="game-timer" value="80" max="100"></progress>
        <button className="game-button" style={{ opacity: game.isHintUsed ? 0.4 : 1 }}  onClick={() => hint()}>
          <i className="ri-lightbulb-line"></i>
        </button>
        <button className="game-button" onClick={() => undo()}>
          <i className="ri-arrow-go-back-line"></i>
        </button>
        <button
          className="game-button"
          onClick={() => setTimeout(() => next(), 1000)}
        >
          <i className="ri-skip-forward-line"></i>
        </button>
      </div>
      <div className="game-input-container">
        <div
          className="game-input-display"
          style={{ color: isCorrect ? "var(--green)" : "var(--red)" }}
        >
          {userInput}
        </div>
        <div className="game-input">
          {currentInput &&
            currentInput.map((each: Input, index: number) => (
              <Input key={index} {...each} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default GameScreen;
