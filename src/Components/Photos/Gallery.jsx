import React from 'react';
import { Photo } from './Photo'; // Assuming you have a Photo component

function Gallery() {
  return (
    <div className="text-black">
      <div className="flex flex-col py-10 gap-5 justify-center overflow-hidden">
        <div className="flex text-4xl tracking-wider justify-center underline underline-offset-8 decoration-2 decoration-yellow-500">
          <h4>Gallery</h4>
        </div>
        <div className="flex font-light text-yellow-500 justify-center">
          <p>Peek Into Our World</p>
        </div>
        <div className="flex justify-between gap-5" id="slider">
          {Photo.map((P, index) => (
            <img
              key={index} // Add a unique key for each image
              src={P.img}
              alt="AirMax Pro"
              className="h-72 w-96 rounded-md object-cover hover:scale-105"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
