import { useDispatch, useSelector } from "react-redux";
import { Article, Section, H1 } from "./style";
import { __editUserName } from "../../modules/usersSlice";
import useInput from "../../../hooks/useInput";
import CustomButtons from "../CustomButtons";

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
    setName("");
  };

  return (
    <Section>
      <H1>마이 프로필</H1>
      <Article>
        ID:{profile?.userDi}
        <div>닉네임은 {profile?.userName}입니다.</div>
        <input value={name} onChange={inputNameHandler} />
        <CustomButtons
          btnName="name"
          onClick={() => changeNameHandler(profile)}
        >
          닉네임 변경
        </CustomButtons>
      </Article>
    </Section>
  );
};
export default UserProfile;
