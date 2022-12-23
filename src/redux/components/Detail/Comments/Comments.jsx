import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Comments = () => {
  const { error } = useSelector((state) => state.posts);
  // const param = useParams();
  const global = useSelector((state) => state.posts.posts);
  const getData = global.find((post) => post.id === 0);
  // TODO: 선택한 param.id가 없어서 일단 0으로 함
  const getD = getData?.comments;

  if (error) {
    // 데이터를 불러오다가 오류가 나면 화면에 오류 메시지 표시
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결 */}
      {getD?.map((co) => {
        return (
          <div key={co.id}>
            <div>카테고리 내용</div>
            <div>
              <span>{co.comment}</span>
              <span>작성자</span>
            </div>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </div>
  );
};

export default Comments;
