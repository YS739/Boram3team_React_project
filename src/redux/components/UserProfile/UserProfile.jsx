import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Article, Section, EditBtn, ProfileText, Logout, ShBtn } from "./style";
import { __editUserName } from "../../modules/usersSlice";
import useInput from "../../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import CustomButtons from "../CustomButtons";

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
  const [completeDisplay, setCompleteDisplay] = useState("none");
  const [name, setName, inputNameHandler] = useInput();

  // 닉네임 변경 버튼 핸들러
  const changeNameHandler = (profile) => {
    changeInput.current.style = "display:block";
    userComment.current.style = "display:none";
    changeBtn.current.style = "display:block";
    changeBtn2.current.style = "display:none";
    setCompleteDisplay("block");
    changeInput.current.focus();
  };

  //완료버튼 핸들러
  const completeButtonHandler = (id) => {
    const newProfile = { ...profile, userName: name };
    changeInput.current.style = "display:none";
    userComment.current.style = "display:block";
    changeBtn.current.style = "display:none";
    changeBtn2.current.style = "display:block";
    if (changeInput.current.value === "") {
      alert("입력하삼");
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
    <div style={{ width: "800px" }}>
      <Logout onClick={logoutHandler}>로그아웃</Logout>
      <ProfileText>
        <span>{profile?.userName}</span>님의 프로필
      </ProfileText>
      <Section>
        <Article>
          ID : {profile?.userDi}
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
              <EditBtn
                ref={changeBtn2}
                type="button"
                value={name}
                onClick={changeNameHandler}
              >
                닉네임 변경
              </EditBtn>
              <EditBtn
                style={{ display: "none" }}
                ref={changeBtn}
                dp={completeDisplay}
                onClick={() =>
                  completeButtonHandler(changeNameHandler(profile))
                }
              >
                완료
              </EditBtn>
            </span>
          </div>
        </Article>
      </Section>
    </div>
  );
};
export default UserProfile;
