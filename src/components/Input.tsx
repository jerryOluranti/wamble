import React from 'react';

type PropType = {
    character: string,
    disabled: boolean,
    handleClick(char: string): void
}

function Input({ character, disabled, handleClick }: PropType) {
  return (
        <button className="input" onClick={ () => handleClick(character) } disabled={disabled}>
            { character }
        </button>
    );
}

export default Input;
