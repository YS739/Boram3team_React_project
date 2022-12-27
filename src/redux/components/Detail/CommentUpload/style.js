import styled from "styled-components";

const CommentContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CategoryA = styled.span`
  background-color: #ec5858;
  color: white;

  border: 2px solid #ec5858;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.span`
  background-color: #3e6d9c;
  color: white;

  border: 2px solid #3e6d9c;
  border-radius: 10px;
  padding: 10px;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

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
