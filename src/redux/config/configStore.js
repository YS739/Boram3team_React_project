import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import commentsSlice from "../modules/commentsSlice";
import posts from "../modules/postsSlice";
import usersSlice from "../modules/usersSlice";

const store = configureStore({
  reducer: {
    commentsSlice: commentsSlice,
    posts,
    usersSlice: usersSlice,
=======
import comments from "../modules/commentsSlice";
import users from "../modules/usersSlice";
import posts from "../modules/postsSlice";

const store = configureStore({
  reducer: {
    comments,
    users,
    posts,
>>>>>>> 88306f3300320401f6c4c611f9a88ea50f876a08
  },
});

export default store;
