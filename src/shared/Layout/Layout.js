import styled from "styled-components";
import Header from "./Header";
import logo from "./footerlogo.png";
// TODO: 컴포넌트 빼서 if문으로 로그인/글작성/마이페이지 보이게

const Footer = () => {
  return (
    <Foot>
      <FooterLogo>
        <img
          src="https://user-images.githubusercontent.com/117061017/209667589-b48afaf2-d71d-4dd2-bdb9-209eb19d98e0.png"
          alt="Boram3team logo"
        />
      </FooterLogo>
      <h5 style={{ color: "#8c8c8c" }}>
        보람삼조(주) | 대표이사 박성환 성경환 이희령 정윤숙 차상현
      </h5>
      <h5 style={{ color: "#8c8c8c" }}>
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
      <Footer />
    </div>
  );
};

export default Layout;

// styled-components

const Foot = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: #06283d;
  gap: 50px;

  box-sizing: border-box;
  padding: 0 140px;
  margin-top: 50px;
`;

const FooterSpan = styled.div`
  background-color: #282c38;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  gap: 50px;
`;

const FooterLogo = styled.div`
  margin-top: 8px;
  img {
    height: 35px;
  }
`;
