import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Notes } from "../context/NoteContext";

function Sidebar() {
  const {noteList, setnoteList} = useContext(Notes);

  function CardCreator(event){
    const { id } = event.target;
    setnoteList([...noteList, {
      id: Date.now(),
      text: `Write your note here...`,
      color: id,
      isEditable: true
    },]);
  }

  return (
    <>
      <div className="flex flex-col justify-start items-center h-screen w-40 min-w-40 border-r-2 border-black-500 fixed z-10">
        <h1 className="font-bold font-sans mt-4 mb-4">Quick Note</h1>
        {/* <button className="btn btn-natural btn-outline mt-4 mb-4">CREATE</button> */}
        <button
          className="btn btn-natural btn-outline mt-4 mb-4"
          onClick={() => document.getElementById("my_modal_5").showModal()}
        >
          CREATE
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Pick a Color for Your Note: </h3>
            {/* <p className="py-4">Pick a Color for Your Note</p> */}
            <div className="modal-action flex justify-center items-center">
              <form method="dialog" className="flex justify-evenly items-center">
                {/* if there is a button in form, it will close the modal */}
                  <button id="0" onClick={CardCreator} style={{backgroundColor: `#B388EB`}} className="btn m-1 aspect-square"></button>
                  <button id="1" onClick={CardCreator} style={{backgroundColor: `#FF6B6B`}} className="btn m-1 aspect-square"></button>
                  <button id="2" onClick={CardCreator} style={{backgroundColor: `#5DD39E`}} className="btn m-1 aspect-square"></button>
                  <button id="3" onClick={CardCreator} style={{backgroundColor: `#11B5E4`}} className="btn m-1 aspect-square"></button>
                  <button id="4" onClick={CardCreator} style={{backgroundColor: `#E5B181`}} className="btn m-1 aspect-square"></button>
                <button className="btn btn-outline btn-error ml-2">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        <div className="flex flex-col justify-end items-center w-full h-3/4 mt-4 mb-4">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold mt-3 text-xs tracking-wider"
                : "font-normal mt-3 text-xs tracking-wider"
            }
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold mt-3 text-xs tracking-wider"
                : "font-normal mt-3 text-xs tracking-wider"
            }
            to="/help"
          >
            HELP
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold mt-3 text-xs tracking-wider"
                : "font-normal mt-3 text-xs tracking-wider"
            }
            to="/about"
          >
            ABOUT
          </NavLink>
        </div>
      </div>
      <div className="w-40 min-w-40"></div>
    </>
  );
}

export default Sidebar;
