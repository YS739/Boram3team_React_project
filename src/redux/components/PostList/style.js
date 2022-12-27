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
  border-bottom: 2px solid black;
  width: 800px;
`;

const Article = styled.article`
  border-radius: 20px;
  margin: 40px;
  font-size: 30px;
  width: 800px;
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  padding: 0 30px 30px 30px;
  :hover {
    transform: scale(1.01);
    border-radius: 10px;
  }
`;

const PostContainer = styled.div`
  display: flex;
  height: 100%;
`;

const PostBox = styled.div`
  width: 100%;
  cursor: pointer;
`;

const PostTitle = styled.div`
  display: flex;
  /* text-align: center; */
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 0 30px 30px 30px;
  margin-bottom: 10px;
  font-weight: bold;

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
  margin-bottom: 5px;
`;
const LikeDiv = styled.button`
  border: none;
  background-color: transparent;
  position: relative;
  right: -90%;
  text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
`;
const PostLike = styled.div`
  margin-top: 15px;
  margin-left: 30px;
  font-size: 40px;
  display: ${(props) => props.dp};
  cursor: pointer;
`;

const GageBar = styled.div`
  height: 40px;
  margin: 5px;
  display: flex;

  span {
    margin-bottom: 5px;
  }
`;

const BarA = styled.div`
  width: ${(props) => `${props.bg}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  text-align: center;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
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
  LikeDiv,
  PostTitle,
  PostCategory,
  CategoryContent,
  CategoryBox,
};
