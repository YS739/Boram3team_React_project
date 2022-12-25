import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import users from "../modules/usersSlice";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    users,
    posts,
  },
});

export default store;
