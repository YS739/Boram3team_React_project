import UserPosts from "../../redux/components/UserPosts";
import UserProfile from "../../redux/components/UserProfile/UserProfile";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getPosts } from "../../redux/modules/postsSlice";
import { __getComments } from "../../redux/modules/commentsSlice";

const MyPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
    dispatch(__getComments());
  }, [dispatch]);
  return (
    <div>
      MyPage
      <UserProfile></UserProfile>
      <UserPosts></UserPosts>
    </div>
  );
};

export default MyPage;
