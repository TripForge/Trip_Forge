import { useDispatch, useSelector } from "react-redux";
import Map from "../../Components/Map";
import PlacesList from "../../Components/PlacesList";
import { getPlaces, getWeatherData } from "../../api";
import { useEffect, useState } from "react";
import { setTripCoordinates } from "../../redux/Slices/TripCoordinateSlice";
import { setMyPlaces } from "../../redux/Slices/PlacesSlice"
import { setTrip, setTripAt } from "../../redux/Slices/tripSlice";
import { createNewArray } from "../../helpers";
import TripList from "../../Components/TripList";
// const defaultBounds = {
//   ne: {
//     lat: 30.529417066309108,
//     lng: 76.67113605198972,
//   },
//   sw: {
//     lat: 30.499765872677585,
//     lng: 76.63448634801023,
//   },
// };

export default function Hero() {
  const dispatch = useDispatch();

  // const [places, setPlaces] = useState([]);
  // const [weatherData, setWeatherData] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, SetIsLoading] = useState(false);

  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("rating");

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [bounds, setBounds] = useState({});

  const places = useSelector((state) => state.PlacesReducer.places);


  // const state = useSelector((state) => state);
  // console.log("state : ", state.PlacesReducer.places);



  // useEffect(() => {
  //   dispatch(setTrip({ trips: createNewArray(10, false) }));
  //   dispatch(setTripAt({ trip: { name: "my trip destination" }, index: 4 }));

  // }, []);
  // const sate = useSelector((state) => state.tripReducer.trip);
  // console.log("state trip in hero: ", sate);





  // use effect to set initial coordinates to users location

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      dispatch(setTripCoordinates({ lat: coords.latitude, lng: coords.longitude }));
    });
  }, []);



  // use effect to filter places by rating
  useEffect(() => {
    const filterRating = {
      "All": "0.0",
      "Above 3.0": "3.0",
      "Above 4.0": "4.0",
      "Above 4.5": "4.5",
    };

    if (rating !== "rating") {
      // console.log("filter rating : ", filterRating);
      const filteredPlaces = places.filter(
        (place) => place.rating > filterRating[rating]
      );
      setFilteredPlaces(filteredPlaces);
      // console.log("filtered places : ", filteredPlaces);
    }
  }, [rating]);




  // useeffect to rerender map and fetch places data when map location changes

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      SetIsLoading(true);

      // getWeatherData(coordinates).then((data) => setWeatherData(data));

      getPlaces(type.toLowerCase(), bounds).then((data) => {
        setFilteredPlaces([]);
        // setPlaces(
        //   data?.data?.filter((place) => place.name && place.num_reviews > 0)
        //   );
        // console.log("callig places in store");
        setRating("All");

        dispatch(setMyPlaces({ myplaces: data?.data?.filter((place) => place.name && place.num_reviews > 0 && place.location_id) }));


        SetIsLoading(false);
      });
    }
  }, [type, bounds]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col md:flex-row w-full">
        {/* <PlacesList
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        ></PlacesList> */}
        <TripList></TripList>
        <div className="column-3 w-full md:w-7/12 h-full sticky top-0 z-10 overflow-auto">
          <Map
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          // weatherData={weatherData}
          ></Map>
          {/* <div style={{ height: "90vh", width: "100%" }}></div> */}
        </div>
      </div>
    </div>
  );
}