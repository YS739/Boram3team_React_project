import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../../redux/components/Detail/Comments";
import CommentUpload from "../../redux/components/Detail/CommentUpload";
import Post from "../../redux/components/Detail/Post";
import { __getPost } from "../../redux/modules/postsSlice";

const DetailPage = () => {
  const { isLoading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  //get post
  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  if (isLoading) {
    return <div>로딩 중....</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Post />
      <CommentUpload />
      <Comments />
    </div>
  );
};
export default DetailPage;
