import styled from "styled-components";

const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  align-items: center;
  border: 1px solid red;
`;

const Nav = styled.ul`
  border: 1px solid black;
  list-style-type: none;
  font-size: 20px;
`;

export { Head, Nav };
