import styled from "styled-components";

const CommentContainer = styled.div`
  width: 800px;
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
  justify-content: space-around;
  align-items: center;
`;

const CategoryA = styled.span`
  width: 250px;
  height: 100%;
  background-color: #ec5858;
  color: white;

  box-shadow: 0 0 1px 3px #ec5858;
  border: 2px solid #ec5858;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.span`
  width: 250px;
  height: 100%;
  background-color: #3e6d9c;
  color: white;

  box-shadow: 0 0 1px 3px #3e6d9c;
  border: 2px solid #3e6d9c;
  border-radius: 10px;
  padding: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    width: 400px;
    height: 50px;
    margin-right: 20px;
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
