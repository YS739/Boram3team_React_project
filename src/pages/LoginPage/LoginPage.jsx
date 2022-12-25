import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getUsers } from "../../redux/modules/usersSlice";
import useInput from "../../hooks/useInput";
import { Wrap, SignUpContainer, SignUpForm, InputBox, CheckMsg, Button, ButtonBox } from "./style";


const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(__getUsers())
    }, [dispatch]);

    const { error, users } = useSelector((state) => state.users);

    const [userId, setUserId, onChangeUserIdHandler] = useInput();
    const [userPw, setUserPw, onChangeUserPwHandler] = useInput();

    // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
    // let currentUserId = localStorage.getItem("id");
    // console.log(currentUserId)

    // const [userId, setUserId] = useState("");
    // const [userPw, setUserPw] = useState("");

    const userId_input = useRef();
    const userPw_input = useRef();
    const loginMsg = useRef();

    const logInHandler = (e) => {
        e.preventDefault();

        // 아이디를 입력하지 않았을 때
        if (!userId) {
            e.preventDefault();
            loginMsg.current.innerText = "아이디를 입력하세요."
            loginMsg.current.style = "display:block"
            userId_input.current.focus();
            return false;
        }

        // 비밀번호를 입력하지 않았을 때
        if (!userPw) {
            e.preventDefault();
            loginMsg.current.innerText = "비밀번호를 입력하세요."
            loginMsg.current.style = "display:block"
            userPw_input.current.focus();
            return false;
        }

        // users에서 특정 유저의 userId와 userPw가 모두 일치하는지 확인한다.
        const user = users.find((user) => user.userId === userId && user.userPw === userPw)

        // 일치하지 않을 때
        if (user === undefined) {
            loginMsg.current.innerText = "아이디 또는 비밀번호를 잘못 입력했습니다."
            return false;

        // 모두 일치할 때
        } else {
            alert("로그인 성공")
            navigate("/")

            // 로그인한 특정 유저의 id를 localStorage에 저장함
            // 저장하는 이유는 어느 페이지에 가든 현재 로그인한 유저의 id를 불러오기 위해서
            localStorage.clear();
            localStorage.setItem("id", user.id)
        };
    };

    const logoutHandler = (e) => {
        e.preventDefault();
        alert("로그아웃 완료")
        localStorage.clear();

    };

    if (error) {
        return <div>{error.massage}</div>
    }

    return (
        <Wrap>
            <SignUpContainer>
                <h2>로그인</h2>
                <SignUpForm>
                    <InputBox>
                        <h4>아이디*</h4>
                        <input type="text" id="userId" name="userId" method="post"
                        placeholder="아이디를 입력하세요."
                        ref={userId_input} value={userId} onChange={onChangeUserIdHandler}/>
                        {/* <CheckMsg ref={userId_msg} /> */}
                    </InputBox>  
                    <InputBox>
                        <h4>비밀번호*</h4>
                        <input type="password" id="userPw" name="userPw" method="post"
                        placeholder="비밀번호를 입력하세요."
                        ref={userPw_input} value={userPw} onChange={onChangeUserPwHandler}/>
                        <CheckMsg ref={loginMsg} />
                    </InputBox>  
                    <ButtonBox>
                        <Button onClick={logInHandler}>로그인하기</Button>    
                        {/* TODO: 회원가입 이동 버튼 추가                  */}
                        {/* <button onClick={logoutHandler}>로그아웃</button> */}
                    </ButtonBox>
                </SignUpForm>
            </SignUpContainer>
        </Wrap>
    )
};

export default LoginPage;