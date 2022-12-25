import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { __deleteComment } from '../../../modules/commentsSlice';
import { __changeComment } from '../../../modules/commentsSlice';
import { Wrap, CategoryStyle, ChangeInput } from './style';
import UpdateComment from './UpdateComment';

const Comments = () => {
  const { error, comment } = useSelector((state) => state.comments);

  const dispatch = useDispatch();
  // const param = useParams(); TODO: 페이지들 연결 되면 주석 해제
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find((post) => post.id === 1); // TODO: param.id로 바꾸기
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  const inputRef = React.useRef();

  if (error) {
    return <div>{error.message}</div>;
  }

  // 수정 Input창

  // 삭제버튼
  const deleteButtonHandler = (id) => {
    if (window.confirm('삭제할까요??')) {
      dispatch(__deleteComment(id));
    } else {
      return;
    }
  };


  return (
    <Wrap>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {comment?.map((co) => {
        return (
          <UpdateComment key={co.id} comment={co}/>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </Wrap>
  );
};

export default Comments;
