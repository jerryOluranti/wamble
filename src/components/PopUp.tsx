import React from 'react'

const PopUp = ({ setOpen, open, payloads }: any) => {
    return (
       <div className="pop-up">
           <div className="pop-up-container">
               <div className="pop-up-close" onClick={() => setOpen(!open)}><i className="ri-close-line"></i></div>
                <div className="pop-up-content">
                    {/* {payloads.map((payload: any, index: number) => (
                        <div key={index} className="pop-up-content-item" onClick={() => payload.action()}>{payload.display}</div>
                    ))} */}

                    <div className="pop-up-content-item" onClick={() => {}}>EASY</div>
                    <div className="pop-up-content-item" onClick={() => {}}>NORMAL</div>
                    <div className="pop-up-content-item" onClick={() => {}}>HARD</div>
                </div>
           </div>
       </div>
    )
}

export function Tutorial({ setTutorial, tutorial }: any) {
    
    return (
        <div className="tutorial">
            <div className="tutorial-container">
                <div className="tutorial-close" onClick={() => setTutorial(!tutorial)} ><i className='ri-close-line'></i></div>
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
