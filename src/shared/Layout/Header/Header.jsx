import { useNavigate } from "react-router-dom";
import { Head, Nav } from "./style";
import CustomButtons from "../../../redux/components/CustomButtons";

const Header = () => {
  const navigate = useNavigate();

  // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
  let currentUserDi = localStorage.getItem("id");

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
        사망토론
      </CustomButtons>
      <Nav>
        <CustomButtons
          btnName="navBar"
          dp={currentUserDi !== null ? "block" : "none"}
          onClick={() => navigate("/my")}
        >
          마이페이지
        </CustomButtons>
        <CustomButtons
          btnName="navBar"
          dp={currentUserDi !== null ? "block" : "none"}
          onClick={() => navigate("/upload")}
        >
          토론 등록
        </CustomButtons>
        <CustomButtons
          btnName="navBar"
          dp={currentUserDi === null ? "block" : "none"}
          onClick={() => navigate("/login")}
        >
          로그인
        </CustomButtons>
      </Nav>
    </Head>
  );
};
export default Header;
