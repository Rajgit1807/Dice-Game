import React from 'react'
import styled from "styled-components"


const TotalScore = (props) => {

  return (
  <Container>
   <h1>{props.score}</h1>
   <p>Total Score</p>
  </Container>
  )
}

export default TotalScore

const Container = styled.div`
max-width:150px;
text-align: center;

h1{
font-size: 80px;
font-weight: 500;
line-height: 62px;
}

p{
font-size: 20px;
font-weight: 600;
letter-spacing: 0em;
white-space:nowrap;
}
`