import styled from "styled-components";

const Container = styled.section`
  box-sizing: border-box;
`;
const UserName = styled.div`
  width: 91%;
  margin-left: 40px;
  text-align: right;
  font-size: 20px;
  font-weight: 700;
`;
const PostBox = styled.div`
  width: 800px;
  height: 100%;
  border-radius: 10px;
  margin: 10px auto;
  padding: 10px;
  font-size: 20px;
  background-color: ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;

const PostTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CategoryBox = styled.div`
  padding: 0 20px 20px 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;

const TitleLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  color: ${(props) => props.font};
`;

const PostLikeBox = styled.div`
  width: 5%;
  margin-left: 40px;
  display: flex;
  align-items: center;

  article {
    display: flex;
    flex-direction: column;
    margin: 0;
    text-shadow: -1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000;
    font-size: 40px;
  }
  div {
    margin: 0;
  }
`;

const PostLike = styled.div`
  font-size: 25px;
  display: ${(props) => props.dp};
  text-align: center;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  div {
    min-width: 300px;
    font-size: 25px;
    font-weight: 800;
    margin: 0 10px;
    text-align: center;
    padding: 10px;
  }

  span {
    color: black;
  }
`;

const EditButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`;

const EditDeleteBtn = styled.div`
  display: ${(props) => props.dp};
  margin-right: 30px;
`;

const GageBar = styled.div`
  border: none;
  height: 40px;
  margin: 30px 5px 5px 5px;
  display: flex;
`;

const BarA = styled.div`
  width: ${(props) => `${props.bg}%`};
  height: 100%;
  background-color: ${(props) => props.color};
  text-align: center;
`;

export {
  PostBox,
  TitleLikeContainer,
  PostLikeBox,
  PostLike,
  Categories,
  EditButtons,
  EditDeleteBtn,
  GageBar,
  BarA,
  PostTitle,
  CategoryBox,
  Container,
  UserName,
};
