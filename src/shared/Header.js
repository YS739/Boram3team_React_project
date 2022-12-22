import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Head>
      <h1>보람삼조 XX토론</h1>
      <Btn onClick={() => navigate("/login")}>로그인</Btn>
    </Head>
  );
};
export default Header;

// styled-components
const Head = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 20px 40px;
`;

const Btn = styled.button`
  display: flex;
  justify-content: right;
  align-items: right;
`;
