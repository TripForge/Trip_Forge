// import { Typography } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import Map from "../../Components/Map";
import PlacesCard from "../../Components/PlacesCard";
import { MenuCustomList } from "../../Components/MenuCustomList";


const menuItems = [
  "Restarunts",
  "Hotels",
  "Attractions",
];

const ratingItens = [
  "All",
  "Above 3.0",
  "Above 4.0",
  "Above 4.5"
];




export default function Hero() {
  return <div className="flex flex-row">
    <div className="flex flex-col md:flex-row w-full">
      {/* border-dashed  my-2 md:mx-2 rounded-md */}
      <div className="column-2 w-full md:w-5/12 h-full border-2">
        <Typography variant="h3">Restaraunts, Hotels & Attractions around you.</Typography>
        <div className="flex flex-row mt-2 mb-2">
          <MenuCustomList menuItems={menuItems} heading={"Type"}></MenuCustomList>
          <MenuCustomList menuItems={ratingItens} heading={"Rating"}></MenuCustomList>
        </div>

        <div className="flex flex-col">
          <PlacesCard></PlacesCard>
          <PlacesCard></PlacesCard>
          <PlacesCard></PlacesCard>
          <PlacesCard></PlacesCard>
          <PlacesCard></PlacesCard>
        </div>
      </div>
      {/* <div className="column-3 w-full md:w-7/12 h-full border-2"> */}
      <div className="column-3 w-full md:w-7/12 h-full border-2 sticky top-0 z-10 overflow-auto">
        <Map></Map>
        <div style={{ height: "90vh", width: "100%" }}></div>
      </div>
    </div>
  </div>
}




// export default function Hero() {
//   return (
//     <div className="flex flex-row h-screen">
//       <div className="flex flex-col md:flex-row w-full">
//         <div className="column-2 w-full md:w-5/12 h-full border-2 overflow-auto">
//           <Typography variant="h3">Restaurants, Hotels & Attractions around you.</Typography>
//           <div className="flex flex-row mt-2 mb-2">
//             <MenuCustomList menuItems={menuItems} heading={"Type"} />
//             <MenuCustomList menuItems={ratingItens} heading={"Rating"} />
//           </div>
//           <div className="flex flex-col">
//             <PlacesCard />
//             <PlacesCard />
//             <PlacesCard />
//             <PlacesCard />
//             <PlacesCard />
//           </div>
//         </div>
//         <div className="column-3 w-full md:w-7/12 h-full border-2 sticky top-0 z-10">
//           <Map />
//           {/* Additional content for the map if needed */}
//           {/* <div style={{ height: "90vh", width: "100%" }}></div> */}
//         </div>
//       </div>
//     </div>
//   );
// }

