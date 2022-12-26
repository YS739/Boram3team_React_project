import { useSelector } from 'react-redux';
import { Wrap, CategoryStyle } from './style';
import CommentEditDelete from './CommentEditDelete';
import { useParams } from 'react-router-dom';

const Comments = () => {
  const { error, comments } = useSelector((state) => state.comments);
  const param = useParams();
  const detailComment = comments?.filter(
    (comment) => comment?.postId === param.id
  );
  const { posts } = useSelector((state) => state.posts);

  const thePost = posts.find((post) => post.id === param.id);
  const theA = thePost?.categoryA;
  const theB = thePost?.categoryB;

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Wrap>
      {/* optional chaining('?') 사용 - 새로고침했을 때 오류 해결*/}
      {detailComment?.map((comment) => {
        let color = '';
        if (comment.isA === 'true') {
          color = '#fa7d43';
        }
        if (comment.isA === 'false') {
          color = '#179bbf';
        }

        return (
          <div key={comment.id}>
            <br />
            <CategoryStyle color={color}>
              {comment.isA === 'true' ? theA : theB}
            </CategoryStyle>
            <div>
              <span id='comment'>
                <CommentEditDelete key={comment.id} comments={comment} />
              </span>
            </div>
          </div>
        );
        // TODO: 작성자, 선택한 카테고리 내용 추가
      })}
    </Wrap>
  );
};

export default Comments;
