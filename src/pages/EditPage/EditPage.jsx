import React, { useState } from "react";
import { useNavigate } from "react-router";
import { v4 as uuidv4 } from "uuid";

const EditPage = () => {
  // TODO: useInput custom hook 쓰기
  const [title, setTitle] = useState();
  const [aContents, setAContents] = useState();
  const [bContents, setBContents] = useState();

  const navigate = useNavigate();

  const editPostHandler = (e) => {
    e.preventDefault();

    if (title && aContents && bContents) {
      if (window.confirm("수정하시겠습니까?") === true) {
        navigate("/upload");

        // TODO: dispatch에 넣기(import 하기)
        const editPost = {
          id: uuidv4(), //TODO: comment.id 등으로 바꾸기
          title,
          aContents,
          bContents,
        };
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
