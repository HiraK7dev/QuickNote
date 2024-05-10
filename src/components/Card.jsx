import React, { useContext, useEffect, useState } from "react";
import { Notes } from "../context/NoteContext";
import { toast } from "react-toastify";
import View from "./View";

function Card({ crdVal, text, isEditable, id }) {
  const crdColor = [
    `#B388EB`,
    `#FF6B6B`,
    `#5DD39E`,
    `#11B5E4`,
    `#E5B181`,
    `#9ABD97`,
  ];
  const [tempText, settempText] = useState(``);
  const { noteList, setnoteList } = useContext(Notes);

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
    setnoteList((noteList) =>
      noteList.filter((val) => {
        return val.id != event.target.id;
      })
    );
    deleted();
    settempText(`Write your note here...`);
  }
  function saveCard(event) {
    setnoteList((noteList) =>
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
    setnoteList((noteList) =>
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
        className="card w-72 text-primary-content aspect-square m-6 ml-1 shadow-2xl hover:scale-105 transition duration-500"
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
            <p className="text-black h-[170px] max-h-[170px] min-h-[170px] overflow-y-auto">
              {text}
            </p>
          )}
          <div className="card-actions justify-end">
            <View modalId={id} modalText={text} crdVal={crdVal}/>
            {isEditable ? (
              <button
                onClick={saveCard}
                className="btn btn-sm btn-active btn-neutral"
              >
                Save
              </button>
            ) : (
              <>
                {crdVal === `5` ? (
                  <button
                    className="btn btn-sm glass text-[10px]"
                    onClick={() =>
                      document.getElementById(id + `modal`).showModal()
                    }
                  >
                    AI GENERATED
                  </button>
                ) : (
                  <>
                    <button
                      className="btn btn-sm glass text-xs"
                      onClick={() =>
                        document.getElementById(id + `modal`).showModal()
                      }
                    >
                      View
                    </button>
                  </>
                )}
                <button
                  onClick={editCard}
                  className="btn btn-sm btn-active btn-neutral text-xs"
                >
                  Edit
                </button>
              </>
            )}
            <button
              id={id}
              onClick={deleteCard}
              className="btn btn-sm btn-active btn-neutral text-xs"
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
