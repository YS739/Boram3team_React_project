import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUsers,__signUp } from "../../redux/modules/usersSlice";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { Wrap, SignUpContainer, SignUpForm, InputBox, CheckMsg, Button, ButtonBox } from "./style";

const SignUpPage = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(__getUsers())
  }, [dispatch]);

  const { error, users } = useSelector((state) => state.users);

  // const [userId, setUserId, onChangeUserIdHandler] = useInput();
  // const [userPw, setUserPw, onChangeUserPwHandler] = useInput();
  // const [userName, setUserName, onChangeUserNameHandler] = useInput();

  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");

  const userId_input = useRef();
  const userPw_input = useRef();
  const userName_input = useRef();
  const userId_msg = useRef();
  const userPw_msg = useRef();
  // const userName_msg = useRef();


  // TODO: 커스텀 훅 가능?
  const onChangeUserIdHandler = (e) => {
    setUserId(e.target.value);
    console.log(userId)

    const idRegExp = /^[a-z0-9]{4,12}$/; 
    const checkUserId = users.find((user) => user.userId === userId);

    if (!idRegExp.test(userId)) {
      // FIXME: 4글자를 입력해도 메시지가 뜸
      userId_msg.current.innerText = "4~12자의 영문 소문자, 숫자로 작성 가능합니다."
      userId_msg.current.style = "display:block"
      return false;

    } else if (checkUserId !== undefined) {
      userId_msg.current.innerText = "이미 등록된 아이디입니다. 다시 입력해주세요."
      userId_msg.current.style = "display:block"

    } else {
      userId_msg.current.innerText = "사용 가능한 아이디입니다."
      userId_msg.current.style = "display:block; color:green"
      return true;
    }
  };

  const onChangeUserPwHandler = (e) => {
    setUserPw(e.target.value);

    const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    if (!pwRegExp.test(userPw)) {
      userPw_msg.current.innerText = "비밀번호는 8~20자의 소문자 및 숫자로 작성 가능합니다."
      userPw_msg.current.style = "display:block"
      return false;

    } else {
      userPw_msg.current.innerText = "올바른 비밀번호 형식입니다."
      userPw_msg.current.style = "display:block; color:green"
      return true;
    }
  };

  const onChangeUserNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const newUser = {
    id: uuidv4(),
    userId,
    userPw,
    userName,
  };

  // 아이디 유효성 검사
  // const checkUserId = (userId) => {
  //   // 소문자, 숫자(4-10자리 입력)
  //   const idRegExp = /^[a-z0-9]{4,10}$/; 

  //   if (!idRegExp.test(userId)) {
  //     // alert("아이디는 4~10자의 영문 소문자, 숫자로 작성 가능합니다.")
  //     userId_msg.current.innerText = "4~10자의 영문 소문자, 숫자로 작성 가능합니다."
  //     userId_msg.current.style = "display:block"
  //     userId_input.current.focus();
  //     setUserId('');
  //     return false;
  //   }
  //   return true;
  // };

  // 비밀번호 유효성 검사
  // const checkUserPw = (userId) => {
  //   // 영문자+숫자(8~20자리 입력)
  //   const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

  //   if (!pwRegExp.test(userId)) {
  //     alert("비밀번호는 8~20자의 소문자 및 숫자로 작성 가능합니다.")
  //     userPw_input.current.focus();
  //     setUserPw('');
  //     return false;
  //   }
  //   return true;
  // };

  // [회원가입] 버튼 클릭 시 작동
  const addHandler = (e) => {

    // if (onChangeUserIdHandler() === true) {
    //   e.preventDefault();
    //   console.log("성공?");
    // } else {
    //   e.preventDefault();
    //   console.log("실패?");
    // }

    // 회원가입 성공
    if (userId && userPw && userName ) {
      e.preventDefault();

      // TODO: inputRef.current.disabled = true; 버튼 비활성화?
      
      dispatch(__signUp(newUser));
      alert("가입완료");

      setUserId('');
      setUserPw('');
      setUserName('');
    };

    // 아이디를 입력하지 않았을 때
    if (!userId) {
      e.preventDefault();
      alert("아이디를 입력하세요.")
      userId_input.current.focus();
      return false;
    }

    // 비밀번호를 입력하지 않았을 때
    if (!userPw) {
      e.preventDefault();
      alert("비밀번호를 입력하세요.")
      userPw_input.current.focus();
      return false;
    }

    // 닉네임을 입력하지 않았을 때
    if (!userName) {
      e.preventDefault();
      alert("닉네임을 입력하세요.")
      userName_input.current.focus();
      return false;
    }
  };

  // 아이디 중복 여부 체크
  const doubleCheckUserId = () => {
    const checkUserId = users.find((user) => user.userId === userId);
    if (checkUserId === undefined) {
      alert("사용 가능한 아이디입니다.")
    } else {
      alert("이미 등록된 아이디입니다. 다시 입력해주세요.")
    }
  };

  //   userId_input.current.style = "display:block"

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
            placeholder="아이디를 입력하세요."
            ref={userId_input} value={userId} onChange={onChangeUserIdHandler}/>
            <CheckMsg ref={userId_msg} />
          </InputBox>
          <InputBox>
            <h4>비밀번호*</h4>
            <input type="password" id="userPw" name="userPw" method="post"
            placeholder="비밀번호를 입력하세요."
            ref={userPw_input} value={userPw} onChange={onChangeUserPwHandler}/>
            <CheckMsg ref={userPw_msg} />
          </InputBox>
          <InputBox>
            <h4>닉네임*</h4>
            <input type="text" id="userName" name="userName" method="post"
            placeholder="닉네임을 입력하세요."
            ref={userName_input} value={userName} onChange={onChangeUserNameHandler}/>
          </InputBox>
          <ButtonBox>
            <Button onClick={addHandler}>가입하기</Button>    
          </ButtonBox>
          {/* <Button onClick={doubleCheckUserId}>아이디 중복 확인</Button>     */}
        </SignUpForm>
      </SignUpContainer>
    </Wrap>
  )
};

export default SignUpPage;