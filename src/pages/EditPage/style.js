import styled from "styled-components";

const EditPageDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const AddPostContainer = styled.div`
  width: 650px;
  height: 400px;

  padding: 20px 0;
  background-color: #ede4e0;
  opacity: 0.8;

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: lightgray;
  border-radius: 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center; */
`;

const AddPostForm = styled.form`
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding-bottom: 20px;
`;

const TitleInput = styled.input`
  width: 500px;
  height: 60px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  margin-bottom: 10px;
  font-size: 20px;
`;

const CategoryInput = styled.div`
  input {
    width: 300px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
  }
`;

const InputA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin-bottom: 5px;
  font-size: 20px;
`;

const InputB = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

const ChangeInput = styled.input`
  border: none;
  padding-left: 10px;
  font-size: 20px;
  margin-bottom: 15px;
`;

const ChangeInputTitle = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  width: 30px;
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: right;
  align-items: baseline;
`;

export {
  EditPageDiv,
  AddPostContainer,
  AddPostForm,
  TitleInput,
  CategoryInput,
  InputA,
  InputB,
  ChangeInput,
  AddBtn,
  ChangeInputTitle,
};
