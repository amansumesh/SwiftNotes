import React, { useState } from 'react'
import Footer from './components/Footer'
import NoteForm from './components/NoteForm'
import NotesSection from './components/NotesSection'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    console.log(title, details);
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    console.log(copyTask);

    setTitle('');
    setDetails('');
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
    console.log("Note Deleted");
  }

  return (
    <>
      <div className='min-h-screen lg:flex bg-black text-white'>
        <NoteForm
          title={title}
          details={details}
          setTitle={setTitle}
          setDetails={setDetails}
          submitHandler={submitHandler}
        />
        <NotesSection
          task={task}
          deleteNote={deleteNote}
        />
      </div>
      <Footer />
    </>
  )
}

export default App
