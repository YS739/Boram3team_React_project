import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { __postComment } from "../../../modules/commentsSlice";

const CommentUpload = () => {
  const [comment, setComment] = useState();
  const dispatch = useDispatch();

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
