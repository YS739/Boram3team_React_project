import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "../modules/commentsSlice";
import postsSlice from "../modules/postsSlice";
import users from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    postsSlice: postsSlice,
    users: users,
  },
});

export default store;
