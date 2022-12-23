import { configureStore } from "@reduxjs/toolkit";
import comments from "../modules/commentsSlice";
import postsSlice from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    comments,
    postsSlice: postsSlice,
    usersSlice: usersSlice,
  },
});

export default store;
