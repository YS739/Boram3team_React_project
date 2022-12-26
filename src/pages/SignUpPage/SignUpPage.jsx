import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getUsers,__signUp } from "../../redux/modules/usersSlice";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { Wrap, SignUpContainer, SignUpForm, InputBox, CheckMsg, Button, ButtonBox, SwitchText } from "./style";

const SignUpPage = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
      dispatch(__getUsers())
  }, [dispatch]);

  const { error, users } = useSelector((state) => state.users);

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const userId_input = useRef();
  const userPw_input = useRef();
  const userName_input = useRef();
  const userId_msg = useRef();
  const userPw_msg = useRef();
  const userName_msg = useRef();
  const singUpBtn = useRef();

  // FIXME: input 문제 해결 위해 추가했는데 콘솔이 두 번씩 찍힘
  useEffect(() => {
    // 첫 렌더링 시 form help text 띄우지 않도록 설정
    if (!userId) return ; 
    onChangeUserIdHandler()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  useEffect(() => {
    if (!userPw) return ; 
    onChangeUserPwHandler()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userPw]);

  // TODO: 커스텀 훅 가능?
  // 아이디 입력 시 유효성 검사 및 중복 아이디 확인
  const onChangeUserIdHandler = (e) => {
   
    setUserId(userId_input.current.value);
    
    const idRegExp = /^[a-z0-9]{4,12}$/; 
    // 중복 아이디인지 확인
    const checkUserId = users.find((user) => user.userId === userId);

    if (!idRegExp.test(userId)) {
      userId_msg.current.innerText = "4~12자의 영문 소문자, 숫자로 작성 가능합니다."
      userId_msg.current.style = "display:block"
      userId_input.current.focus();
      return false;

    } else if (checkUserId !== undefined) {
      userId_msg.current.innerText = "이미 등록된 아이디입니다. 다시 입력해주세요."
      userId_msg.current.style = "display:block"
      userId_input.current.focus();
      return false;

    } else {
      userId_msg.current.innerText = "사용 가능한 아이디입니다."
      userId_msg.current.style = "display:block; color:green"
      return true;
    }
  };

  const onChangeUserPwHandler = () => {

    setUserPw(userPw_input.current.value);

    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    if (!pwRegExp.test(userPw)) {
      userPw_msg.current.innerText = "비밀번호는 8~20자의 소문자 및 숫자로 작성 가능합니다."
      userPw_msg.current.style = "display:block"
      userPw_input.current.focus();
      return false;

    } else {
      userPw_msg.current.innerText = "올바른 비밀번호 형식입니다."
      userPw_msg.current.style = "display:block; color:green"
      return true;
    }
  };

  const onChangeUserNameHandler = () => {
    setUserName(userName_input.current.value);
    // const isAllValid = !(onChangeUserIdHandler() === true && onChangeUserPwHandler() === true && userId && userPw && userName)
    // console.log(isAllValid)
    // if (isAllValid) {
    //   singUpBtn.current.disabled = false;
    //   singUpBtn.current.style = "background-color: skyblue"
    // }
  };

  // [회원가입] 버튼 클릭 시 작동
  const addHandler = (e) => {

    const newUser = {
      id: uuidv4(),
      userId,
      userPw,
      userName,
    };

    // 유효성 검사 조건 충족 및 input이 빈 칸이 아닐 때
    const isAllValid = onChangeUserIdHandler() === true && onChangeUserPwHandler() === true && userId && userPw && userName
    
    // 회원가입 성공
    if (isAllValid) {
      e.preventDefault();
    
      dispatch(__signUp(newUser));
      navigate("/")

      // 회원가입 성공하면 따로 로그인할 필요 없이 바로 로그인됨
      localStorage.clear();
      localStorage.setItem("id", newUser.id)

      // 가입 가능한 조건이 되면 가입하기 버튼이 활성화됨
      // FIXME: 클릭해야 작동하는 함수 안에 disabled 코드를 작성하니까 이상해짐
      // singUpBtn.current.disabled = false;
      // singUpBtn.current.style = "background-color: skyblue"
    } 
    
    // 아이디를 입력하지 않았을 때
    if (!userId) {
      e.preventDefault();
      userId_msg.current.innerText = "아이디를 입력하세요."
      userId_msg.current.style = "display:block"
      userId_input.current.focus();
      return false;
    }

    // 비밀번호를 입력하지 않았을 때
    if (!userPw) {
      e.preventDefault();
      userPw_msg.current.innerText = "비밀번호를 입력하세요."
      userPw_msg.current.style = "display:block"
      userPw_input.current.focus();
      return false;
    }

    // 닉네임을 입력하지 않았을 때
    if (!userName) {
      e.preventDefault();
      userName_msg.current.innerText = "닉네임을 입력하세요."
      userName_msg.current.style = "display:block"
      userName_input.current.focus();
      return false;
    }
  };

  if (error) {
        return <div>{error.massage}</div>
  }

  return (
    <Wrap>
      <SignUpContainer>
        <h2>회원가입</h2>
        <SignUpForm>
          <InputBox>
            <h4>아이디*</h4>
            <input type="text" id="userId" name="userId" method="post"
            ref={userId_input} value={userId} onChange={onChangeUserIdHandler} />
            <CheckMsg ref={userId_msg} />
          </InputBox>
          <InputBox>
            <h4>비밀번호*</h4>
            <input type="password" id="userPw" name="userPw" method="post"
            ref={userPw_input} value={userPw} onChange={onChangeUserPwHandler} />
            <CheckMsg ref={userPw_msg} />
          </InputBox>
          <InputBox>
            <h4>닉네임*</h4>
            <input type="text" id="userName" name="userName" method="post"
            ref={userName_input} value={userName} onChange={onChangeUserNameHandler} />
            <CheckMsg ref={userName_msg} />
          </InputBox>
          <ButtonBox>
            <Button ref={singUpBtn} onClick={addHandler}>가입하기</Button>    
          </ButtonBox>
          <SwitchText>이미 회원이신가요? 
            <span onClick={() => navigate("/login")}>로그인</span>
          </SwitchText>
        </SignUpForm>
      </SignUpContainer>
    </Wrap>
  )
};

export default SignUpPage;