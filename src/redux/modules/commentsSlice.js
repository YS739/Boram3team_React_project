import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/comments?_sort=date&_order=DESC"
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
      await axios.post(
        "https://sun-supreme-thunbergia.glitch.me/comments",
        payload
      );
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/comments?_sort=date&_order=DESC"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제하기
export const __deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(
        `https://sun-supreme-thunbergia.glitch.me/comments/${payload}`
      );
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/comments?_sort=date&_order=DESC"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정하기
export const __changeComment = createAsyncThunk(
  "comments/changeComment",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `https://sun-supreme-thunbergia.glitch.me/comments/${payload.id}`,
        payload
      );
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/comments?_sort=date&_order=DESC"
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
    // 댓글 가져오기
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 등록
    [__postComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 댓글 수정
    [__changeComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__changeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__changeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
