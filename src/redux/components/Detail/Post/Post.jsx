import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DetailPage = () => {
  const globalPosts = useSelector((state) => state.posts.posts);

  const navigate = useNavigate();

  // const getPost = async () => {
  //   const { data } = await axios.get("http://localhost:3005/post");
  //   setPosts(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  // };

  // useEffect(() => {
  //   // effect 구문에 생성한 함수를 넣어 실행합니다.
  //   __getPost();
  // }, []);

  // const deletePost = (postId) => {
  //   alert("삭제하시겠습니까?");
  //   axios.delete(`http://localhost:3005/post/${postId}`);
  //   navigate("/");
  // };

  return (
    <div>
      {globalPosts?.map((post) => {
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
            <button type="button">삭제</button>
          </div>
        );
      })}
    </div>
  );
};

export default DetailPage;
