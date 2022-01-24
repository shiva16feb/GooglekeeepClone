import React, { useState } from "react";


const Increment = () =>{
    const state = useState();
    let newTime = new Date().toLocaleTimeString();
    const [ctime, updtime] = useState(newTime);
    const UpdateTime = () =>{
    let currTime = new Date().toLocaleTimeString();
    updtime(currTime);
    };
    // setInterval(UpdateTime,1000);

return(<>
    <h1>{ctime}</h1>
    <button onClick={UpdateTime}>Click me</button>
    </>
)
}
export default Increment;