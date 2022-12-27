import styled from "styled-components";

const PostBox = styled.div`
  width: 800px;
  height: 350px;
  border: 2px solid navy;
  margin: 20px auto;
`;

const EditDeleteBtn = styled.div`
  display: ${(props) => props.dp};
`;

const GageBar = styled.div`
  border: 1px solid gray;
  height: 40px;
  margin: 5px;
  display: flex;
`;

const BarA = styled.div`
  width: ${(props) => `${props.bg}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  text-align: center;
`;

export { PostBox, EditDeleteBtn, GageBar, BarA };
