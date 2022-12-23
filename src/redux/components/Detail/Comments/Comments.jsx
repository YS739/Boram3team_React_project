import React, { createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteComment } from '../../../modules/commentsSlice';
import { __changeComment } from '../../../modules/commentsSlice';

const Comments = () => {
  const { error } = useSelector((state) => state.comments);
  const globalComment = useSelector((state) => state.comments.comment);
  const dispatch = useDispatch();

  if (error) {
    // 데이터를 불러오다가 오류가 나면 화면에 오류 메시지 표시
    return <div>{error.message}</div>;
  }

  // 삭제버튼

  const deleteButtonHandler = (id) => {
    if (window.confirm('삭제할까요??') === true) {
      dispatch(__deleteComment(id));
    } else {
      return;
    }
  };

  const changeButtonHandler = (id) => {
    dispatch(__changeComment(id));
    console.log(typeof id);
    console.log(dispatch);
  };

  return (
    <div>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {globalComment?.map((co) => {
        return (
          <div key={co.id}>
            {co.comment}
            <span>
              <button type='button' onClick={() => changeButtonHandler(co.id)}>
                수정
              </button>
              <button type='button' onClick={() => deleteButtonHandler(co.id)}>
                삭제
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
