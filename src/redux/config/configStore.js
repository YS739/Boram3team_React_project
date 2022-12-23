import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import users from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    comments: comments,
    posts: posts,
    users: users,
  },
});

export default store;
