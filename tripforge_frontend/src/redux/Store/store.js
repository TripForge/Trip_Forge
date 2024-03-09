import { configureStore } from "@reduxjs/toolkit";
import { TripCoordinateReducer } from "../Slices/TripCoordinateSlice";
// import { PlacesReducer } from "../Slices/PlacesSlice";
// import { tripReducer } from "../Slices/tripSlice";
export const store = configureStore({
    reducer: {
        TripCoordinateReducer,
        
    }
});