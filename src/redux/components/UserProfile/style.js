import styled from "styled-components";

const Section = styled.section`
  border: 1px solid red;
`;

const H1 = styled.h1`
  margin-left: 10px;
  font-size: 30px;
`;

const Article = styled.article`
  border: 5px solid black;
  margin: 10px;
  font-size: 30px;
  :hover {
    background-color: lightblue;
  }
`;

export { Section, H1, Article };
