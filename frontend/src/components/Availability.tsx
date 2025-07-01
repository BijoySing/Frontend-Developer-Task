"use client";

import React, { useState } from "react";
import { Calendar, Users, CheckCircle, Badge } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface RoomType {
    name: string;
    size: string;
    guests: number;
    price: number;
    included: string;
    amenities: string[];
    available: string;
}

const Availability: React.FC = () => {
    const [checkIn] = useState("Jun 04 2024");
    const [checkOut] = useState("Jun 08 2024");
    const [guests] = useState("2 Adults, 1 Children, 1 Room");

    const roomTypes: RoomType[] = [
        {
            name: "Executive",
            size: "28 m²",
            guests: 2,
            price: 292,
            included: "Breakfast included",
            amenities: ["Wifi", "Air conditioning", "Bathroom", "View"],
            available: "Only 4 rooms left!",
        },
        {
            name: "Deluxe",
            size: "32 m²",
            guests: 2,
            price: 292,
            included: "Breakfast included",
            amenities: ["Wifi", "Air conditioning", "Bathroom", "View"],
            available: "Only 4 rooms left!",
        },
        {
            name: "Standard Suite",
            size: "45 m²",
            guests: 3,
            price: 342,
            included: "Breakfast included",
            amenities: ["Wifi", "Air conditioning", "Bathroom", "Living room"],
            available: "",
        },
    ];

    return (
        <div className="mb-8 mt-2 ml-10 w-[1108px] mx-auto p-4 bg-white rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4">Availability</h3>

            {/* Search Filters */}
            <div className="rounded-xl w-[840px] h-[95px] px-2 border-2 border-[#A3D0EE] flex items-center flex-wrap gap-6 mb-6 text-sm text-gray-700">
                <div className="flex flex-col  gap-2">
                    <h1>Check-in</h1>
                    <div className="flex items-center  bg-gray-100 p-2 rounded-2xl">
                        <Image
                            src="/images/cc.png"
                            alt="Calendar icon"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="">Tue, 23 June 2024</p>

                    </div>
                </div>
                <div className="flex flex-col  gap-2">
                    <h1>Check-out</h1>
                    <div className="flex  bg-gray-100 p-2 rounded-2xl">
                        <Image
                            src="/images/cc.png"
                            alt="Calendar icon"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="">Sat, 29 June 2024</p>


                    </div>
                </div>
                <div className="flex flex-col  gap-2">
                    <h1>Room & Guests</h1>
                    <div className="flex  bg-gray-100 p-2 rounded-2xl">
                        <Image
                            src="/images/home.png"
                            alt="User icon"
                            width={24}
                            height={24}
                            className="mr-2"
                        />
                        <p className="">2 Adults  - 0 Children - 1 Room</p>
                    </div>
                </div>
                <div className="flex flex-col  gap-2 mt-4">
                   <Image
                       src="/images/search.png"
                       alt="Search icon"
                       width={115}
                       height={32}
                       className="mt-2 cursor-pointer hover:bg-blue-200 rounded-full "
                   />
                </div>
            </div>

            {/* Room Types Table */}
            <div className="bg-white rounded-lg border overflow-x-auto">
                {/* Table Header */}
                <div className="bg-[#007DD0] text-white px-4 py-3">
                    <div className="grid grid-cols-6 gap-4 text-sm font-medium">
                        <div className="col-span-2">Room type</div>
                        <div>Number of guests</div>
                        <div>Price for 1 week</div>
                        <div>Your choices</div>
                        <div>Select rooms</div>
                        <div>Your choices</div>
                    </div>
                </div>

                {/* Room Rows */}
                {roomTypes.map((room, index) => (
                    <div
                        key={index}
                        className="px-4 py-5 border-b last:border-b-0 hover:bg-gray-50 transition"
                    >
                        <div className="grid grid-cols-6 gap-4 items-start text-sm">
                            {/* Room Info */}
                            <div className="col-span-2">
                                <div className="font-semibold text-base">{room.name}</div>
                                <div className="text-gray-500">{room.size}</div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                    {room.amenities.map((amenity, i) => (
                                        <Badge
                                            key={i}
                                            className="bg-gray-200 text-xs px-2 py-1 rounded-md"
                                        >
                                            {amenity}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="flex items-center text-gray-700">
                                <Users className="w-4 h-4 mr-1" />
                                {room.guests}
                            </div>

                            {/* Price */}
                            <div>
                                <div className="font-bold text-gray-800">${room.price}</div>
                                <div className="text-green-600">{room.included}</div>
                                {room.available && (
                                    <div className="text-red-600">{room.available}</div>
                                )}
                            </div>

                            {/* Your Choices */}
                            <div className="text-green-600 flex items-center">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Free cancellation
                            </div>

                            {/* Reserve Button */}
                            <div>
                                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                                    Reserve
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Availability;
