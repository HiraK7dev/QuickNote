import React from "react";

function View({ modalId, modalText }) {
  return (
    <>
      <dialog id={modalId + `modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <p className="py-4">
            {modalText}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default View;
