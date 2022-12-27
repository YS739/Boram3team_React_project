import styled from "styled-components";

const Section = styled.section`
  width: 800px;
`;
const H1 = styled.h2`
  margin: 5px 15px;
`;
const Article = styled.article`
  border: 1px solid gray;
  border-radius :20px;
  padding :20px;
  margin: 10px 10px 30px 10px;
  font-size: 30px;
  cursor: pointer;
  
  :hover {
    background-color: #e7f5ff;
  }
`;

const PostContainer = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 20px;
    margin: 9px 0 10px 5px;
    height: 10px;
  }
`;

const PostBox = styled.div`
  width: 85%;
  margin-right: 10px;
  padding: 10px;
  font-size: 23px;
`;

const PostLike = styled.div`
  font-size: 30px;
  color: red;
  display: ${(props) => props.dp};
  height: 40px;
`;

const GageBar = styled.div`
  height: 40px;
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
`;

const BarA = styled.div`
  width: ${(props) => `${props.bg}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
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
