import React from "react";
import { useSelector } from "react-redux";

const Comments = () => {
  const { error } = useSelector((state) => state.comments);
  const { comment } = useSelector((state) => state.comments);

  // const param = useParams(); TODO: 페이지들 연결 되면 주석 해제
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find((post) => post.id === 1); // TODO: param.id로 바꾸기
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {comment?.map((co) => {
        return (
          <div key={co.id}>
            <br />
            <div>{co.isA === "true" ? theA : theB}</div>
            <div>
              <span>{co.comment}</span>
              <span>작성자ID</span>
              {/* TODO: 작성자에는 로그인한 사람의 id 넣기 */}
            </div>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </div>
  );
};

export default Comments;
