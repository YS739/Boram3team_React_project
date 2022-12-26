import { useRef, useState } from "react";
import {
  __changeComment,
  __deleteComment,
} from "../../../modules/commentsSlice";
import { useDispatch } from "react-redux";
import { Btn } from "./style";

const CommentEditDelete = ({ comments }) => {
  const dispatch = useDispatch();
  const [commentChange, setCommentChange] = useState(comments?.comment);
  const [completeDisplay, setCompleteDisplay] = useState("none");
  const [editDisplay, setEditDisplay] = useState("block");

  const changeInput = useRef();
  const userComment = useRef();

  const changeShow = (e) => {
    setCommentChange(e.target.value);
  };

  //수정 버튼
  const editButtonHandler = () => {
    changeInput.current.style = "display:block";
    userComment.current.style = "display:none";
    changeInput.current.focus();
    setCompleteDisplay("block");
    setEditDisplay("none");
  };

  // 완료 버튼
  const completeButtonHandler = (id) => {
    changeInput.current.style = "display:none";
    userComment.current.style = "display:block";
    setCompleteDisplay("none");
    setEditDisplay("block");

    if (commentChange) {
      dispatch(__changeComment(id));
    } else {
      alert("댓글을 입력해주세요");
    }
  };

  //삭제버튼
  const deleteButtonHandler = (id) => {
    if (window.confirm("삭제할까요??") === true) {
      dispatch(__deleteComment(id));
    } else {
      return;
    }
  };

  return (
    <div>
      <br />
      <div>
        <span ref={userComment}>{comments?.comment}</span>
        <input
          style={{ display: "none" }}
          ref={changeInput}
          value={commentChange}
          onChange={changeShow}
        />
        <span>작성자 ID</span>
        <span id="comment">
          <Btn dp={editDisplay} type="button" onClick={editButtonHandler}>
            수정
          </Btn>
          <Btn
            dp={completeDisplay}
            onClick={() =>
              completeButtonHandler({
                id: comments.id,
                postId: comments.postId,
                comment: commentChange,
                isA: comments.isA,
              })
            }
          >
            완료
          </Btn>
          <button onClick={() => deleteButtonHandler(comments.id)}>삭제</button>
        </span>
      </div>
    </div>
  );
};

export default CommentEditDelete;
