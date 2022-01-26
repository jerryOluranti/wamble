import React from 'react';
import { useDispatch } from 'react-redux'
import * as actions from '../store/actionTypes';

import Character from './Character';
import Input from './Input';

function GameScreen() {

  const dispatch = useDispatch();

  return (
      <div className="game-screen">
          <div className="game-top-bar">
              <button className="game-button" onClick={ () => dispatch({ type: actions.END_GAME }) }><i className="ri-arrow-left-s-line"></i></button>
              <div className="game-score-container">
                  <div className="game-score-label">SCORE</div>
                    <div className="game-score-value">230</div>
              </div>
              <span>EASY</span>
          </div>
          <div className="game-scattered-container">
              <Character character="P" />
              <Character character="H" />
              <Character character="E" />
              <Character character="E" />
          </div>
          <div className="game-controls-container">
              <progress className="game-timer" value="80" max="100"></progress>
                <button className="game-button" onClick={ () => {} }><i className="ri-lightbulb-line"></i></button>
                <button className="game-button" onClick={ () => {} }><i className="ri-arrow-go-back-line"></i></button>
          </div>
          <div className="game-input-container">
                <div className="game-input-display">ELEP</div>
                <div className="game-input">
                    <Input character="E" disabled={false} handleClick={ (char: string) => {} }/>
                    <Input character="E" disabled={false} handleClick={ (char: string) => {} }/>
                    <Input character="E" disabled={false} handleClick={ (char: string) => {} }/>
                </div>
          </div>

      </div>
  )
}

export default GameScreen;
