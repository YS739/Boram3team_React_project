import styled from "styled-components";

const CommentForm = styled.form`
  width: 600px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    width: 100%;
  }
`;

const CategoryBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommentInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { CommentForm, CategoryBox, CommentInputBox };
