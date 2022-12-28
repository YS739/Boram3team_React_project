import styled from "styled-components";

const Head = styled.div`
  background-color: #efefef;
  border-bottom: 1px solid lightgray;
  box-sizing: border-box;
  padding: 0 140px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and(max-width: 767px) {
    background-color: red;
  }
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  position: relative;
  bottom: -2px;

  img {
    height: 45px;
  }
`;

const HeaderTitle = styled.h1`
  margin-left: 80px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Nav = styled.ul`
  justify-content: right;
  display: flex;
  list-style-type: none;
  width: 240px;
  font-size: 20px;
  position: relative;
  top: -5px;
  padding: 0;
`;

export { Head, HeaderLogo, HeaderTitle, Nav };
