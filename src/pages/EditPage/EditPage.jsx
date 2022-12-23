import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { __editPost } from "../../redux/modules/postsSlice";

const EditPage = () => {
  const dispatch = useDispatch();

  // TODO: 새로고침 오류 방지 - useEffect, __getPost 쓰기
  // useEffect(()=>{
  //   dispatch(__getPost())
  // },[dispatch]);

  // FIXME: 본문 등록 페이지가 reducer 등등으로 연결이 안 되어 있어서 state가 빈 배열이 나옴
  // __getPost함수를 만들어 useEffect를 써야함
  const globalPost = useSelector((state) => state.posts);
  console.log(globalPost);

  const param = useParams();
  const { error } = useSelector((state) => state.posts);

  const thePost = globalPost.find((post) => post.id === param.id);
  const navigate = useNavigate(`/${thePost.id}`);

  // TODO: useInput custom hook 쓰기
  const [title, setTitle] = useState();
  const [aContents, setAContents] = useState();
  const [bContents, setBContents] = useState();

  if (error) {
    return <div>{error.massage}</div>;
  }

  const editPostHandler = (e) => {
    e.preventDefault();
    if (title && aContents && bContents) {
      if (window.confirm("수정하시겠습니까?") === true) {
        navigate();
        const editPost = {
          id: thePost.id,
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
            <button>수정 완료</button>
          </section>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
