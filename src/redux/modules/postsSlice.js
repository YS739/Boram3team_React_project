import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//3. inintiaal Sate

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

// 본문 불러오기
export const __getPost = createAsyncThunk(
  //1.action value
  "posts/getPost",
  //2. 콜백함수임.
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3006/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

//본문 삭제하기
export const __deletePost = createAsyncThunk(
  "posts/deltePost",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3006/posts/${payload}`);
      const data = await axios.get("http://localhost:3006/posts");
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
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload;
    },
    [__getPost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deletePost.pending]: (state) => {
      state.isLoading = true;
    },
    [__deletePost.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.posts = action.payload;
    },
    [__deletePost.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});

export default postsSlice.reducer;
