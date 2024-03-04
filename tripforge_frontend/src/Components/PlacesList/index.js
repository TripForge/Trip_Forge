import { Spinner, Typography } from "@material-tailwind/react";
import PlacesCard from "../../Components/PlacesCard";
import { MenuCustomList } from "../../Components/MenuCustomList";
import { createRef, useEffect, useState } from "react";




const menuItems = [
    // "All",
    "Restaurants",
    "Hotels",
    "Attractions",
];

const ratingItens = [
    "All",
    "Above 3.0",
    "Above 4.0",
    "Above 4.5"
];

export default function PlacesList({ places,
    childClicked,
    isLoading,
    type,
    setType,
    rating,
    setRating

}) {

    console.log("places : ", places);
    console.log("child clicked : ", childClicked);
    // console.log("element ref : ", elRef);
    console.log("checking first card : ", document.getElementById(places[0]?.location_id));


    return (
        <>

            {/* <div className="column-2 w-full md:w-5/12 h-full border-2 overflow-auto">
                <Typography variant="h3">Restaurants, Hotels & Attractions around you.</Typography>
                <div className="flex flex-row mt-2 mb-2">
                    <MenuCustomList menuItems={menuItems} heading={"Type"} />
                    <MenuCustomList menuItems={ratingItens} heading={"Rating"} />
                </div>
                <div className="flex flex-col">
                    {
                        places.map((place, i) => (
                            <PlacesCard
                                place={place}
                                selected={Number(childClicked) == i}
                                ref={elRef[i]}
                            ></PlacesCard>
                        ))
                    }
                </div>
            </div> */}

            {/* <div className="column-2 w-full md:w-5/12 h-full border-2 ">
                <Typography variant="h3">Restaraunts, Hotels & Attractions around you.</Typography>
                <div className="flex flex-row mt-2 mb-2">
                    <MenuCustomList menuItems={menuItems} heading={"Type"}></MenuCustomList>
                    <MenuCustomList menuItems={ratingItens} heading={"Rating"}></MenuCustomList>
                </div>

                <div className="flex flex-col">
                    {
                        places.map((place, i) => (
                            <PlacesCard
                                place={place}
                                selected={Number(childClicked) == i}
                                ref={elRef[i]}
                            ></PlacesCard>
                        ))
                    }
                </div>
            </div> */}

            <div className="column-2 w-full md:w-5/12 h-full max-h-screen">
                <Typography variant="h3">Restaurants, Hotels & Attractions around you.</Typography>
                {/* loading spinners : */}
                {/* <Spinner className="h-16 w-16 text-gray-900/50"></Spinner> */}
                {/* <div class="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" /> */}

                {
                    isLoading ? (
                        <Spinner className="h-16 w-16 text-gray-900/50 text-center"></Spinner>
                    ) :
                        (
                            <>
                                <div className="flex flex-row mt-2 mb-2">
                                    <MenuCustomList
                                        menuItems={menuItems}
                                        heading={"Type"}
                                        selectedItem={type}
                                        setSelectedItem={setType}
                                    ></MenuCustomList>
                                    <MenuCustomList
                                        menuItems={ratingItens}
                                        heading={"Rating"}
                                        selectedItem={rating}
                                        setSelectedItem={setRating}
                                    ></MenuCustomList>
                                </div>
                                <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 80px)" }}>
                                    <div className="flex flex-col">
                                        {places?.map((place, i) => (
                                            place?.name ? (
                                                <PlacesCard
                                                    key={i}
                                                    place={place}
                                                    selected={Number(childClicked) === i}
                                                // ref={elRef[i]}
                                                ></PlacesCard>
                                            ) :
                                                (
                                                    <></>
                                                )

                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
            </div>
        </>
    );
}








// import { Typography } from "@material-tailwind/react";
// import PlacesCard from "../../Components/PlacesCard";
// import { MenuCustomList } from "../../Components/MenuCustomList";
// import { useRef, useEffect, createRef } from "react";

// const menuItems = ["All", "Restaurants", "Hotels", "Attractions"];
// const ratingItems = ["All", "Above 3.0", "Above 4.0", "Above 4.5"];

// export default function PlacesList({ places, childClicked }) {
//     const elRefs = useRef([]);

//     useEffect(() => {
//         elRefs.current = Array(places.length).fill().map((_, i) => elRefs.current[i] || createRef());
//     }, [places]);

//     console.log("places : ", places);
//     console.log("child clicked : ", childClicked);
//     console.log("element refs : ", elRefs.current);

//     return (
//         <div className="column-2 w-full md:w-5/12 h-full max-h-screen">
//             <Typography variant="h3">Restaurants, Hotels & Attractions around you.</Typography>
//             <div className="flex flex-row mt-2 mb-2">
//                 <MenuCustomList menuItems={menuItems} heading={"Type"}></MenuCustomList>
//                 <MenuCustomList menuItems={ratingItems} heading={"Rating"}></MenuCustomList>
//             </div>
//             <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 80px)" }}>
//                 <div className="flex flex-col">
//                     {places?.map((place, i) => (
//                         <PlacesCard
//                             key={i}
//                             place={place}
//                             selected={Number(childClicked) === i}
//                             ref={elRefs.current[i]}
//                         ></PlacesCard>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }


