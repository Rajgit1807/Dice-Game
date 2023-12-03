import styled from "styled-components"
import {Button} from "./Button.js"

const HomePageGame = (props) => {
  return (
    <Container>
        
        <div className="dice-img">
        <img src="dices 1.png" alt = "dice text"/>
        </div>

        <div className="rightside">
        <h1>DICE GAME</h1>
        <Button onClick={props.handleClick}>Play Now</Button>
        </div>

        </Container>
  )
}

export default HomePageGame;

const Container = styled.div`
max-width:1060px;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
margin: auto;

.dice-img{
  img{
    width:600px;
  }
}
.rightside{
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
}
.rightside{
  h1{
    height: 120px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 60px;
    font-weight: 800;
    line-height: 144px;
    letter-spacing: 0em;
    text-align: left;
    white-space:nowrap;
  }
}
`

