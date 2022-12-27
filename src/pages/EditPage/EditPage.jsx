import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { __editPost, __getPosts } from '../../redux/modules/postsSlice';
import {
  EditPageDiv,
  AddPostContainer,
  AddPostForm,
  CategoryInput,
  InputA,
  InputB,
  TitleInput,
  ChangeInput,
  ChangeInputTitle,
} from './style';
import CustomButton from '../../redux/components/CustomButtons';
import useInput from '../../hooks/useInput';

const EditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 새로고침 오류 방지
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  // 로그인하지 않았을 경우 메인으로 이동
  useEffect(() => {
    const currentUserDi = localStorage.getItem("id");
    if ( currentUserDi === null ) {
      navigate("/")
    }
  });

  const { posts, error } = useSelector((state) => state.posts);
  const param = useParams();

  const thePost = posts?.find((post) => post.id === param.id);

  //use Input
  const [title, setTitle, titleChangeHandler] = useInput();
  const [categoryA, setCategoryA, categoryAChangeHandler] = useInput();
  const [categoryB, setCategoryB, categoryBChangeHandler] = useInput();

  // 새로고침 하면 input에 본문의 데이터가 사라져서 추가한 부분
  useEffect(() => {
    if (posts.length < 1) return;
    const thePost = posts?.find((post) => post.id === param.id);
    setTitle(thePost?.title);
    setCategoryA(thePost?.categoryA);
    setCategoryB(thePost?.categoryB);
  }, [posts]);

  if (error) {
    return <div>{error.massage}</div>;
  }

  // 수정 완료 버튼 눌렀을 때
  const editPostHandler = (e) => {
    e.preventDefault();
    if (title && categoryA && categoryB) {
      if (window.confirm('수정하시겠습니까?')) {
        navigate(`/${thePost?.id}`);
        const editPost = {
          ...thePost,
          title,
          categoryA,
          categoryB,
        };
        dispatch(__editPost(editPost));
      }
    }

    if (!title) {
      document.getElementById('title').focus();
      alert('주제를 입력해주세요');
      return;
    }
    if (!categoryA) {
      document.getElementById('categoryA').focus();
      alert('A의 내용을 입력해 주세요');
      return;
    }
    if (!categoryB) {
      document.getElementById('categoryB').focus();
      alert('B의 내용을 입력해 주세요');
      return;
    }
  };

  return (
    <EditPageDiv>
      <AddPostContainer>
        <AddPostForm onSubmit={editPostHandler}>
          <section>
            <h1 style={{marginBottom: "10px"}}>토론 주제</h1>
            <TitleInput
              id='title'
              value={title}
              onChange={titleChangeHandler}
              autoFocus
            />
            <br></br>
            <CategoryInput>
              <h2 style={{marginBottom: "10px"}}>선택 분류</h2>
              <InputA>
                <ChangeInputTitle>A :</ChangeInputTitle>
                <ChangeInput
                  id='categoryA'
                  value={categoryA}
                  onChange={categoryAChangeHandler}
                />
              </InputA>
              <InputB>
                <ChangeInputTitle>B :</ChangeInputTitle>
                <ChangeInput
                  id='categoryB'
                  value={categoryB}
                  onChange={categoryBChangeHandler}
                />
              </InputB>
              <CustomButton>수정 완료</CustomButton>
            </CategoryInput>
          </section>
        </AddPostForm>
      </AddPostContainer>
    </EditPageDiv>
  );
};

export default EditPage;
