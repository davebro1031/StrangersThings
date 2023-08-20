/**reusable dialog component. should have open, onClose, height, width props.
any thing with in dialog tag will be displayed in dialog ie
<Dialog open={true} onClose={e=>{setOpen(false)}}>I'm a Dialog</Dialog>
'I'm a dialog' will display in dialog. 
*/

import React, { useState } from "react";
import "./Dialog.css";

function Dialog({ open, onClose, height, width, children }) {
  const [openDialog, setopenDialog] = useState(false);
  return (
    <>
      {open && (
        <div className="popup">
          <dialog
            style={{ height: `${height}em`, width: `${width}em` }}
            className="popup-inner popup-neutral post-popup"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
              }}
              className="popup-header"
            >
              <button
                className="dialog-close-button"
                onClick={() => {
                  onClose(false);
                }}
              >
                X
              </button>
            </div>
            <div>{children}</div>
          </dialog>
        </div>
      )}
    </>
  );
}
export default Dialog;
