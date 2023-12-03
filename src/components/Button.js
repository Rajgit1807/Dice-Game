import styled  from "styled-components"

export  const Button = styled.button` 
margin-left: auto;
width: 160px;
height: 30px;
border-radius: 5px;
border: none;
background: #000000;
color: white;
font-size: 11.5px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0.3px;
text-align: center;
cursor:pointer;
border: 1px solid transparent;
transition: 0.3s background ease-in;
&:hover{
  background:white;
  color:black;
  border: 1px solid black;
  transition: 0.2s background ease-in;
}
`
export  const OutlineButton = styled(Button)` 
border: 1px solid black;
background: white;
color: black;
&:hover{
  background:black;
  color:white;
  border: none;
  transition: 0.2s background ease-in;
}
`