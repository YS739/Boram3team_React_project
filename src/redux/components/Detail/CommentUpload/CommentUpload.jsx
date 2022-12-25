import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// TODO: Param 쓸 때 주석해제
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../modules/commentsSlice";
import {
  CommentContainer,
  CommentForm,
  CategoryBox,
  CategoryA,
  CategoryB,
  InputBox,
} from "./style";
import CustomButtons from "../../CustomButtons";

const CommentUpload = () => {
  // const param = useParams(); TODO: 페이지들 연결 되면 주석 해제
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find((post) => post.id === 1); // TODO: param.id로 바꾸기
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;
  const theId = thePost?.id;

  // TODO: useInput custom hook 쓰기
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitCommentHandler = (e) => {
    // A,B 중 선택한 값 찾기 - 해당 value가 isA에 들어감
    const categories = document.getElementsByName("category");
    const selected = Array.from(categories).find((choice) => choice.checked);

    // 댓글 입력하고 카테고리 선택했을 때
    if (comment && selected) {
      e.preventDefault();
      const newComment = {
        id: uuidv4(),
        postId: theId,
        comment,
        isA: selected.value,
        date: new Date(),
      };
      dispatch(__postComment(newComment));

      // input 초기화
      setComment("");
      // category 선택 초기화
      categories.forEach((category) => {
        category.checked = false;
      });
    }
    // 댓글을 작성하지 않았을 때 alert
    else if (!comment) {
      e.preventDefault();
      document.getElementById("comment").focus();
      alert("댓글을 입력해주세요.");
    }
    // 카테고리를 선택하지 않았을 때 alert
    else if (!selected) {
      e.preventDefault();
      alert("카테고리를 선택해주세요.");
    }
  };

  return (
    <CommentContainer>
      <CommentForm onSubmit={onSubmitCommentHandler}>
        {/* A,B 선택하기 */}
        <CategoryBox>
          <CategoryA>
            <input type="radio" name="category" id="A" value="true" />
            <label htmlFor="A">A: {theA}</label>
          </CategoryA>
          <CategoryB>
            <input type="radio" name="category" id="B" value="false" />
            <label htmlFor="B">B: {theB}</label>
          </CategoryB>
          {/* TODO: 메인 페이지에서 해당 A,B 가져오기 */}
          {/* TODO: A, B 중 선택한 내용이 댓글을 가져올 때 보여야 한다 */}
        </CategoryBox>

        {/* 댓글 입력 */}
        <br />
        <InputBox>
          <input
            id="comment"
            value={comment}
            placeholder="댓글을 입력해주세요."
            onChange={onChangeCommentHandler}
          ></input>
          <CustomButtons color="pink">댓글 등록</CustomButtons>
        </InputBox>
      </CommentForm>
    </CommentContainer>
  );
};

export default CommentUpload;
