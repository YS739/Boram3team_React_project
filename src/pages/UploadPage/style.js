import styled from "styled-components";

const PageDiv = styled.div`
  max-width: 1200px;
  min-width: 800px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const UpLoadPageTitle = styled.h1`
  margin-bottom: 10px;
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
  font-size: 20px;
`;

const CategoryInput = styled.div`
  input {
    width: 400px;
    height: 50px;
    border-radius: 10px;
    border: none;
  }

  h2 {
    margin-bottom: 10px;
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

const InputContent = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-right: 10px;
  width: 30px;
`;

const ContetInput = styled.input`
  border: none;
  padding-left: 10px;
  font-size: 20px;
  margin-bottom: 15px;
`;

const AddBtn = styled.div`
  display: flex;
  justify-content: right;
  align-items: baseline;
`;

export {
  AddBtn,
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
