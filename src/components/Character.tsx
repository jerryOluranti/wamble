import React from 'react';

function Character({ char, isHint }: Display ) {
  return (
      <div className="character" style={{ backgroundColor: isHint ? 'rgb(100, 100, 100)' : 'rgb(43, 42, 42)' }}>
          { char }
      </div>
  )
}

export default Character;
