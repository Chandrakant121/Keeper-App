import React, { useState } from "react"

export const CreateArea = (props) => {

    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setNote((pre) => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const submitNote = (e) => {
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
        e.preventDefault();

    }


    return (
        <div className="createArea">
            <form>
                <input name="title" onChange={handleChange} placeholder="Title" value={note.title} id="" />
                <textarea name="content" onChange={handleChange} placeholder="Take a Note" value={note.content} />
                <div style={{ width: "36px", margin: "auto", marginTop: "4px", marginBottom: "8px" }}>
                    <button className="Add-btn" onClick={submitNote}>Add</button>
                </div>

            </form >
        </div >
    )
}
