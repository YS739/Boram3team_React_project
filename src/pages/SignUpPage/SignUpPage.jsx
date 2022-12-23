import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { __signUp } from "../../redux/modules/usersSlice";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const SignUpPage = () => {
  
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.users);

  const [userId, setUserId, onChangeUserIdHandler] = useInput();
  const [userPw, setUserPw, onChangeUserPwHandler] = useInput();

  const newUser = {
    id: uuidv4(),
    userId,
    userPw,
    // loggedIn이 로그인 여부 알려줌
    // 회원가입 시 바로 로그인 되도록 설정할 것이기 때문에 초기값이 true
    loggedIn: true,
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(__signUp(newUser));
    alert("가입완료");

    setUserId('');
    setUserPw('');
  };

  if (error) {
        return <div>{error.massage}</div>
  }

  return (
    <div>
      <h3>회원가입</h3>
      <form>
        <span>아이디</span>
        <input type="text" id="userId" name="userId" method="post"
        value={userId} onChange={onChangeUserIdHandler}/>
        <span>비밀번호</span>
        <input type="text" id="userPw" name="userPw" method="post"
        value={userPw} onChange={onChangeUserPwHandler}/>
        <button onClick={addHandler}>가입하기</button>
      </form>
    </div>
  )
};

export default SignUpPage;
