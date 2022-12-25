import styled from "styled-components";

const ButtonStyled = styled.button`
  /* 공통 부분 */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;

  background-color: white;
  color: gray;

  border: 2px solid black;
  border-radius: 30px;
  font-weight: bold;

  :hover {
    background-color: black;
    color: white;
    transition: 1s;
  }
`;

const HomeButtonStyled = styled.button`
  cursor: pointer;

  background-color: transparent;
  color: darkgreen;

  border: none;
  font-size: 35px;
  font-weight: bold;
`;

export { ButtonStyled, HomeButtonStyled };
