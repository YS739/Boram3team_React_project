import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {},
});

export default usersSlice;
