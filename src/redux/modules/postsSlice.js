import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

//본문등록하기
export const __uploadPost = createAsyncThunk(
  "post/uploadPost",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/post", payload);
      // 최신 데이터를 불러오기 위해 get 추가
      const data = await axios.get("http://localhost:3001/post");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    extraReducers: {
      [__uploadPost.pending]: (state) => {
        state.isLoading = true;
      },
      [__uploadPost.fulfilled]: (state, action) => {
        state.isLoading = false;
        state.comment = action.payload;
      },
      [__uploadPost.rejected]: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  },
});

export default postsSlice.reducer;
