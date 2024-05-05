import React, { useContext } from "react";
import { Notes } from "../context/NoteContext";

function ChatReply({ text }) {
  const { noteList, setnoteList } = useContext(Notes);
  function addtoNote(){
    setnoteList([
      ...noteList,
      {
        id: Date.now(),
        text: text,
        color: Math.floor(Math.random() * 5),
        isEditable: false
      }
    ])
  }
  return (
    <div className="chat chat-start m-4">
        <div className="chat-bubble chat-bubble-primary shadow-xl">{text == `Loading`? <span className="loading loading-dots loading-md"></span> : <><div>{text}</div><button onClick={addtoNote} className='btn btn-primary btn-active btn-xs mt-2 mb-2'>ADD TO NOTE</button></>}</div>
        <div className="chat-footer opacity-50">{text == `Loading`?`Typing` : `Delivered`}</div>
    </div>
  )
}

export default ChatReply