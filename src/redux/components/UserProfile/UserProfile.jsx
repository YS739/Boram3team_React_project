import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Article, Section, H1, Btn } from "./style";
import { useState } from "react";
import { __editUserName } from "../../modules/usersSlice";

const UserProfile = () => {
  const { users } = useSelector((state) => state.users);
  const currentUserDi = localStorage.getItem("id");
  const profile = users.find((user) => user.id === currentUserDi);
  const [name, setName] = useState(profile?.userName);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const inputNameHandler = (e) => {
    setName(e.target.value);
  };

  const changeNameHandler = (profile) => {
    const newProfile = { ...profile, userName: name };
    dispatch(__editUserName(newProfile));
  };

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/");
  };

  return (
    <Section>
      <H1>마이 프로필</H1>
      <Article>
        ID:{profile?.userDi} 입니다. 닉네임은 {profile?.userName}입니다.
        <input value={name} onChange={inputNameHandler} />
        <Btn onClick={() => changeNameHandler(profile)}>닉네임 변경</Btn>
        <Btn onClick={logoutHandler}>로그아웃</Btn>
      </Article>
    </Section>
  );
};
export default UserProfile;