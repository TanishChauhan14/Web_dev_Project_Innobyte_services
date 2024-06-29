import React from 'react';
import Navbar from '../Components/Home/Navbar';
import Main from '../Components/Home/Main';
import logo from "../assets/drive-download-20240615T053340Z-001/logo.png";

function Page1() {
  return (
    <div> 
      <div className='Page1 pt-4 flex bg-fixed brightness-90 justify-normal md:gap-20 gap-8 flex-col' id='Page1'>  
        <div>   
          <Navbar />
        </div>
        <div>
          <Main />
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='flex flex-col sm:flex-row brightness-95 w-full sm:w-5/6 h-auto sm:h-28 p-8 gap-4 sm:gap-10 rounded-xl shadow-md shadow-black -mt-12 text-black justify-between sm:justify-start bg-white'>
          <img className='w-40 h-20 sm:w-52 sm:h-24 -mt-6' src={logo} alt='Hotel Logo' />
          <p className='hidden lg:block text-sm lg:text-lg'>
            Indulge in luxury and unwind in style at our exquisite hotel, where every stay is a masterpiece of comfort and hospitality.
          </p>
          <a href="/Booking">
            <div>
              <button className='rounded-lg justify-center text-yellow-600 border-yellow-600 font-serif w-full sm:w-auto lg:w-60 border-solid p-2 text-base lg:text-lg border-2'>
                CHECK AVAILABILITY
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page1;