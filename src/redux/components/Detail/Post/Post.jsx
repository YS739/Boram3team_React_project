import { useNavigate, useParams } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost } from "../../../modules/postsSlice";
import { EditDeleteBtn, PostBox } from "./style";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const currentUserDi = localStorage.getItem("id");
  const thePost = posts.find((post) => post.id === param.id);
  // 삭제버튼
  const deletePostHandler = (postNumber) => {
    if (window.confirm("삭제하시겠습니까")) {
      dispatch(__deletePost(postNumber));
      navigate("/");
    }
  };

  return (
    <PostBox>
      <div key={thePost?.id}>
        <h1>토론주제 :{thePost?.title}</h1>
        <h2>선택분류</h2>
        <p>A : {thePost?.categoryA}</p>
        <p>B : {thePost?.categoryB}</p>
        <p>like : {thePost?.like.length}</p>


        <EditDeleteBtn>
          {thePost?.user === currentUserDi ? (
            <div>
              <button onClick={() => navigate(`/edit/${thePost?.id}`)}>
                수정
              </button>
              <button
                type="button"
                onClick={() => deletePostHandler(thePost?.id)}
              >
                삭제
              </button>
            </div>
          ) : (
            ""
          )}
        </EditDeleteBtn>
      </div>
    </PostBox>
  );
};

export default Post;
