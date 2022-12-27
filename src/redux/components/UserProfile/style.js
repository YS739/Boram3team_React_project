import styled from "styled-components";

const Section = styled.section``;

const H1 = styled.h1`
  margin-left: 10px;
  font-size: 30px;
`;
const P = styled.p`
  font-size: 20px;
`;

const Article = styled.article`
  border: 1px solid gray;
  border-radius: 20px;
  padding: 20px;
  margin: 10px 10px 30px 10px;
  font-size: 30px;
  :hover {
    background-color: lightblue;
  }
`;

const Logout = styled.span`
  margin: 10px 15px 0px 5px;
  font-size: 18px;
  float: right;
  text-decoration: underline;
  text-underline-position: under;
  cursor: pointer;
  :hover {
    color: blue;
  }
`;

const Btn = styled.button``;
export { Section, H1, Article, Btn, P, Logout };
