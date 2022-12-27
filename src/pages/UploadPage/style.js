import styled from 'styled-components';

const PageDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const UpLoadPageTitle = styled.h1``;

const AddPostContainer = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 70vh;
  background-color: lightgray;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`;

const CategoryInput = styled.div`
  input {
    width: 200px;
    height: 40px;
    border-radius: 10px;
    border: none;
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

const InputContent = styled.h2`
  font-weight: 700;
  margin-right: 10px;
`;

const ContetInput = styled.input`
  /* width: 0px; */
  margin-right: 180px;
  padding-left: 10px;
`;

export {
  PageDiv,
  UpLoadPageTitle,
  AddPostContainer,
  AddPostForm,
  TitleInput,
  CategoryInput,
  InputA,
  InputB,
  InputContent,
  ContetInput,
};
