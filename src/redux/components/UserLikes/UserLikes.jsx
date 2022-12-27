import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Article,
  H1,
  PostBox,
  PostLike,
  Section,
  PostContainer,
  GageBar,
  BarA,
} from "./style";

const UserLikes = () => {
  const { error, posts } = useSelector((state) => state.posts);
  const { comments } = useSelector((state) => state.comments);
  const navigate = useNavigate();
  const currentUserDi = localStorage.getItem("id");
  const myLikes = posts.filter((post) => post.like[0] === currentUserDi);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <Section>
      <H1>좋아하는 토론</H1>

      {myLikes.map((post) => {
        let countA = 0;
        let countB = 0;
        let barA = "lightgray";
        let barB = "gray";
        comments.map((comment) => {
          if (comment.isA === "false" && comment.postNumber === post.id) {
            countA = countA + 1;
            barA = "coral";
          }
          if (comment.isA === "true" && comment.postNumber === post.id) {
            countB = countB + 1;
            barB = "skyblue";
          }
        });
        let ratioA = Math.round(100 - (countA / (countA + countB)) * 100);
        let ratioB = Math.round(100 - (countB / (countA + countB)) * 100);

        if (countA === 0) {
          ratioA = 50;
        }
        if (countB === 0) {
          ratioB = 50;
        }

        return (
          <Article
            key={post.id}
            onClick={() => {
              navigate(`/${post.id}`);
            }}
          >
            <PostContainer>
              <PostBox>
                <div>논제: {post.title}</div>
                <div>
                  <div>
                    A: {post.categoryA} vs B: {post.categoryB}
                  </div>
                  <div></div>
                </div>
              </PostBox>
              <PostLike>👍 {post.like.length}</PostLike>
            </PostContainer>
            <GageBar>
              <BarA bg={ratioA} color={barA}>
                {ratioA}%
              </BarA>
              <BarA bg={ratioB} color={barB}>
                {ratioB}%
              </BarA>
            </GageBar>
          </Article>
        );
      })}
    </Section>
  );
};
export default UserLikes;
