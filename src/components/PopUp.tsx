import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../store/actionTypes'

const PopUp = () => {

    const dispatch = useDispatch();
  const payload = useSelector((state: GameState) => state.payload);

    return (
       <div className="pop-up">
           <div className="pop-up-container">
               <div className="pop-up-close" onClick={() => dispatch({ type: actions.CLOSE_MENU })}><i className="ri-close-line"></i></div>
                <div className="pop-up-content">
                    {payload.map((payload: any, index: number) => (
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
                <div className="tutorial-close" onClick={() => dispatch({ type: actions.CLOSE_TUTORIAL })} ><i className='ri-close-line'></i></div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Reiciendis magni id quas commodi, odit expedita ab doloremque tempore officia voluptatum tempora 
                    rerum doloribus quis, temporibus corporis numquam! Nesciunt, debitis distinctio?ˀ
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Reiciendis magni id quas commodi, odit expedita ab doloremque tempore officia voluptatum tempora 
                    rerum doloribus quis, temporibus corporis numquam! Nesciunt, debitis distinctio?ˀ
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Reiciendis magni id quas commodi, odit expedita ab doloremque tempore officia voluptatum tempora 
                    rerum doloribus quis, temporibus corporis numquam! Nesciunt, debitis distinctio?ˀ
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Reiciendis magni id quas commodi, odit expedita ab doloremque tempore officia voluptatum tempora 
                    rerum doloribus quis, temporibus corporis numquam! Nesciunt, debitis distinctio?ˀ
                </p>
            </div>
        </div>
    )
}

export default PopUp
