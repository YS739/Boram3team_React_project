import styled from "styled-components";

const Wrap = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin: 0 auto;
`;

const CategoryStyle = styled.span`
  background-color: ${(props) => props.color};
  color: white;

  border-radius: 6px;
  padding: 2px 10px;
`;

const UserComment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export { Wrap, CategoryStyle, UserComment };
