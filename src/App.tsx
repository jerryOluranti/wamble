import React from 'react';
import { useSelector } from 'react-redux';


import './App.css';

import StartScreen from './components/StartScreen';
import PopUp, { Tutorial } from './components/PopUp'
import GameScreen from './components/GameScreen';

function App() {

  const open = useSelector((state: MenuState) => state.isOpen);
  const tutorial = useSelector((state: MenuState) => state.isTutorialOpen);

  return (
    <div className="App">
      <div className="game-container">
        <StartScreen />
        {open && (
          <PopUp />
        )}
        {tutorial && <Tutorial />}
        <GameScreen />
      </div>
    </div>
  );
}

export default App;
