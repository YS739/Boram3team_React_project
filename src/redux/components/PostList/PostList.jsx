import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../modules/postsSlice";

const PostList = () => {
  const dispatch = useDispatch();
  const { isLoading, error, posts } = useSelector((state) => state.postsSlice);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중... </div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <div>
        {posts.map((post) => {
          return <div key={post.id}>{post.title}</div>;
        })}
      </div>
    </>
  );
};
export default PostList;
