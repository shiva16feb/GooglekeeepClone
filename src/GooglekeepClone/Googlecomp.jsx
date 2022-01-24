import React, { useState } from "react";
import CreateNotes from "./CreateNotes";
import Footer from "./Footer";
import './Googlekeep.css';
import Header from "./Header";
import Note from "./Note";

const Googlecomp = () => {
    const [item,setItem] = useState([]);
    const addProduct = (notes) =>{
       setItem((oldVel) =>{
           return [...oldVel,notes];
       })
    };
    const onDelete = (id) =>{
        setItem((prevData) =>
            prevData.filter((curr, indx) =>{
                return ( indx !== id );
            })
        );
    };
    return (
        <>
           <Header/>
           <CreateNotes passCreateNote={addProduct}/>
           
              { item.map((val, index) =>{
                return <Note id={index} key={index} title={val.title} content={val.content} deleteItem={onDelete} />
               })}
           
           <Footer/>
        </>
    )
}
export default Googlecomp;