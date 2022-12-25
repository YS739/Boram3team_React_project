import { useNavigate } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost } from "../../../modules/postsSlice";
import CustomButtons from "../../CustomButtons";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // db.json에서 id값을 가져오기 id값 변경해주면됨
  const thePost = posts.find(
    (post) => post.id === "a039541e-6fd4-417b-9d7b-8adc5a9f4bc8"
  );

  // 삭제버튼
  const deletePostHandler = (postId) => {
    if (window.confirm("삭제하시겠습니까")) {
      dispatch(__deletePost(postId));
      navigate("/");
    }
  };

  return (
    <div>
      <div key={thePost?.id}>
        <h1>토론주제 :{thePost?.title}</h1>
        <h2>선택분류</h2>
        <p>A : {thePost?.categoryA}</p>
        <p>B : {thePost?.categoryB}</p>
        <p>like : {thePost?.like}</p>
        <CustomButtons onClick={() => navigate(`/edit/${thePost?.id}`)}>
          수정
        </CustomButtons>
        <CustomButtons
          type="button"
          onClick={() => deletePostHandler(thePost?.id)}
        >
          삭제
        </CustomButtons>
      </div>
    </div>
  );
};

export default Post;
