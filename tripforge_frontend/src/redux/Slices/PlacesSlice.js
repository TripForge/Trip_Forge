import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    places: []
};

const placesSlice = createSlice({
    name: "places",
    initialState: initialState,
    reducers: {
        setMyPlaces: (state, action) => {
            // console.log("setPlaces reducer called ");
            // console.log("setPlaces payload : ", action.payload);
            // console.log("setPlaces state in reducer : ", state.places);
            state.places = action.payload.myplaces;
            // state = { ...action.payload };
            // console.log("setPlaces state in reducer after : ", state.places);
        },
        setPlaceAt: (state, action) => {
            const index = action.payload.index;
            const place = action.payload.place;
            state.places[index] = place;
        },
    }

});

export const { setMyPlaces, setPlaceAt } = placesSlice.actions;

export const PlacesReducer = placesSlice.reducer;
