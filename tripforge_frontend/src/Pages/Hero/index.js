import Map from "../../Components/Map";
import PlacesList from "../../Components/PlacesList";
import { getPlaces, getWeatherData } from "../../api";
import { useEffect, useState } from "react";

const defaultBounds = {
  ne: {
    lat: 30.529417066309108,
    lng: 76.67113605198972,
  },
  sw: {
    lat: 30.499765872677585,
    lng: 76.63448634801023,
  },
};

export default function Hero({ coordinates, setCoordinates }) {
  const [places, setPlaces] = useState([]);
  // const [weatherData, setWeatherData] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  const [isLoading, SetIsLoading] = useState(false);

  const [type, setType] = useState("Restaurants");
  const [rating, setRating] = useState("rating");

  const [filteredPlaces, setFilteredPlaces] = useState([]);

  const [bounds, setBounds] = useState({});

  // use effect to set initial coordinates to users location

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
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
      console.log("filter rating : ", filterRating);
      const filteredPlaces = places.filter(
        (place) => place.rating > filterRating[rating]
      );
      setFilteredPlaces(filteredPlaces);
      console.log("filtered places : ", filteredPlaces);
    }
  }, [rating]);

  // useeffect to rerender map and fetch places data when map location changes

  useEffect(() => {
    if (bounds.sw && bounds.ne) {
      SetIsLoading(true);

      // getWeatherData(coordinates).then((data) => setWeatherData(data));

      getPlaces(type.toLowerCase(), bounds).then((data) => {
        setFilteredPlaces([]);
        setPlaces(
          data?.data?.filter((place) => place.name && place.num_reviews > 0)
        );
        SetIsLoading(false);
      });

      // console.log("places : ", places);
    }
  }, [type, bounds]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col md:flex-row w-full">
        <PlacesList
          places={filteredPlaces.length ? filteredPlaces : places}
          childClicked={childClicked}
          isLoading={isLoading}
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        ></PlacesList>
        <div className="column-3 w-full md:w-7/12 h-full sticky top-0 z-10 overflow-auto">
          <Map
            setCoordinates={setCoordinates}
            coordinates={coordinates}
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

// export default function Hero() {
//   return (
//     <div className="flex flex-row h-screen">
//       <div className="flex flex-col md:flex-row w-full">
// <div className="column-2 w-full md:w-5/12 h-full border-2 overflow-auto">
//   <Typography variant="h3">Restaurants, Hotels & Attractions around you.</Typography>
//   <div className="flex flex-row mt-2 mb-2">
//     <MenuCustomList menuItems={menuItems} heading={"Type"} />
//     <MenuCustomList menuItems={ratingItens} heading={"Rating"} />
//   </div>
//   <div className="flex flex-col">
//     <PlacesCard />
//     <PlacesCard />
//     <PlacesCard />
//     <PlacesCard />
//     <PlacesCard />
//   </div>
// </div>
//         <div className="column-3 w-full md:w-7/12 h-full border-2 sticky top-0 z-10">
//           <Map />
//           {/* Additional content for the map if needed */}
//           {/* <div style={{ height: "90vh", width: "100%" }}></div> */}
//         </div>
//       </div>
//     </div>
//   );
// }
