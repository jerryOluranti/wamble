import React from 'react';
import './App.css';

import StartScreen from './components/StartScreen';
import PopUp, { Tutorial } from './components/PopUp'

function App() {

  const [ open, setOpen ] = React.useState(true);
  const [ tutorial, setTutorial ] = React.useState(false);
  const [ payload, setPayload ] = React.useState<{ display: string, action: () => {} }[]>([]);

  return (
    <div className="App">
      <div className="game-container">
        <StartScreen 
          open={open}
          setOpen={setOpen}
          setPayload={setPayload}
          setTutorial={setTutorial}
          tutorial={tutorial}
        />
        {open && (
          <PopUp
            setOpen={setOpen}
            open={open}
            payload={payload}
          />
        )}
        {tutorial && <Tutorial setTutorial={setTutorial} tutorial={tutorial} />}
      </div>
    </div>
  );
}

export default App;
