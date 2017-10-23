// Framework
import React from "react";

const Header = ({ children, goBack }) => {
  return (
    <header>
      <div className="left-content">
        <button onClick={goBack} className="back-button">
          <img alt="Back" src={`/icon/header/back-white.svg`} />
        </button>
      </div>
      <div className="middle-content">
        <h1>
          {children}
        </h1>
      </div>
      <div className="right-content"></div>
    </header>
  );
};

export default Header;
