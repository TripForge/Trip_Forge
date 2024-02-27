import Map from "../../Components/Map";
import PlacesList from "../../Components/PlacesList";
import { getPlaces } from '../../api';
import { useEffect, useState } from 'react';


export default function Hero() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [childClicked, setChildClicked] = useState(null);

  const defaultBounds = {
    ne: {
      lat: 30.529417066309108,
      lng: 76.67113605198972
    }, sw: {
      lat: 30.499765872677585,
      lng: 76.63448634801023
    }
  }
  const [bounds, setBounds] = useState(defaultBounds);


  // use effect to set initial coordinates to users location

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      setCoordinates({ lat: coords.latitude, lng: coords.longitude });
    })
  }, [])


  // useeffect to rerender map and fetch places data when map location changes  

  useEffect(() => {
    getPlaces(bounds).then((data) => {
      setPlaces(data.data);
    });
    // console.log("places : ", places);
  }, [coordinates, bounds]);

  return <div className="flex flex-row">
    <div className="flex flex-col md:flex-row w-full">
      <PlacesList 
        places={places}
        childClicked={childClicked}
      ></PlacesList>
      <div className="column-3 w-full md:w-7/12 h-full sticky top-0 z-10 overflow-auto">
        <Map
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setBounds={setBounds}
          places={places}
          setChildClicked={setChildClicked}
        ></Map>
        {/* <div style={{ height: "90vh", width: "100%" }}></div> */}
      </div>
    </div>
  </div>
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

