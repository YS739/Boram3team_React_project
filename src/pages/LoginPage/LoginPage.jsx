import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUsers } from "../../redux/modules/usersSlice";
import useInput from "../../hooks/useInput";

const LoginPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getUsers())
    }, [dispatch]);

    const { error, users } = useSelector((state) => state.users);

    const [userId, setUserId, onChangeUserIdHandler] = useInput();
    const [userPw, setUserPw, onChangeUserPwHandler] = useInput();

    // 어느 페이지든 현재 로그인한 유저의 id를 가져오고 싶을 때
    // let logeedInUseId = localStorage.getItem("id");
    // console.log(logeedInUseId)

    const logInHandler = (e) => {
        e.preventDefault();

        // users에서 특정 유저의 userId와 userPw가 모두 일치하는지 확인한다.
        const user = users.find((user) => user.userId === userId && user.userPw === userPw)

        // 일치하지 않을 때
        if (user === undefined) {
            alert("로그인 실패")

        // 모두 일치할 때
        } else {
            alert("로그인 성공")

            // 로그인한 특정 유저의 id를 localStorage에 저장함
            // 저장하는 이유는 어느 페이지에 가든 현재 로그인한 유저의 id를 불러오기 위해서
            localStorage.clear();
            localStorage.setItem("id", user.id)
            
            // 로그인 성공하면 input 창 비우기
            setUserId('');
            setUserPw('');
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
        <div>
            <h3>로그인</h3>
            <form>
                <span>아이디</span>
                <input type="text" id="userId" name="userId" method="post"
                value={userId} onChange={onChangeUserIdHandler}/>
                <span>비밀번호</span>
                <input type="password" id="userPw" name="userPw" method="post"
                value={userPw} onChange={onChangeUserPwHandler}/>
                <button onClick={logInHandler}>로그인하기</button>
                <button onClick={logoutHandler}>로그아웃</button>
            </form>
        </div>
    )
};

export default LoginPage;