import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { __editPost } from "../../redux/modules/postsSlice";

const EditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // TODO: 새로고침 오류 방지 - useEffect, __getPost 쓰기
  // useEffect(()=>{
  //   dispatch()
  // })

  // TODO: useInput custom hook 쓰기
  const [title, setTitle] = useState();
  const [aContents, setAContents] = useState();
  const [bContents, setBContents] = useState();

  const editPostHandler = (e) => {
    e.preventDefault();

    if (title && aContents && bContents) {
      if (window.confirm("수정하시겠습니까?") === true) {
        navigate("/upload");
        const editPost = {
          id: uuidv4(), //TODO: comment.id 등으로 바꾸기
          title,
          aContents,
          bContents,
        };
        dispatch(__editPost(editPost));
      }
    }

    if (!title) {
      document.getElementById("title").focus();
      alert("주제를 입력해주세요");
      return;
    }
    if (!aContents) {
      document.getElementById("aContents").focus();
      alert("A의 내용을 입력해 주세요");
      return;
    }
    if (!bContents) {
      document.getElementById("bContents").focus();
      alert("B의 내용을 입력해 주세요");
      return;
    }
  };

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const aContentsChangeHandler = (e) => {
    setAContents(e.target.value);
  };

  const bContentsChangeHandler = (e) => {
    setBContents(e.target.value);
  };

  return (
    <div>
      <div>
        <form onSubmit={editPostHandler}>
          <section>
            <h1>토론주제</h1>
            <input id="title" value={title} onChange={titleChangeHandler} />
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
            <button>수정하기</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
