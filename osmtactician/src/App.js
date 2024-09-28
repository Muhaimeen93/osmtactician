// src/App.js
import React, { useState } from "react";
import "./CSS/App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import WelcomeCard from "./Components/WelcomeCard";
import GroundInfo from "./Components/GroundInfo";
import OpponentCard from "./Components/OpponentCard";
import UserTeamCard from "./Components/UserTeamCard";
import ResultCard from "./Components/ResultCard";

function App() {
  const [step, setStep] = useState(1);
  const [opponentTeamRating, setOpponentTeamRating] = useState(null);
  const [opponentTeamFormation, setOpponentTeamFormation] = useState(null);
  const [userTeamRating, setUserTeamRating] = useState(null);
  const [ground, setGround] = useState("N");

  const onNext = () => {
    setStep(step + 1);
    if (step + 1 === 5) {
    }
  };

  const handleGroundData = (selected_ground) => {
    setGround(selected_ground);
  };

  const calculateOpponentTeamRating = (rating) => {
    setOpponentTeamRating(rating);
  };

  const calculateUserTeamRating = (rating) => {
    setUserTeamRating(rating);
  };

  return (
    <div className="App">
      <Header />
      {step === 1 && <WelcomeCard onNext={onNext} />}

      {step === 2 && (
        <GroundInfo
          onNext={onNext}
          initialSelection={ground}
          onGroundUpdate={handleGroundData}
        />
      )}
      {step === 3 && (
        <OpponentCard
          onNext={onNext}
          groundSelection={ground}
          onCalculateOpRating={calculateOpponentTeamRating}
          onFormationSelection= {setOpponentTeamFormation}
        />
      )}
      {step === 4 && (
        <UserTeamCard
          onNext={onNext}
          groundSelection={ground}
          onCalculateUserRating={calculateUserTeamRating}
        />
      )}
      {step === 5 && (
        <ResultCard
          opponentTeamRating={opponentTeamRating}
          userTeamRating={userTeamRating}
          opponentFormation={opponentTeamFormation}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
