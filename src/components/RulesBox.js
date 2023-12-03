import React from 'react'
import styled from "styled-components" 
const RulesBox = () => {
  return (
    <RulesContainer>
    <h2>How to play dice game</h2>
    <div className="theRules">
      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>
        after click on dice if selected number is equal to dice number you
        will get same point as dice
      </p>
      <p>if you get wrong guess then 2 point will be dedcuted</p>
    </div>
    </RulesContainer>
  )
}

export default RulesBox

const RulesContainer = styled.div`
  margin: 10px auto;
  max-width: 600px;
  padding: 20px;
  background: #fbf1f1;
  font-size: 12px;
  border-radius: 10px;

  .theRules {
    margin-top: 14px;
    line-height: 20px;
    font-weight: 600;
  }
`;