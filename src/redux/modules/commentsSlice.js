import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

// 댓글 불러오기
export const __getComment = createAsyncThunk(
  'comments/getComment',
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get('http://localhost:3001/comments');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 등록하기
export const __postComment = createAsyncThunk(
  'comments/postComment',
  async (payload, thunkAPI) => {
    try {
      await axios.post('http://localhost:3001/comments', payload);
      const data = await axios.get('http://localhost:3001/comments');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 삭제하기
export const __deleteComment = createAsyncThunk(
  'comments/deleteComment',
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comments/${payload}`, payload);
      const data = await axios.get('http://localhost:3001/comments');
      // console.log('data', data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 댓글 수정하기
export const __changeComment = createAsyncThunk(
  'comments/changeComment',
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      await axios.patch(
        `http://localhost:3001/comments/${payload.id}`,
        payload
      );
      // console.log('data', data);
      const data = await axios.get('http://localhost:3001/comments');
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
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
    // 삭제
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // 수정 부분
    [__changeComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__changeComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__changeComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default commentsSlice.reducer;
