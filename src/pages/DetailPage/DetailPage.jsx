import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Comments from "../../redux/components/Detail/Comments";
import CommentUpload from "../../redux/components/Detail/CommentUpload";
import Post from "../../redux/components/Detail/Post";
import { __getComment } from "../../redux/modules/commentsSlice";
import { __getPost } from "../../redux/modules/postsSlice";

const DetailPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComment());
  }, [dispatch]);

  useEffect(() => {
    dispatch(__getPost());
  }, [dispatch]);

  return (
    <div>
      <Post />
      <CommentUpload />
      <Comments />
    </div>
  );
};

export default DetailPage;
