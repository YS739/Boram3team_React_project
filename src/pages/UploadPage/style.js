import styled from "styled-components";

const AddPostContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  background-color: lightgray;
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

export {
  AddPostContainer,
  AddPostForm,
  TitleInput,
  CategoryInput,
  InputA,
  InputB,
};
