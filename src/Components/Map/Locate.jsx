import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass  } from "@fortawesome/free-regular-svg-icons";

function Locate() {
  return (
    <div className='h-full flex flex-col p-6 lg:p-16 gap-10 justify-between bg-white'>
      <div className='flex flex-col lg:flex-row justify-between p-5 rounded-lg align-middle w-full'>
        <div>
          <div className='flex items-center'>
            <h1 className='text-2xl lg:text-4xl font-semibold text-yellow-600'>
              How to Reach
            </h1>
            <FontAwesomeIcon className="h-5 sm:h-6 md:h-7 lg:h-8 ml-2 text-yellow-600" icon={faCompass} />
          </div>
          <h5 className='text-sm lg:text-base text-black tracking-wide drop-shadow-xl shadow-black font-medium'>
            "Discover your path to comfort and convenience with our detailed hotel map."
          </h5>
        </div>
        <div className='mt-4 lg:mt-0'>
          <a href="https://www.google.com/maps/dir//Kingsukh+Guest+House+beside+Barshal+Water+Tank+Manpur,+Barhanti,+West+Bengal+723156/@23.5863324,86.8597904,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!2m2!1d86.8597904!2d23.5863324?entry=ttu">
            <button className='rounded-lg px-4 py-2 text-lg lg:text-xl bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg'>
              Get Direction
            </button>
          </a>
        </div>
      </div>
      <div className='w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501735122556!2d86.85721547510983!3d23.586332378782714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1718648028542!5m2!1sen!2sin"
          className='w-full h-80 lg:h-96 border-none'
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
}

export default Locate;
