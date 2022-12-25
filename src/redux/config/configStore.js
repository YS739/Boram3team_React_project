import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import users from "../modules/usersSlice";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: {
    comments,
    users,
    posts,
  },
});

export default store;
