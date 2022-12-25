import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __deleteComment } from "../../../modules/commentsSlice";
import { __changeComment } from "../../../modules/commentsSlice";
import { Wrap, CategoryStyle, UserComment } from "./style";

const Comments = () => {
  const { error, comment } = useSelector((state) => state.comments);

  const dispatch = useDispatch();
  // const param = useParams(); TODO: 페이지들 연결 되면 주석 해제
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find(
    (post) => post.id === "a039541e-6fd4-417b-9d7b-8adc5a9f4bc8"
  ); // TODO: param.id로 바꾸기
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  if (error) {
    return <div>{error.message}</div>;
  }

  // 삭제버튼
  const deleteButtonHandler = (id) => {
    if (window.confirm("삭제할까요??") === true) {
      dispatch(__deleteComment(id));
    } else {
      return;
    }
  };

  // 수정 버튼
  const changeButtonHandler = (id) => {
    // prompt로 댓글수정
    // let input = prompt('댓글을 수정하시겠습니까??', '');
    // if (input !== null) {
    //   const changeComment = {
    //     id,
    //     comment: input,
    //   };
    //   dispatch(__changeComment(changeComment));
    // } else if (input === null) {
    //   return;
    // }
  };

  return (
    <Wrap>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {comment?.map((co) => {
        let color = "";
        if (co.isA === "true") {
          color = "#fa7d43";
        }
        if (co.isA === "false") {
          color = "#179bbf";
        }

        return (
          <div key={co.id}>
            <br />
            <CategoryStyle color={color}>
              {co.isA === "true" ? theA : theB}
            </CategoryStyle>
            <UserComment>
              <span>{co.comment}</span>
              <div>
                <span>{co.date.slice(0, 10)}</span>
                <br />
                <span>작성자 ID</span>
              </div>
              {/* TODO: 작성자에는 로그인한 사람의 id 넣기 */}
            </UserComment>

            <span id="comment">
              <button type="button" onClick={() => changeButtonHandler(co.id)}>
                수정
              </button>
              <button onClick={() => deleteButtonHandler(co.id)}>삭제</button>
            </span>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </Wrap>
  );
};
export default Comments;
