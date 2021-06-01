import React from 'react';
import './styles/Registro.css';

const Registro = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

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