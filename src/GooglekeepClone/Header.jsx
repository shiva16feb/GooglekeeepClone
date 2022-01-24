import React from "react";
import pic from './image/GoogleKeep.png';


const Header =() => {
    return (
        <>
            <div className="main_header">
                <img src={pic} alt="pic" width="70px" height="60" />
                <h2>Google keep note</h2>
            </div>
        </>
    )
}

export default Header;
