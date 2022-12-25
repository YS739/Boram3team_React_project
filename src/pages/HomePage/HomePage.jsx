import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../../redux/components/PostList";
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getComments } from "../../redux/modules/commentsSlice";
import { __getUsers } from "../../redux/modules/usersSlice";
const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
    dispatch(__getComments());
    dispatch(__getUsers());
  }, [dispatch]);

  return (
    <div>
      <PostList></PostList>
    </div>
  );
};

export default HomePage;
