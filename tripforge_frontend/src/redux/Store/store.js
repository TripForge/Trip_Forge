import { configureStore } from "@reduxjs/toolkit";
import { TripCoordinateReducer } from "../Slices/TripCoordinateSlice";
// import userReducer from '../../Components/user/UserProfile/userSlice'
export const store = configureStore({
    reducer: {
        TripCoordinateReducer,
        
    }
});