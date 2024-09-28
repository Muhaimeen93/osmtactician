import React from "react";
import "../CSS/Footer.css";
import logo from "../Images/logo.png";

const Footer = () => {
  const email = "osmtactician@gmail.com";

  return (
    <footer className="footer-container">
      <div className="copyright">©OSM Tactician 2024</div>
      <div className="email">{email}</div>
      <img src={logo} alt="Logo" className="footer-logo" />
    </footer>
  );
};

export default Footer;
