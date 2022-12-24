import { useNavigate } from "react-router-dom";
import { Head, Btn, Logo, Nav } from "./style";

const Header = () => {
  const navigate = useNavigate();
  let isLogin = "none";

  return (
    <Head>
      <div>{/* 일부러 빈 태그 만든거에요*/}</div>
      <Logo>보람삼조 XX토론</Logo>
      <Nav>
        <Btn dp={"block"} onClick={() => navigate("/my")}>
          마이페이지
        </Btn>
        <Btn dp={"block"} onClick={() => navigate("/upload")}>
          토론 등록
        </Btn>
        <Btn dp={"none"} onClick={() => navigate("/login")}>
          로그인
        </Btn>
      </Nav>
    </Head>
  );
};
export default Header;
