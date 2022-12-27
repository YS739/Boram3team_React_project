import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: #f6f5ef;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 100px;
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
