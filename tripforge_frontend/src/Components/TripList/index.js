import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { createNewArray } from "../../helpers";
import MyAccordion from "../MyAccordion";

export default function TripList() {

    const [open, setOpen] = useState(-1);

    const arr = createNewArray(10, true);
    console.log(" inside trip list", arr);


    return (
        <>

            <div className="column-2 w-full md:w-5/12 h-full max-h-screen pl-2">
                <Typography variant="h3">Your Trip</Typography>

                {/* <div className="flex flex-row mt-2 mb-2">

                </div> */}

                <div className="overflow-y-auto" >
                    <div className="flex flex-col">
                        {
                            arr.map((val, index) => {
                                return (
                                    <MyAccordion
                                        header={`header ${index}`}
                                        open={open}
                                        setOpen={setOpen}
                                        index={index}
                                    ></MyAccordion>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}