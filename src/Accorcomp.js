import React, { useState } from 'react'

function Accorcomp({question, answer}) {
    const [show,setShow] = useState(false);
    const change = () =>{
        setShow(!show);
    }
    return (
        <>
        <div className='main_heading'>
            <p onClick={change} >{show ? "➖" : "➕"}</p>
            <h3>{question}</h3>
        </div>
        {show && <p className='answer'>{answer}</p>}
        </>
    )    
}

export default Accorcomp;
