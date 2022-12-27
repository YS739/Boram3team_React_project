import { useNavigate, useParams } from "react-router-dom";
import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deletePost, __AddLikes } from "../../../modules/postsSlice";
import {
  PostBox,
  PostLikeBox,
  PostLike,
  Categories,
  EditButtons,
  EditDeleteBtn,
  GageBar,
  BarA,
  TitleLikeContainer,
  CategoryBox,
  Container,
  UserName,
} from "./style";
import CustomButtons from "../../CustomButtons";

const Post = () => {
  const { posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const currentUserDi = localStorage.getItem("id");
  const thePost = posts.find((post) => post.id === param.id);
  let color = "";
  let fontColor = "";
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
    if (comment?.isA === "true" && comment?.postNumber === thePost?.id) {
      countA = countA + 1;
      barA = "#EC5858";
    }
    if (comment?.isA === "false" && comment?.postNumber === thePost?.id) {
      countB = countB + 1;
      barB = "#3E6D9C";
    }
  });
  let ratioA = Math.round(100 - (countB / (countA + countB)) * 100);
  let ratioB = Math.round(100 - (countA / (countA + countB)) * 100);

  if (countA === 0) {
    ratioA = 50;
  }
  if (countB === 0) {
    ratioB = 50;
  }
  if (countA > 0 && countB === 0) {
    ratioA = 100;
    ratioB = 0;
  }
  if (countB > 0 && countA === 0) {
    ratioB = 100;
    ratioA = 0;
  }
  if (ratioA > ratioB) {
    color = "#EC5858";
    fontColor = "white";
  } else if (ratioA < ratioB) {
    color = "#3E6D9C";
    fontColor = "white";
  } else {
    color = "#EDE4E0";
    fontColor = "black";
  }
  return (
    <Container>
      <EditDeleteBtn>
        {thePost?.user === currentUserDi ? (
          <EditButtons>
            <CustomButtons onClick={() => navigate(`/edit/${thePost?.id}`)}>
              수정
            </CustomButtons>
            <CustomButtons
              type="button"
              onClick={() => deletePostHandler(thePost?.id)}
            >
              삭제
            </CustomButtons>
          </EditButtons>
        ) : (
          ""
        )}
      </EditDeleteBtn>
      <PostBox color={color}>
        <div key={thePost?.id}>
          <TitleLikeContainer font={fontColor}>
            <h2>{thePost?.title}</h2>
            <PostLikeBox>
              <PostLike
                dp={
                  thePost?.like.find((like) => like === currentUserDi) !==
                  undefined
                    ? "none"
                    : "block"
                }
                onClick={() => switchLikesHandler(thePost)}
              >
                <article style={{ marginRight: "10px" }}>🤍</article>
                <article style={{ fontSize: "25px" }}>
                  {thePost?.like.length}
                </article>
              </PostLike>
              <PostLike
                dp={
                  thePost?.like.find((like) => like === currentUserDi) !==
                  undefined
                    ? "block"
                    : "none"
                }
                onClick={() => switchLikesHandler(thePost)}
              >
                <article style={{ marginRight: "10px" }}>❤️</article>
                <article style={{ fontSize: "25px" }}>
                  {thePost?.like.length}
                </article>
              </PostLike>
            </PostLikeBox>
          </TitleLikeContainer>
          <CategoryBox>
            <Categories>
              <div>
                <span>{thePost?.categoryA}</span>
              </div>
              <h1>VS</h1>
              <div>
                <span>{thePost?.categoryB}</span>
              </div>
            </Categories>
            <GageBar style={{ color: "white" }}>
              <BarA bg={ratioA} color={ratioA === 100 ? "#EC5858" : barA}>
                <span style={{ display: ratioA === 0 ? "none" : "block" }}>
                  {ratioA}%
                </span>
              </BarA>
              <BarA bg={ratioB} color={ratioB === 100 ? "#3E6D9C" : barB}>
                <span style={{ display: ratioB === 0 ? "none" : "block" }}>
                  {ratioB}%
                </span>
              </BarA>
            </GageBar>
          </CategoryBox>
        </div>
      </PostBox>
      <UserName>작성자: {thePost?.userName}</UserName>
    </Container>
  );
};

export default Post;
