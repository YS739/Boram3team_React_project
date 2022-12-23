import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUsers, __switchLoggedIn } from "../../redux/modules/usersSlice";
import useInput from "../../hooks/useInput";

const LoginPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getUsers())
    }, [dispatch]);

    const { error, users } = useSelector((state) => state.users);

    const [userId, setUserId, onChangeUserIdHandler] = useInput();
    const [userPw, setUserPw, onChangeUserPwHandler] = useInput();

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

            const switchUser = {
                id: user.id,
                userId: user.userId,
                userPw: user.userPw,
                loggedIn: true,
            }

            // 로그인 성공하면 loggedIn을 true로 변경함
            dispatch(__switchLoggedIn(switchUser))
        }

        setUserId('');
        setUserPw('');
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
                <input type="text" id="userPw" name="userPw" method="post"
                value={userPw} onChange={onChangeUserPwHandler}/>
                <button onClick={logInHandler}>로그인하기</button>
            </form>
        </div>
    )
};

export default LoginPage;