import React, { useState } from "react";
import {
    Typography,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import DatePicker from "../../Components/DatePicker";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { setTripCoordinates } from "../../redux/Slices/TripCoordinateSlice";
import { dateString, days } from "../../helpers";
import { createTrip } from "../../redux/Slices/tripSlice";
import { Link, createBrowserRouter } from "react-router-dom";
import Hero from "../Hero";


const router = createBrowserRouter([{
    path: "/",
    element: (<NewTrip />),
},
{
    path: "/yourTrip",
    element: (<Hero></Hero>)
}
]);





const NewTrip = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [autocomplete, setAutocomplete] = useState(null);
    const [coprdinate, setCoordinate] = useState({});
    const dispatch = useDispatch();




    const onLoad = (autoC) => (setAutocomplete(autoC));


    const onPlaceChange = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinate({ lat: lat, lng: lng });
        console.log("autocomplete : ", autocomplete.getPlace());
        // dispatch(setTripCoordinates({ lat: lat, lng: lng }));
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!startDate || !endDate) {
            alert("please select the duration for your trip");
            return;
        }
        if (days(startDate, endDate) <= 0) {
            alert("please pick correct duration");
            return;
        }
        if (days(new Date(), startDate) <= 0) {
            alert("invalid trip || trip cannot start today!!");
            return;
        }
        console.log("my date : ", dateString(startDate));
        console.log("submit form element start : ", e.target.startDate.value);
        console.log("submit form element end : ", e.target.endDate.value);
        console.log("submit form element location : ", e.target.location.value);

        dispatch(createTrip({
            startDate: startDate,
            endDate: endDate,
            location: e.target.location.value,
            coordinates: coprdinate
        }));


        // console.log("store data: ", useSelector((state) => state.tripReducer));

    }

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <Typography variant="h3" className="text-center pt-2 pb-2">Your Trip</Typography>
                <div className="flex space-x-4 content-center place-content-center">
                    <Typography variant="h5">select trip duration</Typography>
                    <DatePicker date={startDate} setDate={setStartDate} label="start date" name="startDate"></DatePicker>
                    <DatePicker date={endDate} setDate={setEndDate} label="end date" name="endDate"></DatePicker>
                </div>
                {/* search box */}
                <div className="flex justify-center items-center pt-2 space-x-3">
                    <Typography variant="h5"> choose a location: </Typography>
                    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChange} className="place-content-center">
                        <div className="">
                            <div className="inline-flex flex-col justify-center relative text-gray-500">
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="p-2 pl-8 rounded border border-gray-200 bg-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent"
                                        placeholder="Search..."
                                        name="location"
                                    />
                                    <svg
                                        className="w-4 h-4 absolute left-2.5 top-3.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            // stroke-linecap
                                            strokeLinecap="round"
                                            // stroke-linejoin
                                            strokeLinejoin="round"
                                            // stroke-width
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </Autocomplete>
                </div>
                <div className="flex justify-center items-center pt-2">
                    <Link to="/yourTrip">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">submit</button> {/* Add type="submit" */}
                    </Link>
                </div>
            </form>
        </>
    )
}


export default NewTrip; 