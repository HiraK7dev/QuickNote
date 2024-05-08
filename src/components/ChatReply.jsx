import React, { useContext, useRef, useEffect } from "react";
import { Notes } from "../context/NoteContext";

function ChatReply({ text, uniqueID }) {
  const { noteList, setnoteList } = useContext(Notes);
  const mainButton = useRef(null);
  function addtoNote(event) {
    const { id } = event.target;
    mainButton.current.disabled = true;
    mainButton.current.innerText = `ADDED`;
      setnoteList(noteList => [
        ...noteList,
        {
          id: Date.now(),
          text: text,
          color: id,
          isEditable: false,
        },
      ]);
  }

  useEffect(() => {
    localStorage.setItem(`note`, JSON.stringify(noteList));
  }, [noteList])

  return (
    <div className="chat chat-start m-4">
      <div className="chat-bubble chat-bubble-primary shadow-xl">
        {text == `Loading` ? (
          <span className="loading loading-dots loading-md"></span>
        ) : (
          <>
            <div>{text}</div>
            <button
              onClick={() => document.getElementById(`modal + ${uniqueID}`).showModal()}
              className="btn btn-primary btn-active btn-xs mt-2 mb-2"
              ref={mainButton}
            >
              ADD TO NOTE
            </button>
            <dialog
              id={`modal + ${uniqueID}`}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  Pick a Color for Your Note:{" "}
                </h3>
                <div className="modal-action flex justify-center items-center">
                  <form
                    method="dialog"
                    className="flex justify-evenly items-center"
                  >
                    <button
                      id="0"
                      onClick={addtoNote}
                      style={{ backgroundColor: `#B388EB` }}
                      className="btn m-1 aspect-square"
                    ></button>
                    <button
                      id="1"
                      onClick={addtoNote}
                      style={{ backgroundColor: `#FF6B6B` }}
                      className="btn m-1 aspect-square"
                    ></button>
                    <button
                      id="3"
                      onClick={addtoNote}
                      style={{ backgroundColor: `#11B5E4` }}
                      className="btn m-1 aspect-square"
                    ></button>
                    <button
                      id="5"
                      onClick={addtoNote}
                      style={{ backgroundColor: `#9ABD97` }}
                      className="btn m-1 text-xs text-white"
                    >AI GENERATED</button>
                    <button className="btn btn-outline btn-error ml-2">
                      Close
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </>
        )}
      </div>
      <div className="chat-footer opacity-50">
        {text == `Loading` ? `Typing` : `Delivered`}
      </div>
    </div>
  );
}

export default ChatReply;
