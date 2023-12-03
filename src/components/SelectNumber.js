import React from "react";
import styled from "styled-components";
const SelectNumber = (props) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  function setandHandlealert(value) {
    props.setSelectedNumber(value);
    props.setalertText(" ");
  }

  const selectors = arrNumber.map((value, i) => (
    <Box
      isSelected={value === props.selectedNumber}
      onClick={() =>setandHandlealert(value)}
      key={i}
    >
      {value}
    </Box>
  ));

  return (
    <SelectContainer>
        <p className="alertText">{props.alertText}</p>
      <NumberContainer>{selectors}</NumberContainer>
      <p className="Totaltext">Select Number</p>
    </SelectContainer>
  );
};

export default SelectNumber;

const SelectContainer = styled.div`
  text-align: right;
.alertText{
    color: red;  
    height: 24px;
}
  .Totaltext {
    font-size: 18px;
    font-weight: bold;
    line-height: 60px;
    letter-spacing: 0em;
  }
`;

const Box = styled.div`
  width: 29px;
  height: 29px;
  padding: 10px;
  border: 1px solid #000000;
  place-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000000" : "#FFFFFF")};
  color: ${(props) => (props.isSelected ? "#FFFFFF" : "#000000")};
`;

const NumberContainer = styled.div`
  display: flex;
  gap: 13px;
`;
