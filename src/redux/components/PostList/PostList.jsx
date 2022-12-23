import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { __getPosts } from "../../modules/postsSlice";
import { Article, H1, PostBox, PostLike, Section } from "./style";

const PostList = () => {
  const dispatch = useDispatch();
  const { error, posts } = useSelector((state) => state.posts);
  const navigate = useNavigate();

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Section>
      <H1>토론주제</H1>

      {posts.map((post) => {
        return (
          <Article
            key={post.id}
            onClick={() => {
              navigate(`/${post.id}`);
            }}
          >
            <PostBox>
              <div>논제: {post.title}</div>
              <div>
                <div>
                  A: {post.categoryA} vs B: {post.categoryB}
                </div>
                <div></div>
              </div>
            </PostBox>
            <PostLike>👍: {post.like}</PostLike>
          </Article>
        );
      })}
    </Section>
  );
};
export default PostList;
