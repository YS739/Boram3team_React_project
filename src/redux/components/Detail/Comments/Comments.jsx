import React from "react";
import { useSelector } from "react-redux";
import { CommentBody, CommentUser } from "./style";

const Comments = () => {
  const { error } = useSelector((state) => state.comments);
  const globalComment = useSelector((state) => state.comments.comment);

  if (error) {
    // 데이터를 불러오다가 오류가 나면 화면에 오류 메시지 표시
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {globalComment?.map((co) => {
        return (
          <>
            <CommentBody>
              <div>카테고리 내용</div>
              <CommentUser>
                <span key={co.id}>{co.comment}</span>
                <span>작성자</span>
              </CommentUser>
            </CommentBody>
          </>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </div>
  );
};

export default Comments;
