import styled from "styled-components";

const CommentsBox = styled.div`
  width: 91%;
  margin: 0 auto;
  margin-top: 15px;
`;

const CommentBox = styled.div`
  margin-bottom: 10px;
  border: 1px solid gray;
`;

const CategoryStyle = styled.div`
  background-color: ${(props) => props.color};
  color: white;
  width: 98%;
  margin-top: -24px;
  font-size: 25px;
  padding-left: 17px;
`;

// CommentEditDelete.jsx

const EditCommentsBox = styled.div`
  display: flex;
  flex-direction: column;
  div {
    font-size: 17px;
  }
`;

const Categories = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  /* align-items: center; */
  /* height: 100%; */
  margin: 10px;
  padding: 5px;
  display: ${(props) => props.dp};
`;

const CategoryA = styled.div`
  /* width: 200px; */
  height: 100%;
  margin-bottom: 10px;
  background-color: #ec5858;
  color: white;

  box-shadow: 0 0 1px 2px #ec5858;
  border: 2px solid #ec5858;
  border-radius: 3px;
  padding: 10px;
`;

const CategoryB = styled.div`
  /* width: 200px; */
  height: 100%;
  background-color: #3e6d9c;
  color: white;

  box-shadow: 0 0 1px 2px #3e6d9c;
  border: 2px solid #3e6d9c;
  border-radius: 3px;
  padding: 10px;
`;

const CommentBtnS = styled.div`
  display: flex;
  flex-direction: row;
  display: ${(props) => props.dp};
`;

const UserComment = styled.div`
  display: flex;
  padding-left: 15px;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: left;
  align-items: center;

  input {
    width: 500px;
    height: 40px;
    font-size: 17px;
  }
  div {
    font-weight: 800;
    font-size: 23px;
  }
  article {
    font-size: 20px;
    padding-left: 20px;
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
  CommentBox,
};
