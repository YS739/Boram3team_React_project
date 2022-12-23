import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/commentsSlice";
import postsSlice from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    posts,
    postsSlice: postsSlice,
    usersSlice: usersSlice,
  },
});

export default store;
