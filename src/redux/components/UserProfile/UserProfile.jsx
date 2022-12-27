import { useDispatch, useSelector } from "react-redux";
import { useRef, useState } from "react";
import { Article, Section, H1, Btn, Logout } from "./style";
import { __editUserName } from "../../modules/usersSlice";
import useInput from "../../../hooks/useInput";
import { useNavigate } from "react-router-dom";
import CustomButtons from "../CustomButtons";

const UserProfile = () => {
  const { users } = useSelector((state) => state.users);
  const currentUserDi = localStorage.getItem("id");
  const profile = users.find((user) => user.id === currentUserDi);
  const dispatch = useDispatch();
  const changeInput = useRef();
  const userComment = useRef();
  const changeBtn = useRef();
  const changeBtn2 = useRef();
  const [editDisplay, setEditDisplay] = useState("none");
  const [completeDisplay, setCompleteDisplay] = useState("none");
  const navigate = useNavigate();
  // //useINput
  const [name, setName, inputNameHandler] = useInput();

  //닉네임 변경 핸들러
  const changeNameHandler = (profile) => {
    const newProfile = { ...profile, userName: name };
    dispatch(__editUserName(newProfile));
    setName("");
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

  //로그아웃
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <Logout onClick={logoutHandler}>로그아웃</Logout>
      <H1>{profile?.userName}님의 마이페이지 입니다.</H1>
      <Section>
        <Article>
          ID : {profile?.userDi}
          <br></br>
          <div style={{ display: "flex" }}>
            <span style={{ display: "flex", alignItems: "center" }}>
              닉네임 :
              <input
                style={{ display: "none" }}
                dp={editDisplay}
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
                onClick={() => changeNameHandler(profile)}
              >
                닉네임 변경
              </Btn>
              <Btn
                style={{ display: "none" }}
                ref={changeBtn}
                dp={completeDisplay}
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
