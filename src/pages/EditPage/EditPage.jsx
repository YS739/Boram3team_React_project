import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { __editPost, __getPost } from "../../redux/modules/postsSlice";

const EditPage = () => {
  const dispatch = useDispatch();

  // 새로고침 오류 방지
  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);
  // TODO: 본문 클릭과 연결 되면 주석 해제
  // const param = useParams();
  const { error } = useSelector((state) => state.posts);

  // TODO: 본문 등록 페이지 구현 완료 되면 2를 param.id로수정하기
  const thePost = posts?.find((post) => post.id === 2);
  const navigate = useNavigate();

  // TODO: useInput custom hook 쓰기
  const [title, setTitle] = useState(thePost?.title); // thePost?.title
  const [aContents, setAContents] = useState(thePost?.aContents); // thePost.aContents
  const [bContents, setBContents] = useState(thePost?.bContents); // thePost.bContents

  useEffect(() => {
    if (posts.length < 1) return;

    // TODO: 본문 등록 페이지 구현 완료 되면 param.id 등 수정하기
    const thePost = posts?.find((post) => post.id === 2);
    // 새로고침 후 데이터가 들어왔을 때
    // input에 가져온 posts 데이터를 넣음
    setTitle(thePost?.title);
    setAContents(thePost?.aContents);
    setBContents(thePost?.bContents);
  }, [posts]);

  if (error) {
    return <div>{error.massage}</div>;
  }

  // input창에 새로운 값 입력할 때
  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  };

  const aContentsChangeHandler = (e) => {
    e.preventDefault();
    setAContents(e.target.value);
  };

  const bContentsChangeHandler = (e) => {
    e.preventDefault();
    setBContents(e.target.value);
  };

  // 수정 완료 버튼 눌렀을 때
  const editPostHandler = (e) => {
    e.preventDefault();
    if (title && aContents && bContents) {
      if (window.confirm("수정하시겠습니까?")) {
        navigate(`/${thePost?.id}`);
        const editPost = {
          id: thePost?.id,
          title,
          aContents,
          bContents,
        };
        dispatch(__editPost(editPost));
        // input 초기화
        setTitle("");
        setAContents("");
        setBContents("");
      }
    }

    if (!title) {
      // e.preventDefault();
      document.getElementById("title").focus();
      alert("주제를 입력해주세요");
      return;
    }
    if (!aContents) {
      // e.preventDefault();
      document.getElementById("aContents").focus();
      alert("A의 내용을 입력해 주세요");
      return;
    }
    if (!bContents) {
      // e.preventDefault();

      document.getElementById("bContents").focus();
      alert("B의 내용을 입력해 주세요");
      return;
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={editPostHandler}>
          <section>
            <h1>토론주제</h1>
            <input
              id="title"
              value={title}
              onChange={titleChangeHandler}
              autoFocus
            />
            <br></br>
            <h2>선택분류</h2>
            <p>A</p> :
            <input
              id="aContents"
              value={aContents}
              onChange={aContentsChangeHandler}
            />
            <p>B</p> :
            <input
              id="bContents"
              value={bContents}
              onChange={bContentsChangeHandler}
            />
            <button>수정 완료</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
