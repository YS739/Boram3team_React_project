import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// Thunk 함수
export const __signUp = createAsyncThunk(
  // 첫 번째 인자: action value
  "users/signUp",
  // 두 번째 인자: 콜백함수
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/users", payload);
      const data = await axios.get("http://localhost:3001/users");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [__signUp.pending]: (state) => {
      state.isLoading = true;
      console.log("pengding")
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      console.log("fulfilled")
      console.log("state.users:", state.users)
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
    
  }
});

export default usersSlice.reducer;