import styled from "styled-components";

const CommentBody = styled.div`
  width: 600px;

  margin: 0 auto;
`;

const CommentUser = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export { CommentBody, CommentUser };
