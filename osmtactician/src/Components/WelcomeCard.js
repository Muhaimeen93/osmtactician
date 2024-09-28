// src/components/WelcomeCard.js
import React from "react";
import "../CSS/WelcomeCard.css";

const WelcomeCard = ({ onNext }) => {
  const handleClick = () => {
    onNext();
  };

  return (
    <div className="welcome-card">
      <h2>Welcome to OSM Tactics generator</h2>
      <p>
        We make your life easier by providing you the best counter tactics.
        Follow the instructions provided.
      </p>
      <button onClick={handleClick}>Next</button>
    </div>
  );
};

export default WelcomeCard;
