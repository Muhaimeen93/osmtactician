// src/components/GroundInfo.js
import React, { useState } from "react";
import "../CSS/WelcomeCard.css";
import "../CSS/InputCard.css";

const GroundInfo = ({ onNext, initialSelection, onGroundUpdate }) => {
  const [selectedGround, setSelectedGround] = useState(initialSelection);

  const handleClick = () => {
    onNext();
  };

  const setGround = (e) => {
    const newValue = e.target.value;
    setSelectedGround(newValue);
    onGroundUpdate(newValue);
  };
  return (
    <div className="input-card">
      <h2>Ground Information</h2>
      <div>
        <label class="label" htmlFor="selectedGround">
          Ground:
        </label>
        <select
          id="selectedGround"
          value={selectedGround}
          onChange={setGround}
          required
        >
          <option value="" disabled>
            Select Ground
          </option>
          <option value="H">Your Home</option>
          <option value="N">Neutral</option>
          <option value="A">Opponent's Home</option>
        </select>
      </div>
      <button className="button-blue" onClick={handleClick}>
        Next
      </button>
    </div>
  );
};

export default GroundInfo;
