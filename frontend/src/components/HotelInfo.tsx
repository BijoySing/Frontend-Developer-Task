"use client";
 import Image from "next/image";

export default function HotelInfo() {
    return (
        <section className="ml-7 py-">
            <div className="flex items-center bg-red-00  md:flex-row gap-8">
                {/* Left side: Hotel Image + Info */}
                <div className=" px-4 sm:px-6 md:px-8 py-">
                    {/* Nav Tabs */}
                    <nav className="flex items-center flex-wrap gap-4 sm:gap-6 mb-6  pb-2 text-sm sm:text-base overflow-x-auto">
                        <a href="#overview" className="text-[#626262] hover:underline hover:text-[#007DD0] whitespace-nowrap">
                            Overview
                        </a>
                        <a href="#features" className="text-[#626262] hover:underline hover:text-[#007DD0] whitespace-nowrap">
                            Features
                        </a>
                        <a href="#reviews" className="text-[#626262] hover:underline hover:text-[#007DD0] whitespace-nowrap">
                            Reviews
                        </a>
                        <a href="#location" className="text-[#626262] hover:underline hover:text-[#007DD0] whitespace-nowrap">

                            <button className=" rounded-4xl text-white px-3 bg-[#007DD0] py-1">
                                 <Image
                                src="/images/not.png"
                                alt="Location icon"
                                width={20}
                                height={20}
                                className="inline-block mr-1 "
                            />
                                massage

                            </button>
                        </a>
                    </nav>

                    {/* Main Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
                        {/* Left side: Property Info + Features */}
                        <div className="space-y-2">
                            {/* Property Info */}
                            <div className="flex gap-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Property Type</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Image
                                            src="/images/door.png"
                                            alt="Resort icon"
                                            width={24}
                                            height={20}
                                            className="mr-2"
                                        />
                                        Resort
                                    </div>
                                </div>

                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Size</h3>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <Image
                                            src="/images/ft.png"
                                            alt="Size icon"
                                            width={24}
                                            height={24}
                                            className="mr-2"
                                        />
                                        12000 sqft
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold text-lg mb-2">Features</h3>
                                <div className="flex flex-wrap  gap-4 gap-y-2 text-sm text-gray-700">
                                    <div className="flex items-center">
                                        <Image src="/images/wifi.png" alt="Wifi" width={35} height={35} className="mr-2" />
                                        Wifi
                                    </div>
                                    <div className="flex items-center">
                                        <Image src="/images/gym.png" alt="Dining" width={35} height={35} className="mr-2" />
                                        Dining
                                    </div>
                                    <div className="flex items-center">
                                        <Image src="/images/pool.png" alt="Swimming Pool" width={35} height={35} className="mr-2" />
                                        Swimming Pool
                                    </div>
                                    <br></br>
                                    <div className="flex items-center">
                                        <Image src="/images/ac.png" alt="AC" width={35} height={35} className="mr-2" />
                                        Air Conditioning
                                    </div>
                                    <div className="flex items-center">
                                        <Image src="/images/gym.png" alt="Gym" width={35} height={35} className="mr-2" />
                                        Gym
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Right side: Guests & Booking */}
                <div className="absolute x-740 right-80 w-[280px] h-[200px] border-2 border-[#A3D0EE] bg-white p-6 rounded-lg shadow-md">
                    <p className="text-md text-gray-600 pt-8 pb-2">1 Week · 2 Adults · 1 Child</p>

                    <div className=" text-black py-2 rounded-lg max-w-sm">
                        <div className="text-xl font-bold">$6,112</div>
                        <button className="cursor-pointer text-white w-[200px] mt-3 bg-[#007DD0] hover:bg-[#005EA6] px-4 py-2 rounded-full text-sm font-medium">
                            Reserve now
                        </button>
                    </div>
                </div>
            </div>

        </section>
    );
}
