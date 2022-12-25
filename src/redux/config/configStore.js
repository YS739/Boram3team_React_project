import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    posts,
    usersSlice: usersSlice,
  },
});

export default store;
