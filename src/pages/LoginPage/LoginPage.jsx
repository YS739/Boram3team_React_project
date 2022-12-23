import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getUsers } from "../../redux/modules/usersSlice";

const LoginPage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(__getUsers)
    }, [dispatch]);

    const { error, users } = useSelector((state) => state.users);

    if (error) {
        return <div>{error.massage}</div>
    }

    return (
        <div>
            <h3>로그인</h3>
            <form>
                <span>아이디</span>
                <input type="text" id="userId" name="userId" method="post"
                value={} onChange={}/>
                <span>비밀번호</span>
                <input type="text" id="userPw" name="userPw" method="post"
                value={} onChange={}/>
                <button onClick={}>가입하기</button>
            </form>
        </div>
    )
};

export default LoginPage;