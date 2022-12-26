import styled from "styled-components";

const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  align-items: center;
  border: 1px solid red;
`;

const Logo = styled.h1`
  border: 1px solid skyblue;
`;

const Nav = styled.ul`
  border: 1px solid black;
  list-style-type: none;
  font-size: 20px;
`;

const Btn = styled.li`
  float: right;
  padding-top: 18px;
  padding-right: 10px;
  :hover {
    font-weight: 700;
  }
  cursor: pointer;
  display: ${(props) => props.dp};
`;

export { Head, Btn, Logo, Nav };
