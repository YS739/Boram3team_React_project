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

const CategoryBox = styled.div`
  width: 700px;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export { CommentsBox, CategoryStyle, CategoryA, CategoryB, CategoryBox };
