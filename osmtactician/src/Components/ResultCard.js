// src/components/ResultCard.js
import React, { useState, useEffect } from "react";
import tactics from "../Files/tactics.json";
import "../CSS/InputCard.css";

const ResultCard = ({
  opponentTeamRating,
  userTeamRating,
  opponentFormation,
}) => {
  const [tacticsData, setTacticsData] = useState(null);

  useEffect(() => {
    calculateResult(); // This will be called whenever stadiumLevel change
  }, [calculateResult]);

  function calculateResult() {
    if (opponentTeamRating > userTeamRating) {
      setTacticsData(tactics[opponentFormation]["S"]);
    } else {
      setTacticsData(tactics[opponentFormation]["W"]);
    }
  }

  return (
    <div className="input-card">
      <h2>Tactics</h2>
      <div>
        <p style={{ display: "none" }}>
          Opponent's Final Team Rating: {opponentTeamRating}%
        </p>
        <p style={{ display: "none" }}>
          Your Final Team Rating: {userTeamRating}%
        </p>
        <label class="label"> Please use the following tactic:</label>
        <div style={{ textAlign: "left" }}>
          {tacticsData ? ( // Conditional rendering to check if tacticsData is not null
            <>
              <p>
                <label class="label">Formation:</label>
                {tacticsData.Formation}
              </p>
              <p>
                <label class="label">Parameters:</label>
                {tacticsData.Parameters}
              </p>
              <p>
                <label class="label">Instructions:</label>{" "}
                {tacticsData.Instructions}
              </p>
            </>
          ) : (
            <p>Loading tactics data...</p> // Display a loading message if tacticsData is null
          )}
        </div>
      </div>
      <button onClick={() => window.location.reload()}>Done</button>
    </div>
  );
};

export default ResultCard;
