import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const DetailPage = () => {
  const [posts, setPosts] = useState();

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3005/post");
    setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchTodos();
  }, []);

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post.id}>
            <h1>토론주제 :{post.title}</h1>
            <h2>선택분류</h2>
            <p>A : {post.aContent}</p>
            <br></br>
            <p>B : {post.bContent}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
