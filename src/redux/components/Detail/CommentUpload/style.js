import styled from "styled-components";

const CommentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CommentForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 15px;
  font-size: 20px;
`;

const CategoryA = styled.span`
  width: 41%;
  height: 100%;
  background-color: #ec5858;
  color: white;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  border: 1px solid #ec5858;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.span`
  width: 41%;
  height: 100%;
  background-color: #3e6d9c;
  color: white;

  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  border: 1px solid #3e6d9c;
  border-radius: 10px;
  padding: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;

  input {
    width: 76%;
    height: 50px;
    margin-right: 20px;
    font-size: 15px;
  }
`;

export {
  CommentContainer,
  CommentForm,
  CategoryBox,
  CategoryA,
  CategoryB,
  InputBox,
};
