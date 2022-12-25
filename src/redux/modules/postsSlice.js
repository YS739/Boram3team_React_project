import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//3. initial Sate
const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

//본문등록하기
export const __uploadPost = createAsyncThunk(
  "posts/uploadPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/posts", payload);
      // 최신 데이터를 불러오기 위해 get 추가
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 본문 불러오기
export const __getPosts = createAsyncThunk(
  "posts/getPosts",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//본문 삭제하기
export const __deletePost = createAsyncThunk(
  "posts/deletePost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/posts/${payload}`);
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//본문수정하기
export const __editPost = createAsyncThunk(
  "posts/editPost",
  async (payload, thunkAPI) => {
    console.log(payload);
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
    [__getPosts.pending]: (state) => {
      state.isLoading = true;
    },
    [__getPosts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getPosts.rejected]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },

    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__uploadPost.pending]: (state) => {
      state.isLoading = true;
    },
    [__uploadPost.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__uploadPost.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
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
  },
});

export default postsSlice.reducer;
