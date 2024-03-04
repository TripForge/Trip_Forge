import { createSlice } from "@reduxjs/toolkit";
import reducers from "../Reducers/TripCoordinateResucers";

const initialState = {
    tripCoordinate: { lat: 0, lng: 0 }
};

const tripCoordinateSlice = createSlice({
    name: "TripCoordinate",
    initialState: initialState,
    reducers: reducers
    
});

export const { setTripCoordinates } = tripCoordinateSlice.actions;

export const TripCoordinateReducer = tripCoordinateSlice.reducer;
