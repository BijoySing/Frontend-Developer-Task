"use client";

import React, { useState } from "react";
import { Calendar, User, CheckCircle, Wifi, Snowflake, Building, Search, Home, Bed } from 'lucide-react';
import Image from "next/image";

const roomTypes = [
    {
        name: 'Twin Room',
        size: '1200 sqft',
        bedInfo: '2 single beds',
        bathroom: '1 bathroom',
        amenities: ['Wi-Fi', 'Air Condition', 'Bathroom,TV'],
        // guests: '2 Adults, 1 Child',
        price: '282',
        currency: 'USD',
        included: 'Breakfast included',
        available: 'Only 4 rooms left',
        cancellation: 'Free cancellation',
    }
];

const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
        case 'wi-fi':
            return <Wifi className="w-3 h-3" />;
        case 'air conditioning':
            return <Snowflake className="w-3 h-3" />;
        case 'balcony':
            return <Building className="w-3 h-3" />;
        default:
            return null;
    }
};

const Availability = () => {
    const [checkIn] = useState("Tue, 23 June 2024");
    const [checkOut] = useState("Sat, 29 June 2024");
    const [guests] = useState("2 Adults - 0 Children - 1 Room");

    return (
        <div className="w-[1000px] mx-auto bg-white rounded-lg">
            <h3 className="font-semibold text-lg mb-4">Availability</h3>

            {/* Search Filters */}
            <div className="rounded-xl w-full max-w-[840px] h-[95px] px-4 border-2 border-[#A3D0EE] flex items-center flex-wrap gap-6 mb-6 text-sm text-gray-700">
                <div className="flex flex-col gap-2">
                    <h1 className="font-medium">Check-in</h1>
                    <div className="flex items-center bg-gray-100 p-2 rounded-2xl gap-2">
 <div className="bg-[#007DD0] p-1 rounded-4xl inline-flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>                        <p>{checkIn}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-medium">Check-out</h1>
                    <div className="flex items-center bg-gray-100 p-2 rounded-2xl gap-2">
                        <div className="bg-[#007DD0] p-1 rounded-4xl inline-flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <p>{checkOut}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h1 className="font-medium">Room & Guests</h1>
                    <div className="flex items-center bg-gray-100 p-2 rounded-2xl gap-2">
 <div className="bg-[#007DD0] p-1 rounded-4xl inline-flex items-center justify-center">
                            <Home className="w-4 h-4 text-white" />
                        </div>
                        <p>{guests}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-4">
                    <button className="cursor-pointer flex items-center justify-center w-[115px] h-[32px] bg-[#007DD0] hover:bg-blue-400 text-white rounded-full transition-colors">
                        <Search className="w-4 h-4 mr-1" />
                        Search
                    </button>
                </div>
            </div>

            {/* Room Types Table */}
            <div className="max-w-[1108px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="bg-[#007DD0] text-white border-b border-[#007DD0]">
                    <div className="grid grid-cols-12 gap-4 px-6 py-2 text-sm font-medium">
                        <div className="col-span-3 border-r border-[#007DD0] pr-4">Room type</div>
                        <div className="col-span-2 border-r border-[#007DD0] pr-4">Number of guests</div>
                        <div className="col-span-2 border-r border-[#007DD0] pr-4">Price for 1 week</div>
                        <div className="col-span-2 border-r border-[#007DD0] pr-4">Your choices</div>
                        <div className="col-span-2 border-r border-[#007DD0] pr-4">Select rooms</div>
                        <div className="col-span-1">Book now</div>
                    </div>
                </div>

                {/* Room Rows */}
                <div className="divide-y divide-[#007DD0]">
                    {/* Row 1 */}
                    <div className="grid grid-cols-12 gap-4 px-6 py-2 hover:bg-gray-50 transition-colors border-b border-[#8bbbdb]">
                        {/* Room Type */}
                        <div className="col-span-3 border-r border-[#568eb3] pr-4">
                            <div className="space-y-2">
                                <h3 className="font-semibold text-[#007DD0]">Twin Room</h3>
                                <div className="text-sm text-gray-600">
                                <div className="text-sm text-gray-600 gap-1">
                                    <div className="flex items-center gap-1" >
                                        <p>2 single beds</p>
                                        <Image
                                            src="/images/bed.png"
                                            alt="Bed"
                                            className="w-4 h-4 inline-block mr-1"
                                            width={16}
                                            height={16}
                                        />
                                        <Image
                                            src="/images/bed.png"
                                            alt="Bed"
                                            className="w-4 h-4 inline-block mr-1"
                                            width={16}
                                            height={16}
                                        />
                                    </div>
                                    <div>
                                        <Image
                                            src="/images/door.png"
                                            alt="Bathroom"
                                            className="w-4 h-4 inline-block mr-1"
                                            width={16}
                                            height={16}
                                        />
                                        Room
                                          <Image
                                            src="/images/ft.png"
                                            alt="Bathroom"
                                            className="w-4 h-4 inline-block mr- ml-3"
                                            width={16}
                                            height={16}
                                        />
                                        <span className="ml-1">1200 sqft</span>

                                    </div>
                                    <div>
                                        <Image
                                            src="/images/acc.png"
                                            alt="Floor Area"
                                            className="w-4 h-4 inline-block mr-1"
                                            width={16}
                                            height={16}
                                        />
                                        <span className="ml-0 mr-1 text-sm my-1">Air Condition</span>
                                        <Image
                                            src="/images/bath.png"
                                            alt="Air Condition"
                                            className="w-4 h-4 inline-block ml-3 mr-1"
                                            width={16}
                                            height={16}
                                        />
                                        <span className="ml-0">Bathroom</span>
                                    </div>

                                   
                                </div>
                                <div className="flex justify-between gap-2 mt-1">
                                   <div> <Image
                                        src="/images/tv.png"
                                        alt="Wi-Fi"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="text-sm text-gray-600">TV</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-600  px-2 py-1 rounded">
                                        <Wifi className="w-4 h-4" />
                                        <span>Wi-Fi</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Number of Guests */}
                        <div className="col-span-2 border-r border-[#8bbbdb] pr-4 flex items-start pt-2">
                            <div className="flex items-center text-sm text-gray-700">
                                <User className="w-4 h-4 mr-2" />
                                <User className="w-4 h-4 mr-2" />
                             </div>
                        </div>
                        {/* Price */}
                        <div className="col-span-2 border-r border-[#8bbbdb] pr-4 pt-2">
                            <div className="space-y-1">
                                <div className="text-xl font-bold text-gray-900">
                                    USD 282
                                </div>
                               
                               
                            </div>
                        </div>
                        {/* Your Choices */}
                        <div className="col-span-2 border-r border-[#8bbbdb] pr-4 pt-2">
                            <div className=" text-sm text-gray-800 ">
                                 <div className="text-sm font-medium text-green-00">
                                    Breakfast included
                                </div>
                                <div className="text-sm text-red-500">
                                    Only 4 rooms left
                                </div>
                            </div>
                        </div>
                        {/* Select Rooms */}
                        <div className="col-span-2 border-r border-[#8bbbdb] pt-2">
                            <select className="rounded-full border bg-gray-100 border-gray-300  px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="1">0 </option>
                                <option value="2">1 </option>
                                <option value="3">2 </option>
                            </select>
                        </div>
                        {/* Book Now Button */}
                        <div className="col-span-1 pt-2 pr-4">
                            <button className="rounded-4xl p-2 bg-[#007DD0] hover:bg-blue-700 text-white font-medium py-2 px-4  transition-colors">
                                Reserve
                            </button>
                        </div>
                    </div>
                 </div>
                {/* Row 2 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-2 hover:bg-gray-50 transition-colors border-b border-[#8bbbdb]">
                    {/* Room Type */}
                    <div className="col-span-3 border-r border-[#568eb3] pr-4">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-[#007DD0]">Deluxe Double Room </h3>
                            <div className="text-sm text-gray-600 gap-1">
                                <div className="flex items-center gap-1" >
                                    <p>2 single beds</p>
                                    <Image
                                        src="/images/bed.png"
                                        alt="Bed"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <Image
                                        src="/images/bed.png"
                                        alt="Bed"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/images/door.png"
                                        alt="Bathroom"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    Room
                                    <Image
                                        src="/images/ft.png"
                                        alt="Bathroom"
                                        className="w-4 h-4 inline-block mr- ml-3"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-1">1200 sqft</span>
                                </div>
                                <div>
                                    <Image
                                        src="/images/acc.png"
                                        alt="Floor Area"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-0 mr-1 text-sm my-1">Air Condition</span>
                                    <Image
                                        src="/images/bath.png"
                                        alt="Air Condition"
                                        className="w-4 h-4 inline-block ml-3 mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-0">Bathroom</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 mt-1">
                                <div>
                                    <Image
                                        src="/images/tv.png"
                                        alt="Wi-Fi"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="text-sm text-gray-600">TV</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-600  px-2 py-1 rounded">
                                    <Wifi className="w-4 h-4" />
                                    <span>Wi-Fi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Number of Guests */}
                    <div className="col-span-2 border-r border-[#8bbbdb] pr-4 flex items-start pt-2">
                        <div className="flex items-center text-sm text-gray-700">
                            <User className="w-4 h-4 mr-2" />
                            <User className="w-4 h-4 mr-2" />
                        </div>
                    </div>
                    {/* Price */}
                    <div className="col-span-2 border-r border-[#8bbbdb] pr-4 pt-2">
                        <div className="space-y-1">
                            <div className="text-xl font-bold text-gray-900">
                                USD 282
                            </div>
                        </div>
                    </div>
                    {/* Your Choices */}
                    <div className="col-span-2 border-r border-[#8bbbdb] pr-4 pt-2">
                        <div className=" text-sm text-gray-800 ">
                            <div className="text-sm font-medium text-green-00">
                                Breakfast included
                            </div>
                            <div className="text-sm text-red-500">
                                Only 4 rooms left
                            </div>
                        </div>
                    </div>
                    {/* Select Rooms */}
                    <div className="col-span-2 border- border-[#8bbbdb] pt-2">
                        <select className=" border bg-gray-100 border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="1">0 </option>
                            <option value="2">1 </option>
                            <option value="3">2 </option>
                        </select>
                    </div>
                    {/* Book Now Button */}
                            
                </div>
                {/* Row 3 */}
                <div className="grid grid-cols-12 gap-4 px-6 py-2 hover:bg-gray-50 transition-colors border-b border-[#8bbbdb]">
                    {/* Room Type */}
                    <div className="col-span-3 border-b border-r border-[#568eb3] pr-4">
                        <div className="space-y-2">
                            <h3 className="font-semibold text-[#007DD0]">Deluxe Double Room </h3>
                            <div className="text-sm text-gray-600 gap-1">
                                <div className="flex items-center gap-1" >
                                    <p>2 single beds</p>
                                    <Image
                                        src="/images/bed.png"
                                        alt="Bed"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <Image
                                        src="/images/bed.png"
                                        alt="Bed"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                </div>
                                <div>
                                    <Image
                                        src="/images/door.png"
                                        alt="Bathroom"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    Room
                                    <Image
                                        src="/images/ft.png"
                                        alt="Bathroom"
                                        className="w-4 h-4 inline-block mr- ml-3"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-1">1200 sqft</span>
                                </div>
                                <div>
                                    <Image
                                        src="/images/acc.png"
                                        alt="Floor Area"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-0 mr-1 text-sm my-1">Air Condition</span>
                                    <Image
                                        src="/images/bath.png"
                                        alt="Air Condition"
                                        className="w-4 h-4 inline-block ml-3 mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="ml-0">Bathroom</span>
                                </div>
                            </div>
                            <div className="flex justify-between gap-2 mt-1">
                                <div>
                                    <Image
                                        src="/images/tv.png"
                                        alt="Wi-Fi"
                                        className="w-4 h-4 inline-block mr-1"
                                        width={16}
                                        height={16}
                                    />
                                    <span className="text-sm text-gray-600">TV</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-600  px-2 py-1 rounded">
                                    <Wifi className="w-4 h-4" />
                                    <span>Wi-Fi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Number of Guests */}
                    <div className="col-span-2 border-r border-b border-[#8bbbdb] pr-4 flex items-start pt-2">
                        <div className="flex items-center text-sm text-gray-700">
                            <User className="w-4 h-4 mr-2" />
                            <User className="w-4 h-4 mr-2" />
                        </div>
                    </div>
                    {/* Price */}
                    <div className="col-span-2 border-r border-b border-[#8bbbdb] pr-4 pt-2">
                        <div className="space-y-1">
                            <div className="text-xl font-bold text-gray-900">
                                USD 282
                            </div>
                        </div>
                    </div>
                    {/* Your Choices */}
                    <div className="col-span-2 border-r border-b border-[#8bbbdb] pr-4 pt-2">
                        <div className=" text-sm text-gray-800 ">
                            <div className="text-sm font-medium text-green-00">
                                Breakfast included
                            </div>
                            <div className="text-sm text-red-500">
                                Only 4 rooms left
                            </div>
                        </div>
                    </div>
                    {/* Select Rooms */}
                    <div className="col-span-2 border-b border-[#8bbbdb] pt-2">
                        <select className="bg-gray-100 border border-gray-300 rounded-2xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="1">0 </option>
                            <option value="2">1 </option>
                            <option value="3">2 </option>
                        </select>
                    </div>
                    {/* Book Now Button */}
                    <div className="col-span-1 pt-2 pr-4 border-b border-[#8bbbdb]">
                        
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Availability;