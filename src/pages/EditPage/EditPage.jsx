import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { __editPost, __getPosts } from "../../redux/modules/postsSlice";
import {
  AddPostContainer,
  AddPostForm,
  CategoryInput,
  InputA,
  InputB,
  TitleInput,
} from "./style";
import CustomButton from "../../redux/components/CustomButtons";
const EditPage = () => {
  const dispatch = useDispatch();

  // 새로고침 오류 방지
  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  const { posts, error } = useSelector((state) => state.posts);
  const param = useParams();

  const thePost = posts?.find((post) => post.id === param.id);
  const navigate = useNavigate();

  // TODO: useInput custom hook 쓰기
  const [title, setTitle] = useState(thePost?.title);
  const [categoryA, setCategoryA] = useState(thePost?.categoryA);
  const [categoryB, setCategoryB] = useState(thePost?.categoryB);

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

  // input창에 새로운 값 입력할 때
  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const categoryAChangeHandler = (e) => {
    e.preventDefault();
    setCategoryA(e.target.value);
  };

  const categoryBChangeHandler = (e) => {
    e.preventDefault();
    setCategoryB(e.target.value);
  };

  // 수정 완료 버튼 눌렀을 때
  const editPostHandler = (e) => {
    e.preventDefault();
    if (title && categoryA && categoryB) {
      if (window.confirm("수정하시겠습니까?")) {
        navigate(`/${thePost?.id}`);
        const editPost = {
          id: thePost?.id,
          title,
          categoryA,
          categoryB,
        };
        dispatch(__editPost(editPost));
      }
    }

    if (!title) {
      document.getElementById("title").focus();
      alert("주제를 입력해주세요");
      return;
    }
    if (!categoryA) {
      document.getElementById("categoryA").focus();
      alert("A의 내용을 입력해 주세요");
      return;
    }
    if (!categoryB) {
      document.getElementById("categoryB").focus();
      alert("B의 내용을 입력해 주세요");
      return;
    }
  };

  return (
    <AddPostContainer>
      <AddPostForm onSubmit={editPostHandler}>
        <section>
          <h1>토론주제</h1>
          <TitleInput
            id="title"
            value={title}
            onChange={titleChangeHandler}
            autoFocus
          />
          <br></br>
          <CategoryInput>
            <h2>선택분류</h2>
            <InputA>
              <p>A</p> :
              <input
                id="categoryA"
                value={categoryA}
                onChange={categoryAChangeHandler}
              />
            </InputA>
            <InputB>
              <p>B</p> :
              <input
                id="categoryB"
                value={categoryB}
                onChange={categoryBChangeHandler}
              />
              <CustomButton>수정 완료</CustomButton>
            </InputB>
          </CategoryInput>
        </section>
      </AddPostForm>
    </AddPostContainer>
  );
};

export default EditPage;
