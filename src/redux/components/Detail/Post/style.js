import styled from "styled-components";

const PostBox = styled.div`
  width: 800px;
  height: 100%;
  border: 2px solid navy;
  border-radius: 10px;
  margin: 20px auto;
  padding: 10px;
`;

const TitleLikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PostLikeBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  letter-spacing: 15px;
  h2 {
    margin: 0;
  }
`;

const PostLike = styled.div`
  font-size: 50px;
  color: red;
  display: ${(props) => props.dp};
`;

const Categories = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;

  div {
    font-size: 25px;
    font-weight: 800;
    margin: 0 10px;

    box-shadow: 0 0 3px 1px gray;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px;
  }

  span {
    color: gray;
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
`;

const GageBar = styled.div`
  border: none;
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
  PostBox,
  TitleLikeContainer,
  PostLikeBox,
  PostLike,
  Categories,
  EditButtons,
  EditDeleteBtn,
  GageBar,
  BarA,
};
