import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import { Header } from "./Components/Header"
import { Footer } from './Components/Footer'
import { Note } from "./Components/Note"
// import { notes } from "./db"
import { CreateArea } from "./Components/CreateArea"


function App() {
  const items = JSON.parse(localStorage.getItem('notes')) || []
  const [notes, setNotes] = useState(items);

  const addNote = (note) => {
    // console.log(note)
    setNotes((pre) => {
      return [...pre, note]
    })
  }


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  const deleteNote = (id) => {
    // console.log("delete")
    setNotes((pre) => {
      return pre.filter((noteItem, index) => {
        return index !== id

      })
    })
  }


  return (
    <div className="App">
      <Header></Header>
      <CreateArea
        onAdd={addNote}
      />
      <div className='noteList'>
        {notes.map((e, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={e.title}
              content={e.content}
              onDelete={deleteNote}
            />
          )
        })}
      </div>


      <Footer></Footer>
    </div>
  )
}

export default App
