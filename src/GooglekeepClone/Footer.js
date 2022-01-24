import React from "react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
           <footer>
               <p><b>copyright © {year}</b></p>
           </footer> 
        </>
    )
}

export default Footer;
