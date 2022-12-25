import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const __getPost = createAsyncThunk(
  "posts/getPost",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __editPost = createAsyncThunk(
  "posts/editPost",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(`http://localhost:3001/posts/${payload.id}`, payload);
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [__getPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
  },
  [__getPost.rejected]: (state, action) => {
    state.isLoading = false;
    state.posts = action.payload;
  },
  [__editPost.pending]: (state) => {
    state.isLoading = true;
  },
  [__editPost.fulfilled]: (state, action) => {
    state.isLoading = false;
    state.posts = action.payload;
  },
  [__editPost.rejected]: (state, action) => {
    state.isLoading = false;
    state.posts = action.payload;
  },
});

export default postsSlice.reducer;
