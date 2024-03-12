import { configureStore } from "@reduxjs/toolkit";
import { TripCoordinateReducer } from "../Slices/TripCoordinateSlice";

// import userReducer from '../../Components/user/UserProfile/userSlice'
import authSlice from "../../features/auth/authSlice";
import userSlice from "../../features/User/userSlice";
export const store = configureStore({
    reducer: {
        TripCoordinateReducer,
        auth: authSlice,
        user: userSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

});