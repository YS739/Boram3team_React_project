import styled from "styled-components";

const EditPageDiv = styled.div`
  width: 100vw;
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
    width: 400px;
    height: 45px;
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

const ChangeInput = styled.input`
  border: none;
  padding-left: 10px;
  font-size: 20px;
  margin-bottom: 15px;
`;

const ChangeInputTitle = styled.span`
  color: white;
  min-width: 80px;
  max-height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 3px;
  font-weight: bold;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-top: -15px;
  padding-bottom: 7px;

  width: 30px;
  text-align: center;
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
