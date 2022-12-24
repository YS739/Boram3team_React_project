import styled from "styled-components";

const Wrap = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

const CategoryStyle = styled.span`
  background-color: ${(props) => props.color};
  color: white;
`;

export { Wrap, CategoryStyle };
