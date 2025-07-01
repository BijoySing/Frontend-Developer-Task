'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const hotels = [
  {
    name: 'The Grand Heritage',
    location: 'Downtown, New York',
    image: '/images/hotel-1.jpg',
    rating: 4.8,
    price: 189,
  },
  {
    name: 'Lakeview Resort',
    location: 'Geneva, Switzerland',
    image: '/images/hotel-2.jpg',
    rating: 4.7,
    price: 225,
  },
  {
    name: 'Urban Oasis',
    location: 'Tokyo, Japan',
    image: '/images/hotel-3.jpg',
    rating: 4.6,
    price: 199,
  },
];

export default function RoomList() {
  return (
    <section className="py-10 font-sans max-w-[1108px] mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">You may also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map((hotel, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-sm border overflow-hidden">
            <div className="h-48 relative">
              <Image
                src={hotel.image}
                alt={hotel.name}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4 space-y-2">
              <h3 className="text-base font-semibold text-gray-900">{hotel.name}</h3>
              <p className="text-sm text-gray-500">{hotel.location}</p>
              <div className="flex items-center text-sm text-gray-700">
                <Star className="w-4 h-4 text-yellow-500 mr-1" fill="#facc15" />
                {hotel.rating}
              </div>
              <div className="text-base font-bold text-gray-800">${hotel.price} / night</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
