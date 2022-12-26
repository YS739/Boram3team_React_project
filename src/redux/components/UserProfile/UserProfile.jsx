import { useDispatch, useSelector } from "react-redux";
import { Article, Section, H1, Btn } from "./style";
import { __editUserName } from "../../modules/usersSlice";
import useInput from "../../../hooks/useInput";

const UserProfile = () => {
  const { users } = useSelector((state) => state.users);
  const currentUserDi = localStorage.getItem("id");
  const profile = users.find((user) => user.id === currentUserDi);
  const dispatch = useDispatch();

  // //useINput
  const [name, setName, inputNameHandler] = useInput();

  const changeNameHandler = (profile) => {
    const newProfile = { ...profile, userName: name };
    dispatch(__editUserName(newProfile));
  };

  return (
    <Section>
      <H1>마이 프로필</H1>
      <Article>
        ID:{profile?.userDi} 입니다. 닉네임은 {profile?.userName}입니다.
        <input value={name} onChange={inputNameHandler} />
        <Btn onClick={() => changeNameHandler(profile)}>닉네임 변경</Btn>
      </Article>
    </Section>
  );
};
export default UserProfile;
