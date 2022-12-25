import { useNavigate } from "react-router-dom";
import { Head, Btn, Logo, Nav } from "./style";
import { useEffect } from "react";
import CustomButtons from "../../../redux/components/CustomButtons";

const Header = () => {
  const navigate = useNavigate();
  let isLogin = "none";

  // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
  let currentUserId = localStorage.getItem("id");

  return (
    <Head>
      <CustomButtons btnName="home" onClick={() => navigate("/")}>
        <img
          src="https://user-images.githubusercontent.com/112805225/209471455-4dc00875-0deb-4679-8374-5a06b7b5b2b5.png"
          alt="Boram3team logo"
          height="70px"
        />
      </CustomButtons>
      <CustomButtons btnName="home" onClick={() => navigate("/")}>
        XX토론
      </CustomButtons>
      <Nav>
        <Btn
          dp={currentUserId !== null ? "block" : "none"}
          onClick={() => navigate("/my")}
        >
          마이페이지
        </Btn>
        <Btn
          dp={currentUserId !== null ? "block" : "none"}
          onClick={() => navigate("/upload")}
        >
          토론 등록
        </Btn>
        <Btn
          dp={currentUserId === null ? "block" : "none"}
          onClick={() => navigate("/login")}
        >
          로그인
        </Btn>
      </Nav>
    </Head>
  );
};
export default Header;
