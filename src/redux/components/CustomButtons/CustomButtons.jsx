import React from "react";
import styled from "styled-components";

const CustomButtons = ({ children }) => {
  return <ButtonStyled>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;

  background-color: white;

  border: 2px solid black;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;

  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};

  :hover {
    background-color: black;
    color: white;
    transition: 1s;
  }
`;

/* padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-bottom: ${(props) => props.marginBottom};
  font-size: ${(props) => props.textSize};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius}; */

export default CustomButtons;
