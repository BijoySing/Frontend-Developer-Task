import { CheckCircle, Users, Wifi, Snowflake, Building } from 'lucide-react';

const roomTypes = [
  {
    name: 'Deluxe Double Room',
    size: '28 m²',
    bedInfo: '1 king bed',
    bathroom: '1 bathroom',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Balcony'],
    guests: '2 Adults, 1 Child',
    price: '282',
    currency: 'USD',
    included: 'Breakfast included',
    available: 'Only 4 rooms left',
    cancellation: 'Free cancellation',
  },
  {
    name: 'Executive Suite',
    size: '35 m²',
    bedInfo: '1 king bed',
    bathroom: '1 bathroom',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Balcony'],
    guests: '2 Adults, 1 Child', 
    price: '382',
    currency: 'USD',
    included: 'Breakfast included',
    available: 'Only 2 rooms left',
    cancellation: 'Free cancellation',
  },
  {
    name: 'Premium Suite',
    size: '42 m²',
    bedInfo: '1 king bed',
    bathroom: '1 bathroom',
    amenities: ['Wi-Fi', 'Air Conditioning', 'Balcony'],
    guests: '2 Adults, 1 Child',
    price: '482',
    currency: 'USD', 
    included: 'Breakfast included',
    available: 'Only 1 room left',
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

export default function AvailabilityTable() {
  return (
    <div className="max-w-[1108px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-blue-600 text-white border-b border-blue-500">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 text-sm font-medium">
          <div className="col-span-3 border-r border-blue-500 pr-4">Room type</div>
          <div className="col-span-2 border-r border-blue-500 pr-4">Number of guests</div>
          <div className="col-span-2 border-r border-blue-500 pr-4">Price for 1 week</div>
          <div className="col-span-2 border-r border-blue-500 pr-4">Your choices</div>
          <div className="col-span-2 border-r border-blue-500 pr-4">Select rooms</div>
          <div className="col-span-1">Book now</div>
        </div>
      </div>

      {/* Room Rows */}
      <div className="divide-y divide-gray-300">
        {roomTypes.map((room, index) => (
          <div key={index} className="grid grid-cols-12 gap-4 px-6 py-6 hover:bg-gray-50 transition-colors border-b border-gray-200">
            
            {/* Room Type */}
            <div className="col-span-3 border-r border-gray-200 pr-4">
              <div className="space-y-2">
                <h3 className="font-semibold text-gray-900">{room.name}</h3>
                <div className="text-sm text-gray-600">
                  <div>{room.size}</div>
                  <div>{room.bedInfo}</div>
                  <div>{room.bathroom}</div>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {room.amenities.map((amenity, i) => (
                    <div key={i} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      {getAmenityIcon(amenity)}
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Number of Guests */}
            <div className="col-span-2 border-r border-gray-200 pr-4 flex items-start pt-2">
              <div className="flex items-center text-sm text-gray-700">
                <Users className="w-4 h-4 mr-2" />
                <span>{room.guests}</span>
              </div>
            </div>

            {/* Price */}
            <div className="col-span-2 border-r border-gray-200 pr-4 pt-2">
              <div className="space-y-1">
                <div className="text-xl font-bold text-gray-900">
                  {room.currency} {room.price}
                </div>
                <div className="text-sm text-green-600 font-medium">
                  {room.included}
                </div>
                <div className="text-sm text-red-500">
                  {room.available}
                </div>
              </div>
            </div>

            {/* Your Choices */}
            <div className="col-span-2 border-r border-gray-200 pr-4 pt-2">
              <div className="flex items-center text-sm text-green-600">
                <CheckCircle className="w-4 h-4 mr-2" />
                <span>{room.cancellation}</span>
              </div>
            </div>

            {/* Select Rooms */}
            <div className="col-span-2 border-r border-gray-200 pr-4 pt-2">
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-sm">
                <option value="1">1 room</option>
                <option value="2">2 rooms</option>
                <option value="3">3 rooms</option>
              </select>
            </div>

            {/* Book Now Button */}
            <div className="col-span-1 pt-2">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors">
                Reserve
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}