import styled from "styled-components";

const Section = styled.section`
  border: 5px solid red;
`;

const H1 = styled.h1`
  margin-left: 10px;
  font-size: 30px;
`;

const Article = styled.article`
  border: 5px solid black;
  margin: 10px;
  font-size: 30px;
  display: flex;
  justify-content: space-between;
  :hover {
    background-color: lightblue;
  }
`;

const PostBox = styled.div`
  border: 1px solid gray;
  width: 85%;
  margin-right: 10px;
  padding: 10px;
`;
const PostLike = styled.div`
  border: 1px solid green;
`;

export { Article, Section, H1, PostBox, PostLike };
