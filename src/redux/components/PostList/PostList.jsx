import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __AddLikes } from "../../modules/postsSlice";
import {
  Article,
  H1,
  PostBox,
  PostLike,
  Section,
  PostContainer,
  GageBar,
  BarA,
  LikeDiv,
  PostTitle,
  PostCategory,
  CategoryContent,
  CategoryBox,
} from "./style";

const PostList = () => {
  const dispatch = useDispatch();
  const { error, posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const currentUserDi = localStorage.getItem("id");
  let color = "";
  let fontColor = "";

  // 인기순 정렬
  const array = [];
  let orderByList = [];
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i].like.length;

    array.push({
      ...posts[i],
      likeCount: element,
    });
    // 인기순 정렬 배열
    orderByList = array.sort((a, b) => b.likeCount - a.likeCount);
  }

  const navigate = useNavigate();
  if (error) {
    return <div>{error.message}</div>;
  }

  // 좋아요 추가 함수
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
    if (isLike !== currentUserDi) {
      dispatch(__AddLikes(addLike));
    }
    if (isLike === currentUserDi) {
      dispatch(__AddLikes(deleteLike));
    }
  };

  return (
    <>
      <Section>
      <H1>토론 주제</H1>
        {posts?.map((post) => {
          let countA = 0;
          let countB = 0;
          let barA = "lightgray";
          let barB = "gray";
          comments.map((comment) => {
            if (comment.isA === "true" && comment.postNumber === post.id) {
              countA = countA + 1;
              barA = "#EC5858";
            }
            if (comment.isA === "false" && comment.postNumber === post.id) {
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
            <Article key={post.id} color={color}>
              <PostContainer>
                <PostBox>
                  <LikeDiv>
                    <PostLike
                      dp={
                        post.like.find((like) => like === currentUserDi) !==
                        undefined
                          ? "none"
                          : "block"
                      }
                      onClick={() => switchLikesHandler(post)}
                    >
                      🤍
                    </PostLike>
                    <PostLike
                      dp={
                        post.like.find((like) => like === currentUserDi) !==
                        undefined
                          ? "block"
                          : "none"
                      }
                      onClick={() => switchLikesHandler(post)}
                    >
                      ❤️
                    </PostLike>
                  </LikeDiv>
                  <PostTitle
                    onClick={() => {
                      navigate(`/${post.id}`);
                    }}
                    font={fontColor}
                  >
                    {post.title}
                  </PostTitle>
                  <CategoryBox>
                    <PostCategory>
                      <CategoryContent br={"1px solid lightgray"}>
                        {post.categoryA}
                      </CategoryContent>
                      <CategoryContent>{post.categoryB}</CategoryContent>
                    </PostCategory>
                    <GageBar>
                      <BarA
                        bg={ratioA}
                        color={ratioA === 100 ? "#EC5858" : barA}
                      >
                        <span
                          style={{ display: ratioA === 0 ? "none" : "block" }}
                        >
                          {ratioA}%
                        </span>
                      </BarA>
                      <BarA
                        bg={ratioB}
                        color={ratioB === 100 ? "#3E6D9C" : barB}
                      >
                        <span
                          style={{ display: ratioB === 0 ? "none" : "block" }}
                        >
                          {ratioB}%
                        </span>
                      </BarA>
                    </GageBar>
                  </CategoryBox>
                </PostBox>
              </PostContainer>
            </Article>
          );
        })}
      </Section>
    </>
  );
};
export default PostList;
