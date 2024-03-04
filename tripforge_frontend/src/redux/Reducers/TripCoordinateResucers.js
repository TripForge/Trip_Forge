
// reducers function



// reducer object
const reducers = {
    setTripCoordinates: (state, action) => {
        console.log("setTripCoordinates reducer called ");
        console.log("payload : ", action.payload);
        console.log("state in reducer : ", state.tripCoordinate);
        state.tripCoordinate = action.payload;
        // state = { ...action.payload };
        console.log("state in reducer after : ", { ...state.tripCoordinate });
    },

}

export default reducers;