import styled from "styled-components";

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;

const H1 = styled.h1`
  margin-bottom: 15px;
  margin-left: 10px;
  font-size: 30px;
  padding-left: 10px;
  margin-left: 180px;
  border-bottom: 1px solid gray;
  width: 60%;
`;

const Article = styled.article`
  border-radius: 10px;
  margin: 40px;
  font-size: 30px;
  width: 70%;
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  padding: 10px;
  :hover {
    transform: scale(1.02);
    border-radius: 10px;
  }
`;

const PostContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PostBox = styled.div`
  width: 100%;
  padding: 10px;
  cursor: pointer;
`;

const PostTitle = styled.div`
  display: flex;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  height: 150px;
  padding: 0 30px 30px 50px;

  color: ${(props) => props.font};
`;
const CategoryBox = styled.div`
  padding: 40px 20px 40px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;
const PostCategory = styled.div`
  display: flex;
  text-align: center;
`;
const CategoryContent = styled.div`
  width: 50%;
  text-align: center;
  border-right: ${(props) => props.br};
  font-weight: bold;
`;
const LikeDiv = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: -90%;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`;
const PostLike = styled.div`
  font-size: 40px;
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
  color: white;
  font-weight: bold;
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
  LikeDiv,
  PostTitle,
  PostCategory,
  CategoryContent,
  CategoryBox,
};
