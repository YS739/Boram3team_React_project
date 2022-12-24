import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    comments,
    posts,
    usersSlice: usersSlice,
  },
});

export default store;
