import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../modules/commentsSlice";
import { CommentForm, CategoryBox, CommentInputBox } from "./style";

const CommentUpload = () => {
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
        // postId: TODO: 상현님 본문 등록 구현 - 성환님 pull(main get) - 해당 post.id 가져오기
        comment,
        isA: selected.value,
      };
      dispatch(__postComment(newComment));

      // input 초기화
      setComment("");
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
    <>
      <CommentForm>
        <form onSubmit={onSubmitCommentHandler}>
          {/* A,B 선택하기 */}
          <CategoryBox>
            <span>
              <input type="radio" name="category" id="A" value="true" />
              <label for="A">A: 부먹</label>
            </span>
            <span>
              <input type="radio" name="category" id="B" value="false" />
              <label for="B">B: 찍먹</label>
            </span>
            {/* TODO: 메인 페이지에서 해당 A,B 가져오기 */}
            {/* TODO: A, B 중 선택한 내용이 댓글을 가져올 때 보여야 한다 */}
          </CategoryBox>

          {/* 댓글 입력 */}
          <br />
          <CommentInputBox>
            <input
              id="comment"
              value={comment}
              placeholder="댓글을 입력해주세요."
              onChange={onChangeCommentHandler}
            ></input>
            <button>댓글 등록</button>
          </CommentInputBox>
        </form>
      </CommentForm>
    </>
  );
};

export default CommentUpload;
