import React from "react";
import styled from "styled-components";

const CustomButtons = ({ children, ...rest }) => {
  return <ButtonStyled {...rest}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  /* 공통 부분 */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;

  background-color: white;

  border: 2px solid black;
  border-radius: 30px;
  font-weight: bold;

  /* props로 받을 부분 */
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "15px")};
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

export default CustomButtons;
