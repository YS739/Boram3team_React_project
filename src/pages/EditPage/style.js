import styled from 'styled-components';

const EditPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
`;

const AddPostContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  background-color: lightgray;
  border-radius: 20px;
  height: 70vh;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
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
  height: 40px;
  border-radius: 10px;
  border: none;
  padding-left: 10px;
  margin-bottom: 10px;
`;

const CategoryInput = styled.div`
  input {
    width: 200px;
    height: 40px;
    border-radius: 10px;
  }
`;

const InputA = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
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
  margin-right: 180px;
`;

const ChangeInputTitle = styled.h2`
  margin-right: 15px;
  margin-bottom: 20px;
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
  ChangeInputTitle,
};
