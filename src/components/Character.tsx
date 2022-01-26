import React from 'react';

type PropType = {
    character: string
}

function Character({ character }: PropType ) {
  return (
      <div className="character">
          { character}
      </div>
  )
}

export default Character;
