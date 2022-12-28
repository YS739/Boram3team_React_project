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
  const myLikes = [];

  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < posts.length; j++) {
      let b = posts[i].like[j] === currentUserDi;
      if (b === true) {
        myLikes.push(posts[i]);
      }
    }
  }

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
          if (comment.isA === "true" && comment.postNumber === post.id) {
            countA = countA + 1;
            barA = "#EC5858";
          }
          if (comment.isA === "false" && comment.postNumber === post.id) {
            countB = countB + 1;
            barB = "#3E6D9C";
          }
        });
        let ratioA = Math.round(100 - (countB / (countA + countB)) * 100);
        let ratioB = Math.round(100 - (countA / (countA + countB)) * 100);

        if (countA === 0) {
          ratioA = 50;
        }
        if (countB === 0) {
          ratioB = 50;
        }
        if (countA > 0 && countB === 0) {
          ratioA = 100;
          ratioB = 0;
        }
        if (countB > 0 && countA === 0) {
          ratioB = 100;
          ratioA = 0;
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
                <div>{post.title}</div>
                <div>
                  <div>
                    {post.categoryA} vs {post.categoryB}
                  </div>
                  <div></div>
                </div>
              </PostBox>
              <PostLike dp={post.like[0] === currentUserDi ? "none" : "block"}>
                ❤️
              </PostLike>
              <PostLike dp={post.like[0] === currentUserDi ? "block" : "none"}>
                ❤️
              </PostLike>
              <p>{post.like.length}</p>
            </PostContainer>
            <GageBar>
              <BarA bg={ratioA} color={ratioA === 100 ? "#EC5858" : barA}>
                <span style={{ display: ratioA === 0 ? "none" : "block" }}>
                  {ratioA}%
                </span>
              </BarA>
              <BarA bg={ratioB} color={ratioB === 100 ? "#3E6D9C" : barB}>
                <span style={{ display: ratioB === 0 ? "none" : "block" }}>
                  {ratioB}%
                </span>
              </BarA>
            </GageBar>
          </Article>
        );
      })}
    </Section>
  );
};
export default UserLikes;
