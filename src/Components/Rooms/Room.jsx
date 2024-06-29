import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import room1 from '../../assets/drive-download-20240615T053340Z-001/room1.jpg'
import room2 from '../../assets/drive-download-20240615T053340Z-001/room2.jpg'
import room3 from '../../assets/drive-download-20240615T053340Z-001/room3.jpg'
import room4 from '../../assets/drive-download-20240615T053340Z-001/room4.jpg'
import room5 from '../../assets/drive-download-20240615T053340Z-001/room5.jpg'
import room6 from '../../assets/drive-download-20240615T053340Z-001/room6.jpg'


const Rooms = [
  {
    name: "Cozy Heaven Room",
    img: room1,
    desc: "Escape to comfort in our Cozy Haven Room, a snug retreat designed for intimate relaxation.",
    price: "1000",
  },
  {
    name: "Spacious Serenity Suite",
    img: room2,
    desc: "Indulge in luxury and ample space in our Spacious Serenity Suite, where tranquility meets roomy elegance.",
    price: "1500",
  },
  {
    name: "Urban Retreat",
    img: room3,
    desc: "Spacious and inviting, perfect for creating cherished memories with loved ones.",
    price: "1600",
  },
  {
    name: "Vintage Vibes",
    img: room4,
    desc: "A nostalgic room with retro decor, antique furnishings, and a timeless charm that takes you back to a different era.",
    price: "1700",
  },
  {
    name: "Tranquil Oasis",
    img: room5,
    desc: "A serene and peaceful room featuring natural elements, calming colors, and a minimalist design that promotes rest and rejuvenation.",
    price: "1100",
  },
  {
    name: "Sunny Sanctuary",
    img: room6,
    desc: "A bright and airy space with large windows, light colors, and cheerful decor that bring the outdoors in and fill the room with positive energy.",
    price: "1800",
  },
];

function Room() {
  return (
    <div className='flex overflow-x-scroll overscroll-hidden mt-10 scroll-smooth gap-10'id='scroll' style={{ flexWrap: 'nowrap' }}>
  {Rooms.map((R, index) => (
    <div key={index} className="flex max-w-2xl hover:scale-95 duration-1000 h-72 w-full ml-2 text-black p-5 items-center rounded-lg gap-10 border border-black md:flex-row">
      <div className="flex md:h-[200px] md:w-96">
        <img
          src={R.img}
          alt={`${R.name} room photo`} 
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            {R.name}
          </h1>
          <p className="mt-3 text-sm text-pretty text-justify">{R.desc}</p>
          <div className="mt-4">
           
          </div>
          <div className="mt-3 flex items-center space-x-2">
            Starting from ₹{R.price}/Night
          </div>
        </div>
        <div>
        <a href="/Booking">
          <button className='sm:flex sm:gap-4 md:gap-5 rounded-lg justify-center border-yellow-400 w-44 border-solid p-2 text-xl bg-yellow-500'>
            Book now
          </button>
        </a>
        </div>
      </div>
    </div>
  ))}
</div>
)
}
 export default Room 