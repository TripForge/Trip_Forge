import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUser, fetchUser } from "./authAPI";

const initialState = {
  userData: null,
  userInfo: null,
  status: "idle",
  error: null,
};

export const createUserAsync = createAsyncThunk(
  "users/signup",
  async (userData) => {
    const response = await createUser(userData);
    console.log("my response is ", response);
    return response.data;
  }
);

export const fetchUserAsync = createAsyncThunk(
  "users/fetchUser",
  async (id) => {
    const response = await fetchUser(id);
    return response.data;
  }
);
export const authSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.userInfo = action.payload;
      })
      .addCase(fetchUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        // this info can be different or more from logged-in User info
        state.userData = action.payload;
      });
  },
});


export const getUserInfo = (state) => state.auth.userInfo;
export const selectError = (state) => state.auth.error;
export const loggedInUser = (state) => state.auth.userData;

export default authSlice.reducer;
