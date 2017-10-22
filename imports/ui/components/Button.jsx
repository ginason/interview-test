// Framework
import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="bonsai-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
