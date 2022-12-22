import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CommentUpload = () => {
  const [comment, setComment] = useState();
  //  TODO: dispatch import 추가

  const onChangeCommentHandler = (e) => {
    setComment(e.target.value);
  };

  const onSubmitCommentHandler = (e) => {
    if (comment) {
      e.preventDefault();
      const newComment = {
        id: uuidv4(),
        comment,
      };
      // TODO: dispatch, input 초기화 추가
    } else if (!comment) {
      e.preventDefault();
      document.getElementById("comment").focus();
      alert("댓글을 입력해주세요.");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitCommentHandler}>
        <input
          id="comment"
          value={comment}
          maxLength="30"
          placeholder="댓글을 입력해주세요."
          onChange={onChangeCommentHandler}
        ></input>
        <button>댓글 등록</button>
      </form>
    </div>
  );
};

export default CommentUpload;
