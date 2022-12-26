import styled from "styled-components";

const PostBox = styled.div`
  width: 800px;
  height: 250px;
  border: 2px solid navy;
  margin: 20px auto;
`;

const EditDeleteBtn = styled.div`
  display: ${(props) => props.dp};
`;

export { PostBox, EditDeleteBtn };
