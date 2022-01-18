import React from 'react'

interface Payload {
  display: string,
  action(): any
}

function StartScreen({ open, setOpen, setPayload, tutorial, setTutorial }: any) {

    const morePayload: Payload[] = [
        { display: 'HOW TO PLAY', action: () => setTutorial(!tutorial) },
        { display: 'VIEW ON GITHUB', action: () => window.open('https://github.com/jerryHolurantie/wamble', '_blank') },
        { display: 'SUPPORT ME', action: () => window.open('https://www.paypal.me/alpha9931', '_blank') }
    ];

    const difficultyPayload: Payload[] = [
      { display: 'EASY', action: () => changeDifficulty() },
      { display: 'MEDIUM', action: () => changeDifficulty() },
      { display: 'HARD', action: () => changeDifficulty() }
    ];

    const timePayload: Payload[] = [
      { display: '10s', action: () => changeTime() },
      { display: '20s', action: () => changeTime() },
      { display: '30s', action: () => changeTime() },
      { display: '60s', action: () => changeTime() },
      { display: '120s', action: () => changeTime() }
    ];


    function changeDifficulty(): void {
      return;
    }

    function changeTime(): void {
      return;
    }

    function showMenu(menu: string): void {

      // switch (menu) {
      //   case 'difficulty':
      //     setPayload(difficultyPayload);
      //     break;
      //   case 'time':
      //     setPayload(timePayload);
      //     break;
      //   default: 
      //     setPayload(morePayload)
      //     break;
      //   }

      //   setOpen(!open);
    }

    return (
      <div className="start-screen">
        <div className="start-screen-header">
          <h1>wamble!</h1>
        </div>
        <div className="start-screen-score">
          <div className="start-screen-score-heading">
            <h2>BEST SCORE</h2>
            <span>EASY</span>
          </div>
          <div className="start-screen-score-value">1172</div>
        </div>

        <div className="start-screen-actions">
          <button className="start-screen-button">START GAME</button>
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
