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
  background-color: #fa7d43;
  color: white;

  border: 2px solid #fa7d43;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.span`
  background-color: #179bbf;
  color: white;

  border: 2px solid #179bbf;
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

  button {
    background-color: white;
    color: black;
    border: 2px solid black;
    border-radius: 30px;
    padding: 0 15px;

    :hover {
      background-color: black;
      color: white;
      transition: 1s;
    }
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
