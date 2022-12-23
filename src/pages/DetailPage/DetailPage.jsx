import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const [posts, setPosts] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate();

  const getPost = async () => {
    const { data } = await axios.get("http://localhost:3005/post");
    setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    getPost();
  }, []);

  const deletePost = (postId) => {
    alert("삭제하시겠습니까?");
    axios.delete(`http://localhost:3005/post/${postId}`);
    navigate("/");
  };

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h1>토론주제 :{post.title}</h1>
            <h2>선택분류</h2>
            <p>
              A : {post.aContent} <input type="checkbox" />
            </p>
            <p>
              B : {post.bContent}
              <input type="checkbox" />
            </p>
            <button>수정</button>
            <button type="button" onClick={() => deletePost(post.id)}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
