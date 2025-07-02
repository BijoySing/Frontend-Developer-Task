'use client';

import { ArrowRight, Bookmark } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
  

 

export default function HeroSection() {
    return (
        <section className="hero-section w-[1108px] bg-[#FFFFFF] text-gray-800 pt-8 pb-10 px-4 md:px-16">
            <div className="w-[1010px] mx-auto">
                {/* Title and actions */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-6">
                    <div className="flex flex-col ">
                        <h1 className="text-2xl text-gray-900 md:text-2xl font">El Aurassi Hotel</h1>
                        <p className="text-md text-[#626262] mt-1">
                            Spacious, modern rooms with panoramic views of the<br></br> Mediterranean Sea.
                        </p>
                    </div>
                    <div className="flex items-center ">
                        <div className='cursor-pointer rounded-full px-5 py-4'>
                            <Bookmark className="w-[50px] h-[50px] p-2 rounded-full bg-[#e5f0f7] text-[#0c82d1]" />
                        </div>
                        <div className='cursor-pointer rounded-full px-5 py-4'>
                            <Image
                                src="/images/group_share_light.png"
                                alt="Hotel image"
                                width={50}
                                height={50}
                                className="rounded-full"

                            />
                        </div>
                        <div className=' cursor-pointer'>
                           <button className="flex gap-1 rounded-4xl p-2 bg-[#007DD0] hover:bg-blue-700 text-white font-medium py-2 px-4  transition-colors">
                                Reserve
                                                            <ArrowRight></ArrowRight>

                            </button>
                      </div>

                    </div>
                </div>
                {/* Image grid */}
                {/* Image grid */}
                <div className="">
                    <div className='flex gap-1'>
                        <div className="bg-amber-700 w-[768px] h-[306px] relative rounded-tl-2xl">
                            <Image
                                src="/images/hero-1.png"
                                alt="Main hotel"
                                layout="fill"
                                objectFit="cover"
                                className="w-[768px] h-[306px] rounded-tl-2xl"
                                priority
                            />
                        </div>
                        <div className='bg-red-00 gap-1 flex flex-col'>
                            <div className="w-[336px] h-[151px] bg-blue-00 relative">
                                <Image
                                    src="/images/hero-2.png"
                                    alt="Hotel 2"
                                    width={370}
                                    height={150}
                                    className="rounded-tr-2xl"
                                />
                            </div>
                            <div className="w-[336px] h-[151px] relative bg-amber-00">
                                <Image
                                    src="/images/hero-3.png"
                                    alt="Hotel 3"
                                    width={370}
                                    height={150}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex '>
                        <div className="div"><Image
                            src="/images/hero-4.png"
                            alt="Hotel 4"
                            width={181}
                            height={151}
                            className="rounded-bl-2xl mt-1"
                        /></div>
                        <div className="div"><Image
                            src="/images/hero-5.png"
                            alt="Hotel 5"
                            width={181}
                            height={151}
                            className="mt-1"
                        /></div>
                        <div className="div"><Image
                            src="/images/hero-6.png"
                            alt="Hotel 6"
                            width={181}
                            height={151}
                            className="mt-1"
                        /></div>
                        <div className="div"><Image
                            src="/images/hero-7.png"
                            alt="Hotel 7"
                            width={181}
                            height={151}
                            className="mt-1"
                        /></div>
                        <div className="div"><Image
                            src="/images/hero-8.png"
                            alt="Hotel 8"
                            width={181}
                            height={151}
                                                        className="mt-1"

                         /></div>
                        <div>
                            <Image
                                src="/images/hero-9.png"
                                alt="Hotel 9"
                                width={181}
                                height={151}
                                className="rounded-br-2xl mt-1"
                            />
                        </div>
                    </div>
                   
            
            </div>
            </div>
        </section >
    );
}

