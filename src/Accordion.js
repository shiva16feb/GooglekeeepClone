import React, { useState } from "react";
// import './App.css';
import { questions } from "./api";
import Accorcomp from './Accorcomp';


const Accordion = () => {
    const [data, setData] = useState(questions);
  
    return (
        <>
        <section className="main_div ">
        <h1>Interview questions</h1>
          {
              data.map((val) =>{
                  const {id} = val;
                  return <Accorcomp key={id} {...val}/>
              })
          }
          </section>
        </>
    )
}

export default Accordion;
