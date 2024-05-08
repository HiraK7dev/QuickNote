import React from "react";

function View({ modalId, modalText, crdVal }) {
  return (
    <>
      <dialog id={modalId + `modal`} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box" style={ crdVal === `5` ? {backgroundColor: `#9ABD97` } : {backgroundColor: `white`}}>
        <h3 className="font-bold text-2xl inline-block">View</h3>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {
          crdVal === `5` ? (
            <div
              className="text-[11px] inline-block rounded-full pl-2 pr-2 pt-1 pb-1 glass"
            >
              AI GENERATED
            </div>
          ) : (
            <></>
          )
        }
          <p className="py-4">
            {modalText}
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className={ crdVal === `5` ? `btn btn-active btn-ghost` : `btn`}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default View;
