import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: "postsSlice",
  initialState,
  reducers: {},
});

export default postsSlice;
