import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Comments from "../../redux/components/Detail/Comments";
import CommentUpload from "../../redux/components/Detail/CommentUpload";
import Post from "../../redux/components/Detail/Post";
import { __getComments } from "../../redux/modules/commentsSlice";
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getUsers } from "../../redux/modules/usersSlice";
import { DetailBody, Container } from "./style";

const DetailPage = () => {
  const { error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getComments());
    dispatch(__getPosts());
    dispatch(__getUsers());
  }, [dispatch]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Container>
      <DetailBody>
        <Post />
        <CommentUpload />
        <Comments />
      </DetailBody>
    </Container>
  );
};
export default DetailPage;
