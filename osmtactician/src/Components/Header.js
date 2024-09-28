import React from "react";
import "../CSS/Header.css";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt="Logo" className="header-logo" />
    </div>
  );
};

export default Header;
