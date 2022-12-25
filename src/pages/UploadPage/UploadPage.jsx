import axios from "axios";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const UploadPage = () => {
  const [title, setTitle] = useState();
  const [categoryA, setcategoryA] = useState();
  const [categoryB, setcategoryB] = useState();
  const navigate = useNavigate();

  // 새로운 post
  const newPost = {
    id: uuidv4(),
    title: title,
    categoryA: categoryA,
    categoryB: categoryB,
    like: [],
  };
  //타이틀 input값
  const titleChange = (event) => {
    setTitle(event.target.value);
  };
  //categoryA input값
  const categoryAsChange = (event) => {
    setcategoryA(event.target.value);
  };
  //타categoryB이틀 input값
  const categoryBChange = (event) => {
    setcategoryB(event.target.value);
  };
  //등록버튼 누르면 input값 reset
  const inputReset = () => {
    setcategoryA("");
    setcategoryB("");
    setTitle("");
  };

  //추가하기 핸들러
  const addPostHandler = (post) => {
    //값이 모두 입력될때 실행될것들
    if (title && categoryA && categoryB) {
      inputReset();
      post.preventDefault();
      //값이 모두 입력되고 실행되면 navagate로 해당 생성된 id의 디테일페이지로 이동
      navigate(`/${newPost.id}`);
      return axios.post("http://localhost:3001/post", newPost);
    }
    if (!title) {
      post.preventDefault();
      document.getElementById("title").focus();
      alert("주제를 입력해주세요");
      return;
    }
    if (!categoryA) {
      post.preventDefault();
      document.getElementById("categoryA").focus();
      alert("A의 내용을 입력해 주세요");
      return;
    }
    if (!categoryB) {
      post.preventDefault();
      document.getElementById("categoryB").focus();
      alert("B의 내용을 입력해 주세요");
      return;
    }
  };

  return (
    <div>
      <form onSubmit={addPostHandler}>
        <section>
          <h1>토론주제</h1>
          <input id="title" value={title} onChange={titleChange} />
          <br></br>
          <h2>선택분류</h2>
          <p>A</p> :
          <input id="categoryA" value={categoryA} onChange={categoryAsChange} />
          <p>B</p> :
          <input id="categoryB" value={categoryB} onChange={categoryBChange} />
          <button>등록</button>
        </section>
      </form>
    </div>
  );
};

export default UploadPage;
