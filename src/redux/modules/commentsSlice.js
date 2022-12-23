import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
};

// 댓글 불러오기
export const __getComment = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/posts");
      // const allData = data.data;
      // const commentData = allData.map((comment) => comment.comments);
      // console.log(commentData);
      // const getComment = commentData.map((comment) => comment);
      // console.log(getComment);
      console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 등록하기
export const __postComment = createAsyncThunk(
  "comments/postComment",
  async (payload, thunkAPI) => {
    try {
      // TODO: 댓글이 posts 안의 comments로 들어가야 함
      await axios.post("http://localhost:3001/posts", payload);
      // 최신 데이터를 불러오기 위해 get 추가
      const data = await axios.get("http://localhost:3001/posts");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "posts",
  // FIXME: postSlice랑 겹쳐서 수정해야 함 - configStore도
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
