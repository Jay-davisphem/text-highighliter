import * as React from "react";
import { createPortal } from "react-dom";
const Modal = ({ isVisible, hideModal }) => {
  const handleDelete = () => {
    hideModal()
    // other things
  }
  return isVisible
    ? createPortal(
        <div className='modal'>
          <div>
            <span>
            Are you sure you want to delete?
            </span>
          </div>
          <button onClick={hideModal}>
            Cancel
          </button>
          <button onClick={handleDelete}>
          Delete
          </button>
        </div>,
        document.body,
      )
    : null;
};
export default Modal;
