import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteComment } from '../../../modules/commentsSlice';
import { __changeComment } from '../../../modules/commentsSlice';

const Comments = () => {
  const { error } = useSelector((state) => state.comments);
  const { comment } = useSelector((state) => state.comments);

  // console.log(comment);

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
    let input = prompt();

    // const changeId = id;
    // console.log(changeId);

    const changeComment = {
      id,
      comment: input,
    };

    dispatch(__changeComment(changeComment));
  };

  return (
    <div>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {comment?.map((co) => {
        return (
          <div key={co.id}>
            <div>카테고리 내용</div>
            <div>
              <span>{co.comment}</span>
              <span>작성자</span>
              <span>
                <button onClick={() => changeButtonHandler(co.id)}>수정</button>
                <button onClick={() => deleteButtonHandler(co.id)}>삭제</button>
              </span>
            </div>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </div>
  );
};

function ChangeInput({ changeComment, dispatch }) {
  // const changeComment = {
  //   id,
  //   comment: input,
  // };

  // dispatch(__changeComment(changeComment));
  return (
    <>
      <input />
    </>
  );
}

export default Comments;
