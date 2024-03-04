import { configureStore } from "@reduxjs/toolkit";
import { TripCoordinateReducer } from "../Slices/TripCoordinateSlice";


export const store = configureStore({
    reducer: TripCoordinateReducer
});