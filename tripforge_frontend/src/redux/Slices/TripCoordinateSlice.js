import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tripCoordinate: { lat: 0, lng: 0 }
};

const tripCoordinateSlice = createSlice({
    name: "TripCoordinate",
    initialState: initialState,
    reducers: {
        setTripCoordinates: (state, action) => {
            // console.log("setTripCoordinates reducer called ");
            // console.log("payload : ", action.payload);
            // console.log("state in reducer : ", state.tripCoordinate);
            state.tripCoordinate = action.payload;
            // state = { ...action.payload };
            // console.log("state in reducer after : ", state.tripCoordinate);
        },
    }

});

export const { setTripCoordinates } = tripCoordinateSlice.actions;

export const TripCoordinateReducer = tripCoordinateSlice.reducer;
