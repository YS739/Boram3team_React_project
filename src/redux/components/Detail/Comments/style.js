import styled from "styled-components";

const CommentsBox = styled.div`
  width: 600px;
  height: 400px;
  margin: 0 auto;
`;

const CategoryStyle = styled.span`
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 6px;
  padding: 2px 10px;
`;

// CommentEditDelete.jsx

const EditCommentsBox = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-top: 20px;
  }
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 100%;
  margin-top: 10px;

  display: ${(props) => props.dp};
`;

const CategoryA = styled.div`
  width: 200px;
  height: 100%;

  background-color: #ec5858;
  color: white;

  box-shadow: 0 0 1px 2px #ec5858;
  border: 2px solid #ec5858;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.div`
  width: 200px;
  height: 100%;
  background-color: #3e6d9c;
  color: white;

  box-shadow: 0 0 1px 2px #3e6d9c;
  border: 2px solid #3e6d9c;
  border-radius: 10px;
  padding: 10px;
`;

const CommentBtnS = styled.div`
  display: flex;
  flex-direction: row;

  display: ${(props) => props.dp};
`;

const UserComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  div {
    margin: 20px 0;
  }

  input {
    width: 500px;
    height: 40px;

    margin: 20px 0;
  }
`;

export {
  CommentsBox,
  EditCommentsBox,
  CategoryStyle,
  Categories,
  CategoryA,
  CategoryB,
  UserComment,
  CommentBtnS,
};
