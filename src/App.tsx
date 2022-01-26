import React from 'react';
import { useSelector } from 'react-redux';


import './App.css';

import StartScreen from './components/StartScreen';
import PopUp, { Tutorial } from './components/PopUp'
import GameScreen from './components/GameScreen';

function App() {

  const { isOpen, isTutorialOpen, gameStarted } = useSelector((state: GameState) => state);

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
