import { useRef, useState } from "react";
import { __changeComment } from "../../../modules/commentsSlice";
import { useDispatch } from "react-redux";
import { Btn } from "./style";

const UpdateComment = ({ comment }) => {
  const dispatch = useDispatch();
  const [commentChange, setCommentChange] = useState(comment.comment);
  const [completeDisplay, setCompleteDisplay] = useState("none");
  const [editDisplay, setEditDisplay] = useState("block");

  const changeInput = useRef();
  const userComment = useRef();

  const changeShow = (e) => {
    setCommentChange(e.target.value);
  };

  const editButtonHandler = () => {
    changeInput.current.style = "display:block";
    userComment.current.style = "display:none";
    changeInput.current.focus();
    setCompleteDisplay("block");
    setEditDisplay("none");
  };

  const changeButtonHandler = (id) => {
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

  return (
    <div>
      <br />
      <div>
        <span ref={userComment}>{comment.comment}</span>
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
              changeButtonHandler({
                id: comment.id,
                postId: comment.postId,
                comment: commentChange,
                isA: comment.isA,
              })
            }
          >
            완료
          </Btn>
        </span>
      </div>
    </div>
  );
};

export default UpdateComment;
