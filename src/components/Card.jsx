import React, { useContext, useEffect, useState } from "react";
import { Notes } from "../context/NoteContext";

function Card({ crdVal, text, isEditable, id }) {
  const crdColor = [`#B388EB`, `#FF6B6B`, `#5DD39E`, `#11B5E4`, `#E5B181`];
  const [tempText, settempText] = useState(``);
  const {noteList, setnoteList} = useContext(Notes);

  useEffect(() => {
    settempText(text);
  }, [])

  function handleonChange(event){
    const { value } = event.target;
    settempText(value);
  }
  function deleteCard(event){
    setnoteList(noteList.filter((val) => {
      return val.id != event.target.id;
    }))
  }
  function saveCard(event){
    setnoteList(noteList.map((val) => {
      if (val.id == event.target.nextSibling.id) {
        return {
          ...val, text: tempText, isEditable: false
        }
      }
      else {
        return val
      }
    }))
  }
  function editCard(event){
    setnoteList(noteList.map((val) => {
      if (val.id == event.target.nextSibling.id) {
        return {
          ...val, isEditable: true
        }
      }
      else {
        return val
      }
    }))
  }
  return (
    <>
      <div style={{backgroundColor: crdColor[crdVal]}} className="card w-72 text-primary-content aspect-square m-6 ml-1">
        <div className="flex flex-col justify-between card-body">
          {
            isEditable ? <textarea className="bg-transparent h-44 max-h-44 min-h-44 overflow-x-hidden focus:outline-none" type="text" value={tempText} onChange={handleonChange}></textarea> : <p className="text-black h-44 max-h-44 min-h-44">{ text }</p>
          }
          <div className="card-actions justify-end">
            {
              isEditable ? <button onClick={saveCard} className="btn btn-sm btn-outline">Save</button> : <button onClick={editCard} className="btn btn-sm btn-outline">Edit</button>
            }
            <button id={id} onClick={deleteCard} className="btn btn-sm btn-outline">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
