import React, { useContext, useEffect, useState } from "react";
import { Notes } from "../context/NoteContext";
import { toast } from "react-toastify";
import View from "./View";

function Card({ crdVal, text, isEditable, id }) {
  const crdColor = [`#B388EB`, `#FF6B6B`, `#5DD39E`, `#11B5E4`, `#E5B181`];
  const [tempText, settempText] = useState(``);
  const { noteList, setnoteList } = useContext(Notes);

  // const str = text?.split(` `);
  // const str2 = str?.splice(0, 28).join(` `);

  useEffect(() => {
    settempText(text);
  }, []);

  const saved = () => toast("Note saved successfully!");
  const deleted = () => toast("Successfully removed");

  function handleonChange(event) {
    const { value } = event.target;
    settempText(value);
  }
  function deleteCard(event) {
    setnoteList(noteList =>
      noteList.filter((val) => {
        return val.id != event.target.id;
      })
    );
    deleted();
    settempText(`Write your note here...`);
  }
  function saveCard(event) {
    setnoteList(noteList =>
      noteList.map((val) => {
        if (val.id == event.target.nextSibling.id) {
          return {
            ...val,
            text: tempText,
            isEditable: false,
          };
        } else {
          return val;
        }
      })
    );
    saved();
  }
  function editCard(event) {
    setnoteList(noteList =>
      noteList.map((val) => {
        if (val.id == event.target.nextSibling.id) {
          return {
            ...val,
            isEditable: true,
          };
        } else {
          return val;
        }
      })
    );
  }
  return (
    <>
      <div
        style={{ backgroundColor: crdColor[crdVal] }}
        className="card w-72 text-primary-content aspect-square m-6 ml-1 shadow-2xl"
      >
        <div className="flex flex-col justify-between card-body">
          {isEditable ? (
            <textarea
              className="bg-transparent h-44 max-h-44 min-h-44 overflow-x-hidden focus:outline-none"
              type="text"
              value={tempText}
              onChange={handleonChange}
            ></textarea>
          ) : (
            <p className="text-black h-[170px] max-h-[170px] min-h-[170px] overflow-y-auto">{text}</p>
          )}
          <div className="card-actions justify-end">
            <View modalId={id} modalText={text} />
            {isEditable ? (
              <button
                onClick={saveCard}
                className="btn btn-sm btn-active btn-neutral"
              >
                Save
              </button>
            ) : (
              <>
                <button
                  className="btn btn-sm glass"
                  onClick={() =>
                    document.getElementById(id + `modal`).showModal()
                  }
                >
                  View
                </button>
                <button
                  onClick={editCard}
                  className="btn btn-sm btn-active btn-neutral"
                >
                  Edit
                </button>
              </>
            )}
            <button
              id={id}
              onClick={deleteCard}
              className="btn btn-sm btn-active btn-neutral"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
