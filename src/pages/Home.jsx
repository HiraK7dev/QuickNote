import React, { useContext, useEffect, useState } from 'react'
import { Notes } from '../context/NoteContext'
import Sidebar from '../components/Sidebar'
import Card from '../components/Card'

function Home() {
  const {noteList, setnoteList} = useContext(Notes);
  useEffect(() => {
     const note = JSON.parse(localStorage.getItem(`note`));
     if (note && note.length > 0) {
      setnoteList(note);
     }
     else if(!note) {
      setnoteList([
        {
          id: Date.now(),
          text: `Welcome to Quick Note`,
          color: Math.floor(Math.random() * 5),
          isEditable: false
        }
      ])
     }
  }, [])

  useEffect(() => {
    localStorage.setItem(`note`, JSON.stringify(noteList));
  }, [noteList])

  return (
    <div className='flex justify-start'>
      <Sidebar />
      <div>
        <h1 className='text-5xl font-bold tracking-wider ml-16 mt-16 mb-11'>Notes</h1>
        {/* Cards are displayed here */}
        <div className='flex flex-row justify-start items-start flex-wrap m-6 ml-16 w-fit h-fit'>
          {
            noteList.map((item, index) => {
              return <Card text={item.text} crdVal={item.color} isEditable={item.isEditable} key={index} id={item.id}/>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Home