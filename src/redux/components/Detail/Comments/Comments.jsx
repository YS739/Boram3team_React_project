import React from "react";
import { useSelector } from "react-redux";
import { Wrap, CategoryStyle, UserComment } from "./style";

const Comments = () => {
  const { error, comment } = useSelector((state) => state.comments);

  // const param = useParams(); TODO: 페이지들 연결 되면 주석 해제
  const { posts } = useSelector((state) => state.posts);
  const thePost = posts.find((post) => post.id === 1); // TODO: param.id로 바꾸기
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  if (error) {
    return <div>{error.message}</div>;
  }

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
                <span>작성자ID</span>
              </div>
              {/* TODO: 작성자에는 로그인한 사람의 id 넣기 */}
            </UserComment>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </Wrap>
  );
};

export default Comments;
