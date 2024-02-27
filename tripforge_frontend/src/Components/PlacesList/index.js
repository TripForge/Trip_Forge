import { Typography } from "@material-tailwind/react";
import PlacesCard from "../../Components/PlacesCard";
import { MenuCustomList } from "../../Components/MenuCustomList";
import { createRef, useEffect, useState } from "react";




const menuItems = [
    "All",
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

export default function PlacesList({ places, childClicked }) {

    const [elRef, setElRef] = useState([]);


    useEffect(() => {
        const refs = Array(places.length).fill().map((_, i) => elRef[i] || createRef());
        setElRef(refs);
    }, [places]);

    console.log("places : ", places);
    console.log("child clicked : ", childClicked);

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
                <div className="flex flex-row mt-2 mb-2">
                    <MenuCustomList menuItems={menuItems} heading={"Type"}></MenuCustomList>
                    <MenuCustomList menuItems={ratingItens} heading={"Rating"}></MenuCustomList>
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: "calc(100% - 80px)" }}>
                    <div className="flex flex-col">
                        {places?.map((place, i) => (
                            <PlacesCard
                                key={i}
                                place={place}
                                selected={Number(childClicked) === i}
                                ref={elRef[i]}
                            ></PlacesCard>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}