import styled from 'styled-components';

const HeaderDiv = styled.div`
  background-color: #f6f5ef;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: 100px;
  width: 100vw;
`;

const Head = styled.div`
  box-sizing: border-box;
  padding: 0 140px;
  width: 1200px;
  /* min-width: 800px; */
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
  align-items: center;
`;

const HeaderLogo = styled.div`
  cursor: pointer;
  
  img {
    height: 45px;
  }
`

const HeaderTitle = styled.h1`
  margin-left: 80px;
  width: 120px;
  display: flex;
  justify-content: center;
  cursor: pointer;
`

const Nav = styled.ul`
  list-style-type: none;
  font-size: 20px;
  position: relative;
  top: -8px;
`;

export { HeaderDiv, Head, HeaderLogo, HeaderTitle, Nav };
