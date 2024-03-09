import { configureStore } from "@reduxjs/toolkit";
import { TripCoordinateReducer } from "../Slices/TripCoordinateSlice";
import { PlacesReducer } from "../Slices/PlacesSlice";
import { tripReducer } from "../Slices/tripSlice";
import authReducer from '../../Components/Signup/authSlice'
export const store = configureStore({
    reducer: {
        TripCoordinateReducer,
        PlacesReducer,
        tripReducer,
        auth : authReducer,
    }
});