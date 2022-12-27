import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Article, Section, ProfileText, Btn, Logout } from "./style";
import { __editUserName } from "../../modules/usersSlice";
import useInput from "../../../hooks/useInput";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  
  const currentUserDi = localStorage.getItem("id");
  const profile = users.find((user) => user.id === currentUserDi);

  const changeInput = useRef();
  const userComment = useRef();
  const changeBtn = useRef();
  const changeBtn2 = useRef();

  const [name, setName, inputNameHandler] = useInput();

  // 닉네임 변경 버튼 핸들러
  const changeNameHandler = () => {
    changeInput.current.style = "display:block";
    userComment.current.style = "display:none";
    changeBtn.current.style = "display:block";
    changeBtn2.current.style = "display:none";
    changeInput.current.focus();
  };

  //완료 버튼 핸들러
  const completeButtonHandler = (id) => {
    changeInput.current.style = "display:none";
    userComment.current.style = "display:block";
    changeBtn.current.style = "display:none";
    changeBtn2.current.style = "display:block";

    const newProfile = { ...profile, userName: name };

    if (changeInput.current.value === "") {
      alert("닉네임을 입력하세요.");
    } else {
      dispatch(__editUserName(newProfile));
    }
  };

  // 로그아웃 버튼 핸들러
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };
  
  return (
    <div>
      <Logout onClick={logoutHandler}>로그아웃</Logout>
      <ProfileText><span>{profile?.userName}</span>님의 프로필</ProfileText>
      <Section>
        <Article>
          ID: {profile?.userDi}
          <br></br>
          <div style={{ display: "flex" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              닉네임: 
              <input
                style={{ display: "none" }}
                ref={changeInput}
                value={name}
                onChange={inputNameHandler}
              />
              <span style={{ marginLeft: "5px" }} ref={userComment}>
                {profile?.userName}
              </span>
              <Btn
                style={{
                  display: "block",
                  marginLeft: "10px",
                  marginTop: "10px",
                }}
                ref={changeBtn2}
                type="button"
                value={name}
                onClick={changeNameHandler}
              >
                닉네임 변경
              </Btn>
              <Btn
                style={{ display: "none" }}
                ref={changeBtn}
                onClick={() =>
                  completeButtonHandler(changeNameHandler(profile))
                }
              >
                완료
              </Btn>
            </span>
          </div>
        </Article>
      </Section>
    </div>
  );
};
export default UserProfile;