import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {};

export const __editPost = createAsyncThunk(
  "post/editPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`http://localhost:3001/post`, payload);
      return thunkAPI.fulfillWithValue(payload);
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
    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = [...state.post, action.payload];
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
  },
});

export default postsSlice.reducer;
