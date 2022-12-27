import styled from "styled-components";

const Section = styled.section`

`;
const H1 = styled.h1`
  margin-left: 10px;
  font-size: 30px;
`;

const Article = styled.article`
  border: 1px solid gray;
  border-radius :20px;
  padding :20px;
  margin: 10px 10px 30px 10px;
  font-size: 30px;
  :hover {
    background-color: lightblue;
  }
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PostBox = styled.div`

  width: 85%;
  margin-right: 10px;
  padding: 10px;
`;
const PostLike = styled.div`

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
