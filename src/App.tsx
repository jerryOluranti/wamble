import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './store/actionTypes';


import './App.css';

import StartScreen from './components/StartScreen';
import PopUp, { Tutorial } from './components/PopUp'
import GameScreen from './components/GameScreen';

function App() {

  const dispatch = useDispatch();

  // dispatch( {type: actions.LOAD_GAME} );

  const { isOpen, isTutorialOpen, gameStarted } = useSelector((state: any) => state.gameReducer);

  return (
    <div className="App">
      <div className="game-container">
        <StartScreen />
        {isOpen && (
          <PopUp />
        )}
        {isTutorialOpen && <Tutorial />}
        {gameStarted && <GameScreen />}
      </div>
    </div>
  );
}

export default App;
