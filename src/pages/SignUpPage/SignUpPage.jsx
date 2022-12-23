import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../../hooks/useInput";
import { __getUsers,__signUp } from "../../redux/modules/usersSlice";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const SignUpPage = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(__getUsers())
  }, [dispatch]);

  const { error, users } = useSelector((state) => state.users);

  const [userId, setUserId, onChangeUserIdHandler] = useInput();
  const [userPw, setUserPw, onChangeUserPwHandler] = useInput();
  const [userName, setUserName, onChangeUserNameHandler] = useInput();

  const userId_input = useRef();
  const userPw_input = useRef();
  const userName_input = useRef();

  const newUser = {
    id: uuidv4(),
    userId,
    userPw,
    userName,
    // 회원가입 시 바로 로그인 되도록 설정할 것이기 때문에 isLogin 초기값이 true
    isLogin: true,
  };

  // 아이디 유효성 검사
  const checkUserId = (userId) => {
    // 소문자, 숫자(4-10자리 입력)
    const idRegExp = /^[a-z0-9]{4,10}$/; 

    if (!idRegExp.test(userId)) {
      alert("아이디는 4~10자의 영문 소문자, 숫자로 작성 가능합니다.")
      userId_input.current.focus();
      setUserId('');
      return false;
    }
    return true;
  };

  // 비밀번호 유효성 검사
  const checkUserPw = (userId) => {
    // 영문자+숫자(8~20자리 입력)
    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    if (!pwRegExp.test(userId)) {
      alert("비밀번호는 8~20자의 소문자 및 숫자로 작성 가능합니다.")
      userPw_input.current.focus();
      setUserPw('');
      return false;
    }
    return true;
  };

  // [회원가입] 버튼 클릭 시 작동
  const addHandler = (e) => {

    if (!checkUserId(userId)) {
      e.preventDefault();
      return false;
    }
    if (!checkUserPw(userPw)) {
      e.preventDefault();
      return false;
    }

    if (userId && userPw && userName ) {
      e.preventDefault();
      
      dispatch(__signUp(newUser));
      alert("가입완료");

      setUserId('');
      setUserPw('');
      setUserName('');
    };

    if (!userId) {
      e.preventDefault();
      alert("아이디를 입력하세요.")
      userId_input.current.focus();
      return false;
    }

    if (!userPw) {
      e.preventDefault();
      alert("비밀번호를 입력하세요.")
      userPw_input.current.focus();
      return false;
    }

    if (!userName) {
      e.preventDefault();
      alert("닉네임을 입력하세요.")
      userName_input.current.focus();
      return false;
    }
  };

  const doubleCheckUserId = () => {
    const checkUserId = users.find((user) => user.userId === userId);
    if (checkUserId === undefined) {
      alert("사용 가능한 아이디입니다.")
    } else {
      alert("이미 등록된 아이디입니다. 다시 입력해주세요.")
    }
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
        ref={userId_input} value={userId} onChange={onChangeUserIdHandler}/>
        <span>비밀번호</span>
        <input type="password" id="userPw" name="userPw" method="post"
        ref={userPw_input} value={userPw} onChange={onChangeUserPwHandler}/>
        <span>닉네임</span>
        <input type="text" id="userName" name="userName" method="post"
        ref={userName_input} value={userName} onChange={onChangeUserNameHandler}/>
        <button onClick={addHandler}>가입하기</button>    
        <button onClick={doubleCheckUserId}>아이디 중복 확인</button>    
      </form>
    </div>
  )
};

export default SignUpPage;