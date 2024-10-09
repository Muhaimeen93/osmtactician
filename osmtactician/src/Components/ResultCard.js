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
        <div style={{ textAlign: "left" }}>
          <p>
            <label class="label">Captain: </label> Oldest Player of your playing
            XI
          </p>
          <p>
            <label class="label">Penalty: </label> Highest Rated Forward of your
            playing XI{" "}
          </p>
          <p>
            <label class="label">Free Kick: </label> Highest Rated Forward/Mid
            of your playing XI{" "}
          </p>
          <p>
            <label class="label">Corner: </label> Highest Rated Midfielder of
            your playing XI
          </p>
        </div>
        <br></br>
        <div style={{ textAlign: "left" }}>
          <label class="label">Tackling: </label>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              Use Careful if Referee is{" "}
              <span style={{ color: "red" }}>Red</span>
            </li>
            <li>
              Use Normal if Referee is{" "}
              <span style={{ color: "orange" }}>Orange</span>/
              <span style={{ color: "yellow" }}>Yellow</span>
            </li>
            <li>
              Use Aggressive if Referee is{" "}
              <span style={{ color: "green" }}>Green</span>/
              <span style={{ color: "blue" }}>Blue</span>
            </li>
          </ul>
        </div>
        <div style={{ textAlign: "left" }}>
          <label class="label">Additional Instructions: </label>
          <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
            <li>
              Always select the correct Specialists. [Captain,Penalty taker
              etc.]
            </li>
            <li>Always use the players in their original position.</li>
            <li>Never put a player in red/yellow out of positions.</li>
            <li>Never use Reckless tackling.</li>
          </ul>
        </div>
      </div>
      <button className="button-blue" onClick={() => window.location.reload()}>
        Done
      </button>
    </div>
  );
};

export default ResultCard;
