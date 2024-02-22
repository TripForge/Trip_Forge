import React from "react";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
// import { CursorArrowRaysIcon } from "@heroicons/react/24/solid";



export function MenuCustomList({ menuItems, heading }) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <Menu open={openMenu} handler={setOpenMenu}>
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
                >
                    <Typography variant="h5">{heading}</Typography>
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform ${openMenu ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList >
                <ul className="col-span-4 flex w-full flex-col gap-1">
                    {menuItems.map((title) => (
                        // <a href="#" key={title}>
                        <MenuItem>
                            <Typography variant="h6" color="blue-gray">
                                {title}
                            </Typography>
                        </MenuItem>
                        // </a>
                    ))}
                </ul>
            </MenuList>
        </Menu>
    );
}