import styled from 'styled-components';

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

// CommentEditDelete.jsx
const Btn = styled.button`
  display: ${(props) => props.dp};
`;

const DelBtn = styled.button`
  display: ${(props) => props.dp};
`;

const CategoryBox = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: ${(props) => props.dp};
`;
const CategoryA = styled.span`
  background-color: #ec5858;
  color: white;

  border: 2px solid #ec5858;
  border-radius: 10px;
  padding: 10px;
`;

const CategoryB = styled.span`
  background-color: #3e6d9c;
  color: white;

  border: 2px solid #3e6d9c;
  border-radius: 10px;
  padding: 10px;
`;
export { Wrap, CategoryStyle, Btn, DelBtn, CategoryA, CategoryB, CategoryBox };
