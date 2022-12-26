import { useDispatch, useSelector } from "react-redux";
import { Article, Section, H1, Btn } from "./style";
import { useState } from "react";
import { __editUserName } from "../../modules/usersSlice";

const UserProfile = () => {
  const { users } = useSelector((state) => state.users);
  const currentUserId = localStorage.getItem("id");
  const profile = users.find((user) => user.id === currentUserId);
  const dispatch = useDispatch();
  const [name, setName] = useState(profile?.userName);

  const inputNameHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const changeNameHandler = (profile) => {
    const newProfile = { ...profile, userName: name };
    dispatch(__editUserName(newProfile));
  };

  return (
    <Section>
      <H1>마이 프로필</H1>
      <Article>
        ID:{profile?.userId} 입니다. 닉네임은 {profile?.userName}입니다.
        <input value={name} onChange={inputNameHandler} />
        <Btn onClick={() => changeNameHandler(profile)}>닉네임 변경</Btn>
      </Article>
    </Section>
  );
};
export default UserProfile;
