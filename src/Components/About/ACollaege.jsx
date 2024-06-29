import React, { useEffect } from 'react';
import out from '../../assets/drive-download-20240615T053340Z-001/out.jpg';
import room1 from '../../assets/drive-download-20240615T053340Z-001/room1.jpg';
import ayodhya from '../../assets/drive-download-20240615T053340Z-001/ayodhya.webp';
import flower from '../../assets/drive-download-20240615T053340Z-001/flower.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ACollaege() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <div className='text-black flex flex-col justify-center'>
      <div className='bg-[rgb(255,243,224)] w-full rounded-l-3xl p-10' data-aos='fade-left'>
        <div className='flex flex-wrap justify-center items-center 2xl:w-4/5 xl:w-3/4 lg:w-2/3 md:w-1/2 mx-auto'>
          <div className='w-1/3 sm:w-1/2 p-1 relative group' style={{ transform: 'rotate(-2deg)' }}>
            <img className='h-52 w-full object-cover' src={out} alt='Outdoor scene' />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-75 transition duration-500'></div>
            <span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500'>
              Outdoor
            </span>
          </div>
          <div className='w-1/3 sm:w-1/2 p-1 relative group' style={{ transform: 'rotate(3deg)' }}>
            <img className='h-52 w-full object-cover' src={room1} alt='Room interior' />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-75 transition duration-500'></div>
            <span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500'>
              Room Interior
            </span>
          </div>
          <div className='w-1/3 sm:w-1/2 p-1 relative group' style={{ transform: 'rotate(-1deg)' }}>
            <img className='h-52 w-full object-cover' src={ayodhya} alt='Ayodhya scene' />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-75 transition duration-500'></div>
            <span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500'>
              Ayodhya
            </span>
          </div>
          <div className='w-1/3 sm:w-1/2 p-1 relative group sm:hidden' style={{ transform: 'rotate(2deg)' }}>
            <img className='h-52 w-full object-cover' src={flower} alt='Flower close-up' />
            <div className='absolute inset-0 bg-black opacity-25 group-hover:opacity-75 transition duration-500'></div>
            <span className='absolute inset-0 flex items-center justify-center text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition duration-500'>
              Flower
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ACollaege;
