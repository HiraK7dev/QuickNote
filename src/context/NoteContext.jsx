import React, { createContext, useState } from 'react'

export const Notes = createContext();
export function NoteContext({ children }) {
    const [noteList, setnoteList] = useState([]);
  return (
    <Notes.Provider value={{noteList, setnoteList}}>{ children }</Notes.Provider>
  )
}