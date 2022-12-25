import styled from "styled-components";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const SignUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    border: 1PX solid #000;
    padding: 30px;
    border-radius: 20px;

    h2 {
        margin: 0 0;
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
    width: 50%;

    h4 {
        margin: 20px 0 10px 0;  
    }

    input {
        height: 25px;
        padding: 5px 10px;
    }
`

const CheckMsg = styled.p`
    color: #f03e3e;
    margin: 10px 0 0 2px;
    font-size: 13.5px;
    display: none;
`

const Button = styled.button`
    width: 120px;
    height: 35px;
    border-radius: 20px;
    border: transparent;
    color: white;
    background-color: skyblue;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`

const ButtonBox = styled.div`
    margin-top: 15px;
`
export { Wrap, SignUpContainer, SignUpForm, InputBox, CheckMsg, Button, ButtonBox };