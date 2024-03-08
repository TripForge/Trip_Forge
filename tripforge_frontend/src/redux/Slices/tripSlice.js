import { createSlice } from "@reduxjs/toolkit";
import { createNewArray, days } from "../../helpers";
const initialState = {
    startDate: new Date(),
    endDate: new Date(),
    location: "",
    coordinates: {},
    trip: []
};

const tripSlice = createSlice({
    name: "trip",
    initialState: initialState,
    reducers: {
        createTrip: (state, action) => {
            const obj = action.payload;
            state.startDate = obj.startDate;
            state.endDate = obj.endDate;
            state.location = obj.location;
            state.coordinates = obj.coordinates;

            const dateDiff = days(obj.startDate, obj.endDate);
            state.trip = createNewArray(dateDiff, []);
            console.log("state data = ", state);
        },
        setTrip: (state, action) => {
            state.trip = action.payload.trips;
        },
        setTripAt: (state, action) => {
            const index = action.payload.index;
            const trip = action.payload.trip;
            state.trip[index] = trip;
        },
    }

});

export const { createTrip, setTrip, setTripAt } = tripSlice.actions;

export const tripReducer = tripSlice.reducer;
