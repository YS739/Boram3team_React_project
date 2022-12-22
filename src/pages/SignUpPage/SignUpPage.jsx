import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { __signUp } from "../../redux/modules/usersSlice";

const SignUpPage = () => {
  
  const dispatch = useDispatch();

  const { error } = useSelector((state) => state.users);

  const [ID, setID, onChangeIDHandler] = useInput();
  const [PW, setPW, onChangePWHandler] = useInput();

  const newUser = {
    ID,
    PW,
    user: true,
  };

  const addHandler = (e) => {
    e.preventDefault();
    dispatch(__signUp(newUser));
    alert("가입완료");

    setID('');
    setPW('');
  };

  if (error) {
        return <div>{error.massage}</div>
  }

  return (
    <div>
      <h3>회원가입</h3>
      <form>
        <span>아이디</span>
        <input type="text" id="ID" name="ID" method="post"
        vlaue={ID} onChange={onChangeIDHandler}/>
        <span>비밀번호</span>
        <input type="text" id="PW" name="PW" method="post"
        vlaue={PW} onChange={onChangePWHandler}/>
        <button onClick={addHandler}>가입하기</button>
      </form>
    </div>
  )
};

export default SignUpPage;
