import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNotes = (props) => {
    const [expand, setExpand] = useState(false);
    const [notes, setNote] = useState({
        title:"",
        content:"",
    });
    const inputFetch = (shiv) =>{
        const {value, name} = shiv.target;
        setNote((prevVal) =>{
            return{
                ...prevVal,
                [name]:value,
            };
        });
    }
    const addEvent = () =>{
      props.passCreateNote(notes);
      setNote({
        title:'',
        content:'',
    });
    }
    const show = () =>{
        setExpand(true);
    };
    const hide = () =>{
        setExpand(false);
    };
    return (
        <>
            <div className="main_note" onDoubleClick={hide}>
                <form>
                   {expand? <input type="text" onChange={inputFetch} value={notes.title} name="title" placeholder="title" autoComplete="off" />: null}
                    <textarea type="text" onClick={show} onChange={inputFetch} value={notes.content} name="content" rows="" column="" placeholder="Write a note..." ></textarea>
                    {expand?<Button onClick={addEvent}><AddIcon className="plus_sign"/></Button>:null}
                </form>
            </div>
        </>
    )
}

export default CreateNotes;
