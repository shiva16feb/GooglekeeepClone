import React, { useState } from 'react';


const Btn = () =>{
    const state = useState();
    const colr = "red";
    const [sclr,setclr] = useState(colr);
    const [nName,setName] = useState('Click me');
    const bgchange =() =>{
    let newclr = 'grey';
    let newName = 'Again click';
    setclr(newclr);
    setName(newName);
    };
    const bgBack = () => {
        setclr(colr);
        setName("Thanku");
    };

    return(
        <>
        <div style={{backgroundColor:sclr}}>
        <button onMouseEnter={bgchange} onMouseLeave={bgBack}>{nName}</button>

         </div>
        </>
    )
}
export default Btn;