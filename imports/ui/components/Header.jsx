// Framework
import React from "react";

const Header = ({ children, goBack }) => {
  return (
    <header>
      <button onClick={goBack} className="back-button">
        <img alt="Back" src={`/icon/header/back-white.svg`} />
      </button>
      <h1>
        {children}
      </h1>
      <div className="right-content" />
    </header>
  );
};

export default Header;
