import React, { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
    Button,
    Typography
} from "@material-tailwind/react";

function MyAccordion({ header, body, open, setOpen, index }) {

    const handleOpen = (value) => setOpen(open === value ? -1 : value);

    return (
        <>
            <Accordion open={open === index} className="border pl-2">
                <AccordionHeader onClick={() => handleOpen(index)} className="pt-1 pb-1">
                    <Typography variant="h5" >{header}</Typography>

                    <div className="!absolute right-4">
                        <Button
                            variant="outlined"
                            className="rounded-full"
                            color="light-green"
                            onClick={null}
                        >
                            Add Places
                        </Button>
                    </div>
                </AccordionHeader>
                <AccordionBody className="pt-1 pb-1">
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>

        </>
    );
}


export default MyAccordion;