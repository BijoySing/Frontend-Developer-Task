'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Star,  Bath, Maximize, Info, Warehouse } from 'lucide-react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';

const YouMayAlsoLike: React.FC = () => {
  const items = Array.from({ length: 100 }, () => ({
    name: 'Sofitel Algiers Hamma Garden',
    desc: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
    price: '699',
    rating: 4.5,
    bedrooms: 2,
    bathrooms: 2,
    area: '1200 sq ft',
    image: '/images/images.jpg', // Make sure this image exists in public/images/
  }));

  return (
    <div className="max-w-[1008px] mx-auto px-4 py-8 ">
      <h2 className="text-[16px] font-medium text-black mb-4">You may also like</h2>


      <div className="relative">
        {/* Navigation Buttons */}
        <div className="flex justify-between gap-2 mb-2 ">
          <button className="swiper-button-prev-1 text-3xl font-semibold rounded-full px-2 py-1 text-blue-500 bg-[#e5f3ff] hover:text-black">←</button>
          <button className="swiper-button-next-1 text-3xl font-semibold rounded-full px-2 py-1 text-blue-500 bg-[#e5f3ff] hover:text-black">→</button>

          {/* <button className="swiper-button-next-1 text-gray-500 hover:text-black">→</button> */}
        </div>
      </div>

      {/* First Row */}
      <Swiper
        modules={[Navigation]}
        // autoplay={{ delay: 000 }}
        navigation={{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.2 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={`row1-${idx}`}>
              <HotelCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row */}
        <Swiper
          modules={[Navigation]}
          // autoplay={{ delay: 5000 }}
        // navigation={{ nextEl: '.swiper-button-next-1', prevEl: '.swiper-button-prev-1' }}
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3.2 },
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={`row2-${idx}`}>
              <HotelCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      );
};

      const HotelCard = ({
        name,
        desc,
        price,
        rating,
        bedrooms,
        bathrooms,
        area,
}: {
        name: string;
      desc: string;
      price: string;
      rating: number;
      bedrooms: number;
      bathrooms: number;
      area: string;
}) => (
      <div className=" border-gray-00 rounded-lg overflow-hidden mb-4">
        <div className="relative h-[180px] bg-gray-00">
          <Image
            src="/images/images.png"
            alt={name}
            fill
            className="object-cover w-[200px] h-[140px] rounded-2xl"
          />
          <div className="absolute bottom-5 left-2 b bg-opacity-60 text-white text-[14px] px-1.5 py-0.5 rounded flex items-center gap-0.5">
            <Star className="w-5 h-5 fill-current text-yellow-500 text-4xl" />
            {rating}
          </div>
        </div>

        <div className="p-3">
          <h3 className="text-[14px] font-medium text-black mb-1">{name}</h3>
          <p className="text-[11px] text-gray-600 mb-2 line-clamp-2">{desc}</p>

          <div className="flex items-center justify-first gap-2 mb-2">
            <span className="text-[16px] font-semibold text-black">{price}</span>
            <span className="text-[10px] text-gray-500">Per Night</span>
          </div>

          <div className="flex items-center text-[10px] text-gray-600 mb-3 space-x-3">
            <div className="flex items-center gap-0.5">
              <Warehouse className="w-2.5 h-2.5" />
              {bedrooms} Bedroom
            </div>
            <div className="flex items-center gap-0.5">
              <Bath className="w-2.5 h-2.5" />
              {bathrooms} Bathroom
            </div>
            <div className="flex items-center gap-0.5">
              <Maximize className="w-2.5 h-2.5" />
              {area}
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button className="flex-1 rounded-4xl bg-[#1976D2] text-gray-50 text-[16px] font-medium py-3 mr-6 ">
              Book Now
            </button>
            <button className="w-7 h-7 border border- bg-[#a5d4f4]  flex items-center justify-center rounded-2xl">
              <Info className="w-6 h-4 text-blue-500 " />
            </button>
          </div>
        </div>
      </div>
      );

      export default YouMayAlsoLike;
