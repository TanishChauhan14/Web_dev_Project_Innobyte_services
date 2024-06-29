import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='flex flex-col h-96 justify-center items-center p-4'>
      <h4 data-aos="fade-down" className='text-lg md:text-2xl text-slate-300 font-bold'>
        Unique - Hospitality - Comfort
      </h4>
      <h2 data-aos="fade-up" className='text-3xl md:text-7xl font-medium md:tracking-wide drop-shadow-2xl text-center'>
        Make Yourself At Home
      </h2>
      <h2 data-aos="fade-up" className='text-2xl md:text-6xl font-medium tracking-wide text-center'>
        In our <span className='text-yellow-400'>Guest House.</span>
      </h2>
    </div>
  );
}

export default Main;
