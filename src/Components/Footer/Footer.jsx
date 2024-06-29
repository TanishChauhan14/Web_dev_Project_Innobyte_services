import React from 'react';
import logo from '../../assets/drive-download-20240615T053340Z-001/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram  } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className='bg-yellow-600 flex justify-center p-10 '>
        <div className=' flex flex-col gap-4'>
        <div className='flex justify-center'>
        <img className=' brightness-200  w-60' src={logo} alt='' />
        </div>
        <div className='flex justify-center gap-10'>
        <ul><FontAwesomeIcon className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000" icon={faTwitter} /></ul>
        <ul><FontAwesomeIcon className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000" icon={faFacebook} /></ul>
        <ul><FontAwesomeIcon className="h-6 sm:h-7 md:h-8 cursor-pointer hover:text-yellow-500 transition-all duration-1000" icon={faInstagram} /></ul>
        </div>
        <div className='flex justify-center gap-5'>
            <h3>+91 9007062180</h3>
            <h3>Kingsukh@gmail.com</h3>
        </div>
        <div className='flex justify-center '>
        Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
        </div>
        <hr class="h-px  my-1 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className='flex justify-center '>
          <h3>Copyright © 2024 KING SUKH GUEST HOUSE | Powered by KING SUKH</h3>
        </div>
        </div>
    </div>
  )
}

export default Footer