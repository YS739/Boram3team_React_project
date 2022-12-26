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
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostBox = styled.div`
  border: 1px solid gray;
  width: 85%;
  margin-right: 10px;
  padding: 10px;
  :hover {
    background-color: lightblue;
  }
`;
const PostLike = styled.div`
  border: 1px solid green;
  :hover {
    font-size: 40px;
  }
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

export {
  Article,
  Section,
  H1,
  PostBox,
  PostLike,
  PostContainer,
  GageBar,
  BarA,
};
