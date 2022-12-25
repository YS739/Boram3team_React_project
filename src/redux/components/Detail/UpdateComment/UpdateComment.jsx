import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { __changeComment } from '../../../modules/commentsSlice';
import { useDispatch } from 'react-redux';

const UpdateComment = ({ comment, changeCommentHandler }) => {
  const dispatch = useDispatch();
  const [commentChange, setCommentChange] = useState(comment.comment);

  // const { comments } = useSelector((state) => state.comments);
  // console.log(comments);

  const changeInput = useRef();
  const userComment = useRef();

  const changeShow = (e) => {
    setCommentChange(e.target.value);
  };

  const changeButtonHandler = (id) => {
    changeInput.current.style = 'display:block';
    userComment.current.style = 'display:none';
    changeInput.current.focus();

    // console.log(comment.comment);

    if (commentChange) {
      const changeComment = {
        id: comment.id,
        postId: comment.postId,
        comment: commentChange,
        isA: comment.isA,
      };

      dispatch(__changeComment(id));

      // setCommentChange[...comment, ]
      // changeInput.current.style = 'display:none';
      // userComment.current.style = 'display:block';
    }

    if (!commentChange) {
      alert('댓글을 입력해주세요');
    }
  };

  return (
    <div>
      <br />
      {/* <CategoryStyle color={color}>
        {co.isA === 'true' ? theA : theB}
      </CategoryStyle> */}
      <div>
        <span ref={userComment}>{comment.comment}</span>
        <input
          style={{ display: 'none' }}
          ref={changeInput}
          value={commentChange}
          onChange={changeShow}
        />
        <span>작성자 ID</span>
        <span id='comment'>
          <button
            type='button'
            onClick={() =>
              changeButtonHandler({
                id: comment.id,
                postId: comment.postId,
                comment: commentChange,
                isA: comment.isA,
              })
            }
          >
            수정
          </button>
        </span>
      </div>
    </div>
  );
};

export default UpdateComment;
