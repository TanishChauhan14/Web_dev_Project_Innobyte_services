import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Para() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='flex justify-center flex-col p-4 md:pl-24 h-full md:w-3/5 lg:w-2/5'>
      <div className='justify-evenly flex w-full md:w-full gap-5 h-fit leading-5 flex-col' id='Aboutpara'>
        <div className='flex flex-col gap-3'>
          <p className='text-xl md:text-4xl text-black font-bold' data-aos="fade-right">
            About King Sukh :)
          </p>
          <p className='text-lg md:text-3xl text-yellow-600' data-aos="fade-right">
            The Best Holidays Start Here!
          </p>
        </div>
        <div>
          <p className='text-black leading-8 font-medium text-base md:text-lg tracking-wide' data-aos="fade-right">
            Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.
          </p>
        </div>
        <a href="/Booking">
          <div>
            <button className='sm:flex sm:gap-4 md:gap-5 rounded-lg justify-center border-yellow-400 w-44 border-solid p-2 text-xl bg-yellow-500'>
              Book now
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Para;
