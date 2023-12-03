
import styled from "styled-components";
import {Button} from "./Button.js"
import { OutlineButton } from "./Button.js";
const RollDice = (props) => {

    
  return (
    <Container>
      <div className="dice-img">
        <img onClick={props.changeDice} src={`dice_${props.diceNo}.png`} alt="Dice Image" />
      </div>
      <p>Click on Dice to Roll</p>
      <div className="Buttons">
        <OutlineButton onClick ={props.resetScore} className="Reset-Score">Reset Score</OutlineButton>
        <Button onClick ={props.showRules} className="Show-Rules"> {props.displayRules?"Hide":"Show"} Rules </Button>
      </div>
    </Container>
  );
};

export default RollDice;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 220px;
    cursor:pointer;
  }
  p {
    font-size: 21px;
    font-weight: 600;
    line-height: 36px;
  }
  .Buttons {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;
