import styled from 'styled-components';

const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
`;

const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  align-items: center;
`;

const Nav = styled.ul`
  list-style-type: none;
  font-size: 20px;
`;

export { Head, Nav, HeaderDiv };
