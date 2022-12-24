import styled from "styled-components";

const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CategoryA = styled.span`
  background-color: red;
  color: white;
`;

const CategoryB = styled.span`
  background-color: blue;
  color: white;
`;

export { CommentForm, CategoryA, CategoryB };
