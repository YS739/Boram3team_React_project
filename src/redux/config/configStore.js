import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import postsSlice from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    postsSlice: postsSlice,
    usersSlice: usersSlice,
  },
});

export default store;
