import React from 'react';

const ButtonsPokedex = ({ className, children, disabled, onClick, }) => (

  <button
    
    onClick={onClick}
    className={`button-text ${className}`}
    disabled={disabled}
  >
    {children}
  </button>
);


export default ButtonsPokedex;
