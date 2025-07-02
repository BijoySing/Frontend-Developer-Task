"use client";

import React, { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Calendar, CreditCard, Users, Baby, Ban, Wallet } from "lucide-react";

interface Review {
    title: string;
    content: string;
    author: string;
    location: string;
    rating: number;
    date: string;
}

const GuestReviews: React.FC = () => {
    const [currentReview, setCurrentReview] = useState(0);

    const reviews: Review[] = [
        {
            title: "Breathtaking Views and Luxury Comfort!",
            content: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
             author: "Sofia B.",    
            location: "France",
            rating: 5,
            date: "Jul 18, 2024"
        },
        {
            title: "Exceptional Stay with Excellent Amenities",
            content: "The Executive Suite provided an exceptional experience. The room was spotless, elegantly designed, and equipped with everything you could need. The marble bathroom with its bathtub and walk-in shower was pure luxury. The location is perfect for exploring the city, and the staff truly makes you feel welcome.",
            author: "Youssef H.",
            location: "Morocco",
            rating: 5,
            date: "Jul 15, 2024"
        }
    ];

    const nextReview = () => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    };

    return (
        <div className="max-w-[1008px] mx-auto px-4 py-6 space-y-8 font-sans">
            {/* Guest Reviews Section */}
            <div>
                <div className="mb-4">
                    <h2 className="text-[18px] font-semibold text-black">What Our Guests Say</h2>
                    <div className="flex items-center  justify-between gap-2">
                       <div className=" flex justify-center mt-2 mb-0"> <button className="text-[#0066CC] text-[14px] ">
                            <ArrowLeft className="p-2 w-10 h-10 ml-12 bg-gray-100 rounded-2xl text-gray-400  " />
                        </button>
                                                <button className="text-[#0066CC] text-[14px] ">
                            <ArrowRight className="p-2 w-10 h-10 ml-2 bg-blue-100 rounded-2xl text-blue-400 " />
                        </button>
                        </div>
                        <button className="text-[#0066CC] text-[14px] hover:underline flex items-center gap-1 border-b border-[#0066CC]">
                            <div className="flex items-center gap-1 border-b  border-[#0066CC]">
                            </div >
                            <p className="text-[14px] border-b border-[#dce1e6]">See All</p>
                            <ArrowRight className="underline cursor-pointer w-4 h-4 ml-2" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevReview}
                        // className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-50"
                    >
                        {/* <ChevronLeft className="w-5 h-5 text-gray-600" /> */}
                    </button>

                    <button
                        onClick={nextReview}
                        // className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md border border-gray-200 hover:bg-gray-50"
                    >
                        {/* <ChevronRight className="w-5 h-5 text-gray-600" /> */}
                    </button>

                    {/* Review Cards Container */}
                    <div className="flex gap-6 overflow-hidden">
                        {/* First Review Card */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-[16px] font-bold text-black mb-3">"{reviews[0].title}"</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed mb-4 line-clamp-4">
                                {reviews[0].content}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <span className="text-[14px] text-black font-medium">— {reviews[0].author}, {reviews[0].location}</span>
                                <span className="text-[12px] text-gray-500">{reviews[0].date}</span>
                            </div>
                        </div>

                        {/* Second Review Card */}
                        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-6">
                            <h3 className="text-[16px] font-bold text-black mb-3">"{reviews[1].title}"</h3>
                            <p className="text-[10px] text-gray-500 leading-relaxed mb-4 line-clamp-4">
                                {reviews[1].content}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-yellow-400 fill-current"
                                    />
                                ))}
                            </div>

                            {/* Author */}
                            <div className="flex items-center justify-between">
                                <span className="text-[14px] text-black font-medium">— {reviews[1].author}, {reviews[1].location}</span>
                                <span className="text-[12px] text-gray-500">{reviews[1].date}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-6">Policies</h2>

                <div className="space-y-6 border *:border-gray-200 p-6 rounded-lg bg-white">
                    {/* Check-in */}
                    <div className="flex gap-6 border-b border-gray-200">
                        <div className="flex items-start gap-3 min-w-[200px]">
                            <div>
                                <h3 className="font-medium mb-1">Check-in</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-600 ">
                            <p className="text-sm text-gray-800 font-semibold">Available 24 hours</p>

                            <p>Guests are required to show a photo identification and credit card upon check-in. You'll need to let the property know in advance what time you'll arrive.</p>
                        </div>
                    </div>

                    {/* Check-out */}
                    <div className="flex gap-6 *:border-b border-gray-200">
                        <div className="flex items-start gap-3 min-w-[200px]">
                            <div>
                                <h3 className="font-medium mb-1">Check-out</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-800 font-semibold">
                                <p className="text-sm text-gray-800">Available 24 hours</p>
                        </div>
                    </div>

                    {/* Cancellation/prepayment */}
                    <div className="flex gap-6 border-b border-gray-200">
                        <div className="flex items-start gap-3 min-w-[200px]">
                            <div>
                                <h3 className="font-medium mb-1">Cancellation/prepayment</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-700 space-y-">

                            <p>Cancellation and prepayment policies vary according to accommodation type. Please check what conditions may apply to each option when making your selection.</p>
                        </div>
                    </div>

                    {/* Child policies */}
                    <div className="flex gap-6 *:border-b border-gray-200">
                        <div className="flex items-center border-b border-gray-200 gap-3 min-w-[200px]">
                            {/* <Users className="w-5 h-5 text-gray-600 mt-0.5" /> */}
                            <div className="flex items-center justify-center text-center">
                                <h3 className="font-medium mb-1">Children and beds</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-700 space-y-2">
                            <div>
                            <p className="text-sm text-gray-800 font-semibold">Childs Policies</p>
                                <p>Children of any age are welcome.</p>
                                <p>Children 18 and above are charged as adults at this property.</p>
                                <p>To see correct prices and occupancy information, please add the number of children in your group and their ages to your search.</p>
                            </div>
                            <div>
                                <p className="font-semibold">Cot and extra bed policies</p>
                                <p>The number of extra beds allowed is dependent on the option you choose. Please check your selected option for more details.</p>
                                <p>There are no cots available at this property.</p>
                                <p>All extra beds are subject to availability.</p>
                            </div>
                        </div>
                    </div>

                    {/* Age restriction */}
                    <div className="flex gap-6 *:border-b border-gray-300">
                        <div className="flex items-start gap-3 min-w-[200px]">
                            {/* <Baby className="w-5 h-5 text-gray-600 mt-0.5" /> */}
                            <div>
                                <h3 className="font-medium mb-1">No age restriction</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-700">
                            <p>There is no age requirement for check-in.</p>
                        </div>
                    </div>

                    {/* Pets */}
                    <div className="flex gap-6 border-b border-gray-300">
                        <div className="flex items-start gap-3 min-w-[200px]">
                            {/* <Ban className="w-5 h-5 text-gray-600 mt-0.5" /> */}
                            <div>
                                <h3 className="font-medium mb-1">Pets</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-700">
                            <p>Pets are not allowed.</p>
                        </div>
                    </div>

                    {/* Cash only */}
                    <div className="flex gap-6 ">
                        <div className="flex items-start gap-1 min-w-[200px]">
                            {/* <Wallet className="w-5 h-5 text-gray-600 mt-0.5" /> */}
                            <div>
                                <h3 className="font-medium mb-1">Cash only</h3>
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-700">
                            <p>This property only accepts cash payments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuestReviews;