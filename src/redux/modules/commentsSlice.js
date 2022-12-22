import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {},
});

export default commentsSlice;
