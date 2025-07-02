'use client';

import {  Utensils, ShoppingBag, Umbrella, Train } from 'lucide-react';
import Image from 'next/image';

export default function AboutProperty() {
    return (
        <div className="w-[1008px] mx-auto px-4 py-6 space-y-6 text-[#1E1E1E] font-sans">
            {/* Header */}
            <div>
                <h2 className="text-lg font-semibold mb-2">About this property</h2>
                <p className="text-sm text-gray-600 leading-relaxed max-w-4xl">
                    The Executive Suite at El Aurassi Hotel in Algiers offers a luxurious and spacious experience
                    tailored for both business and leisure travelers. With its modern design and panoramic views
                    of the Mediterranean Sea, the suite combines comfort, elegance, and functionality.
                </p>
            </div>

            {/* Explore the Area */}
            <div className="flex  text-xl text-gray-700 font-semibold">
                <span>Explore the area</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-6">
            
                {/* Left column with categories */}
                <div className="flex grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm text-gray-800">
                    {/* Restaurants */}
                    <div className="mr-8">
                        <div className=" text-gray-800 flex items-center font mb-2">
                            <Utensils className="w-4 h-4 mr-2" />
                            Restaurants & cafes
                        </div>
                        <ul className="space-y-1 text-xs text-gray-500">
                            <li className="flex justify-between">
                                <span>Blue Cafe</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Blue Cafe</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Blue Cafe</span>
                                <span>1.4 km</span>
                            </li>
                        </ul>

                    </div>

                    {/* Shops */}
                    <div>
                        <div className="flex items-center font text-gray-800 mb-2">
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Shops & Markets
                        </div>
                        <ul className="space-y-1 text-xs     text-gray-500">
                            <li className="flex justify-between">
                                <span>Central Mall</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Central Mall</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Central Mall</span>
                                <span>1.4 km</span>
                            </li>
                        </ul>

                    </div>

                    {/* Beaches */}
                    <div className="mr-8">
                        <div className="flex items-center font text-gray-800 mb-2">
                            <Umbrella className="w-4 h-4 mr-2" />
                            Beaches
                        </div>
                        <ul className="space-y-1 text-xs text-gray-500">
                            <li className="flex justify-between">
                                <span>Les Dunes Beach</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Les Dunes Beach</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Les Dunes Beach</span>
                                <span>1.4 km</span>
                            </li>
                        </ul>

                    </div>

                    {/* Transport */}
                    <div className="ml-">
                        <div className="flex items-center font text-gray-800 mb-2">
                            <Train className="w-4 h-4 mr-2" />
                            Public transport
                        </div>
                        <ul className="space-y-1 text-xs text-gray-500">
                            <li className="flex justify-between">
                                <span>Train — Riverdale Central Station</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Metro — Cityline Metro Hub</span>
                                <span>1.4 km</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Metro — Cityline Metro Hub</span>
                                <span>1.4 km</span>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* Right side: Map and button */}
                <div className="flex-shrink-0 w-full lg:w-[500px] ml-4 rounded-xl overflow-hidden shadow-lg ">
                    <div className="relative w-full h-[200px]">
                        <Image
                            src="/images/map.png" // Replace with actual map image
                            alt="Map preview"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-center py-3 text-sm text-[#007DD0] font-medium cursor-pointer hover:underline">
                        Explore the Area
                    </div>
                </div>
            </div>
        </div>
    );
}
