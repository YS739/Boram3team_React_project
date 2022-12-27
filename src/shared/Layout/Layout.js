import styled from "styled-components";
import Header from "./Header";
// TODO: 컴포넌트 빼서 if문으로 로그인/글작성/마이페이지 보이게

const Footer = () => {
  return (
    <Foot>
      <h3>만든이: 보람삼조 - 박성환 성경환 이희령 정윤숙 차상현</h3>
      <h3>Copyright ©2022 BORAM3TEAM. All rights reserved.</h3>
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
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
