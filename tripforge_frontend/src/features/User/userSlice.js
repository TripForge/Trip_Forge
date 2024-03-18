import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createUserInfo, getUserInfo } from "./userAPI";

const initialState = {
    userInfo : null,
    status : 'idle',
    userDetails : [],
}

export const createUserInfoAsync = createAsyncThunk(
    'user/createUserInfo',
    async(userData) => {
        const response = await createUserInfo(userData);
        return response.data;
    }
)
export const getUserInfoAsync = createAsyncThunk(
    'user/getUserInfo',
    async(id) => {
        const response = await getUserInfo(id);
        return response.data;
    }
)
export const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        
    },
    extraReducers : (builder) => {
        builder
        .addCase(createUserInfoAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createUserInfoAsync.fulfilled, (state,action) => {
            state.status = 'idle';
            state.userInfo = action.payload;
        })
        .addCase(getUserInfoAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(getUserInfoAsync.fulfilled, (state,action) => {
            state.status = 'idle';
            // state.userInfo = action.payload;
            state.userDetails = action.payload;
        })

    }
})


export const selectUserInfo = (state) => state.user.userInfo;
export const selectUserDetails = (state) => state.user.userDetails;
export default userSlice.reducer