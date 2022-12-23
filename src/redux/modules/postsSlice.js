import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { v4 as uuidv4 } from "uuid";

//3. inintiaal Sate

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

//청크함수 .

export const __getPost = createAsyncThunk(
  "posts/getPost",
  async (payload, thunkAPI) => {
    try {
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
  },
});

export default postsSlice.reducer;
