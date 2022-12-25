import { useNavigate } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost } from "../../../modules/postsSlice";

const DetailPage = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id === 1);

  const deletePost = (postId) => {
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
          A : {post?.aContent} <input type="checkbox" />
        </p>
        <p>
          B : {post?.bContent}
          <input type="checkbox" />
        </p>
        <button>수정</button>
        <button type="button" onClick={() => deletePost(post?.id)}>
          삭제
        </button>
      </div>
    </div>
  );
};

export default DetailPage;
