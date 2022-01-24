import React, { useState } from "react";

const Form = () =>{
  
    const [fullName, setFullName] = useState({fname:"", lname:"",email:"",mobile:""});

    const inputEnter = (shiv) =>{
//    const value = shiv.target.value;
//    const name = shiv.target.name;
      const {value, name} = shiv.target;
   setFullName((prevVal) =>{
       return{
           ...prevVal,
           [name]:value,
       }
   })
    };
    const changeName = (shiv) =>{
        shiv.preventDefault();
        alert('form submitted')
    }



    return(
        <>
        <form onSubmit={changeName}>
        <div>
            <h1>Hello 😄{fullName.fname} {fullName.lname}<br/> {fullName.email}<br/>{fullName.mobile}</h1>
            <input type="text" placeholder="Enter your name" name="fname" onChange={inputEnter} value={fullName.fname}/>
            <br/>
            <input type="text" placeholder="Enter your lastname" name="lname" onChange={inputEnter} value={fullName.lname}/>
            <br/>
            <input type="email" placeholder="Enter your email" name="email" autoComplete="" onChange={inputEnter} value={fullName.email}/>
            <br/>
            <input type="number" placeholder="Enter your mobile number" name="mobile" onChange={inputEnter} value={fullName.mobile}/>
            <button type="submit">Submit</button>
            </div>
            </form>
        </>
    )
}
export default Form;