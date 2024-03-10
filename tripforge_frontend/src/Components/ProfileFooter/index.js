import React from "react";

export default function Footer() {
    return (
        <>
            {/* bg-gray-100 */}
            <footer className=" pt-8 pb-6">

                <div className="container mx-auto px-4">

                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}by{" "}
                                <span
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    TripForge
                                </span>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}