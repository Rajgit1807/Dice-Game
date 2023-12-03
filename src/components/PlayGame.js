import styled from "styled-components";
import TotalScore from "./TotalScore";
import SelectNumber from "./SelectNumber";
import RollDice from "./RollDice";
import React from "react";
import { useState } from "react";
import RulesBox from "./RulesBox";

const PlayGame = () => {
  const [score, setScore] = React.useState(0);
  const [selectedNumber, setSelectedNumber] = React.useState(0);
  const [diceNo, setdiceNo] = useState(1);
  const [alertText, setalertText] = useState(" ");
  const [displayRules, setdisplayRules] = useState(false);

  function changeDice() {
    if (!selectedNumber) {
      setalertText("You have not selected any number");
      return;
    }

    const randomnum = Math.floor(Math.random() * 6) + 1;

    setdiceNo(randomnum);
    
    if (selectedNumber === randomnum) {
      setScore((prev) => prev + randomnum);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
    
  }

  function resetScore() {
    setScore(0);
  }

  function showRules() {
    setdisplayRules((prev) => !prev);
  }

  return (
    <Container>
      <div className="top-section">
        <TotalScore score={score} />
        <SelectNumber
          alertText={alertText}
          setalertText={setalertText}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice
        displayRules={displayRules}
        resetScore={resetScore}
        showRules={showRules}
        diceNo={diceNo}
        changeDice={changeDice}
      />
      {/* Conditional Rendering */}
      {displayRules && <RulesBox />}
    </Container>
  );
};

export default PlayGame;

const Container = styled.main`
  .top-section {
    display: flex;
    justify-content: space-between;
    padding: 20px 70px;
    align-items: end;
  }
`;
