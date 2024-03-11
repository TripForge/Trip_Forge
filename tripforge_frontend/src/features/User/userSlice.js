import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { createUserInfo } from "./userAPI";

const initialState = {
    userInfo : null,
    status : 'idle',
}

export const createUserInfoAsync = createAsyncThunk(
    'user/createUserInfo',
    async(userData) => {
        const response = await createUserInfo(userData);
        return response.data;
    }
)
export const userSlice = createSlice({
    name : 'userslice',
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
    }
})


export const selectUserInfo = (state) => state.userSlice.loggedInUserToken;
export default userSlice.reducer