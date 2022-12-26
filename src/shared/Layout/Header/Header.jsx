import { useNavigate } from "react-router-dom";
import { Head, Btn, Logo, Nav } from "./style";

const Header = () => {
  const navigate = useNavigate();

  // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
  let currentUserDi = localStorage.getItem("id");

  return (
    <Head>
      <div>{/* 일부러 빈 태그 만든거에요*/}</div>
      <Logo onClick={() => navigate("/")}>보람삼조 XX토론</Logo>
      <Nav>
        <Btn
          dp={currentUserDi !== null ? "block" : "none"}
          onClick={() => navigate("/my")}
        >
          마이페이지
        </Btn>
        <Btn
          dp={currentUserDi !== null ? "block" : "none"}
          onClick={() => navigate("/upload")}
        >
          토론 등록
        </Btn>
        <Btn
          dp={currentUserDi === null ? "block" : "none"}
          onClick={() => navigate("/login")}
        >
          로그인
        </Btn>
      </Nav>
    </Head>
  );
};
export default Header;
