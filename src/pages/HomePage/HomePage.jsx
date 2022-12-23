import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PostList from "../../redux/components/PostList";
import { __getPosts } from "../../redux/modules/postsSlice";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <div>
      HomePage
      <PostList></PostList>
    </div>
  );
};

export default HomePage;
