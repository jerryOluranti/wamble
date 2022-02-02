import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actionTypes'
import { Difficulty, Time } from '../enums/enums'

const PopUp = () => {

    const dispatch = useDispatch();
  const payload = useSelector((state: any) => state.gameReducer.payload);

    return (
       <div className="pop-up">
           <div className="pop-up-container">
               <div className="pop-up-close" onClick={() => dispatch({ type: actions.CLOSE_MENU })}><i className="ri-close-line"></i></div>
                <div className="pop-up-content">
                    {payload && payload?.map((payload: any, index: number) => (
                        <div key={index} className="pop-up-content-item" onClick={() => payload.action()}>{payload.display}</div>
                    ))}
                </div>
           </div>
       </div>
    )
}

export function Tutorial() {
    

    const dispatch = useDispatch();

    return (
      <div className="tutorial">
        <div className="tutorial-container">
          <div
            className="tutorial-close"
            onClick={() => dispatch({ type: actions.CLOSE_TUTORIAL })}
          >
            <i className="ri-close-line"></i>
          </div>
          <div>
            <p>
              Wamble! is word game that gives you a randomly shuffled word and
              allows you to re-arrange it.
            </p>
            <p>
              <b>Change the Difficulty</b> of the game on the start screen. The
              difficulty will determine the length of the words you will be
              given. [ EASY: 1-5; MEDIUM: 5-9; HARD: 9-😀 ]
            </p>
            <p>
              <b>Start a New Game</b> by pressing the start game button on the
              srart screen.
            </p>
            <p>
              <b>Play the Game</b> by using word buttons at the bottom of the
              game screen.
            </p>
            <p>
              <b>Skip a Word</b> by using this button:
              <i className="ri-skip-forward-line"></i>
            </p>
            <p>
              <b>Undo Input</b> by using this button:
              <i className="ri-arrow-go-back-line"></i>
            </p>
            <p>
              <b>Show Hint</b> by using this button:
              <i className="ri-lightbulb-line"></i>
              This will show you the correct positions of some characters in the
              word.
            </p>
            <p>
              <b>End the Game</b> by using this button:
              <i className="ri-arrow-left-s-line"></i>
            </p>
          </div>
        </div>
      </div>
    );
}

export default PopUp
