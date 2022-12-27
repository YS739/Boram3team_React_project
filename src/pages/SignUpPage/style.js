import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 480px;
    /* border: 1PX solid #000; */
    padding: 30px;
    border-radius: 20px;
    margin: 20px 0;

    h2 {
        margin: 0;
        font-size: 30px;
    }
`

const SignUpForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 420px;
    background-image: url("https://www.flaticon.com/authors/prosymbols-premium");

    h4 {
        margin: 20px 0 10px 0;  
    }

    input {
        height: 35px;
        padding: 5px 15px;
        border: 1px solid #bfbfbf;
        font-size: 20px;
    }
`

const CheckMsg = styled.p`
    color: #f03e3e;
    margin: 10px 0 0 2px;
    font-size: 13.5px;
    display: none;
    font-size: 15px;
`

const Button = styled.button`
    width: 420px;
    height: 45px;
    border: transparent;
    color: white;
    background-color: skyblue;
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    font-size: 18px;
    border-radius: 30px;
    cursor: pointer;
`

const ButtonBox = styled.div`
    margin-top: 15px;
`

const SwitchText = styled.div`
    margin-top: 20px;

    span {
        text-decoration: underline;
        text-underline-position: under;
        cursor: pointer;
        margin-left: 7px;

        :hover{
            color: skyblue
        }
    }
`

export { Wrap, SignUpContainer, SignUpForm, InputBox, CheckMsg, Button, ButtonBox, SwitchText };