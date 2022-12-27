import styled from "styled-components";
import Header from "./Header";
import logo from "./footerlogo.png";
// TODO: 컴포넌트 빼서 if문으로 로그인/글작성/마이페이지 보이게

const Footer = () => {
  return (
    <Foot>
      <h5 style={{ color: "#969a8d" }}>
        보람삼조 대표이사: 박성환 성경환 이희령 정윤숙 차상현
      </h5>
      <h5 style={{ color: "#969a8d" }}>
        Copyright ©2022 BORAM3TEAM. All rights reserved.
      </h5>
    </Foot>
  );
};

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <FooterSpan>
        <FooterLogo src={logo} />
        <Footer />
      </FooterSpan>
    </div>
  );
};

export default Layout;

// styled-components

const Foot = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FooterSpan = styled.span`
  background-color: #2c343a;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const FooterLogo = styled.img`
  width: 100px;
  height: 30px;
`;
