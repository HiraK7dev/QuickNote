import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Notes } from "../context/NoteContext";
import { themeChange } from "theme-change";

function Sidebar() {
  const { noteList, setnoteList } = useContext(Notes);

  useEffect(() => {
    themeChange(false);
  }, []);

  function CardCreator(event) {
    const { id } = event.target;
    setnoteList([
      ...noteList,
      {
        id: Date.now(),
        text: `Write your note here...`,
        color: id,
        isEditable: true,
      },
    ]);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-40 min-w-40 fixed z-10">
        <div className="flex flex-col justify-start items-center w-[75%] h-[88%] bg-slate-300 bg-opacity-50 rounded-3xl pt-3">
          <NavLink to="/">
            <h1 className="text-sm font-bold font-sans mt-4 mb-4">
              Quick Note
            </h1>
          </NavLink>
          {/* <button className="btn btn-natural btn-outline mt-4 mb-4">CREATE</button> */}
          <button
            className="btn btn-active btn-neutral mt-4 mb-4"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            CREATE
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">
                Pick a Color for Your Note:{" "}
              </h3>
              {/* <p className="py-4">Pick a Color for Your Note</p> */}
              <div className="modal-action flex justify-center items-center">
                <form
                  method="dialog"
                  className="flex justify-evenly items-center"
                >
                  {/* if there is a button in form, it will close the modal */}
                  <button
                    id="0"
                    onClick={CardCreator}
                    style={{ backgroundColor: `#B388EB` }}
                    className="btn m-1 aspect-square"
                  ></button>
                  <button
                    id="1"
                    onClick={CardCreator}
                    style={{ backgroundColor: `#FF6B6B` }}
                    className="btn m-1 aspect-square"
                  ></button>
                  <button
                    id="2"
                    onClick={CardCreator}
                    style={{ backgroundColor: `#5DD39E` }}
                    className="btn m-1 aspect-square"
                  ></button>
                  <button
                    id="3"
                    onClick={CardCreator}
                    style={{ backgroundColor: `#11B5E4` }}
                    className="btn m-1 aspect-square"
                  ></button>
                  <button
                    id="4"
                    onClick={CardCreator}
                    style={{ backgroundColor: `#E5B181` }}
                    className="btn m-1 aspect-square"
                  ></button>
                  <button className="btn btn-outline btn-error ml-2">
                    Close
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <div className="flex flex-col justify-end items-center w-full h-3/4 mt-4 mb-4">
            {/* NavLinks */}
            <ul className="menu rounded-box">
              <li>
                <NavLink to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink to="/help">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* Theme Controller */}
        <select
          className="text-xs w-[75%] h-[5%] bg-slate-300 bg-opacity-50 rounded-3xl mt-3 p-2"
          data-choose-theme
        >
          <option disabled value="">
            Pick a theme
          </option>
          <option value="cupcake">Default</option>
          <option value="retro">Retro</option>
          <option value="lofi">Lofi</option>
          <option value="cyberpunk">Cyberpunk</option>
        </select>
      </div>
      <div className="w-40 min-w-40"></div>
    </>
  );
}

export default Sidebar;
