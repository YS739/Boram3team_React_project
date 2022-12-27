import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
import useInput from "../../../../hooks/useInput";

const CommentUpload = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const { comments } = useSelector((state) => state.comments);
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find((post) => post.id === param.id);
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;
  const theId = thePost?.id;
  const currentUserDi = localStorage.getItem("id");

  //useInput
  const [comment, setComment, onChangeCommentHandler] = useInput();

  //현재 포스트의 댓글들
  const thePostComment = comments?.filter(
    (theCo) => theCo.postNumber === param.id
  );

  //현재 포스트의 user 댓글
  const userComment = thePostComment?.find(
    (theCo) => theCo.user === currentUserDi
  );

  // 댓글 등록 버튼
  const onSubmitCommentHandler = (e) => {
    e.preventDefault();
    // category A,B 중 선택한 값 찾기 - 해당 value = isA
    const categories = document.getElementsByName("category");
    const selected = Array.from(categories).find((choice) => choice.checked);

    // 현재 user 댓글이 있을 때
    if (userComment) {
      alert("댓글은 한 번만 등록할 수 있습니다.");
    }

    // 현재 user 댓글이 없을때
    else if (userComment === undefined) {
      // 댓글을 작성하지 않았을 때
      if (!comment) {
        document.getElementById("comment").focus();
        alert("댓글을 입력해주세요.");
      }

      // 카테고리를 선택하지 않았을 때
      else if (!selected) {
        alert("카테고리를 선택해주세요.");
      }

      // 댓글 입력, 카테고리 선택했을 때
      else if (comment && selected) {
        e.preventDefault();
        const newComment = {
          id: uuidv4(),
          postNumber: theId,
          user: currentUserDi,
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
