import React from 'react'
import { useState } from 'react'



export const Note = (props) => {

    const handleClick = () => {
        props.onDelete(props.id)
    }

    const [isDone, setIsDone] = useState(false);

    const handleClick1 = () => {
        setIsDone((pre) => {
            return !pre;
        });
    };

    return (
        <div className='note' >
            <h1 style={{ textDecoration: isDone ? "line-through" : "none" }} >{props.title}</h1>
            <div style={{ textDecoration: isDone ? "line-through" : "none" }} >{props.content}</div>
            <div style={{ width: "160px", margin: "auto", display: "flex" }}>
                <button className='delete-btn' onClick={handleClick}>DELETE</button>
                <button className='line-btn' onClick={handleClick1}>Mark</button>

            </div>


        </div >

    )
}

export default Note