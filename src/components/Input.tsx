import React from 'react';
// import { useSelector } from 'react-redux'

function Input({ char, isUsed, handleClick, index }: Input) {

  return (
        <button className="input" style={{ opacity: isUsed ? 0.4 : 1 }}  onClick={ isUsed ? () => {} : () => handleClick({char, isUsed, handleClick, index}) } >
            { char }
        </button>
    );
}

export default Input;
