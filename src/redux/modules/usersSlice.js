import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

// Thunk 함수
// DB의 users 정보를 불러옴.
export const __getUsers = createAsyncThunk(
  "users/getUsers",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/users"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 회원가입할 때 새로운 user 정보를 users DB에 저장함.
export const __signUp = createAsyncThunk(
  // 첫 번째 인자: action value
  "users/signUp",
  // 두 번째 인자: 콜백함수
  async (payload, thunkAPI) => {
    try {
      await axios.post(
        "https://sun-supreme-thunbergia.glitch.me/users",
        payload
      );
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/users"
      );
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// 로그인했을 때 loggedIn을 true로 변경함
export const __editUserName = createAsyncThunk(
  "users/switchLoggedIn",
  async (payload, thunkAPI) => {
    try {
      await axios.patch(
        `https://sun-supreme-thunbergia.glitch.me/users/${payload.id}`,
        payload
      );
      const data = await axios.get(
        "https://sun-supreme-thunbergia.glitch.me/users"
      );
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
    [__getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [__getUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [__getUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__signUp.pending]: (state) => {
      state.isLoading = true;
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    [__editUserName.pending]: (state) => {
      state.isLoading = true;
    },
    [__editUserName.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [__editUserName.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default usersSlice.reducer;
