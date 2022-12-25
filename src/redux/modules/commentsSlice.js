import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

// 댓글 불러오기
export const __getComment = createAsyncThunk(
  "comments/getComment",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "http://localhost:3001/comments?_sort=date&_order=DESC"
      );
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
      await axios.post("http://localhost:3001/comments", payload);
      // 최신 데이터를 불러오기 위해 get 추가
      const data = await axios.get(
        "http://localhost:3001/comments?_sort=date&_order=DESC"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
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
      state.comment = action.payload;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
