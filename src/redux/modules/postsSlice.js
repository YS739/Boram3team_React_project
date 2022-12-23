import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  post: [],
  isLoading: false,
  error: null,
};

export const __editPost = createAsyncThunk(
  "post/editPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post(`http://localhost:3001/post`, payload);
      const data = await axios.get(`http://localhost:3001/post`);
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
    [__editPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__editPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
    [__editPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.post = action.payload;
    },
  },
});

export default postsSlice.reducer;
