import { useNavigate } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost } from "../../../modules/postsSlice";

const DetailPage = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // db.json에서 id값을 가져오기 id값 변경해주면됨
  const post = posts.find((post) => post.id === 1);

  // 삭제버튼
  const deletePostHandler = (postId) => {
    if (window.confirm("삭제하시겠습니까")) {
      dispatch(__deletePost(postId));
      navigate("/");
    }
  };

  return (
    <div>
      <div key={post?.id}>
        <h1>토론주제 :{post?.title}</h1>
        <h2>선택분류</h2>
        <p>
          A : {post?.categoryA} <input type="checkbox" />
        </p>
        <p>
          B : {post?.categoryB}
          <input type="checkbox" />
        </p>
        <p>like : {post?.like}</p>
        <button>수정</button>

        <button type="button" onClick={() => deletePostHandler(post?.id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
