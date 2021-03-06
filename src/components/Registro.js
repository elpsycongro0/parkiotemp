import React from 'react';
import './styles/Modal.css';

const Registro = ({ handleClose, show, activate, children }) => {
  const showHideClassName = (show && activate===1) ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button type="button" onClick={handleClose}>
        
        </button>
        {children}
      </section>
    </div>
  );
};

export {Registro};