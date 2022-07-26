import React from "react";

import "./Success.css";

const SuccessModal = React.memo((props) => {
  return (
    <React.Fragment>
      <div className="success-modal">
        <h2>Success!</h2>
        <p>{props.children}</p>
        <div className="success-modal__actions">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default SuccessModal;
