// src/components/OpponentCard.js
import React, { useState, useEffect } from "react";
import "../CSS/InputCard.css";
import formationsData from "../Files/formations.json";

const OpponentCard = ({
  onNext,
  groundSelection,
  onCalculateOpRating,
  onFormationSelection,
}) => {
  const [formation, setFormation] = useState("");
  const [playerRatings, setPlayerRatings] = useState(Array(11).fill(""));
  const [stadiumLevel, setStadiumLevel] = useState("");
  const [teamRating, setTeamRating] = useState(null);
  const [isFormValid, setIsFormValid] = useState(false);
  const [natBonus, setNatBonus] = useState(null);

  const handleInputChange = () => {
    // Check if all required fields are filled
    const isValid =
      formation !== "" &&
      natBonus !== null &&
      playerRatings.every((rating) => rating !== "") &&
      stadiumLevel !== "";
    setIsFormValid(isValid);
  };

  useEffect(() => {
    handleInputChange(); // This will be called whenever stadiumLevel changes
  }, [stadiumLevel, playerRatings, formation, natBonus, handleInputChange]);

  useEffect(() => {
    if (teamRating !== null && teamRating !== undefined && teamRating !== 0) {
      onCalculateOpRating(teamRating);
      onFormationSelection(formation);
      onNext();
    }
  }, [
    teamRating,
    onCalculateOpRating,
    onNext,
    onFormationSelection,
    formation,
  ]);
  const calculateTeamRating = () => {
    const totalPlayerRatings = playerRatings.reduce(
      (total, rating) => total + parseFloat(rating || 0),
      0
    );
    const averagePlayerRating = totalPlayerRatings / playerRatings.length;
    let stadiumEffect = 0;
    if (groundSelection === "A") {
      if (stadiumLevel === "1") {
        stadiumEffect = 0.02;
      } else if (stadiumLevel === "2") {
        stadiumEffect = 0.04;
      } else if (stadiumLevel === "3") {
        stadiumEffect = 0.06;
      }
    }

    var calculatedTeamRating =
      averagePlayerRating + averagePlayerRating * stadiumEffect;

    if (natBonus === "Y") calculatedTeamRating = calculatedTeamRating * 1.02;

    setTeamRating(calculatedTeamRating.toFixed(2));
  };

  const handleNext = () => {
    calculateTeamRating();
    // onNext();
  };

  return (
    <div className="input-card">
      <h2>Opponent Information</h2>

      <div>
        <label class="label" htmlFor="formation">
          Formation:
        </label>
        <select
          id="formation"
          value={formation}
          onChange={(e) => setFormation(e.target.value)}
          required
        >
          <option value="">Select Formation</option>
          {formationsData.formations.map((formationOption) => (
            <option key={formationOption.id} value={formationOption.id}>
              {formationOption.label}
            </option>
          ))}
        </select>
      </div>
      <div className="inputs-column">
        <label htmlFor="player-ratings">
          Opponent's predicted XI player ratings:
        </label>

        <div className="player-ratings-grid">
          {playerRatings.map((rating, index) => (
            <input
              key={index}
              type="text"
              value={rating}
              onChange={(e) => {
                const newRatings = [...playerRatings];
                newRatings[index] = e.target.value;
                setPlayerRatings(newRatings);
              }}
              required
            />
          ))}
        </div>
      </div>
      <div>
        <label class="label" htmlFor="stadium-level">
          Stadium Level:
        </label>
        <select
          id="stadium-level"
          value={stadiumLevel}
          onChange={(e) => setStadiumLevel(e.target.value)}
          required
        >
          <option value="">Select Stadium Level</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <div>
        <label class="label" htmlFor="natinoality">
          More than 5 players from the same nation in the starting XI?
        </label>
        <select
          id="stadium-level"
          value={natBonus}
          onChange={(e) => setNatBonus(e.target.value)}
          required
        >
          <option value="">Select Yes or No</option>
          <option value="Y">Y</option>
          <option value="N">N</option>
        </select>
      </div>
      <button onClick={handleNext} disabled={!isFormValid}>
        Next
      </button>
      {teamRating !== null && (
        <div className="team-rating">
          <p>Team Rating: {teamRating}%</p>
        </div>
      )}
    </div>
  );
};

export default OpponentCard;
