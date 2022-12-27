import { useNavigate, useParams } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __AddLikes } from "../../../modules/postsSlice";
import { EditDeleteBtn, PostBox } from "./style";
import { GageBar, BarA } from "./style";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
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
  //좋아요 버튼 함수
  const switchLikesHandler = (post) => {
    //filter ,find 함수를 사용하여 like키값에 해당 값이 있는 판별
    const isNotLike = post.like.filter((like) => like !== currentUserDi);
    const isLike = post.like.find((like) => like === currentUserDi);

    const addLike = {
      ...post,
      like: [...post.like, currentUserDi],
    };
    const deleteLike = {
      ...post,
      like: isNotLike,
    };
    //  거짓이면 추가 참이면 삭제
    if (currentUserDi === null) {
      alert("로그인이 필요합니다.");
    } else if (isLike !== currentUserDi) {
      dispatch(__AddLikes(addLike));
    } else {
      dispatch(__AddLikes(deleteLike));
    }
  };

  //게이지바 관련 코드
  let countA = 0;
  let countB = 0;
  let barA = "lightgray";
  let barB = "gray";
  comments?.map((comment) => {
    if (comment?.isA === "false" && comment?.postNumber === thePost?.id) {
      countA = countA + 1;
      barA = "coral";
    }
    if (comment?.isA === "true" && comment?.postNumber === thePost?.id) {
      countB = countB + 1;
      barB = "skyblue";
    }
  });
  let ratioA = Math.round(100 - (countA / (countA + countB)) * 100);
  let ratioB = Math.round(100 - (countB / (countA + countB)) * 100);

  if (countA === 0) {
    ratioA = 50;
  }
  if (countB === 0) {
    ratioB = 50;
  }

  return (
    <PostBox>
      <div key={thePost?.id}>
        <h1>토론주제 :{thePost?.title}</h1>
        <h2>선택분류</h2>
        <p>A : {thePost?.categoryA}</p>
        <p>B : {thePost?.categoryB}</p>
        <p>like : {thePost?.like.length}</p>
        <button onClick={() => switchLikesHandler(thePost)}>
          좋아요 버튼임
        </button>
        <GageBar>
          <BarA bg={ratioA} color={barA}>
            {ratioA}%
          </BarA>
          <BarA bg={ratioB} color={barB}>
            {ratioB}%
          </BarA>
        </GageBar>

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
