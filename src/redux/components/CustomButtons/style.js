import styled from "styled-components";

const ButtonStyled = styled.button`
  /* 공통 부분 */
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;

  background-color: #65647c;
  color: white;

  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 15px;
  margin: 5px;

  display: ${(props) => props.dp};

  :hover {
    opacity: 0.7;
    color: white;
    transition: 0.5s;
  }
`;

const HomeButtonStyled = styled.button`
  cursor: pointer;

  background-color: transparent;

  border: none;
  font-size: 40px;
  font-weight: bold;
`;

const NavStyled = styled.button`
  cursor: pointer;

  background-color: transparent;

  border: none;
  font-size: 20px;
  font-weight: 700;

  float: right;
  padding-top: 18px;
  padding-right: 10px;
  display: ${(props) => props.dp};

  :hover {
    text-decoration: underline;
    text-underline-position: under;
    cursor: pointer;
  }
`;

const NameStyled = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;

  background-color: #65647c;
  color: white;

  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 15px;

  display: block;
  margin-left: 10px;
  margin-top: 10px;

  :hover {
    opacity: 0.7;
    color: white;
    transition: 0.5s;
  }
`;

const NameDomeStyled = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;

  background-color: #65647c;
  color: white;

  border: none;
  border-radius: 15px;
  font-weight: bold;
  font-size: 15px;

  display: none;

  :hover {
    opacity: 0.7;
    color: white;
    transition: 0.5s;
  }
`;

export {
  ButtonStyled,
  NameDomeStyled,
  NameStyled,
  HomeButtonStyled,
  NavStyled,
};
